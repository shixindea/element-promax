<template>
  <ElSpace direction="vertical" fill style="width: 100%">
    <ElRow
      v-for="(theSchema, index) in thePropsSchemas.filter((res:any) => res.isShow)"
      :key="index"
      style="display: flex; align-content: flex-start; align-items: flex-start"
      v-bind="theProps.rowOptions"
    >
      <ElCol
        v-bind="theProps.labelCol"
        style="display: flex; justify-content: flex-end"
      >
        <ElSpace style="line-height: 30px">
          <span v-if="theSchema.isRequiredStar" style="color: red">*</span>
          {{ theSchema?.label }}
          <span>:</span>
        </ElSpace>
      </ElCol>
      <ElCol v-bind="theProps.wrapperCol">
        <!-- 兼容Element Plus 组件 -->
        <FormItem
          v-if="theSchema.components != THE_COMP_TYPE.SLOT"
          :key="theSchema.field"
          v-bind="theSchema"
          v-model="theSchema.modelValue"
        />
        <!-- 用户可自定义组件 -->
        <div v-if="theSchema.components == THE_COMP_TYPE.SLOT">
          <!-- {{ theSlots[theSchema.slotName] }} -->
          <slot
            :name="theSchema.slotName"
            v-bind="theSchema.compInfo?.[theSchema.slotName]?.()"
            :model="thePropsModelValue"
          />
        </div>
        <!-- 利用 h函数 组件 -->
        <div v-if="!!theSchema.end">
          <!-- {{ theSlots[theSchema.slotName] }} -->
          end 利用 h函数 组件
          <!-- <slot
            :name="theSchema.slotName"
            v-bind="theSchema.compInfo?.[theSchema.slotName]?.()"
            :model="thePropsModelValue"
          /> -->
        </div>
      </ElCol>
    </ElRow>
    <ElRow v-if="theProps?.showFooter" v-bind="theProps.rowOptions">
      <ElCol v-bind="theProps.actionColOptions">
        <ElSpace>
          <ElButton type="primary" @click="onSubmit"> 提交 </ElButton>
          <ElButton @click="onClearValidate">清空校验</ElButton>
        </ElSpace>
      </ElCol>
    </ElRow>

    {{ thePropsSchemas }}
  </ElSpace>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import AsyncValidator from 'async-validator'
import ElButton from '@element-plus/components/button'
import ElCol from '@element-plus/components/col'
import ElRow from '@element-plus/components/row'
import ElSpace from '@element-plus/components/space'
// import { useNamespace } from '@element-plus/hooks'
import FormItem from './form-item/Index.vue'
import { formProProps } from './props'
import { THE_COMP_TYPE } from './conf'
import type { FormSchema } from './types/form'
import type { NamePath } from './types/interface'

const COMPONENT_NAME = 'ElFormPro'
defineOptions({
  name: COMPONENT_NAME,
})
const theProps = defineProps(formProProps())
const theEmits = defineEmits(['submit', 'register'])
const thePropsSchemas: any = ref(theProps.schemas)
// 获取schemas中的modelvalue值 start
const onSetModelValue = () => {
  thePropsSchemas.value.forEach((theSchema: any) => {
    theSchema.modelValue = thePropsModelValue.value[theSchema.field]
  })
}
const onGetModelValue = () => {
  return thePropsSchemas.value.reduce((prev: any, cur: any) => {
    prev[cur.field] = cur.modelValue
    return prev
  }, {})
}
const thePropsModelValue = ref(onGetModelValue())

watch(
  () => thePropsModelValue.value,
  () => {
    onSetModelValue()
  },
  {
    deep: true,
  }
)
// 获取schemas中的modelvalue值 end

const onSubmit = () => {
  onValidate()
  const theStatus = thePropsSchemas.value.some(
    (theSchema: any) => theSchema.message == ''
  )
  theEmits('submit', {
    type: theStatus ? 'success' : 'error',
    message: theStatus ? '校验通过' : '校验不通过',
    values: onGetModelValue(),
    schemas: thePropsSchemas.value,
  })
}

// 校验表单 start
const doValidate = async (schema: any) => {
  const validator = new AsyncValidator({
    [schema.field]: schema.dynamicRules(
      onGetModelValue(),
      thePropsSchemas.value,
      schema
    ),
  })
  validator.validate({ [schema.field]: schema.modelValue }, (errors: any) => {
    if (errors) {
      schema.message = errors[0].message
      return
    } else {
      schema.message = ''
    }
    // 校验通过 do something
  })
}
const onValidate = () => {
  thePropsSchemas.value.forEach((theSchema: FormSchema) => {
    if (theSchema.dynamicRules) {
      doValidate(theSchema)
    }
  })
}
// 校验表单 end
// 清除校验 start
const onClearValidate = () => {
  thePropsSchemas.value.forEach((theSchema: FormSchema) => {
    theSchema.message = ''
  })
}
// 清除校验 end
// 重新渲染数据 start
const onRenderData = () => {
  thePropsModelValue.value = onGetModelValue()

  thePropsSchemas.value.forEach((theSchema: any) => {
    /** 处理动态值 */
    theSchema.modelValue = thePropsSchemas.value.find(
      (item: any) => item.field === theSchema.field
    )?.modelValue
    /** 处理是否显示 */
    theSchema.isShow = theSchema?.ifShow
      ? theSchema.ifShow(
          thePropsModelValue.value,
          thePropsSchemas.value,
          theSchema
        )
      : true
    /** 处理检验逻辑 */
    theSchema.isRequiredStar = theSchema?.dynamicRules
      ? theSchema.dynamicRules(thePropsSchemas.value).required
      : false
    /** 处理检验逻辑 */
    // theSchema.slots =
    //   theSchema?.components === THE_COMP_TYPE.SLOT && !!theSlots
    //     ? theSlots[theSchema.slotName]
    //     : {}

    // console.log(useSlots().slotANode(), 'useSlots')
  })
}
// 重新渲染数据 end

// 暴露方法 start
const setProps = (props: any) => {
  thePropsSchemas.value = props.schemas
}

const setFieldsValue = (values: any) => {
  thePropsSchemas.value.forEach((theSchema: any) => {
    theSchema.modelValue = values[theSchema.field]
  })
}
const getFieldsValue = () => {
  return onGetModelValue()
}
const resetFields = () => {
  thePropsSchemas.value.forEach((theSchema: any) => {
    theSchema.modelValue = ''
  })
}
const clearValidate = (name?: NamePath) => {
  if (typeof name == 'string') {
    thePropsSchemas.value.forEach((theSchema: any) => {
      if (theSchema.field === name) {
        theSchema.message = ''
      }
    })
  } else {
    thePropsSchemas.value.forEach((theSchema: any) => {
      theSchema.message = ''
    })
  }
}
const validateFields = () => {
  onValidate()
  const theStatus = thePropsSchemas.value.some(
    (theSchema: any) => theSchema.message == ''
  )
  return {
    type: theStatus ? 'success' : 'error',
    message: theStatus ? '校验通过' : '校验不通过',
    values: onGetModelValue(),
    schemas: thePropsSchemas.value,
  }
}

const useForm = () => {
  return {
    getFieldsValue,
    setFieldsValue,
    resetFields,
    clearValidate,
    validateFields,
    setProps,
  }
}

defineExpose({
  useForm,
  getFieldsValue,
  setFieldsValue,
  resetFields,
  clearValidate,
  validateFields,
  setProps,
})
// 暴露方法 end

watch(
  () => thePropsSchemas.value,
  () => {
    onRenderData()
  },
  {
    deep: true,
    immediate: true,
  }
)
onMounted(() => {
  onRenderData()
  theEmits('register', useForm())
})
</script>
