import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

const STORAGEKEY = 'you2Be-token';
const fakeToken = 'faketokenexampled';
const initialName = 'Your Name';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private router: Router) {
    this.isLogged = Boolean(window.localStorage.getItem(STORAGEKEY));
    this.loggedObserver.next(this.isLogged);
  }
  isLogged: boolean;
  user = initialName;
  loggedObserver = new Subject<boolean>();
  logIn(user: string) {
    window.localStorage.setItem(STORAGEKEY, fakeToken);
    this.isLogged = true;
    this.user = user;
    this.loggedObserver.next(true);
    this.router.navigateByUrl('youtube');
  }
  logOut() {
    this.isLogged = false;
    this.user = initialName;
    this.loggedObserver.next(false);
    this.router.navigateByUrl('auth');
    window.localStorage.removeItem(STORAGEKEY);
  }
}
