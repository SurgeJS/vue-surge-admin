<script setup lang="ts">
import type { GridItemProps } from '@/components/common/grid/types'
import type { CSSProperties } from 'vue'
import { useGridContext } from '@/components/common/grid/hooks/context.ts'
import responsivePropsValue from '@/components/common/grid/hooks/responsive-props-value.ts'
import { resolveItemData } from '@/components/common/grid/utils'
import elementIndex from '@/hooks/common/element-index.ts'

const props = withDefaults(defineProps<GridItemProps>(), {
  span: 1,
  offset: 0,
  suffix: false,
})

const el = ref<HTMLElement>()

const {
  isOverflow,
  displayIndexList,
  responsiveCols,
  width,
  responsiveYGap,
  setItemMap,
  removeItemMap,
} = useGridContext()!
const index = elementIndex(el)
const responsiveSpan = responsivePropsValue(width, props, 'span')
const responsiveOffset = responsivePropsValue(width, props, 'offset')

const itemData = computed(() => resolveItemData(responsiveCols.value, {
  span: responsiveSpan.value,
  offset: responsiveOffset.value,
  suffix: props.suffix,
}))

const isDisplay = computed(() => displayIndexList.value.includes(index.value))

const gridColumnAttribute = computed(() => {
  const { suffix, span } = itemData.value
  return suffix
    ? `${responsiveCols.value - span + 1} / span ${span}`
    : `span ${span} / span ${span}`
})

const marginLeftAttribute = computed(() => {
  const { span, offset } = itemData.value
  if (offset < 0)
    return
  const oneSpan = `(100% - ${responsiveYGap.value * (span - 1)}px) / ${span}`
  return `calc((${oneSpan} * ${offset}) + ${
    responsiveYGap.value * offset
  }px)`
})

const gridItemStyle = computed<CSSProperties>(() => ({
  'grid-column': gridColumnAttribute.value,
  'margin-left': marginLeftAttribute.value,
  'display': (!isDisplay.value || itemData.value.span === 0) ? 'none' : undefined,
}))

watchEffect(() => {
  if (index.value !== -1)
    setItemMap(index.value, itemData.value)
})

onUnmounted(() => {
  if (index.value !== -1)
    removeItemMap(index.value)
})
</script>

<template>
  <div
    ref="el"
    class="grid-item"
    :style="gridItemStyle"
  >
    <slot :overflow="isOverflow" />
  </div>
</template>

<style scoped lang="scss">

</style>
