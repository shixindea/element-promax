<!-- @format -->

<template>
  <component
    :is="tag"
    ref="_ref"
    v-bind="_props"
    :class="buttonKls"
    :style="buttonStyle"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <el-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </el-icon>
    </template>
    <el-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </el-icon>
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { useButtonPro } from './use-button-pro'
import { buttonProEmits, buttonProProps } from './button-pro'
import { useButtonCustomStyle } from './button-pro-custom'

defineOptions({
  name: 'ElButtonPro',
})

const props = defineProps(buttonProProps)
const emit = defineEmits(buttonProEmits)

const buttonStyle = useButtonCustomStyle(props)
const ns = useNamespace('button-pro')
const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } =
  useButtonPro(props, emit)
const buttonKls = computed(() => [
  ns.b(),
  ns.m(_type.value),
  ns.m(_size.value),
  ns.is('disabled', _disabled.value),
  ns.is('loading', props.loading),
  ns.is('plain', props.plain),
  ns.is('round', props.round),
  ns.is('circle', props.circle),
  ns.is('text', props.text),
  ns.is('link', props.link),
  ns.is('has-bg', props.bg),
])

defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button size */
  size: _size,
  /** @description button type */
  type: _type,
  /** @description button disabled */
  disabled: _disabled,
  /** @description whether adding space */
  shouldAddSpace,
})
</script>
