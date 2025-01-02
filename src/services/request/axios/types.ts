import type { AxiosError, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'

// 响应错误
export interface ResponseError {
  code: number | string

  msg: string

  axiosError?: AxiosError
}

// 响应内容
export type ResponseContent<TData = any, TParams = any, TDataStructure = any> = [ TData, ResponseError?, AxiosResponse<TDataStructure, TParams>? ]

// axios拦截器
export interface AxiosInterceptor<TDataStructure = any> {
  // 请求之前拦截器
  onBeforeRequest?: (config: AxiosRequestConfig) => void | Promise<void>

  // 响应拦截器
  onResponse?: (response: AxiosResponse<TDataStructure>) => ResponseContent<TDataStructure> | Promise<ResponseContent<TDataStructure>>

  // 响应错误
  onResponseError?: (error: AxiosError) => ResponseContent | Promise<ResponseContent>
}

// axios配置
export interface AxiosConfig<TDataStructure = any> extends CreateAxiosDefaults {
  // 拦截器
  interceptor?: AxiosInterceptor<TDataStructure>
}
