<!-- @format -->

<template>
  <div class="styles-container">
    <!-- 极简主义风格 -->
    <section class="style-section">
      <div class="buttons-container">
        <el-space wrap>
          <el-button type="default" @click="showFloatingMessage('default')"
            >纯色浮动按钮</el-button
          >
          <el-button type="success" @click="showFloatingMessage('success')"
            >纯色浮动按钮</el-button
          >
          <el-button type="warning" @click="showFloatingMessage('warning')"
            >纯色浮动按钮</el-button
          >
          <el-button type="info" @click="showFloatingMessage('info')"
            >纯色浮动按钮</el-button
          >
          <el-button type="danger" @click="showFloatingMessage('error')"
            >纯色浮动按钮</el-button
          ></el-space
        >
      </div>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showBreathingMessage('default')"
            >呼吸灯效果</el-button
          >
          <el-button type="success" @click="showBreathingMessage('success')"
            >呼吸灯效果</el-button
          >
          <el-button type="warning" @click="showBreathingMessage('warning')"
            >呼吸灯效果</el-button
          >
          <el-button type="info" @click="showBreathingMessage('info')"
            >呼吸灯效果</el-button
          >
          <el-button type="danger" @click="showBreathingMessage('error')"
            >呼吸灯效果</el-button
          >
        </el-space>
      </div>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showDotMessage('default')">点状提示</el-button>

          <el-button type="danger" @click="showDotMessage('error')"
            >点状提示</el-button
          >
          <el-button type="warning" @click="showDotMessage('warning')"
            >点状提示</el-button
          >
          <el-button type="info" @click="showDotMessage('info')"
            >点状提示</el-button
          >
          <el-button type="success" @click="showDotMessage('success')"
            >点状提示</el-button
          >
        </el-space>
      </div>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="show3DProgressMessage">立体进度条</el-button>
          <el-button type="danger" @click="show3DProgressMessage('error')"
            >立体进度条</el-button
          >
          <el-button type="warning" @click="show3DProgressMessage('warning')"
            >立体进度条</el-button
          >
          <el-button type="info" @click="show3DProgressMessage('info')"
            >立体进度条</el-button
          >
          <el-button type="success" @click="show3DProgressMessage('success')"
            >立体进度条</el-button
          >
        </el-space>
      </div>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showWaterDropMessage('info')"
            >水滴融合效果</el-button
          >
          <el-button type="danger" @click="showWaterDropMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showWaterDropMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showWaterDropMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showWaterDropMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showScanningMessage">扫描效果</el-button>
          <el-button type="danger" @click="showScanningMessage('error')"
            >袁果锅</el-button
          >
          <el-button type="warning" @click="showScanningMessage('warning')"
            >袁果锅</el-button
          >
          <el-button type="info" @click="showScanningMessage('info')"
            >袁果锅</el-button
          >
          <el-button type="success" @click="showScanningMessage('success')"
            >袁果锅</el-button
          >
        </el-space>
      </div>

      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('standard', 'success')"
            >标准居中提示</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('standard', 'warning')"
            >标准居中提示</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('standard', 'error')"
            >标准居中提示</el-button
          >
          <el-button type="info" @click="showCenterMessage('standard', 'info')"
            >标准居中提示</el-button
          >
        </el-space>
      </div>

      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('circle-icon', 'success')"
            >圆形图标居中提示</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('circle-icon', 'warning')"
            >圆形图标居中提示</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('circle-icon', 'error')"
            >圆形图标居中提示</el-button
          >
          <el-button
            type="info"
            @click="showCenterMessage('circle-icon', 'info')"
            >圆形图标居中提示</el-button
          >
        </el-space>
      </div>

      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('pulse', 'success')"
            >脉冲动画居中提示</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('pulse', 'warning')"
            >脉冲动画居中提示</el-button
          >
          <el-button type="danger" @click="showCenterMessage('pulse', 'error')"
            >脉冲动画居中提示</el-button
          >
          <el-button type="info" @click="showCenterMessage('pulse', 'info')"
            >脉冲动画居中提示</el-button
          >
        </el-space>
      </div>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('elastic', 'success')"
            >弹性缩放效果</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('elastic', 'warning')"
            >弹性缩放效果</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('elastic', 'error')"
            >弹性缩放效果</el-button
          >
          <el-button type="info" @click="showCenterMessage('elastic', 'info')"
            >弹性缩放效果</el-button
          >
        </el-space>
      </div>

      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('scan-line', 'success')"
            >扫描线效果</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('scan-line', 'warning')"
            >扫描线效果</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('scan-line', 'error')"
            >扫描线效果</el-button
          >
          <el-button type="info" @click="showCenterMessage('scan-line', 'info')"
            >扫描线效果</el-button
          >
        </el-space>
      </div>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('origami', 'success')"
            >折纸效果</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('origami', 'warning')"
            >折纸效果</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('origami', 'error')"
            >折纸效果</el-button
          >
          <el-button type="info" @click="showCenterMessage('origami', 'info')"
            >折纸效果</el-button
          >
        </el-space>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessagePro } from 'element-plus'
import {
  Aim,
  Bell,
  InfoFilled,
  TrendCharts,
  Umbrella,
} from '@element-plus/icons-vue'

// 1. 极简主义风格
const showFloatingMessage = (type: any) => {
  ElMessagePro({
    message: '纯色浮动按钮效果',
    animation: 'floating',
    icon: h(Bell),
    duration: 3000,
    type,
  })
}

const showBreathingMessage = (type: any) => {
  ElMessagePro({
    message: '呼吸灯效果提示',
    // customClass: 'message-pro-breathing',
    animation: 'breathing',
    icon: h(Bell),
    duration: 3000,
    type,
  })
}

const showDotMessage = (type: any) => {
  ElMessagePro({
    message: '点状提示效果',
    // customClass: 'message-pro-dot',
    animation: 'dot',
    icon: h(InfoFilled),
    duration: 3000,
    type,
  })
}

const show3DProgressMessage = (type?: any) => {
  ElMessagePro({
    message: '立体进度条效果',
    // customClass: 'message-pro-3d-progress',
    animation: '3d-progress',
    icon: h(TrendCharts),
    duration: 3000,
    type,
  })
}

// 5. 液态动效风格
const showWaterDropMessage = (type?: any) => {
  ElMessagePro({
    message: '水滴融合效果',
    // customClass: 'message-pro-water-drop',
    animation: 'water-drop',
    icon: h(Umbrella),
    duration: 3000,
    type,
  })
}

const showScanningMessage = (type?: any) => {
  ElMessagePro({
    message: '扫描效果',
    // customClass: 'message-pro-scanning',
    animation: 'scanning',
    icon: h(Aim),
    duration: 3000,
    type,
  })
}

const showCenterMessage = (style, type) => {
  ElMessagePro({
    type,
    message: `这是一个${type}类型的${style}居中提示`,
    duration: 3000,
    showClose: true,
    animation: `center-${style}`,
    // customClass: `message-pro-center-${style}`,
    //
  })
}
</script>

<style scoped>
.styles-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.style-section {
  margin-bottom: 30px;
  padding-bottom: 20px;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #409eff;
}

h3 {
  margin-bottom: 15px;
  color: #606266;
}
</style>
