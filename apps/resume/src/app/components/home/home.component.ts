import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../../lib/services/translator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnDestroy {
  locale: Record<string, string>;
  localeSubscription: Subscription;

  constructor(private translatorService: TranslatorService) {
    this.locale = translatorService.getLocaleStrings('home');
    this.localeSubscription = translatorService.updateLocale.subscribe(
      (strings) => {
        this.locale = strings['home'];
        console.log(this.locale);
      }
    );
  }

  ngOnDestroy(): void {
    this.localeSubscription.unsubscribe();
  }
}
