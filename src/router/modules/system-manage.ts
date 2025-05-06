export default {
  path: '/system-manage',
  component: 'basic',
  meta: {
    title: '系统管理',
    icon: 'ant-design:copyright-circle-filled',
    order: 2,
  },
  children: [
    {
      path: '/system-manage/user-manage',
      component: 'view',
      meta: {
        title: '用户管理',
      },
    },
    {
      path: '/system-manage/role-manage',
      component: 'view',
      meta: {
        title: '角色管理',
      },
    },
    {
      path: '/system-manage/menu-manage',
      component: 'view',
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: '/system-manage/organization',
      component: 'view',
      meta: {
        title: '组织机构',
      },
    },
  ],
} satisfies AppRouteRecordRaw
