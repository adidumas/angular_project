import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './pages/list-people/list-people.component';
import { ListFlightsComponent } from './pages/list-flights/list-flights.component';

import { DataService } from "./services/data.service";
import { ResourceService } from "./services/resource.service";

import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import {routing} from "./app.routing";
import { FilterPipe } from './filters/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    ListFlightsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
  ],
  providers: [ResourceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
