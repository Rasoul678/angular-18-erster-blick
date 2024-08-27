import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  cars = ['Mitsubishi', 'Ford', 'BMW'];

  getCars() {
    return this.cars;
  }
  getCar(id: number) {
    return this.cars[id];
  }
}
