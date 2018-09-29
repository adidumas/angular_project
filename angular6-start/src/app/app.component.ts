import { Component, OnInit } from '@angular/core';
import { ResourceService } from "./services/resource.service";
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private resourceService: ResourceService, private dataService: DataService) { }

  ngOnInit() {
    this.resourceService.getPersons()
        .subscribe( data => {
          console.log('data', data);
          this.dataService.changePersons(data);
        });
  }
}
