import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {TooltipModule} from 'primeng/tooltip';
// import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BadgeModule} from 'primeng/badge';
@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    CarouselModule,
    DialogModule,
    RatingModule,
    AutoCompleteModule
    // DropdownModule

  ],
  exports: [
    CommonModule,
    AutoCompleteModule,
    CarouselModule,
    TooltipModule,
    DialogModule,
    // RatingModule,
    BadgeModule,
    // DropdownModule
  ]
})
export class SharesModule { }
