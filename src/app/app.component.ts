import { Component } from '@angular/core';

/**
 * Top Level Application Component which controls the template that houses
 * the rest of the web apps functionality via router outlet
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // web browser tab website title
  title = 'pharmaDB';
}
