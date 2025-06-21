import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillOption, SkillOptionDark } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skills-page',
  imports: [],
  templateUrl: './skills-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkillsPageComponent {
  hardSkillFrontOptions: SkillOption[] = [
    {
      route: 'assets/svg/hard-skills/html.svg',
      label: 'HTML',
    },
    {
      route: 'assets/svg/hard-skills/css.svg',
      label: 'CSS',
    },
    {
      route: 'assets/svg/hard-skills/tailwind.svg',
      label: 'Tailwind CSS',
    },
    {
      route: 'assets/svg/hard-skills/javascript.svg',
      label: 'Javascript',
    },
    {
      route: 'assets/svg/hard-skills/typescript.svg',
      label: 'Typescript',
    },
    {
      route: 'assets/svg/hard-skills/angular.svg',
      label: 'Angular',
    },
  ];

  hardSkillBackOptions: SkillOption[] = [
    {
      route: 'assets/svg/hard-skills/nodejs.svg',
      label: 'Node JS',
    },
    {
      route: 'assets/svg/hard-skills/express.svg',
      label: 'Express JS',
    },
    {
      route: 'assets/svg/hard-skills/java.svg',
      label: 'Java',
    },
    {
      route: 'assets/svg/hard-skills/spring.svg',
      label: 'Spring',
    }
  ];

   hardSkillDBOptions: SkillOption[] = [
    {
      route: 'assets/svg/hard-skills/postgresql.svg',
      label: 'PostgreSQL',
    },
    {
      route: 'assets/svg/hard-skills/mysql.svg',
      label: 'MySQL',
    }
  ];

  hardSkillCloudOptions: SkillOption[] = [
    {
      route: 'assets/svg/hard-skills/azure.svg',
      label: 'Azure',
    },
    {
      route: 'assets/svg/hard-skills/aws.svg',
      label: 'AWS',
    }
  ];

  hardSkillToolOptions: SkillOption[] = [
    {
      route: 'assets/svg/hard-skills/docker.svg',
      label: 'Docker',
    },
    {
      route: 'assets/svg/hard-skills/git.svg',
      label: 'Git',
    },
    {
      route: 'assets/svg/hard-skills/trello.svg',
      label: 'Trello',
    },
    {
      route: 'assets/svg/hard-skills/postman.svg',
      label: 'Postman',
    }
  ];

  softSkill1Options: SkillOptionDark[] = [
    {
      route: 'assets/svg/soft-skills/teamwork.svg',
      routeDark: 'assets/svg/soft-skills/teamwork-dark.svg',
      label: 'Teamwork',
    },
    {
      route: 'assets/svg/soft-skills/communication.svg',
      routeDark: 'assets/svg/soft-skills/communication-dark.svg',
      label: 'Communication and Active Listening',
    },
    {
      route: 'assets/svg/soft-skills/negotiation.svg',
      routeDark: 'assets/svg/soft-skills/negotiation-dark.svg',
      label: 'Negotiation',
    },
  ];

  softSkill2Options: SkillOptionDark[] = [
    {
      route: 'assets/svg/soft-skills/criticalthinking.svg',
      routeDark: 'assets/svg/soft-skills/criticalthinking-dark.svg',
      label: 'Critical Thinking',
    },
    {
      route: 'assets/svg/soft-skills/adaptability.svg',
      routeDark: 'assets/svg/soft-skills/adaptability-dark.svg',
      label: 'Adaptability',
    }
  ];

  softSkill3Options: SkillOptionDark[] = [
    {
      route: 'assets/svg/soft-skills/planningtime.svg',
      routeDark: 'assets/svg/soft-skills/planningtime-dark.svg',
      label: 'Planning and Time Management',
    },
    {
      route: 'assets/svg/soft-skills/proethics.svg',
      routeDark: 'assets/svg/soft-skills/proethics-dark.svg',
      label: 'Professional Ethics',
    }
  ];

  languageOptions: SkillOption[] = [
    {
      route: 'assets/svg/languages/spanish.svg',
      label: 'Spanish (Native)',
    },
    {
      route: 'assets/svg/languages/english.svg',
      label: 'English (Upper intermediate B2)',
    }
  ];

  //hover:scale-110 transition-transform duration-300 ease-in-out
}
