import { ElInfiniteScroll } from '@element-plus/components/infinite-scroll'
import { ElLoading } from '@element-plus/components/loading'
import { ElLoadingPro } from '@element-plus/components/loading-pro'
import { ElMessage } from '@element-plus/components/message'
import { ElMessageBox } from '@element-plus/components/message-box'
import { ElNotification } from '@element-plus/components/notification'
import { ElPopoverDirective } from '@element-plus/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
  // 袁果锅开发
  ElLoadingPro,
] as Plugin[]
