import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routes } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { MenuService } from '../shared/services/menu.service';
import { GrowlService } from '../shared/services/growl.service';
import { ASYNC_URLS } from '../app-url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public initProgress: number;
  public showProgressBar: boolean;

  constructor(
    private http: HttpClient,
    private menuService: MenuService,
    private growlService:GrowlService) {

    this.growlService.growl.hide();
    this.showProgressBar = false;

  }

  ngOnInit(): void {
    this.http.get('assets/json/menu.json').subscribe(data => {
      console.log(data);
      this.menuService.updateMenuByRoutes(<Routes>data);
    });
    // let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    // let accountReq = {
    //   account: {
    //     accountId: currentUser.accountId
    //   }
    // };
    // this.http.post(ASYNC_URLS.getAccountRoles, accountReq).subscribe(result => {
    //   let roleId = result['pageModel'].rows[0].roleId;
    //   let roleReq = {
    //     role: {
    //       roleId: roleId
    //     }
    //   };
    //   this.http.get('assets/json/menu.json').subscribe(data => {
    //     console.log(data);
    //     this.menuService.updateMenuByRoutes(<Routes>data);
    //   });
    //   // this.http.post(ASYNC_URLS.getRoleFuncsTree, roleReq).subscribe(data => {
    //   //   if (data['pageModel']) {
    //   //     let rows = data['pageModel'].rows;
    //   //     let menu = this.menuHandle(rows);
    //   //     this.menuService.updateMenuByRoutes(<Routes>menu);
    //   //   }
    //   // });
    // });
  }

  ngOnDestroy(): void {

  }

  public menuHandle(row) {
    if (row) {
      let temp = [];
      for (let i of row) {
        let parent = {};
        if (i.useState - 0) {
          if (!Number(i.isLeaf)) {
            parent = {
              path: i.url,
              menu: {
                title: i.text,
                icon: i.imgUrl,
                selected: false
              },
              children: this.menuHandle(i.children)
            };
            temp.push(parent);
          }
        }
      }
      return temp;
    }
  }

}
