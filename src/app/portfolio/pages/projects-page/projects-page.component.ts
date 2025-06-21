import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { Project } from '../../interfaces/project.interface';

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
        route: 'assets/svg/hard-skills/spring.svg',
        label: 'Spring Boot',
      },
      {
        route: 'assets/svg/hard-skills/postgresql.svg',
        label: 'PostgreSQL',
      },
      {
        route: 'assets/svg/hard-skills/docker.svg',
        label: 'Docker',
      },
      {
        route: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        route: 'assets/svg/hard-skills/postman.svg',
        label: 'Postman',
      },
      {
        route: 'assets/svg/hard-skills/trello.svg',
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
        route: 'assets/svg/hard-skills/java.svg',
        label: 'Java',
      },
      {
        route: 'assets/svg/hard-skills/mysql.svg',
        label: 'MySQL',
      },
      {
        route: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        route: 'assets/svg/hard-skills/trello.svg',
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
        route: 'assets/svg/hard-skills/spring.svg',
        label: 'Spring',
      },
      {
        route: 'assets/svg/hard-skills/postgresql.svg',
        label: 'PostgreSQL',
      },
      {
        route: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        route: 'assets/svg/hard-skills/postman.svg',
        label: 'Postman',
      },
      {
        route: 'assets/svg/hard-skills/trello.svg',
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
        route: 'assets/svg/hard-skills/java.svg',
        label: 'Java',
      },
      {
        route: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        route: 'assets/svg/hard-skills/postman.svg',
        label: 'Postman',
      },
      {
        route: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      }
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
        route: 'assets/svg/hard-skills/javascript.svg',
        label: 'Javascript',
      },
      {
        route: 'assets/svg/hard-skills/css.svg',
        label: 'CSS',
      },
      {
        route: 'assets/svg/hard-skills/html.svg',
        label: 'HTML',
      },
      {
        route: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        route: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      }
    ]
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
      }
    ],
    rol: 'Front End Developer',
    date: 'March 2024',
    description: [
      '• Design and structure web pages using HTML.',
      '• Style and format with CSS to ensure an attractive and functional user experience.',
    ],
    tools: [
      {
        route: 'assets/svg/hard-skills/css.svg',
        label: 'CSS',
      },
      {
        route: 'assets/svg/hard-skills/html.svg',
        label: 'HTML',
      },
      {
        route: 'assets/svg/hard-skills/git.svg',
        label: 'Git',
      },
      {
        route: 'assets/svg/hard-skills/trello.svg',
        label: 'Trello',
      }
    ]
  };

  projectsPortfolio = signal<Project[]>([
    this.projectInventoryManagement,
    this.projectDogGrooming,
    this.projectBookFinder,
    this.projectCurrencyConverter,
    this.projectTextEncryptor,
    this.projectFoodStore
  ]);
}
