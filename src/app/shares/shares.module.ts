import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { TooltipModule } from 'primeng/tooltip';
// import {DropdownModule} from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import {AccordionModule} from 'primeng/accordion'
import { MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    CarouselModule,
    DialogModule,
    RatingModule,
    AutoCompleteModule,
    AccordionModule,
    PanelModule

  ],
  exports: [
    CommonModule,
    AutoCompleteModule,
    CarouselModule,
    PanelModule,
    // AccordionModule,
    TooltipModule,
    DialogModule,
    BadgeModule,
  ],
  providers: [
    MessageService
  ],

})
export class SharesModule { }
