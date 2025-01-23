import { withInstall } from '@element-plus/utils'
import FormPro from './src/form-pro.vue'
import type { SFCWithInstall } from '@element-plus/utils'
export const ElFormPro: SFCWithInstall<typeof FormPro> = withInstall(FormPro)
export default ElFormPro
export type FormProInstance = InstanceType<typeof FormPro>
export type { FormProSchema } from './src/types/form'
