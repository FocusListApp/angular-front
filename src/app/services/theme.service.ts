import { inject, Injectable } from '@angular/core';
import { ThemeVariants } from '../types/themes.enum';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: ThemeVariants = ThemeVariants.light;
  settingsService = inject(SettingsService);
  constructor() { }

  loadTheme() {
    this.theme = this.settingsService.settings.theme;
    this.applyTheme();
    console.log('Loaded theme', this.theme);
  }

  setTheme(theme: ThemeVariants) {
    this.theme = theme;
    this.applyTheme();
    this.saveTheme();
  }

  applyTheme() {
    let variants = Object.values(ThemeVariants).filter((v) => v !== '');
    variants.forEach(variant => {
      document.body.classList.remove(variant);
    });
    if(this.theme) {
      document.body.classList.add(this.theme);
    }
  }

  saveTheme() {
    this.settingsService.settings.theme = this.theme;
    this.settingsService.saveSettings(this.settingsService.settings);
  }
}
