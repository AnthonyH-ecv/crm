import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(val: number, obj: { coef?: number, tva?: number }): number {
    const { coef, tva } = obj;
    const baseValue = val * (coef || 1);

    if (tva) {
      return baseValue * (1 + tva / 100);
    }

    return baseValue;
  }


}
