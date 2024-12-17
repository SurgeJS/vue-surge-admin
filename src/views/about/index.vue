<script lang="ts" setup>
import { format } from 'date-fns'
import { ref } from 'vue'

const value = ref()

function test() {
  // b.value.test = 222
  // appStore.toggleFullScreenLoading(true)
  console.log(value.value)
}

console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
</script>

<template>
  <div class="h-full w-full">
    <n-flex>
      <n-date-picker value-format="T" />
      <n-input v-model:value.number="value" />
      <n-button @click="test">
        test222
      </n-button>
      {{ value }}
      <br>
      <span class="p-10px hover:bg-[rgba(255,255,255,.1)]">55</span>
      <span class="p-10px hover:bg-[rgba(255,255,255,.08)]">55</span>
      <span class="p-10px hover:bg-[rgba(255,255,255,.05)]">55</span>

      <span class="p-10px hover:bg-[rgba(50,50,50,.1)]">55</span>
      <span class="p-10px hover:bg-[rgba(0,0,0,.08)]">55</span>
      <span class="p-10px hover:bg-[rgba(0,0,0,.05)]">55</span>
    </n-flex>
    <n-divider>字体颜色梯度</n-divider>
    <n-card class="mt-20px" title="卡片">
      <n-form>
        <n-grid :x-gap="10">
          <n-form-item-gi :span="12" label="tet">
            <n-input />
          </n-form-item-gi>
          <test />
        </n-grid>
      </n-form>
    </n-card>
  </div>
</template>

<style scoped>

</style>
