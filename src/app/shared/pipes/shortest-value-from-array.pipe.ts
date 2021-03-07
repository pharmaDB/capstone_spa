import { Pipe, PipeTransform } from '@angular/core';

/**
 * ShortestValueFromArrayPipe
 * TODO: add comment
 */
@Pipe({
  name: 'shortestValueFromArray'
})
export class ShortestValueFromArrayPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.reduce((a, b) => a.length <= b.length ? a : b);
  }

}
