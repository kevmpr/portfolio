import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { PortfolioMenuComponent } from '../../components/portfolio-menu/portfolio-menu.component';
import { RouterOutlet } from '@angular/router';
import { MenuService } from '../../services/menu.service';

declare var FinisherHeader: any;

@Component({
  selector: 'app-portfolio-page',
  imports: [RouterOutlet, PortfolioMenuComponent],
  templateUrl: './portfolio-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioPageComponent implements AfterViewInit {
  menuService = inject(MenuService);

  ngAfterViewInit(): void {
    this.initFinisherHeader();

    // Detecta cambio en la clase "dark" en tiempo real
    const observer = new MutationObserver(() => {
      this.reInitFinisherHeader();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private reInitFinisherHeader(): void {
    const canvas = document.querySelector('canvas.finisher-canvas');
    if (canvas) canvas.remove();

    this.initFinisherHeader();
  }

  private initFinisherHeader(): void {
    const isDarkMode = document.documentElement.classList.contains('dark');

    const config = isDarkMode
      ? {
          // 🌑 Universo (modo oscuro)
          count: 100,
          size: { min: 2, max: 8, pulse: 0 },
          speed: {
            x: { min: 0, max: 0.1 },
            y: { min: 0, max: 0.2 },
          },
          colors: {
            background: '#101010',
            particles: ['#fbfcca', '#d7f3fe', '#ffd0a7'],
          },
          blending: 'overlay',
          opacity: { center: 1, edge: 0 },
          skew: 0,
          shapes: ['c'],
        }
      : {
          // ☀️ Tu configuración original (modo claro)
          count: 4,
          size: {
            min: 1200,
            max: 1500,
            pulse: 0.1,
          },
          speed: {
            x: { min: 0, max: 0.3 },
            y: { min: 0, max: 0.5 },
          },
          colors: {
            background: '#ffffff',
            particles: ['#efedf8', '#f2dfdf', '#d3dbf2', '#d8eedb'],
          },
          blending: 'lighten',
          opacity: { center: 0.8, edge: 0.2 },
          skew: 0,
          shapes: ['s', 'c', 't'],
        };

    setTimeout(() => {
      new FinisherHeader(config);
    }, 100);
  }
}
