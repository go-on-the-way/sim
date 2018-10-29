export const PATH = 'http://192.168.2.55:8026/'; // 2018-09-11 15:35

export const ASYNC_URLS = {
  'login': PATH + 'rmApi/login/accountLogin/validateLoginPassword', // 登录验证
  'resetPassword': PATH + 'rmApi/userManage/account/resetPassword', // 重置密码
  'saveAccount': PATH + 'rmApi/userManage/account/saveAccountAllInfo', // 用户注册
  'accountList': PATH + 'rmApi/userManage/account/listAccountAllInfo', // 查询用户列表或者根据条件查询
  'rolesList': PATH + 'rmApi/userManage/role/list', // 查询角色列表或者根据条件查询
  'accountGroupsList': PATH + 'rmApi/userManage/group/list', // 查询用户组列表或者根据条件查询
  'tableList':"assets/json/table.json"
};

export const DICT_URLS = {
  'dictFind': PATH + 'rmApi/dictcp/baseDict/find', // 缓存字典
  'country': PATH + 'rmApi/dictcp/baseDictCountry/list', // 国家列表
  'province': PATH + 'rmApi/dictcp/baseDictProvince/list', // 省份列表
  'city': PATH + 'rmApi/dictcp/baseDictCity/list', // 市级列表
  'county': PATH + 'rmApi/dictcp/baseDictCounty/list', // 区县列表
  'cstTypeDict': PATH + 'rmApi/dictcp/cmpDictCstType/list', // 产品分类字典
  'authorVendor': PATH + 'rmApi/dictcp/cmpDictVendor/list' // 授权厂商
};

