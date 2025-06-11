// @ts-nocheck
import { nextTick } from 'vue'
import {
  addClass,
  getStyle,
  isClient,
  isString,
  removeClass,
} from '@element-plus/utils'
import { createLoadingProComponent } from './loading-pro'

import type { UseNamespaceReturn, UseZIndexReturn } from '@element-plus/hooks'
import type { LoadingProInstance } from './loading-pro'
import type { LoadingProOptionsResolved } from '..'
import type { LoadingProOptions } from './types'
import type { CSSProperties } from 'vue'

let fullscreenInstance: LoadingInstance | undefined = undefined

export const LoadingPro = function (
  options: LoadingProOptions = {}
): LoadingProInstance {
  if (!isClient) return undefined as any

  const resolved = resolveOptions(options)

  if (resolved.fullscreen && fullscreenInstance) {
    return fullscreenInstance
  }

  const instance = createLoadingProComponent({
    ...resolved,
    closed: () => {
      resolved.closed?.()
      if (resolved.fullscreen) fullscreenInstance = undefined
    },
  })

  addStyle(resolved, resolved.parent, instance)
  addClassList(resolved, resolved.parent, instance)

  resolved.parent.vLoadingProAddClassList = () =>
    addClassList(resolved, resolved.parent, instance)

  /**
   * add loading-number to parent.
   * because if a fullscreen loading is triggered when somewhere
   * a v-loading.body was triggered before and it's parent is
   * document.body which with a margin , the fullscreen loading's
   * destroySelf function will remove 'el-loading-parent--relative',
   * and then the position of v-loading.body will be error.
   */
  let loadingProNumber: string | null =
    resolved.parent.getAttribute('loading-number')
  if (!loadingProNumber) {
    loadingProNumber = '1'
  } else {
    loadingProNumber = `${Number.parseInt(loadingProNumber) + 1}`
  }
  resolved.parent.setAttribute('loading-pro-number', loadingProNumber)

  resolved.parent.appendChild(instance.$el)

  // after instance render, then modify visible to trigger transition
  nextTick(() => (instance.visible.value = resolved.visible))

  if (resolved.fullscreen) {
    fullscreenInstance = instance
  }
  return instance
}

const resolveOptions = (
  options: LoadingProOptions
): LoadingProOptionsResolved => {
  let target: HTMLElement
  if (isString(options.target)) {
    target =
      document.querySelector<HTMLElement>(options.target) ?? document.body
  } else {
    target = options.target || document.body
  }

  return {
    parent: target === document.body || options.body ? document.body : target,
    background: options.background || '',
    svg: options.svg || '',
    svgViewBox: options.svgViewBox || '',
    spinner: options.spinner || false,
    text: options.text || '',
    fullscreen: target === document.body && (options.fullscreen ?? true),
    lock: options.lock ?? false,
    customClass: options.customClass || '',
    visible: options.visible ?? true,
    beforeClose: options.beforeClose,
    closed: options.closed,
    target,
    animation: options.animation || '',
    showWriteBg: options.showWriteBg,
    backgroundColor: options.backgroundColor || '',
    borderColor: options.borderColor || '',
    color: options.color || '',
    width: options.width || '',
    height: options.height || '',
  }
}

const addStyle = async (
  options: LoadingProOptionsResolved,
  parent: HTMLElement,
  instance: LoadingProInstance
) => {
  // Compatible with the instance data format of vue@3.2.12 and earlier versions #12351
  const { nextZIndex } =
    ((instance.vm as any).zIndex as UseZIndexReturn) ||
    (instance.vm as any)._.exposed.zIndex

  const maskStyle: CSSProperties = {}
  if (options.fullscreen) {
    instance.originalPosition.value = getStyle(document.body, 'position')
    instance.originalOverflow.value = getStyle(document.body, 'overflow')
    maskStyle.zIndex = nextZIndex()
  } else if (options.parent === document.body) {
    instance.originalPosition.value = getStyle(document.body, 'position')
    /**
     * await dom render when visible is true in init,
     * because some component's height maybe 0.
     * e.g. el-table.
     */
    await nextTick()
    for (const property of ['top', 'left']) {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      maskStyle[property] = `${
        (options.target as HTMLElement).getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] -
        Number.parseInt(getStyle(document.body, `margin-${property}`), 10)
      }px`
    }
    for (const property of ['height', 'width']) {
      maskStyle[property] = `${
        (options.target as HTMLElement).getBoundingClientRect()[property]
      }px`
    }
  } else {
    instance.originalPosition.value = getStyle(parent, 'position')
  }
  for (const [key, value] of Object.entries(maskStyle)) {
    instance.$el.style[key] = value
  }
}

const addClassList = (
  options: LoadingProOptions,
  parent: HTMLElement,
  instance: LoadingProInstance
) => {
  // Compatible with the instance data format of vue@3.2.12 and earlier versions #12351
  const ns =
    ((instance.vm as any).ns as UseNamespaceReturn) ||
    (instance.vm as any)._.exposed.ns

  if (
    !['absolute', 'fixed', 'sticky'].includes(instance.originalPosition.value)
  ) {
    addClass(parent, ns.bm('parent', 'relative'))
  } else {
    removeClass(parent, ns.bm('parent', 'relative'))
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, ns.bm('parent', 'hidden'))
  } else {
    removeClass(parent, ns.bm('parent', 'hidden'))
  }
}
