import { Directive, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { StateClient } from '../../core/enums/state-client';
import { StateOrder } from '../../core/enums/state-order';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @HostBinding('class') tdClassName!: string;
  @Input() state!: StateClient | StateOrder;

  constructor() {

  }

  /*ngOnInit() {
    this.tdClassName = `state-${this.state.toLowerCase()}`;
  }*/

  ngOnChanges() {
    this.tdClassName = `state-${this.state.toLowerCase()}`;
  }

}
