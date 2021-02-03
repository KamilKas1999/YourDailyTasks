import { Directive, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPaper]'
})
export class PaperDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor : string;
  @Input() color: string = 'white';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.color;
  }

}
