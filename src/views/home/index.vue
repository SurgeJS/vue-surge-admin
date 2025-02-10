<script setup lang="ts">
import Chart from '@/views/home/chart.vue'
import Statistics from '@/views/home/statistics.vue'

onMounted(() => {
  console.log()
})
</script>

<template>
  <div class="h-full flex flex-col gap-10px">
    <Statistics />
    <Chart />
  </div>
</template>

<style scoped lang="scss"></style>
