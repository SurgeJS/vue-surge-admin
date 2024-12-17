import type { GridItemData, GridProps } from '@/components/common/Grid/types'
import useResponsivePropsValue from '@/components/common/Grid/hooks/use-responsive-props-value.ts'
import { createInjectionState } from '@vueuse/core'

const [useProvideGridContext, useGridContext] = createInjectionState((props: GridProps) => {
  const rowEl = ref<HTMLElement>()
  const isOverflow = ref(false)
  const displayIndexList = ref<number[]>([])
  const itemDataMap = reactive<Map<number, GridItemData>>(new Map())

  const { width: elWidth } = useElementSize(rowEl)
  const { width: windowsWidth } = useWindowSize()

  const width = computed(() => props.responsive === 'screen' ? windowsWidth.value : elWidth.value)
  const itemDataList = computed<GridItemData[]>(() => Array.from(itemDataMap.entries()).map(([, itemData]) => itemData))

  const responsiveCols = useResponsivePropsValue(width, props, 'cols')
  const responsiveXGap = useResponsivePropsValue(width, props, 'xGap')
  const responsiveYGap = useResponsivePropsValue(width, props, 'yGap')

  const setItemMap = (index: number, itemProps: GridItemData) => {
    itemDataMap.set(index, itemProps)
  }
  const removeItemMap = (index: number) => {
    itemDataMap.delete(index)
  }

  return {
    props,
    rowEl,
    isOverflow,
    displayIndexList,
    width,
    itemDataMap,
    itemDataList,
    responsiveCols,
    responsiveXGap,
    responsiveYGap,
    setItemMap,
    removeItemMap,
  }
})

export { useGridContext, useProvideGridContext }
