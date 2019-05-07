import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicPlayerService } from './services/music-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Zekromaster.net';

  constructor(
    private router: Router,
    private player: MusicPlayerService
  ){};

  ngOnInit(): void {
    this.player.setDefaultBgm();
  }

  get isHome(): boolean {
    return this.router.url == '/';
  }
}
