import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  ingredientsChanged = new Subject<Todo[]>();
  todos: Todo[] = [];
  finishedTodos: Todo[] = [];
  todosChange = new Subject<Todo[]>();
  finishedChange = new Subject<Todo[]>();
  isAddingNew = new Subject<boolean>();

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

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.user.subscribe((user) => {
      if (user) {
        let id = user.id;
        this.getTodos(id);
        this.getFinishedTodos(id);
      }
    });
  }

  startAdding() {
    this.isAddingNew.next(true);
  }

  add(name: string, description: string, date: Date) {
    console.log(name, description, date);
    this.todos.push({
      name: name,
      description: description,
      color: this.randomColor(),
      date: date,
    });
    this.stopAdding();
    this.putTodos();
  }

  stopAdding() {
    this.isAddingNew.next(false);
  }

  private randomColor(): string {
    const mat = Math.floor(Math.random() * this.colors.length);
    console.log(mat);
    return this.colors[mat];
  }

  remove(id: number) {
    this.todos.splice(id, 1);
    this.putTodos();
  }

  movetoFinished(id: number){
    const todo = this.todos.splice(id, 1);
    this.finishedTodos.push(todo[0]);
    this.finishedChange.next(this.finishedTodos);
    this.putFinishedTodos();
    console.log(this.finishedTodos)
  }

  putTodos() {
    let id = '';
    this.authService.user.subscribe((user) => (id = user.id));
    this.http
      .put(
        'https://yourdailytasks-default-rtdb.firebaseio.com/' +
          id +
          '/Actual.json',
        this.todos
      )
      .subscribe(() => {});
  }

  getTodos(id: String) {
    this.http
      .get<Todo[]>(
        'https://yourdailytasks-default-rtdb.firebaseio.com/' +
          id +
          '/Actual.json'
      )
      .subscribe((data) => {
        if (data) {
          this.todos = data;
          this.todosChange.next(this.todos);
        }
      });
  }

  putFinishedTodos() {
    let id = '';
    this.authService.user.subscribe((user) => (id = user.id));
    this.http
      .put(
        'https://yourdailytasks-default-rtdb.firebaseio.com/' +
          id +
          '/Finished.json',
        this.finishedTodos
      )
      .subscribe(() => {});
  }
  getFinishedTodos(id: String) {
    this.http
      .get<Todo[]>(
        'https://yourdailytasks-default-rtdb.firebaseio.com/' +
          id +
          '/Finished.json'
      )
      .subscribe((data) => {
        if (data) {
          this.finishedTodos = data;
          this.finishedChange.next(this.finishedTodos);
        }
      });
  }
}
