import type { InjectionKey } from 'vue'

import type { ButtonProProps } from './button-pro'

export interface ButtonProGroupContext {
  size?: ButtonProProps['size']
  type?: ButtonProProps['type']
}

export const buttonProGroupContextKey: InjectionKey<ButtonProGroupContext> =
  Symbol('buttonGroupContextKey')
