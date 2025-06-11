<!-- @format -->

<template>
  <div class="style-gallery">
    <div class="gallery-header">
      <h1>🎨 Loading Pro 样式画廊</h1>
      <p>35种精美loading动画效果完整展示</p>
    </div>

    <!-- 搜索和筛选 -->
    <div class="filter-section">
      <el-input
        v-model="searchText"
        placeholder="搜索样式名称..."
        prefix-icon="Search"
        class="search-input"
        clearable
      />
      <el-select
        v-model="selectedCategory"
        placeholder="选择分类"
        class="category-select"
      >
        <el-option label="全部" value="all" />
        <el-option label="基础样式" value="basic" />
        <el-option label="可爱样式" value="cute" />
      </el-select>
    </div>

    <!-- 样式展示网格 -->
    <div class="styles-grid">
      <div
        v-for="style in filteredStyles"
        :key="style.name"
        class="style-card"
        @click="showStyleDemo(style.name)"
      >
        <div class="card-header">
          <span class="style-number">{{ style.id }}</span>
          <span class="style-category">{{ style.category }}</span>
        </div>

        <div class="loading-preview">
          <el-card
            v-loadingPro="{
              showLoading: true,
              animation: style.name,
            }"
            :element-loading-animation="style.name"
            class="preview-card"
          >
            <div class="preview-content">
              <div class="style-icon">{{ style.icon }}</div>
              <div class="style-title">{{ style.name }}</div>
            </div>
          </el-card>
        </div>

        <div class="card-footer">
          <div class="style-description">{{ style.description }}</div>
          <div class="action-buttons">
            <el-button
              size="small"
              type="primary"
              @click.stop="copyCode(style.name)"
            >
              📋 复制代码
            </el-button>
            <el-button
              size="small"
              type="success"
              @click.stop="showFullscreen(style.name)"
            >
              🖥️ 全屏
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 代码示例弹窗 -->
    <el-dialog v-model="codeDialogVisible" title="代码示例" width="600px">
      <div class="code-example">
        <h4>指令方式使用：</h4>
        <pre><code>&lt;el-table 
  v-loadingPro="loading" 
  element-loading-animation="{{ currentStyle }}"
  element-loading-text="Loading..."
  :data="tableData"
&gt;
  &lt;!-- 表格内容 --&gt;
&lt;/el-table&gt;</code></pre>

        <h4>服务方式使用：</h4>
        <pre><code>import { ElLoadingPro } from 'element-plus'

const loading = ElLoadingPro.service({
  lock: true,
  text: 'Loading...',
  animation: '{{ currentStyle }}',
  background: 'rgba(0, 0, 0, 0.7)'
})

// 关闭loading
setTimeout(() => {
  loading.close()
}, 2000)</code></pre>
      </div>

      <template #footer>
        <el-button @click="codeDialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="copyAllCode">复制全部代码</el-button>
      </template>
    </el-dialog>

    <!-- 统计信息 -->
    <div class="stats-section">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-statistic
            title="总样式数"
            :value="allStylesData.length"
            suffix="种"
          />
        </el-col>
        <el-col :span="8">
          <el-statistic
            title="基础样式"
            :value="basicStylesCount"
            suffix="种"
          />
        </el-col>
        <el-col :span="8">
          <el-statistic title="可爱样式" :value="cuteStylesCount" suffix="种" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElLoadingPro, ElMessage } from 'element-plus'

// 样式数据
const allStylesData = [
  // 基础样式 (1-17)
  {
    id: 1,
    name: 'spinner',
    category: '基础',
    icon: '🌀',
    description: '经典旋转圆环效果',
  },
  {
    id: 2,
    name: 'pulse',
    category: '基础',
    icon: '💓',
    description: '脉冲缩放效果',
  },
  {
    id: 3,
    name: 'dots',
    category: '基础',
    icon: '⚫',
    description: '点阵波浪效果',
  },
  {
    id: 4,
    name: 'bounce',
    category: '基础',
    icon: '⚽',
    description: '弹跳球效果',
  },
  {
    id: 5,
    name: 'cube',
    category: '基础',
    icon: '🎲',
    description: '3D立方体旋转',
  },
  {
    id: 6,
    name: 'gradient',
    category: '基础',
    icon: '🌈',
    description: '渐变圆环效果',
  },
  {
    id: 7,
    name: 'heartbeat',
    category: '基础',
    icon: '💗',
    description: '心跳节拍效果',
  },
  {
    id: 8,
    name: 'spiral',
    category: '基础',
    icon: '🌪️',
    description: '螺旋旋转效果',
  },
  {
    id: 9,
    name: 'blink',
    category: '基础',
    icon: '✨',
    description: '闪烁灯光效果',
  },
  {
    id: 10,
    name: 'swing',
    category: '基础',
    icon: '🎯',
    description: '钟摆摆动效果',
  },
  {
    id: 11,
    name: 'breath',
    category: '基础',
    icon: '🫁',
    description: '呼吸伸缩效果',
  },
  {
    id: 12,
    name: 'star',
    category: '基础',
    icon: '⭐',
    description: '星形旋转效果',
  },

  // 可爱样式 (18-35)
  {
    id: 18,
    name: 'kitty',
    category: '可爱',
    icon: '🐱',
    description: '小猫咪摆尾巴',
  },
  {
    id: 19,
    name: 'rainbow',
    category: '可爱',
    icon: '🌈',
    description: '彩虹圈旋转',
  },
  {
    id: 20,
    name: 'love',
    category: '可爱',
    icon: '💖',
    description: '爱心跳动效果',
  },
  {
    id: 21,
    name: 'duck',
    category: '可爱',
    icon: '🦆',
    description: '小鸭子游泳',
  },
  {
    id: 22,
    name: 'bee',
    category: '可爱',
    icon: '🐝',
    description: '小蜜蜂飞舞',
  },
  {
    id: 23,
    name: 'bubble',
    category: '可爱',
    icon: '🫧',
    description: '泡泡浮动效果',
  },
  {
    id: 24,
    name: 'rocket',
    category: '可爱',
    icon: '🚀',
    description: '小火箭发射',
  },
  {
    id: 25,
    name: 'candy',
    category: '可爱',
    icon: '🍭',
    description: '跳跳糖效果',
  },
  {
    id: 26,
    name: 'flower',
    category: '可爱',
    icon: '🌸',
    description: '小花朵绽放',
  },
  {
    id: 27,
    name: 'butterfly',
    category: '可爱',
    icon: '🦋',
    description: '蝴蝶飞舞',
  },
  {
    id: 28,
    name: 'fish',
    category: '可爱',
    icon: '🐠',
    description: '小鱼游泳',
  },
  {
    id: 29,
    name: 'sun',
    category: '可爱',
    icon: '☀️',
    description: '太阳光芒',
  },
  {
    id: 30,
    name: 'moon',
    category: '可爱',
    icon: '🌙',
    description: '月亮相位',
  },
  {
    id: 31,
    name: 'cloud',
    category: '可爱',
    icon: '☁️',
    description: '云朵飘动',
  },
  {
    id: 32,
    name: 'lightning',
    category: '可爱',
    icon: '⚡',
    description: '闪电效果',
  },
  {
    id: 33,
    name: 'snowflake',
    category: '可爱',
    icon: '❄️',
    description: '雪花飘落',
  },
  {
    id: 34,
    name: 'leaf',
    category: '可爱',
    icon: '🍃',
    description: '叶子飞舞',
  },
  {
    id: 35,
    name: 'cherry',
    category: '可爱',
    icon: '🌸',
    description: '樱花飘落',
  },
]

// 响应式数据
const searchText = ref('')
const selectedCategory = ref('all')
const codeDialogVisible = ref(false)
const currentStyle = ref('')

// 计算属性
const filteredStyles = computed(() => {
  let filtered = allStylesData

  // 按分类筛选
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter((style) => {
      if (selectedCategory.value === 'basic') {
        return style.category === '基础'
      } else if (selectedCategory.value === 'cute') {
        return style.category === '可爱'
      }
      return true
    })
  }

  // 按搜索文本筛选
  if (searchText.value) {
    filtered = filtered.filter(
      (style) =>
        style.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
        style.description.includes(searchText.value)
    )
  }

  return filtered
})

const basicStylesCount = computed(
  () => allStylesData.filter((style) => style.category === '基础').length
)

const cuteStylesCount = computed(
  () => allStylesData.filter((style) => style.category === '可爱').length
)

// 方法
const showStyleDemo = (styleName: string) => {
  const loading = ElLoadingPro.service({
    lock: true,
    text: `${styleName} 样式演示`,
    animation: styleName,
    background: 'rgba(0, 0, 0, 0.8)',
  })

  setTimeout(() => {
    loading.close()
  }, 3000)
}

const copyCode = (styleName: string) => {
  currentStyle.value = styleName
  codeDialogVisible.value = true
}

const copyAllCode = () => {
  const code = `// 指令方式
<el-table 
  v-loadingPro="loading" 
  element-loading-animation="${currentStyle.value}"
  element-loading-text="Loading..."
  :data="tableData"
>
  <!-- 表格内容 -->
</el-table>

// 服务方式
import { ElLoadingPro } from 'element-plus'

const loading = ElLoadingPro.service({
  lock: true,
  text: 'Loading...',
  animation: '${currentStyle.value}',
  background: 'rgba(0, 0, 0, 0.7)'
})

setTimeout(() => {
  loading.close()
}, 2000)`

  navigator.clipboard.writeText(code).then(() => {
    ElMessage.success('代码已复制到剪贴板')
    codeDialogVisible.value = false
  })
}

const showFullscreen = (styleName: string) => {
  const loading = ElLoadingPro.service({
    lock: true,
    text: `🎉 ${styleName} 全屏展示`,
    animation: styleName,
    background: 'rgba(0, 0, 0, 0.9)',
  })

  setTimeout(() => {
    loading.close()
  }, 4000)
}
</script>

<style scoped>
.style-gallery {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.gallery-header {
  text-align: center;
  margin-bottom: 30px;
}

.gallery-header h1 {
  font-size: 32px;
  color: #409eff;
  margin-bottom: 10px;
}

.gallery-header p {
  font-size: 16px;
  color: #666;
}

.filter-section {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 300px;
}

.category-select {
  width: 150px;
}

.styles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.style-card {
  border: 1px solid #e4e7ed;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
}

.style-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #409eff;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.style-number {
  font-weight: bold;
  color: #409eff;
  font-size: 14px;
}

.style-category {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  background: #409eff;
  color: white;
}

.loading-preview {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}

.preview-card {
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
}

.preview-content {
  text-align: center;
}

.style-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.style-title {
  font-size: 14px;
  font-weight: 600;
  color: #303133;
}

.card-footer {
  padding: 16px;
}

.style-description {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
  text-align: center;
}

.action-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.code-example {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.code-example h4 {
  margin: 0 0 10px 0;
  color: #303133;
}

.code-example pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 10px 0;
  font-size: 13px;
  line-height: 1.5;
}

.stats-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 12px;
  color: white;
}

:deep(.el-statistic__content) {
  color: white !important;
}

:deep(.el-statistic__number) {
  color: white !important;
}

:deep(.el-statistic__suffix) {
  color: white !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .styles-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  .filter-section {
    flex-direction: column;
    gap: 15px;
  }

  .search-input {
    width: 100%;
  }

  .action-buttons {
    flex-direction: column;
  }
}

/* loading遮罩层样式 */
:deep(.el-loading-mask) {
  border-radius: 8px;
}

:deep(.el-loading-spinner) {
  margin-top: -25px;
}

:deep(.el-loading-text) {
  margin-top: 15px;
  font-size: 13px;
}
</style>
