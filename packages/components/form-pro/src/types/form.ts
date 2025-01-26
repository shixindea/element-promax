import { Recordable } from './interface'
import type { FormProProps } from '../props'

export interface FormSchema {
  // Field name
  field: string
  label: string
  components: string
  modelValue?: any
  ifShow?: (formValues: any, formValues2: any, formValues3: any) => boolean
  dynamicRules?: (formValues: any) => any
  message?: string
  componentProps?: any
}

export interface FormProSchema {
  /**
   * 表单配置规则
   */
  schemas: FormSchema[]
  /**
   * 表单底部布局
   */
  showFooter?: boolean
  /**
   * 表单行Row - 行布局
   */
  rowOptions?: object
  /**
   * 表单列Col - label布局
   */
  labelCol?: object
  /**
   * 表单列Col - 表单内容布局
   */
  wrapperCol?: object
  /**
   * 表单底部布局
   */
  actionColOptions?: object
}

export interface FormActionType {
  // submit: () => Promise<void>;
  setFieldsValue: <T>(values: T) => Promise<void>
  resetFields: () => Promise<void>
  getFieldsValue: (filterHidden?: boolean) => Recordable
  // getChildrenFieldsValue: (filterHidden?: boolean) => Recordable;
  // resetAllModel: () => Promise<void>;
  clearValidate: (name?: string | string[]) => Promise<void>
  // updateSchema: any;
  setProps: (formProps: FormProProps) => Promise<void>
  // removeSchemaByFiled: (field: string | string[]) => Promise<void>;
  // appendSchemaByField: (
  //   schema: FormProSchema,
  //   prefixField: string | undefined,
  //   first?: boolean | undefined,
  // ) => Promise<void>;
  // validateFields: (nameList?: NamePath[]) => Promise<any>;
  // validate: (nameList?: NamePath[]) => Promise<any>;
}
export type FormRegisterFn = (formInstance: FormActionType) => void

export type UseFormReturnType = [FormRegisterFn, FormActionType]
