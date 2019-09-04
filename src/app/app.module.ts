import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AuthUsersComponent } from './auth-users/auth-users.component';
import { ShopsComponent } from './shops/shops.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { TotalsComponent } from './totals/totals.component';
import { JSONTableModule } from 'angular-json-table';

@NgModule({
  declarations: [
    AppComponent,
    AuthUsersComponent,
    ShopsComponent,
    ProductComponent,
    TotalsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    JSONTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
