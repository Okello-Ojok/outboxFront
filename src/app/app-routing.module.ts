import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurNavComponent } from './our-nav/our-nav.component';
import { LoginComponent } from './login/login.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { UserRegComponent } from './user-reg/user-reg.component';


import { AssetsComponent } from './assets/assets/assets.component';
import { CreateAssetComponent } from './assets/create-asset/create-asset.component';
import { BrandingComponent } from './assets/branding/branding.component';
import { EventsComponent } from './events/events/events.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { EventRegisterComponent } from './events/event-register/event-register.component';



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
    path: 'resident-register',
    component: UserRegComponent
  },
  {
    path: 'home',
    component: OurNavComponent
  },
  {
    path: 'assets',
    component: CreateAssetComponent
  },
  {
    path: 'branding',
    component: BrandingComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'utilities',
    component: UtilitiesComponent
  },
  {
    path: 'residents',
    component: ResidentsListComponent
  },
  {
    path: 'event-register',
    component: EventRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
