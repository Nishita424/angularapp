import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    fName: '',
    lName: '',
    email: '',
  };
  users: User[];
  loaded: boolean = false;
  enableAdd: boolean = false;
  isActive: boolean;
  showExtended: boolean = true;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit(): void {
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
    this.loaded = true;
  }
  /*
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    // Adding new user to first
    this.users.unshift(this.user);

    // Clearing form
    this.user = {
      fName: '',
      lName: '',
      email: '',
    };
  }
  */
  // fireEvent(e) {
  //   console.log(e.type);
  //   console.log(e.target.value);
  // }

  // toggleHide(user) {
  //   user.hide = !user.hide;
  // }
  onSubmit(e) {
    console.log(123);

    e.preventDefault(); // To avoid flashing off of the o/p in console
  }
}
