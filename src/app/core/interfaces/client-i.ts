import { StateClient } from '../enums/state-client';

export interface ClientI {
  id: number
  tva: number,
  state: StateClient,
  name: string,
  totalCaHt: number,
  comment: string,
}
