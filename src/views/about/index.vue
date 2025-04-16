<script lang="ts" setup>
import { watch } from 'vue'

const m = reactive(new Map())

watch(() => m.get('test'), (value) => {
  console.log('触发了', value)
})

const test = () => {
  m.set('test', 1)

  setTimeout(() => {
    m.delete('test')
  }, 1000)
}
</script>

<template>
  <div class="h-full w-full overflow-auto bg-blue">
    <n-button @click="test">
      test
    </n-button>
  </div>
</template>

<style scoped>
div{
  background: theme('backgroundColor.container');
  color: red;
}
</style>
