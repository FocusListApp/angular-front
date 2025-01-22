import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-notifications-menu',
  imports: [CommonModule, NgIcon],
  templateUrl: './notifications-menu.component.html',
  styleUrl: './notifications-menu.component.scss'
})
export class NotificationsMenuComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
