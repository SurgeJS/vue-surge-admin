// 'self' 根据自身宽度进行响应式布局，'screen' 根据屏幕断点进行响应式布局
export type RowResponsive = 'self' | 'screen'

export type ResponsiveValue<K extends number = number> = Partial<Record<BreakpointType, K>>

export interface GridProps {
  // 列数量,默认 24
  cols?: number | ResponsiveValue

  // 是否折叠
  collapsed?: boolean

  // 折叠时显示的行数
  notCollapsedRows?: number

  // 'self' 根据自身宽度进行响应式布局，'screen' 根据屏幕断点进行响应式布局
  responsive?: RowResponsive

  // X 间距
  xGap?: number | ResponsiveValue

  // Y 间距
  yGap?: number | ResponsiveValue
}

export interface GridItemProps {
  // 栅格占据的列数，为 0 的时候会隐藏,大于 Grid cols 数量的时候会错位,默认 1
  span?: number | ResponsiveValue

  // 左侧的间隔格数
  offset?: number | ResponsiveValue

  // 栅格后缀(不会被折叠)
  suffix?: boolean
}

export interface GridItemData {
  span: number

  offset: number

  suffix: boolean
}
