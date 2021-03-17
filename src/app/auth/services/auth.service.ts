import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(public afAuth: AngularFireAuth) {}

  loginFirebase(email: string, password: string) {
    return from(
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then(() => (this.isLoggedIn = true))
        .catch((error) => console.log(error))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
