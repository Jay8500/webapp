import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { DashboardlistComponent } from './dashboardlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharesModule } from '../shares/shares.module';
import { AccordionModule } from 'primeng/accordion'
// import { PanelModule } from 'primeng/panel';

const route: Routes = [
  { path: '', component: DashboardlistComponent }
]

@NgModule({
  declarations: [DashboardlistComponent],
  imports: [
    // CommonModule,
    RouterModule.forChild(route),
    SharesModule,
    AccordionModule,
    // PanelModule
  ],
})
export class DashboardlistModule { }
