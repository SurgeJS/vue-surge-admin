// 页面切换动画: 左滑淡出 | 右滑淡出 | 缩放淡入淡出
export type PageAnimationMode = | 'left-slide-fade' | 'right-slide-fade' | 'zoom-fade'

// 布局模式：侧边 | 混合侧边 | 顶部
export type LayoutMode = 'side' | 'mix-side' | 'top'

// 布局风格: 侧边暗黑 | 侧边顶部暗黑 | 侧边顶部明亮
export type LayoutStyle = 'side-dark' | 'side-top-dark' | 'side-top-light'

export interface Option<T> {
  value: T
  label: string
}

// 布局模式选项
export type LayoutModeOption = Option<LayoutMode>

// 布局风格选项
export type LayoutStyleOption = Option<LayoutStyle>

// 头部
export interface LayoutHeader {
  // 是否开启面包屑
  breadcrumbVisible: boolean

  // 标签栏可见
  tabBarVisible: boolean

  // 高度
  headerHeight: number

  // 标签栏高度
  tabBarHeight: number
}

// 底部
export interface LayoutFooter {
  // 底部可见
  visible: boolean

  // 高度
  height: number
}

export interface AppStore {
  // 主题颜色
  themeColor: string

  // 主题模式
  themeMode: ThemeMode

  // 主题模式跟随系统
  themeModeFollowingSystem?: boolean

  // 是否开启页面切换动画
  isPageStartAnimation: boolean

  // 页面动画
  pageAnimationMode: PageAnimationMode

  // 布局模式
  layoutMode: LayoutMode

  // 布局风格
  layoutStyle: LayoutStyle

  // 全屏loading
  fullScreenLoading: boolean

  // 是否折叠侧边栏
  isCollapsedSidebar: boolean

  // 是否折叠混合侧边栏
  isCollapsedMixSidebar: boolean

  // 是否固定混合侧边栏抽屉
  isFixedMixSidebarDrawer: boolean

  // 混合侧边栏抽屉是否可见
  mixSidebarDrawerVisible: boolean

  // 菜单是否开启手风琴模式
  isMenuAccordion: boolean

  // 移动端 Sidebar 可见
  mobileSidebarVisible: boolean

  // 侧边栏宽度
  sidebarWidth: number

  // 折叠侧边栏的宽度
  collapsedSidebarWidth: number

  // 混合侧边栏宽度
  mixSidebarWidth: number

  // 是否开启面包屑
  breadcrumbVisible: boolean

  // 标签栏可见
  tabBarVisible: boolean

  // 高度
  headerHeight: number

  // 标签栏高度
  tabBarHeight: number

  // 底部可见
  footerVisible: boolean

  // 高度
  footerHeight: number
}
