//Inspiré du code d'app.routing.ts du projet UQO-Annotator
//
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import { AuthGuard } from './guard/auth.guard';
import {AppPreload} from './app.preload';
//import { AuthGuard } from './_guards/index';
//import { ComposeMessageComponent } from './compose-message.component';
//import { HomeWelcomeComponent } from './home-welcome/index';
import { RegisterComponent ,
         LoginComponent,
         AnnotationComponent,
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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'index', component: IndexComponent,pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mesprojet', component: MesProjetComponent , canActivate: [AuthGuard]},
  { path: 'annotation', component: AnnotationComponent },
  { path: 'projet', component: ProjectComponent },
  { path: 'search', component: SearchProjetComponent },
  { path: 'corpus', component: GestionCorpusComponent , canActivate: [AuthGuard]},
  { path: 'categories', component: GestionCategoriesComponent , canActivate: [AuthGuard]},
  { path: 'roles', component: GestionRoleComponent , canActivate: [AuthGuard]},
  //activation lors de connexion
  //A ne pas effacer
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', component: IndexComponent,pathMatch: 'full' },
  //  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
//  { path: 'logout', component: HomeWelcomeComponent },
//  { path: '', component: HomeComponent, /*pathMatch: 'full', canActivate: [AuthGuard]*/ },
//  { path: '', component: HomeWelcomeComponent, pathMatch: 'full' },
  // otherwise page not found
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    [ RouterModule.forRoot(appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: AppPreload,

      }) ]
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AppPreload
  ]
})
export class AppRouting { }
//export const Routing = RouterModule.forRoot(appRoutes);

export const RoutingTest = RouterTestingModule.withRoutes(appRoutes);
