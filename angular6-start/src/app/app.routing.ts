import { RouterModule, Routes } from '@angular/router';
import {ListPeopleComponent} from "./pages/list-people/list-people.component";
import {ListFlightsComponent} from "./pages/list-flights/list-flights.component";
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'persons', component: ListPeopleComponent },
  { path: 'flights/:id', component: ListFlightsComponent },
  { path: 'about', component: AboutComponent },
  {path : '', component : ListPeopleComponent}
];

export const routing = RouterModule.forRoot(routes);