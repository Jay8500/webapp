import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcartsComponent } from './carts/showcarts/showcarts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'carts', component: ShowcartsComponent },
  // {
  //   path: 'home', component: HomeComponent,
  //   children: [
  //     // { path: 'carts', loadChildren: () => import("../app/carts/showcarts/showcarts.module").then(m => m.ShowcartsModule) }
  //     // { path: 'home/list', loadChildren: () => import('../app/screen/lists/lists.module').then(m => m.ListsModule) }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
