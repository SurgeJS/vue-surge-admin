import type {
  FetchContext,
  FetchOptions,
  FetchPluginImplement,
  FetchResult,
  ServiceFn,
} from '@/services/hooks/fetch/types.ts'
import useDebounce from '@/hooks/common/debounce.ts'
import useThrottle from '@/hooks/common/throttle.ts'
import useCoreFetch from '@/services/hooks/fetch/core/fetch.ts'
import useAutoRunPlugin from '@/services/hooks/fetch/plugins/auto-run.ts'
import useErrorRetryPlugin from '@/services/hooks/fetch/plugins/error-retry.ts'
import useLoadingPlugin from '@/services/hooks/fetch/plugins/loading.ts'
import usePollingPlugin from '@/services/hooks/fetch/plugins/polling.ts'
import useRefreshOnWindowFocusPlugin from '@/services/hooks/fetch/plugins/window-focus.ts'
import { omit } from 'es-toolkit'

export function useFetch<
  // 数据
  TData,
  // 方法参数
  TParams extends unknown[],
  // 格式化数据
  TFormatData = TData,
  // 原始数据
  TRawData = any,
>(
  service: ServiceFn<TData, TParams, TRawData>,
  options: FetchOptions<TData, TParams, TFormatData, TRawData> = {},
  plugins: FetchPluginImplement<TData, TParams, TFormatData, TRawData>[] = [],
): FetchResult<TData, TParams, TFormatData, TRawData> {
  const allPlugins = [
    ...plugins,
    useAutoRunPlugin,
    useLoadingPlugin,
    useRefreshOnWindowFocusPlugin,
    usePollingPlugin,
    useErrorRetryPlugin,
  ]

  const scope = effectScope()

  const {
    ready = ref(true),
    debounceWait = 500,
    debounceMaxWait,
    debounceLeading = false,
    debounceTrailing = true,
    throttleWait = 500,
    throttleLeading = true,
    throttleTrailing = true,
  } = options

  const fetchInstance = useCoreFetch<TData, TParams, TFormatData, TRawData>(
    service,
    options,
  )

  const run = async (...args: TParams) => {
    if (!ready.value) return
    return fetchInstance.coreFetch(...args)
  }

  // 刷新
  const refresh = () => {
    return run(...fetchInstance.rawState.params)
  }

  // 防抖 run
  const debounceRun = useDebounce(run, debounceWait, {
    maxWait: debounceMaxWait,
    leading: debounceLeading,
    trailing: debounceTrailing,
  })

  // 节流 run
  const throttleRun = useThrottle(run, throttleWait, {
    leading: throttleLeading,
    trailing: throttleTrailing,
  })

  const context: FetchContext<TData, TParams, TFormatData, TRawData> = {
    ...omit(fetchInstance, ['pluginHooks', 'coreFetch']),
    scope,
    options,
    run,
    refresh,
    debounceRun,
    throttleRun,
  }

  // @ts-expect-error xxx
  fetchInstance.pluginHooks.value = allPlugins.map(plugin => plugin(context)).filter(Boolean)

  onScopeDispose(() => {
    scope.stop()
  })

  return {
    ...omit(fetchInstance, ['pluginHooks', 'coreFetch', 'setState']),
    run,
    refresh,
    debounceRun,
    throttleRun,
  }
}
