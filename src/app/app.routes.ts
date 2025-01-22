import { Routes } from '@angular/router';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

export const routes: Routes = [
    {
        path: '',
        component: SideBarComponent,
        children: [
            {
                path: '',
                component: TasksPageComponent
            }
        ]
    }
];
