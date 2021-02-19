import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-finisched',
  templateUrl: './finisched.component.html',
  styleUrls: ['./finisched.component.scss']
})
export class FinischedComponent implements OnInit {

  finishedTodos : Todo[];
  constructor(private data : DataStorageService) { }

  ngOnInit(): void {
    this.finishedTodos = this.data.finishedTodos;
    this.data.todosChange.subscribe(finishedTodos => {
      this.finishedTodos = finishedTodos;
      console.log(this.finishedTodos)
    })
  }

}
