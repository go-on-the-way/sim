import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.scss']
})
export class DataPanelComponent implements OnInit {

  public files:FileList;

  public uploader($event) {
    console.log(this.files);
  }

  constructor() {}

  ngOnInit() {}

}
