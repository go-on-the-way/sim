import { Injectable } from '@angular/core';
import { Growl } from '../class/growl';

@Injectable({
  providedIn: 'root'
})
export class GrowlService {

  public growl: Growl;

  constructor() {
    this.growl = Growl.Instance;
  }

}
