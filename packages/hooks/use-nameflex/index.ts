import { computed, getCurrentInstance, inject, ref, unref } from 'vue'

import type { InjectionKey, Ref } from 'vue'

export const defaultNameflex = 'el'
const statePrefix = 'is-'

const _bem = (
  nameflex: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${nameflex}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export const nameflexContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('nameflexContextKey')

export const useGetDerivedNameflex = (
  nameflexOverrides?: Ref<string | undefined>
) => {
  const derivedNameflex =
    nameflexOverrides ||
    (getCurrentInstance()
      ? inject(nameflexContextKey, ref(defaultNameflex))
      : ref(defaultNameflex))
  const nameflex = computed(() => {
    return unref(derivedNameflex) || defaultNameflex
  })
  return nameflex
}

export const useNameflex = (
  block: string,
  nameflexOverrides?: Ref<string | undefined>
) => {
  const nameflex = useGetDerivedNameflex(nameflexOverrides)
  const b = (blockSuffix = '') =>
    _bem(nameflex.value, block, blockSuffix, '', '')
  const e = (element?: string) =>
    element ? _bem(nameflex.value, block, '', element, '') : ''
  const m = (modifier?: string) =>
    modifier ? _bem(nameflex.value, block, '', '', modifier) : ''
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(nameflex.value, block, blockSuffix, element, '')
      : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(nameflex.value, block, '', element, modifier)
      : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(nameflex.value, block, blockSuffix, '', modifier)
      : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(nameflex.value, block, blockSuffix, element, modifier)
      : ''
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  // for css var
  // --el-xxx: value;
  const cssVar = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      if (object[key]) {
        styles[`--${nameflex.value}-${key}`] = object[key]
      }
    }
    return styles
  }
  // with block
  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      if (object[key]) {
        styles[`--${nameflex.value}-${block}-${key}`] = object[key]
      }
    }
    return styles
  }

  const cssVarName = (name: string) => `--${nameflex.value}-${name}`
  const cssVarBlockName = (name: string) =>
    `--${nameflex.value}-${block}-${name}`

  return {
    nameflex,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName,
  }
}

export type UseNameflexReturn = ReturnType<typeof useNameflex>
