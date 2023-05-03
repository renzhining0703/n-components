import { PropType, defineComponent, ref, computed } from 'vue'
// import './index.css'

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
  setup(props, { emit, attrs }) {
    const time = ref<number>(0)

    const disabled = ref<boolean>(false)

    const text = computed<string>(() => {
      return time.value > 0 ? `${time.value}s` : '获取验证码'
    })

    const handleClick = () => {
      emit('click')
      start()
    }

    // const reset = () => {
    //   time.value = 0
    // }

    const start = () => {
      time.value = props.second
      disabled.value = true
      timer()
    }

    const timer = () => {
      if (time.value > 0) {
        time.value--
        setTimeout(timer, 1000)
      } else {
        disabled.value = false
      }
    }

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
