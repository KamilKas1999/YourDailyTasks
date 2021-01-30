import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  ingredientsChanged = new Subject<Todo[]>();
  todos: Todo[] = [];

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
    '#F5A9E1'
  ];

  constructor() {}

  add(todo: Todo) {
    this.todos.push(todo);
  }

  console() {
    console.log(this.todos);
  }

  randomColor(): string {
    const mat = Math.floor(Math.random() * this.colors.length);
    console.log(mat);
    return this.colors[mat];
  }
}
