import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioMenuComponent } from "../../components/portfolio-menu/portfolio-menu.component";
import { RouterOutlet } from '@angular/router';

declare var FinisherHeader: any;

@Component({
  selector: 'app-portfolio-page',
  imports: [RouterOutlet, PortfolioMenuComponent, PortfolioMenuComponent],
  templateUrl: './portfolio-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new FinisherHeader({
      count: 4,
      size: {
        min: 1200,
        max: 1500,
        pulse: 0.1,
      },
      speed: {
        x: {
          min: 0,
          max: 0.3,
        },
        y: {
          min: 0,
          max: 0.5,
        },
      },
      colors: {
        background: '#ffffff',
        particles: ['#efedf8', '#f2dfdf', '#d3dbf2', '#d8eedb'],
      },
      blending: 'lighten',
      opacity: {
        center: 0.8,
        edge: 0.2,
      },
      skew: 0,
      shapes: ['s', 'c', 't'],
    });
  }
}
