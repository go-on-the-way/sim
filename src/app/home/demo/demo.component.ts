import { Component, OnInit } from '@angular/core';
import { DataTable } from '../../shared/class/data-table';
import { AjaxService } from '../../shared/services/ajax.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public dt:DataTable;

  constructor(private ajaxService:AjaxService) {

    this.dt = new DataTable({
      url:'tableList'
    },ajaxService);

    this.dt.cols = [
      { field: 'name1', header: '名字1' },
      { field: 'name2', header: '名字2' },
      { field: 'name3', header: '名字3' },
      { field: 'name4', header: '名字4' }
    ]
  }

  ngOnInit() {
  }

  public onPage(){

  }

  public onRowSelect(){

  }

}
