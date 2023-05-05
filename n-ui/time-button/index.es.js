import { ref, computed, defineComponent, createVNode, resolveComponent, mergeProps } from "vue";
const useItemFn = (props, emit) => {
  const time = ref(0);
  const disabled = ref(false);
  const text = computed(() => {
    return time.value > 0 ? `${time.value}s` : "\u83B7\u53D6\u9A8C\u8BC1\u7801";
  });
  const handleClick = () => {
    emit("click");
    start();
  };
  const reset = () => {
    time.value = 0;
  };
  const start = () => {
    time.value = props.second;
    disabled.value = true;
    timer();
  };
  const timer = () => {
    if (time.value > 0) {
      time.value--;
      setTimeout(timer, 1e3);
    } else {
      disabled.value = false;
    }
  };
  return {
    text,
    time,
    disabled,
    handleClick,
    reset
  };
};
var NTimeButton = defineComponent({
  name: "NTimeButton",
  props: {
    second: {
      type: Number,
      default: 60
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  emits: ["click"],
  setup(props, {
    emit,
    attrs,
    expose
  }) {
    const {
      text,
      time,
      disabled,
      handleClick,
      reset
    } = useItemFn(props, emit);
    expose({
      reset
    });
    return () => {
      return createVNode(resolveComponent("el-button"), mergeProps(attrs, {
        "type": props.type,
        "disabled": disabled.value || time.value > 0,
        "onClick": handleClick
      }), {
        default: () => [text.value]
      });
    };
  }
});
const useInstall = (main) => {
  main.install = (app) => {
    const { name } = main;
    name && app.component(name, main);
  };
  return main;
};
var index = useInstall(NTimeButton);
export { index as default };
