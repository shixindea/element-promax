import { withInstall } from '@element-plus/utils'
import FormPro from './src/form-pro.vue'
import type { SFCWithInstall } from '@element-plus/utils'
export type * from './src/types/form'
export { useFormPro } from './src/use-form'
export * from './src/props'
export const ElFormPro: SFCWithInstall<typeof FormPro> = withInstall(FormPro)
export default ElFormPro
export type FormProInstance = InstanceType<typeof FormPro>
