import type { GridItemProps } from '@/components/common/grid/types'
import type { UnwrapSchema } from '@/components/common/schema-form/types/common.ts'

export interface SchemaFormItemProps {
  schema: UnwrapSchema

  id: string

  disabled?: boolean

  gridItemProps?: GridItemProps | number
}
