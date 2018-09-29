import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../services/data.service";
import {Person} from "../../models/person.model";

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

    constructor(private dataService: DataService) { }

    persons: Person[];

    ngOnInit() {
        this.dataService.persons.subscribe(persons => this.persons = persons);
    }
}
