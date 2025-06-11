<!-- @format -->

<template>
  <div class="loading-styles-showcase">
    <h2>Loading Pro 样式展示</h2>
    <p>展示所有35种可爱的loading动画效果</p>

    <!-- 基础样式组 -->
    <div class="style-group">
      <h3>基础样式 (1-17)</h3>
      <div class="grid-container">
        <div
          v-for="(style, index) in basicStyles"
          :key="style"
          class="loading-item"
        >
          <div class="loading-demo">
            <el-card
              v-loadingPro="{
                showLoading: true,
                animation: style,
              }"
              :element-loading-animation="style"
              element-loading-text="Loading..."
              class="demo-card"
            >
              <div class="card-content">{{ index + 1 }}. {{ style }}</div>
            </el-card>
          </div>
          <div class="style-name">{{ style }}</div>
        </div>
      </div>
    </div>

    <!-- 可爱样式组 -->
    <div class="style-group">
      <h3>可爱样式 (18-35)</h3>
      <div class="grid-container">
        <div
          v-for="(style, index) in cuteStyles"
          :key="style"
          class="loading-item"
        >
          <div class="loading-demo">
            <el-card
              v-loadingPro="{
                showLoading: true,
                animation: style,
              }"
              :element-loading-animation="style"
              element-loading-text="Loading..."
              class="demo-card"
            >
              <div class="card-content">{{ index + 18 }}. {{ style }}</div>
            </el-card>
          </div>
          <div class="style-name">{{ style }}</div>
        </div>
      </div>
    </div>

    <!-- 服务调用示例 -->
    <div class="style-group">
      <h3>服务调用示例</h3>
      <div class="service-buttons">
        <el-button
          v-for="style in allStyles.slice(0, 10)"
          :key="style"
          type="primary"
          class="service-btn"
          @click="showServiceLoading(style)"
        >
          {{ style }} 全屏
        </el-button>
      </div>
      <div class="service-buttons">
        <el-button
          v-for="style in allStyles.slice(10, 20)"
          :key="style"
          type="success"
          class="service-btn"
          @click="showServiceLoading(style)"
        >
          {{ style }} 全屏
        </el-button>
      </div>
      <div class="service-buttons">
        <el-button
          v-for="style in allStyles.slice(20, 30)"
          :key="style"
          type="warning"
          class="service-btn"
          @click="showServiceLoading(style)"
        >
          {{ style }} 全屏
        </el-button>
      </div>
      <div class="service-buttons">
        <el-button
          v-for="style in allStyles.slice(30)"
          :key="style"
          type="danger"
          class="service-btn"
          @click="showServiceLoading(style)"
        >
          {{ style }} 全屏
        </el-button>
      </div>
    </div>

    <!-- 随机样式演示 -->
    <div class="style-group">
      <h3>随机样式演示</h3>
      <el-button type="info" size="large" @click="showRandomLoading">
        🎲 随机Loading效果
      </el-button>
      <p class="random-tip">点击按钮体验随机loading效果</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElLoadingPro } from 'element-plus'

// 基础样式 (1-17)
const basicStyles = [
  'spinner',
  'pulse',
  'dots',
  'bounce',
  'cube',
  'gradient',
  'heartbeat',
  'spiral',
  'blink',
  'swing',
  'breath',
  'star',
]

// 可爱样式 (18-35)
const cuteStyles = [
  'kitty',
  'rainbow',
  'love',
  'duck',
  'bee',
  'bubble',
  'rocket',
  'candy',
  'flower',
  'butterfly',
  'fish',
  'sun',
  'moon',
  'cloud',
  'lightning',
  'snowflake',
  'leaf',
  'cherry',
]

// 所有样式
const allStyles = [...basicStyles, ...cuteStyles]

// 显示服务loading
const showServiceLoading = (animation: string) => {
  console.log('showServiceLoading', animation)
  const loading = ElLoadingPro.service({
    lock: true,
    text: `${animation} Loading...`,
    animation,
    background: 'rgba(0, 0, 0, 0.7)',
  })

  setTimeout(() => {
    loading.close()
  }, 3000)
}

// 显示随机loading
const showRandomLoading = () => {
  const randomStyle = allStyles[Math.floor(Math.random() * allStyles.length)]
  const loading = ElLoadingPro.service({
    lock: true,
    text: `🎉 ${randomStyle} 随机效果!`,
    animation: randomStyle,
    background: 'rgba(0, 0, 0, 0.8)',
  })

  setTimeout(() => {
    loading.close()
  }, 4000)
}
</script>

<style scoped>
.loading-styles-showcase {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.loading-styles-showcase h2 {
  text-align: center;
  color: #409eff;
  margin-bottom: 10px;
  font-size: 28px;
}

.loading-styles-showcase p {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 16px;
}

.style-group {
  margin-bottom: 40px;
}

.style-group h3 {
  color: #303133;
  margin-bottom: 20px;
  font-size: 20px;
  border-left: 4px solid #409eff;
  padding-left: 10px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.loading-item {
  text-align: center;
}

.loading-demo {
  margin-bottom: 10px;
}

.demo-card {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.demo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-content {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.style-name {
  font-size: 14px;
  color: #409eff;
  font-weight: 600;
  background: #f0f9ff;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #e1f5fe;
}

.service-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.service-btn {
  min-width: 120px;
  font-size: 12px;
}

.random-tip {
  margin-top: 10px;
  font-size: 14px;
  color: #909399;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  .demo-card {
    height: 100px;
  }

  .service-buttons {
    justify-content: center;
  }

  .service-btn {
    min-width: 100px;
    font-size: 11px;
  }
}

/* loading遮罩层样式优化 */
:deep(.el-loading-mask) {
  border-radius: 8px;
}

:deep(.el-loading-spinner) {
  margin-top: -20px;
}

:deep(.el-loading-text) {
  margin-top: 10px;
  font-size: 12px;
}
</style>
