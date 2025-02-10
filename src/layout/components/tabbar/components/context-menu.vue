<script setup lang="ts">
import type { Tab } from '@/store/modules/tab-bar/type'
import type { PopoverTrigger } from 'naive-ui'
import renderIcon from '@/hooks/components/render-icon.ts'
import useTabBarStore from '@/store/modules/tab-bar'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export interface ContextMenuProps {
  trigger?: PopoverTrigger

  tab?: Tab

  x?: number

  y?: number
}

const props = defineProps<ContextMenuProps>()

const visible = defineModel<boolean>('visible')

const tabBarStore = useTabBarStore()
const route = useRoute()
const { RenderUnoIcon } = renderIcon()

const tab = computed(() => props.tab || route)

const contextMenu = computed(() => {
  return [
    {
      icon: () => RenderUnoIcon('i-ant-design:reload-outlined'),
      key: 'reload',
      label: '刷新',
      disabled: route.path !== tab.value.path,
    },
    {
      icon: () => RenderUnoIcon('i-ant-design:close-outlined'),
      key: 'close',
      label: '关闭',
      disabled: Boolean(tab.value.meta?.affixTab),
    },
    {
      icon: () => RenderUnoIcon('i-ant-design:vertical-right-outlined'),
      key: 'closeLeft',
      label: '关闭左边',
      disabled: (() => {
        const index = tabBarStore.getIndex(tab.value.path)
        if (index === 0 || index === -1)
          return true
        return !tabBarStore.tabs.slice(0, index).some(item => !item.meta?.affixTab)
      })(),
    },
    {
      icon: () => RenderUnoIcon('i-ant-design:vertical-left-outlined'),
      key: 'closeRight',
      label: '关闭右边',
      disabled: (() => {
        const index = tabBarStore.getIndex(tab.value.path)
        if (index === tabBarStore.tabs.length - 1 || index === -1)
          return true
        return !tabBarStore.tabs.slice(index).some(item => !item.meta?.affixTab)
      })(),
    },
    {
      icon: () => RenderUnoIcon('i-ant-design:arrows-alt-outlined'),
      key: 'closeOther',
      label: '关闭其他',
      disabled: !tabBarStore.tabs.some(item => item.path !== tab.value.path && !tab.value.meta?.affixTab),
    },
    {
      icon: () => RenderUnoIcon('i-ant-design:minus-outlined'),
      key: 'closeAll',
      label: '关闭全部',
      disabled: !tabBarStore.tabs.some(item => !item.meta?.affixTab),
    },
  ]
})

function handleSelect(key: string) {
  switch (key) {
    case 'reload':
      tabBarStore.refresh()
      break
    case 'close':
      tabBarStore.closeTab(props.tab || tabBarStore.tabs[tabBarStore.getIndex(route.path)])
      break
    case 'closeLeft':
      tabBarStore.closeLeft(tab.value.path)
      break
    case 'closeRight':
      tabBarStore.closeRight(tab.value.path)
      break
    case 'closeOther':
      tabBarStore.closeOther(tab.value.path)
      break
    case 'closeAll':
      tabBarStore.closeAll()
      break
  }
}
function onClickOutside() {
  visible.value = false
}
</script>

<template>
  <n-dropdown
    v-model:show="visible"
    placement="bottom-start"
    :trigger="trigger"
    :x="x"
    :y="y"
    :options="contextMenu"
    :on-clickoutside="onClickOutside"
    @select="handleSelect"
  >
    <slot />
  </n-dropdown>
</template>

<style scoped lang="scss">

</style>
