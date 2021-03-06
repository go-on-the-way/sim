export class PageModel {
  page: number;                // 请求的页码，对应request的查询参数page
  rows: number;                // 请求的每页数据条数，对应request的查询参数rows

  pageLinkSize: number;        // p-dataTable组件分页pageLinks参数配置
  pageList: Array<number>;     // p-dataTable组件可选的每页数据条数配置
  pageNo: number;              // 响应的页码，对应response数据的pageNo
  pageSize: number;            // 响应的每页数据条数，对应response数据的pageSize
  total: number;               // 数据库存储的数据总条数，对应response数据的total
  pageData: Array<any>;        // 响应的数据内容，对应response数据的pageData
  totalPage: number;           // 总共的页数

  toPage: number;               // 跳转的页码

  constructor(page?: number, pageList?: Array<number>) {
    this.pageList = pageList || [10, 20, 30, 40, 50];
    this.page = page || 1;
    this.rows = this.pageList[0];
    this.pageLinkSize = 10;
  }

}
