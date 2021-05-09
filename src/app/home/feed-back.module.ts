import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedBackComponent } from './feed-back.component';
import { SharesModule } from '../shares/shares.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FeedBackComponent
  }
]


@NgModule({
  declarations: [FeedBackComponent],
  imports: [
    CommonModule,
    SharesModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedBackModule { }
