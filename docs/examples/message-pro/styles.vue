<!-- @format -->

<template>
  <div class="message-pro-demo">
    <h2>基础用法</h2>
    <div class="demo-section">
      <el-button @click="open1">默认样式</el-button>
      <el-button type="success" @click="open2">成功消息</el-button>
      <el-button type="warning" @click="open3">警告消息</el-button>
      <el-button type="danger" @click="open4">错误消息</el-button>
      <el-button type="info" @click="open5">信息消息</el-button>
    </div>

    <h2>尺寸变体</h2>
    <div class="demo-section">
      <el-button @click="openSmall">小号消息</el-button>
      <el-button @click="openDefault">默认大小</el-button>
      <el-button @click="openLarge">大号消息</el-button>
    </div>

    <h2>形状变体</h2>
    <div class="demo-section">
      <el-button @click="openRounded">圆角样式</el-button>
      <el-button @click="openCard">卡片样式</el-button>
      <el-button @click="openBorderless">无边框样式</el-button>
    </div>

    <h2>边框强调</h2>
    <div class="demo-section">
      <el-button @click="openLeftBorder">左侧边框强调</el-button>
      <el-button @click="openTopBorder">顶部边框强调</el-button>
    </div>

    <h2>背景样式</h2>
    <div class="demo-section">
      <el-button @click="openFilled">填充样式</el-button>
      <el-button @click="openGradient">渐变背景</el-button>
      <el-button @click="openTranslucent">半透明背景</el-button>
      <el-button @click="openDark">暗色主题</el-button>
    </div>

    <h2>特殊效果</h2>
    <div class="demo-section">
      <el-button @click="openShadow">阴影效果</el-button>
      <el-button @click="openBorderShadow">边框阴影</el-button>
      <el-button @click="openIconBg">带图标背景</el-button>
      <el-button @click="openPulse">脉冲效果</el-button>
      <el-button @click="openHoverEffect">悬浮效果</el-button>
    </div>

    <h2>布局变体</h2>
    <div class="demo-section">
      <el-button @click="openCompact">紧凑样式</el-button>
      <el-button @click="openWide">宽样式</el-button>
      <el-button @click="openWithTitle">带标题样式</el-button>
      <el-button @click="openWithAction">带操作区样式</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessagePro } from 'element-plus'
// 基础用法
const open1 = () => {
  ElMessagePro('这是一条默认消息')
}

const open2 = () => {
  ElMessagePro({
    message: '这是一条成功消息',
    type: 'success',
  })
}

const open3 = () => {
  ElMessagePro({
    message: '这是一条警告消息',
    type: 'warning',
  })
}

const open4 = () => {
  ElMessagePro({
    message: '这是一条错误消息',
    type: 'error',
  })
}

const open5 = () => {
  ElMessagePro({
    message: '这是一条信息消息',
    type: 'info',
  })
}

// 尺寸变体
const openSmall = () => {
  ElMessagePro({
    message: '这是一条小号消息',
    customClass: 'el-message-pro--small',
  })
}

const openDefault = () => {
  ElMessagePro('这是一条默认大小的消息')
}

const openLarge = () => {
  ElMessagePro({
    message: '这是一条大号消息',
    customClass: 'el-message-pro--large',
  })
}

// 形状变体
const openRounded = () => {
  ElMessagePro({
    message: '这是一条圆角样式消息',
    type: 'success',
    customClass: 'el-message-pro--rounded',
  })
}

const openCard = () => {
  ElMessagePro({
    message: '这是一条卡片样式消息',
    type: 'info',
    customClass: 'el-message-pro--card',
  })
}

const openBorderless = () => {
  ElMessagePro({
    message: '这是一条无边框样式消息',
    type: 'warning',
    customClass: 'el-message-pro--borderless',
  })
}

// 边框强调
const openLeftBorder = () => {
  ElMessagePro({
    message: '这是一条左侧边框强调消息',
    type: 'success',
    customClass: 'el-message-pro--left-border',
  })
}

const openTopBorder = () => {
  ElMessagePro({
    message: '这是一条顶部边框强调消息',
    type: 'error',
    customClass: 'el-message-pro--top-border',
  })
}

// 背景样式
const openFilled = () => {
  ElMessagePro({
    message: '这是一条填充样式消息',
    type: 'success',
    customClass: 'el-message-pro--filled',
  })
}

const openGradient = () => {
  ElMessagePro({
    message: '这是一条渐变背景消息',
    type: 'info',
    customClass: 'el-message-pro--gradient',
  })
}

const openTranslucent = () => {
  ElMessagePro({
    message: '这是一条半透明背景消息',
    type: 'warning',
    customClass: 'el-message-pro--translucent',
  })
}

const openDark = () => {
  ElMessagePro({
    message: '这是一条暗色主题消息',
    customClass: 'el-message-pro--dark',
  })
}

// 特殊效果
const openShadow = () => {
  ElMessagePro({
    message: '这是一条阴影效果消息',
    type: 'info',
    customClass: 'el-message-pro--shadow',
  })
}

const openBorderShadow = () => {
  ElMessagePro({
    message: '这是一条边框阴影消息',
    type: 'success',
    customClass: 'el-message-pro--border-shadow',
  })
}

const openIconBg = () => {
  ElMessagePro({
    message: '这是一条带图标背景消息',
    type: 'warning',
    customClass: 'el-message-pro--icon-bg',
  })
}

const openPulse = () => {
  ElMessagePro({
    message: '这是一条脉冲效果消息',
    type: 'error',
    customClass: 'el-message-pro--pulse',
    duration: 0,
  })
}

const openHoverEffect = () => {
  ElMessagePro({
    message: '这是一条悬浮效果消息（鼠标悬停查看效果）',
    type: 'info',
    customClass: 'el-message-pro--hover-effect',
    duration: 0,
  })
}

// 布局变体
const openCompact = () => {
  ElMessagePro({
    message: '这是一条紧凑样式消息',
    type: 'success',
    customClass: 'el-message-pro--compact',
  })
}

const openWide = () => {
  ElMessagePro({
    message: '这是一条宽样式消息，可以容纳更多的内容，适合展示较长的文本信息',
    type: 'info',
    customClass: 'el-message-pro--wide',
  })
}

const openWithTitle = () => {
  ElMessagePro({
    message: h('div', null, [
      h('div', { class: 'el-message-pro__title' }, '操作成功'),
      h('p', null, '数据已成功保存到数据库'),
    ]),
    type: 'success',
    customClass: 'el-message-pro--with-title',
  })
}

const openWithAction = () => {
  ElMessagePro({
    message: h('div', null, [
      h('p', null, '确定要删除这条记录吗？'),
      h('div', { class: 'el-message-pro__action' }, [
        h('el-button', { size: 'small', type: 'primary' }, '确认'),
        h('el-button', { size: 'small' }, '取消'),
      ]),
    ]),
    type: 'warning',
    customClass: 'el-message-pro--with-action',
    duration: 0,
  })
}
</script>

<style scoped>
.message-pro-demo {
  padding: 20px;
}

.demo-section {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

h2 {
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 500;
}
</style>
