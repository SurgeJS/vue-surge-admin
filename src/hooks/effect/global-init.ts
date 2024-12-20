import useAppStore from '@/store/modules/app'
// import day from '@/utils/day'

// 全局初始化
export function useGlobalInitialize() {
  const appStore = useAppStore()
  // 初始主题
  appStore.initTheme()

  // 使用本地化语言
  // day.locale('zh-cn')
}
