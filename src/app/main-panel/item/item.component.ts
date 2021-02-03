import { ImplicitReceiver } from '@angular/compiler';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() id: number;
  constructor() {}

  ngOnInit(): void {}
}
