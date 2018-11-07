import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-echart-line',
  templateUrl: './echart-line.component.html',
  styleUrls: ['./echart-line.component.css']
})
export class EchartLineComponent implements OnInit, OnChanges {

  @Input() option: object;

  private lineOption: object;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.lineOption = _.assign({}, this.option);
  }

}
