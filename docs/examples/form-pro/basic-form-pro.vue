<template>
  <div>
    <!-- v-bind="onGetSchemaData()" -->
    <el-form-pro @register="theFormPro" @submit="onHandleSubmit">
      <template #slotANode="{ model }">
        <!-- 
        style="width: 100px; height: 100px; background-color: pink" -->
        <div @click="model.nickname = '1'">
          插槽1[点击修改nickname值]{{ model }}
        </div>
      </template>
      <template #slotANode2>
        <div style="width: 100px; height: 100px; background-color: skyblue">
          插槽2
        </div>
      </template>
    </el-form-pro>

    <el-space direction="vertical" wrap>
      <el-button @click="onGetFormProFieldsValue">
        获取所有字段值 getFieldsValue
      </el-button>
      <el-button @click="onSetFormProFieldsValue">
        动态给字段赋值 setFieldsValue
      </el-button>
      <el-button @click="onResetFormProFields">
        清空字段 resetFields
      </el-button>
      <el-button @click="onClearFormProValidate">
        清空校验 clearValidate
      </el-button>
      <el-button @click="onClearFormProValidate('nickname')">
        清空校验单个校验 clearValidate(name:string)
      </el-button>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import { ElFormPro } from '@element-plus/components/form-pro'
import ElFormPro, { useForm } from '@element-plus/components/form-pro'
import ElSpace from '@element-plus/components/space'
import ElButton from '@element-plus/components/button'
const [
  theFormPro,
  {
    setProps: setFormProProps,
    setFieldsValue: setFormProFieldsValue,
    getFieldsValue: getFormProFieldsValue,
    resetFields: resetFormProFields,
    clearValidate: clearFormProValidate,
    // getChildrenFieldsValue,
    // resetFields,
    // resetAllModel,
    // updateSchema,
    // removeSchemaByFiled,
    // appendSchemaByField,
    // validateFields,
    // validate,
    // submit,
    // reset,
    // resetAllModel,
    // clearValidate,
    // updateSchema,
    // removeSchemaByFiled,
  },
] = useForm({ aaa: 1 })

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
      {
        field: 'slot',
        components: 'Slot',
        slotName: 'slotANode',
        label: 'slot组件',
      },
      {
        field: 'slot2',
        components: 'Slot',
        slotName: 'slotANode2',
        label: 'slot组件2',
      },
    ],
    showFooter: true,
    ...theLayoutData,
  }
}

// const theFormPro = ref()

// console.log('111 ===>', 111)

// console.log('useFormPro(theFormPro.value) ===>', useFormPro(theFormPro.value))

// const { setProps: setFormProProps } = useFormPro(theFormPro.value)

const onHandleSubmit = (e: any, e2: any) => {
  console.log('onHandleSubmit ===>', e, e2)
}

const onGetFormProFieldsValue = () => {
  console.log('onGetFormProFieldsValue ===>', getFormProFieldsValue())
}
const onResetFormProFields = () => {
  resetFormProFields()
}
const onClearFormProValidate = (name?: any) => {
  clearFormProValidate(name)
}
const onSetFormProFieldsValue = () => {
  setFormProFieldsValue({
    nickname: '1161',
  })
}
onMounted(() => {
  setFormProProps(onGetSchemaData())
  // console.log('theFormPro.value ===>', theFormPro.value)
  // useFormPro(666666666)
  // console.log('theFormPro.value ===>')
  // setFormProProps(onGetSchemaData())
})
</script>
