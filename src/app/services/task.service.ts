import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../models/task';
import { environment } from '../../environments/environment.development';
import { SettingsService } from './settings.service';
import { BackendOption } from '../types/settings.type';

@Injectable({
  providedIn: 'root',
  
})
export class TaskService {
  apiUrl: string = environment.API_URL;

  private tasksKey = 'TASKS';

  private tasks: Task[] = [];
  private settingsService = inject(SettingsService);

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Task[]> {
    if(this.settingsService.settings.backend  === BackendOption.OFFLINE) {
      return new Observable((observer) => {
        let tasksString = localStorage.getItem(this.tasksKey);

        if(tasksString) {
          let tasks: any = JSON.parse(tasksString);
          this.tasks = tasks.map((taskJson: any) => Task.fromJson(taskJson));
          observer.next(this.tasks);
          observer.complete();
          return;
        }
        observer.next([]);
        observer.complete();
        return;
      })
    }
    else { // NODE
      return this.httpClient.get<any[]>(this.apiUrl).pipe(
        map((tasks: any) => tasks.map((taskJson: any) => Task.fromJson(taskJson)))
      );
    }
    
  }

  getLocalTasks(): Task[] {
    let tasksString = localStorage.getItem(this.tasksKey);

    if(tasksString) {
      let tasks: any = JSON.parse(tasksString);
      this.tasks = tasks.map((taskJson: any) => Task.fromJson(taskJson));
      return this.tasks;
    }

    return []; 
  }

  createLocalTask(task: Task): Task {
    console.log(task);
    this.getLocalTasks();
    this.tasks.push(task);
    this.saveLocalTasks();
    return task;
  }

  private saveLocalTasks() {
    console.log('saveLocalTasks');
    
    localStorage.setItem(this.tasksKey, JSON.stringify(this.tasks))
  }
}
