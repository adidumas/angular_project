import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Person} from "../models/person.model";

@Injectable()
export class DataService {

  private personsSource = new BehaviorSubject([]);
  persons = this.personsSource.asObservable();

  constructor() { }

  changePersons(person: Person) {
    this.personsSource.next(person)
  }

}