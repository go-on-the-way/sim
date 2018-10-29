
import { PageModel } from "../class/page-model";
import { DataTableArgs } from '../interfaces/data-table-args';
import { AjaxService } from '../services/ajax.service';

export class DataTable {

  public cols:Array<any>;
  public value:Array<any>;

  constructor(
    private args:DataTableArgs = null,
    private ajax:AjaxService,
   ){
    this.init();
  }

  private init(){
    if(!this.args){
      this.cols = [];
      this.value = [];
    } else {
      if( !this.args.pm ){
        this.args.pm = new PageModel();
      }
      this.renderTable(this.args.url,this.args.params);
    }
  }

  /**
   * 表格渲染
   * @param url
   * @param params
   */
  public renderTable(url,params){

    // this.ajax.postMethod(url,params)
    // .subscribe((res)=>{
    //   this.args.pm.pageNo = res.pageNo;
    //   this.args.pm.pageSize = res.pageSize;
    //   this.args.pm.total = res.total;
    //   this.args.pm.pageData = res.rows;
    // });

    this.ajax.getMethod(url,params)
    .subscribe((res)=>{
      this.args.pm.pageNo = res.pageNo;
      this.args.pm.pageSize = res.pageSize;
      this.args.pm.total = res.total;
      this.args.pm.pageData = res.rows;
    });

  }

}
