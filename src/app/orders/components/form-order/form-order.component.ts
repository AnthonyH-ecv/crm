import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from '../../../core/enums/state-order';
import { Order } from '../../../core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  form!: FormGroup;
  @Input() order!: Order;
  @Output() submitted = new EventEmitter();

  states = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {
    console.log(this.order)
  }

  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [this.order.tjmHt],
      typePresta: [this.order.typePresta,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
        ]
      ],
      nbJours: [this.order.nbJours,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(21)
        ]
      ],
      tva: [this.order.tva],
      state: [this.order.state],
      client: [this.order.client],
      comment: [this.order.comment],
      id: [this.order.id]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }

}
