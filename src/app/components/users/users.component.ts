import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  loaded: boolean = false;
  enableAdd: boolean = true;
  isActive: boolean;
  showExtended: boolean = true;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        fName: 'John',
        lName: 'Doe',
        age: 30,
        address: {
          street: 'Mavaldo street',
          city: 'Vizag',
          state: 'AP',
        },
        isActive: true,
        registered: new Date('02/01/2020 09:30:00'),
        hide: true,
      },
      {
        fName: 'Jake',
        lName: 'Doe',
        age: 30,
        address: {
          street: 'Milika resort',
          city: 'Vizag',
          state: 'AP',
        },
        isActive: false,
        registered: new Date('11/01/2020 18:30:00'),
        hide: true,
      },
      {
        fName: 'Joey',
        lName: 'Doe',
        age: 30,
        address: {
          street: 'Dorry park',
          city: 'Vizag',
          state: 'AP',
        },
        isActive: true,
        registered: new Date('12/01/2020 10:30:00'),
        hide: true,
      },
      {
        fName: 'Rachel',
        lName: 'Doe',
        age: 30,
        address: {
          street: 'Lara clave',
          city: 'Vizag',
          state: 'AP',
        },
        isActive: false,
        registered: new Date('01/04/2020 09:30:00'),
        hide: true,
      },
    ];
    this.loaded = true;
  }
  addUser(user: User) {
    this.users.push(user);
  }
  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
  toggleHide(user) {
    user.hide = !user.hide;
  }
  onSubmit(e) {
    console.log(123);

    e.preventDefault(); // To avoid flashing off of the o/p in console
  }
}
