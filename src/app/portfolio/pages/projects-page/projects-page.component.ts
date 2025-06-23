import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-projects-page',
  imports: [],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsPageComponent {
  projectInventoryManagement: Project = {
    title: 'Inventory Management',
    routeImg: 'assets/img/projects/projectInventoryManagement.webp',
    urls: [
      {
        url: 'https://github.com/kevmpr/inventory_management_app',
        label: 'GitHub',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_inventory-management-activity-7320111920328368129-xqm8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQyJ4QBoNuIcINL9k7qNgBaf-W5E-reiE8',
        label: 'LinkedIn',
      },
    ],
    rol: 'Back End Developer',
    date: 'April 2025',
    description: [
      '• Develop a product, customer, and sales management system using a multi-layered architecture.',
      '• Implement CRUD operations with entity relationships using JPA/Hibernate and PostgreSQL.',
      '• Automate deployment with Docker and Render, solving connection and configuration issues.',
      '• Apply best practices, design patterns, and manage dependencies with Maven.',
    ],
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
    title: 'Dog Grooming',
    routeImg: 'assets/img/projects/projectDogGrooming.webp',
    urls: [
      {
        url: 'https://github.com/kevmpr/dogGrooming',
        label: 'GitHub',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_java-mysql-programaciaejn-activity-7284639078170398720-bCV8?utm_source=share&utm_medium=member_desktop',
        label: 'LinkedIn',
      },
    ],
    rol: 'Back End Developer',
    date: 'January 2025',
    description: [
      '• Develop an application for managing a dog grooming service.',
      '• Implement functionalities to register, view, edit, and delete information about dogs and their owners.',
      '• Design a user-friendly and intuitive graphical interface using Swing.',
      '• Ensure code quality by applying good practices and development standards.',
    ],
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
    title: 'Book Finder',
    routeImg: 'assets/img/projects/projectBookFinder.webp',
    urls: [
      {
        url: 'https://github.com/kevmpr/literAluraOne',
        label: 'GitHub',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_aluralatam-oraclenexteducation-java-activity-7277028539122528257-nEly?utm_source=share&utm_medium=member_desktop',
        label: 'LinkedIn',
      },
    ],
    rol: 'Back End Developer',
    date: 'December 2024',
    description: [
      '• Implement an efficient and functional book search engine.',
      '• Integrate the Gutendex API to retrieve book data.',
      '• Design an architecture based on patterns such as model, repository, and service.',
      '• Manage a PostgreSQL database to store and query information.',
    ],
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
    title: 'Currency Converter',
    routeImg: 'assets/img/projects/projectCurrencyConverter.webp',
    urls: [
      {
        url: 'https://github.com/kevmpr/conversorMonedaOne',
        label: 'GitHub',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_aluralatam-oraclenexteducation-activity-7253125316636790784-ta60?utm_source=share&utm_medium=member_desktop',
        label: 'LinkedIn',
      },
    ],
    rol: 'Back End Developer',
    date: 'October 2024',
    description: [
      '• Create a currency converter with Java.',
      '• Handle the ExchangeRate-API.',
      '• Use packages, libraries, and imports.',
      '• Handle errors.',
    ],
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
    title: 'Text Encryptor',
    routeImg: 'assets/img/projects/projectTextEncryptor.webp',
    urls: [
      {
        url: 'https://kevmpr.github.io/encriptadorONE/index.html',
        label: 'Web Site',
      },
      {
        url: 'https://github.com/kevmpr/encriptadorONE',
        label: 'GitHub',
      },
      {
        url: 'https://www.linkedin.com/posts/kevin-m-palma-r_aluralatam-oraclenexteducation-activity-7225571404170035201-Vyls?utm_source=share&utm_medium=member_desktop',
        label: 'LinkedIn',
      },
    ],
    rol: 'Front End Developerr',
    date: 'August 2024',
    description: [
      '• Create an encryptor using JavaScript.',
      '• Create a decryptor using JavaScript.',
      '• Implement the design made in Figma into code using HTML and CSS.',
      '• Create a responsive design for different screen resolutions.',
    ],
    tools: [
      {
        routeImg: 'assets/svg/hard-skills/javascript.svg',
        label: 'Javascript',
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
    title: 'Food Store',
    routeImg: 'assets/img/projects/projectFoodStore.webp',
    urls: [
      {
        url: 'https://kevmpr.github.io/almacen_kelma/',
        label: 'Web Site',
      },
      {
        url: 'https://github.com/kevmpr/almacen_kelma',
        label: 'GitHub',
      },
    ],
    rol: 'Front End Developer',
    date: 'March 2024',
    description: [
      '• Design and structure web pages using HTML.',
      '• Style and format with CSS to ensure an attractive and functional user experience.',
    ],
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

  startConfetti() {
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
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
    }
}
