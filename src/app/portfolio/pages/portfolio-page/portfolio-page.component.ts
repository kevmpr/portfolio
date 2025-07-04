import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { PortfolioMenuComponent } from '../../components/portfolio-menu/portfolio-menu.component';
import { RouterOutlet } from '@angular/router';
import { MenuService } from '../../services/menu.service';

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
  private finisherInstance: any = null;

  ngAfterViewInit(): void {
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
    const FinisherHeader = (window as any).FinisherHeader;
    if (!FinisherHeader) {
      console.warn('⚠️ FinisherHeader is not yet loaded.');
      return;
    }

    if (typeof FinisherHeader.prototype.destroy !== 'function') {
      FinisherHeader.prototype.destroy = function () {
        if (this.c && this.c.parentNode) {
          this.c.parentNode.removeChild(this.c);
        }
        this.__shouldStop = true;
      };

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

  private loadFinisherHeaderScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).FinisherHeader) {
        resolve();
        return;
      }

      const supportsES6 = (() => {
        try {
          new Function('(class Test {})');
          return true;
        } catch {
          return false;
        }
      })();

      const script = document.createElement('script');
      if (supportsES6) {
        script.type = 'module';
        script.src = 'assets/animations/finisher-header.es6.js';
      } else {
        script.src = 'assets/animations/finisher-header.es5.min.js';
        script.defer = true;
      }

      script.onload = () => {
        // Wait until window.FinisherHeader is defined (with a retry loop)
        const checkInterval = setInterval(() => {
          if ((window as any).FinisherHeader) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 50);

        // Optional timeout to reject if it never appears
        setTimeout(() => {
          clearInterval(checkInterval);
          if (!(window as any).FinisherHeader) {
            reject(
              new Error('FinisherHeader did not load after script onload')
            );
          }
        }, 3000);
      };

      script.onerror = () =>
        reject(new Error('Failed to load FinisherHeader script'));

      document.head.appendChild(script);
    });
  }

  private async initFinisherHeader(): Promise<void> {
    if (this.prefersReducedMotion) return;

    try {
      await this.loadFinisherHeaderScript();
      this.patchFinisherHeaderIfNeeded();
    } catch (err) {
      console.error(err);
      return;
    }

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
      const Constructor = (window as any).FinisherHeader;
      this.finisherInstance = new Constructor(config);
    }, 100);
  }
}
