<!-- @format -->

<template>
  <div class="demo-button-pro">
    <div class="section-title">摇晃按钮 - 鼠标悬浮时摇晃效果</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--shake"
        >摇晃按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--shake"
        >摇晃按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--shake"
        >摇晃按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--shake"
        >摇晃按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--shake"
        >摇晃按钮</el-button-pro
      >
    </div>

    <div class="section-title">旋转图标按钮 - 鼠标悬浮时图标旋转</div>
    <div class="button-row">
      <el-button-pro
        type="primary"
        class="el-button-pro--rotate-icon"
        :icon="Search"
        >搜索</el-button-pro
      >
      <el-button-pro
        type="success"
        class="el-button-pro--rotate-icon"
        :icon="Check"
        >确认</el-button-pro
      >
      <el-button-pro
        type="warning"
        class="el-button-pro--rotate-icon"
        :icon="Star"
        >收藏</el-button-pro
      >
      <el-button-pro
        type="danger"
        class="el-button-pro--rotate-icon"
        :icon="Delete"
        >删除</el-button-pro
      >
      <el-button-pro
        type="info"
        class="el-button-pro--rotate-icon"
        :icon="Message"
        >消息</el-button-pro
      >
    </div>

    <div class="section-title">旋转图标按钮 - 圆形</div>
    <div class="button-row">
      <el-button-pro
        type="primary"
        circle
        class="el-button-pro--rotate-icon"
        :icon="Search"
      />
      <el-button-pro
        type="success"
        circle
        class="el-button-pro--rotate-icon"
        :icon="Check"
      />
      <el-button-pro
        type="warning"
        circle
        class="el-button-pro--rotate-icon"
        :icon="Star"
      />
      <el-button-pro
        type="danger"
        circle
        class="el-button-pro--rotate-icon"
        :icon="Delete"
      />
      <el-button-pro
        type="info"
        circle
        class="el-button-pro--rotate-icon"
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
