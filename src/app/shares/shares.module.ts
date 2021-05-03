import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
// import {DropdownModule} from 'primeng/dropdown';
import {BadgeModule} from 'primeng/badge';
@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    CarouselModule,
    DialogModule,
    // DropdownModule

  ],
  exports: [
    CommonModule,
    CarouselModule,
    TooltipModule,
    DialogModule,
    BadgeModule,
    // DropdownModule
  ]
})
export class SharesModule { }
