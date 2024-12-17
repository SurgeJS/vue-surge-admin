export default {
  path: '/document',
  component: 'basic',
  meta: {
    title: '文档',
    icon: 'ant-design:copyright-circle-filled',
    order: 4,
  },
  children: [
    {
      path: 'https://cn.vuejs.org/',
      component: 'view',
      meta: {
        title: 'Vue',
      },
    },
    {
      path: 'https://cn.vitejs.dev/',
      component: 'view',
      meta: {
        title: 'Vite',
      },
    },
    {
      path: '/document/naive',
      component: 'view',
      meta: {
        title: 'naive（内嵌）',
        iframeSrc: 'https://www.naiveui.com/zh-CN/os-theme/',
      },
    },
  ],
} satisfies AppRouteRecordRaw
