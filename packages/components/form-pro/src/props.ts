import type { FormSchema } from './types/form'
import type { ExtractPropTypes, PropType } from 'vue'
export const formProProps: any = () => ({
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  // 表单行Row - 行布局
  rowOptions: {
    type: Object,
    default: () => ({
      gutter: 20,
    }),
  },
  // 表单列Col - label布局
  labelCol: {
    type: Object,
    default: () => ({
      span: 4,
    }),
  },
  // 表单列Col - 表单内容布局
  wrapperCol: {
    type: Object,
    default: () => ({
      span: 18,
    }),
  },
  // 表单底部布局
  actionColOptions: {
    type: Object,
    default: () => ({
      span: 24,
    }),
  },
})

export type FormProProps = Partial<
  ExtractPropTypes<ReturnType<typeof formProProps>>
>
