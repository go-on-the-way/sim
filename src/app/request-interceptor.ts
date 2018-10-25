import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';

@Injectable()

export class RequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (sessionStorage.getItem('currentUser')
            && JSON.parse(sessionStorage.getItem('currentUser'))['user']) {
              if(req.body){
                req.body['userId'] = JSON.parse(sessionStorage.getItem('currentUser'))['user'].userId;
                req.body['vendorId'] = JSON.parse(sessionStorage.getItem('currentUser'))['user'].orgCode;
              }
        }

        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) { }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 404) {

                }
            }
        });
    }
}
