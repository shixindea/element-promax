<!-- @format -->

<template>
  <div class="demo-button-pro">
    <div class="section-title">阴影按钮 - 动态阴影效果</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
    </div>

    <div class="section-title">阴影按钮 - 圆角</div>
    <div class="button-row">
      <el-button-pro type="primary" round class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
      <el-button-pro type="success" round class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
      <el-button-pro type="warning" round class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
      <el-button-pro type="danger" round class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
      <el-button-pro type="info" round class="el-button-pro--shadow"
        >阴影按钮</el-button-pro
      >
    </div>

    <div class="section-title">缩放按钮 - 鼠标悬浮时缩放效果</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--scale"
        >缩放按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--scale"
        >缩放按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--scale"
        >缩放按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--scale"
        >缩放按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--scale"
        >缩放按钮</el-button-pro
      >
    </div>

    <div class="section-title">缩放按钮 - 圆形和图标</div>
    <div class="button-row">
      <el-button-pro
        type="primary"
        circle
        class="el-button-pro--scale"
        :icon="Search"
      />
      <el-button-pro
        type="success"
        circle
        class="el-button-pro--scale"
        :icon="Check"
      />
      <el-button-pro
        type="warning"
        circle
        class="el-button-pro--scale"
        :icon="Star"
      />
      <el-button-pro
        type="danger"
        circle
        class="el-button-pro--scale"
        :icon="Delete"
      />
      <el-button-pro
        type="info"
        circle
        class="el-button-pro--scale"
        :icon="Message"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Check, Delete, Message, Search, Star } from '@element-plus/icons-vue'
</script>

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
