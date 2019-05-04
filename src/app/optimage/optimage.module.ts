import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptimageComponent } from './optimage-component/optimage.component';

@NgModule({
  declarations: [OptimageComponent],
  imports: [
    CommonModule
  ],
  exports: [OptimageComponent]
})
export class OptimageModule { }
