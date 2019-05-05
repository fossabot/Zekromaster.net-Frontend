import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zek-game-name',
  templateUrl: './game-name.component.html',
  styleUrls: ['./game-name.component.scss']
})
export class GameNameComponent implements OnInit {

  @Input() name: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
    console.log(this.url);
  }

}
