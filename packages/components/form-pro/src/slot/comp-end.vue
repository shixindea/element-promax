<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    compInfo: {
      type: Object,
    },
  },
  setup(props) {
    return () => props.compInfo
  },
})
</script>
