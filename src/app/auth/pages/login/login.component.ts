import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services';

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
    this.authService.loginFirebase(email, password).subscribe((user) => {
      if (user) {
        console.log(
          '🚀 ~ file: login.component.ts ~ line 30 ~ LoginComponent ~ this.authService.loginFirebase ~ user',
          user
        );

        this.router.navigate(['/admin']);
      }
    });
  }
}
