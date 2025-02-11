<template>
  <div>
    <el-form-pro @register="aaa" @submit="onHandleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ElFormPro, { useForm } from '@element-plus/components/form-pro'
const [theFormPro, { setProps: setFormProProps }] = useForm()

const aaa = (e) => {
  console.log(e, 'eeeeeee')
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
        field: 'rate',
        components: 'Rate',
        label: 'Rate 评分',
      },

      {
        field: 'Avatar',
        components: 'Avatar',
        label: 'Avatar 头像',
        componentProps: {
          shape: 'square',
          size: 'large',
          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
      },
    ],
    showFooter: true,
  }
}

const onHandleSubmit = (e: any, e2: any) => {
  console.log('onHandleSubmit ===>', e, e2)
}
onMounted(() => {
  setFormProProps(onGetSchemaData())
})
</script>
