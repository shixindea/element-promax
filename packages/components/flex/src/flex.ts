import { createVNode, defineComponent, renderSlot } from 'vue'
import {
  PatchFlags,
  buildProps,
  definePropType,
  isArray,
  isFragment,
  isNumber,
  isValidElementNode,
} from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'
import { useFlex } from './use-flex'

import type { ExtractPropTypes, StyleValue, VNodeArrayChildren } from 'vue'
import type { Arrayable } from '@element-plus/utils'
import type { AlignItemsProperty } from 'csstype'

export const flexProps = buildProps({
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  /**
   * @description Classname
   */
  class: {
    type: definePropType<Arrayable<Record<string, boolean> | string>>([
      String,
      Object,
      Array,
    ]),
    default: '',
  },
  /**
   * @description Extra style rules
   */
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
    default: '',
  },
  /**
   * @description Controls the alignment of items
   */
  alignment: {
    type: definePropType<AlignItemsProperty>(String),
    default: '',
  },
  /**
   * @description Controls the justification of items
   */
  justify: {
    type: definePropType<string>(String),
    default: '',
  },

  /**
   * @description Spacing size
   */
  size: {
    type: [String, Array, Number],
    values: componentSizes,
    validator: (val: unknown): val is [number, number] | number => {
      return (
        isNumber(val) ||
        (isArray(val) && val.length === 2 && val.every(isNumber))
      )
    },
  },
  flexSize: {
    type: [String, Number],
    default: 0,
  },
  cloumn: Boolean,
  row: Boolean,
  wrap: Boolean,
  spaceBetween: Boolean,
  alignCenter: Boolean,
  alignEnd: Boolean,
  alignStart: Boolean,
  justifyCenter: Boolean,
  justifyEnd: Boolean,
  justifyStart: Boolean,
  justifyBetween: Boolean,
  center: Boolean,
  flex1: Boolean,
} as const)
export type FlexProps = ExtractPropTypes<typeof flexProps>

const Flex = defineComponent({
  name: 'ElFlex',

  props: flexProps,

  setup(props, { slots }) {
    //classes,
    const { containerStyle } = useFlex(props)

    // retrieve the children out via a simple for loop
    // the edge case here is that when users uses directives like <v-for>, <v-if>
    // we need to go deeper until the child is not the Fragment type
    function extractChildren(
      children: VNodeArrayChildren,
      // VNode
      extractedChildren: any[] = []
    ) {
      children.forEach((child) => {
        if (isFragment(child)) {
          if (isArray(child.children)) {
            child.children.forEach((nested) => {
              if (isFragment(nested) && isArray(nested.children)) {
                extractChildren(nested.children, extractedChildren)
              } else {
                extractedChildren.push(nested)
              }
            })
          }
        } else if (isValidElementNode(child)) {
          extractedChildren.push(child)
        }
      })

      return extractedChildren
    }

    return () => {
      const children = renderSlot(slots, 'default', { key: 0 }, () => [])

      if ((children.children ?? []).length === 0) return null
      if (isArray(children.children)) {
        const extractedChildren = extractChildren(children.children)
        return createVNode(
          'div',
          {
            style: containerStyle.value,
          },
          extractedChildren,
          PatchFlags.STYLE | PatchFlags.CLASS
        )
      }

      return children.children
    }
  },
})

export type FlexInstance = InstanceType<typeof Flex>

export default Flex
