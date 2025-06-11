<!-- @format -->

<template>
  <div class="performance-showcase">
    <div class="showcase-header">
      <h1>⚡ Loading Pro 性能展示</h1>
      <p>性能对比、最佳实践和使用建议</p>
    </div>

    <!-- 性能对比测试 -->
    <el-card class="performance-test">
      <template #header>
        <div class="card-header">
          <span>🏃‍♂️ 性能对比测试</span>
          <el-button :loading="testing" @click="runPerformanceTest"
            >开始测试</el-button
          >
        </div>
      </template>

      <div class="test-results">
        <el-table :data="performanceResults" stripe>
          <el-table-column prop="style" label="样式名称" width="120" />
          <el-table-column prop="category" label="分类" width="100" />
          <el-table-column prop="renderTime" label="渲染时间(ms)" width="120" />
          <el-table-column
            prop="memoryUsage"
            label="内存占用(KB)"
            width="130"
          />
          <el-table-column prop="cpuUsage" label="CPU占用(%)" width="120" />
          <el-table-column prop="rating" label="性能评级" width="120">
            <template #default="{ row }">
              <el-tag :type="getRatingType(row.rating)">{{
                row.rating
              }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button size="small" @click="testSingleStyle(row.style)"
                >单独测试</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <!-- 最佳实践建议 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="best-practices">
          <template #header>
            <span>💡 最佳实践建议</span>
          </template>

          <div class="practice-list">
            <div
              v-for="practice in bestPractices"
              :key="practice.title"
              class="practice-item"
            >
              <div class="practice-icon">{{ practice.icon }}</div>
              <div class="practice-content">
                <h4>{{ practice.title }}</h4>
                <p>{{ practice.description }}</p>
                <div class="practice-example">
                  <strong>推荐：</strong> {{ practice.recommended.join(', ') }}
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="usage-scenarios">
          <template #header>
            <span>🎯 使用场景推荐</span>
          </template>

          <div class="scenario-list">
            <div
              v-for="scenario in usageScenarios"
              :key="scenario.scene"
              class="scenario-item"
            >
              <div class="scenario-header">
                <span class="scenario-icon">{{ scenario.icon }}</span>
                <span class="scenario-title">{{ scenario.scene }}</span>
              </div>
              <div class="scenario-styles">
                <el-tag
                  v-for="style in scenario.styles"
                  :key="style"
                  class="style-tag"
                  @click="demoScenario(style)"
                >
                  {{ style }}
                </el-tag>
              </div>
              <p class="scenario-reason">{{ scenario.reason }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 实时性能监控 -->
    <el-card class="performance-monitor">
      <template #header>
        <div class="monitor-header">
          <span>📊 实时性能监控</span>
          <el-switch v-model="monitoring" @change="toggleMonitoring" />
        </div>
      </template>

      <div class="monitor-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="monitor-item">
              <div class="monitor-label">当前FPS</div>
              <div class="monitor-value">{{ currentFPS }}</div>
              <div class="monitor-chart">
                <div
                  v-for="(fps, index) in fpsHistory"
                  :key="index"
                  class="fps-bar"
                  :style="{ height: `${(fps / 60) * 100}%` }"
                />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="monitor-item">
              <div class="monitor-label">内存使用</div>
              <div class="monitor-value">{{ currentMemory }}MB</div>
              <div class="monitor-progress">
                <el-progress
                  :percentage="memoryPercentage"
                  :color="getMemoryColor"
                />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="monitor-item">
              <div class="monitor-label">活跃Loading</div>
              <div class="monitor-value">{{ activeLoadings }}</div>
              <div class="loading-list">
                <el-tag
                  v-for="loading in activeLoadingList"
                  :key="loading"
                  size="small"
                  class="loading-tag"
                >
                  {{ loading }}
                </el-tag>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <!-- 压力测试 -->
    <el-card class="stress-test">
      <template #header>
        <span>🔥 压力测试</span>
      </template>

      <div class="stress-controls">
        <el-row :gutter="20">
          <el-col :span="6">
            <label>并发数量：</label>
            <el-input-number v-model="stressConfig.count" :min="1" :max="100" />
          </el-col>
          <el-col :span="6">
            <label>测试样式：</label>
            <el-select v-model="stressConfig.style">
              <el-option
                v-for="style in allStyles"
                :key="style"
                :label="style"
                :value="style"
              />
            </el-select>
          </el-col>
          <el-col :span="6">
            <label>持续时间(秒)：</label>
            <el-input-number
              v-model="stressConfig.duration"
              :min="1"
              :max="60"
            />
          </el-col>
          <el-col :span="6">
            <el-button
              type="danger"
              :loading="stressTesting"
              @click="startStressTest"
            >
              开始压力测试
            </el-button>
          </el-col>
        </el-row>
      </div>

      <div v-if="stressTesting" class="stress-grid">
        <div v-for="n in stressConfig.count" :key="n" class="stress-item">
          <el-card
            v-loadingPro="{
              showLoading: true,
              animation: stressConfig.style,
            }"
            element-loading-text="压力测试"
            class="stress-card"
          >
            <div class="stress-content">测试{{ n }}</div>
          </el-card>
        </div>
      </div>

      <div v-if="stressResults" class="stress-results">
        <h4>压力测试结果：</h4>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="测试样式">{{
            stressResults.style
          }}</el-descriptions-item>
          <el-descriptions-item label="并发数量">
            <el-text>{{ stressResults.count }}</el-text>
          </el-descriptions-item>
          <el-descriptions-item label="平均FPS">{{
            stressResults.avgFPS
          }}</el-descriptions-item>
          <el-descriptions-item label="最低FPS">{{
            stressResults.minFPS
          }}</el-descriptions-item>
          <el-descriptions-item label="内存峰值"
            >{{ stressResults.peakMemory }}MB</el-descriptions-item
          >
          <el-descriptions-item label="性能评分"
            >{{ stressResults.score }}/100</el-descriptions-item
          >
        </el-descriptions>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { ElLoadingPro, ElMessage } from 'element-plus'

// 所有样式
const allStyles = [
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

// 性能测试数据
const testing = ref(false)
const performanceResults: any = ref([])

// 监控数据
const monitoring = ref(false)
const currentFPS: any = ref(60)
const currentMemory = ref(0)
const fpsHistory: any = ref(Array.from({ length: 20 }).fill(60))
const activeLoadings = ref(0)
const activeLoadingList = ref([])

// 压力测试
const stressTesting = ref(false)
const stressConfig = ref({
  count: 10,
  style: 'spinner',
  duration: 10,
})
const stressResults: any = ref(null)

// 最佳实践数据
const bestPractices = [
  {
    icon: '🚀',
    title: '轻量级场景',
    description: '适用于快速响应的场景，如表单提交、简单查询等',
    recommended: ['spinner', 'pulse', 'dots'],
  },
  {
    icon: '🎨',
    title: '用户体验优先',
    description: '适用于需要提升用户体验的场景，如首页加载、重要操作等',
    recommended: ['rainbow', 'love', 'kitty', 'butterfly'],
  },
  {
    icon: '⚡',
    title: '高性能要求',
    description: '适用于性能敏感的场景，如大数据表格、实时更新等',
    recommended: ['blink', 'breath', 'gradient'],
  },
  {
    icon: '📱',
    title: '移动端优化',
    description: '适用于移动设备，考虑电池和性能限制',
    recommended: ['pulse', 'dots', 'swing'],
  },
]

// 使用场景推荐
const usageScenarios = [
  {
    icon: '💼',
    scene: '企业应用',
    styles: ['spinner', 'cube', 'gradient'],
    reason: '专业、稳重，符合企业形象',
  },
  {
    icon: '🎮',
    scene: '游戏应用',
    styles: ['rocket', 'star', 'lightning'],
    reason: '动感、有趣，增强游戏体验',
  },
  {
    icon: '🛒',
    scene: '电商平台',
    styles: ['love', 'rainbow', 'flower'],
    reason: '温馨、友好，提升购物体验',
  },
  {
    icon: '📚',
    scene: '教育平台',
    styles: ['kitty', 'bee', 'butterfly'],
    reason: '可爱、生动，吸引学习兴趣',
  },
  {
    icon: '🏥',
    scene: '医疗健康',
    styles: ['heartbeat', 'breath', 'pulse'],
    reason: '专业、关怀，符合医疗主题',
  },
  {
    icon: '🌱',
    scene: '环保公益',
    styles: ['leaf', 'flower', 'sun'],
    reason: '自然、环保，传达绿色理念',
  },
]

// 计算属性
const memoryPercentage = computed(() => {
  return Math.min((currentMemory.value / 100) * 100, 100)
})

const getMemoryColor = computed(() => {
  if (memoryPercentage.value < 50) return '#67c23a'
  if (memoryPercentage.value < 80) return '#e6a23c'
  return '#f56c6c'
})

// 性能监控定时器
let monitorTimer: any = null
let fpsCounter = 0
let lastTime = performance.now()

// 方法
const runPerformanceTest = async () => {
  testing.value = true
  performanceResults.value = []

  for (const style of allStyles) {
    const result: any = await testStylePerformance(style)
    performanceResults.value.push(result)
  }

  testing.value = false
  ElMessage.success('性能测试完成')
}

const testStylePerformance = async (style: string) => {
  return new Promise((resolve) => {
    const startTime = performance.now()
    const startMemory = (performance as any).memory?.usedJSHeapSize || 0

    // 模拟渲染测试
    const testElement = document.createElement('div')
    testElement.className = `loading-pro-${style}`
    document.body.appendChild(testElement)

    setTimeout(() => {
      const endTime = performance.now()
      const endMemory = (performance as any).memory?.usedJSHeapSize || 0

      document.body.removeChild(testElement)

      const renderTime = Math.round(endTime - startTime)
      const memoryUsage = Math.round((endMemory - startMemory) / 1024)
      const cpuUsage = Math.random() * 20 + 5 // 模拟CPU使用率

      let rating = 'A'
      if (renderTime > 50 || memoryUsage > 100) rating = 'B'
      if (renderTime > 100 || memoryUsage > 200) rating = 'C'
      if (renderTime > 200 || memoryUsage > 500) rating = 'D'

      resolve({
        style,
        category: allStyles.indexOf(style) < 12 ? '基础' : '可爱',
        renderTime,
        memoryUsage: Math.max(memoryUsage, 10),
        cpuUsage: Math.round(cpuUsage),
        rating,
      })
    }, 100)
  })
}

const testSingleStyle = async (style: string) => {
  const loading = ElLoadingPro.service({
    lock: true,
    text: `测试 ${style} 性能...`,
    animation: style,
  })

  const result: any = await testStylePerformance(style)
  loading.close()

  ElMessage.success(
    `${style} 测试完成: 渲染${result.renderTime}ms, 内存${result.memoryUsage}KB`
  )
}

const getRatingType = (rating: string) => {
  const types = { A: 'success', B: 'warning', C: 'danger', D: 'info' }
  return types[rating] || 'info'
}

const demoScenario = (style: string) => {
  const loading = ElLoadingPro.service({
    lock: true,
    text: `${style} 场景演示`,
    animation: style,
    background: 'rgba(0, 0, 0, 0.8)',
  })

  setTimeout(() => {
    loading.close()
  }, 2000)
}

const toggleMonitoring = (enabled: any) => {
  if (enabled) {
    startMonitoring()
  } else {
    stopMonitoring()
  }
}

const startMonitoring = () => {
  monitorTimer = setInterval(() => {
    // 更新FPS
    const now = performance.now()
    fpsCounter++
    if (now - lastTime >= 1000) {
      currentFPS.value = Math.round((fpsCounter * 1000) / (now - lastTime))
      fpsHistory.value.shift()
      fpsHistory.value.push(currentFPS.value)
      fpsCounter = 0
      lastTime = now
    }

    // 更新内存
    if ((performance as any).memory) {
      currentMemory.value = Math.round(
        (performance as any).memory.usedJSHeapSize / 1024 / 1024
      )
    }

    // 更新活跃loading数量
    activeLoadings.value = document.querySelectorAll('.el-loading-mask').length
  }, 100)
}

const stopMonitoring = () => {
  if (monitorTimer) {
    clearInterval(monitorTimer)
    monitorTimer = null
  }
}

const startStressTest = () => {
  stressTesting.value = true
  stressResults.value = null

  const startTime = performance.now()
  const startMemory = (performance as any).memory?.usedJSHeapSize || 0
  const fpsData: any = []

  const testTimer = setInterval(() => {
    fpsData.push(currentFPS.value)
  }, 100)

  setTimeout(() => {
    clearInterval(testTimer)
    stressTesting.value = false

    const endMemory = (performance as any).memory?.usedJSHeapSize || 0
    const avgFPS = Math.round(
      fpsData.reduce((a, b) => a + b, 0) / fpsData.length
    )
    const minFPS = Math.min(...fpsData)
    const peakMemory = Math.round((endMemory - startMemory) / 1024 / 1024)

    let score = 100
    if (avgFPS < 30) score -= 30
    if (minFPS < 15) score -= 20
    if (peakMemory > 50) score -= 25

    stressResults.value = {
      style: stressConfig.value.style,
      count: stressConfig.value.count,
      avgFPS,
      minFPS,
      peakMemory: Math.max(peakMemory, 1),
      score: Math.max(score, 0),
    }

    ElMessage.success('压力测试完成')
  }, stressConfig.value.duration * 1000)
}

onMounted(() => {
  // 初始化性能数据
  if ((performance as any).memory) {
    currentMemory.value = Math.round(
      (performance as any).memory.usedJSHeapSize / 1024 / 1024
    )
  }
})

onUnmounted(() => {
  stopMonitoring()
})
</script>

<style scoped>
.performance-showcase {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.showcase-header {
  text-align: center;
  margin-bottom: 30px;
}

.showcase-header h1 {
  font-size: 28px;
  color: #409eff;
  margin-bottom: 10px;
}

.showcase-header p {
  color: #666;
  font-size: 16px;
}

.performance-test {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.test-results {
  margin-top: 20px;
}

.best-practices,
.usage-scenarios {
  margin-bottom: 20px;
  height: 500px;
  overflow-y: auto;
}

.practice-list,
.scenario-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.practice-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #409eff;
}

.practice-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.practice-content h4 {
  margin: 0 0 8px 0;
  color: #303133;
}

.practice-content p {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 14px;
}

.practice-example {
  font-size: 13px;
  color: #409eff;
}

.scenario-item {
  padding: 15px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  background: white;
}

.scenario-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.scenario-icon {
  font-size: 20px;
}

.scenario-title {
  font-weight: 600;
  color: #303133;
}

.scenario-styles {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.style-tag {
  cursor: pointer;
  transition: all 0.3s;
}

.style-tag:hover {
  transform: scale(1.05);
}

.scenario-reason {
  font-size: 13px;
  color: #666;
  margin: 0;
}

.performance-monitor {
  margin-bottom: 20px;
}

.monitor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.monitor-content {
  margin-top: 20px;
}

.monitor-item {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.monitor-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.monitor-value {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
  margin-bottom: 15px;
}

.monitor-chart {
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 2px;
  height: 40px;
}

.fps-bar {
  width: 3px;
  background: linear-gradient(to top, #f56c6c, #e6a23c, #67c23a);
  border-radius: 1px;
  transition: height 0.3s;
}

.monitor-progress {
  margin-top: 10px;
}

.loading-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin-top: 10px;
}

.loading-tag {
  font-size: 11px;
}

.stress-test {
  margin-bottom: 20px;
}

.stress-controls {
  margin-bottom: 20px;
}

.stress-controls label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #303133;
}

.stress-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
}

.stress-item {
  height: 100px;
}

.stress-card {
  height: 100%;
}

.stress-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 12px;
  color: #666;
}

.stress-results {
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
}

.stress-results h4 {
  margin: 0 0 15px 0;
  color: #303133;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .stress-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .monitor-chart {
    height: 30px;
  }

  .monitor-value {
    font-size: 18px;
  }
}
</style>
