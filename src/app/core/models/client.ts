import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI{
  id!: number;
  name!: string
  comment!: string;
  state = StateClient.ACTIVE;
  tva= 20;
  totalCaHt= 120000;

  constructor(client?: Partial<Client>) {
    if(client) {
      Object.assign(this,client)
    }

  }
}
