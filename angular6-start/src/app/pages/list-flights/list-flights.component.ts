import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import {Person} from "../../models/person.model";
import {Flight} from "../../models/flight.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.scss']
})
export class ListFlightsComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  persons: Person[];
  person: Person;
  flights: Flight[];
  companiesOptions: string[];

  cityOriginSearch: string;
  cityOriginDestination: string;
  company: string;

  ngOnInit() {
    this.companiesOptions = [];
    this.dataService.persons.subscribe(persons => {
      this.persons = persons;
      this.person =  this.persons.filter(x => x._id == this.route.snapshot.paramMap.get('id'))[0];
      this.flights = this.person.flights;
      for (let flight of this.flights) {
        this.companiesOptions.push(flight.company);
      }
    });
  }

  clearFilters() {
    this.cityOriginSearch = null;
    this.cityOriginDestination = null;
    this.company = null;
  }

}
