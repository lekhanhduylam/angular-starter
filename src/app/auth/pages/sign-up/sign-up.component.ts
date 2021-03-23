import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  signUpForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  ngOnInit(): void {}

  signUp() {
    console.log('here');
  }
}
