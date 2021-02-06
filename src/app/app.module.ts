import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasbordComponent } from './compenents/dasbord/dasbord.component';
import { AddclientComponent } from './compenents/addclient/addclient.component';
import { EditClientComponent } from './compenents/edit-client/edit-client.component';
import { DetailclientComponent } from './compenents/detailclient/detailclient.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { SttingComponent } from './compenents/stting/stting.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { ClientService } from './services/client.service';
import{AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/forms'
import { FlashMessagesModule } from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    DasbordComponent,
    AddclientComponent,
    EditClientComponent,
    DetailclientComponent,
    NavbarComponent,
    SttingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireAuthModule


  ],
  providers: [ClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
