import type { GridItemProps, GridProps } from '@/components/common/grid/types'
import type { UnwrapSchema } from '@/components/common/schema-form/types/common.ts'

export interface SchemaFormContent {
  schema: UnwrapSchema[]

  gridProps: GridProps

  gridItemProps?: number | GridItemProps

  disabled?: boolean
}
