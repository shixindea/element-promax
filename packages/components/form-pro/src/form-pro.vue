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
        <SlotComp
          :key="theSchema.field"
          v-bind="theSchema"
          v-model="theSchema.modelValue"
        />
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
import SlotComp from './slot/Index.vue'
import { formProProps } from './props'
import type { FormSchema } from './types/form'
const COMPONENT_NAME = 'ElFormPro'
defineOptions({
  name: COMPONENT_NAME,
})
const theProps = defineProps(formProProps())
const theEmits = defineEmits(['submit'])
const thePropsSchemas: any = ref(theProps.schemas)

// 获取schemas中的modelvalue值 start
const onGetModelValue = () => {
  return thePropsSchemas.value.reduce((prev: any, cur: any) => {
    prev[cur.field] = cur.modelValue
    return prev
  }, {})
}
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
  thePropsSchemas.value.forEach((theSchema: any) => {
    theSchema.modelValue = thePropsSchemas.value.find(
      (item: any) => item.field === theSchema.field
    )?.modelValue
    theSchema.isShow = theSchema?.ifShow
      ? theSchema.ifShow(onGetModelValue(), thePropsSchemas.value, theSchema)
      : true
    theSchema.isRequiredStar = theSchema?.dynamicRules
      ? theSchema.dynamicRules(thePropsSchemas.value).required
      : false
  })
}
// 重新渲染数据 end

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
})
</script>
