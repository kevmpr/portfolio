import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import confetti from 'canvas-confetti';
import { Contact } from '../../interfaces/contact.interface';
import { ThemeService } from '../../services/theme.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contact-page',
  imports: [TranslocoModule],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent {
  theme = inject(ThemeService);

  contactLinks: Contact[] = [
    {
      routeImg: 'assets/svg/email.svg',
      label: 'Email',
      url: 'mailto:kev.mpr03@gmail.com',
    },
    {
      routeImg: 'assets/svg/linkedin.svg',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kevin-m-palma-r/',
    },
    {
      routeImg: 'assets/svg/github-light.svg',
      routeImgDark: 'assets/svg/github-dark.svg',
      label: 'Github',
      url: 'https://github.com/kevmpr',
    },
    {
      routeImg: 'assets/svg/cv.svg',
      label: 'CV',
      url: 'home.cv',
    },
  ];

  startSchoolPride(): void {
    const duration = 1 * 1000;
    const animationEnd = Date.now() + duration;

    const colors = signal<string[]>([]);

    if (this.theme.darkMode()) {
      colors.set(['#0d92f4', '#ffffff']); // light-blue & white
    } else {
      colors.set(['#090979', '#ffffff']); // blue & white
    }


    const frame = () => {
      // Left side burst
      confetti({
        particleCount: 2,
        angle: 320,
        spread: 55,
        origin: { x: 0, y: 0 },
        colors: colors(),
      });

      // Center burst
      confetti({
        particleCount: 2,
        angle: 270,
        spread: 55,
        origin: { x: 0.5, y: -0.5 },
        colors: colors(),
      });

      // Right side burst
      confetti({
        particleCount: 2,
        angle: 220,
        spread: 55,
        origin: { x: 1, y: 0 },
        colors: colors(),
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame(); // Start animation
  }
}
