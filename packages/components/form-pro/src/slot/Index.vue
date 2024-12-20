<!-- @format -->

<template>
  <!-- 纯文本 -->
  <el-text v-if="theProps.components === THE_COMP_TYPE.TEXT">adfs</el-text>

  <!-- 输入框 -->
  <template v-if="theProps.components === THE_COMP_TYPE.INPUT">
    <el-input
      v-bind="theProps.componentProps"
      v-model="thePropsModelValue"
      @input="($event:any) => onUpdateValue($event, theProps.components)"
    />
  </template>

  <!-- 选择框 -->
  <template v-if="theProps.components === THE_COMP_TYPE.SELECT">
    <el-select
      v-bind="theProps.componentProps"
      v-model="thePropsModelValue"
      clearable
      @change="($event:any) => onUpdateValue($event, theProps.components)"
    >
      <el-option
        v-for="item in theProps.componentProps.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </template>
  <!-- 插槽 -->
  <template v-if="theProps.components === THE_COMP_TYPE.SLOT">
    <CompSlot
      :comp-info="theProps.slots"
      :slot-name="theProps.slotName"
      :model-value="thePropsModelValue"
    />
  </template>

  <!-- end 函数 -->
  <CompEnd v-if="!!theProps.end" :comp-info="theProps.end" />

  <div v-if="theProps.message != ''">
    <el-text class="mx-1" type="danger">
      {{ theProps.message }}
    </el-text>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { THE_COMP_TYPE } from '../conf'
import CompEnd from './comp-end'
import CompSlot from './comp-slot'

const theProps = defineProps({
  field: { type: String },
  label: { type: String },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: '',
  },
  components: {
    type: String,
    default: THE_COMP_TYPE.INPUT,
    validator: (value: any) => {
      if (!Object.values(THE_COMP_TYPE).includes(value)) {
        // throw new Error('')
        console.error(
          `${value}组件未定义,组件值参考:${Object.values(THE_COMP_TYPE)}`
        )
      }
      return Object.values(THE_COMP_TYPE).includes(value)
    },
  },
  componentProps: {
    type: Object,
    default: () => ({}),
  },
  end: {
    type: Object,
  },

  slots: {
    type: Object,
  },
  slotName: {
    type: String,
  },
  ifShow: {
    type: [Boolean, Function],
    default: true,
  },
  dynamicRules: {
    type: Function,
    default: () => {},
  },
  message: {
    type: String,
    default: '',
  },
})

const thePropsModelValue = ref(theProps.modelValue)
const theEmits = defineEmits(['update:modelValue'])
const onUpdateValue = (value: any, theCompType: string) => {
  // 如果只需要值 就直接返回值
  if (theCompType === THE_COMP_TYPE.INPUT) {
    theEmits('update:modelValue', value)
  } else if (theCompType === THE_COMP_TYPE.SELECT) {
    theEmits('update:modelValue', value)
  } else {
    theEmits('update:modelValue', value)
  }
}
</script>
