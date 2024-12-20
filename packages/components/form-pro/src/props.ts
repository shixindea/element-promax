import { FormProSchema } from './types/form'
import type { PropType } from 'vue'

export const formProProps: any = () => ({
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormProSchema[]>,
    default: () => [],
    // required: true,
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
})
