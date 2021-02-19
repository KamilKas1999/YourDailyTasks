import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {

  todos : Todo[];
  isAddingNewTodo = false;

  constructor(private data : DataStorageService) { }

  ngOnInit(){
    this.todos = this.data.todos;
    this.data.isAddingNew.subscribe(isAdding => {
      this.isAddingNewTodo = isAdding;
    });
    this.data.todosChange.subscribe(todos => {
      this.todos = todos;
    })
  }

  onAdd() {
    this.data.startAdding();
  }

}
