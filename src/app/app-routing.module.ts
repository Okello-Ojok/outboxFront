import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurNavComponent } from './our-nav/our-nav.component';
import { LoginComponent } from './login/login.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';


import { AssetsComponent } from './assets/assets/assets.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-register',
    component: AdminRegComponent
  },
  {
    path: 'home',
    component: OurNavComponent
  },
  {
    path: 'assets',
    component: AssetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
