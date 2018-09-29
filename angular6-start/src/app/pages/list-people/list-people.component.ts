import { Component, OnInit } from '@angular/core';
import { ResourceService } from "../../services/resource.service";
import {Person} from "../../models/person.model";

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

  persons: Person[];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getUsers()
        .subscribe( data => {
            console.log('data', data);
          this.persons = data;
        });
  }

}
