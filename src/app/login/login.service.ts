import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account/account.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASYNC_URLS } from '../app-url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginUrl = ASYNC_URLS.login;
  public subject: Subject<Account> = new Subject<Account>();
  public userId: string;

  constructor(public http: HttpClient) { }

  public get currentUser(): Observable<Account> {
    return this.subject.asObservable();
  }

  public login(account: Account) {
    delete account.authCode;
    let obj = {
      account: account
    };
    return this.http.post(this.loginUrl, obj)
      .pipe(
        map((response: Account) => {
          if (response['operateSuccess']) {
            this.subject.next(Object.assign({}, response));
          }
          return response;
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }

  public getUserId() {
    return this.userId;
  }
}
