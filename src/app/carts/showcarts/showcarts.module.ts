import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcartsComponent } from './showcarts.component';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  { path: '', component: ShowcartsComponent }
]


@NgModule({
  declarations: [ShowcartsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShowcartsModule { }
