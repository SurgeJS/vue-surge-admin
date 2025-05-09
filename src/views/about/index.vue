<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import packageJson from '~/package.json'

const pak = packageJson as any
const appStore = useAppStore()
const column = computed(() => appStore.isSmallScreen ? 1 : 2)
</script>

<template>
  <n-space vertical>
    <n-card title="关于" bordered segmented size="small">
      {{ pak.description }}
    </n-card>
    <n-card title="项目信息" bordered segmented size="small">
      <n-descriptions :column="column" label-placement="left" bordered>
        <n-descriptions-item label="版本">
          {{ pak.version }}
        </n-descriptions-item>
        <n-descriptions-item label="Github">
          <a href="https://github.com/SurgeJS/surge-admin.git">Github地址</a>
        </n-descriptions-item>
        <n-descriptions-item label="预览地址">
          <a href="https://github.com/SurgeJS/surge-admin.git">预览地址</a>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
    <n-card title="生产依赖" bordered segmented size="small">
      <n-descriptions :column="column" label-placement="left" bordered>
        <n-descriptions-item
          v-for="(value, key) in pak.dependencies as object"
          :key="key"
          :label="key"
        >
          {{ value }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
    <n-card title="开发依赖" bordered segmented size="small">
      <n-descriptions :column="column" label-placement="left" bordered>
        <n-descriptions-item
          v-for="(value, key) in pak.devDependencies as object"
          :key="key"
          :label="key"
        >
          {{ value }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </n-space>
</template>

<style scoped>

</style>
