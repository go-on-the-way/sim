import { Injectable } from '@angular/core';
import {
    CanActivate, // 守卫，处理导航到某路由的情况。
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild // 守卫，处理导航到子路由的情况
} from '@angular/router';

@Injectable()
export class Guard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let current = sessionStorage.getItem('currentUser');
        if (current && current.length) {
            return true;
        } else {
            return false;
        }
    }
}
