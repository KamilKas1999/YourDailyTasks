import { ImplicitReceiver } from '@angular/compiler';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, AfterViewInit {
  @Input() todo: Todo;
  @Input() id: number;
  constructor() {}

  ngAfterViewInit(): void {
    const item = document.getElementById(this.id.toString());
    item.style.backgroundColor = this.todo.color;
  }

  ngOnInit(): void {}
}
