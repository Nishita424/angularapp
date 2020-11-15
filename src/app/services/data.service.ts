import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[];

  constructor() {
    this.users = [
      {
        fName: 'John',
        lName: 'Doe',
        email: 'john@yahoo.com',
        isActive: true,
        registered: new Date('02/01/2020 09:30:00'),
        hide: true,
      },
      {
        fName: 'Jake',
        lName: 'Doe',
        email: 'jake@yahoo.com',
        isActive: false,
        registered: new Date('11/01/2020 18:30:00'),
        hide: true,
      },
      {
        fName: 'Joey',
        lName: 'Doe',
        email: 'joey@yahoo.com',
        isActive: true,
        registered: new Date('12/01/2020 10:30:00'),
        hide: true,
      },
      {
        fName: 'Rachel',
        lName: 'Doe',
        email: 'rachel@yahoo.com',
        isActive: false,
        registered: new Date('01/04/2020 09:30:00'),
        hide: true,
      },
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
  
  addUser(user: User) {
    this.users.unshift(user);
  }
}
