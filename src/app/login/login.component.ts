import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';

import { LoginService } from './login.service';
import { Account } from '../models/account/account.model';

import { ASYNC_URLS } from '../app-url';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  public account: Account = new Account();
  public error: Error;
  public options: object;
  public verifyImg: any;

  constructor(
    public router: Router,
    public loginService: LoginService,
    private confirmationService: ConfirmationService,
    public http: HttpClient
  ) {

  }

  public doLogin(): void {
    sessionStorage.setItem('currentUser', JSON.stringify([]));
    this.router.navigateByUrl('/home');
    // this.loginService.login(this.account).subscribe(
    //   data => {
    //     if (data['operateSuccess']) {
    //       this.http.post(ASYNC_URLS.accountList, {
    //         account: {
    //           accountId: data['account'].accountId
    //         }
    //       }).subscribe(user => {
    //         let roles = user['pageModel'].rows[0].roles;
    //         roles.some(element => {
    //           if (element.systemType === 'SMP') {
    //             sessionStorage.setItem('currentUser', JSON.stringify(user['pageModel'].rows[0]));
    //             this.router.navigateByUrl('/home');
    //           } else {
    //             this.confirmationService.confirm({
    //               message: '对不起，您没有本系统访问权限！',
    //               header: '系统权限',
    //               icon: 'pi pi-exclamation-triangle',
    //               acceptLabel: '确定',
    //               rejectVisible: false
    //             });
    //           }
    //         });
    //       });

    //     } else {
    //       this.confirmationService.confirm({
    //         message: '登录信息有误，请重新输入！',
    //         header: '用户名/密码错误',
    //         icon: 'pi pi-exclamation-triangle',
    //         acceptLabel: '确定',
    //         rejectVisible: false
    //       });
    //     }
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }

  public doLogout(): void {
    sessionStorage.setItem('currentUser', '');
    this.loginService.logout();
    this.router.navigateByUrl('login');
  }

  ngAfterViewInit() {}
}
