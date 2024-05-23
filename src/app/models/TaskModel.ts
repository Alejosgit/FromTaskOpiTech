import { Priority } from '../enums/priority';
import { State } from '../enums/state';

export interface TaskModel {
  id?: string;
  userId?: string;
  title: string;
  state: State;
  priority: Priority;
  dueDate: Date;
  detail: string;
}
