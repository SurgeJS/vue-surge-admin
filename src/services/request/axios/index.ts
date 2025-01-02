import type { AxiosConfig, ResponseContent } from '@/services/request/axios/types'
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { omit } from 'es-toolkit'

export default class Axios<DataStructure extends Recordable = Recordable> {
  public axiosInstance: AxiosInstance

  public unifyAxiosConfig: AxiosConfig<DataStructure>

  constructor(config: AxiosConfig<DataStructure>) {
    this.axiosInstance = axios.create(omit(config, ['interceptor']))
    this.unifyAxiosConfig = config

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

  public request<Data = any, Params = any>(config: AxiosRequestConfig<Params>): Promise<ResponseContent<Data, Params, DataStructure>> {
    return this.axiosInstance.request<ResponseContent< Data, Params>>(config) as unknown as Promise<ResponseContent<Data, Params, DataStructure>>
  }

  public get<Data = any, Params = any>(url: string, params?: Params, config?: AxiosRequestConfig<Params>) {
    return this.request<Data, Params>({ method: 'get', url, params, ...config })
  }

  public post<Data = any, Params = any>(url: string, data?: Params, config?: AxiosRequestConfig<Params>) {
    return this.request<Data, Params>({ method: 'post', url, data, ...config })
  }

  public put<Data = any, Params = any>(url: string, data?: Params, config?: AxiosRequestConfig<Params>) {
    return this.request<Data, Params>({ method: 'put', url, data, ...config })
  }

  public delete<Data = any, Params = any>(url: string, data?: Params, config?: AxiosRequestConfig<Params>) {
    return this.request<Data, Params>({ method: 'delete', url, data, ...config })
  }

  /**
   * 继承已有的 UnifyAxios 实例
   * @param instance UnifyAxios 实例
   * @param config UnifyAxios配置
   * @return UnifyAxios 实例
   */
  static extend<Result extends Recordable = Recordable>(instance: Axios<Result>, config?: AxiosConfig<Result>) {
    return new Axios(Object.assign(instance.unifyAxiosConfig, config))
  }
}
