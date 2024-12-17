import RouterConstant from '@/constant/router'

export default {
  path: RouterConstant.HOME_PATH,
  component: 'basic-view',
  meta: {
    title: '首页',
    icon: 'ant-design:area-chart-outlined',
    affixTab: true,
    keepAlive: true,
    order: 1,
  },
} satisfies AppRouteRecordRaw
