<!-- @format -->

<template>
  <div class="demo-button-pro">
    <div class="section-title">渐变按钮 - 多彩渐变背景</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--gradient"
        >渐变按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--gradient"
        >渐变按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--gradient"
        >渐变按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--gradient"
        >渐变按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--gradient"
        >渐变按钮</el-button-pro
      >
    </div>

    <div class="section-title">波纹按钮 - 点击产生波纹效果</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--ripple"
        >波纹按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--ripple"
        >波纹按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--ripple"
        >波纹按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--ripple"
        >波纹按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--ripple"
        >波纹按钮</el-button-pro
      >
    </div>

    <div class="section-title">波纹按钮 - 圆形和图标</div>
    <div class="button-row">
      <el-button-pro
        type="primary"
        circle
        class="el-button-pro--ripple"
        :icon="Search"
      />
      <el-button-pro
        type="success"
        circle
        class="el-button-pro--ripple"
        :icon="Check"
      />
      <el-button-pro
        type="warning"
        circle
        class="el-button-pro--ripple"
        :icon="Star"
      />
      <el-button-pro
        type="danger"
        circle
        class="el-button-pro--ripple"
        :icon="Delete"
      />
      <el-button-pro
        type="info"
        circle
        class="el-button-pro--ripple"
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
