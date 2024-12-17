<script lang="ts" setup>
import Menu from '@/layout/components/menu/index.vue'
import useAppStore from '@/store/modules/app'
import { wrapperMetaEnv } from '@/utils/env'
import { computed } from 'vue'

interface Props {
  menus: AppRouteRecordRaw[]
}

defineProps<Props>()

const appStore = useAppStore()

const { VITE_APP_TITLE } = wrapperMetaEnv()

const thumbtackIcon = computed(() => appStore.isFixedMixSidebarDrawer
  ? 'i-ant-design:pushpin-filled'
  : 'i-ant-design:pushpin-twotone')

const dynamicStyles = computed(() => {
  return {
    width: `${appStore.sidebarWidth}px`,
    left: `${appStore.dynamicMixSidebarWidth - 0.5}px`,
  }
})
</script>

<template>
  <transition name="fold">
    <div
      v-show="appStore.mixSidebarDrawerVisible"
      :style="dynamicStyles"
      class="mixMenuDrawers"
      :class="{ inverted: appStore.isInvertedSidebar }"
    >
      <div :style="{ height: `${appStore.headerHeight}px` }" class="mixMenuDrawers-header">
        {{ VITE_APP_TITLE }}
        <icon
          :icon="thumbtackIcon"
          class="mixMenuDrawers-header-fixed"
          @click="appStore.toggleFixedMixSidebarDrawer()"
        />
      </div>
      <div :style="{ width: `${appStore.sidebarWidth}px` }" class="mixMenuDrawers-container">
        <Menu :inverted="appStore.isInvertedSidebar" :routes="menus" />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.mixMenuDrawers {
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
  overflow: hidden;
  background: theme('backgroundColor.container');
  border-right: 1px solid theme('borderColor.tertiary');
  display: flex;
  flex-direction: column;
  transition: left .2s ease-in-out;

  &.inverted {
    background: theme('backgroundColor.inverted');
    border-right: 1px solid theme('borderColor.inverted');

    .mixMenuDrawers-header {
      border-bottom: 1px solid theme('borderColor.inverted');
    }
  }

  &-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid theme('borderColor.secondary');
    position: relative;
    white-space: nowrap;

    &-fixed {
      position: absolute;
      right: 5px;
      top: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  }

  &-container {
    flex: 1;
    overflow: auto;
  }
}

.slideIn-enter-active,
.slideIn-leave-active {
  transition: 0.2s;
  overflow: hidden;
}

.slideIn-enter-from,
.slideIn-leave-to {
  width: 0 !important;
}
</style>
