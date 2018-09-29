import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Person} from "../models/person.model";

@Injectable()
export class ResourceService {
  constructor(private http: HttpClient) { }
  baseUrl: string = '/src/api/db.json';

  getUsers() {
    return this.http.get<Person[]>(this.baseUrl);
  }
}