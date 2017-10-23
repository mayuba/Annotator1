import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

//New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { AnnotationComponent } from './modules/annotation/annotation.component';
import { AdminComponent } from './modules/admin/admin.component';
import { HeadersComponent } from './shared/component/headers/headers.component';
import { FooterComponent } from './shared/component/footer/footer.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBxyDRCUs3jzK5sfSYj6443htnUaqKBp4w",
  authDomain: "annotateur-9b363.firebaseapp.com",
  databaseURL: "https://annotateur-9b363.firebaseio.com",
  storageBucket: "annotateur-9b363.appspot.com",
  messagingSenderId: "581480444578"
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AnnotationComponent,
    AdminComponent,
    HeadersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
