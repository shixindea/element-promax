<!-- @format -->

<template>
  <div class="demo-button-pro">
    <div class="section-title">轮廓按钮 - 鼠标悬浮时填充背景</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--outline"
        >轮廓按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--outline"
        >轮廓按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--outline"
        >轮廓按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--outline"
        >轮廓按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--outline"
        >轮廓按钮</el-button-pro
      >
    </div>

    <div class="section-title">扩展按钮 - 鼠标悬浮时宽度扩展</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--expand"
        >扩展按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--expand"
        >扩展按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--expand"
        >扩展按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--expand"
        >扩展按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--expand"
        >扩展按钮</el-button-pro
      >
    </div>

    <div class="section-title">扩展按钮 - 带图标</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--expand" :icon="Search"
        >搜索</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--expand" :icon="Check"
        >确认</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--expand" :icon="Star"
        >收藏</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--expand" :icon="Delete"
        >删除</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--expand" :icon="Message"
        >消息</el-button-pro
      >
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
