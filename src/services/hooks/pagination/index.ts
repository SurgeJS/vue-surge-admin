import type { PaginationOptions, PaginationResult, PaginationServiceFn } from '@/services/hooks/pagination/types.ts'
import { useFetch } from '@/services/hooks/fetch'
import { omit } from 'es-toolkit'

const usePagination = <
  // 数据
  TData extends Pagination = Pagination,
  // 方法参数
  TParams extends unknown[] = unknown[],
  // 格式化数据
  TFormatData extends Pagination = TData,
  // 原始数据
  TRawData = any,
> (
  service: PaginationServiceFn<TData, TRawData>,
  options: PaginationOptions<TData, TParams, TFormatData, TRawData> = {},
): PaginationResult<TData, TParams, TFormatData, TRawData> => {
  const {
    target,
    initialPage = 1,
    initialPageSize = 10,
    loadMoreOffset = 100,
    pageWatch = true,
    resetPageWhenPageSizeChange = true,
    addedMode,
    onSuccess,
  } = options

  // 当前页数
  const page = ref(initialPage)
  // 每页数量
  const pageSize = ref(initialPageSize)
  // 上次分页
  const lastPage = ref(initialPage)

  // 列表数据
  const list = ref <TFormatData['list']> ([] as TFormatData['list'])

  const fetchInstance = useFetch<TData, TParams, TFormatData, TRawData>(
    () => service({ page: page.value, pageSize: pageSize.value }),
    {
      ...omit(options, [
        'target',
        'initialPage',
        'initialPageSize',
        'pageWatch',
      ]),
      onSuccess(data, params, response) {
        onSuccess?.(data, params, response)
        if (!addedMode) return
        // 数据追加
        list.value = (page.value <= lastPage.value ? data.list : [...list.value, ...data.list]) ?? []
        lastPage.value = page.value
      },
    },
  )

  // 总数
  const total = computed(() => fetchInstance.data.value?.total ?? 0)
  // 分页总数
  const totalPage = computed(() => Math.ceil(total.value / pageSize.value))
  // 是否是最后一页
  const isLastPage = computed(() => page.value === totalPage.value)

  // 监听滚动到底部，滚动到底部分页自动+1
  useEventListener(target, 'scroll', (event) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target as HTMLElement
    if (scrollTop + clientHeight >= scrollHeight - loadMoreOffset && !isLastPage.value && fetchInstance.finished.value)
      page.value += 1
  })

  // 分页变化的时候刷新请求
  pageWatch && watch(page, () => fetchInstance.refresh())

  // 当分页数量变化的时候重置分页
  resetPageWhenPageSizeChange && watch(pageSize, () => page.value = 1)

  return {
    ...fetchInstance,
    list: computed(() => addedMode ? list.value : fetchInstance.data.value?.list ?? []),
    page,
    pageSize,
    total,
    totalPage,
    isLastPage,
  }
}

export default usePagination
