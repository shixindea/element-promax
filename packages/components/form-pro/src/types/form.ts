export interface FormSchema {
  // Field name
  field: string
  label: string
  components: string
  modelValue: any
  ifShow?: unknown | boolean
  dynamicRules?: unknown
  message?: string
}

export interface FormProSchema extends FormSchema {
  layout?: string
}
