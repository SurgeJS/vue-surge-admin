<script lang="ts" setup>
import { ref } from 'vue'
import ActionButton from '@/layout/components/header/components/settings/components/ActionButton.vue'
import FooterConfig from '@/layout/components/header/components/settings/components/FooterConfig.vue'
import HeaderConfig from '@/layout/components/header/components/settings/components/HeaderConfig.vue'
import LayoutMode from '@/layout/components/header/components/settings/components/LayoutMode.vue'
import LayoutStyle from '@/layout/components/header/components/settings/components/LayoutStyle.vue'
import OtherConfig from '@/layout/components/header/components/settings/components/OtherConfig.vue'
import SidebarConfig from '@/layout/components/header/components/settings/components/SidebarConfig.vue'
import ThemeColor from '@/layout/components/header/components/settings/components/ThemeColor.vue'
import ThemeMode from '@/layout/components/header/components/settings/components/ThemeMode.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

const open = ref(false)
</script>

<template>
  <n-drawer
    v-model:show="open"
    width="400"
    title="系统配置"
  >
    <n-drawer-content closable title="系统配置">
      <ThemeMode />
      <ThemeColor />
      <LayoutMode />
      <LayoutStyle />
      <SidebarConfig />
      <HeaderConfig />
      <FooterConfig />
      <OtherConfig />
      <template #footer>
        <ActionButton />
      </template>
    </n-drawer-content>
  </n-drawer>
  <hover-container :inverted="appStore.isInvertedHeader" @click="open = !open">
    <icon icon="i-ic:baseline-settings" />
  </hover-container>
</template>

<style lang="scss" scoped>

</style>
