import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page, PageGetterService } from '../page-getter.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.scss']
})
export class PageManagerComponent implements OnInit {
  private id: string;
  page: Page;

  constructor(
    private route: ActivatedRoute,
    private pgGet: PageGetterService,
    private router: Router,
  ) {
    this.route.params.subscribe(
      (params) => {
        this.id = params.id;
        this.pgGet.getPage(this.id).subscribe(
          (page)=>{
            this.page = page;
            if (!this.page || this.page.type == '404') this.router.navigate(['/404'])
          }
        )
      }
    )
  }

  typeIs(type: string): boolean {
    return this.page.type === type;
  }

  ngOnInit() {
  }

}
