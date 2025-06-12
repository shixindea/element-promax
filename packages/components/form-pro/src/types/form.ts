import { THE_COMP_TYPE } from '../conf'
import { Recordable } from './interface'
import type { FormProProps } from '../props'

export interface FormSchema {
  field: string
  label: string
  components: THE_COMP_TYPE | string
  modelValue?: any
  ifShow?: (formValues: any, formValues2: any, formValues3: any) => boolean
  dynamicRules?: (formValues: any) => any
  message?: string
  componentProps?: any
  slotName?: string
  end?: object
  before?: object
  after?: object
  fullWidth?: boolean // 在内联布局中是否独占一行
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
  /**
   * 表单布局类型
   */
  layout?: 'vertical' | 'horizontal' | 'inline' | string
  /**
   * 横向布局时每行显示的表单项数量
   */
  itemsPerRow?: number
  /**
   * 标签宽度
   */
  labelWidth?: string
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
