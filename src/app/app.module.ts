import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { MaterialModule } from './material.module';
import { FileDropModule } from 'ngx-file-drop';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FooterComponent } from './shared/component/footer/footer.component';
import { AlertDirective } from './directives/alert.directive';
import { HeaderComponent } from './shared/component/header/header.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent ,
         LoginComponent,
         AnnotationComponent,
         AdminComponent ,
         IndexComponent,
         HomeComponent ,
         ProjectComponent ,
         SearchProjetComponent ,
         DialogOverviewExampleDialog ,
         PageNotFoundComponent ,
         GestionRoleComponent,
         MesProjetComponent ,
         GestionCategoriesComponent ,
         GestionCorpusComponent,
         TexteComponent
       } from './components/index';
//importation des services
import {ProjetService,
        UsersService,
        AuthentificationService
       } from './services/index';
export const firebaseConfig = {
  apiKey: "AIzaSyBxyDRCUs3jzK5sfSYj6443htnUaqKBp4w",
  authDomain: "annotateur-9b363.firebaseapp.com",
  databaseURL: "https://annotateur-9b363.firebaseio.com",
  projectId: "annotateur-9b363",
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
    IndexComponent,
    FooterComponent,
    AlertDirective,
    HomeComponent,
    ProjectComponent,
    SearchProjetComponent,
    PageNotFoundComponent,
    HeaderComponent,
    GestionRoleComponent,
    MesProjetComponent,
    DialogOverviewExampleDialog,
    GestionCategoriesComponent,
    GestionCorpusComponent,
    TexteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FileDropModule,
    HttpModule,
    AppRouting,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    ProjetService,
    UsersService,
    AuthGuard,
    AuthentificationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [GestionCategoriesComponent, GestionCorpusComponent]
})
export class AppModule { }
