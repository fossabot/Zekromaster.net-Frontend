import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZekTitleComponent } from './zek-title/zek-title.component';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './notfound/notfound.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { HomeButtonComponent } from './home-button/home-button.component';

@NgModule({
  declarations: [ZekTitleComponent, NotFoundComponent, IndexPageComponent, HomeButtonComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ZekTitleComponent,
    NotFoundComponent,
    IndexPageComponent,
    HomeButtonComponent
  ]
})
export class CoreModule { }
