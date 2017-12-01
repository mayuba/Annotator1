//Inspiré du code d'app.routing.ts du projet UQO-Annotator
//

import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";


//import { AuthGuard } from './_guards/index';
//import { ComposeMessageComponent } from './compose-message.component';
import { HomeComponent } from './components/home/home.component';
//import { HomeWelcomeComponent } from './home-welcome/index';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MesProjetComponent } from './components/mes-projet/mes-projet.component';
import { GestionCorpusComponent } from './components/gestionCorpus/gestionCorpus.component';
import { AnnotationComponent } from './components/annotation/annotation.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectComponent } from './components/project/project.component';
import { GestionRoleComponent } from './components/gestion-role/gestion-role.component';
import { GestionCategoriesComponent } from './components/gestionCategories/gestionCategories.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: MesProjetComponent },
  { path: 'annotation', component: AnnotationComponent },
  { path: 'projet', component: ProjectComponent },
//  { path: 'corpus', component: GestionCorpusComponent },
//{ path: 'categories', component: GestionCategoriesComponent/*, outlet: 'popup'*/ },
  { path: 'roles', component: GestionRoleComponent },
  //  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
//  { path: 'logout', component: HomeWelcomeComponent },
//  { path: '', component: HomeComponent, /*pathMatch: 'full', canActivate: [AuthGuard]*/ },
//  { path: '', component: HomeWelcomeComponent, pathMatch: 'full' },
  // otherwise page not found
  { path: '**', component: PageNotFoundComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
export const RoutingTest = RouterTestingModule.withRoutes(appRoutes);
