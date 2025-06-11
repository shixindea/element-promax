<!-- @format -->

<template>
  <el-button type="primary" @click="openFullScreen2"> As a service </el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElLoadingPro } from 'element-plus'

const fullscreenLoading = ref(false)

const openFullScreen2 = () => {
  const loading = ElLoadingPro.service({
    lock: true,
    text: 'Loading',
    // background: 'rgba(0, 0, 0, 0.7)',
    // customClass: 'loading-pro-dots',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>
