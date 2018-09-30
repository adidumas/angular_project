import { RouterModule, Routes } from '@angular/router';
import {ListPeopleComponent} from "./pages/list-people/list-people.component";
import {ListFlightsComponent} from "./pages/list-flights/list-flights.component";

const routes: Routes = [
  { path: 'persons', component: ListPeopleComponent },
  { path: 'flights/:id', component: ListFlightsComponent },
  {path : '', component : ListPeopleComponent}
];

export const routing = RouterModule.forRoot(routes);