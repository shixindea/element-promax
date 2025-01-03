export interface FormSchema {
  // Field name
  field: string
  label: string
  components: string
  modelValue: any
  ifShow?: (formValues: any, formValues2: any, formValues3: any) => boolean
  dynamicRules?: (formValues: any) => any
  message?: string
}

export interface FormProSchema extends FormSchema {
  layout?: string
}
