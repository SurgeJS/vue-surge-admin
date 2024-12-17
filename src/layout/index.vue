<script lang="ts" setup>
import LayoutFooter from '@/layout/components/footer.vue'
import LayoutHeader from '@/layout/components/header/index.vue'
import LayoutMain from '@/layout/components/main.vue'
import LayoutSidebar from '@/layout/components/sidebar/index.vue'
import TabBar from '@/layout/components/tabbar/index.vue'
</script>

<template>
  <n-layout
    embedded
    has-sider
    class="h-full"
  >
    <LayoutSidebar />
    <n-layout content-class="flex flex-col ">
      <LayoutHeader />
      <TabBar />
      <LayoutMain />
      <LayoutFooter />
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>

</style>
