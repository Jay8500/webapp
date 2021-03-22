import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    CarouselModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    CarouselModule,
    DialogModule
  ]
})
export class SharesModule { }
