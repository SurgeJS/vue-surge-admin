import { useEventListener } from '@vueuse/core'
import { useOsTheme } from 'naive-ui'
import { appCache } from '@/store/caches'
import useAppStore from '@/store/modules/app'

// 全局订阅(包含事件、监听器)
export function globalSubscribe() {
  const appStore = useAppStore()
  const osTheme = useOsTheme()

  // 监听窗口关闭
  useEventListener(window, 'unload', () => {
    // 储存 AppConfig
    appCache.set(appStore.$state)
  })

  // 监听操作系统主题变化
  watch(osTheme, () => {
    if (appStore.themeModeFollowingSystem)
      appStore.toggleThemeMode(osTheme.value as ThemeMode)
  })
}
