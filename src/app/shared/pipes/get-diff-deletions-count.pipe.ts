import { Pipe, PipeTransform } from '@angular/core';
import {IPharmaDBDrugLabelDiffAgainstPreviousLabel} from '../services/drug.service';

/**
 * getDiffDeletionsCount
 * this pipe is used in the angular templating and will return the number of deletions for a diff
 * data structure that's passed in
 */
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
