---
title: Loading
lang: en-US
---

<!-- @format -->

# Loading-pro

加载数据时显示动画。

## 基础用法 - 盒子内

:::demo

loading-pro/basic

:::

## 自定义样式和背景色

> `showLoading`、text、animation、backgroundColor、borderColor、color、width、height

:::demo

loading-pro/customization

:::

## 全屏 loading

Show a full screen animation while loading data.

:::demo

loading-pro/fullscreen

:::

## Loading Pro 样式展示

告别单调乏味的加载等待！欢迎来到 Loading Pro 的样式展示区。这里汇聚了 Loading Pro 丰富多样的视觉呈现，旨在证明一个加载组件不仅能传递“正在加载”的信息，更能成为你应用界面中一道亮丽且富有格调的风景线。

:::demo

loading-pro/all-styles

:::

## Loading Pro 性能展示

欢迎来到果锅的 Loading Pro 性能展示区！在这里，我们不仅仅是展示一个加载组件，更是向你证明我们对速度和效率的极致追求。你可能会好奇，一个加载组件的性能究竟有多重要？答案是：至关重要。一个卡顿、延迟的加载体验，会瞬间破坏用户对整个应用的信任感。

:::demo

loading-pro/performance-showcase

:::

## Loading Pro 样式画廊

欢迎来到果锅的 Loading Pro 样式画廊！这里是一个精心策划的视觉空间，专门展示我们 Loading Pro 组件所能呈现的丰富多样、引人入胜的加载效果。我们深知，加载状态不仅仅是技术上的等待，更是用户体验中不可或缺的一环，它直接影响着用户对产品流畅度和专业度的感知。Show a full screen animation while loading data.

:::demo

loading-pro/style-gallery

:::

## Service

You can also invoke Loading with a service. Import Loading service:

```ts
import { ElLoading } from 'element-plus';
```

Invoke it:

```ts
ElLoading.service(options);
```

The parameter `options` is the configuration of Loading, and its details can be found in the following table. `LoadingService` returns a Loading instance, and you can close it by invoking its `close` method:

```ts
const loadingInstance = ElLoading.service(options);
nextTick(() => {
  // Loading should be closed asynchronously
  loadingInstance.close();
});
```

Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:

```ts
const loadingInstance1 = ElLoading.service({ fullscreen: true });
const loadingInstance2 = ElLoading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```

Calling the `close` method on any one of them can close this full screen Loading.

If Element Plus is imported entirely, a globally method `$loading` will be registered to `app.config.globalProperties`. You can invoke it like this: `this.$loading(options)`, and it also returns a Loading instance.

## API

### Options

| Name                 | Description                                                                                                                                                             | Type                       | Default       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| target               | the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to`document.querySelector` to get the corresponding DOM node | ^[string] / ^[HTMLElement] | document.body |
| body                 | same as the`body` modifier of `v-loading`                                                                                                                               | ^[boolean]                 | false         |
| fullscreen           | same as the`fullscreen` modifier of `v-loading`                                                                                                                         | ^[boolean]                 | true          |
| lock                 | same as the`lock` modifier of `v-loading`                                                                                                                               | ^[boolean]                 | false         |
| text                 | loading text that displays under the spinner                                                                                                                            | ^[string]                  | —             |
| spinner              | class name of the custom spinner                                                                                                                                        | ^[string]                  | —             |
| background           | background color of the mask                                                                                                                                            | ^[string]                  | —             |
| customClass          | custom class name for loading                                                                                                                                           | ^[string]                  | —             |
| svg                  | custom SVG element to override the default loading spinner                                                                                                              | ^[string]                  | —             |
| svgViewBox           | sets the viewBox attribute for loading svg element                                                                                                                      | ^[string]                  | —             |
| beforeClose ^(2.7.8) | Function executed before loading attempts to close. If this function returns false, the closing process will be aborted. Otherwise, the loading will close.             | ^[Function]`() => boolean` | —             |
| closed ^(2.7.8)      | Function triggered after loading has completely closed                                                                                                                  | ^[Function]`() => void`    | —             |

### Directives

| Name      | Description        | Type   |
| --------- | ------------------ | ------ |
| v-loading | 具体内容见下方新增 | Object |
|           |                    |        |

### New Props

| Name            | Description                         | Type                          |
| --------------- | ----------------------------------- | ----------------------------- |
| showLoading     | 是否显示 loading [仅自定义指令有效] | Boolean                       |
| animation       | 动画                                | 见下方枚举类型 Animation Enum |
| backgroundColor | 会影响动画颜色                      | String                        |
| borderColor     | 会影响动画颜色                      | String                        |
| color           | 字体颜色                            | String                        |
| width           | 内部动画的大小                      | String                        |
| hegit           | 内部动画的大小                      | String                        |

### Animation Enum

| 序号 | 名称           | 动画名称  |
| ---- | -------------- | --------- |
| 1    | 弧线效果       | spinner   |
| 2    | 脉冲效果       | pulse     |
| 3    | 点阵效果       | dots      |
| 4    | 弹跳球效果     | bounce    |
| 5    | 旋转方块效果   | cube      |
| 6    | 渐变环效果     | gradient  |
| 7    | 心跳效果       | heartbeat |
| 8    | 螺旋效果       | spiral    |
| 9    | 闪烁效果       | blink     |
| 10   | 摆动效果       | swing     |
| 15   | 呼吸效果       | breath    |
| 17   | 星形效果       | star      |
| 18   | 小猫咪效果     | kitty     |
| 19   | 彩虹圈效果     | rainbow   |
| 20   | 爱心跳动效果   | love      |
| 21   | 小鸭子游泳效果 | duck      |
| 22   | 小蜜蜂飞舞效果 | bee       |
| 23   | 泡泡效果       | bubble    |
| 24   | 小火箭效果     | rocket    |
| 25   | 跳跳糖效果     | candy     |
| 26   | 小花朵效果     | flower    |
| 27   | 蝴蝶飞舞效果   | butterfly |
| 28   | 小鱼游泳效果   | fish      |
| 29   | 太阳效果       | sun       |
| 30   | 月亮效果       | moon      |
| 31   | 云朵效果       | cloud     |
| 32   | 闪电效果       | lightning |
| 33   | 雪花效果       | snowflake |
| 34   | 叶子效果       | leaf      |
| 35   | 樱花效果       | cherry    |
