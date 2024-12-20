/** @format */

import { defineComponent } from 'vue'

export default defineComponent({
  // props: ['compInfo', 'slotName'],
  props: {
    compInfo: {
      type: Object,
    },
    slotName: {
      type: String,
    },
  },
  setup(props) {
    props.slotName || 'guoguoui-default-slot'
    // return () => props.compInfo![theName]({ model: theSchemaValue.value })
    return () => {}
  },
})
