import { Routes } from '@angular/router';

import { AddEditTaskComponent } from '../../app/components/add-task/add-task.component';
import { EditStateComponent } from '../../app/components/edit-state/edit-state.component';
import { SeeTaskComponent } from '../../app/components/see-task/see-task.component';
import { ListTaskComponent } from '../../app/components/list-task/list-task.component';

export const routes: Routes = [
  {
    path: 'add-task',
    component: AddEditTaskComponent,
  },
  {
    path: 'list-task',
    component: ListTaskComponent,
  },
  {
    path: 'edit/:id',
    component: ListTaskComponent,
  },
  {
    path: 'see-task',
    component: SeeTaskComponent,
  },
];
