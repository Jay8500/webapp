import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardlistComponent } from './home/dashboardlist.component';
import { FeedBackComponent } from './home/feed-back.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProspecsComponent } from './products/prospecs/prospecs.component';
import { ProviewComponent } from './products/prospecs/proview.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/webapp' },
  {
    path: 'webapp', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'explore/prodcuts' },
      { path: 'explore/prodcuts', loadChildren: () => import('../app/tabs/showtabs/showtabs.module').then(m => m.ShowtabsModule) },
      { path: 'explore/product-specifications', loadChildren: () => import('../app/products/prospecs/prospecs.module').then(m => m.ProspecsModule) },
      // { path: 'explore/product-view', loadChildren: () => import('../app/products/prospecs/proview.module').then(m => m.ProviewModule) }
    ]
  },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feed-back', component: FeedBackComponent },
  { path: 'dashboard', component: DashboardlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
