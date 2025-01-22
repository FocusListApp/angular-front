import { Injectable } from '@angular/core';
import { BackendOption, Settings } from '../types/settings.type';
import { ThemeVariants } from '../types/themes.enum';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settingsKey = 'SETTINGS';

  private initialValue: Settings = {
    backend: BackendOption.OFFLINE,
    theme: ThemeVariants.light,
  }

  settings: Settings = this.initialValue;

  constructor() { 
    this.getSettings();
  }

  getSettings(): Settings {
    let settings = localStorage.getItem(this.settingsKey);
    if(settings) {
      this.settings = JSON.parse(settings);
      return JSON.parse(settings);
    }
    this.initializeData();
    return this.initialValue;
  }

  initializeData() {
    localStorage.setItem(this.settingsKey, JSON.stringify(this.initialValue));
  }

  saveSettings(settings: Settings) {
    localStorage.setItem(this.settingsKey, JSON.stringify(settings));
    this.settings = settings;
  }
}
