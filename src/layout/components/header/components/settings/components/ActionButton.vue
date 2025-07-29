<script lang="ts" setup>
import { useClipboard, useToggle } from '@vueuse/core'
import { cloneDeep } from 'es-toolkit'
import useAppStore, { initialAppStore } from '@/store/modules/app'

const appStore = useAppStore()
const clipboard = useClipboard()
const [visible, toggleVisible] = useToggle()

function copyCurrentConfig() {
  clipboard.copy(JSON.stringify(appStore.$state, null, 4))
  toggleVisible(true)
}

function resetCurrentConfig() {
  appStore.$patch(cloneDeep(initialAppStore))
  appStore.initTheme()
}
</script>

<template>
  <n-flex class="w-full">
    <n-button
      block
      type="primary"
      @click="copyCurrentConfig"
    >
      拷贝当前配置
    </n-button>
    <n-button
      block
      type="warning"
      @click="resetCurrentConfig"
    >
      重置当前配置
    </n-button>
  </n-flex>
  <n-modal
    v-model:show="visible"
    preset="dialog"
    hide-cancel
    title="提示"
    title-align="start"
  >
    复制成功，请到
    <n-button quaternary type="info">
      src/store/modules/app/initial.ts
    </n-button>
    文件中,覆盖
    <n-button quaternary type="info">
      initialAppStore
    </n-button>
    对象
  </n-modal>
</template>

<style lang="scss" scoped>

</style>
