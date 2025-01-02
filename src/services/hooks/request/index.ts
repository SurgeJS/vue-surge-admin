import type {
  RequestOptions,
  RequestResult,
  ServiceFn,
} from '@/services/hooks/request/types.ts'
import type { ResponseError } from '@/services/request/axios/types.ts'
import type { AxiosResponse } from 'axios'
import { isFunction } from 'es-toolkit/predicate'

export function useRequest<
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
>(
  service: ServiceFn<TData, TMethodParams, TServiceParams, TRawData>,
  options: RequestOptions<TData, TMethodParams, TServiceParams, TFormatData, TRawData> = {},
): RequestResult<TData, TMethodParams, TServiceParams, TFormatData, TRawData> {
  const { initialData, defaultParams, manual, formatData, onBefore, onFinally, onError, onSuccess } = options

  const data = ref<TFormatData | undefined>(initialData)
  const error = ref<ResponseError>()
  const response = ref<AxiosResponse<TRawData, TServiceParams>>()
  const params = ref<TMethodParams>((defaultParams || []) as TMethodParams)
  const loading = ref<boolean>(false)
  const count = ref(0)

  const run = async (...args: TMethodParams) => {
    onBefore?.(args)
    count.value += 1
    const currentCount = count.value

    loading.value = true
    params.value = args

    const [result, err, res] = await service(...args).finally(() => {
      onFinally?.(args)
      count.value -= 1
      if (count.value === 0) loading.value = false
    })

    // 取消请求，取消对 data、response 赋值
    if (currentCount !== count.value) return Promise.resolve(data.value!)

    response.value = res

    // 处理错误
    if (err) {
      error.value = err
      onError?.(err, args, res!)
      return Promise.reject(err)
    }

    // 如果格式化数据函数存在就使用格式化后的数据，不存在就使用原数据
    data.value = formatData?.(result, params.value) ?? result as unknown as TFormatData

    onSuccess?.(data.value, args, res!)

    return data.value
  }

  if (!manual)
    // 首次默认调用
    void run(...(defaultParams || []) as TMethodParams)

  // 刷新
  const refresh = async () => {
    return await run(...params.value)
  }

  // 取消请求
  const cancel = () => {
    count.value += 1
    loading.value = false
  }

  // 更改数据
  const mutate = (newData: TFormatData | ((oldData: TFormatData) => TFormatData)) => {
    Object.assign(data.value, isFunction(newData) ? newData(data.value) : newData)
  }

  return {
    loading: computed(() => loading.value),
    data: computed(() => data.value),
    rawData: computed(() => response.value?.data),
    error: computed(() => error.value),
    response: computed(() => response.value),
    params: computed(() => params.value),
    run,
    refresh,
    cancel,
    mutate,
  }
}
