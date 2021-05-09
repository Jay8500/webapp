import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProspecsComponent } from './prospecs.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '', component: ProspecsComponent
  }
]
@NgModule({
  declarations: [ProspecsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ProspecsModule { }
