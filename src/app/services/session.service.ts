import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  loggedIn$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  loggedIn!:boolean;

  constructor() {
    this.loggedIn$.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    })
  }

  // TODO: Login and logout logic
  logIn() {
    this.loggedIn$.next(true)
  }

  logOut() {
    this.loggedIn$.next(false);
  }
}
