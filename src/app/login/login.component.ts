import { Component, Renderer2, ElementRef, AfterViewInit, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { GrowlService } from '../shared/services/growl.service';
import { GrowlType } from '../shared/enum/growl-type.enum';
import { LoginService } from './login.service';
import { Account } from '../models/account/account.model';
import * as _ from 'lodash';
import { ASYNC_URLS } from '../app-url';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public account: Account = new Account();
  public error: Error;
  public options: object;
  public verifyImg: any;

  public systemName: string;
  public welcomeText: string;
  public loginContentH: number; // 登录界面内容高度值

  constructor(
    public router: Router,
    public renderer2: Renderer2,
    public el: ElementRef,
    public loginService: LoginService,
    private confirmationService: ConfirmationService,
    public http: HttpClient
  ) {
    this.loginContentH = 0;
    this.systemName = '登录LOGO系统';
    this.welcomeText = '欢迎登录系统';
  }

  ngOnInit() {
    console.log(Md5.hashStr('abcdefr'));
  }

  ngAfterViewInit() { }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.calculateLayout();
    });
  }

  /**
   * 计算布局
   */
  public calculateLayout() {
    let loginDom = this.el.nativeElement,
      loginHeaderH = loginDom.querySelector('.login-header').clientHeight,
      loginFooterH = loginDom.querySelector('.login-footer').clientHeight;
    this.loginContentH = window.innerHeight - loginHeaderH - loginFooterH;
  }

  /**
   * 系统登录
   */
  public doLogin(): void {
    sessionStorage.setItem('currentUser', JSON.stringify([]));
    this.router.navigateByUrl('/home');
    // 1.发送请求带回TOKEN并存储在本地

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

  /**
   * 退出登录
   */
  public doLogout(): void {
    sessionStorage.setItem('currentUser', '');
    this.loginService.logout();
    this.router.navigateByUrl('login');
  }

}
