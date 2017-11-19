import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";

const appRoutes: Routes = [
];

export const Routing = RouterModule.forRoot(appRoutes);
export const RoutingTest = RouterTestingModule.withRoutes(appRoutes);