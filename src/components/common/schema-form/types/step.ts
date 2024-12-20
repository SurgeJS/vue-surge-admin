/* --------------分步表单-------------- */

import type {
  DefineSchema,
  SchemaFormCommonExpose,
  SchemaFormCommonProps,
  SchemaFormCommonSlots,
} from '@/components/common/schema-form/types/common.ts'
// 步骤条表单结构
import type { ComponentsName } from '@/components/common/schema-form/types/component.ts'
import type { StepsProps } from 'naive-ui'

export interface StepSchemaType<
  TForm extends Recordable = any,
  DComponentsName extends ComponentsName = ComponentsName,
> {
  // 标题
  title?: MaybeRef<string>

  // 描述
  description?: MaybeRef<string>

  // 图标
  icon?: VNode

  // 表单
  form: DefineSchema<TForm, DComponentsName>[]
}

export interface StepSchemaFormProps extends SchemaFormCommonProps {
  // schema 配置
  schema: StepSchemaType[]

  // 分步激活项
  active?: number

  // 分步属性
  stepsProps?: StepsProps

  // 上一步Loading
  preLoading?: boolean

  // 上一步按钮文字
  preText?: string

  // 下一步Loading
  nextLoading?: boolean

  // 下一步按钮文字
  nextText?: string

  // 上一步
  onPre?: (active: number, currentModel: Recordable, expose: StepSchemaFormExpose) => void

  // 下一步
  onNext?: (active: number, currentModel: Recordable, expose: StepSchemaFormExpose) => void
}

export interface StepSchemaFormExpose extends SchemaFormCommonExpose {
}

export interface StepSchemaFormSlots extends SchemaFormCommonSlots {
}
