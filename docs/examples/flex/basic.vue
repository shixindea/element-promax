<!-- @format -->

<template>
  <el-flex size="10">
    <div v-for="item in 5" :key="item">袁果锅</div>
  </el-flex>

  <el-divider />

  <el-flex direction="vertical" size="10">
    <div v-for="item in 5" :key="item">袁果锅</div>
  </el-flex>
  <el-divider />
  <el-flex space-between>
    <div v-for="item in 5" :key="item">袁果锅</div>
  </el-flex>
  <el-divider />

  <el-flex align-center space-between>
    <el-flex
      center
      style="
        width: 46%;
        height: 50px;
        background-color: pink;
        border-radius: 2px;
      "
    >
      G
    </el-flex>
    <el-flex
      center
      style="
        width: 46%;
        height: 80px;
        background-color: skyblue;
        border-radius: 2px;
      "
    >
      G
    </el-flex>
  </el-flex>

  <el-divider />
  <el-flex wrap :size="[10, 20]">
    <div v-for="item in 50" :key="item">袁果锅</div>
  </el-flex>
</template>
