import { Component, OnInit } from '@angular/core';
import { PageGetterService, Page } from 'src/app/page-manager/page-getter.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  pages: Page[]

  constructor(
    private pageGetter: PageGetterService
  ) {
    this.pageGetter.getPages().subscribe(
      (pages) => this.pages = pages
    )
  }

  ngOnInit() {
  }
}
