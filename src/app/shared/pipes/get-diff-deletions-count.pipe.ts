import { Pipe, PipeTransform } from '@angular/core';
import {IPharmaDBDrugLabelDiffAgainstPreviousLabel} from '../services/drug.service';

@Pipe({
  name: 'getDiffDeletionsCount'
})
export class GetDiffDeletionsCountPipe implements PipeTransform {

  transform(value: IPharmaDBDrugLabelDiffAgainstPreviousLabel, ...args: unknown[]): number {
    let deletionCount = 0;
    value.text.forEach((diffArr) => {
      if (diffArr[0] === -1) {
        deletionCount++;
      }
    });
    return deletionCount++;
  }

}
