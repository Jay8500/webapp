import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviewComponent } from './proview.component';
import { RouterModule, Routes } from '@angular/router';
import { ProspecsComponent } from './prospecs.component';

const routes: Routes = [
  {
    path : '', component : ProspecsComponent
  }
]
@NgModule({
  declarations: [ProviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviewModule { }
