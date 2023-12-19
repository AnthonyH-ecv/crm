import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(val: number, coef: number, tva?:number): number {
    return tva ? val * coef * (1 + tva/100) : val * coef
  }

}
