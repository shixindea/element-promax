<template>
  <div>
    <ElRow
      v-for="(theSchema, index) in thePropsSchemas.filter((res:any) => res.isShow)"
      :key="index"
      class="form-pro-row"
    >
      <ElCol :span="6">
        <ElSpace style="line-height: 30px">
          <span>*</span>
          {{ theSchema?.label }}
          <span>:</span>
        </ElSpace>
      </ElCol>
      <ElCol :span="18">
        <!-- <div>{theSchema.components}</div> -->
        <!-- {{ theSchema.field }} -->
        <SlotComp
          :key="theSchema.field"
          v-bind="theSchema"
          v-model="theSchema.modelValue"
        />
      </ElCol>
    </ElRow>
    <ElSpace>
      <ElButton type="primary" @click="onSubmit"> 提交 </ElButton>
      <ElButton @click="onClearValidate">清空校验</ElButton>
    </ElSpace>
  </div>
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
  theEmits('submit', onGetModelValue(), thePropsSchemas.value)
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

watch(
  () => thePropsSchemas.value,
  (newValue) => {
    thePropsSchemas.value.forEach((theSchema: any) => {
      theSchema.modelValue = newValue.find(
        (item: any) => item.field === theSchema.field
      )?.modelValue
      theSchema.isShow = theSchema.ifShow
        ? typeof theSchema.ifShow == 'function'
          ? theSchema.ifShow(
              onGetModelValue(),
              thePropsSchemas.value,
              theSchema
            )
          : theSchema.ifShow
        : true
    })
  },
  {
    deep: true,
    immediate: true,
  }
)
onMounted(() => {})
</script>
<style scoped></style>
