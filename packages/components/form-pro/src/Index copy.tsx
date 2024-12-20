/** @format */

import { defineComponent } from 'vue'
import Row from '../../row'
import Col from '../../col'
import { formProProps } from './props'
import { FormSchema } from './types/form'
// import { ElRow, ElCol } from 'element-plus'
import SlotComp from './slot/Index.vue'

export default defineComponent({
  props: formProProps(),
  setup(props) {
    // console.log('props ===>', props);
    const renderItems = () => {
      // schemas字段的处理 start
      const theSchemaNodes: any = []
      props.schemas.forEach((theSchema: FormSchema) => {
        theSchemaNodes.push(
          <Row>
            <Col span={6}>
              {' '}
              <div>{theSchema.label}</div>
            </Col>
            <Col span={18}>
              {/* <div>{theSchema.components}</div> */}
              <SlotComp {...theSchema} />
            </Col>
          </Row>
        )
      })
      return theSchemaNodes
    }

    // schemas字段的处理 end

    return () => {
      return <form>{renderItems()}</form>
    }
  },
})
