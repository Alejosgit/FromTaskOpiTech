import { Priority } from '../enums/priority';
import { State } from '../enums/state';

export interface ITask {
  Id?: string;
  Title: string;
  State: number;
  Priority: number;
  DueDate: Date;
  Detail: string;
}
