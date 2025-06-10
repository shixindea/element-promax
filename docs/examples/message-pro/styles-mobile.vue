<!-- @format -->

<template>
  <div class="message-pro-demo">
    <!-- 居中提示效果 -->
    <section class="style-section">
      <h1>居中提示效果</h1>

      <!-- 1. 标准居中提示 -->
      <h3>1. 标准居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('standard', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('standard', 'warning')"
            >警告</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('standard', 'error')"
            >错误</el-button
          >
          <el-button type="info" @click="showCenterMessage('standard', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 2. 圆形图标居中提示 -->
      <h3>2. 圆形图标居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('circle-icon', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('circle-icon', 'warning')"
            >警告</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('circle-icon', 'error')"
            >错误</el-button
          >
          <el-button
            type="info"
            @click="showCenterMessage('circle-icon', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 3. 脉冲动画居中提示 -->
      <h3>3. 脉冲动画居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('pulse', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('pulse', 'warning')"
            >警告</el-button
          >
          <el-button type="danger" @click="showCenterMessage('pulse', 'error')"
            >错误</el-button
          >
          <el-button type="info" @click="showCenterMessage('pulse', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 4. 卡片式居中提示 -->
      <h3>4. 卡片式居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('card', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('card', 'warning')"
            >警告</el-button
          >
          <el-button type="danger" @click="showCenterMessage('card', 'error')"
            >错误</el-button
          >
          <el-button type="info" @click="showCenterMessage('card', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 5. 毛玻璃效果居中提示 -->
      <h3>5. 毛玻璃效果居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('glassmorphism', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('glassmorphism', 'warning')"
            >警告</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('glassmorphism', 'error')"
            >错误</el-button
          >
          <el-button
            type="info"
            @click="showCenterMessage('glassmorphism', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 6. 3D效果居中提示 -->
      <h3>6. 3D效果居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button type="success" @click="showCenterMessage('3d', 'success')"
            >成功</el-button
          >
          <el-button type="warning" @click="showCenterMessage('3d', 'warning')"
            >警告</el-button
          >
          <el-button type="danger" @click="showCenterMessage('3d', 'error')"
            >错误</el-button
          >
          <el-button type="info" @click="showCenterMessage('3d', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 7. 渐变背景居中提示 -->
      <h3>7. 渐变背景居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('gradient', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('gradient', 'warning')"
            >警告</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('gradient', 'error')"
            >错误</el-button
          >
          <el-button type="info" @click="showCenterMessage('gradient', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 8. 旋转进入效果居中提示 -->
      <h3>8. 旋转进入效果居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('rotate', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('rotate', 'warning')"
            >警告</el-button
          >
          <el-button type="danger" @click="showCenterMessage('rotate', 'error')"
            >错误</el-button
          >
          <el-button type="info" @click="showCenterMessage('rotate', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 9. 阴影强调居中提示 -->
      <h3>9. 阴影强调居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('shadow-emphasis', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('shadow-emphasis', 'warning')"
            >警告</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('shadow-emphasis', 'error')"
            >错误</el-button
          >
          <el-button
            type="info"
            @click="showCenterMessage('shadow-emphasis', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 10. 边框动画居中提示 -->
      <h3>10. 边框动画居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button
            type="success"
            @click="showCenterMessage('border-animation', 'success')"
            >成功</el-button
          >
          <el-button
            type="warning"
            @click="showCenterMessage('border-animation', 'warning')"
            >警告</el-button
          >
          <el-button
            type="danger"
            @click="showCenterMessage('border-animation', 'error')"
            >错误</el-button
          >
          <el-button
            type="info"
            @click="showCenterMessage('border-animation', 'info')"
            >信息</el-button
          >
        </el-space>
      </div>

      <!-- 11-20. 其他效果居中提示 -->
      <h3>11-20. 其他效果居中提示</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button @click="showCenterMessage('ripple', 'success')"
            >水波纹效果</el-button
          >
          <el-button @click="showCenterMessage('neon', 'success')"
            >霓虹灯效果</el-button
          >
          <el-button @click="showCenterMessage('elastic', 'success')"
            >弹性缩放效果</el-button
          >
          <el-button @click="showCenterMessage('liquid', 'success')"
            >液态效果</el-button
          >
          <el-button @click="showCenterMessage('layered', 'success')"
            >分层卡片效果</el-button
          >
          <el-button @click="showCenterMessage('shine', 'success')"
            >闪光效果</el-button
          >
          <el-button @click="showCenterMessage('dark', 'success')"
            >暗色主题效果</el-button
          >
          <el-button @click="showCenterMessage('scan-line', 'success')"
            >扫描线效果</el-button
          >
          <el-button @click="showCenterMessage('origami', 'success')"
            >折纸效果</el-button
          >
          <el-button @click="showCenterMessage('hologram', 'success')"
            >全息投影效果</el-button
          >
        </el-space>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessagePro } from 'element-plus'

// 显示居中提示消息
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
.style-section {
  margin-bottom: 30px;
}

.buttons-container {
  margin: 15px 0;
}
</style>
