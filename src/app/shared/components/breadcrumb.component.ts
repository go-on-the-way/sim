import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

interface IBreadcrumb {
  label: any;
  url: string; // 跳转的url
}

@Component({
  selector: 'app-breadcrumb',
  template: `<ol class="breadcrumb">
    <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
      <li class="breadcrumb-item" [ngClass]="{active: last}">
        <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
        <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
      </li>
    </ng-template>
  </ol>`
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: IBreadcrumb[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location:Location) {
      this.init();
  }


  ngOnInit(): void {}

  private init(){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).
    subscribe(event => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
        url = '';
      this.getBreadcrumbs(currentRoute,url,this.breadcrumbs);
    });
  }

  /**
   * 获取面包屑
   * @param route
   * @param url
   * @param breadcrumbs
   */
  private getBreadcrumbs(route:ActivatedRoute,url: string = "", breadcrumbs:IBreadcrumb[]){
    let children: ActivatedRoute[] = route.children;
    if(children.length === 0){
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== 'primary') {
        continue;
      }

      let routeUrl:string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `/${routeUrl}`;

      if(child.snapshot.data.title){
        this.breadcrumbs.push({
          label: child.snapshot.data,
          url: url.replace('//', '/')
        });
      }

      //递归调用
      return this.getBreadcrumbs(child, url, breadcrumbs);

    }

    return this.breadcrumbs;

  }

}
