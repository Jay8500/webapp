import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcartsComponent } from './carts/showcarts/showcarts.component';
import { FeedBackComponent } from './home/feed-back.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProspecsComponent } from './products/prospecs/prospecs.component';
import { ProviewComponent } from './products/prospecs/proview.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/tabs' },
      { path: 'tabs', loadChildren: () => import('../app/tabs/showtabs/showtabs.module').then(m => m.ShowtabsModule) },
    ]
  },
  {
    path: 'product-specifications', component: ProspecsComponent,
    children: [
      {
        path: 'product-view', component: ProviewComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'carts', component: ShowcartsComponent },
  { path: 'feed-back', component: FeedBackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
