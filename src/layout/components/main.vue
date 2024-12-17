<script lang="ts" setup>
import FullScreenLoading from '@/layout/components/full-screen-loading.vue'
import PageTransition from '@/layout/components/page-transition.vue'
import useAppStore from '@/store/modules/app'
import useTabBarStore from '@/store/modules/tab-bar'
import { computed } from 'vue'

const tabBarStore = useTabBarStore()
const appStore = useAppStore()

const transitionName = computed(() => appStore.isPageStartAnimation ? appStore.pageAnimationMode : undefined)
</script>

<template>
  <n-layout-content
    :content-style="{ paddingTop: appStore.tabBarVisible ? 0 : '10px' }"
    content-class="flex-1 flex-shrink-0 p-[10px]"
  >
    <n-back-top right="20" bottom="50" />
    <transition name="fade">
      <FullScreenLoading v-show="appStore.fullScreenLoading" />
    </transition>
    <router-view v-slot="{ Component, route }">
      <PageTransition :name="transitionName">
        <keep-alive :include="tabBarStore.cacheMenus as string[]">
          <component
            :is="Component"
            v-if="tabBarStore.refreshFlag"
            :key="route.path"
          />
        </keep-alive>
      </PageTransition>
    </router-view>
  </n-layout-content>
</template>

<style lang="scss">

</style>
