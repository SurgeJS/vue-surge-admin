import type { ResponseContent, ResponseError } from '@/services/request/axios/types.ts'
import type { AxiosResponse } from 'axios'

export type ServiceFn<
  // 数据
  TData,
  // 方法参数
  TMethodParams extends unknown[],
  // 服务参数
  TServiceParams extends Recordable,
  // 原始数据
  TRawData,
> = (...args: TMethodParams) => Promise<ResponseContent<TData, TServiceParams, TRawData>>

// 请求配置项
export interface RequestOptions<
  // 数据
  TData,
  // 方法参数
  TMethodParams extends unknown[],
  // 服务参数
  TServiceParams extends Recordable,
  // 格式化数据
  TFormatData = TData,
  // 原始数据
  TRawData = any,
> {
  /**
   * data 初始的数据
   */
  initialData?: TFormatData

  /**
   * 首次默认执行时，传递给 service 的参数
   */
  defaultParams?: TMethodParams

  /**
   * 手动执行
   * @desc  默认 false。 即在初始化时自动执行 service。如果设置为 true, 则需要手动调用 run 或 runAsync 触发执行
   * @default false
   */
  manual?: boolean

  /**
   * 延迟 loading 变成 true 的时间，有效防止闪烁。
   */
  loadingDelay?: MaybeRef<number>

  /**
   * 指定 loading 的持续时间
   */
  loadingKeep?: MaybeRef<number>

  /**
   * 格式化数据
   */
  formatData?: (data: TData, params: TMethodParams) => TFormatData

  /**
   * 请求之前执行
   * @param params 请求参数
   */
  onBefore?: (params: TMethodParams) => void

  /**
   * promise resolve 的时候执行
   * @param data 响应数据
   * @param params 请求参数
   * @param response  axios响应内容
   */
  onSuccess?: (data: TFormatData, params: TMethodParams, response: AxiosResponse<TRawData, TServiceParams>) => void

  /**
   * 请求错误的时候执行
   * @param error 错误信息
   * @param params 请求参数
   * @param response  axios响应内容
   */
  onError?: (error: ResponseError, params: TMethodParams, response: AxiosResponse<TRawData, TServiceParams>) => void

  /**
   * service 执行完成时触发,不管 service 成功失败都会执行
   * @param params 参数
   */
  onFinally?: (params: TMethodParams) => void
}

export interface RequestState<
  // 数据
  TData,
  // 方法参数
  TMethodParams extends unknown[],
  // 服务参数
  TServiceParams extends Recordable,
  // 格式化数据
  TFormatData = TData,
  // 原始数据
  TRawData = any,
> {
  /**
   * service 返回的数据 ｜ 格式化后的数据
   */
  data: Undefinable<TFormatData>

  /**
   * service 返回的原始数据
   */
  rawData: Undefinable<TRawData>

  /**
   * service 返回的错误
   */
  error: Undefinable<ResponseError>

  /**
   * axios 原始响应内容
   */
  response: Undefinable<AxiosResponse<TRawData, TServiceParams>>

  /**
   * service 是否正在执行
   */
  loading: boolean

  /**
   * 当次执行的 service 的参数数组。比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3]
   */
  params: TMethodParams
}

export interface RequestMethod<
  // 数据
  TData,
  // 方法参数
  TMethodParams extends unknown[],
  // 格式化数据
  TFormatData = TData,
> {
  /**
   * 手动触发 service 执行，参数会传递给 service。异常自动处理，通过 onError 反馈或者使用run.catch() 进行反馈
   * @param args 请求参数
   */
  run: (...args: TMethodParams) => Promise<TFormatData>

  /**
   * 使用上次的 params，重新调用 run
   */
  refresh: () => Promise<TFormatData>

  /**
   * 手动取消本次请求
   * 不是真正的取消请求，已发发出请求后台还是会接受到的
   * 该方法只是取消了 data、response 的赋值以及 loading 重置为 false
   */
  cancel: () => void

  /**
   * 更改 data 数据
   */
  mutate: (newData: TFormatData | ((oldData: TFormatData) => TFormatData)) => void
}

export type RequestResult<
  // 数据
  TData,
  // 方法参数
  TMethodParams extends unknown[],
  // 服务参数
  TServiceParams extends Recordable,
  // 格式化数据
  TFormatData = TData,
  // 原始数据
  TRawData = any,
> =
  WrapWithComputed<RequestState<TData, TMethodParams, TServiceParams, TFormatData, TRawData>> &
  RequestMethod<TData, TMethodParams, TFormatData>

export interface PluginHooks<
  // 数据
  TData,
  // 方法参数
  TMethodParams extends unknown[],
  // 服务参数
  TServiceParams extends Recordable,
  // 格式化数据
  TFormatData = TData,
  // 原始数据
  TRawData = any,
> {
  /**
   * 请求之前执行
   * @param params 方法参数
   */
  onBefore: (params: TMethodParams) => void

  onRequest: (service: ServiceFn<TData, TMethodParams, TServiceParams, TRawData>) => () => Promise<ServiceFn<TData, TMethodParams, TServiceParams, TRawData>>

  /**
   * promise resolve 的时候执行
   * @param data 响应数据
   * @param params 请求参数
   * @param response  axios响应内容
   */
  onSuccess: (data: TFormatData, params: TMethodParams, response: AxiosResponse<TRawData, TServiceParams>) => void

  /**
   * 请求错误的时候执行
   * @param error 错误信息
   * @param params 请求参数
   * @param response  axios响应内容
   */
  onError: (error: ResponseError, params: TMethodParams, response: AxiosResponse<TRawData, TServiceParams>) => void

  /**
   * 请求之后执行
   * @param params 方法参数
   */
  onAfter: (params: TMethodParams, data?: TFormatData, error?: ResponseError, response?: AxiosResponse<TRawData, TServiceParams>) => void

  /**
   * 取消请求的时候执行
   */
  onCancel: () => void

  /**
   * 数据更改的时候执行
   * @param data 响应数据
   */
  onMutate: (data: TFormatData) => void
}
