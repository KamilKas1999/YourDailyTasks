import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  ingredientsChanged = new Subject<Todo[]>();
  todos: Todo[] = [];
  @Output() isAddingNew = new Subject<boolean>();

  colors = [
    '#58FA58',
    '#F79F81',
    '#8181F7',
    '#A9F5F2',
    '#58ACFA',
    '#F3F781',
    '#81F79F',
    '#F5A9BC',
    '#A9F5A9',
    '#F5DA81',
    '#BCA9F5',
    '#F781D8',
    '#D0F5A9',
    '#819FF7',
    '#F7BE81',
    '#F5A9E1',
  ];

  constructor() {}

  startAdding() {
    //this.todos.push(todo);
    this.isAddingNew.next(true);
    console.log(this.isAddingNew);
  }

  add(name: string, description : string, date: Date) {
    this.todos.push({name : name, description: description, color: this.randomColor(), date : date });
    this.stopAdding();
  }

  stopAdding() {
    this.isAddingNew.next(false);
  }

  console() {
    console.log(this.todos);
  }

  private randomColor(): string {
    const mat = Math.floor(Math.random() * this.colors.length);
    console.log(mat);
    return this.colors[mat];
  }
}
