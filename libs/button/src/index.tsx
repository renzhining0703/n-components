import { PropType, defineComponent } from "vue";
import { useClickThrottle } from "../../hooks/useClickThrottle";

export default defineComponent({
  name: "NButton",
  props: {
    throttle: {
      type: Number as PropType<number>,
      default: 1000,
    },
  },
  emits: ["click"],
  setup(props, { slots, attrs, emit }) {
    const handleClick = () => {
      emit("click");
    };
    return {
      slots,
      emit,
      attrs,
      props,
      handleClick,
    };
  },
  render() {
    const { handleClick, attrs, slots, props } = this;
    const throttleClick = useClickThrottle(handleClick, props.throttle);
    return (
      <el-button {...attrs} onClick={throttleClick}>
        {slots.default?.()}
      </el-button>
    );
  },
});
