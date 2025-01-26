import { nextTick, onUnmounted, ref, unref } from 'vue'
import type { FormActionType, UseFormReturnType } from './types/form'
import type { FormProProps } from './props'

// any FormActionType
export function useForm(): UseFormReturnType {
  const formRef: any = ref(null)

  async function getForm() {
    const form = unref(formRef)
    if (!form) {
      // warning(
      //     'The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!',
      // );
    }
    await nextTick()
    return form
    //  as FormActionType;
  }
  function register(instance: any) {
    onUnmounted(() => {
      formRef.value = null
    })
    if (instance === unref(formRef)) {
      return
    }
    formRef.value = instance
    // watch(
    //   () => props,
    //   () => {
    //     if (props) {
    //       console.log('props ===>', props)

    //       // instance && instance.setProps(getDynamicProps(props));
    //     }
    //   },
    //   {
    //     immediate: true,
    //     deep: true,
    //   }
    // )
  }
  const methods: FormActionType = {
    // : FormProProps
    setProps: async (formProps: FormProProps) => {
      const form = await getForm()
      form.setProps(formProps)
    },
    setFieldsValue: async <T>(values: T) => {
      const form = await getForm()
      // <T>
      form.setFieldsValue(values)
    },
    getFieldsValue: <T>(filterHidden?: boolean) => {
      return unref(formRef)?.getFieldsValue(filterHidden) as T
    },
    resetFields: async () => {
      getForm().then(async (form) => {
        await form.resetFields()
      })
    },
    clearValidate: async (name?: string | string[]) => {
      const form = await getForm()
      form.clearValidate(name)
    },
  }
  return [register, methods]
}
