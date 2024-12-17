import type { GridItemProps } from '@/components/common/Grid/types'
import type { UnwrapSchema } from '@/components/common/SchemaForm/types/common.ts'

export interface SchemaFormItemProps {
  schema: UnwrapSchema

  id: string

  disabled?: boolean

  gridItemProps?: GridItemProps | number
}
