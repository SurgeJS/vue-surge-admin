<script lang="ts" setup>
import { computed } from 'vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

const isCollapsed = computed(() => appStore.isSmallScreen ? appStore.mobileSidebarVisible : appStore.isCollapsedSidebar)

const iconName = computed(() => isCollapsed.value
  ? 'i-ant-design:menu-unfold-outlined'
  : 'i-ant-design:menu-fold-outlined')
function handle() {
  appStore.isSmallScreen ? appStore.toggleMobileSidebarVisible() : appStore.toggleSidebarCollapsed()
}
</script>

<template>
  <hover-container :inverted="appStore.isInvertedHeader" @click="handle">
    <icon :icon="iconName" />
  </hover-container>
</template>

<style scoped>

</style>
