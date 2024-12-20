import type { ResponsiveValue } from '@/components/common/grid/types'
import AppConstant from '@/constant/app.ts'
import { isObject } from 'es-toolkit/compat'

function responsivePropsValue<K extends Recordable>(width: Ref<number>, data: K, key: keyof K) {
  const getResponsiveValue = (record: ResponsiveValue) => {
    const b = AppConstant.SCREEN_BREAKPOINTS
    const { xs, sm, md, lg, xl } = record
    const w = width.value
    if (xs && w <= b.xs)
      return xs
    let v: any
    if (sm && (w > b.xs || w >= b.sm))
      v = sm
    if (md && w >= b.md)
      v = md
    if (lg && w >= b.lg)
      v = lg
    if (xl && w >= b.xl)
      v = xl
    return v
  }

  return computed(() => Number(isObject(data[key]) ? getResponsiveValue(data[key]) : data[key]))
}

export default responsivePropsValue
