<!-- @format -->

<template>
  <div class="mb-4">
    <el-button-pro>Default</el-button-pro>
    <el-button-pro loading type="primary" class="el-button-pro--3d" size="large"
      >Primary</el-button-pro
    >
    <el-button-pro
      disabled
      type="primary"
      class="el-button-pro--3d"
      size="large"
      >Primary</el-button-pro
    >
    <el-button-pro loading type="primary" class="el-button-pro--3d" size="large"
      >Primary</el-button-pro
    >
    <el-button-pro type="primary" class="el-button-pro--3d" size="small"
      >Primary</el-button-pro
    >
    <el-button-pro type="success">Success</el-button-pro>
    <el-button-pro type="info">Info</el-button-pro>
    <el-button-pro type="warning">Warning</el-button-pro>
    <el-button-pro type="danger">Danger</el-button-pro>
  </div>

  <div class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </div>

  <div>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
