import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkillOption } from '../../interfaces/skill.interface';
import { ThemeService } from '../../services/theme.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-skills-page',
  imports: [TranslocoModule],
  templateUrl: './skills-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkillsPageComponent {
  theme = inject(ThemeService)

  hardSkillFrontOptions: SkillOption[] = [
    {
      routeImg: 'assets/svg/hard-skills/html.svg',
      label: 'HTML',
    },
    {
      routeImg: 'assets/svg/hard-skills/css.svg',
      label: 'CSS',
    },
    {
      routeImg: 'assets/svg/hard-skills/tailwind.svg',
      label: 'Tailwind CSS',
    },
    {
      routeImg: 'assets/svg/hard-skills/javascript.svg',
      label: 'JavaScript',
    },
    {
      routeImg: 'assets/svg/hard-skills/typescript.svg',
      label: 'TypeScript',
    },
    {
      routeImg: 'assets/svg/hard-skills/angular.svg',
      label: 'Angular',
    },
  ];

  hardSkillBackOptions: SkillOption[] = [
    {
      routeImg: 'assets/svg/hard-skills/nodejs.svg',
      label: 'Node.js',
    },
    {
      routeImg: 'assets/svg/hard-skills/express.svg',
      label: 'Express.js',
    },
    {
      routeImg: 'assets/svg/hard-skills/java.svg',
      label: 'Java',
    },
    {
      routeImg: 'assets/svg/hard-skills/spring.svg',
      label: 'Spring',
    },
  ];

  hardSkillDBOptions: SkillOption[] = [
    {
      routeImg: 'assets/svg/hard-skills/postgresql.svg',
      label: 'PostgreSQL',
    },
    {
      routeImg: 'assets/svg/hard-skills/mysql.svg',
      label: 'MySQL',
    },
  ];

  hardSkillCloudOptions: SkillOption[] = [
    {
      routeImg: 'assets/svg/hard-skills/azure.svg',
      label: 'Azure',
    },
    {
      routeImg: 'assets/svg/hard-skills/aws.svg',
      label: 'AWS',
    },
  ];

  hardSkillToolOptions: SkillOption[] = [
    {
      routeImg: 'assets/svg/hard-skills/docker.svg',
      label: 'Docker',
    },
    {
      routeImg: 'assets/svg/hard-skills/git.svg',
      label: 'Git',
    },
    {
      routeImg: 'assets/svg/hard-skills/trello.svg',
      label: 'Trello',
    },
    {
      routeImg: 'assets/svg/hard-skills/postman.svg',
      label: 'Postman',
    },
  ];

  softSkill1Options: SkillOption[] = [
    {
      routeImg: 'assets/svg/soft-skills/teamwork.svg',
      routeImgDark: 'assets/svg/soft-skills/teamwork-dark.svg',
      label: 'teamwork',
    },
    {
      routeImg: 'assets/svg/soft-skills/communication.svg',
      routeImgDark: 'assets/svg/soft-skills/communication-dark.svg',
      label: 'communicationActiveListening',
    },
    {
      routeImg: 'assets/svg/soft-skills/negotiation.svg',
      routeImgDark: 'assets/svg/soft-skills/negotiation-dark.svg',
      label: 'negotiation',
    },
  ];

  softSkill2Options: SkillOption[] = [
    {
      routeImg: 'assets/svg/soft-skills/criticalthinking.svg',
      routeImgDark: 'assets/svg/soft-skills/criticalthinking-dark.svg',
      label: 'criticalThinking',
    },
    {
      routeImg: 'assets/svg/soft-skills/adaptability.svg',
      routeImgDark: 'assets/svg/soft-skills/adaptability-dark.svg',
      label: 'adaptability',
    },
  ];

  softSkill3Options: SkillOption[] = [
    {
      routeImg: 'assets/svg/soft-skills/planningtime.svg',
      routeImgDark: 'assets/svg/soft-skills/planningtime-dark.svg',
      label: 'planningTimeManagement',
    },
    {
      routeImg: 'assets/svg/soft-skills/proethics.svg',
      routeImgDark: 'assets/svg/soft-skills/proethics-dark.svg',
      label: 'professionalEthics',
    },
  ];

  languageOptions: SkillOption[] = [
    {
      routeImg: 'assets/svg/spanish.svg',
      label: 'spanish',
    },
    {
      routeImg: 'assets/svg/english.svg',
      label: 'english',
    },
  ];

  async launchConfetti() {
    const { default: confetti } = await import('canvas-confetti');

    confetti({
      particleCount: 100,
      spread: 60,
      origin: { x: 0, y: 1 }, // Bottom-left
      angle: 60, // Shoots toward the center
      gravity: 0.8
    });

    // Top-right corner
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { x: 1, y: 1 }, // Bottom-right
      angle: 120, // Shoots toward the center
      gravity: 0.8
    });
  }
}

