import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../interface/ITask';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddEditTaskComponent {
  Group: FormGroup;

  constructor(private b: FormBuilder, private _taskService: TaskService) {
    this.Group = this.b.group({
      title: ['', Validators.required],
      state: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required],
      detail: ['', Validators.required],
    });
  }

  add(task: any): void {
    const fromTask: ITask = {
      ...task,
      priority: parseInt(task.priority),
      state: 0,
      dueDate: new Date(task.dueDate).toISOString(),
    };

    this._taskService.addTask(fromTask).subscribe((response) => {
      alert('Task added successfully:');
    });
  }
}
