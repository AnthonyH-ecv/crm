import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { StateOrder } from '../../core/enums/state-order';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {
  @Input() orderState!: StateOrder;
  @HostBinding('class') tdClassName!: string

  constructor() {

  }

  ngOnInit() {
    this.tdClassName = `state-${this.orderState.toLowerCase()}`
  }

}
