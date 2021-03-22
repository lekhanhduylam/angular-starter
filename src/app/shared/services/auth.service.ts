import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { from } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string;
  userData: unknown;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  loginFirebase(email: string, password: string) {
    return from(
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((result) => result.user)
        .catch((error) => console.log(error))
    );
  }

  setUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `user/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  logOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.setItem('user', null);
    });
  }

  isLoggedIn(): boolean {
    const user: User = JSON.parse(localStorage.getItem('user'));
    console.log(
      '🚀 ~ file: auth.service.ts ~ line 67 ~ AuthService ~ isLoggedIn ~ user',
      user
    );
    return user != null;
  }
}
