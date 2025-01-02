<script setup lang="ts">
/* import type { ECOption } from '@/hooks/common/echarts/core.ts'
import type { ResponseError } from '@/services/request/axios/types.ts'
import useEcharts from '@/hooks/common/echarts'
import { useRequest } from '@/services/hooks/request'

const { echartsDom: echartsDom1, render: render1 } = useEcharts()
const { echartsDom: echartsDom2, render: render2 } = useEcharts()
const { echartsDom: echartsDom3, render: render3 } = useEcharts()
const { echartsDom: echartsDom4, render: render4 } = useEcharts()
const a = 1

const option: ECOption = {
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 5,
    // width: '100%',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [200, 1000, 901, 2000, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ],
}

const service = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const time = Date.now()
      resolve([time, undefined, {
        code: 200,
        msg: 'test',
        result: time,
      }])
    }, 500, undefined)
  })
}

const { data, rawData, loading, error, run, refresh, response } = useRequest(service, {
  loadingDelay: 600,
  defaultParams: [{ test: 99 }, true],
  onSuccess(data, params, response) {
    // response.config.data?.test
    // console.log(response.data)
    // render1(option)
    // render2(option)
    // render3(option)
    // render4(option)
  },
})

const countList = computed(() => {
  return [
    {
      name: '用户数量',
      count: data.value?.userTotal,
      icon: 'i-fxemoji:palmtree',
      chart: echartsDom1,
    },
    {
      name: '访问量',
      count: data.value?.visitCount,
      icon: 'i-fxemoji:documenttextpicture',
      chart: echartsDom2,
    },
    {
      name: '下载',
      count: data.value?.downloadCount,
      icon: 'i-fxemoji:handbag',
      chart: echartsDom3,
    },
    {
      name: '使用量',
      count: data.value?.useCount,
      icon: 'i-fxemoji:pencil',
      chart: echartsDom4,
    },
  ]
})

const test = () => {
  run({ test: 1 }).catch((error: ResponseError) => {
    console.log(error)
  })
} */
</script>

<template>
  <!--  <n-button @click="refresh()"> -->
  <!--    {{ loading ? 'loading...' : '刷新22' }} -->
  <!--  </n-button> -->
  <grid :x-gap="10" :y-gap="10" :cols="{ xs: 4, sm: 8, md: 8, lg: 16, xl: 16 }">
    <!--    <grid-item v-for="(item, i) in countList" :key="i" :span="4"> -->
    <!--      <n-card hoverable @click="test"> -->
    <!--        <div v-if="loading" class="w-full flex flex-col gap-2"> -->
    <!--          <n-skeleton height="20px" width="100%" text :sharp="false" /> -->
    <!--          <div class="gpa-1 flex justify-between"> -->
    <!--            <n-skeleton height="15px" width="30%" text :sharp="false" /> -->
    <!--            <n-skeleton height="15px" width="60%" text :sharp="false" /> -->
    <!--          </div> -->
    <!--          <n-skeleton width="100%" height="40px" :sharp="false" /> -->
    <!--        </div> -->
    <!--        <div v-else class="w-full flex flex-col gap-1"> -->
    <!--          <div class="flex items-center justify-between text-[20px]"> -->
    <!--            <div class="flex-y-center gap-1 text-lg font-bold"> -->
    <!--              <div class="h-30px w-30px flex-center bg-fill-secondary"> -->
    <!--                <icon size="24px" :icon="item.icon" /> -->
    <!--              </div> -->
    <!--              {{ item.name }} -->
    <!--            </div> -->
    <!--            <n-number-animation -->
    <!--              show-separator -->
    <!--              :from="0" -->
    <!--              :to="item.count" -->
    <!--            /> -->
    <!--          </div> -->
    <!--          <div :ref="(el) => item.chart.value = el" class="h-60px w-full" /> -->
    <!--        </div> -->
    <!--      </n-card> -->
    <!--    </grid-item> -->
    1
  </grid>
<!--  <p v-if="!loading"> -->
<!--    {{ data }} -->
<!--  </p> -->
<!--  <p v-else> -->
<!--    loading... -->
<!--  </p> -->
</template>

<style scoped lang="scss">
</style>
