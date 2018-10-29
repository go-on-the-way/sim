import { PageModel } from '../class/page-model';

export interface DataTableArgs {
  url?: string;                          // 异步请求地址
  pm?: PageModel;                       // 存放分页组件配置、请求参数及响应结果
  method?: string;                      // 异步请求方式，GET/POST
  params?: any;                         // 查询条件
}
