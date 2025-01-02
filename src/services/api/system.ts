import fakeService from '@/services/request/serves/fake'

// 系统相关的Api
export abstract class SystemApi {
  // 获取计数信息
  static getCount = (obj: { test: number }) => fakeService.get<{
    // 用户总数
    userTotal: number
    // 访问量
    visitCount: number
    // 下载量
    downloadCount: number
    // 使用量
    useCount: number
  }, { test: number }>('/getSystemCount', obj)
}
