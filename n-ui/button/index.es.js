import { defineComponent, createVNode, resolveComponent, mergeProps } from "vue";
function useClickThrottle(handle, wait = 1e3) {
  console.log("useClickThrottle", wait);
  let timeoutId = null;
  function fn(...args) {
    console.log("wait", wait);
    if (!timeoutId) {
      handle.apply(this, args);
      timeoutId = setTimeout(() => timeoutId = null, wait);
    }
  }
  return wait > 0 ? fn : handle;
}
var NButton = defineComponent({
  name: "NButton",
  props: {
    throttle: {
      type: Number,
      default: 1e3
    }
  },
  emits: ["click"],
  setup(props, {
    slots,
    attrs,
    emit
  }) {
    const handleClick = () => {
      emit("click");
    };
    return {
      slots,
      emit,
      attrs,
      props,
      handleClick
    };
  },
  render() {
    const {
      handleClick,
      attrs,
      slots,
      props
    } = this;
    const throttleClick = useClickThrottle(handleClick, props.throttle);
    return createVNode(resolveComponent("el-button"), mergeProps(attrs, {
      "onClick": throttleClick
    }), {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
      }
    });
  }
});
const useInstall = (main) => {
  main.install = (app) => {
    const { name } = main;
    name && app.component(name, main);
  };
  return main;
};
var index = useInstall(NButton);
export { index as default };
