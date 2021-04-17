import { Pipe, PipeTransform } from '@angular/core';

/**
 * ShortestValueFromArrayPipe
 * Takes in an array of strings from a value provided on an Angular template and
 * returns from the array, the string with the shortest length. Used to present
 * a string of possible strings that must fit into a UI element. A tooltip should
 * to display the rest of the possible strings.
 */
@Pipe({
  name: 'shortestValueFromArray'
})
export class ShortestValueFromArrayPipe implements PipeTransform {

  /**
   * Pipe function transformation handler
   * @param value String[]: all of the possible strings from which the shortest length will be returned
   * @returns String: the shortest length string from the provided array of strings
   */
  transform(value: string[]): string {
    return value.reduce((a, b) => a.length <= b.length ? a : b);
  }

}
