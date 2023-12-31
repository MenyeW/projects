import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslatorService } from '../../lib/services/translator.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnDestroy {
  locale: Record<string, string>;
  localeSubscription: Subscription;

  constructor(private translatorService: TranslatorService) {
    this.locale = translatorService.getLocaleStrings('skills');
    this.localeSubscription = translatorService.updateLocale.subscribe(
      (strings) => {
        this.locale = strings['skills'];
        console.log(this.locale);
      }
    );
  }

  ngOnDestroy(): void {
    this.localeSubscription.unsubscribe();
  }
}
