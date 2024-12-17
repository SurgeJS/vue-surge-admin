<script lang="ts" setup>
import ContextMenu from '@/layout/components/header/components/settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'

defineOptions({ name: '' })
const appStore = useAppStore()

const animationList = [
  {
    label: '缩放',
    value: 'zoom-fade',
  },
  {
    label: '左滑动',
    value: 'left-slide-fade',
  },
  {
    label: '右滑动',
    value: 'right-slide-fade',
  },
]
</script>

<template>
  <n-divider>其他</n-divider>
  <n-flex>
    <ContextMenu label="开启页面切换动画">
      <n-switch v-model:value="appStore.isPageStartAnimation" />
    </ContextMenu>
    <ContextMenu label="页面切换动画风格">
      <n-select v-model:value="appStore.pageAnimationMode" :options="animationList" />
    </ContextMenu>
  </n-flex>
</template>

<style scoped>

</style>
