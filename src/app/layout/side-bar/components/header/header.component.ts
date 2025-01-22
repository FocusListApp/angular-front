import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { NotificationsMenuComponent } from '../../../../components/notifications-menu/notifications-menu.component';
import { ThemeSelectorMenuComponent } from '../../../../components/theme-selector-menu/theme-selector-menu.component';

@Component({
  selector: 'app-sidebar-header',
  imports: [NgIcon, NotificationsMenuComponent, ThemeSelectorMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
