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
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/events/event-detail/event-detail.component';
import { PageUnder0constructionComponent } from './page-under0construction/page-under0construction.component';
import { ChartsComponent } from './charts/charts.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: ChartsComponent
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
    component: PageUnder0constructionComponent
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
    path: 'event-details/:id',
    component: EventDetailComponent
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
    path: 'attend',
    component: EventRegisterComponent
  },
  {
    path: 'create-event',
    component: CreateEventComponent
  },
  {
    path: 'edit-event/:eventID',
    component: CreateEventComponent
  },
  {
    path: 'page-under-construction',
    component:   PageUnder0constructionComponent

  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
