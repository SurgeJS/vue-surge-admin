<script setup lang="ts">
import type { FoldAnimationProps } from '@/components/animation/FoldAnimation/types/type'

const props = withDefaults(defineProps<FoldAnimationProps>(), {
  duration: 0.5,
  appear: false,
  fixedLength: false,
  direction: 'vertical',
  initialLength: 0,
})
console.log(props)
</script>

<template>
  <slot />
</template>

<style scoped lang="scss">

</style>
