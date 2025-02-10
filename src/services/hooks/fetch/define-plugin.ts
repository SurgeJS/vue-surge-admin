import type { FetchPluginImplement } from '@/services/hooks/fetch/types.ts'

function definePlugin<
  // 数据
  TData,
  // 方法参数
  TParams extends unknown[],
  // 格式化数据
  TFormatData = TData,
  // 原始数据
  TRawData = any,
>(options: FetchPluginImplement<TData, TParams, TFormatData, TRawData>) {
  return options
}

export default definePlugin
