import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('taskList') || '[]'
  );

  public deleteItemFromTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm(
      'Are you sure you want to delete all tasks?'
    );

    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitItemTaskList(event: string): void {
    this.taskList.push({ task: event, checked: false });
  }

  public ngDoCheck(): void {
    this.setLocalStorage();
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Empty task, are you want to proceed ?');

      if (confirm) {
        this.deleteItemFromTaskList(index);
      }
    }
  }

  public setLocalStorage(): void {
    if (this.taskList.length) {
      this.taskList.sort((first, last) =>
        first.checked === last.checked ? 0 : first.checked ? 1 : -1
      );
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }
}
