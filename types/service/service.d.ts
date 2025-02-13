// 代理类型 0:前缀 1:url
declare type ProxyType = [ string, string ]

// 多服务配置 (代理仅在开发环境有效)
declare interface ServiceConfig {
  // 数据模拟
  fake: string | ProxyType

  // 主服务
  main: string | ProxyType

  // 其他服务
  other: string | ProxyType
}

// 后台响应结构
declare interface Result<Data = any> {
  // 系统状态
  code: number

  // 系统状态信息
  msg: string

  // data
  result?: Data
}

// 分页参数
declare type PaginationParams<DParams extends Recordable = Recordable> = {
  page: number
  pageSize: number
} & DParams

// 分页响应
declare interface Pagination<TResponse = any> {
  list: TResponse[]

  total: number
}
