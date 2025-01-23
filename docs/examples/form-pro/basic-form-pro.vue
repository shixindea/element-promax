<template>
  <div>
    <el-form-pro v-bind="onGetSchemaData()" @submit="onHandleSubmit" />
  </div>
</template>

<script setup lang="ts">
// import { ElFormPro } from '@element-plus/components/form-pro'
import ElFormPro from '@element-plus/components/form-pro'

// import type { FormProSchema } from '@element-plus/components/form-pro'

// 布局
const theLayoutData = {
  rowOptions: {
    gutter: 20,
  },
  labelCol: {
    span: 4,
    md: {
      span: 6,
    } as any,
    xxl: {
      span: 7,
    } as any,
  },
  wrapperCol: {
    span: 20,
    md: {
      span: 14,
    } as any,
    xxl: {
      span: 9,
    } as any,
  },
  actionColOptions: {
    span: 4,
    offset: 4,
    md: {
      offset: 6,
    } as any,
    xxl: {
      offset: 7,
    } as any,
  },
}
// 数据: FormProSchema
const onGetSchemaData = () => {
  return {
    schemas: [
      {
        field: 'nickname',
        components: 'Input',
        label: '姓名',
        ifShow: () => true,
        dynamicRules: (ruleParams) => {
          const { nickname } = ruleParams
          return {
            required: true,
            // message: '请输入姓名',
            validator: () => {
              if (!nickname) {
                return Promise.reject(new Error('请输入姓名'))
              }
              return Promise.resolve()
            },
          }
        },
      },
      {
        field: 'phone',
        components: 'Input',
        label: '手机号',
        dynamicRules: (ruleParams) => {
          const { phone } = ruleParams
          return {
            required: true,
            // message: '请输入活动名称',
            validator: () => {
              if (!phone) {
                return Promise.reject(new Error('请输入手机号'))
              }
              return Promise.resolve()
            },
          }
        },
      },
      {
        field: 'showComp',
        components: 'Select',
        label: '显示子组件',
        componentProps: {
          placeholder: '测试使用componentProps --  Select a value',
          options: [
            {
              label: '显示',
              value: '1',
            },
            {
              label: '不显示',
              value: '2',
            },
          ],
        },
      },
      {
        field: 'isShow',
        components: 'Input',
        label: 'isShow',
        ifShow: (e: any) => {
          return e.showComp == '1'
        },
      },
    ],
    showFooter: true,
    ...theLayoutData,
  }
}

const onHandleSubmit = (e: any, e2: any) => {
  console.log('onHandleSubmit ===>', e, e2)
}
</script>
