<!-- @format -->

<template>
  <div>
    <h2>Form Pro 布局演示</h2>

    <!-- 布局切换按钮 -->
    <el-space style="margin-bottom: 20px">
      <el-button
        :type="currentLayout === 'vertical' ? 'primary' : 'default'"
        @click="switchLayout('vertical')"
      >
        纵向布局
      </el-button>
      <el-button
        :type="currentLayout === 'horizontal' ? 'primary' : 'default'"
        @click="switchLayout('horizontal')"
      >
        横向布局
      </el-button>
      <el-button
        :type="currentLayout === 'inline' ? 'primary' : 'default'"
        @click="switchLayout('inline')"
      >
        内联布局
      </el-button>
    </el-space>

    <!-- 横向布局配置 -->
    <el-card v-if="currentLayout === 'horizontal'" style="margin-bottom: 20px">
      <template #header>
        <span>横向布局配置</span>
      </template>
      <el-space>
        <span>每行显示数量：</span>
        <el-input-number
          v-model="itemsPerRow"
          :min="1"
          :max="6"
          @change="updateLayout"
        />
      </el-space>
    </el-card>

    <!-- 内联布局配置 -->
    <el-card v-if="currentLayout === 'inline'" style="margin-bottom: 20px">
      <template #header>
        <span>内联布局配置</span>
      </template>
      <el-space>
        <span>Label宽度：</span>
        <el-input
          v-model="labelWidth"
          placeholder="如: 120px"
          style="width: 120px"
          @input="updateLayout"
        />
      </el-space>
    </el-card>

    <!-- 表单组件 -->
    <el-form-pro @register="theFormPro" @submit="onHandleSubmit" />

    <!-- 提交结果显示 -->
    <el-card v-if="submitResult" style="margin-top: 20px">
      <template #header>
        <span>提交结果</span>
      </template>
      <pre>{{ JSON.stringify(submitResult, null, 2) }}</pre>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElButton, ElCard, ElInput, ElInputNumber, ElSpace } from 'element-plus'
import ElFormPro, { useFormPro } from '@element-plus/components/form-pro'
import type { FormProSchema } from '@element-plus/components/form-pro'

const [theFormPro, { setProps: setFormProProps }] = useFormPro()

const currentLayout = ref('vertical')
const itemsPerRow = ref(3)
const labelWidth = ref('120px')
const submitResult = ref(null)

// 表单配置数据
const getSchemaData = (): FormProSchema => {
  //     DATEPICKER = 'DatePicker', // 日期选择器
  // DATERANGEPICKER = 'DateRangePicker', // 日期范围选择器

  return {
    schemas: [
      {
        field: 'DateRangePicker',
        components: 'DateRangePicker',
        label: '时间筛选',
        fullWidth: true, // 在内联布局中独占一行
        componentProps: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          style: {
            width: '100%',
          },
        },
      },
      {
        field: 'orderNo',
        components: 'Input',
        label: '订单号',
        ifShow: () => true,
        dynamicRules: (ruleParams) => {
          const { orderNo } = ruleParams
          return {
            required: true,
            validator: () => {
              if (!orderNo) {
                return Promise.reject(new Error('请输入订单号'))
              }
              return Promise.resolve()
            },
          }
        },
      },
      {
        field: 'dateRange',
        components: 'Input',
        label: '下单时间',
      },
      {
        field: 'customerName',
        components: 'Input',
        label: '用户',
      },
      {
        field: 'phone',
        components: 'Input',
        label: '电话',
      },
      {
        field: 'projectType',
        components: 'Input',
        label: '项目项目',
        componentProps: {
          placeholder: '请选择项目类型',
        },
      },
      {
        field: 'payerName',
        components: 'Input',
        label: '缴费人',
      },
      {
        field: 'payerPhone',
        components: 'Input',
        label: '缴费人电话',
      },
      {
        field: 'description',
        components: 'Input',
        label: '详细描述',
        componentProps: {
          type: 'textarea',
          placeholder: '请输入详细描述（此项在内联布局中会独占一行）',
          rows: 3,
          style: {
            width: '200px',
          },
        },
      },
      {
        field: 'status',
        components: 'Input',
        label: '重量',
      },
    ],
    showFooter: true,
    layout: currentLayout.value,
    itemsPerRow: itemsPerRow.value,
    labelWidth: labelWidth.value,
  }
}

// 切换布局
const switchLayout = (layout: string) => {
  currentLayout.value = layout
  updateLayout()
}

// 更新布局配置
const updateLayout = () => {
  setFormProProps(getSchemaData())
}

// 处理表单提交
const onHandleSubmit = (result: any) => {
  console.log('表单提交结果:', result)
  submitResult.value = result
}

onMounted(() => {
  setFormProProps(getSchemaData())
})
</script>

<style scoped>
h2 {
  color: #409eff;
  margin-bottom: 20px;
}

pre {
  background: #f5f7fa;
  padding: 16px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.5;
  overflow-x: auto;
}
</style>
