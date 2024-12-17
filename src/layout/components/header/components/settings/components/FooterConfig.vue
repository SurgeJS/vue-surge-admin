<script lang="ts" setup>
import ContextMenu from '@/layout/components/header/components/settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <n-divider>底部</n-divider>
  <n-flex>
    <ContextMenu label="显示底部">
      <n-switch v-model:value="appStore.footerVisible" />
    </ContextMenu>
    <ContextMenu label="底部高度">
      <n-input-number v-model:value="appStore.footerHeight" :step="10" />
    </ContextMenu>
  </n-flex>
</template>

<style scoped>

</style>
