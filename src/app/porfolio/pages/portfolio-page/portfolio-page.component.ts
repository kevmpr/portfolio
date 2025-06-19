import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioMenuComponent } from "../../components/portfolio-menu/portfolio-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  imports: [RouterOutlet, PortfolioMenuComponent, PortfolioMenuComponent],
  templateUrl: './portfolio-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioPageComponent {}
