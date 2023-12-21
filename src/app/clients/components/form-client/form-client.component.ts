import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from '../../../core/enums/state-client';
import { Client } from '../../../core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit{
  form!: FormGroup;
  @Input() client!: Client;
  @Output() submitted = new EventEmitter();
  @Output() delete = new EventEmitter();

  states = Object.values(StateClient);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      tva: [this.client.tva],
      state: [this.client.state],
      name: [this.client.name],
      comment: [this.client.comment],
      totalCaHt: [this.client.totalCaHt],
      id: [this.client.id]
    });
  }

  onSubmit() {
    this.submitted.emit(this.form.value);
  }

  onDelete() {
    this.delete.emit(this.client.id)
  }
}
