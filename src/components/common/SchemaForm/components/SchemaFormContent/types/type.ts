import type { GridItemProps, GridProps } from '@/components/common/Grid/types'
import type { UnwrapSchema } from '@/components/common/SchemaForm/types/common.ts'

export interface SchemaFormContent {
  schema: UnwrapSchema[]

  gridProps: GridProps

  gridItemProps?: number | GridItemProps

  disabled?: boolean
}
