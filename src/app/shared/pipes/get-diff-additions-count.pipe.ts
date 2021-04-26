import { Pipe, PipeTransform } from '@angular/core';
import {IPharmaDBDrugLabelDiffAgainstPreviousLabel} from '../services/drug.service';

@Pipe({
  name: 'getDiffAdditionsCount'
})
export class GetDiffAdditionsCountPipe implements PipeTransform {

  transform(value: IPharmaDBDrugLabelDiffAgainstPreviousLabel, ...args: unknown[]): number {
    let additionCount = 0;
    value.text.forEach((diffArr) => {
      if (diffArr[0] === 1) {
        additionCount++;
      }
    });
    return additionCount++;;
  }

}
