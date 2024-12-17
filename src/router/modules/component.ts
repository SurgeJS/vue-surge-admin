export default {
  path: '/component',
  component: 'basic',
  meta: {
    title: '组件',
    icon: 'ant-design:copyright-circle-filled',
    order: 4,
  },
  children: [
    {
      path: '/component/schemaForm',
      component: 'view',
      meta: {
        title: 'Schema Form',
      },
    },
    {
      path: '/component/animation',
      component: 'view',
      meta: {
        title: '动画',
      },
    },
    {
      path: '/component/table',
      component: 'view',
      meta: {
        title: '表格',
      },
    },
  ],
} satisfies AppRouteRecordRaw
