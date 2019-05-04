import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'angular-custom-modal';

import { PageManagerComponent } from './page-manager/page-manager.component';
import { BlogPostPageComponent } from './blog-post-page/blog-post-page.component';
import { GamelistPageComponent } from './gamelist-page/gamelist-page.component';
import { ProofComponentComponent } from './gamelist-page/proof-component/proof-component.component';


@NgModule({
  declarations: [PageManagerComponent, BlogPostPageComponent, GamelistPageComponent, ProofComponentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule
  ],
  exports: [
    PageManagerComponent
  ]
})
export class PageManagerModule { }
