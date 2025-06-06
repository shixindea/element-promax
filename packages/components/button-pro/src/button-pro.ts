import { useSizeProp } from '@element-plus/hooks'
import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { Loading } from '@element-plus/icons-vue'
import type { Component, ExtractPropTypes } from 'vue'

export const buttonProTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  /**
   * @deprecated
   * Text type will be deprecated in the next major version (3.0.0)
   */
  'text',
  '',
] as const
export const buttonProNativeTypes = ['button', 'submit', 'reset'] as const

export const buttonProProps = buildProps({
  /**
   * @description button size
   */
  size: useSizeProp,
  /**
   * @description disable the button
   */
  disabled: Boolean,
  /**
   * @description button type
   */
  type: {
    type: String,
    values: buttonProTypes,
    default: '',
  },
  /**
   * @description icon component
   */
  icon: {
    type: iconPropType,
  },
  /**
   * @description native button type
   */
  nativeType: {
    type: String,
    values: buttonProNativeTypes,
    default: 'button',
  },
  /**
   * @description determine whether it's loading
   */
  loading: Boolean,
  /**
   * @description customize loading icon component
   */
  loadingIcon: {
    type: iconPropType,
    default: () => Loading,
  },
  /**
   * @description determine whether it's a plain button
   */
  plain: Boolean,
  /**
   * @description determine whether it's a text button
   */
  text: Boolean,
  /**
   * @description determine whether it's a link button
   */
  link: Boolean,
  /**
   * @description determine whether the text button background color is always on
   */
  bg: Boolean,
  /**
   * @description native button autofocus
   */
  autofocus: Boolean,
  /**
   * @description determine whether it's a round button
   */
  round: Boolean,
  /**
   * @description determine whether it's a circle button
   */
  circle: Boolean,
  /**
   * @description custom button color, automatically calculate `hover` and `active` color
   */
  color: String,
  /**
   * @description dark mode, which automatically converts `color` to dark mode colors
   */
  dark: Boolean,
  /**
   * @description automatically insert a space between two chinese characters
   */
  autoInsertSpace: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description custom element tag
   */
  tag: {
    type: definePropType<string | Component>([String, Object]),
    default: 'button',
  },
} as const)
export const buttonProEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProProps = ExtractPropTypes<typeof buttonProProps>
export type ButtonProEmits = typeof buttonProEmits

export type ButtonProType = ButtonProProps['type']
export type ButtonProNativeType = ButtonProProps['nativeType']
