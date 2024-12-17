<script lang="ts" setup>
import AppConstant from '@/constant/app.ts'
import { useGlobalInitialize } from '@/hooks/effect/use-global-init.ts'
import { useGlobalSubscribe } from '@/hooks/effect/use-global-subscribe.ts'
import useAppStore from '@/store/modules/app'
import { dateZhCN, zhCN } from 'naive-ui'

const appStore = useAppStore()

// 全局初始化
useGlobalInitialize()

// 全局订阅
useGlobalSubscribe()
</script>

<template>
  <n-config-provider
    class="w-h-full"
    inline-theme-disabled
    :theme="appStore.naiveTheme"
    :theme-overrides="appStore.themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :breakpoints="AppConstant.SCREEN_BREAKPOINTS"
  >
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>
