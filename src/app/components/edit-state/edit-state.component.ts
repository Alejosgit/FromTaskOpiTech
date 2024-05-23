import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskModel } from '../../models/TaskModel';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-state.component.html',
  styleUrl: './edit-state.component.css',
})
export class EditStateComponent {
  edit: TaskModel[] = [];

  constructor(private _taskService: TaskService, aRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.getState();
  }

  getState() {
    this._taskService.listTask().subscribe((data) => {
      this.edit = data;
    });
  }
}
