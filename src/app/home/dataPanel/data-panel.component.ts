import { Component, OnInit } from '@angular/core';
import { GrowlService } from '../../shared/services/growl.service';
import { GrowlType } from '../../shared/enum/growl-type.enum';

@Component({
  selector: 'app-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.scss']
})
export class DataPanelComponent implements OnInit {

  public files: FileList;

  public uploader($event) {
    console.log(this.files);
  }

  constructor(public growlService: GrowlService) { }

  ngOnInit() { }

  public showMessage() {
    this.growlService.growl.show({
      type: GrowlType.success,
      message: '显示对话框成功'
    });
  }

  public showMessage1() {
    this.growlService.growl.show({
      type: GrowlType.error,
      message: '显示对话框失败'
    });
  }

}
