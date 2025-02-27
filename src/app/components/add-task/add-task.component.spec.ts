import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTaskComponent } from './add-task.component';

describe('AddEditTaskComponent', () => {
  let component: AddEditTaskComponent;
  let fixture: ComponentFixture<AddEditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
