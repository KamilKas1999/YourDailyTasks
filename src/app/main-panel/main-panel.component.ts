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

  constructor(private data : DataStorageService) { }

  ngOnInit(): void {
    this.todos = this.data.todos
  }

}
