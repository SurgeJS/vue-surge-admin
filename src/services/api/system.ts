import fakeService from '@/services/serves/fake'

// 系统相关的Api
class SystemApi {
  // 获取统计信息
  static getStatistics = () => fakeService.get<SystemModel.StatisticsModel>('/getSystemStatistics')

  static getPage = (params: PaginationParams) => fakeService.post<Pagination<Recordable>>('/getTodos', params)
}

export default SystemApi
