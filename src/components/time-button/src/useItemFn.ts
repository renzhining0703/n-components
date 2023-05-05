import { ref, computed } from 'vue'

export const useItemFn = (props: any, emit: any) => {
    const time = ref<number>(0)

    const disabled = ref<boolean>(false)

    const text = computed<string>(() => {
      return time.value > 0 ? `${time.value}s` : '获取验证码'
    })

    const handleClick = () => {
      emit('click')
      start()
    }

    const reset = () => {
      time.value = 0
    }

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

    return {
      text,
      time,
      disabled,
      handleClick,
      reset
    }
}