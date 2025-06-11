import {
  buildProps,
  definePropType,
  iconPropType,
  isClient,
  mutable,
} from '@element-plus/utils'
import type { AppContext, ExtractPropTypes, VNode } from 'vue'
import type { Mutable } from '@element-plus/utils'
import type MessageProConstructor from './message-pro.vue'

export const messageProTypes = ['success', 'info', 'warning', 'error'] as const

export type messageProType = typeof messageProTypes[number]

export interface MessageProConfigContext {
  max?: number
  grouping?: boolean
  duration?: number
  offset?: number
  showClose?: boolean
}

export const messageProDefaults = mutable({
  customClass: '',
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3000,
  icon: undefined,
  id: '',
  message: '',
  onClose: undefined,
  showClose: false,
  type: 'info',
  plain: false,
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? document.body : (undefined as never),
} as const)

export const messageProProps = buildProps({
  /**
   * @description custom class name for Message
   */
  customClass: {
    type: String,
    default: messageProDefaults.customClass,
  },
  /**
   * @description whether to center the text
   */
  center: {
    type: Boolean,
    default: messageProDefaults.center,
  },
  /**
   * @description whether `message` is treated as HTML string
   */
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageProDefaults.dangerouslyUseHTMLString,
  },
  /**
   * @description display duration, millisecond. If set to 0, it will not turn off automatically
   */
  duration: {
    type: Number,
    default: messageProDefaults.duration,
  },
  /**
   * @description custom icon component, overrides `type`
   */
  icon: {
    type: iconPropType,
    default: messageProDefaults.icon,
  },
  /**
   * @description message dom id
   */
  id: {
    type: String,
    default: messageProDefaults.id,
  },
  /**
   * @description message text
   */
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function,
    ]),
    default: messageProDefaults.message,
  },
  /**
   * @description callback function when closed with the message instance as the parameter
   */
  onClose: {
    type: definePropType<() => void>(Function),
    default: messageProDefaults.onClose,
  },
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: messageProDefaults.showClose,
  },
  /**
   * @description message type
   */
  type: {
    type: String,
    values: messageProTypes,
    default: messageProDefaults.type,
  },
  /**
   * @description whether message is plain
   */
  plain: {
    type: Boolean,
    default: messageProDefaults.plain,
  },
  /**
   * @description set the distance to the top of viewport
   */
  offset: {
    type: Number,
    default: messageProDefaults.offset,
  },
  /**
   * @description input box size
   */
  zIndex: {
    type: Number,
    default: messageProDefaults.zIndex,
  },
  /**
   * @description merge messages with the same content, type of VNode message is not supported
   */
  grouping: {
    type: Boolean,
    default: messageProDefaults.grouping,
  },
  /**
   * @description The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
   */
  repeatNum: {
    type: Number,
    default: messageProDefaults.repeatNum,
  },
  animation: {
    type: String,
    default: 'standard',
  },
  showWriteBg: {
    type: Boolean,
    default: true,
  },
  // customClass: `message-pro-center-${style}`,
} as const)
export type MessageProProps = ExtractPropTypes<typeof messageProProps>

export const messageProEmits = {
  destroy: () => true,
}
export type MessageProEmits = typeof messageProEmits

export type MessageProInstance = InstanceType<typeof MessageProConstructor>

export type MessageProOptions = Partial<
  Mutable<
    Omit<MessageProProps, 'id'> & {
      appendTo?: HTMLElement | string
    }
  >
>
export type MessageProParams = MessageProOptions | MessageProOptions['message']
export type MessageProParamsNormalized = Omit<MessageProProps, 'id'> & {
  /**
   * @description set the root element for the message, default to `document.body`
   */
  appendTo: HTMLElement
}
export type MessageProOptionsWithType = Omit<MessageProOptions, 'type'>
export type MessageProParamsWithType =
  | MessageProOptionsWithType
  | MessageProOptions['message']

export interface MessageProHandler {
  /**
   * @description close the Message
   */
  close: () => void
}

export type MessageProFn = {
  (
    options?: MessageProParams,
    appContext?: null | AppContext
  ): MessageProHandler
  closeAll(type?: messageProType): void
}
export type MessageProTypedFn = (
  options?: MessageProParamsWithType,
  appContext?: null | AppContext
) => MessageProHandler

export interface MessagePro extends MessageProFn {
  success: MessageProTypedFn
  warning: MessageProTypedFn
  info: MessageProTypedFn
  error: MessageProTypedFn
}
