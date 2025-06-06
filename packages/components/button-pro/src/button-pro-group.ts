import { buttonProProps } from './button-pro'

import type { ExtractPropTypes } from 'vue'

export const buttonProGroupProps = {
  /**
   * @description control the size of buttons in this button-group
   */
  size: buttonProProps.size,
  /**
   * @description control the type of buttons in this button-group
   */
  type: buttonProProps.type,
} as const
export type ButtonProGroupProps = ExtractPropTypes<typeof buttonProGroupProps>
