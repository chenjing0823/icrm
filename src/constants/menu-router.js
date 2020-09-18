
export default {
  // 首页 index - 1
  index: {
    path: '/',
    meta: {
      title: '首页',
      icon: 'el-icon-s-home',
      index: '1'
    }
  },
  // 线索 clue - 2
  clue: {
    path: '/clue',
    meta: {
      title: '线索管理',
      icon: 'el-icon-s-shop',
      index: '2'
    }
  },
  clueManage: {
    path: '/clue/clueManage',
    meta: {
      title: '线索管理',
      index: '2-1'
    }
  },
  // 群 group - 3
  group: {
    path: '/group',
    meta: {
      title: '群管理',
      icon: 'el-icon-user-solid',
      index: '3'
    }
  },
  groupManage: {
    path: '/group/groupManage',
    meta: {
      title: '群管理',
      index: '3-1'
    }
  },
  promoteRecord: {
    path: '/group/promoteRecord',
    meta: {
      title: '群发记录',
      index: '3-2'
    }
  },
  // 物料管理 - 4
  material: {
    path: '/material',
    meta: {
      title: '物料管理',
      icon: 'el-icon-folder-opened',
      index: '4'
    }
  },

  materialManage: {
    path: '/material/materialManage',
    meta: {
      title: '物料管理',
      index: '4-1'
    }
  },

  // 标签管理 - 5
  tag: {
    path: '/tag',
    meta: {
      title: '标签管理',
      icon: 'el-icon-s-management',
      index: '5'
    }
  },

  // clueTagList: {
  customerTagList: {
    // path: '/tag/customerTagList',
    path: '/tag/clueTagList',
    meta: {
      title: '线索标签',
      index: '5-1'
    }
  },

  groupTagList: {
    path: '/tag/groupTagList',
    meta: {
      title: '群标签',
      index: '5-2'
    }
  },

  materialTagList: {
    path: '/tag/materialTagList',
    meta: {
      title: '物料标签',
      index: '5-3'
    }
  },

  // 活码 6
  code: {
    path: '/code',
    meta: {
      title: '活码管理',
      icon: 'el-icon-menu',
      index: '6'
    }
  },
  liveCodeManage: {
    path: '/code/liveCodeManage',
    meta: {
      title: '活码管理',
      index: '6-1'
    }
  },

  // 侧边栏 - 7
  sidebar: {
    path: '/sidebar'
  },
  sidebarSetting: {
    path: '/sidebar/sidebarSetting'
  },

  // 设置 setting - 8
  setting: {
    path: '/setting',
    meta: {
      title: '设置',
      icon: 'el-icon-s-tools',
      index: '8'
    }
  },
  enterpriseLicense: {
    path: '/setting/enterpriseLicense',
    meta: {
      title: '企业微信授权',
      index: '8-1'
    }
  },
  organization: {
    path: '/setting/organization',
    meta: {
      title: '组织架构',
      index: '8-2'
    }
  },
  rolePermissions: {
    path: '/setting/rolePermissions',
    meta: {
      title: '角色权限',
      index: '8-3'
    }
  }
}
