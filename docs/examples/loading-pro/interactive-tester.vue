<!-- @format -->

<template>
  <div class="interactive-tester">
    <div class="tester-header">
      <h1>🧪 Loading Pro 交互式测试器</h1>
      <p>实时调整参数，预览loading效果</p>
    </div>

    <el-row :gutter="20">
      <!-- 控制面板 -->
      <el-col :span="8">
        <el-card class="control-panel">
          <template #header>
            <div class="panel-header">
              <span>🎛️ 控制面板</span>
              <el-button size="small" @click="resetSettings">重置</el-button>
            </div>
          </template>

          <!-- 动画样式选择 -->
          <div class="control-group">
            <label class="control-label">动画样式</label>
            <el-select
              v-model="settings.animation"
              placeholder="选择动画"
              class="full-width"
            >
              <el-option-group label="基础样式">
                <el-option
                  v-for="style in basicStyles"
                  :key="style"
                  :label="style"
                  :value="style"
                />
              </el-option-group>
              <el-option-group label="可爱样式">
                <el-option
                  v-for="style in cuteStyles"
                  :key="style"
                  :label="style"
                  :value="style"
                />
              </el-option-group>
            </el-select>
          </div>

          <!-- 文本设置 -->
          <div class="control-group">
            <label class="control-label">加载文本</label>
            <el-input v-model="settings.text" placeholder="输入加载文本" />
          </div>

          <!-- 背景颜色 -->
          <div class="control-group">
            <label class="control-label">背景颜色</label>
            <el-color-picker v-model="settings.background" show-alpha />
            <el-input
              v-model="settings.background"
              placeholder="rgba(0,0,0,0.7)"
              class="color-input"
            />
          </div>

          <!-- 尺寸设置 -->
          <div class="control-group">
            <label class="control-label">Loading尺寸</label>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-input v-model="settings.width" placeholder="宽度">
                  <template #prepend>W</template>
                </el-input>
              </el-col>
              <el-col :span="12">
                <el-input v-model="settings.height" placeholder="高度">
                  <template #prepend>H</template>
                </el-input>
              </el-col>
            </el-row>
          </div>

          <!-- 颜色设置 -->
          <div class="control-group">
            <label class="control-label">主题颜色</label>
            <el-color-picker v-model="settings.color" />
            <el-input
              v-model="settings.color"
              placeholder="#409eff"
              class="color-input"
            />
          </div>

          <!-- 边框颜色 -->
          <div class="control-group">
            <label class="control-label">边框颜色</label>
            <el-color-picker v-model="settings.borderColor" />
            <el-input
              v-model="settings.borderColor"
              placeholder="#409eff"
              class="color-input"
            />
          </div>

          <!-- 锁定设置 -->
          <div class="control-group">
            <el-checkbox v-model="settings.lock">锁定页面滚动</el-checkbox>
          </div>

          <!-- 预设方案 -->
          <div class="control-group">
            <label class="control-label">预设方案</label>
            <el-select
              v-model="selectedPreset"
              placeholder="选择预设"
              @change="applyPreset"
            >
              <el-option label="默认" value="default" />
              <el-option label="可爱粉色" value="cute-pink" />
              <el-option label="科技蓝" value="tech-blue" />
              <el-option label="自然绿" value="nature-green" />
              <el-option label="温暖橙" value="warm-orange" />
              <el-option label="深色模式" value="dark-mode" />
            </el-select>
          </div>

          <!-- 操作按钮 -->
          <div class="control-group">
            <el-button type="primary" class="full-width" @click="showPreview">
              🔍 预览效果
            </el-button>
            <el-button
              type="success"
              class="full-width"
              @click="showFullscreen"
            >
              🖥️ 全屏测试
            </el-button>
            <el-button type="info" class="full-width" @click="generateCode">
              📋 生成代码
            </el-button>
          </div>
        </el-card>
      </el-col>

      <!-- 预览区域 -->
      <el-col :span="16">
        <el-card class="preview-area">
          <template #header>
            <span>👀 实时预览</span>
          </template>

          <!-- 预览容器 -->
          <div class="preview-container">
            <!-- 表格预览 -->
            <div class="preview-item">
              <h4>表格Loading</h4>
              <el-table
                v-loadingPro="{
                  showLoading: tableLoading,
                  animation: settings.animation,
                }"
                :element-loading-animation="settings.animation"
                :element-loading-text="settings.text"
                :element-loading-background="settings.background"
                :element-loading-color="settings.color"
                :element-loading-border-color="settings.borderColor"
                :element-loading-width="settings.width"
                :element-loading-height="settings.height"
                :data="tableData"
                class="preview-table"
              >
                <el-table-column prop="name" label="姓名" width="120" />
                <el-table-column prop="age" label="年龄" width="80" />
                <el-table-column prop="city" label="城市" />
              </el-table>
              <el-button class="toggle-btn" @click="toggleTableLoading">
                {{ tableLoading ? '停止' : '开始' }} Loading
              </el-button>
            </div>

            <!-- 卡片预览 -->
            <div class="preview-item">
              <h4>卡片Loading</h4>
              <el-card
                v-loadingPro="{
                  showLoading: cardLoading,
                  animation: settings.animation,
                }"
                :element-loading-animation="settings.animation"
                :element-loading-text="settings.text"
                :element-loading-background="settings.background"
                :element-loading-color="settings.color"
                :element-loading-border-color="settings.borderColor"
                :element-loading-width="settings.width"
                :element-loading-height="settings.height"
                class="preview-card"
              >
                <div class="card-content">
                  <h3>示例卡片</h3>
                  <p>这是一个示例卡片内容，用于展示loading效果。</p>
                  <el-button type="primary">操作按钮</el-button>
                </div>
              </el-card>
              <el-button class="toggle-btn" @click="toggleCardLoading">
                {{ cardLoading ? '停止' : '开始' }} Loading
              </el-button>
            </div>

            <!-- 自定义容器预览 -->
            <div class="preview-item">
              <h4>自定义容器</h4>
              <div
                v-loadingPro="{
                  showLoading: customLoading,
                  animation: settings.animation,
                }"
                :element-loading-animation="settings.animation"
                :element-loading-text="settings.text"
                :element-loading-background="settings.background"
                :element-loading-color="settings.color"
                :element-loading-border-color="settings.borderColor"
                :element-loading-width="settings.width"
                :element-loading-height="settings.height"
                class="custom-container"
              >
                <div class="container-content">
                  <el-icon><Picture /></el-icon>
                  <p>自定义内容区域</p>
                  <div class="content-grid">
                    <div class="grid-item">项目1</div>
                    <div class="grid-item">项目2</div>
                    <div class="grid-item">项目3</div>
                    <div class="grid-item">项目4</div>
                  </div>
                </div>
              </div>
              <el-button class="toggle-btn" @click="toggleCustomLoading">
                {{ customLoading ? '停止' : '开始' }} Loading
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 代码生成弹窗 -->
    <el-dialog v-model="codeDialogVisible" title="生成的代码" width="700px">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="指令方式" name="directive">
          <pre class="code-block"><code>{{ directiveCode }}</code></pre>
        </el-tab-pane>
        <el-tab-pane label="服务方式" name="service">
          <pre class="code-block"><code>{{ serviceCode }}</code></pre>
        </el-tab-pane>
        <el-tab-pane label="完整示例" name="complete">
          <pre class="code-block"><code>{{ completeCode }}</code></pre>
        </el-tab-pane>
      </el-tabs>

      <template #footer>
        <el-button @click="codeDialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="copyCode">复制代码</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElLoadingPro, ElMessage } from 'element-plus'
import { Picture } from '@element-plus/icons-vue'

// 样式数据
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

// 设置数据
const settings = ref({
  animation: 'spinner',
  text: 'Loading...',
  background: 'rgba(0, 0, 0, 0.7)',
  width: '40px',
  height: '40px',
  color: '#409eff',
  borderColor: '#409eff',
  lock: true,
})

// 预览状态
const tableLoading = ref(false)
const cardLoading = ref(false)
const customLoading = ref(false)

// 弹窗状态
const codeDialogVisible = ref(false)
const activeTab = ref('directive')
const selectedPreset = ref('')

// 示例数据
const tableData = [
  { name: '张三', age: 25, city: '北京' },
  { name: '李四', age: 30, city: '上海' },
  { name: '王五', age: 28, city: '广州' },
]

// 预设方案
const presets = {
  default: {
    animation: 'spinner',
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#409eff',
    borderColor: '#409eff',
  },
  'cute-pink': {
    animation: 'love',
    text: '💕 加载中...',
    background: 'rgba(255, 192, 203, 0.8)',
    color: '#ff69b4',
    borderColor: '#ff1493',
  },
  'tech-blue': {
    animation: 'cube',
    text: '🔧 处理中...',
    background: 'rgba(0, 123, 255, 0.8)',
    color: '#007bff',
    borderColor: '#0056b3',
  },
  'nature-green': {
    animation: 'leaf',
    text: '🌿 加载中...',
    background: 'rgba(40, 167, 69, 0.8)',
    color: '#28a745',
    borderColor: '#1e7e34',
  },
  'warm-orange': {
    animation: 'sun',
    text: '☀️ 加载中...',
    background: 'rgba(255, 193, 7, 0.8)',
    color: '#ffc107',
    borderColor: '#e0a800',
  },
  'dark-mode': {
    animation: 'star',
    text: '🌟 加载中...',
    background: 'rgba(33, 37, 41, 0.9)',
    color: '#6c757d',
    borderColor: '#495057',
  },
}

// 计算属性 - 生成代码
const directiveCode = computed(() => {
  return `<el-table 
  v-loadingPro="loading" 
  element-loading-animation="${settings.value.animation}"
  element-loading-text="${settings.value.text}"
  element-loading-background="${settings.value.background}"
  element-loading-color="${settings.value.color}"
  element-loading-border-color="${settings.value.borderColor}"
  element-loading-width="${settings.value.width}"
  element-loading-height="${settings.value.height}"
  :data="tableData"
>
  <!-- 表格列定义 -->
</el-table>`
})

const serviceCode = computed(() => {
  return `import { ElLoadingPro } from 'element-plus'

const loading = ElLoadingPro.service({
  lock: ${settings.value.lock},
  text: '${settings.value.text}',
  animation: '${settings.value.animation}',
  background: '${settings.value.background}',
  color: '${settings.value.color}',
  borderColor: '${settings.value.borderColor}',
  width: '${settings.value.width}',
  height: '${settings.value.height}'
})

// 关闭loading
setTimeout(() => {
  loading.close()
}, 2000)`
})

//@ts-ignore
const completeCode = computed(() => {
  return `<template>
  <div>
    <el-button @click="showLoading">显示Loading</el-button>
    
    <el-table 
      v-loadingPro="tableLoading" 
      element-loading-animation="${settings.value.animation}"
      element-loading-text="${settings.value.text}"
      element-loading-background="${settings.value.background}"
      :data="tableData"
    >
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElLoadingPro } from 'element-plus'

const tableLoading = ref(false)
const tableData = ref([
  { name: '张三', age: 25 },
  { name: '李四', age: 30 }
])

const showLoading = () => {
  const loading = ElLoadingPro.service({
    lock: ${settings.value.lock},
    text: '${settings.value.text}',
    animation: '${settings.value.animation}',
    background: '${settings.value.background}'
  })
  
  setTimeout(() => {
    loading.close()
  }, 2000)
}
<script>`
})

// 方法
const toggleTableLoading = () => {
  tableLoading.value = !tableLoading.value
}

const toggleCardLoading = () => {
  cardLoading.value = !cardLoading.value
}

const toggleCustomLoading = () => {
  customLoading.value = !customLoading.value
}

const showPreview = () => {
  tableLoading.value = true
  cardLoading.value = true
  customLoading.value = true

  setTimeout(() => {
    tableLoading.value = false
    cardLoading.value = false
    customLoading.value = false
  }, 3000)
}

const showFullscreen = () => {
  const loading = ElLoadingPro.service({
    lock: settings.value.lock,
    text: settings.value.text,
    animation: settings.value.animation,
    background: settings.value.background,
    color: settings.value.color,
    borderColor: settings.value.borderColor,
    width: settings.value.width,
    height: settings.value.height,
  })

  setTimeout(() => {
    loading.close()
  }, 4000)
}

const generateCode = () => {
  codeDialogVisible.value = true
}

const copyCode = () => {
  let code = ''
  if (activeTab.value === 'directive') {
    code = directiveCode.value
  } else if (activeTab.value === 'service') {
    code = serviceCode.value
  } else {
    code = completeCode.value
  }

  navigator.clipboard.writeText(code).then(() => {
    ElMessage.success('代码已复制到剪贴板')
  })
}

const applyPreset = (presetName: string) => {
  if (presets[presetName]) {
    Object.assign(settings.value, presets[presetName])
    ElMessage.success(`已应用 ${presetName} 预设`)
  }
}

const resetSettings = () => {
  settings.value = {
    animation: 'spinner',
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
    width: '40px',
    height: '40px',
    color: '#409eff',
    borderColor: '#409eff',
    lock: true,
  }
  selectedPreset.value = ''
  ElMessage.info('设置已重置')
}
</script>

<style scoped>
.interactive-tester {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.tester-header {
  text-align: center;
  margin-bottom: 30px;
}

.tester-header h1 {
  font-size: 28px;
  color: #409eff;
  margin-bottom: 10px;
}

.tester-header p {
  color: #666;
  font-size: 16px;
}

.control-panel {
  height: fit-content;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.control-group {
  margin-bottom: 20px;
}

.control-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #303133;
  font-size: 14px;
}

.full-width {
  width: 100%;
  margin-bottom: 10px;
}

.color-input {
  margin-top: 8px;
}

.preview-area {
  min-height: 600px;
}

.preview-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.preview-item h4 {
  margin: 0 0 15px 0;
  color: #303133;
  font-size: 16px;
}

.preview-table {
  margin-bottom: 10px;
}

.preview-card {
  margin-bottom: 10px;
}

.card-content {
  text-align: center;
  padding: 20px;
}

.custom-container {
  border: 2px dashed #dcdfe6;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 10px;
  min-height: 200px;
  background: #fafafa;
}

.container-content {
  text-align: center;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
}

.grid-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e4e7ed;
}

.toggle-btn {
  width: 100%;
}

.code-block {
  background: #2d3748;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .interactive-tester :deep(.el-col-8) {
    span: 24;
    margin-bottom: 20px;
  }

  .interactive-tester :deep(.el-col-16) {
    span: 24;
  }
}

/* loading样式优化 */
:deep(.el-loading-mask) {
  border-radius: 8px;
}

:deep(.el-loading-spinner) {
  margin-top: -25px;
}

:deep(.el-loading-text) {
  margin-top: 15px;
  font-size: 14px;
}
</style>
