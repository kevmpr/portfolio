import { ChangeDetectionStrategy, Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent {
  startSchoolPride(): void {
    const duration = 1.5 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ['#090979', '#ffffff']; // blue & white

    const frame = () => {
      // Left side burst
      confetti({
        particleCount: 2,
        angle: 320,
        spread: 55,
        origin: { x: 0, y: 0 },
        colors: colors
      });

      // Center burst
      confetti({
        particleCount: 2,
        angle: 270,
        spread: 55,
        origin: { x: 0.5, y: -0.5 },
        colors: colors
      });

      // Right side burst
      confetti({
        particleCount: 2,
        angle: 220,
        spread: 55,
        origin: { x: 1, y: 0 },
        colors: colors
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame(); // Start animation
  }
}
