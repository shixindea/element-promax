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

| Name           | Description                                   | Type                             | Default     |
| -------------- | --------------------------------------------- | -------------------------------- | ----------- |
| direction      | Placement direction                           | ^[enum]`'horizontal'             | 'vertical'` |
| class          | Classname                                     | ^[string] / ^[object] / ^[array] | —           |
| style          | Extra style rules                             | ^[string] / ^[object] / ^[array] | —           |
| alignment      | Controls the alignment of items               | ^[string]                        | —           |
| size           | Spacing size                                  | ^[string] / ^[array] / ^[number] | —           |
| wrap           | Auto wrapping                                 | ^[boolean]                       | false       |
| spaceBetween   | Apply space-between layout                    | ^[boolean]                       | false       |
| alignCenter    | Align items to center                         | ^[boolean]                       | false       |
| alignEnd       | Align items to end                            | ^[boolean]                       | false       |
| alignStart     | Align items to start                          | ^[boolean]                       | false       |
| justifyCenter  | Justify content to center                     | ^[boolean]                       | false       |
| justifyEnd     | Justify content to end                        | ^[boolean]                       | false       |
| justifyStart   | Justify content to start                      | ^[boolean]                       | false       |
| justifyBetween | Justify content with space-between            | ^[boolean]                       | false       |
| center         | Center items both horizontally and vertically | ^[boolean]                       | false       |
