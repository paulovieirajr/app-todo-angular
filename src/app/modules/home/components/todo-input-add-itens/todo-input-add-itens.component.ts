import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
  @Output() public emitItemTaskList = new EventEmitter();

  public itemTaskList: string = '';

  public addItemTaskList(): void {
    this.itemTaskList = this.itemTaskList.trim();
    if (this.itemTaskList) {
      this.emitItemTaskList.emit(this.itemTaskList);
      this.itemTaskList = '';
    }
  }
}
