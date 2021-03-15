import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    CarouselModule
  ],
  exports: [
    CommonModule,
    CarouselModule
  ]
})
export class SharesModule { }
