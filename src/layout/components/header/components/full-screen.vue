<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
import { computed } from 'vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
const { isFullscreen, toggle } = useFullscreen()
const iconName = computed(() => !isFullscreen ? 'i-ant-design:expand-outlined' : 'i-ant-design:compress-outlined')
</script>

<template>
  <hover-container :inverted="appStore.isInvertedHeader" @click="toggle">
    <icon :icon="iconName" />
  </hover-container>
</template>
