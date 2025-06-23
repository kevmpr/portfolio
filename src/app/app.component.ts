import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AvailableLanguages } from './portfolio/lang/transloco-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title = 'portfolio';
}
