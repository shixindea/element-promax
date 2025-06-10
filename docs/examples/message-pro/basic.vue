<!-- @format -->

<template>
  <div class="styles-container">
    <!-- 极简主义风格 -->
    <h3>PC端</h3>
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
    <h3>手机端</h3>
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
        <el-button type="danger" @click="showCenterMessage('standard', 'error')"
          >标准居中提示</el-button
        >
        <el-button type="info" @click="showCenterMessage('standard', 'info')"
          >标准居中提示</el-button
        >
      </el-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessagePro } from 'element-plus'
import { Bell } from '@element-plus/icons-vue'
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

const showCenterMessage = (style, type) => {
  ElMessagePro({
    type,
    message: `这是一个${type}类型的${style}居中提示`,
    duration: 3000,
    showClose: true,
    animation: `center-${style}`,
    // customClass: `message-pro-center-${style}`,
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
