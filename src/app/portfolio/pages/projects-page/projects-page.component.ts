import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { TranslocoModule } from '@jsverse/transloco';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  imports: [TranslocoModule, NgClass],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsPageComponent {
  themeService = inject(ThemeService);

  activeProjectId: string | null = null;

  @ViewChildren('projectContainer') projectRefs!: QueryList<ElementRef>;

  toggleLinks(projectId: string): void {
    this.activeProjectId =
      this.activeProjectId === projectId ? null : projectId;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (!this.projectRefs || this.projectRefs.length === 0) return;

    const clickedInside = this.projectRefs.some((ref) =>
      ref.nativeElement.contains(event.target)
    );
    if (!clickedInside) {
      this.activeProjectId = null;
    }
  }

  projectInventoryManagement: Project = {
    key: 'inventoryManagement',
    title: 'title',
    routeImg: 'assets/img/projects/projectInventoryManagement.webp',
    urls: [
      {
        url: 'https://github.com/kevmpr/inventory_management_app',
        routeImg: 'assets/svg/github-light.svg',
        routeImgDark: 'assets/svg/github-dark.svg',
        label: 'repository',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_inventory-management-activity-7320111920328368129-xqm8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQyJ4QBoNuIcINL9k7qNgBaf-W5E-reiE8',
        routeImg: 'assets/svg/post-light.svg',
        routeImgDark: 'assets/svg/post-dark.svg',
        label: 'post',
      },
    ],
    rol: 'rol',
    date: 'interval',
    description: ['text1', 'text2', 'text3', 'text4'],
    tools: [
      {
        routeImg: 'assets/svg/hard-skills/spring.svg',
        label: 'Spring Boot',
      },
      {
        routeImg: 'assets/svg/hard-skills/postgresql.svg',
        label: 'PostgreSQL',
      },
      {
        routeImg: 'assets/svg/hard-skills/docker.svg',
        label: 'Docker',
      },
      {
        routeImg: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        routeImg: 'assets/svg/hard-skills/postman.svg',
        label: 'Postman',
      },
      {
        routeImg: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      },
    ],
  };

  projectDogGrooming: Project = {
    key: 'dogGrooming',
    title: 'title',
    routeImg: 'assets/img/projects/projectDogGrooming.webp',
    urls: [
      {
        url: 'https://github.com/kevmpr/dogGrooming',
        routeImg: 'assets/svg/github-light.svg',
        routeImgDark: 'assets/svg/github-dark.svg',
        label: 'repository',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_java-mysql-programaciaejn-activity-7284639078170398720-bCV8?utm_source=share&utm_medium=member_desktop',
        routeImg: 'assets/svg/post-light.svg',
        routeImgDark: 'assets/svg/post-dark.svg',
        label: 'post',
      },
    ],
    rol: 'rol',
    date: 'interval',
    description: ['text1', 'text2', 'text3', 'text4'],
    tools: [
      {
        routeImg: 'assets/svg/hard-skills/java.svg',
        label: 'Java',
      },
      {
        routeImg: 'assets/svg/hard-skills/mysql.svg',
        label: 'MySQL',
      },
      {
        routeImg: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        routeImg: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      },
    ],
  };

  projectBookFinder: Project = {
    key: 'bookFinder',
    title: 'title',
    routeImg: 'assets/img/projects/projectBookFinder.webp',
    urls: [
      {
        url: 'https://github.com/kevmpr/literAluraOne',
        routeImg: 'assets/svg/github-light.svg',
        routeImgDark: 'assets/svg/github-dark.svg',
        label: 'repository',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_aluralatam-oraclenexteducation-java-activity-7277028539122528257-nEly?utm_source=share&utm_medium=member_desktop',
        routeImg: 'assets/svg/post-light.svg',
        routeImgDark: 'assets/svg/post-dark.svg',
        label: 'post',
      },
    ],
    rol: 'rol',
    date: 'interval',
    description: ['text1', 'text2', 'text3', 'text4'],
    tools: [
      {
        routeImg: 'assets/svg/hard-skills/spring.svg',
        label: 'Spring',
      },
      {
        routeImg: 'assets/svg/hard-skills/postgresql.svg',
        label: 'PostgreSQL',
      },
      {
        routeImg: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        routeImg: 'assets/svg/hard-skills/postman.svg',
        label: 'Postman',
      },
      {
        routeImg: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      },
    ],
  };

  projectCurrencyConverter: Project = {
    key: 'currencyConverter',
    title: 'title',
    routeImg: 'assets/img/projects/projectCurrencyConverter.webp',
    urls: [
      {
        url: 'https://github.com/kevmpr/conversorMonedaOne',
        routeImg: 'assets/svg/github-light.svg',
        routeImgDark: 'assets/svg/github-dark.svg',
        label: 'repository',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_aluralatam-oraclenexteducation-activity-7253125316636790784-ta60?utm_source=share&utm_medium=member_desktop',
        routeImg: 'assets/svg/post-light.svg',
        routeImgDark: 'assets/svg/post-dark.svg',
        label: 'post',
      },
    ],
    rol: 'rol',
    date: 'interval',
    description: ['text1', 'text2', 'text3', 'text4'],
    tools: [
      {
        routeImg: 'assets/svg/hard-skills/java.svg',
        label: 'Java',
      },
      {
        routeImg: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        routeImg: 'assets/svg/hard-skills/postman.svg',
        label: 'Postman',
      },
      {
        routeImg: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      },
    ],
  };

  projectTextEncryptor: Project = {
    key: 'textEncryptor',
    title: 'title',
    routeImg: 'assets/img/projects/projectTextEncryptor.webp',
    urls: [
      {
        url: 'https://kevmpr.github.io/encriptadorONE/index.html',
        routeImg: 'assets/svg/web-light.svg',
        routeImgDark: 'assets/svg/web-dark.svg',
        label: 'website',
      },
      {
        url: 'https://github.com/kevmpr/encriptadorONE',
        routeImg: 'assets/svg/github-light.svg',
        routeImgDark: 'assets/svg/github-dark.svg',
        label: 'repository',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_aluralatam-oraclenexteducation-activity-7225571404170035201-Vyls?utm_source=share&utm_medium=member_desktop',
        routeImg: 'assets/svg/post-light.svg',
        routeImgDark: 'assets/svg/post-dark.svg',
        label: 'post',
      },
    ],
    rol: 'rol',
    date: 'interval',
    description: ['text1', 'text2', 'text3', 'text4'],
    tools: [
      {
        routeImg: 'assets/svg/hard-skills/javascript.svg',
        label: 'JavaScript',
      },
      {
        routeImg: 'assets/svg/hard-skills/css.svg',
        label: 'CSS',
      },
      {
        routeImg: 'assets/svg/hard-skills/html.svg',
        label: 'HTML',
      },
      {
        routeImg: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        routeImg: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      },
    ],
  };

  projectFoodStore: Project = {
    key: 'foodStore',
    title: 'title',
    routeImg: 'assets/img/projects/projectFoodStore.webp',
    urls: [
      {
        url: 'https://kevmpr.github.io/almacen_kelma/',
        routeImg: 'assets/svg/web-light.svg',
        routeImgDark: 'assets/svg/web-dark.svg',
        label: 'website',
      },
      {
        url: 'https://github.com/kevmpr/almacen_kelma',
        routeImg: 'assets/svg/github-light.svg',
        routeImgDark: 'assets/svg/github-dark.svg',
        label: 'repository',
      },
    ],
    rol: 'rol',
    date: 'interval',
    description: ['text1', 'text2'],
    tools: [
      {
        routeImg: 'assets/svg/hard-skills/css.svg',
        label: 'CSS',
      },
      {
        routeImg: 'assets/svg/hard-skills/html.svg',
        label: 'HTML',
      },
      {
        routeImg: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        routeImg: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      },
    ],
  };

  projectsPortfolio = signal<Project[]>([
    this.projectInventoryManagement,
    this.projectDogGrooming,
    this.projectBookFinder,
    this.projectCurrencyConverter,
    this.projectTextEncryptor,
    this.projectFoodStore,
  ]);

  async startConfetti() {
    const { default: confetti } = await import('canvas-confetti');

    const duration = 3 * 1000; // 3 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }
}
