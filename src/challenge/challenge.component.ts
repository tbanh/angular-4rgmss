import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
})
export class ChallengeComponent {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
}
