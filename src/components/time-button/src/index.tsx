import { PropType, defineComponent } from 'vue'
import { useItemFn } from './useItemFn'

export default defineComponent({
  name: 'NTimeButton',
  props: {
    second: {
      type: Number as PropType<number>,
      default: 60
    },
    type: {
      type: String as PropType<string>,
      default: 'primary'
    }
  },
  emits: ['click'],
  setup(props, { emit, attrs, expose }) {
    const { text, time, disabled, handleClick, reset } = useItemFn(props, emit)
    expose({ reset }) //  暴露 reset 方法
    return () => {
      return (
        <el-button
          {...attrs}
          type={props.type}
          disabled={disabled.value || time.value > 0}
          onClick={handleClick}
        >
          {text.value}
        </el-button>
      )
    }
  }
})
