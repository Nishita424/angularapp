import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';

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

  // Binding form template with component
  @ViewChild('userForm') form: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((users) => (this.users = users));
    this.loaded = true;

    // this.dataService.getData().subscribe((data) => console.log(data));
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

  toggleHide(user) {
    user.hide = !user.hide;
  }

  // Form submission: onSubmit userForm is an object with two keys: value(new obj), valid(t/f)
  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      // console.log(value);
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.dataService.addUser(value);

      this.form.reset();
    }
  }
}
