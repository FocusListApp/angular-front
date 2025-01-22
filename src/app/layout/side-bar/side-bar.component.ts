import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgIcon } from '@ng-icons/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [RouterOutlet, CommonModule, HeaderComponent, NgIcon],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  tags = [
    {
      color: 'blue',
      title: 'Work'
    },
    {
      color: 'yellow',
      title: 'PC'
    },
    {
      color: 'purple',
      title: 'Holidays'
    },
    {
      color: 'red',
      title: 'Debts'
    },
  ];

  getTagColorClass(color: string) {
    if(color === 'blue') return 'text-blue-600 dark:text-blue-400 flex items-center';
    else if(color === 'yellow') return 'text-yellow-600 dark:text-yellow-400 flex items-center';
    else if(color === 'purple') return 'text-purple-600 dark:text-purple-400 flex items-center';
    else if(color === 'red') return 'text-red-600 dark:text-red-400 flex items-center';
    return '';
  }
}
