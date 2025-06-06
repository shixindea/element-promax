<!-- @format -->

<template>
  <div class="demo-button-pro">
    <div class="section-title">滑动按钮 - 背景滑动效果</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
    </div>

    <div class="section-title">滑动按钮 - 圆角</div>
    <div class="button-row">
      <el-button-pro type="primary" round class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
      <el-button-pro type="success" round class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
      <el-button-pro type="warning" round class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
      <el-button-pro type="danger" round class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
      <el-button-pro type="info" round class="el-button-pro--slide"
        >滑动按钮</el-button-pro
      >
    </div>

    <div class="section-title">气泡按钮 - 鼠标悬浮时产生气泡效果</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--bubble"
        >气泡按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--bubble"
        >气泡按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--bubble"
        >气泡按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--bubble"
        >气泡按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--bubble"
        >气泡按钮</el-button-pro
      >
    </div>
  </div>
</template>

<style scoped>
.demo-button-pro {
  padding: 20px;
}

.section-title {
  margin: 20px 0 10px;
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.button-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
