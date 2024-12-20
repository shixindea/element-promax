<template>
  <div>
    <el-form-pro
      :schemas="theSchemaData"
      show-footer
      @submit="onHandleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import message from '@element-plus/components/message/src/method'

const theSchemaData = [
  {
    field: 'nickname',
    components: 'Input',
    label: '姓名',
    ifShow: (e: any, e2: any) => {
      // console.log('ifShow ===>', e, e2)
      return true
    },
    dynamicRules: (ruleParams) => {
      console.log('ruleParams ===>', ruleParams)
      const { sex } = ruleParams
      return {
        required: true,
        // message: '请输入活动名称',
        validator: () => {
          if (sex == 'A') {
            return Promise.reject(new Error('请输入活动限购数量'))
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
    field: 'isShow',
    components: 'Input',
    label: 'isShow',
    ifShow: (e: any, e2: any) => {
      return e.sex == 'B'
    },
  },
  {
    field: 'sex',
    components: 'Select',
    label: '性别',
    componentProps: {
      placeholder: '测试使用componentProps --  Select a value',
      options: [
        {
          label: 'A',
          value: 'A',
        },
        {
          label: 'B',
          value: 'B',
        },
      ],
    },
  },
]

const onHandleSubmit = (e: any, e2: any) => {
  console.log('onHandleSubmit ===>', e, e2)
}
</script>
<style scoped></style>
