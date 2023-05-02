import { PropType, defineComponent } from 'vue'
import { useClickThrottle } from '../../../hooks/useClickThrottle'

export default defineComponent({
  props: {
    throttle: {
      type: Number as PropType<number>,
      default: 1000
    }
  },
  emits: ['click'],
  setup(props, { slots, attrs, emit }) {
    const handleClick = useClickThrottle(() => {
      emit('click')
    }, props.throttle)
    return () => {
      return (
        <el-button {...attrs} onClick={handleClick}>
          {slots.default?.()}
        </el-button>
      )
    }
  }
})
