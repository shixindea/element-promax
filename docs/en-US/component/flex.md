---
title: Space
lang: en-US
---

<!-- @format -->

# Flex

由开发者 `袁果锅`精心打造的 `Flex`组件，旨在为前端开发人员提供一套高效、灵活且易于使用的布局解决方案。该组件充分利用了 CSS Flexbox 布局模型的强大能力，旨在简化复杂 UI 界面的构建过程，特别是在处理元素对齐、分布和顺序调整方面。

## Basic usage

🌟 一套优雅、高复用的全局组件体系，让开发效率提升 50%\*

:::demo Using flex to provide flex

flex/basic

:::

## API

### Attributes

| Name           | Description                          | Type                                | Default         |
| -------------- | ------------------------------------ | ----------------------------------- | --------------- |
| alignment      | alignment 里的都可以写               | ^[enum]`'center'                    | 'normal'        |
| justify        | justifyContent 里的都可以写          | ^[enum]`'center'                    | 'normal'        |
| class          | className                            | ^[string] / ^[object] / ^[array]    | —               |
| style          | Extra style rules                    | ^[string] / ^[object]`CSSProperties | CSSProperties[] |
| size           | [10,20] 元素横向 10 间距纵向 20 间距 | 数值、字符、数组 (不用写单位 px)    | 0               |
| wrap           | 超长是否换行                         | ^[boolean]                          | false           |
| cloumn         | 纵向布局                             | ^[boolean]                          | false           |
| direction      | 可以选择横向或纵向布局               | ^['vertical'\|'horizontal']         | horizontal      |
| spaceBetween   | 两端对齐                             | ^[boolean]                          | false           |
| alignCenter    | 纵向居中                             | ^[boolean]                          | false           |
| alignEnd       | 纵向下对齐                           | ^[boolean]                          | false           |
| alignStart     | 纵向上对齐                           | ^[boolean]                          | false           |
| justifyCenter  | 横向居中                             | ^[boolean]                          | false           |
| justifyEnd     | 横向右对齐                           | ^[boolean]                          | false           |
| justifyStart   | 横向左对齐                           | ^[boolean]                          | false           |
| justifyBetween | 两端对齐                             | ^[boolean]                          | false           |
| center         | 横向纵向居中                         | ^[boolean]                          | false           |
| flex1          | 占满所有可用空间                     | ^[boolean]                          | false           |
| flexSize       | flex 的值                            | ^[string] / ^[number]               | 0               |
