import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-time-range',
  templateUrl: './time-range.component.html',
  styleUrls: ['./time-range.component.css']
})
export class TimeRangeComponent implements OnInit {

  @Input() timeStart:string;
  @Input() timeEnd:string;
  @Input() locale:any;

  @Output() onStartSelect:EventEmitter<any> = new EventEmitter();
  @Output() onEndSelect:EventEmitter<any> = new EventEmitter();

  public _timeStartOnSelect(){
    this.onStartSelect.emit({timeStart:this.timeStart,timeEnd:this.timeEnd});
  }

  public _timeEndOnSelect(){
    this.onEndSelect.emit({timeStart:this.timeStart,timeEnd:this.timeEnd});
  }

  constructor() { }

  ngOnInit() {
  }

}
