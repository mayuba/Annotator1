//Inspiré du code d'app.routing.ts du projet UQO-Annotator
//

import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";


//import { AuthGuard } from './_guards/index';
//import { ComposeMessageComponent } from './compose-message.component';
//import { HomeWelcomeComponent } from './home-welcome/index';
import { RegisterComponent ,
         LoginComponent,
         AnnotationComponent,
         AdminComponent ,
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
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mesprojet', component: MesProjetComponent },
  { path: 'annotation', component: AnnotationComponent },
  { path: 'projet', component: ProjectComponent },
  { path: 'projets', component: SearchProjetComponent },
  { path: 'corpus', component: GestionCorpusComponent },
  { path: 'categories', component: GestionCategoriesComponent},
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
