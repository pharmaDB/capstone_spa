import { Pipe, PipeTransform } from '@angular/core';

/**
 * TruncatePipe
 * The Truncate template pipe is used to mutate a string in an Angular template
 * that way the string can fit inside a specific UI element. It truncates the
 * text after a provided length and replaces it with ... .
 * Adapted from: https://stackoverflow.com/questions/44669340/how-to-truncate-text-in-angular2
 */
@Pipe({
 name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

  /**
   * Pipe function transformation handler
   * @param value String from template: the string that may be truncated
   * @param args length: number: the length of string allowed before truncating
   * @returns string: a truncated string version of the provided string
   */
  transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return (value.length > limit ? value.substring(0, limit) + trail : value);
   }
}
