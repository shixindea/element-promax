import { LoadingPro } from './src/service'
import { vLoadingPro } from './src/directive'

import type { App } from 'vue'

// installer and everything in all
export const ElLoadingPro = {
  install(app: App) {
    app.directive('loading-pro', vLoadingPro)
    app.config.globalProperties.$loadingPro = LoadingPro
  },
  directive: vLoadingPro,
  service: LoadingPro,
}

export default ElLoadingPro
export {
  vLoadingPro,
  vLoadingPro as ElLoadingProDirective,
  LoadingPro as ElLoadingProService,
}

export * from './src/types'
