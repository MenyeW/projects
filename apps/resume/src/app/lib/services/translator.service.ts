import { Injectable } from '@angular/core';
import { en, de } from '../../../locale';
import { BehaviorSubject } from 'rxjs';

export type LocaleStringFormat = { [key: string]: Record<string, string> };

@Injectable({ providedIn: 'root' })
export class TranslatorService {
  private localeStrings: LocaleStringFormat;
  updateLocale: BehaviorSubject<LocaleStringFormat>;

  constructor() {
    this.localeStrings = en;
    const locale: string | null = localStorage.getItem('locale');
    this.updateLocale = new BehaviorSubject<LocaleStringFormat>(
      this.localeStrings
    );
    this.switchTo(locale);
  }

  getLocaleStrings(componentName: string): Record<string, string> {
    return this.localeStrings[componentName];
  }

  switchTo(locale: string | null, emit: boolean = true): void {
    if (locale === null) return;
    switch (locale) {
      case 'en':
        this.localeStrings = en;
        break;
      case 'de':
        this.localeStrings = de;
        break;
    }
    localStorage.setItem('locale', locale);
    if (!emit) return;
    this.updateLocale.next(this.localeStrings);
  }
}
