<!-- @format -->

<template>
  <div class="demo-button-pro">
    <div class="section-title">3D按钮 - 具有立体感的按钮</div>
    <div class="button-row">
      <el-button-pro type="primary" class="el-button-pro--3d"
        >3D按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--3d"
        >3D按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--3d"
        >3D按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--3d"
        >3D按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--3d"
        >3D按钮</el-button-pro
      >
    </div>

    <div class="section-title">霓虹灯按钮 - 发光边框效果</div>
    <div class="button-row dark-bg">
      <el-button-pro type="primary" class="el-button-pro--neon"
        >霓虹灯按钮</el-button-pro
      >
      <el-button-pro type="success" class="el-button-pro--neon"
        >霓虹灯按钮</el-button-pro
      >
      <el-button-pro type="warning" class="el-button-pro--neon"
        >霓虹灯按钮</el-button-pro
      >
      <el-button-pro type="danger" class="el-button-pro--neon"
        >霓虹灯按钮</el-button-pro
      >
      <el-button-pro type="info" class="el-button-pro--neon"
        >霓虹灯按钮</el-button-pro
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

.dark-bg {
  background-color: #222;
  padding: 20px;
  border-radius: 8px;
}
</style>
