import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import type { MenuOption } from '../../interfaces/menu.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-portfolio-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './portfolio-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioMenuComponent {
  menuOptions: MenuOption[] = [
    {
      route: 'home',
      label: 'Home',
      // icon: 'fa-solid fa-house',
    },
    {
      route: 'about',
      label: 'About me',
      // icon: 'fa-solid fa-note-sticky',
    },
    {
      route: 'projects',
      label: 'Projects',
      // icon: 'fa-solid fa-table',
    },
    {
      route: 'skills',
      label: 'Skills',
      // icon: 'fa-solid fa-note-sticky',
    },
    {
      route: 'contact',
      label: 'Contact',
      // icon: 'fa-solid fa-note-sticky',
    },
  ];

  // title = computed(() => {
  //   return '{-} kevmpr';
  //   // return '{-} Kevin';
  // });
}
