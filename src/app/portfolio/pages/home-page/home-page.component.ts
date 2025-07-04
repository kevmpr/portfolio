import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home-page',
  imports: [TranslocoModule],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
  theme = inject(ThemeService);
  language = inject(LanguageService)
  name: string = '<Kevin Maximiliano Palma Romero/>';


  async startSnow(): Promise<void> {
    const { default: confetti } = await import('canvas-confetti');

    const colors = signal<string[]>([]);

    if (this.theme.darkMode()) {
      colors.set(['#ffffff']); // light-blue & white
    } else {
      colors.set(['#090979']); // blue & white
    }

    const duration = 1.5 * 1000; // 1.5 seconds
    const animationEnd = Date.now() + duration;
    let skew = 1;

    const randomInRange = (min: number, max: number): number =>
      Math.random() * (max - min) + min;

    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      // SHORTER tick duration
      const ticks = Math.max(80, 150 * (timeLeft / duration)); // reduced max from 500 to 150
      skew = Math.max(0.8, skew - 0.01); // faster skew decay

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks, // lifetime
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        colors: colors(),
        shapes: ['circle'],
        gravity: randomInRange(0.6, 0.8), // faster fall
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
        zIndex: 0,
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    };

    frame(); // start animation
  }
}
