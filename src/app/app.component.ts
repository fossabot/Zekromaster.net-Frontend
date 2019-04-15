import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zekromaster.net';
  constructor(
    private router: Router
  ){};

  get isHome(): boolean {
    return this.router.url == '/';
  }
}
