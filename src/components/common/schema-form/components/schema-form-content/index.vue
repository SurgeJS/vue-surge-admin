<script setup lang="ts">
import type { SchemaFormContent } from '@/components/common/schema-form/components/schema-form-content/types/type'
import SchemaFormItem from '@/components/common/schema-form/components/schema-form-item/index.vue'

const { schema, gridProps, gridItemProps, disabled } = defineProps<SchemaFormContent>()
const id = useId()
</script>

<template>
  <grid v-bind="gridProps">
    <template
      v-for="config in schema"
      :key="config.field || config.slot"
    >
      <SchemaFormItem
        v-if="config.component || config.contentSlot || config.slot"
        :id="id"
        :grid-item-props="gridItemProps"
        :schema="config"
        :disabled="disabled"
      >
        <slot v-if="config.contentSlot" :name="config.contentSlot" />
        <template v-if="config.slot" #[config.slot]="scope">
          <slot :name="config.slot" v-bind="scope || {}" />
        </template>
      </SchemaFormItem>
    </template>
    <slot />
  </grid>
</template>

<style scoped lang="scss">

</style>
