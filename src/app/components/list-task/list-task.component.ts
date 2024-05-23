import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/TaskModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css',
})
export class ListTaskComponent {
  taskArray: any = signal([]);

  constructor(private _TaskService: TaskService) {}
  ngOnInit(): void {
    this.listask();
  }

  listask() {
    this._TaskService.listTask().subscribe((b) => {
      this.taskArray.set(b);
    });
  }

  editTask(task: TaskModel): void {
    let b = task.state === 1 ? 0 : 1;
    const data = {
      id: task.id,
      state: b,
    };
    console.log(b);
    this._TaskService.editState(data).subscribe(() => {
      alert('Task updated');
    });
  }
}
