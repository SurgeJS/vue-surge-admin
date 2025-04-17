import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import { rSuccess } from './utils'

export default defineFakeRoute([
  {
    // 获取系统统计信息
    url: '/getSystemStatistics',
    method: 'get',
    timeout: 1000,
    statusCode: 200,
    response: () => {
      return rSuccess({
        // 用户总数
        userTotal: 500000,
        // 访问量
        visitCount: 12000000,
        // 下载量
        downloadCount: 1000000,
        // 使用量
        useCount: 500000,
      })
    },
  },
])
