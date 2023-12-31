import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslatorService } from '../../lib/services/translator.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnDestroy {
  locale: Record<string, string>;
  localeSubscription: Subscription;

  constructor(private translatorService: TranslatorService) {
    this.locale = translatorService.getLocaleStrings('experience');
    this.localeSubscription = translatorService.updateLocale.subscribe(
      (strings) => {
        this.locale = strings['experience'];
        console.log(this.locale);
      }
    );
  }

  ngOnDestroy(): void {
    this.localeSubscription.unsubscribe();
  }
}
