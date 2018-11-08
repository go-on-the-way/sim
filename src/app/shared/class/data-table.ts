
import { PageModel } from '../class/page-model';
import { DataTableArgs } from '../interfaces/data-table-args';
import { AjaxService } from '../services/ajax.service';

export class DataTable {

  public cols: Array<any>;
  public value: Array<any>;
  public selections: any;

  constructor(public args: DataTableArgs = null, private ajax: AjaxService) {
    this.init();
  }

  /**
   * 初始化
   */
  private init() {
    if (!this.args) {
      this.cols = [];
      this.value = [];
    } else {
      if (!this.args.pm) {
        this.args.pm = new PageModel();
      }
      this.args.params = {
        pageModel: {
          pageNo: this.args.pm.page,
          pageSize: this.args.pm.rows
        }
      };
    }
  }

  /**
   * 是否有数据
   */
  public hasValue() {
    return this.value && this.value.length > 0 ? true : false;
  }

  /**
   * 翻页处理
   * @param $event
   */
  public onPage($event) {
    this.args.pm.page = $event.page + 1;
    this.args.pm.rows = $event.rows;
    this.renderTable();
  }

  /**
   *  页码跳转
   */
  public toPage() {
    if (!Number(this.args.pm.toPage)) { return; }
    this.args.pm.page = this.args.pm.toPage;
    this.args.pm.toPage = null; // 跳转页码后做还原处理
    this.renderTable();
  }

  /**
   * 表格渲染
   */
  public renderTable() {
    this.args.params.pageModel = {
      pageNo: this.args.pm.page,
      pageSize: this.args.pm.rows
    };

    this.ajax.getMethod(this.args.url, this.args.params)
      .subscribe((res) => {
        let start = (this.args.pm.page - 1) * this.args.pm.rows,
          end = this.args.pm.page * this.args.pm.rows > res.total ? res.total : this.args.pm.page * this.args.pm.rows;
        this.value = res.rows.slice(start, end);
        this.args.pm.pageNo = res.pageNo;
        this.args.pm.pageSize = res.pageSize;
        this.args.pm.total = res.total;
        this.args.pm.pageData = res.rows;
        this.args.pm.totalPage = res.total % this.args.pm.rows === 0 ?
          res.total / this.args.pm.rows :
          res.total / this.args.pm.rows + 1;
      });

  }

}
