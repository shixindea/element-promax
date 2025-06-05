import { computed, ref, watchEffect } from 'vue'
import { isArray, isNumber } from '@element-plus/utils'
import { useNameflex } from '@element-plus/hooks'

import type { FlexProps } from './flex'
import type { CSSProperties, StyleValue } from 'vue'

const SIZE_MAP = {
  null: 0,
  small: 8,
  default: 12,
  large: 16,
} as const

export function useFlex(props: FlexProps) {
  const ns = useNameflex('flex')

  const classes = computed(() => [ns.b(), ns.m(props.direction), props.class])

  const horizontalSize = ref(0)
  const verticalSize = ref(0)

  const containerStyle = computed<StyleValue>(() => {
    const alignment: CSSProperties = { alignItems: props.alignment }
    const justify: CSSProperties = { justifyContent: props.justify }
    const gap: CSSProperties = {
      rowGap: `${verticalSize.value}px`,
      columnGap: `${horizontalSize.value}px`,
    }
    const theStyle = ['display: flex', alignment, justify, gap, props.style]
    props.wrap && theStyle.push('flex-wrap: wrap')
    props.row && theStyle.push('flex-direction: row')
    props.column && theStyle.push('flex-direction: column')
    props.direction == 'vertical' && theStyle.push('flex-direction: column')
    props.spaceBetween && theStyle.push('justify-content: space-between')
    props.alignCenter && theStyle.push('align-items: center')
    props.alignEnd && theStyle.push('align-items: flex-end')
    props.alignStart && theStyle.push('align-items: flex-start')
    props.justifyCenter && theStyle.push('justify-content: center')
    props.justifyEnd && theStyle.push('justify-content: flex-end')
    props.justifyStart && theStyle.push('justify-content: flex-start')
    props.justifyBetween && theStyle.push('justify-content: space-between')
    props.center &&
      theStyle.push('align-items: center; justify-content: center')
    props.flex1 && theStyle.push('flex: 1')
    props.flexSize && theStyle.push(`flex: ${props.flexSize}`)

    return theStyle
  })

  watchEffect(() => {
    const { size = 'null', wrap, direction: dir } = props
    if (isArray(size)) {
      const [h = 0, v = 0] = size
      horizontalSize.value = h
      verticalSize.value = v
    } else {
      let val: number
      if (isNumber(size)) {
        val = size
      } else {
        val = SIZE_MAP[size || 'null'] || SIZE_MAP.null
      }

      if (wrap && dir === 'horizontal') {
        horizontalSize.value = verticalSize.value = val
      } else {
        if (dir === 'horizontal') {
          horizontalSize.value = val
          verticalSize.value = 0
        } else {
          verticalSize.value = val
          horizontalSize.value = 0
        }
      }
    }
  })

  return {
    classes,
    containerStyle,
  }
}
