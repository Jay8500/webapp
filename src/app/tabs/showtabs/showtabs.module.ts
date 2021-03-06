import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtabsComponent } from './showtabs.component';
import { RouterModule, Routes } from '@angular/router';
import { SharesModule } from '../../shares/shares.module';

const routes : Routes = [
  { path : '', component : ShowtabsComponent}
]


@NgModule({
  declarations: [ShowtabsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharesModule
  ]
})
export class ShowtabsModule { }
