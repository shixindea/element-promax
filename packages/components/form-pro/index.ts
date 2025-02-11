import { withInstall } from '@element-plus/utils'
import FormPro from './src/form-pro.vue'
import type { SFCWithInstall } from '@element-plus/utils'
export type * from './src/types/form'
// export { useForm } from './src/use-form'
export * from './src/use-form'
export * from './src/props'
export const ElFormPro: SFCWithInstall<typeof FormPro> = withInstall(FormPro)
export default ElFormPro
export type FormProInstance = InstanceType<typeof FormPro>
// export type RegisterFn = (instance: any) => void

// 添加 useForm 的类型定义和导出
interface FormInstance {
  setProps: (props: any) => void
  setFieldsValue: (values: any) => void
  getFieldsValue: () => any
  resetFields: () => void
  clearValidate: (name?: string) => void
}

type UseFormReturnType = [any, FormInstance]

export declare function useForm(): UseFormReturnType
