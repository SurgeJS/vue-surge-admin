<script lang="ts" setup>
import ContextMenu from '@/layout/components/header/components/settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <n-divider>侧边栏</n-divider>
  <n-flex>
    <ContextMenu label="折叠侧边栏">
      <n-switch v-model:value="appStore.isCollapsedSidebar" />
    </ContextMenu>
    <ContextMenu label="侧边栏宽度">
      <n-input-number v-model:value="appStore.sidebarWidth" :step="40" />
    </ContextMenu>
    <ContextMenu label="折叠混合侧边栏">
      <n-switch v-model:value="appStore.isCollapsedMixSidebar" />
    </ContextMenu>
    <ContextMenu label="混合侧边栏宽度">
      <n-input-number v-model:value="appStore.mixSidebarWidth" :step="10" />
    </ContextMenu>
    <ContextMenu label="侧边栏折叠宽度">
      <n-input-number v-model:value="appStore.collapsedSidebarWidth" :step="10" />
    </ContextMenu>
    <ContextMenu label="菜单开启手风琴模式">
      <n-switch v-model:value="appStore.isMenuAccordion" />
    </ContextMenu>
  </n-flex>
</template>

<style scoped>

</style>
