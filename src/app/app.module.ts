import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatAutocompleteModule, MatButtonModule, MatProgressSpinnerModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatInputModule, MatSelectModule, MatOptionModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { OurNavComponent } from './our-nav/our-nav.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyTableComponent } from './my-table/my-table.component';
import { AssetsComponent } from './assets/assets/assets.component';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { CreateAssetComponent } from './assets/create-asset/create-asset.component';
import { PaymentsComponent } from './payments/payments.component';
import { BrandingComponent } from './assets/branding/branding.component';
import { EventsComponent } from './events/events/events.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ResidentsService } from './residents.service';
import { EventsService } from './events.service';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { EventRegisterComponent } from './events/event-register/event-register.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventAttendeeComponent } from './event-attendee/event-attendee.component';




@NgModule({
  declarations: [
    AppComponent,
    OurNavComponent,
    MyDashComponent,
    MyTableComponent,
    AssetsComponent,
    LoginComponent,
    UserRegComponent,
    AdminRegComponent,
    CreateAssetComponent,
    PaymentsComponent,
    BrandingComponent,
    EventsComponent,
    UtilitiesComponent,
    ResidentsListComponent,
    EventRegisterComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    EventDetailComponent,
    EventAttendeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ResidentsService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
