import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ASYNC_URLS } from '../../app-url';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
  }

  /**
   * 参数转换
   * @param params
   */
  private transformParam(params?: any) {
    return params;
  }

  /**
   * post请求方法
   * @param url
   * @param params
   */
  public postMethod(url, params?: any): Observable<any> {
    return this.http
      .post(ASYNC_URLS[url], this.transformParam(params), { headers: this.headers })
      .pipe(
        map(res => res.json()),
        catchError(err => {
          return this.handleHttpError(err);
        })
      );
  }

  /**
   * get请求方法
   * @param url
   * @param params
   */
  public getMethod(url, params?: any): Observable<any> {
    return this.http
      .get(ASYNC_URLS[url], this.transformParam(params))
      .pipe(
        map(res => res.json()),
        catchError(err => {
          return this.handleHttpError(err);
        })
      );
  }

  /**
   * http请求错误代码处理
   * @param error
   */
  protected handleHttpError(error: Response): Observable<any> {
    if (error.status && error.status >= 400) {

    }
    return Observable.throw(error || '服务器端错误！');
  }

}
