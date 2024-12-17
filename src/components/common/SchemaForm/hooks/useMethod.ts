import type { SchemaFormCommonExpose, SchemaFormCommonProps } from '@/components/common/SchemaForm/types/common.ts'
import type { ModelRef } from 'vue'

function useMethod(props: SchemaFormCommonProps, expose: SchemaFormCommonExpose, model: ModelRef<Recordable>) {
  const handleSubmit = () => {
    if (props.onSubmit)
      props.onSubmit(expose.validate, model.value)

    else
      expose.validate()
        .then(() => props.onFinish?.(model.value))
        .catch(err => props.onFinishFailed?.(err))
  }

  const handleReset = () => {
    props.onReset ? props.onReset(expose.resetFields, model.value) : expose.resetFields()
  }
  return { handleSubmit, handleReset }
}

export default useMethod
