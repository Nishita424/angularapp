import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit(): void {
    this.user = {
      fName: 'John',
      lName: 'Doe',
      age: 30,
      address: {
        street: 'Danavaipet',
        city: 'Vizag',
        state: 'AP',
      },
    };
  }
}
