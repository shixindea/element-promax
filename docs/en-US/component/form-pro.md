---
title: FormPro
lang: en-US
---

<!-- @format -->

# FormPro

## Basic 基础使用

:::demo

form-pro/form-pro-basic

:::

## form-pro 全部用法

:::demo

form-pro/form-pro-all

:::

## FormPro API

### 支持的组件

[>>>支持的组件<<<](https://github.com/shixindea/element-promax/blob/master/packages/components/form-pro/src/conf.ts)

### FormPro Attributes

> tip:所有参数都可以通过 `useFormPro` 的回调函数 ==> `setProps` 赋值

| Name             | Description               | Type                                       | Default                |
| ---------------- | ------------------------- | ------------------------------------------ | ---------------------- |
| schemas          | 表单配置规则              | ^[Array]`[Array] as PropType<FormSchema[]` | () => []               |
| showFooter       | 是否显示底部按钮          | ^[Boolean]                                 | true                   |
| rowOptions       | 表单行 Row - 行布局       | ^[object]                                  | () => ({ gutter: 20 }) |
| labelCol         | 表单列 Col - label 布局   | ^[object]                                  | () => ({ span: 4 })    |
| wrapperCol       | 表单列 Col - 表单内容布局 | ^[object]`                                 | () => ({ span: 18 })   |
| actionColOptions | 表单底部布局              | ^[object]                                  | () => ({ span: 24 }    |

### schemas 配置

| Name           | Description    | Type                                       | 其他介绍                                                                                                       |
| -------------- | -------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| field          | 表单字段绑定值 | ^[Array]`[Array] as PropType<FormSchema[]` | () => []                                                                                                       |
| label          | 表单字段名     | ^[Boolean]                                 | true                                                                                                           |
| components     | 绑定的组件     | ^[Object]                                  | [支持的组件](https://github.com/shixindea/element-promax/blob/master/packages/components/form-pro/src/conf.ts) |
| modelValue     | 字段绑定值     | ^[Object]                                  | 可以赋予默认值使用                                                                                             |
| ifShow         | 字段是否显示   | ^[Object]`                                 | (formValues: any, formValues2: any, formValues3: any) => boolean                                               |
| dynamicRules   | 自定义校验     | ^[Function]                                | (formValues: any) => Boolean                                                                                   |
| message        | 快捷校验内容   | ^[String]                                  | ——                                                                                                             |
| componentProps | 根组件传参     | ^[Object]                                  | 根组件传参所需的值可通过对象在此绑定                                                                           |
| slotName       | 插槽名称       | ^[String]                                  | 当组件类型为插槽时，须配合 slotName 添加具名插槽名称                                                           |
| end            | 底部插入       | ^[Function]                                | 可配合 h 函数使用 ( )=>{ h( [ div,{},{}])}                                                                     |

### FormPro 事件

| Name         | Description            | 回调函数                                                                                        |
| ------------ | ---------------------- | ----------------------------------------------------------------------------------------------- |
| register     | 使用 useFormPro 的回调 | ^[Object]`{getFieldsValue,setFieldsValue,resetFields,clearValidate,validateFields,setProps...}` |
| submit       | 验证成功的确定回调     | ^[Object]`{type: 'success',message: '校验通过',values: 全部字段值,schemas: 全部对象}`           |
| submit-error | 验证失败的确定回调     | ^[Object]`{type: 'error',message: '校验不通过',values: 全部字段值,schemas: 全部对象 }`          |
| reset        | 点击重置的回调         | ^[Object]`{type: 'reset',message: '重置成功',values: 全部字段值,schemas: 全部对象 }`            |
