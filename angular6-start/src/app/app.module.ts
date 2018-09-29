import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './pages/list-people/list-people.component';
import { ListFlightsComponent } from './pages/list-flights/list-flights.component';
import { FlightInfoComponent } from './pages/flight-info/flight-info.component';
import { PersonComponent } from './components/person/person.component';
import { FlightComponent } from './components/flight/flight.component';

import { ResourceService } from "./services/resource.service";

import {HttpClientModule} from "@angular/common/http";

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
    HttpClientModule
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
