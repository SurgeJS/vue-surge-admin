<script lang="ts" setup>
import ContextMenu from '@/layout/components/header/components/settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <n-divider>头部</n-divider>
  <n-flex>
    <ContextMenu label="头部高度">
      <n-input-number v-model:value="appStore.headerHeight" :step="10" />
    </ContextMenu>
    <ContextMenu label="标签栏高度">
      <n-input-number v-model:value="appStore.tabBarHeight" :step="10" />
    </ContextMenu>
    <ContextMenu label="显示标签栏">
      <n-switch v-model:value="appStore.tabBarVisible" />
    </ContextMenu>
    <ContextMenu label="显示面包屑">
      <n-switch v-model:value="appStore.breadcrumbVisible" />
    </ContextMenu>
  </n-flex>
</template>

<style scoped>

</style>
