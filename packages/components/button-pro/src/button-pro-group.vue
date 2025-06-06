<!-- @format -->

<template>
  <div :class="ns.b('group')">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { provide, reactive, toRef } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { buttonProGroupProps } from './button-pro-group'
import { buttonProGroupContextKey } from './constants'

defineOptions({
  name: 'ElButtonProGroup',
})
const props = defineProps(buttonProGroupProps)
provide(
  buttonProGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  })
)
const ns = useNamespace('button')
</script>
