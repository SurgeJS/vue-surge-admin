/* --------------基础表单-------------- */
import type {
  SchemaFormCommonExpose,
  SchemaFormCommonProps,
  SchemaFormCommonSlots,
  UnwrapSchema,
} from '@/components/common/schema-form/types/common.ts'

export interface SchemaFormProps extends SchemaFormCommonProps {
  // schema 配置
  schema: UnwrapSchema[]
}

export interface SchemaFormExpose extends SchemaFormCommonExpose {
}

export interface SchemaFormSlots extends SchemaFormCommonSlots {

}
