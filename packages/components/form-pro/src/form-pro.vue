<!-- @format -->

<template>
  <ElSpace direction="vertical" fill style="width: 100%" :size="20">
    <!-- 纵向布局 -->
    <template v-if="reactiveProps.layout === 'vertical'">
      <ElRow
        v-for="(theSchema, index) in thePropsSchemas.filter((res:any) => res.isShow)"
        :key="index"
        style="
          display: flex;
          align-content: flex-start;
          align-items: flex-start;
        "
        v-bind="reactiveProps.rowOptions"
      >
        <ElCol
          v-bind="reactiveProps.labelCol"
          style="display: flex; justify-content: flex-end"
        >
          <ElSpace style="line-height: 30px">
            <span v-if="theSchema.isRequiredStar" style="color: red">*</span>
            {{ theSchema?.label }}
            <span>:</span>
          </ElSpace>
        </ElCol>
        <ElCol v-bind="reactiveProps.wrapperCol">
          <div style="display: flex; align-items: flex-start">
            <!-- 左侧 -->
            <template v-if="!!theSchema.before">
              <component :is="theSchema.before" />
            </template>
            <!-- 中间部分 -->
            <div>
              <FormItem
                v-if="theSchema.components != THE_COMP_TYPE.SLOT"
                v-bind="theSchema"
                v-model="theSchema.modelValue"
              />
              <div v-if="theSchema.components == THE_COMP_TYPE.SLOT">
                <slot
                  :name="theSchema.slotName"
                  v-bind="theSchema.compInfo?.[theSchema.slotName]?.()"
                  :model="thePropsModelValue"
                />
              </div>
              <template v-if="!!theSchema.end">
                <component :is="theSchema.end" />
              </template>
            </div>
            <!-- 右侧 -->
            <template v-if="!!theSchema.after">
              <component :is="theSchema.after" />
            </template>
          </div>
        </ElCol>
      </ElRow>
    </template>

    <!-- 横向布局 -->
    <template v-if="reactiveProps.layout === 'horizontal'">
      <ElRow
        v-for="(rowSchemas, rowIndex) in getHorizontalRows()"
        :key="rowIndex"
        v-bind="reactiveProps.rowOptions"
      >
        <ElCol
          v-for="(theSchema, colIndex) in rowSchemas"
          :key="colIndex"
          :span="24 / reactiveProps.itemsPerRow"
        >
          <div style="display: flex; align-items: flex-start">
            <div
              style="
                min-width: 80px;
                text-align: right;
                padding-right: 8px;
                line-height: 32px;
              "
            >
              <span v-if="theSchema.isRequiredStar" style="color: red">*</span>
              {{ theSchema?.label }}:
            </div>
            <div style="flex: 1">
              <!-- 左侧 -->
              <template v-if="!!theSchema.before">
                <component :is="theSchema.before" />
              </template>
              <!-- 中间部分 -->
              <div>
                <FormItem
                  v-if="theSchema.components != THE_COMP_TYPE.SLOT"
                  v-bind="theSchema"
                  v-model="theSchema.modelValue"
                />
                <div v-if="theSchema.components == THE_COMP_TYPE.SLOT">
                  <slot
                    :name="theSchema.slotName"
                    v-bind="theSchema.compInfo?.[theSchema.slotName]?.()"
                    :model="thePropsModelValue"
                  />
                </div>
                <template v-if="!!theSchema.end">
                  <component :is="theSchema.end" />
                </template>
              </div>
              <!-- 右侧 -->
              <template v-if="!!theSchema.after">
                <component :is="theSchema.after" />
              </template>
            </div>
          </div>
        </ElCol>
      </ElRow>
    </template>

    <!-- 内联布局 -->
    <template v-if="reactiveProps.layout === 'inline'">
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
          width: 100%;
        "
      >
        <div
          v-for="(theSchema, index) in thePropsSchemas.filter((res:any) => res.isShow)"
          :key="index"
          :style="{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            width: theSchema.fullWidth ? '100%' : 'auto',
            flexBasis: theSchema.fullWidth ? '100%' : 'auto',
          }"
        >
          <div
            :style="{
              minWidth:
                typeof reactiveProps.labelWidth === 'number'
                  ? reactiveProps.labelWidth + 'px'
                  : reactiveProps.labelWidth,
              textAlign: 'right',
              paddingRight: '8px',
              lineHeight: '32px',
            }"
          >
            <span v-if="theSchema.isRequiredStar" style="color: red">*</span>
            {{ theSchema?.label }}:
          </div>
          <div
            style="display: flex; align-items: center; min-width: 200px"
            :style="{
              width: theSchema.fullWidth ? '100%' : 'auto',
            }"
          >
            <!-- 左侧 -->
            <template v-if="!!theSchema.before">
              <component :is="theSchema.before" />
            </template>
            <!-- 中间部分 -->
            <div style="width: 100%">
              <FormItem
                v-if="theSchema.components != THE_COMP_TYPE.SLOT"
                v-bind="theSchema"
                v-model="theSchema.modelValue"
              />
              <div v-if="theSchema.components == THE_COMP_TYPE.SLOT">
                <slot
                  :name="theSchema.slotName"
                  v-bind="theSchema.compInfo?.[theSchema.slotName]?.()"
                  :model="thePropsModelValue"
                />
              </div>
              <template v-if="!!theSchema.end">
                <component :is="theSchema.end" />
              </template>
            </div>
            <!-- 右侧 -->
            <template v-if="!!theSchema.after">
              <component :is="theSchema.after" />
            </template>
          </div>
        </div>

        <!-- 内联布局时的按钮跟随在表单项后面 -->
        <!-- 
        :style="{
            marginLeft:
              typeof reactiveProps.labelWidth === 'number'
                ? reactiveProps.labelWidth + 'px'
                : reactiveProps.labelWidth,
          }" -->
        <div
          v-if="reactiveProps?.showFooter"
          style="display: flex; align-items: center; margin-bottom: 8px"
        >
          <ElSpace>
            <ElButton type="primary" @click="onSubmit"> 提交 </ElButton>
            <ElButton @click="onReset">重置</ElButton>
          </ElSpace>
        </div>
      </div>
    </template>

    <!-- 底部按钮（纵向和横向布局） -->
    <ElRow
      v-if="reactiveProps?.showFooter && reactiveProps.layout !== 'inline'"
      v-bind="reactiveProps.rowOptions"
    >
      <ElCol v-bind="reactiveProps.actionColOptions">
        <ElSpace>
          <ElButton type="primary" @click="onSubmit"> 提交 </ElButton>
          <ElButton @click="onReset">重置</ElButton>
          <!-- <ElButton @click="onClearValidate">清空校验</ElButton> -->
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
const theEmits = defineEmits(['submit', 'submit-error', 'register', 'reset'])

// 创建响应式的 props 副本以支持动态更新
const reactiveProps = ref({
  layout: theProps.layout,
  itemsPerRow: theProps.itemsPerRow,
  labelWidth: theProps.labelWidth,
  showFooter: theProps.showFooter,
  rowOptions: theProps.rowOptions,
  labelCol: theProps.labelCol,
  wrapperCol: theProps.wrapperCol,
  actionColOptions: theProps.actionColOptions,
  inlineActionCol: theProps.inlineActionCol, // 内联布局时的按钮跟随在表单项后面
})

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
  if (theStatus) {
    theEmits('submit', {
      type: 'success',
      message: '校验通过',
      values: onGetModelValue(),
      schemas: thePropsSchemas.value,
    })
  } else {
    theEmits('submit-error', {
      type: 'error',
      message: '校验不通过',
      values: onGetModelValue(),
      schemas: thePropsSchemas.value,
    })
  }
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

// 重置 start
const onReset = () => {
  resetFields()
  onClearValidate()
  theEmits('reset', {
    type: 'reset',
    message: '重置成功',
    values: onGetModelValue(),
    schemas: thePropsSchemas.value,
  })
}
// 重置 end

// 获取横向布局的行数据
const getHorizontalRows = () => {
  const visibleSchemas = thePropsSchemas.value.filter((res: any) => res.isShow)
  const rows = []
  const itemsPerRow = reactiveProps.value.itemsPerRow || 3

  for (let i = 0; i < visibleSchemas.length; i += itemsPerRow) {
    rows.push(visibleSchemas.slice(i, i + itemsPerRow))
  }

  return rows
}

// 重新渲染数据 start
const onRenderData = () => {
  thePropsModelValue.value = onGetModelValue()

  thePropsSchemas.value.forEach(async (theSchema: any) => {
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
  })
}
// 重新渲染数据 end

// 暴露方法 start
const setProps = (props: any) => {
  if (props.schemas) {
    thePropsSchemas.value = props.schemas
  }
  // // 更新其他属性到 reactiveProps
  // Object.keys(props).forEach((key) => {
  //   if (key !== 'schemas' && reactiveProps.value.hasOwnProperty(key)) {
  //     (reactiveProps.value as any)[key] = props[key];
  //   }
  // });
  // 更新其他属性到 reactiveProps
  Object.keys(props).forEach((key) => {
    if (
      key !== 'schemas' &&
      Object.prototype.hasOwnProperty.call(reactiveProps.value, key)
    ) {
      ;(reactiveProps.value as any)[key] = props[key]
    }
  })
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

const useFormPro = () => {
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
  useFormPro,
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
    try {
      onRenderData()
    } catch (error) {
      console.error('onRenderData 渲染报错:', error)
      // 可以在这里添加更多的错误处理逻辑
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
onMounted(() => {
  onRenderData()
  theEmits('register', {
    getFieldsValue,
    setFieldsValue,
    resetFields,
    clearValidate,
    validateFields,
    setProps,
  })
})
</script>
