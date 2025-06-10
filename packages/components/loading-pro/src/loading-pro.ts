import {
  Transition,
  createApp,
  createVNode,
  defineComponent,
  h,
  reactive,
  ref,
  toRefs,
  vShow,
  withCtx,
  withDirectives,
} from 'vue'
import { removeClass } from '@element-plus/utils'
import { useGlobalComponentSettings } from '@element-plus/components/config-provider'

import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { LoadingProOptionsResolved } from './types'

export function createLoadingProComponent(options: LoadingProOptionsResolved) {
  let afterLeaveTimer: ReturnType<typeof setTimeout>
  // IMPORTANT NOTE: this is only a hacking way to expose the injections on an
  // instance, DO NOT FOLLOW this pattern in your own code.
  const afterLeaveFlag = ref(false)
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: false,
  })

  function setText(text: string) {
    data.text = text
  }

  function destroySelf() {
    const target = data.parent
    const ns = (vm as any).ns as UseNamespaceReturn
    if (!target.vLoadingProAddClassList) {
      let loadingProNumber: number | string | null =
        target.getAttribute('loading-number')
      loadingProNumber = Number.parseInt(loadingProNumber as any) - 1
      if (!loadingProNumber) {
        removeClass(target, ns.bm('parent', 'relative'))
        target.removeAttribute('loading-pro-number')
      } else {
        target.setAttribute('loading-pro-number', loadingProNumber.toString())
      }
      removeClass(target, ns.bm('parent', 'hidden'))
    }
    removeElLoadingProChild()
    loadingProInstance.unmount()
  }
  function removeElLoadingProChild(): void {
    vm.$el?.parentNode?.removeChild(vm.$el)
  }
  function close() {
    if (options.beforeClose && !options.beforeClose()) return

    afterLeaveFlag.value = true
    clearTimeout(afterLeaveTimer)

    afterLeaveTimer = setTimeout(handleAfterLeave, 400)
    data.visible = false

    options.closed?.()
  }

  function handleAfterLeave() {
    if (!afterLeaveFlag.value) return
    const target = data.parent
    afterLeaveFlag.value = false
    target.vLoadingProAddClassList = undefined
    destroySelf()
  }

  const elLoadingProComponent = defineComponent({
    name: 'ElLoadingPro',
    setup(_, { expose }) {
      const { ns, zIndex } = useGlobalComponentSettings('loading-pro')

      expose({
        ns,
        zIndex,
      })

      return () => {
        const svg = data.spinner || data.svg
        const spinner = h(
          'svg',
          {
            class: 'circular',
            viewBox: data.svgViewBox ? data.svgViewBox : '0 0 50 50',
            ...(svg ? { innerHTML: svg } : {}),
          },
          [
            h('circle', {
              class: 'path',
              cx: '25',
              cy: '25',
              r: '20',
              fill: 'none',
            }),
          ]
        )

        const spinnerText = data.text
          ? h('p', { class: ns.b('text') }, [data.text])
          : undefined
        return h(
          Transition,
          {
            name: ns.b('fade'),
            onAfterLeave: handleAfterLeave,
          },
          {
            default: withCtx(() => [
              withDirectives(
                createVNode(
                  'div',
                  {
                    style: {
                      backgroundColor: data.background || '',
                    },
                    class: [
                      ns.b('mask'),
                      data.customClass,
                      data.fullscreen ? 'is-fullscreen' : '',
                    ],
                  },
                  [
                    h(
                      'div',
                      {
                        class: ns.b('spinner'),
                      },
                      [spinner, spinnerText]
                    ),
                  ]
                ),
                [[vShow, data.visible]]
              ),
            ]),
          }
        )
      }
    },
  })

  const loadingProInstance = createApp(elLoadingProComponent)
  const vm = loadingProInstance.mount(document.createElement('div'))

  return {
    ...toRefs(data),
    setText,
    removeElLoadingProChild,
    close,
    handleAfterLeave,
    vm,
    get $el(): HTMLElement {
      return vm.$el
    },
  }
}

export type LoadingProInstance = ReturnType<typeof createLoadingProComponent>
