import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ASYNC_URLS } from '../../app-url';

@Injectable({
  providedIn: 'root'
})
export class DataPanelService {

  constructor(private http: HttpClient) { }

  getGatherInfo(req) {
    return this.http.post(ASYNC_URLS.gatherInfo, req);
  }

  getMessageInfo(page) {
    let baseTransMsg = {
      pageModel: page,
      baseTransMsg: {
        userId: JSON.parse(sessionStorage.getItem('currentUser')).user.orgCode,
        msgStatus: 1
      }
    };
    return this.http.post(ASYNC_URLS.findMessage, baseTransMsg);
  }
}
