<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
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
    return () => {}
  },
})
</script>
