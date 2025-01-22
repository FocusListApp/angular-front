import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-selector-menu',
  imports: [CommonModule, NgIcon],
  templateUrl: './theme-selector-menu.component.html',
  styleUrl: './theme-selector-menu.component.scss'
})
export class ThemeSelectorMenuComponent {
  themeService = inject(ThemeService);
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  setTheme(theme: any) {
    this.themeService.setTheme(theme);
    this.closeMenu();
  }
}
