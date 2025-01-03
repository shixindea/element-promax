import { withInstall, withNoopInstall } from '@element-plus/utils'
import FormPro from './src/Index.vue'
import CompEnd from './src/slot/comp-end.vue'
import CompSlot from './src/slot/comp-slot.vue'
import SlotIndex from './src/slot/Index.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElFormPro: SFCWithInstall<typeof FormPro> & {
  SlotIndex: typeof SlotIndex
} = withInstall(FormPro, {
  SlotIndex,
})

export const ElCompSlot: SFCWithInstall<typeof CompSlot> =
  withNoopInstall(CompSlot)
export const ElCompEnd: SFCWithInstall<typeof CompEnd> =
  withNoopInstall(CompEnd)
export const ElSlotIndex: SFCWithInstall<typeof SlotIndex> & {
  CompSlot: typeof CompSlot
  CompEnd: typeof CompEnd
} = withInstall(SlotIndex, {
  CompSlot,
  CompEnd,
})
