import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZekTitleComponent } from './zek-title/zek-title.component';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './notfound/notfound.component';
import { IndexPageComponent } from './index-page/index-page.component';

@NgModule({
  declarations: [ZekTitleComponent, NotFoundComponent, IndexPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ZekTitleComponent,
    NotFoundComponent,
    IndexPageComponent,
  ]
})
export class CoreModule { }
