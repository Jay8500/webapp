import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcartsComponent } from './carts/showcarts/showcarts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/tabs' },
      { path: 'tabs', loadChildren: () => import('../app/tabs/showtabs/showtabs.module').then(m => m.ShowtabsModule) }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'carts', component: ShowcartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
