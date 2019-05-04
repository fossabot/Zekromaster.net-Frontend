import { Component, OnInit, Input } from '@angular/core';
import { IProof } from './proof-component/proof-component.component';

type game = { name: string, console: string, completion: string, proof: IProof };
type localizedGame = { locales?: { [locale: string]: game } } & game;
type gameTableContents = localizedGame[];

@Component({
  selector: 'zek-game-list',
  templateUrl: './gamelist-page.component.html',
  styleUrls: ['./gamelist-page.component.scss']
})
export class GamelistPageComponent implements OnInit {
  @Input() data: { games: gameTableContents, pre: string, post?: string };

  constructor() { }


  ngOnInit() {
    this.data.games.sort(
      (a, b) => a.name > b.name ? 1 : -1
    )
  }
}
