import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatorService } from '../../lib/services/translator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnDestroy {
  locale: Record<string, string>;
  localeSubscription: Subscription;

  constructor(private translatorService: TranslatorService) {
    this.locale = translatorService.getLocaleStrings('sidebar');
    this.localeSubscription = translatorService.updateLocale.subscribe(
      (strings) => {
        this.locale = strings['sidebar'];
        console.log(this.locale);
      }
    );
  }

  ngOnDestroy(): void {
    this.localeSubscription.unsubscribe();
  }

  switchLanguage(language: string) {
    this.translatorService.switchTo(language);
  }

  linkedin() {
    window.open('https://www.linkedin.com/in/rahul-bhatnagar-29942a106/');
  }

  stackoverflow() {
    window.open('https://stackoverflow.com/users/6825431/rahul-bhatnagar');
  }

  github() {
    window.open('https://github.com/MenyeW');
  }
}
