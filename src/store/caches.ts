import type { MenuSearchOption } from '@/layout/components/header/components/menu-search/components/menu-search-modal.vue'
import type { AppStore } from '@/store/modules/app/type'
import { createCache } from '@/utils/cache'

// Token缓存
export const tokenCache = createCache<string>('SLEEK_TOKEN', 'cookie')

// App配置缓存
export const appCache = createCache<AppStore>('SLEEK_APP')

// 菜单搜索缓存
export const menuSearchCache = createCache<MenuSearchOption[]>('SLEEK_MENU_SEARCH')
