import {Flight} from "../models/flight.model";

export class Person {
  _id: number;
  isActive: boolean;
  price: string;
  name: string;
  picture: string;
  email: string;
  address: string;
  flights: Flight[];
}