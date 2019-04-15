import { Component, OnInit, Input } from '@angular/core';
import { MarkdownConverterService } from './markdown-converter.service';

@Component({
  selector: 'zek-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
export class BlogPostPageComponent implements OnInit {
  @Input() data: {locales?: {content: string}, content: string}

  constructor(
    private converter: MarkdownConverterService
  ) { }

  ngOnInit() {

  }

  content() {
    return this.converter.convert(this.data.content);
  }

}
