<script lang="tsx">
import { defineComponent, ref } from 'vue'
import { ElButton, ElCol, ElRow, ElSpace } from 'element-plus'
import AsyncValidator from 'async-validator'
import { formProProps } from './props'
import SlotComp from './slot/Index.vue'
import type { FormSchema } from './types/form'

// import Row from '../../row'
// import Col from '../../col'
// import ElSpace from '../../space'
// import ElButton from '../../button'

export default defineComponent({
  name: 'ElFormPro',
  inheritAttrs: false,
  props: formProProps(),
  emits: ['update:modelValue', 'submit'],

  setup(props, { emit }) {
    const thePropsSchemas = ref(props.schemas)

    // 获取schemas中的modelvalue值 start
    const onGetModelValue = () => {
      return thePropsSchemas.value.reduce((prev: any, cur: any) => {
        prev[cur.field] = cur.modelValue
        return prev
      }, {})
    }

    // 获取schemas中的modelvalue值 end

    // : Promise<true>
    const doValidate = async (schema: any) => {
      const validator = new AsyncValidator({
        [schema.field]: schema.dynamicRules(
          onGetModelValue(),
          thePropsSchemas.value,
          schema
        ),
      })
      validator.validate({ [schema.field]: schema.modelValue }, (errors) => {
        if (errors) {
          schema.message = errors[0].message
          return
        } else {
          schema.message = ''
        }
        // 校验通过 do something
      })
      // .then(() => {
      //   console.log('校验成功')

      //   // onValidationSucceeded()
      //   return true as const
      // })
    }

    const renderItems = () => {
      // schemas字段的处理 start
      const theSchemaNodes: any = []
      thePropsSchemas.value.forEach((theSchema: FormSchema) => {
        // if (!!theSchema.dynamicRules) {
        //   doValidate(theSchema)
        // }

        // 渲染 form 表单 start
        const theRanderForm = () => {
          theSchemaNodes.push(
            <ElRow class="form-pro-row">
              <ElCol span={6}>
                <ElSpace style="line-height: 30px">
                  <span>*</span>
                  {theSchema.label}
                  <span>:</span>
                </ElSpace>
              </ElCol>
              <ElCol span={18}>
                {/* <div>{theSchema.components}</div> */}
                <SlotComp
                  key={theSchema.field}
                  {...theSchema}
                  v-model={theSchema.modelValue}
                />
              </ElCol>
            </ElRow>
          )
        }
        // 渲染 form 表单 end

        // ifShow 判断是否显示 start
        const theIfShow = theSchema.ifShow
          ? typeof theSchema.ifShow == 'function'
            ? theSchema.ifShow(
                onGetModelValue(),
                thePropsSchemas.value,
                theSchema
              )
            : theSchema.ifShow
          : true

        if (theIfShow) {
          theRanderForm()
        }
        // ifShow 判断是否显示 end

        // dynamicRules通过这个字段进行校验 start
        // const theDynamicRules = !!theSchema.dynamicRules
        //   ? theSchema.dynamicRules(
        //       onGetModelValue(),
        //       thePropsSchemas.value,
        //       theSchema
        //     )
        //   : {}
        // console.log('theDynamicRules ===>', theDynamicRules)

        // dynamicRules通过这个字段进行校验 end
      })

      return theSchemaNodes
    }

    // 校验表单 start
    const onValidate = () => {
      thePropsSchemas.value.forEach((theSchema: FormSchema) => {
        if (theSchema.dynamicRules) {
          doValidate(theSchema)
        }
      })
    }
    // 校验表单 end

    // 清除校验 start
    const onClearValidate = () => {
      thePropsSchemas.value.forEach((theSchema: FormSchema) => {
        theSchema.message = ''
      })
    }
    // 清除校验 end

    const onSubmit = () => {
      onValidate()
      emit('submit', onGetModelValue(), thePropsSchemas.value)
    }

    const formFooterNode = props.showFooter ? (
      <ElSpace>
        <ElButton type="primary" onClick={onSubmit}>
          提交
        </ElButton>
        <ElButton onClick={onClearValidate}>清空校验</ElButton>
      </ElSpace>
    ) : null

    return () => {
      return (
        <form>
          {renderItems()}
          {formFooterNode}
        </form>
      )
    }
  },
})
</script>

<style>
.form-pro-row + .form-pro-row {
  margin-top: 15px;
}
</style>
