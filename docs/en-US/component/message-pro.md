---
title: Message
lang: en-US
---

<!-- @format -->

# Message-Pro

Message-Pro 是一款功能丰富、样式多样的 PC 端、移动端消息提示组件，提供从极简到赛博等风格各异的视觉体验。

## 基础使用

Basic

:::demo

message-pro/basic

:::

## 果锅 ☺️

果锅比较喜欢的样式

:::demo

message-pro/like

:::

## 悬浮样式

这些效果涵盖了极简主义、玻璃拟态、3D 立体、复古潮流、液态动效和赛博朋克等多种风格，每种风格下都有独特的按钮和消息样式，适合不同场景和用户喜好。

:::demo

message-pro/styles-pc

:::

## 居中样式

:::demo 这些效果包含多种居中提示样式，如标准、圆形图标、脉冲动画等，还有毛玻璃、3D 效果等，风格多样，适配不同场景。

message-pro/styles-mobile

:::

API

### Options

| Name                     | Description                                                                                         | Type                                            | Default          |        |          |      |
| ------------------------ | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------- | ------ | -------- | ---- |
| message                  | message text                                                                                        | ^[string] / ^[VNode] / ^[Function]`() => VNode` | ''               |        |          |      |
| type                     | message type                                                                                        | ^[enum]`'success'                               | 'warning'        | 'info' | 'error'` | info |
| animation                | 果锅增加 ❤️ 动画                                                                                    | ^[string]'                                      | 见楼下 animation |        |          |
| plain ^(2.6.3)           | whether message is plain                                                                            | ^[boolean]                                      | false            |        |          |      |
| icon                     | custom icon component, overrides`type`                                                              | ^[string] / ^[Component]                        | —                |        |          |      |
| dangerouslyUseHTMLString | whether`message` is treated as HTML string                                                          | ^[boolean]                                      | false            |        |          |      |
| customClass              | custom class name for Message                                                                       | ^[string]                                       | ''               |        |          |      |
| duration                 | display duration, millisecond. If set to 0, it will not turn off automatically                      | ^[number]                                       | 3000             |        |          |      |
| showClose                | whether to show a close button                                                                      | ^[boolean]                                      | false            |        |          |      |
| center                   | whether to center the text                                                                          | ^[boolean]                                      | false            |        |          |      |
| onClose                  | callback function when closed with the message instance as the parameter                            | ^[Function]`() => void`                         | —                |        |          |      |
| offset                   | set the distance to the top of viewport                                                             | ^[number]                                       | 16               |        |          |      |
| appendTo                 | set the root element for the message, default to`document.body`                                     | ^[string] / ^[HTMLElement]                      | —                |        |          |      |
| grouping                 | merge messages with the same content, type of VNode message is not supported                        | ^[boolean]                                      | false            |        |          |      |
| repeatNum                | The number of repetitions, similar to badge, is used as the initial number when used with`grouping` | ^[number]                                       | 1                |        |          |      |

### Methods

`Message` and `this.$message` returns the current Message instance. To manually close the instance, you can call `close` on it.

| Name  | Description       | Type                    |
| ----- | ----------------- | ----------------------- |
| close | close the Message | ^[Function]`() => void` |

### 样式文件 Animation

| 序号 | 效果名称             | Animation 名称          |
| ---- | -------------------- | ----------------------- |
| 1    | 纯色浮动按钮效果     | floating                |
| 2    | 呼吸灯效果           | breathing               |
| 3    | 极简线条风格         | minimalist              |
| 4    | 点状提示效果         | dot                     |
| 5    | 微交互效果           | micro-interaction       |
| 6    | 毛玻璃悬浮卡片效果   | glassmorphism           |
| 7    | 彩虹折射按钮效果     | rainbow-refraction      |
| 8    | 磨砂玻璃效果         | frosted-glass           |
| 9    | 玻璃卡片效果         | glass-card              |
| 10   | 半透明效果           | translucent             |
| 11   | 3D 立方体效果        | 3d-cube                 |
| 12   | 立体进度条效果       | 3d-progress             |
| 13   | 3D 卡片效果          | 3d-card                 |
| 14   | 立体阴影效果         | 3d-shadow               |
| 15   | 3D 按钮效果          | 3d-button               |
| 16   | 像素风格效果         | pixel                   |
| 17   | CRT 屏幕效果         | crt                     |
| 18   | 复古电视机效果       | retro-tv                |
| 19   | 复古纸张效果         | vintage                 |
| 20   | 复古电脑效果         | retro-computer          |
| 21   | 水滴融合效果         | water-drop              |
| 22   | 流动背景效果         | flowing-background      |
| 23   | 液态按钮效果         | liquid-button           |
| 24   | 液态斑点效果         | blob                    |
| 25   | 波浪效果             | wave                    |
| 26   | 霓虹故障效果         | neon-glitch             |
| 27   | 全息投影键盘效果     | hologram-keyboard       |
| 28   | 赛博朋克风格         | cyberpunk               |
| 29   | 故障文字效果         | glitch-text             |
| 30   | 霓虹边框效果         | neon-border             |
| 31   | 树叶生长效果         | leaf-growth             |
| 32   | 水波纹效果           | water-ripple            |
| 33   | 自然卡片效果         | nature-card             |
| 34   | 木纹质感效果         | wood-texture            |
| 35   | 叶纹图案效果         | leaf-pattern            |
| 36   | 多级悬浮球效果       | floating-ball           |
| 37   | 智能折叠效果         | smart-tab               |
| 38   | 状态指示灯效果       | status-indicator        |
| 40   | 功能卡片效果         | functional-card         |
| 41   | 梵高星空背景效果     | van-gogh                |
| 42   | 折纸动画效果         | paper-fold              |
| 43   | 画笔效果             | paint-brush             |
| 44   | 水墨效果             | ink-wash                |
| 45   | 马赛克效果           | mosaic                  |
| 46   | 立体图标效果         | 3d-icon                 |
| 47   | 毛玻璃背景效果       | glass-background        |
| 48   | 磨砂玻璃背景效果     | frosted-background      |
| 49   | 玻璃卡片背景效果     | glass-card-bg           |
| 50   | 悬浮球效果           | floating-ball           |
| 51   | 标准提示效果         | standard                |
| 52   | 圆形图标居中提示     | center-circle-icon      |
| 53   | 脉冲动画居中提示     | center-pulse            |
| 54   | 卡片式居中提示       | center-card             |
| 55   | 毛玻璃效果居中提示   | center-glassmorphism    |
| 56   | 3D 效果居中提示      | center-3d               |
| 57   | 渐变背景居中提示     | center-gradient         |
| 58   | 旋转进入效果居中提示 | center-rotate           |
| 59   | 阴影强调居中提示     | center-shadow-emphasis  |
| 60   | 边框动画居中提示     | center-border-animation |
| 61   | 水波纹效果居中提示   | center-ripple           |
| 62   | 霓虹灯效果居中提示   | center-neon             |
| 63   | 弹性缩放居中提示     | center-elastic          |
| 64   | 液态效果居中提示     | center-liquid           |
| 65   | 分层卡片居中提示     | center-layered          |
| 66   | 闪光效果居中提示     | center-shine            |
| 67   | 暗色主题居中提示     | center-dark             |
| 68   | 扫描线效果居中提示   | center-scan-line        |
| 69   | 折纸效果居中提示     | center-origami          |
| 70   | 全息投影效果居中提示 | center-hologram         |
