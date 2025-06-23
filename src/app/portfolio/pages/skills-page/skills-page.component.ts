import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkillOption } from '../../interfaces/skill.interface';
import confetti from 'canvas-confetti';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-skills-page',
  imports: [],
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
      label: 'Javascript',
    },
    {
      routeImg: 'assets/svg/hard-skills/typescript.svg',
      label: 'Typescript',
    },
    {
      routeImg: 'assets/svg/hard-skills/angular.svg',
      label: 'Angular',
    },
  ];

  hardSkillBackOptions: SkillOption[] = [
    {
      routeImg: 'assets/svg/hard-skills/nodejs.svg',
      label: 'Node JS',
    },
    {
      routeImg: 'assets/svg/hard-skills/express.svg',
      label: 'Express JS',
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
      label: 'Teamwork',
    },
    {
      routeImg: 'assets/svg/soft-skills/communication.svg',
      routeImgDark: 'assets/svg/soft-skills/communication-dark.svg',
      label: 'Communication and Active Listening',
    },
    {
      routeImg: 'assets/svg/soft-skills/negotiation.svg',
      routeImgDark: 'assets/svg/soft-skills/negotiation-dark.svg',
      label: 'Negotiation',
    },
  ];

  softSkill2Options: SkillOption[] = [
    {
      routeImg: 'assets/svg/soft-skills/criticalthinking.svg',
      routeImgDark: 'assets/svg/soft-skills/criticalthinking-dark.svg',
      label: 'Critical Thinking',
    },
    {
      routeImg: 'assets/svg/soft-skills/adaptability.svg',
      routeImgDark: 'assets/svg/soft-skills/adaptability-dark.svg',
      label: 'Adaptability',
    },
  ];

  softSkill3Options: SkillOption[] = [
    {
      routeImg: 'assets/svg/soft-skills/planningtime.svg',
      routeImgDark: 'assets/svg/soft-skills/planningtime-dark.svg',
      label: 'Planning and Time Management',
    },
    {
      routeImg: 'assets/svg/soft-skills/proethics.svg',
      routeImgDark: 'assets/svg/soft-skills/proethics-dark.svg',
      label: 'Professional Ethics',
    },
  ];

  languageOptions: SkillOption[] = [
    {
      routeImg: 'assets/svg/languages/spanish.svg',
      label: 'Spanish (Native)',
    },
    {
      routeImg: 'assets/svg/languages/english.svg',
      label: 'English (Upper intermediate B2)',
    },
  ];

  launchConfetti(): void {
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

