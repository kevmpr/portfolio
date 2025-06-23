import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import type { Description } from '../../interfaces/text.interface';

@Component({
  selector: 'app-aboutme-page',
  imports: [TranslocoModule],
  templateUrl: './aboutme-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutmePageComponent {
  descriptionProfile1: Description[] = [
    { text: 'text1' },
    { text: 'text2' },
    { text: 'text3' },
  ];

  descriptionProfile2: Description[] = [
    { text: 'text4' },
    { text: 'text5' },
    { text: 'text6' },
  ];

  descriptionEducation: Description[] = [
    { text: 'text1' },
    { text: 'text2' },
    { text: 'text3' },
    { text: 'text4a' },
    { text: 'text4b' },
    { text: 'text4c' },
    { text: 'text4d' },
    { text: 'text5' },
  ];

  descriptionExperience: Description[] = [
    { text: 'text1' },
    { text: 'text2' },
    { text: 'text3' }
  ];
}
