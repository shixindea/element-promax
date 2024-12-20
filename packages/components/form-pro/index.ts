import { withInstall } from '@element-plus/utils'
import FormPro from './src/Index.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElFormPro: SFCWithInstall<typeof FormPro> = withInstall(FormPro)
export default ElFormPro

// export * from './src/use-dialog'
// export * from './src/dialog'
// export * from './src/constants'
