---
title: Space
lang: en-US
---

<!-- @format -->

# Flex

由开发者`袁果锅`精心打造的`Flex`组件，旨在为前端开发人员提供一套高效、灵活且易于使用的布局解决方案。该组件充分利用了 CSS Flexbox 布局模型的强大能力，旨在简化复杂 UI 界面的构建过程，特别是在处理元素对齐、分布和顺序调整方面。

## Basic usage

The basic use case is using this component to provide unified space between each components

:::demo Using Space to provide space

flex/basic

:::

## API

### Attributes

| Name           | Description                                   | Type                                | Default    |
| -------------- | --------------------------------------------- | ----------------------------------- | ---------- |
| direction      | Placement direction                           | ^[enum]`'horizontal' \| 'vertical'` | horizontal |
| class          | Classname                                     | ^[string] / ^[object] / ^[array]    | —          |
| style          | Extra style rules                             | ^[string] / ^[object] / ^[array]    | —          |
| alignment      | Controls the alignment of items               | ^[string]                           | —          |
| size           | Spacing size                                  | ^[string] / ^[array] / ^[number]    | —          |
| wrap           | Auto wrapping                                 | ^[boolean]                          | false      |
| spaceBetween   | Apply space-between layout                    | ^[boolean]                          | false      |
| alignCenter    | Align items to center                         | ^[boolean]                          | false      |
| alignEnd       | Align items to end                            | ^[boolean]                          | false      |
| alignStart     | Align items to start                          | ^[boolean]                          | false      |
| justifyCenter  | Justify content to center                     | ^[boolean]                          | false      |
| justifyEnd     | Justify content to end                        | ^[boolean]                          | false      |
| justifyStart   | Justify content to start                      | ^[boolean]                          | false      |
| justifyBetween | Justify content with space-between            | ^[boolean]                          | false      |
| center         | Center items both horizontally and vertically | ^[boolean]                          | false      |

### Slots

| name    | description        |
| ------- | ------------------ |
| default | Items to be spaced |

---

# Flex

## Basic 基础使用

:::demo

flex/basic

:::

## flex 全部用法

:::demo

form-pro/form-pro-all

:::

## Flex API

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
