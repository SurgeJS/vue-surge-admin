import type { RendererType } from 'echarts/types/src/util/types'
import type { Ref } from 'vue'
import type { ECOption } from './core'
import useAppStore from '@/store/modules/app'
import { getCSSVariable } from '@/utils'
import { useTimeoutFn } from '@vueuse/core'
import { isRef, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import echarts from './core'

type EchartsInstance = ReturnType<typeof echarts.init>

const echartsInstanceSet = new Set<EchartsInstance>()

// 用于监听 dom 大小变化
const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((item) => {
    const echartsInstance = [...echartsInstanceSet].find(echartsInstance => echartsInstance.getDom() === item.target)
    if (echartsInstance)
      echartsInstance.resize({
        width: 'auto',
        height: 'auto',
      })
  })
})

// 调色板
const palette = [`rgb(${getCSSVariable('primary-6')})`]

function useEcharts(renderMode: RendererType = 'canvas') {
  let echartsInstance: EchartsInstance | undefined
  const echartsDom = ref<HTMLElement>()
  const appStore = useAppStore()
  // 初始化
  const init = async () => {
    await nextTick()
    if (!echartsDom.value)
      return
    resizeObserver.unobserve(echartsDom.value)
    if (echartsInstance) {
      echartsInstance?.dispose()
      echartsInstanceSet.delete(echartsInstance)
    }
    echartsInstance = echarts.init(echartsDom.value, appStore.themeMode, {
      renderer: renderMode,
    })
    resizeObserver.observe(echartsDom.value)
    echartsInstanceSet.add(echartsInstance)
  }

  // 获取 echarts 实例
  const getEchartsInstance = () => echartsInstance

  // 设置 option
  const setOption = (option: ECOption | Ref<ECOption>) => {
    const eOption = isRef(option) ? option.value : option
    useTimeoutFn(() => {
      echartsInstance?.setOption({ backgroundColor: 'transparent', color: palette, ...eOption })
    }, 0)
  }

  const showLoading = () => {
    echartsInstance?.showLoading({
      maskColor: getCSSVariable('color-fill-3'),
      textColor: getCSSVariable('color-text-1'),
      zlevel: 1,
    })
  }

  const hideLoading = () => {
    echartsInstance?.hideLoading()
  }

  onMounted(async () => {
    await init()
  })

  onUnmounted(() => {
    echartsDom.value && resizeObserver.unobserve(echartsDom.value)
  })

  watch(() => appStore.themeMode, async () => {
    const option = echartsInstance?.getOption()
    await init()
    option && setOption(option)
  })

  return { echartsDom, getEchartsInstance, setOption, showLoading, hideLoading }
}

export default useEcharts
