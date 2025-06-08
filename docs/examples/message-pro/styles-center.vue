<!-- @format -->

<template>
  <div class="message-pro-demo">
    <!-- 极简主义风格 -->
    <section class="style-section">
      <h1>一、极简主义风格</h1>
      <h3>1、纯色浮动按钮</h3>
      <div class="buttons-container">
        <el-space wrap>
          <el-button type="default" @click="aa('default')"
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
    </section>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessagePro } from 'element-plus'
</script>
