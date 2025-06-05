import { withInstall } from '@element-plus/utils'

import Flex from './src/flex'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElFlex: SFCWithInstall<typeof Flex> = withInstall(Flex)
export default ElFlex

export * from './src/flex'
export * from './src/use-flex'
