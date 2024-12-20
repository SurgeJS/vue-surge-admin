<script setup lang="ts">
import type { GridProps } from '@/components/common/grid/types'
import type { CSSProperties } from 'vue'
import { useProvideGridContext } from '@/components/common/grid/hooks/context.ts'
import { setItemVisible } from '@/components/common/grid/utils'

const props = withDefaults(defineProps<GridProps>(), {
  cols: 24,
  notCollapsedRows: 1,
  responsive: 'screen',
})

const { rowEl, isOverflow, displayIndexList, itemDataList, responsiveCols, responsiveXGap, responsiveYGap } = useProvideGridContext(props)

const gridStyle = computed<CSSProperties>(() => ({
  'grid-template-columns': `repeat(${responsiveCols.value}, minmax(0px, 1fr))`,
  'row-gap': `${responsiveXGap.value}px`,
  'column-gap': `${responsiveYGap.value}px`,
}))

watchEffect(() => {
  const itemVisible = setItemVisible(responsiveCols.value, props.collapsed, props.notCollapsedRows, itemDataList.value)
  isOverflow.value = itemVisible.overflow
  displayIndexList.value = itemVisible.displayIndexList
})
</script>

<template>
  <div
    ref="rowEl"
    class="grid"
    :style="gridStyle"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid {
  width: 100%;
  display: grid;
}
</style>
