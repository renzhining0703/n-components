import { defineComponent, ref, watch, resolveComponent, openBlock, createBlock, mergeProps, unref } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    percentage: {
      type: Number,
      required: true
    },
    isAnimate: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 500
    }
  },
  setup(__props) {
    const props = __props;
    ref(0);
    let p = ref(0);
    watch(() => props.percentage, (val) => {
      if (props.isAnimate) {
        let t = Math.ceil(props.time / props.percentage);
        let timer = setInterval(() => {
          p.value += 1;
          if (p.value >= props.percentage) {
            p.value = props.percentage;
            clearInterval(timer);
          }
        }, t);
        return;
      }
      p.value = props.percentage;
    }, { immediate: true });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return openBlock(), createBlock(_component_el_progress, mergeProps({ percentage: unref(p) }, _ctx.$attrs), null, 16, ["percentage"]);
    };
  }
});
var index = {
  install(app) {
    app.component("n-progress", _sfc_main);
  }
};
export { index as default };
