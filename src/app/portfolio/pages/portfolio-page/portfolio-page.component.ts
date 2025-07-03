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
  private prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  private animationTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private finisherInstance: any = null; // 👈 Guardamos la instancia activa

  ngAfterViewInit(): void {
    this.patchFinisherHeaderIfNeeded(); // 👈 Agrega esto

    this.initFinisherHeader();

    const observer = new MutationObserver(() => {
      this.stopAndScheduleNewAnimation();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private patchFinisherHeaderIfNeeded(): void {
    if (typeof FinisherHeader?.prototype?.destroy !== 'function') {
      // Agrega método destroy()
      FinisherHeader.prototype.destroy = function () {
        if (this.c && this.c.parentNode) {
          this.c.parentNode.removeChild(this.c);
        }
        this.__shouldStop = true;
      };

      // Sobrescribe el método 'an' (animación)
      const originalAnimate = FinisherHeader.prototype.an;
      FinisherHeader.prototype.an = function () {
        if (this.__shouldStop) return;
        requestAnimationFrame(this.an.bind(this));
        this.x.clearRect(0, 0, this.o.c.w, this.o.c.h);
        for (let i = 0; i < this.o.ac; i++) {
          this.ps[i].an(this.x, this.o.c.w, this.o.c.h);
        }
      };
    }
  }

  private stopAndScheduleNewAnimation(): void {
    if (
      this.finisherInstance &&
      typeof this.finisherInstance.destroy === 'function'
    ) {
      this.finisherInstance.destroy();
      this.finisherInstance = null;
    }

    const canvas = document.getElementById('finisher-canvas');
    if (canvas) {
      canvas.remove();
    }

    if (this.animationTimeoutId) {
      clearTimeout(this.animationTimeoutId);
      this.animationTimeoutId = null;
    }

    this.animationTimeoutId = setTimeout(() => {
      this.initFinisherHeader();
    }, 3000);
  }

  private initFinisherHeader(): void {
    if (this.prefersReducedMotion) return;

    const isDarkMode = document.documentElement.classList.contains('dark');

    const config = isDarkMode
      ? {
          // 🌑 Universo (modo oscuro)
          count: 50,
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
            background: '#EEEEF9',
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
