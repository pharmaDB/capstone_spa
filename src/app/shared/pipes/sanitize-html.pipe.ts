// https://stackoverflow.com/questions/39681163/angular-2-sanitizing-html-stripped-some-content-with-div-id-this-is-bug-or-fe
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * sanatizeHtml
 * this pipe will take in HTML and return sanitized HTML as a string
 */
@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  // tslint:disable-next-line:variable-name
  constructor(private _sanitizer: DomSanitizer) {
  }

  transform(v: string | undefined): SafeHtml | undefined {

    if (!v) {
      return;
    }

    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}
