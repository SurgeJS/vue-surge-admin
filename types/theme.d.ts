// 主题模式
declare type ThemeMode = 'light' | 'dark'

// 中性色主题
declare interface NeutralTheme {
  // 文字颜色
  textColor?: ThemeTextColor

  // 背景颜色
  backgroundColor?: ThemeBackgroundColor

  // 边框颜色
  borderColor?: ThemeBorderColor

  // 填充颜色
  fillColor?: ThemeFillColor
}

// 主题
declare interface Theme {
  // 字体大小
  textSize: TextSize

  // 边框圆角
  borderRadius: ThemeBorderRadius
}

// 主题模式配置
declare type ThemeModeConfig = Record<ThemeMode, NeutralTheme>

// 文字颜色
declare interface ThemeTextColor {
  // 一级文本颜色
  base?: string

  // 二级文本颜色
  secondary?: string

  // 三级文本颜色
  tertiary?: string

  // 禁用
  disabled?: string

  // 反转
  inverted?: string
}

// 背景颜色
declare interface ThemeBackgroundColor {
  // 布局背景颜色
  layout?: string

  // 容器背景颜色
  container?: string

  // 浮层背景颜色
  layer?: string

  // 遮罩层背景
  mask?: string

  // 反转
  inverted?: string
}

// 边框颜色
declare interface ThemeBorderColor {
  // 一级边框颜色
  base?: string

  // 二级边框颜色
  secondary?: string

  // 三级边框颜色
  tertiary?: string

  // 反转
  inverted?: string
}

// 填充颜色
declare interface ThemeFillColor {
  // 一级填充颜色
  base?: string

  // 二级填充颜色
  secondary?: string

  // 三级填充颜色
  tertiary?: string

  // 反转
  inverted?: string
}

// 字体大小
declare interface TextSize {
  sm?: string

  md?: string

  lg?: string
}

// 边框圆角
declare interface ThemeBorderRadius {
  sm?: string

  md?: string

  lg?: string
}

declare type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// 屏幕断点
declare type Breakpoints<T = number> = Record<BreakpointType, T>
