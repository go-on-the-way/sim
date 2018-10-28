import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

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
  breadcrumbs: Array<Object>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location:Location) {
    this.breadcrumbs = [];
  }

  ngOnInit(): void {
    console.log('------面包屑初始化------');
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).
    subscribe(event => {
      console.log(this.location.path());
      debugger;
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
        url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');

            if (routeSnapshot.data.title) {
              this.breadcrumbs.push({
                label: routeSnapshot.data,
                url: url.replace('//', '/')
              });
            }
            currentRoute = route;
          }
        });
      } while (currentRoute);
      console.log(this.breadcrumbs);
    });
  }
}
