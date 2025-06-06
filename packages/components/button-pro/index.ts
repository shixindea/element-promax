import { withInstall, withNoopInstall } from '@element-plus/utils'
import ButtonPro from './src/button-pro.vue'
import ButtonProGroup from './src/button-pro-group.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElButtonPro: SFCWithInstall<typeof ButtonPro> & {
  ButtonProGroup: typeof ButtonProGroup
} = withInstall(ButtonPro, {
  ButtonProGroup,
})
export const ElButtonProGroup: SFCWithInstall<typeof ButtonProGroup> =
  withNoopInstall(ButtonProGroup)
export default ElButtonPro

export * from './src/button-pro'
export * from './src/constants'
export type { ButtonProInstance, ButtonProGroupInstance } from './src/instance'
