import type { AxiosError, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'

// 响应错误
export interface ResponseError {
  code: number | string

  msg: string

  axiosError?: AxiosError
}

// 响应内容
export type ResponseContent<T = any, D = any> = [ T, ResponseError?, AxiosResponse<T, D>? ]

// axios拦截器
export interface AxiosInterceptor<T = any> {
  // 请求之前拦截器
  onBeforeRequest?: (config: AxiosRequestConfig) => void | Promise<void>

  // 响应拦截器
  onResponse?: (response: AxiosResponse<T>) => ResponseContent<T> | Promise<ResponseContent<T>>

  // 响应错误
  onResponseError?: (error: AxiosError) => ResponseContent | Promise<ResponseContent>
}

// axios配置
export interface AxiosConfig<T = any> extends CreateAxiosDefaults {
  // 拦截器
  interceptor?: AxiosInterceptor<T>
}
