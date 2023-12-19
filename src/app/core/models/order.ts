import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI{
  id!: number;
  client!: string;
  comment!: string;
  nbJours = 1;
  state = StateOrder.OPTION;
  tjmHt = 1200;
  tva= 20;
  typePresta!: string;

  constructor(order?: Partial<Order>) {
    if(order) {
      Object.assign(this,order)
    }

  }
}
