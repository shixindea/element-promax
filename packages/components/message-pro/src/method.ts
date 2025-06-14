import { createVNode, render } from 'vue'
import {
  debugWarn,
  isBoolean,
  isClient,
  isElement,
  isFunction,
  isNumber,
  isString,
  isVNode,
} from '@element-plus/utils'
import { messageConfig } from '@element-plus/components/config-provider'
import MessageProConstructor from './message-pro.vue'
import { messageProDefaults, messageProTypes } from './message-pro'
import { instances } from './instance'

import type { MessageProContext } from './instance'
import type { AppContext } from 'vue'
import type {
  MessagePro,
  MessageProFn,
  MessageProHandler,
  MessageProOptions,
  MessageProParams,
  MessageProParamsNormalized,
  messageProType,
} from './message-pro'

let seed = 1

// TODO: Since Notify.ts is basically the same like this file. So we could do some encapsulation against them to reduce code duplication.

const normalizeOptions = (params?: MessageProParams) => {
  const options: MessageProOptions =
    !params || isString(params) || isVNode(params) || isFunction(params)
      ? { message: params }
      : params

  const normalized = {
    ...messageProDefaults,
    ...options,
  }

  if (!normalized.appendTo) {
    normalized.appendTo = document.body
  } else if (isString(normalized.appendTo)) {
    let appendTo = document.querySelector<HTMLElement>(normalized.appendTo)

    // should fallback to default value with a warning
    if (!isElement(appendTo)) {
      debugWarn(
        'ElMessage',
        'the appendTo option is not an HTMLElement. Falling back to document.body.'
      )
      appendTo = document.body
    }

    normalized.appendTo = appendTo
  }

  // When grouping is configured globally,
  // if grouping is manually set when calling message individually and it is not equal to the default value,
  // the global configuration cannot override the current setting. default => false
  if (isBoolean(messageConfig.grouping) && !normalized.grouping) {
    normalized.grouping = messageConfig.grouping
  }
  if (isNumber(messageConfig.duration) && normalized.duration === 3000) {
    normalized.duration = messageConfig.duration
  }
  if (isNumber(messageConfig.offset) && normalized.offset === 16) {
    normalized.offset = messageConfig.offset
  }
  if (isBoolean(messageConfig.showClose) && !normalized.showClose) {
    normalized.showClose = messageConfig.showClose
  }

  return normalized as MessageProParamsNormalized
}

const closeMessage = (instance: MessageProContext) => {
  const idx = instances.indexOf(instance)
  if (idx === -1) return

  instances.splice(idx, 1)
  const { handler } = instance
  handler.close()
}

const createMessage = (
  { appendTo, ...options }: MessageProParamsNormalized,
  context?: AppContext | null
): MessageProContext => {
  const id = `message_${seed++}`
  const userOnClose = options.onClose

  const container = document.createElement('div')
  const theCustomClass = options.animation
    ? `message-pro-${options.animation}`
    : options.customClass

  const props = {
    ...options,
    // now the zIndex will be used inside the message.vue component instead of here.
    // zIndex: nextIndex() + options.zIndex
    id,
    onClose: () => {
      userOnClose?.()
      closeMessage(instance)
    },
    customClass: theCustomClass,
    // clean message element preventing mem leak
    onDestroy: () => {
      // since the element is destroy, then the VNode should be collected by GC as well
      // we do not want cause any mem leak because we have returned vm as a reference to users
      // so that we manually set it to false.
      render(null, container)
    },
  }
  const vnode = createVNode(
    MessageProConstructor,
    props,
    isFunction(props.message) || isVNode(props.message)
      ? {
          default: isFunction(props.message)
            ? props.message
            : () => props.message,
        }
      : null
  )
  vnode.appContext = context || message._context

  render(vnode, container)
  // instances will remove this item when close function gets called. So we do not need to worry about it.
  appendTo.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const handler: MessageProHandler = {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => {
      vm.exposed!.visible.value = false
    },
  }

  const instance: MessageProContext = {
    id,
    vnode,
    vm,
    handler,
    props: (vnode.component as any).props,
  }

  return instance
}

const message: MessageProFn &
  Partial<MessagePro> & { _context: AppContext | null } = (
  options = {},
  context
) => {
  if (!isClient) return { close: () => undefined }

  const normalized = normalizeOptions(options)

  if (normalized.grouping && instances.length) {
    const instance = instances.find(
      ({ vnode: vm }) => vm.props?.message === normalized.message
    )
    if (instance) {
      instance.props.repeatNum += 1
      instance.props.type = normalized.type
      return instance.handler
    }
  }

  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => undefined }
  }

  const instance = createMessage(normalized, context)

  instances.push(instance)
  return instance.handler
}

messageProTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options)
    return message({ ...normalized, type }, appContext)
  }
})

export function closeAll(type?: messageProType): void {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close()
    }
  }
}

message.closeAll = closeAll
message._context = null

export default message as MessagePro
