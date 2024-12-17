import type { ResponseContent } from '@/services/request/axios/types'
import type { QueryKey, UseQueryOptions } from '@tanstack/vue-query'
import type { Ref } from 'vue'
import { keepPreviousData, useQuery } from '@tanstack/vue-query'
import { isString } from 'es-toolkit'

/**
 * 分页查询Hook
 * @description 分页变化时自动查询
 * @param query 查询参数
 * @param queryKey 查询key
 * @param asyncFn 查询函数
 * @param options useQuery 配置
 */
function usePaginationQuery<TResponse = any, DParams extends Recordable = Recordable>(query: Ref<PaginationParams<DParams> | DParams>, queryKey: QueryKey | string, asyncFn: (query: PaginationParams<DParams> | DParams, ...arg: any) => Promise<ResponseContent<TResponse, DParams>>, options?: Partial<UseQueryOptions<TResponse>>) {
  const keys = isString(queryKey) ? [queryKey] : queryKey

  const pageNo = computed(() => query.value.pageNo)
  const pageSize = computed(() => query.value.pageSize)

  return useQuery<TResponse>({
    queryKey: [...keys, pageNo, pageSize],
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const [data, error] = await asyncFn(query.value)
      if (error)
        return Promise.reject(error)
      return data
    },
    ...options,
  })
}
export default usePaginationQuery
