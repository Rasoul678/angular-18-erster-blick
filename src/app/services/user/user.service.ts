import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users = ['Me', 'Stephanie'];

  getUsers() {
    return this.users;
  }
  getUser(id: number) {
    return this.users[id];
  }
}
