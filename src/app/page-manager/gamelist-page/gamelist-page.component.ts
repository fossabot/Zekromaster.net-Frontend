import { Component, OnInit, Input } from '@angular/core';
import { tableContents } from '../table-page/table-page.component';

type game = {name: string, console: string, completion: string, proof: string[]};
type localizedGame = {locales?: {[locale: string]: game}} & game;
type gameTableContents = localizedGame[];

const GAMECOLUMNS = [
  "Game",
  "Console",
  "%",
  "Proof"
]

@Component({
  selector: 'zek-game-list',
  templateUrl: './gamelist-page.component.html',
  styleUrls: ['./gamelist-page.component.scss']
})
export class GamelistPageComponent implements OnInit {
  @Input() data: {games: gameTableContents, pre: string, post?: string};

  constructor() { }


  ngOnInit() {
    this.data.games.sort(
      (a, b)=>a.name > b.name ? 1 : -1
    )
  }

  getProofList(game: game): string {
    var proofs: string[] = game.proof.map(
      (proof) => "<a href= \"" + proof + "\"> HERE</a>"
    )
    return proofs.join("; ");
  }
  getTable(): tableContents {
    var table: any | tableContents = {};
    table.columns = GAMECOLUMNS;
    table.rows = [];
    for (let game of this.data.games) {
      table.rows.push(
        {
          Game: game.name,
          Console: game.console,
          "%": game.completion,
          Proof: this.getProofList(game)
        }
      )
    };
    table.pre = this.data.pre;
    table.post = this.data.post;
    return table;
  }

}
