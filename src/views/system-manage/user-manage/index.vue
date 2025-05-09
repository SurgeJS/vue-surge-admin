<script setup lang="tsx">
import type { TreeOption } from 'naive-ui'

const data: TreeOption[] = [
  {
    label: '0',
    key: '0',
    children: [
      {
        label: '0-0',
        key: '0-0',
        children: [
          { label: '0-0-0', key: '0-0-0' },
          { label: '0-0-1', key: '0-0-1' },
        ],
      },
      {
        label: '0-1',
        key: '0-1',
        children: [
          { label: '0-1-0', key: '0-1-0' },
          { label: '0-1-1', key: '0-1-1' },
        ],
      },
    ],
  },
  {
    label: '1',
    key: '1',
    children: [
      {
        label: '1-0',
        key: '1-0',
        children: [
          { label: '1-0-0', key: '1-0-0' },
          { label: '1-0-1', key: '1-0-1' },
        ],
      },
      {
        label: '1-1',
        key: '1-1',
        children: [
          { label: '1-1-0', key: '1-1-0' },
          { label: '1-1-1', key: '1-1-1' },
        ],
      },
    ],
  },
]
</script>

<template>
  <n-split :default-size="0.25">
    <template #1>
      <n-card class="h-full" title="组织机构">
        <n-input placeholder="搜索" />
        <n-tree
          block-line
          :data="data"
        />
      </n-card>
    </template>
  </n-split>
</template>

<style scoped lang="scss">

</style>
