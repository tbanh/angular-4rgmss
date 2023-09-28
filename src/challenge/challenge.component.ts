import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
  FormsModule,
} from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
})
export class ChallengeComponent {
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  userList: any[] = [];
  apiError: boolean = false;
  isSubmitPressed: boolean = false;
  searchQuery: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.phone = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
    });
  }

  sortUserListByLastName() {
    this.userList.sort((a, b) => {
      const lastNameA = a.lastName.toUpperCase();
      const lastNameB = b.lastName.toUpperCase();
      if (lastNameA < lastNameB) {
        return -1;
      }
      if (lastNameA > lastNameB) {
        return 1;
      }
      return 0;
    });
  }

  filterUsers() {
    if (!this.searchQuery || this.searchQuery.trim() === '') {
      return this.userList;
    }
    const query = this.searchQuery.toLowerCase();
    return this.userList.filter((user) => {
      const firstName = user.firstName.toLowerCase();
      const lastName = user.lastName.toLowerCase();
      return firstName.includes(query) || lastName.includes(query);
    });
  }

  onSubmit() {
    this.isSubmitPressed = true;
    if (this.myform.valid) {
      this.userService.callSaveApi(this.myform.value).subscribe(
        (response) => {
          this.apiError = false;
          const phoneValue = this.myform.value.phone;
          const lastFourDigits = phoneValue.slice(-4);
          const newUser = {
            firstName: this.myform.value.firstName,
            lastName: this.myform.value.lastName,
            email: this.myform.value.email,
            phone: phoneValue,
            phoneLastFourDigits: lastFourDigits,
          };
          this.userList.push(newUser);
          this.sortUserListByLastName();
          this.myform.reset();
          this.isSubmitPressed = false;
        },
        (error) => {
          this.apiError = true;
        }
      );
    } else {
      // Form is not valid, you can handle this case as needed
    }
  }
}
