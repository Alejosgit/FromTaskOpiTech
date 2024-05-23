import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { connection } from '../Connection/connection';
import { TaskModel } from '../models/TaskModel';
import { ITask } from '../interface/ITask';
import { IEditState } from '../interface/IEditState';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private http = inject(HttpClient);

  private url: string = connection.url + 'Task';
  constructor() {}
  listTask(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.url);
  }

  addTask(itask: ITask): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.url, itask, this.httpOptions);
  }

  editState(iEditState: IEditState): Observable<TaskModel> {
    return this.http.put<TaskModel>(this.url, iEditState, this.httpOptions);
  }

  // filter():Observable<TaskModel>{

  // }
}
