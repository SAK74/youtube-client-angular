import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const STORAGEKEY = 'you2Be-token';
const fakeToken = 'faketokenexampled';
const initialName = 'Your Name';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private router: Router) {}
  isLogged = false;
  user = initialName;
  logIn(user: string) {
    window.localStorage.setItem(STORAGEKEY, fakeToken);
    this.isLogged = true;
    this.user = user;
    this.router.navigateByUrl('youtube');
  }
  logOut() {
    this.isLogged = false;
    this.user = initialName;
    this.router.navigateByUrl('auth');
    window.localStorage.removeItem(STORAGEKEY);
  }
}
