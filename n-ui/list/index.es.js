import { defineComponent, resolveComponent, openBlock, createElementBlock, createVNode, withCtx, Fragment, renderList, createBlock, unref, createCommentVNode, createElementVNode, toDisplayString, createTextVNode, normalizeClass, resolveDynamicComponent } from "vue";
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "list-tabs__item" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = {
  key: 0,
  class: "avatar"
};
const _hoisted_4 = { class: "content" };
const _hoisted_5 = {
  key: 0,
  class: "title"
};
const _hoisted_6 = {
  key: 1,
  class: "time"
};
const _hoisted_7 = {
  key: 2,
  class: "time"
};
const _hoisted_8 = { class: "actions" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = {
  key: 0,
  class: "a-icon"
};
const _hoisted_11 = { class: "a-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(__props, { emit: emits }) {
    let clickItem = (item, index2) => {
      emits("clickItem", { item, index: index2 });
    };
    let clickAction = (item, index2) => {
      emits("clickAction", { item, index: index2 });
    };
    return (_ctx, _cache) => {
      const _component_el_avatar = resolveComponent("el-avatar");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_scrollbar = resolveComponent("el-scrollbar");
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_tabs, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item, index2) => {
              return openBlock(), createBlock(_component_el_tab_pane, {
                key: index2,
                label: item.title
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_scrollbar, { "max-height": "300px" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.content, (item1, index1) => {
                        return openBlock(), createElementBlock("div", {
                          class: "container",
                          onClick: ($event) => unref(clickItem)(item1, index1),
                          key: index1
                        }, [
                          item1.avatar ? (openBlock(), createElementBlock("div", _hoisted_3, [
                            createVNode(_component_el_avatar, {
                              size: "small",
                              src: item1.avatar
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("v-if", true),
                          createElementVNode("div", _hoisted_4, [
                            item1.title ? (openBlock(), createElementBlock("div", _hoisted_5, [
                              createElementVNode("div", null, toDisplayString(item1.title), 1),
                              item1.tag ? (openBlock(), createBlock(_component_el_tag, {
                                key: 0,
                                size: "mini",
                                type: item1.tagType
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item1.tag), 1)
                                ]),
                                _: 2
                              }, 1032, ["type"])) : createCommentVNode("v-if", true)
                            ])) : createCommentVNode("v-if", true),
                            item1.desc ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(item1.desc), 1)) : createCommentVNode("v-if", true),
                            item1.time ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(item1.time), 1)) : createCommentVNode("v-if", true)
                          ])
                        ], 8, _hoisted_2);
                      }), 128)),
                      createElementVNode("div", _hoisted_8, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action, i) => {
                          return openBlock(), createElementBlock("div", {
                            class: normalizeClass(["a-item", { "border": i !== __props.actions.length }]),
                            key: i,
                            onClick: ($event) => unref(clickAction)(action, i)
                          }, [
                            action.icon ? (openBlock(), createElementBlock("div", _hoisted_10, [
                              (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(action.icon)}`)))
                            ])) : createCommentVNode("v-if", true),
                            createElementVNode("div", _hoisted_11, toDisplayString(action.text), 1)
                          ], 10, _hoisted_9);
                        }), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["label"]);
            }), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
var list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ec3227b"]]);
var index = {
  install(app) {
    app.component("n-list", list);
  }
};
export { index as default };
