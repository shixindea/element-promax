// @ts-nocheck
import { isRef, ref } from 'vue'
import { hyphenate, isObject, isString } from '@element-plus/utils'
import { LoadingPro } from './service'
import type { Directive, DirectiveBinding, UnwrapRef } from 'vue'
import type { LoadingProOptions } from './types'
import type { LoadingProInstance } from './loading-pro'

const INSTANCE_KEY = Symbol('ElLoadingPro')

export type LoadingProBinding = boolean | UnwrapRef<LoadingProOptions>
export interface ElementLoadingPro extends HTMLElement {
  [INSTANCE_KEY]?: {
    instance: LoadingProInstance
    options: LoadingProOptions
  }
}

const createInstance = (
  el: ElementLoadingPro,
  binding: DirectiveBinding<LoadingProBinding>
) => {
  const vm = binding.instance

  const getBindingProp = <K extends keyof LoadingProOptions>(
    key: K
  ): LoadingProOptions[K] =>
    isObject(binding.value) ? binding.value[key] : undefined

  const resolveExpression = (key: any) => {
    const data = (isString(key) && vm?.[key]) || key
    if (data) return ref(data)
    else return data
  }

  const getProp = <K extends keyof LoadingProOptions>(name: K) => {
    return resolveExpression(
      getBindingProp(name) ||
        el.getAttribute(`element-loading-pro-${hyphenate(name)}`)
    )
  }

  const fullscreen =
    getBindingProp('fullscreen') ?? binding.modifiers.fullscreen

  const options: LoadingProOptions = {
    text: getProp('text'),
    svg: getProp('svg'),
    svgViewBox: getProp('svgViewBox'),
    spinner: getProp('spinner'),
    background: getProp('background'),
    customClass: binding.modifiers.D3D
      ? 'crystal-effect'
      : getProp('customClass'),
    fullscreen,
    target: getBindingProp('target') ?? (fullscreen ? undefined : el),
    body: getBindingProp('body') ?? binding.modifiers.body,
    lock: getBindingProp('lock') ?? binding.modifiers.lock,

    animation: getProp('animation'),
    showWriteBg: getProp('showWriteBg'),
    backgroundColor: getProp('backgroundColor'),
    borderColor: getProp('borderColor'),
    color: getProp('color'),
    width: getProp('width'),
    height: getProp('height'),
  }

  el[INSTANCE_KEY] = {
    options,
    instance: LoadingPro(options),
  }
}

const updateOptions = (
  newOptions: UnwrapRef<LoadingProOptions>,
  originalOptions: LoadingProOptions
) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key]
  }
}

export const vLoadingPro: Directive<ElementLoadingPro, LoadingProBinding> = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding)
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY]
    if (binding.oldValue.showLoading !== binding.value.showLoading) {
      if (binding.value.showLoading && !binding.oldValue.showLoading) {
        createInstance(el, binding)
      } else if (binding.value.showLoading && binding.oldValue.showLoading) {
        if (isObject(binding.value.showLoading))
          updateOptions(binding.value.showLoading, {
            ...instance!.options,
            ...binding.value.showLoading,
          })
      } else {
        instance?.instance.close()
      }
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.close()
    el[INSTANCE_KEY] = null
  },
}
