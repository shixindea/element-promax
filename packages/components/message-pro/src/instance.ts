import { shallowReactive } from 'vue'
import type { ComponentInternalInstance, VNode } from 'vue'
import type { Mutable } from '@element-plus/utils'
import type { MessageProHandler, MessageProProps } from './message-pro'

export type MessageProContext = {
  id: string
  vnode: VNode
  handler: MessageProHandler
  vm: ComponentInternalInstance
  props: Mutable<MessageProProps>
}

export const instances: MessageProContext[] = shallowReactive([])

export const getInstance = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  const current = instances[idx]
  let prev: MessageProContext | undefined
  if (idx > 0) {
    prev = instances[idx - 1]
  }
  return { current, prev }
}

export const getLastOffset = (id: string): number => {
  const { prev } = getInstance(id)
  if (!prev) return 0
  return prev.vm.exposed!.bottom.value
}

export const getOffsetOrSpace = (id: string, offset: number) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  return idx > 0 ? 16 : offset
}
