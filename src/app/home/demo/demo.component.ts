import { Component, OnInit } from '@angular/core';
import { DataTable } from '../../shared/class/data-table';
import { AjaxService } from '../../shared/services/ajax.service';
import { PageModel } from '../../shared/class/page-model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public dt: DataTable;
  public pageModel = new PageModel(1, [1, 20, 30, 40, 50]);
  public displayDialog: boolean;

  constructor(private ajaxService: AjaxService) {

    this.dt = new DataTable({
      url: 'tableList',
      pm: this.pageModel
    }, ajaxService);

    this.dt.cols = [
      { field: 'name1', header: '名字1' },
      { field: 'name2', header: '名字2' },
      { field: 'name3', header: '名字3' },
      { field: 'name4', header: '名字4' }
    ];

    this.displayDialog = false;
  }

  ngOnInit() {
    this.dt.renderTable();
  }

  public rowSelect($event) {
    console.log(this.dt.selections);
  }

  public rowUnselect() {
    console.log(this.dt.selections);
  }

  public showDialog() {
    this.displayDialog = true;
  }

}
