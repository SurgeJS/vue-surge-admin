<script lang="ts" setup>
import Avatar from '@/layout/components/header/components/avatar.vue'
import Breadcrumb from '@/layout/components/header/components/breadcrumb.vue'
import FullScreen from '@/layout/components/header/components/full-screen.vue'
import MenuCollapsed from '@/layout/components/header/components/menu-collapsed.vue'
import MenuSearch from '@/layout/components/header/components/menu-search/index.vue'
import Settings from '@/layout/components/header/components/settings/index.vue'
import Logo from '@/layout/components/logo.vue'
import Menu from '@/layout/components/menu/index.vue'
import useAppStore from '@/store/modules/app'
import useAuthStore from '@/store/modules/auth'

defineOptions({ name: 'HeaderContent' })
const appStore = useAppStore()
const authStore = useAuthStore()
</script>

<template>
  <n-layout-header
    :style="{ height: `${appStore.headerHeight}px` }"
    :inverted="appStore.isInvertedHeader"
    bordered
    class="layout-header"
  >
    <n-flex>
      <MenuCollapsed v-if="appStore.isSmallScreen || appStore.layoutMode === 'side'" />
      <Breadcrumb v-if="appStore.layoutMode !== 'top' && appStore.breadcrumbVisible && !appStore.isSmallScreen" />
      <Logo v-if="appStore.layoutMode === 'top' && !appStore.isSmallScreen" />
    </n-flex>
    <Menu
      v-if="appStore.layoutMode === 'top' && !appStore.isSmallScreen"
      :routes="authStore.routes"
      :inverted="appStore.isInvertedHeader"
      responsive
      mode="horizontal"
    />
    <n-flex :wrap="false" align="center">
      <MenuSearch />
      <theme-switch :inverted="appStore.isInvertedHeader" />
      <FullScreen />
      <Settings />
      <Avatar />
    </n-flex>
  </n-layout-header>
</template>

<style lang="scss" scoped>
.layout-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  transition: height .2s ease-in-out;
  flex-shrink: 0;
}
</style>
