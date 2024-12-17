export interface FoldAnimationProps {
  // 进入页面立即执行
  appear?: boolean

  // 持续时间
  duration?: number

  // 方向
  direction?: 'horizontal' | 'vertical'

  // 固定长度
  fixedLength?: boolean

  // 初始长度
  initialLength?: string | number
}
