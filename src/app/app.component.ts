import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Zekromaster.net';
  sound = new Howl({src: 'assets/floral_shoppe.mp3'})

  constructor(
    private router: Router
  ){};

  ngOnInit(): void {
    console.log(this.router.url);
    this.sound.play();
  }

  get isHome(): boolean {
    return this.router.url == '/';
  }
}
