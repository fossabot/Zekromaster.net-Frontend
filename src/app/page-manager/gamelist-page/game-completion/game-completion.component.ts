import { Component, OnInit, Input } from '@angular/core';
import { MarkdownConverterService } from '../../markdown-converter.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'zek-game-completion',
  templateUrl: './game-completion.component.html',
  styleUrls: ['./game-completion.component.scss']
})
export class GameCompletionComponent implements OnInit {
  @Input() completionRules?: string;
  @Input() quantity: string;
  completionRulesHTML?: SafeHtml;


  constructor(
    private converter: MarkdownConverterService,
  ) { }

  ngOnInit() {
    if (this.completionRules) {
      this.completionRulesHTML = this.converter.convert(this.completionRules)
    }
  }

}
