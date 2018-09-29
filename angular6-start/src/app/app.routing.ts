import { RouterModule, Routes } from '@angular/router';
import {ListPeopleComponent} from "./pages/list-people/list-people.component";
import {ListFlightsComponent} from "./pages/list-flights/list-flights.component";
import {FlightInfoComponent} from "./pages/flight-info/flight-info.component";

const routes: Routes = [
  { path: 'persons', component: ListPeopleComponent },
  { path: 'flights', component: ListFlightsComponent },
  { path: 'flight-info', component: FlightInfoComponent },
  {path : '', component : ListPeopleComponent}
];

export const routing = RouterModule.forRoot(routes);