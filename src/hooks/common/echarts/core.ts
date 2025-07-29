import type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
} from 'echarts/charts'
import type {
  DatasetComponentOption,
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import type {
  ComposeOption,
} from 'echarts/core'
import {
  BarChart,
  LineChart,
  PieChart,
} from 'echarts/charts'
import { // 数据集组件
  DatasetComponent,
  DataZoomComponent,
  GeoComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  ParallelComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import darkJSON from '@/hooks/common/echarts/dark.json'
import lightJSON from '@/hooks/common/echarts/light.json'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

// Echarts实例
export type EchartsInstance = ReturnType<typeof echarts.init>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  MarkPointComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  ToolboxComponent,
  GeoComponent,
  ParallelComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])

echarts.registerTheme('light', lightJSON)
echarts.registerTheme('dark', darkJSON)

export default echarts
