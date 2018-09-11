import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurNavComponent } from './our-nav/our-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
         MatButtonModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule, 
         MatGridListModule, MatInputModule,
         MatCardModule, 
         MatMenuModule, 
         MatTableModule, 
         MatPaginatorModule, 
         MatSortModule } from '@angular/material';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyTableComponent } from './my-table/my-table.component';
import { AssetsComponent } from './assets/assets/assets.component';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';





@NgModule({
  declarations: [
    AppComponent,
    OurNavComponent,
    MyDashComponent,
    MyTableComponent,
    AssetsComponent,
    LoginComponent,
    UserRegComponent,
    AdminRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule, MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
