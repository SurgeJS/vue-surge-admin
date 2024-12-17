<script setup lang="ts">
import ComplexLayout from '@/views/component/schemaForm/components/ComplexLayout.vue'
import DefaultLayout from '@/views/component/schemaForm/components/DefaultLayout.vue'
import GroupForm from '@/views/component/schemaForm/components/GroupForm.vue'
import PopupForm from '@/views/component/schemaForm/components/PopupForm.vue'
import SearchForm from '@/views/component/schemaForm/components/SearchForm.vue'
import TwoColumnLayout from '@/views/component/schemaForm/components/TwoColumnLayout.vue'

const tabs = [
  {
    name: '默认布局',
    component: DefaultLayout,
  },
  {
    name: '两栏布局',
    component: TwoColumnLayout,
  },
  {
    name: '复杂布局',
    component: ComplexLayout,
  },
  {
    name: '响应式表单',
    component: DefaultLayout,
  },
  {
    name: '查询表单',
    component: SearchForm,
  },
  {
    name: '分组表单',
    component: GroupForm,
  },
  {
    name: '弹框&抽屉表单',
    component: PopupForm,
  },
]
</script>

<template>
  <n-card
    class="h-full"
    content-class="h-full overflow-hidden"
  >
    <n-tabs
      pane-wrapper-class="flex-1"
      class="h-full"
      type="segment"
      animated
    >
      <n-tab-pane
        v-for="item in tabs"
        :key="item.name"
        class="h-full overflow-auto"
        :name="item.name"
        :tab="item.name"
      >
        <component :is="item.component" />
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<style scoped lang="scss">

</style>
