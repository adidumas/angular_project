import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './pages/list-people/list-people.component';
import { ListFlightsComponent } from './pages/list-flights/list-flights.component';
import { FlightInfoComponent } from './pages/flight-info/flight-info.component';
import { PersonComponent } from './components/person/person.component';
import { FlightComponent } from './components/flight/flight.component';

import { DataService } from "./services/data.service";
import { ResourceService } from "./services/resource.service";

import {HttpClientModule} from "@angular/common/http";

import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    ListFlightsComponent,
    FlightInfoComponent,
    PersonComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [ResourceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
