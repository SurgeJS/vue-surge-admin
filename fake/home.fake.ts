import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import { rSuccess } from './utils'

export default defineFakeRoute([
  {
    // 获取系统统计信息
    url: '/getSystemStatistics',
    method: 'get',
    statusCode: 200,
    response: () => rSuccess({
      // 用户总数
      userTotal: 500000,
      // 访问量
      visitCount: 12000000,
      // 下载量
      downloadCount: 1000000,
      // 使用量
      useCount: 500000,
    }),
  },
  {
    // 获取使用量
    url: '/getUsageCount',
    method: 'get',
    response: () => rSuccess([
      {
        label: '周一',
        value: 300,
      },
      {
        label: '周二',
        value: 500,
      },
      {
        label: '周三',
        value: 700,
      },
      {
        label: '周四',
        value: 400,
      },
      {
        label: '周五',
        value: 320,
      },
      {
        label: '周六',
        value: 600,
      },
      {
        label: '周日',
        value: 900,
      },
    ]),
  },
  {
    // 获取技术栈
    url: '/getTechnologyStack',
    method: 'get',
    response: () => rSuccess([
      {
        name: 'Vue',
        value: 1048,
      },
      {
        name: 'React',
        value: 735,
      },
      {
        name: 'Vite',
        value: 580,
      },
      {
        name: 'Native',
        value: 484,
      },
      {
        name: 'Axios',
        value: 320,
      },
    ]),
  },
  {
    // 获取访问量
    url: '/getAccessCount',
    method: 'get',
    response: () => rSuccess([
      {
        label: ' 1月',
        value: 1048,
      },
      {
        label: ' 2月',
        value: 735,
      },
      {
        label: '3月',
        value: 580,
      },
      {
        label: '4月',
        value: 484,
      },
      {
        label: '5月',
        value: 320,
      },
      {
        label: '6月',
        value: 900,
      },
      {
        label: '7月',
        value: 1200,
      },
      {
        label: '8月',
        value: 600,
      },
      {
        label: '9月',
        value: 900,
      },
      {
        label: '10月',
        value: 1000,
      },
      {
        label: '11月',
        value: 1400,
      },
      {
        label: '12月',
        value: 1100,
      },
    ]),
  },
])
