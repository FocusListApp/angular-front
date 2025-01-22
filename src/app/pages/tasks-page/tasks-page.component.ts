import { Component, inject } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { BackendOption } from '../../types/settings.type';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ThemeVariants } from '../../types/themes.enum';
import { ThemeService } from '../../services/theme.service';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-tasks-page',
  imports: [NgIcon],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss'
})
export class TasksPageComponent {

  taskService = inject(TaskService);
  
  tasks: Task[] = [];

  ngOnInit() {
    console.log('Get Data');
    
    this.getData();
    
  }

  async getData() {
    this.taskService.getAll().subscribe({
      next: (tasks: Task[]) => {
        this.tasks = tasks;
        console.log(this.tasks);
      }, 
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  
}
