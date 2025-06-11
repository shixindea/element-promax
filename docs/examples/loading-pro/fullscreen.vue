<!-- @format -->

<template>
  <el-button type="primary" @click="openFullScreen(true)">
    拥有白色背景
  </el-button>
  <el-button type="primary" @click="openFullScreen(false)">
    没有白色背景
  </el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElLoadingPro } from 'element-plus'

const fullscreenLoading = ref(false)

const openFullScreen = (showWriteBg) => {
  const loading = ElLoadingPro.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
    animation: 'dots',
    showWriteBg,
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>
