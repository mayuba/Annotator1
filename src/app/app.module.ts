import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

//New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AnnotationComponent } from './components/annotation/annotation.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { AlertDirective } from './directives/alert.directive';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { GestionRoleComponent } from './components/gestion-role/gestion-role.component';
import { MesProjetComponent } from './components/mes-projet/mes-projet.component';
//importation des services
import {ProjetService} from './services/index'

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
    FooterComponent,
    AlertDirective,
    HomeComponent,
    ProjectComponent,
    PageNotFoundComponent,
    HeaderComponent,
    GestionRoleComponent,
    MesProjetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ProjetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
