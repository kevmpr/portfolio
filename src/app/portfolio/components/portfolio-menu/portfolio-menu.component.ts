import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import type { MenuOption } from '../../interfaces/menu.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-portfolio-menu',
  imports: [RouterLink, RouterLinkActive, TranslocoModule],
  templateUrl: './portfolio-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioMenuComponent {
  constructor(
    private themeService: ThemeService,
    public langService: LanguageService
  ) {}

  theme = inject(ThemeService);

  menuOptions: MenuOption[] = [
    {
      route: 'home',
      label: 'home',
      // icon: 'fa-solid fa-house',
    },
    {
      route: 'aboutme',
      label: 'aboutMe',
      // icon: 'fa-solid fa-note-sticky',
    },
    {
      route: 'projects',
      label: 'projects',
      // icon: 'fa-solid fa-table',
    },
    {
      route: 'skills',
      label: 'skills',
      // icon: 'fa-solid fa-note-sticky',
    },
    {
      route: 'contact',
      label: 'contact',
      // icon: 'fa-solid fa-note-sticky',
    },
  ];

  onToggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onToggleLanguage() {
    this.langService.onToggleLanguage();
  }
}
