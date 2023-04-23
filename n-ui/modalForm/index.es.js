import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, mergeProps, unref, isRef, withCtx, renderSlot, normalizeProps, guardReactiveProps } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    isScroll: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onExceed: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let form = ref();
    let dialogVisible = ref(props.visible);
    watch(() => props.visible, (val) => {
      dialogVisible.value = val;
    });
    watch(() => dialogVisible.value, (val) => {
      emits("update:visible", val);
    });
    return (_ctx, _cache) => {
      const _component_n_form = resolveComponent("n-form");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ "n-choose-icon-dialog-body-height": __props.isScroll })
      }, [
        createVNode(_component_el_dialog, mergeProps({
          modelValue: unref(dialogVisible),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(dialogVisible) ? dialogVisible.value = $event : dialogVisible = $event)
        }, _ctx.$attrs), {
          footer: withCtx(() => [
            renderSlot(_ctx.$slots, "footer", { form: unref(form) })
          ]),
          default: withCtx(() => [
            createVNode(_component_el_row, null, {
              default: withCtx(() => [
                createVNode(_component_el_col, normalizeProps(guardReactiveProps(__props.colLayout)), {
                  default: withCtx(() => [
                    createVNode(_component_n_form, {
                      ref_key: "form",
                      ref: form,
                      options: __props.options,
                      "label-width": "100px",
                      onOnChange: __props.onChange,
                      onBeforeUpload: __props.beforeUpload,
                      onOnPreview: __props.onPreview,
                      onOnRemove: __props.onRemove,
                      onBeforeRemove: __props.beforeRemove,
                      onOnSuccess: __props.onSuccess,
                      onOnExceed: __props.onExceed
                    }, {
                      uploadArea: withCtx(() => [
                        renderSlot(_ctx.$slots, "uploadArea")
                      ]),
                      uploadTip: withCtx(() => [
                        renderSlot(_ctx.$slots, "uploadTip")
                      ]),
                      _: 3
                    }, 8, ["options", "onOnChange", "onBeforeUpload", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnSuccess", "onOnExceed"])
                  ]),
                  _: 3
                }, 16)
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["modelValue"])
      ], 2);
    };
  }
});
var index = {
  install(app) {
    app.component("n-modal-form", _sfc_main);
  }
};
export { index as default };
