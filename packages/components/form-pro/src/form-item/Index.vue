<!-- @format -->

<template>
  <div>
    <el-text
      v-if="theProps.components === THE_COMP_TYPE.TEXT"
      v-bind="theProps.componentProps"
      >{{ thePropsModelValue }}</el-text
    >

    <template v-if="theProps.components === THE_COMP_TYPE.INPUT">
      <el-input
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="输入框"
        @input="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.INPUTNUMBER">
      <el-input-number
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="输入框 ElInputNumber"
        @input="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.MENTION">
      <el-mention
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="提及 mention  @someone"
        @input="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>

    <template v-if="theProps.components === THE_COMP_TYPE.SELECT">
      <el-select
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="Select 组件"
        clearable
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      >
        <el-option
          v-for="item in theProps.componentProps.options"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </template>

    <template v-if="theProps.components === THE_COMP_TYPE.RADIO">
      <el-radio
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="Radio 组件"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>

    <template v-if="theProps.components === THE_COMP_TYPE.RADIOGROUP">
      <el-radio-group
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="RadioGroup 组件"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      >
        <el-radio
          v-for="item in theProps.componentProps.options"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </el-radio-group>
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.RADIOBUTTON">
      <el-radio-group
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="RadioButtonGroup 组件"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      >
        <el-radio-button
          v-for="item in theProps.componentProps.options"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </el-radio-group>
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.CHECKBOX">
      <el-checkbox
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="Checkbox 组件"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>

    <template v-if="theProps.components === THE_COMP_TYPE.CHECKBOXGROUP">
      <el-checkbox-group
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="CheckboxGroup 组件"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      >
        <el-checkbox
          v-for="item in theProps.componentProps.options"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </el-checkbox-group>
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.CHECKBOXBUTTON">
      <el-checkbox-group
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="CheckboxGroupButton 组件"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      >
        <el-checkbox-button
          v-for="item in theProps.componentProps.options"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </el-checkbox-group>
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.RATE">
      <el-rate
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="Rate 评分"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.SLIDER">
      <el-slider
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="Slider 滑块"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.SWITCH">
      <el-switch
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="Switch 开关"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.TRANSFER">
      <el-transfer
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="Transfer 穿梭框"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>

    <template v-if="theProps.components === THE_COMP_TYPE.TREESELECT">
      <el-tree-select
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="TreeSelect 树形选择"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>
    <template v-if="theProps.components === THE_COMP_TYPE.AVATAR">
      <el-avatar
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder=" Avatar 头像"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>

    <template v-if="theProps.components === THE_COMP_TYPE.DATEPICKER">
      <el-date-picker
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="Date 日期"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>

    <template v-if="theProps.components === THE_COMP_TYPE.DATERANGEPICKER">
      <el-date-picker
        v-bind="theProps.componentProps"
        v-model="thePropsModelValue"
        data-placeholder="DateRange 日期范围"
        type="daterange"
        @change="($event:any) => onUpdateValue($event, theProps.components)"
      />
    </template>

    <div v-if="theProps.message != ''">
      <el-text class="mx-1" type="danger">
        {{ theProps.message }}
      </el-text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ElText from '@element-plus/components/text'
import ElInput from '@element-plus/components/input'
import ElInputNumber from '@element-plus/components/input-number'
// import ElInputTag from '@element-plus/components/input-tag'
import ElMention from '@element-plus/components/mention'
import ElSelect from '@element-plus/components/select'
import ElRate from '@element-plus/components/rate'
import ElSwitch from '@element-plus/components/switch'
import ElTransfer from '@element-plus/components/transfer'
import ElTreeSelect from '@element-plus/components/tree-select'
import ElAvatar from '@element-plus/components/avatar'

import ElRadio, {
  ElRadioButton,
  ElRadioGroup,
} from '@element-plus/components/radio'
import ElCheckbox, {
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@element-plus/components/checkbox'
import { THE_COMP_TYPE } from '../conf'

const theProps = defineProps({
  field: { type: String },
  label: { type: String },
  modelValue: {
    type: null as any,
    default: '',
  },
  // {
  // definePropType<string | number | null | undefined>([String,  Number,Object,]),
  // ,
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

  slotName: {
    type: String,
  },
  // ifShow: {
  //   type: Function,
  //   default: () => true,
  // },
  dynamicRules: {
    type: Function,
    default: () => {},
  },
  message: {
    type: String,
    default: '',
  },
})
watch(
  () => theProps.modelValue,
  (newValue: any) => {
    thePropsModelValue.value = newValue
  }
)

// 默认值为数组的组件
const theArrayComp: any = [
  THE_COMP_TYPE.CHECKBOXGROUP,
  THE_COMP_TYPE.CHECKBOXBUTTON,
  THE_COMP_TYPE.DATERANGEPICKER,
]
//  theProps.modelValue
//       ? theProps.modelValue
//       :
const thePropsModelValue = ref(
  theArrayComp.includes(theProps.components) ? [] : theProps.modelValue
)
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
