import { PropType, defineComponent } from 'vue'

export default defineComponent({
  props: {
    // 标题
    title: {
      type: String
    },
    render: {
      type: Function
    },
    // 描述
    content: {
      type: String,
      required: true
    },
    // 取消按钮文本
    cancelText: {
      type: String,
      default: '取消'
    },
    // 确定按钮文本
    confirmText: {
      type: String,
      default: '确定'
    },
    // 取消按钮事件
    cancelHandler: {
      type: Function
    },
    // 确定按钮事件
    confirmHandler: {
      type: Function
    },
    // 关闭 confirm 的回调
    close: {
      type: Function
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div>
          {/* {slots().title && <h3>{slots().title}</h3>}
          {slots().icon && <i class={props.icon}></i>} */}
        </div>
      )
    }
  }
})
