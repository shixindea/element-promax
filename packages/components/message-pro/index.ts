import { withInstallFunction } from '@element-plus/utils'

import MessagePro from './src/method'

export const ElMessagePro = withInstallFunction(MessagePro, '$message-pro')
export default ElMessagePro

export * from './src/message-pro'
