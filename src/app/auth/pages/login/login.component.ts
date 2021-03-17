import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, public authService: AuthService, public router: Router) {}

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.login()
  }

  login(): void {
    const {email, password} = this.loginForm.value
    this.authService.loginFirebase(email, password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/admin';
        this.router.navigate([redirectUrl]);
      }
    });
  }
}
