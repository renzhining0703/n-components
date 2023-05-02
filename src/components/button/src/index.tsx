import { PropType, defineComponent, watch, ref } from 'vue'
import { useClickThrottle } from '../../../hooks/useClickThrottle'

export default defineComponent({
  name: 'NButton',
  props: {
    throttle: {
      type: Number as PropType<number>,
      default: 1000
    }
  },
  emits: ['click'],
  setup(props, { slots, attrs, emit }) {
    const handleClick = useClickThrottle(() => {
      console.log('click', props.throttle)
      emit('click')
    }, props.throttle)

    // const record = ref(0)
    // const handleClick = () => {
    //   let newTime = new Date()
    //   if (newTime.getTime() - record.value > props.throttle) {
    //     emit('click')
    //   }
    //   record.value = new Date().getTime()
    // }

    return () => {
      return (
        <el-button {...attrs} onClick={handleClick}>
          {slots.default?.()}
        </el-button>
      )
    }
  }
})
