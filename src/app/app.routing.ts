import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  ContactComponent
} from '.';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const app_routing = RouterModule.forRoot(app_routes);
