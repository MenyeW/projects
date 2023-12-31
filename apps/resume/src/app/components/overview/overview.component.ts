import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../../lib/services/translator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnDestroy {
  locale: Record<string, string>;
  localeSubscription: Subscription;

  constructor(private translatorService: TranslatorService) {
    this.locale = translatorService.getLocaleStrings('overview');
    this.localeSubscription = translatorService.updateLocale.subscribe(
      (strings) => {
        this.locale = strings['overview'];
        console.log(this.locale);
      }
    );
  }

  ngOnDestroy(): void {
    this.localeSubscription.unsubscribe();
  }
}
