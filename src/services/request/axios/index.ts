import type { AxiosConfig, ResponseContent } from '@/services/request/axios/types'
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { omit } from 'es-toolkit'

export default class CreateAxios<RResult extends Recordable = Recordable> {
  public axiosInstance: AxiosInstance

  constructor(config: AxiosConfig<RResult>) {
    this.axiosInstance = axios.create(omit(config, ['interceptor']))

    // 请求拦截器
    this.axiosInstance.interceptors.request.use(
      async (requestConfig) => {
        await config.interceptor?.onBeforeRequest?.(requestConfig)
        return requestConfig
      },
      error => Promise.reject(error),
    )

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      response => (config.interceptor?.onResponse?.(response) || response) as any,
      (error: AxiosError) => config?.interceptor?.onResponseError?.(error),
    )
  }

  public request<TResponse = any, DParams = any>(config: AxiosRequestConfig<DParams>): Promise<ResponseContent<TResponse, DParams>> {
    return this.axiosInstance.request<ResponseContent<TResponse, DParams>>(config) as any as Promise<ResponseContent<TResponse, DParams>>
  }

  public get<TResponse = any, DParams = any>(url: string, params?: DParams, config?: AxiosRequestConfig<DParams>) {
    return this.request<TResponse, DParams>({ method: 'get', url, params, ...config })
  }

  public post<TResponse = any, DParams = any>(url: string, data?: DParams, config?: AxiosRequestConfig<DParams>) {
    return this.request<TResponse, DParams>({ method: 'post', url, data, ...config })
  }

  public put<TResponse = any, DParams = any>(url: string, data?: DParams, config?: AxiosRequestConfig<DParams>) {
    return this.request<TResponse, DParams>({ method: 'put', url, data, ...config })
  }

  public delete<TResponse = any, DParams = any>(url: string, data?: DParams, config?: AxiosRequestConfig<DParams>) {
    return this.request<TResponse, DParams>({ method: 'delete', url, data, ...config })
  }
}
