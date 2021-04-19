import {Component, OnInit} from '@angular/core';

/**
 * Navbar Component (app-navbar)
 * The navbar component is responsible for high level navigation through the web application
 * its implemented across the entire web application and contains links to other main views
 * such as the Search view as well as links to outside resources like the project GitHub.
 * Built to Angular CLI specs
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
