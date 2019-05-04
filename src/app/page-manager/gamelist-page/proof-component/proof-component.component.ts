import { Component, OnInit, Input } from '@angular/core';

export interface IProof {
  type: string
  proof: string
};

@Component({
  selector: 'zek-proof-component',
  templateUrl: './proof-component.component.html',
  styleUrls: ['./proof-component.component.scss']
})
export class ProofComponentComponent implements OnInit {
  @Input() type: string;
  @Input() proof: string;
  @Input() game: string;

  constructor() {
  }

  ngOnInit() {
  }

}
