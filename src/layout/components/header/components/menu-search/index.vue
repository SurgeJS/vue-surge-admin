<script setup lang="ts">
import MenuSearchModal from '@/layout/components/header/components/menu-search/components/menu-search-modal.vue'
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'MenuSearch' })
const appStore = useAppStore()
const [visible, setVisible] = useToggle()
</script>

<template>
  <hover-container :inverted="appStore.isInvertedHeader" @click="setVisible(true)">
    <icon icon="i-ant-design:search-outlined" />
  </hover-container>
  <MenuSearchModal v-model:visible="visible" />
</template>

<style lang="scss" scoped>

</style>
