export const PAGES_MENU = [
  {
    path: 'home',
    children: [
      {
        path: 'databaseManage',
        menu: {
          title: '基础数据管理',
          icon: 'menu-monitor',
          selected: false
        },
        children: [
          {
            path: 'hospitalData',
            menu: {
              title: '医院管理',
              icon: 'menu-space',
              selected: false
            }
          },
          {
            path: 'vendorData',
            menu: {
              title: '厂商管理',
              icon: 'menu-space',
              selected: false
            }
          },
          {
            path: 'aptitudesData',
            menu: {
              title: '资质管理',
              icon: 'menu-space',
              selected: false
            }
          }
        ]
      },
      {
        path: 'businessManage',
        menu: {
          title: '业务系统账户管理',
          icon: 'menu-suitcase',
          selected: false
        },
        children: [
          {
            path: 'accounts',
            menu: {
              title: '账户管理',
              icon: 'menu-space',
              selected: false
            }
          },
          {
            path: 'roles',
            menu: {
              title: '角色权限管理',
              icon: 'menu-space',
              selected: false
            }
          },
          {
            path: 'accountGroups',
            menu: {
              title: '账户组管理',
              icon: 'menu-space',
              selected: false
            }
          }
        ]
      }, {
        path: 'platManage',
        menu: {
          title: '运营平台账户管理',
          icon: 'menu-bar-graph',
          selected: false
        },
        children: [
          {
            path: 'platAccounts',
            menu: {
              title: '账户管理',
              icon: 'menu-space',
              selected: false
            }
          },
          {
            path: 'platRoles',
            menu: {
              title: '角色权限管理',
              icon: 'menu-space',
              selected: false
            }
          }
        ]
      }, {
        path: 'orderMonitor',
        menu: {
          title: '订单监控',
          icon: 'menu-suitcase',
          selected: false
        }
      }, {
        path: 'logisticsMonitor',
        menu: {
          title: '物流监控',
          icon: 'menu-monitor',
          selected: false
        }
      }, {
        path: 'clearingMonitor',
        menu: {
          title: '结算监控',
          icon: 'menu-suitcase',
          selected: false
        }
      }, {
        path: 'statisticalAnalysis',
        menu: {
          title: '统计分析',
          icon: 'menu-monitor',
          selected: false
        }
      }, {
        path: 'baseDatabase',
        menu: {
          title: '基础数据库',
          icon: 'menu-suitcase',
          selected: false
        }
      }, {
        path: 'logs',
        menu: {
          title: '日志消息',
          icon: 'menu-monitor',
          selected: false
        }
      }
      // {
      //   path: 'dictManage',
      //   menu: {
      //     title: '系统字典管理',
      //     icon: 'menu-bar-graph',
      //     selected: false
      //   },
      //   children: [
      //     {
      //       path: 'departmentDict',
      //       menu: {
      //         title: '标准科室类别字典',
      //         icon: 'menu-space',
      //         selected: false
      //       }
      //     },
      //     {
      //       path: 'aptitudesDict',
      //       menu: {
      //         title: '资质类型字典',
      //         icon: 'menu-space',
      //         selected: false
      //       }
      //     },
      //     {
      //       path: 'rolesDict',
      //       menu: {
      //         title: '权限字典',
      //         icon: 'menu-space',
      //         selected: false
      //       }
      //     }
      //   ]
      // }
    ]
  }
];
