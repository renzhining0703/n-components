var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createVNode, unref, isRef, withCtx, Fragment, renderList, createBlock, warn, getCurrentScope, onScopeDispose, computed, onMounted, Transition, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createCommentVNode, renderSlot, toDisplayString, withModifiers, vShow, isVNode, render as render$4p, resolveDynamicComponent, useSlots, createTextVNode, mergeProps, useAttrs, normalizeProps, guardReactiveProps } from "vue";
var allAreas = [
  {
    code: "11",
    name: "\u5317\u4EAC\u5E02",
    children: [
      {
        code: "1101",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "110101",
            name: "\u4E1C\u57CE\u533A"
          },
          {
            code: "110102",
            name: "\u897F\u57CE\u533A"
          },
          {
            code: "110105",
            name: "\u671D\u9633\u533A"
          },
          {
            code: "110106",
            name: "\u4E30\u53F0\u533A"
          },
          {
            code: "110107",
            name: "\u77F3\u666F\u5C71\u533A"
          },
          {
            code: "110108",
            name: "\u6D77\u6DC0\u533A"
          },
          {
            code: "110109",
            name: "\u95E8\u5934\u6C9F\u533A"
          },
          {
            code: "110111",
            name: "\u623F\u5C71\u533A"
          },
          {
            code: "110112",
            name: "\u901A\u5DDE\u533A"
          },
          {
            code: "110113",
            name: "\u987A\u4E49\u533A"
          },
          {
            code: "110114",
            name: "\u660C\u5E73\u533A"
          },
          {
            code: "110115",
            name: "\u5927\u5174\u533A"
          },
          {
            code: "110116",
            name: "\u6000\u67D4\u533A"
          },
          {
            code: "110117",
            name: "\u5E73\u8C37\u533A"
          },
          {
            code: "110118",
            name: "\u5BC6\u4E91\u533A"
          },
          {
            code: "110119",
            name: "\u5EF6\u5E86\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "12",
    name: "\u5929\u6D25\u5E02",
    children: [
      {
        code: "1201",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "120101",
            name: "\u548C\u5E73\u533A"
          },
          {
            code: "120102",
            name: "\u6CB3\u4E1C\u533A"
          },
          {
            code: "120103",
            name: "\u6CB3\u897F\u533A"
          },
          {
            code: "120104",
            name: "\u5357\u5F00\u533A"
          },
          {
            code: "120105",
            name: "\u6CB3\u5317\u533A"
          },
          {
            code: "120106",
            name: "\u7EA2\u6865\u533A"
          },
          {
            code: "120110",
            name: "\u4E1C\u4E3D\u533A"
          },
          {
            code: "120111",
            name: "\u897F\u9752\u533A"
          },
          {
            code: "120112",
            name: "\u6D25\u5357\u533A"
          },
          {
            code: "120113",
            name: "\u5317\u8FB0\u533A"
          },
          {
            code: "120114",
            name: "\u6B66\u6E05\u533A"
          },
          {
            code: "120115",
            name: "\u5B9D\u577B\u533A"
          },
          {
            code: "120116",
            name: "\u6EE8\u6D77\u65B0\u533A"
          },
          {
            code: "120117",
            name: "\u5B81\u6CB3\u533A"
          },
          {
            code: "120118",
            name: "\u9759\u6D77\u533A"
          },
          {
            code: "120119",
            name: "\u84DF\u5DDE\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "13",
    name: "\u6CB3\u5317\u7701",
    children: [
      {
        code: "1301",
        name: "\u77F3\u5BB6\u5E84\u5E02",
        children: [
          {
            code: "130102",
            name: "\u957F\u5B89\u533A"
          },
          {
            code: "130104",
            name: "\u6865\u897F\u533A"
          },
          {
            code: "130105",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "130107",
            name: "\u4E95\u9649\u77FF\u533A"
          },
          {
            code: "130108",
            name: "\u88D5\u534E\u533A"
          },
          {
            code: "130109",
            name: "\u85C1\u57CE\u533A"
          },
          {
            code: "130110",
            name: "\u9E7F\u6CC9\u533A"
          },
          {
            code: "130111",
            name: "\u683E\u57CE\u533A"
          },
          {
            code: "130121",
            name: "\u4E95\u9649\u53BF"
          },
          {
            code: "130123",
            name: "\u6B63\u5B9A\u53BF"
          },
          {
            code: "130125",
            name: "\u884C\u5510\u53BF"
          },
          {
            code: "130126",
            name: "\u7075\u5BFF\u53BF"
          },
          {
            code: "130127",
            name: "\u9AD8\u9091\u53BF"
          },
          {
            code: "130128",
            name: "\u6DF1\u6CFD\u53BF"
          },
          {
            code: "130129",
            name: "\u8D5E\u7687\u53BF"
          },
          {
            code: "130130",
            name: "\u65E0\u6781\u53BF"
          },
          {
            code: "130131",
            name: "\u5E73\u5C71\u53BF"
          },
          {
            code: "130132",
            name: "\u5143\u6C0F\u53BF"
          },
          {
            code: "130133",
            name: "\u8D75\u53BF"
          },
          {
            code: "130171",
            name: "\u77F3\u5BB6\u5E84\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130172",
            name: "\u77F3\u5BB6\u5E84\u5FAA\u73AF\u5316\u5DE5\u56ED\u533A"
          },
          {
            code: "130181",
            name: "\u8F9B\u96C6\u5E02"
          },
          {
            code: "130183",
            name: "\u664B\u5DDE\u5E02"
          },
          {
            code: "130184",
            name: "\u65B0\u4E50\u5E02"
          }
        ]
      },
      {
        code: "1302",
        name: "\u5510\u5C71\u5E02",
        children: [
          {
            code: "130202",
            name: "\u8DEF\u5357\u533A"
          },
          {
            code: "130203",
            name: "\u8DEF\u5317\u533A"
          },
          {
            code: "130204",
            name: "\u53E4\u51B6\u533A"
          },
          {
            code: "130205",
            name: "\u5F00\u5E73\u533A"
          },
          {
            code: "130207",
            name: "\u4E30\u5357\u533A"
          },
          {
            code: "130208",
            name: "\u4E30\u6DA6\u533A"
          },
          {
            code: "130209",
            name: "\u66F9\u5983\u7538\u533A"
          },
          {
            code: "130224",
            name: "\u6EE6\u5357\u53BF"
          },
          {
            code: "130225",
            name: "\u4E50\u4EAD\u53BF"
          },
          {
            code: "130227",
            name: "\u8FC1\u897F\u53BF"
          },
          {
            code: "130229",
            name: "\u7389\u7530\u53BF"
          },
          {
            code: "130271",
            name: "\u6CB3\u5317\u5510\u5C71\u82A6\u53F0\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130272",
            name: "\u5510\u5C71\u5E02\u6C49\u6CBD\u7BA1\u7406\u533A"
          },
          {
            code: "130273",
            name: "\u5510\u5C71\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130274",
            name: "\u6CB3\u5317\u5510\u5C71\u6D77\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130281",
            name: "\u9075\u5316\u5E02"
          },
          {
            code: "130283",
            name: "\u8FC1\u5B89\u5E02"
          },
          {
            code: "130284",
            name: "\u6EE6\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "1303",
        name: "\u79E6\u7687\u5C9B\u5E02",
        children: [
          {
            code: "130302",
            name: "\u6D77\u6E2F\u533A"
          },
          {
            code: "130303",
            name: "\u5C71\u6D77\u5173\u533A"
          },
          {
            code: "130304",
            name: "\u5317\u6234\u6CB3\u533A"
          },
          {
            code: "130306",
            name: "\u629A\u5B81\u533A"
          },
          {
            code: "130321",
            name: "\u9752\u9F99\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130322",
            name: "\u660C\u9ECE\u53BF"
          },
          {
            code: "130324",
            name: "\u5362\u9F99\u53BF"
          },
          {
            code: "130371",
            name: "\u79E6\u7687\u5C9B\u5E02\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "130372",
            name: "\u5317\u6234\u6CB3\u65B0\u533A"
          }
        ]
      },
      {
        code: "1304",
        name: "\u90AF\u90F8\u5E02",
        children: [
          {
            code: "130402",
            name: "\u90AF\u5C71\u533A"
          },
          {
            code: "130403",
            name: "\u4E1B\u53F0\u533A"
          },
          {
            code: "130404",
            name: "\u590D\u5174\u533A"
          },
          {
            code: "130406",
            name: "\u5CF0\u5CF0\u77FF\u533A"
          },
          {
            code: "130407",
            name: "\u80A5\u4E61\u533A"
          },
          {
            code: "130408",
            name: "\u6C38\u5E74\u533A"
          },
          {
            code: "130423",
            name: "\u4E34\u6F33\u53BF"
          },
          {
            code: "130424",
            name: "\u6210\u5B89\u53BF"
          },
          {
            code: "130425",
            name: "\u5927\u540D\u53BF"
          },
          {
            code: "130426",
            name: "\u6D89\u53BF"
          },
          {
            code: "130427",
            name: "\u78C1\u53BF"
          },
          {
            code: "130430",
            name: "\u90B1\u53BF"
          },
          {
            code: "130431",
            name: "\u9E21\u6CFD\u53BF"
          },
          {
            code: "130432",
            name: "\u5E7F\u5E73\u53BF"
          },
          {
            code: "130433",
            name: "\u9986\u9676\u53BF"
          },
          {
            code: "130434",
            name: "\u9B4F\u53BF"
          },
          {
            code: "130435",
            name: "\u66F2\u5468\u53BF"
          },
          {
            code: "130471",
            name: "\u90AF\u90F8\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "130473",
            name: "\u90AF\u90F8\u5180\u5357\u65B0\u533A"
          },
          {
            code: "130481",
            name: "\u6B66\u5B89\u5E02"
          }
        ]
      },
      {
        code: "1305",
        name: "\u90A2\u53F0\u5E02",
        children: [
          {
            code: "130502",
            name: "\u8944\u90FD\u533A"
          },
          {
            code: "130503",
            name: "\u4FE1\u90FD\u533A"
          },
          {
            code: "130505",
            name: "\u4EFB\u6CFD\u533A"
          },
          {
            code: "130506",
            name: "\u5357\u548C\u533A"
          },
          {
            code: "130522",
            name: "\u4E34\u57CE\u53BF"
          },
          {
            code: "130523",
            name: "\u5185\u4E18\u53BF"
          },
          {
            code: "130524",
            name: "\u67CF\u4E61\u53BF"
          },
          {
            code: "130525",
            name: "\u9686\u5C27\u53BF"
          },
          {
            code: "130528",
            name: "\u5B81\u664B\u53BF"
          },
          {
            code: "130529",
            name: "\u5DE8\u9E7F\u53BF"
          },
          {
            code: "130530",
            name: "\u65B0\u6CB3\u53BF"
          },
          {
            code: "130531",
            name: "\u5E7F\u5B97\u53BF"
          },
          {
            code: "130532",
            name: "\u5E73\u4E61\u53BF"
          },
          {
            code: "130533",
            name: "\u5A01\u53BF"
          },
          {
            code: "130534",
            name: "\u6E05\u6CB3\u53BF"
          },
          {
            code: "130535",
            name: "\u4E34\u897F\u53BF"
          },
          {
            code: "130571",
            name: "\u6CB3\u5317\u90A2\u53F0\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130581",
            name: "\u5357\u5BAB\u5E02"
          },
          {
            code: "130582",
            name: "\u6C99\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1306",
        name: "\u4FDD\u5B9A\u5E02",
        children: [
          {
            code: "130602",
            name: "\u7ADE\u79C0\u533A"
          },
          {
            code: "130606",
            name: "\u83B2\u6C60\u533A"
          },
          {
            code: "130607",
            name: "\u6EE1\u57CE\u533A"
          },
          {
            code: "130608",
            name: "\u6E05\u82D1\u533A"
          },
          {
            code: "130609",
            name: "\u5F90\u6C34\u533A"
          },
          {
            code: "130623",
            name: "\u6D9E\u6C34\u53BF"
          },
          {
            code: "130624",
            name: "\u961C\u5E73\u53BF"
          },
          {
            code: "130626",
            name: "\u5B9A\u5174\u53BF"
          },
          {
            code: "130627",
            name: "\u5510\u53BF"
          },
          {
            code: "130628",
            name: "\u9AD8\u9633\u53BF"
          },
          {
            code: "130629",
            name: "\u5BB9\u57CE\u53BF"
          },
          {
            code: "130630",
            name: "\u6D9E\u6E90\u53BF"
          },
          {
            code: "130631",
            name: "\u671B\u90FD\u53BF"
          },
          {
            code: "130632",
            name: "\u5B89\u65B0\u53BF"
          },
          {
            code: "130633",
            name: "\u6613\u53BF"
          },
          {
            code: "130634",
            name: "\u66F2\u9633\u53BF"
          },
          {
            code: "130635",
            name: "\u8821\u53BF"
          },
          {
            code: "130636",
            name: "\u987A\u5E73\u53BF"
          },
          {
            code: "130637",
            name: "\u535A\u91CE\u53BF"
          },
          {
            code: "130638",
            name: "\u96C4\u53BF"
          },
          {
            code: "130671",
            name: "\u4FDD\u5B9A\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130672",
            name: "\u4FDD\u5B9A\u767D\u6C9F\u65B0\u57CE"
          },
          {
            code: "130681",
            name: "\u6DBF\u5DDE\u5E02"
          },
          {
            code: "130682",
            name: "\u5B9A\u5DDE\u5E02"
          },
          {
            code: "130683",
            name: "\u5B89\u56FD\u5E02"
          },
          {
            code: "130684",
            name: "\u9AD8\u7891\u5E97\u5E02"
          }
        ]
      },
      {
        code: "1307",
        name: "\u5F20\u5BB6\u53E3\u5E02",
        children: [
          {
            code: "130702",
            name: "\u6865\u4E1C\u533A"
          },
          {
            code: "130703",
            name: "\u6865\u897F\u533A"
          },
          {
            code: "130705",
            name: "\u5BA3\u5316\u533A"
          },
          {
            code: "130706",
            name: "\u4E0B\u82B1\u56ED\u533A"
          },
          {
            code: "130708",
            name: "\u4E07\u5168\u533A"
          },
          {
            code: "130709",
            name: "\u5D07\u793C\u533A"
          },
          {
            code: "130722",
            name: "\u5F20\u5317\u53BF"
          },
          {
            code: "130723",
            name: "\u5EB7\u4FDD\u53BF"
          },
          {
            code: "130724",
            name: "\u6CBD\u6E90\u53BF"
          },
          {
            code: "130725",
            name: "\u5C1A\u4E49\u53BF"
          },
          {
            code: "130726",
            name: "\u851A\u53BF"
          },
          {
            code: "130727",
            name: "\u9633\u539F\u53BF"
          },
          {
            code: "130728",
            name: "\u6000\u5B89\u53BF"
          },
          {
            code: "130730",
            name: "\u6000\u6765\u53BF"
          },
          {
            code: "130731",
            name: "\u6DBF\u9E7F\u53BF"
          },
          {
            code: "130732",
            name: "\u8D64\u57CE\u53BF"
          },
          {
            code: "130771",
            name: "\u5F20\u5BB6\u53E3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130772",
            name: "\u5F20\u5BB6\u53E3\u5E02\u5BDF\u5317\u7BA1\u7406\u533A"
          },
          {
            code: "130773",
            name: "\u5F20\u5BB6\u53E3\u5E02\u585E\u5317\u7BA1\u7406\u533A"
          }
        ]
      },
      {
        code: "1308",
        name: "\u627F\u5FB7\u5E02",
        children: [
          {
            code: "130802",
            name: "\u53CC\u6865\u533A"
          },
          {
            code: "130803",
            name: "\u53CC\u6EE6\u533A"
          },
          {
            code: "130804",
            name: "\u9E70\u624B\u8425\u5B50\u77FF\u533A"
          },
          {
            code: "130821",
            name: "\u627F\u5FB7\u53BF"
          },
          {
            code: "130822",
            name: "\u5174\u9686\u53BF"
          },
          {
            code: "130824",
            name: "\u6EE6\u5E73\u53BF"
          },
          {
            code: "130825",
            name: "\u9686\u5316\u53BF"
          },
          {
            code: "130826",
            name: "\u4E30\u5B81\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130827",
            name: "\u5BBD\u57CE\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130828",
            name: "\u56F4\u573A\u6EE1\u65CF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130871",
            name: "\u627F\u5FB7\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130881",
            name: "\u5E73\u6CC9\u5E02"
          }
        ]
      },
      {
        code: "1309",
        name: "\u6CA7\u5DDE\u5E02",
        children: [
          {
            code: "130902",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "130903",
            name: "\u8FD0\u6CB3\u533A"
          },
          {
            code: "130921",
            name: "\u6CA7\u53BF"
          },
          {
            code: "130922",
            name: "\u9752\u53BF"
          },
          {
            code: "130923",
            name: "\u4E1C\u5149\u53BF"
          },
          {
            code: "130924",
            name: "\u6D77\u5174\u53BF"
          },
          {
            code: "130925",
            name: "\u76D0\u5C71\u53BF"
          },
          {
            code: "130926",
            name: "\u8083\u5B81\u53BF"
          },
          {
            code: "130927",
            name: "\u5357\u76AE\u53BF"
          },
          {
            code: "130928",
            name: "\u5434\u6865\u53BF"
          },
          {
            code: "130929",
            name: "\u732E\u53BF"
          },
          {
            code: "130930",
            name: "\u5B5F\u6751\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130971",
            name: "\u6CB3\u5317\u6CA7\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130972",
            name: "\u6CA7\u5DDE\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130973",
            name: "\u6CA7\u5DDE\u6E24\u6D77\u65B0\u533A"
          },
          {
            code: "130981",
            name: "\u6CCA\u5934\u5E02"
          },
          {
            code: "130982",
            name: "\u4EFB\u4E18\u5E02"
          },
          {
            code: "130983",
            name: "\u9EC4\u9A85\u5E02"
          },
          {
            code: "130984",
            name: "\u6CB3\u95F4\u5E02"
          }
        ]
      },
      {
        code: "1310",
        name: "\u5ECA\u574A\u5E02",
        children: [
          {
            code: "131002",
            name: "\u5B89\u6B21\u533A"
          },
          {
            code: "131003",
            name: "\u5E7F\u9633\u533A"
          },
          {
            code: "131022",
            name: "\u56FA\u5B89\u53BF"
          },
          {
            code: "131023",
            name: "\u6C38\u6E05\u53BF"
          },
          {
            code: "131024",
            name: "\u9999\u6CB3\u53BF"
          },
          {
            code: "131025",
            name: "\u5927\u57CE\u53BF"
          },
          {
            code: "131026",
            name: "\u6587\u5B89\u53BF"
          },
          {
            code: "131028",
            name: "\u5927\u5382\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "131071",
            name: "\u5ECA\u574A\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "131081",
            name: "\u9738\u5DDE\u5E02"
          },
          {
            code: "131082",
            name: "\u4E09\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1311",
        name: "\u8861\u6C34\u5E02",
        children: [
          {
            code: "131102",
            name: "\u6843\u57CE\u533A"
          },
          {
            code: "131103",
            name: "\u5180\u5DDE\u533A"
          },
          {
            code: "131121",
            name: "\u67A3\u5F3A\u53BF"
          },
          {
            code: "131122",
            name: "\u6B66\u9091\u53BF"
          },
          {
            code: "131123",
            name: "\u6B66\u5F3A\u53BF"
          },
          {
            code: "131124",
            name: "\u9976\u9633\u53BF"
          },
          {
            code: "131125",
            name: "\u5B89\u5E73\u53BF"
          },
          {
            code: "131126",
            name: "\u6545\u57CE\u53BF"
          },
          {
            code: "131127",
            name: "\u666F\u53BF"
          },
          {
            code: "131128",
            name: "\u961C\u57CE\u53BF"
          },
          {
            code: "131171",
            name: "\u6CB3\u5317\u8861\u6C34\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "131172",
            name: "\u8861\u6C34\u6EE8\u6E56\u65B0\u533A"
          },
          {
            code: "131182",
            name: "\u6DF1\u5DDE\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "14",
    name: "\u5C71\u897F\u7701",
    children: [
      {
        code: "1401",
        name: "\u592A\u539F\u5E02",
        children: [
          {
            code: "140105",
            name: "\u5C0F\u5E97\u533A"
          },
          {
            code: "140106",
            name: "\u8FCE\u6CFD\u533A"
          },
          {
            code: "140107",
            name: "\u674F\u82B1\u5CAD\u533A"
          },
          {
            code: "140108",
            name: "\u5C16\u8349\u576A\u533A"
          },
          {
            code: "140109",
            name: "\u4E07\u67CF\u6797\u533A"
          },
          {
            code: "140110",
            name: "\u664B\u6E90\u533A"
          },
          {
            code: "140121",
            name: "\u6E05\u5F90\u53BF"
          },
          {
            code: "140122",
            name: "\u9633\u66F2\u53BF"
          },
          {
            code: "140123",
            name: "\u5A04\u70E6\u53BF"
          },
          {
            code: "140171",
            name: "\u5C71\u897F\u8F6C\u578B\u7EFC\u5408\u6539\u9769\u793A\u8303\u533A"
          },
          {
            code: "140181",
            name: "\u53E4\u4EA4\u5E02"
          }
        ]
      },
      {
        code: "1402",
        name: "\u5927\u540C\u5E02",
        children: [
          {
            code: "140212",
            name: "\u65B0\u8363\u533A"
          },
          {
            code: "140213",
            name: "\u5E73\u57CE\u533A"
          },
          {
            code: "140214",
            name: "\u4E91\u5188\u533A"
          },
          {
            code: "140215",
            name: "\u4E91\u5DDE\u533A"
          },
          {
            code: "140221",
            name: "\u9633\u9AD8\u53BF"
          },
          {
            code: "140222",
            name: "\u5929\u9547\u53BF"
          },
          {
            code: "140223",
            name: "\u5E7F\u7075\u53BF"
          },
          {
            code: "140224",
            name: "\u7075\u4E18\u53BF"
          },
          {
            code: "140225",
            name: "\u6D51\u6E90\u53BF"
          },
          {
            code: "140226",
            name: "\u5DE6\u4E91\u53BF"
          },
          {
            code: "140271",
            name: "\u5C71\u897F\u5927\u540C\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1403",
        name: "\u9633\u6CC9\u5E02",
        children: [
          {
            code: "140302",
            name: "\u57CE\u533A"
          },
          {
            code: "140303",
            name: "\u77FF\u533A"
          },
          {
            code: "140311",
            name: "\u90CA\u533A"
          },
          {
            code: "140321",
            name: "\u5E73\u5B9A\u53BF"
          },
          {
            code: "140322",
            name: "\u76C2\u53BF"
          }
        ]
      },
      {
        code: "1404",
        name: "\u957F\u6CBB\u5E02",
        children: [
          {
            code: "140403",
            name: "\u6F5E\u5DDE\u533A"
          },
          {
            code: "140404",
            name: "\u4E0A\u515A\u533A"
          },
          {
            code: "140405",
            name: "\u5C6F\u7559\u533A"
          },
          {
            code: "140406",
            name: "\u6F5E\u57CE\u533A"
          },
          {
            code: "140423",
            name: "\u8944\u57A3\u53BF"
          },
          {
            code: "140425",
            name: "\u5E73\u987A\u53BF"
          },
          {
            code: "140426",
            name: "\u9ECE\u57CE\u53BF"
          },
          {
            code: "140427",
            name: "\u58F6\u5173\u53BF"
          },
          {
            code: "140428",
            name: "\u957F\u5B50\u53BF"
          },
          {
            code: "140429",
            name: "\u6B66\u4E61\u53BF"
          },
          {
            code: "140430",
            name: "\u6C81\u53BF"
          },
          {
            code: "140431",
            name: "\u6C81\u6E90\u53BF"
          },
          {
            code: "140471",
            name: "\u5C71\u897F\u957F\u6CBB\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          }
        ]
      },
      {
        code: "1405",
        name: "\u664B\u57CE\u5E02",
        children: [
          {
            code: "140502",
            name: "\u57CE\u533A"
          },
          {
            code: "140521",
            name: "\u6C81\u6C34\u53BF"
          },
          {
            code: "140522",
            name: "\u9633\u57CE\u53BF"
          },
          {
            code: "140524",
            name: "\u9675\u5DDD\u53BF"
          },
          {
            code: "140525",
            name: "\u6CFD\u5DDE\u53BF"
          },
          {
            code: "140581",
            name: "\u9AD8\u5E73\u5E02"
          }
        ]
      },
      {
        code: "1406",
        name: "\u6714\u5DDE\u5E02",
        children: [
          {
            code: "140602",
            name: "\u6714\u57CE\u533A"
          },
          {
            code: "140603",
            name: "\u5E73\u9C81\u533A"
          },
          {
            code: "140621",
            name: "\u5C71\u9634\u53BF"
          },
          {
            code: "140622",
            name: "\u5E94\u53BF"
          },
          {
            code: "140623",
            name: "\u53F3\u7389\u53BF"
          },
          {
            code: "140671",
            name: "\u5C71\u897F\u6714\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "140681",
            name: "\u6000\u4EC1\u5E02"
          }
        ]
      },
      {
        code: "1407",
        name: "\u664B\u4E2D\u5E02",
        children: [
          {
            code: "140702",
            name: "\u6986\u6B21\u533A"
          },
          {
            code: "140703",
            name: "\u592A\u8C37\u533A"
          },
          {
            code: "140721",
            name: "\u6986\u793E\u53BF"
          },
          {
            code: "140722",
            name: "\u5DE6\u6743\u53BF"
          },
          {
            code: "140723",
            name: "\u548C\u987A\u53BF"
          },
          {
            code: "140724",
            name: "\u6614\u9633\u53BF"
          },
          {
            code: "140725",
            name: "\u5BFF\u9633\u53BF"
          },
          {
            code: "140727",
            name: "\u7941\u53BF"
          },
          {
            code: "140728",
            name: "\u5E73\u9065\u53BF"
          },
          {
            code: "140729",
            name: "\u7075\u77F3\u53BF"
          },
          {
            code: "140781",
            name: "\u4ECB\u4F11\u5E02"
          }
        ]
      },
      {
        code: "1408",
        name: "\u8FD0\u57CE\u5E02",
        children: [
          {
            code: "140802",
            name: "\u76D0\u6E56\u533A"
          },
          {
            code: "140821",
            name: "\u4E34\u7317\u53BF"
          },
          {
            code: "140822",
            name: "\u4E07\u8363\u53BF"
          },
          {
            code: "140823",
            name: "\u95FB\u559C\u53BF"
          },
          {
            code: "140824",
            name: "\u7A37\u5C71\u53BF"
          },
          {
            code: "140825",
            name: "\u65B0\u7EDB\u53BF"
          },
          {
            code: "140826",
            name: "\u7EDB\u53BF"
          },
          {
            code: "140827",
            name: "\u57A3\u66F2\u53BF"
          },
          {
            code: "140828",
            name: "\u590F\u53BF"
          },
          {
            code: "140829",
            name: "\u5E73\u9646\u53BF"
          },
          {
            code: "140830",
            name: "\u82AE\u57CE\u53BF"
          },
          {
            code: "140881",
            name: "\u6C38\u6D4E\u5E02"
          },
          {
            code: "140882",
            name: "\u6CB3\u6D25\u5E02"
          }
        ]
      },
      {
        code: "1409",
        name: "\u5FFB\u5DDE\u5E02",
        children: [
          {
            code: "140902",
            name: "\u5FFB\u5E9C\u533A"
          },
          {
            code: "140921",
            name: "\u5B9A\u8944\u53BF"
          },
          {
            code: "140922",
            name: "\u4E94\u53F0\u53BF"
          },
          {
            code: "140923",
            name: "\u4EE3\u53BF"
          },
          {
            code: "140924",
            name: "\u7E41\u5CD9\u53BF"
          },
          {
            code: "140925",
            name: "\u5B81\u6B66\u53BF"
          },
          {
            code: "140926",
            name: "\u9759\u4E50\u53BF"
          },
          {
            code: "140927",
            name: "\u795E\u6C60\u53BF"
          },
          {
            code: "140928",
            name: "\u4E94\u5BE8\u53BF"
          },
          {
            code: "140929",
            name: "\u5CA2\u5C9A\u53BF"
          },
          {
            code: "140930",
            name: "\u6CB3\u66F2\u53BF"
          },
          {
            code: "140931",
            name: "\u4FDD\u5FB7\u53BF"
          },
          {
            code: "140932",
            name: "\u504F\u5173\u53BF"
          },
          {
            code: "140971",
            name: "\u4E94\u53F0\u5C71\u98CE\u666F\u540D\u80DC\u533A"
          },
          {
            code: "140981",
            name: "\u539F\u5E73\u5E02"
          }
        ]
      },
      {
        code: "1410",
        name: "\u4E34\u6C7E\u5E02",
        children: [
          {
            code: "141002",
            name: "\u5C27\u90FD\u533A"
          },
          {
            code: "141021",
            name: "\u66F2\u6C83\u53BF"
          },
          {
            code: "141022",
            name: "\u7FFC\u57CE\u53BF"
          },
          {
            code: "141023",
            name: "\u8944\u6C7E\u53BF"
          },
          {
            code: "141024",
            name: "\u6D2A\u6D1E\u53BF"
          },
          {
            code: "141025",
            name: "\u53E4\u53BF"
          },
          {
            code: "141026",
            name: "\u5B89\u6CFD\u53BF"
          },
          {
            code: "141027",
            name: "\u6D6E\u5C71\u53BF"
          },
          {
            code: "141028",
            name: "\u5409\u53BF"
          },
          {
            code: "141029",
            name: "\u4E61\u5B81\u53BF"
          },
          {
            code: "141030",
            name: "\u5927\u5B81\u53BF"
          },
          {
            code: "141031",
            name: "\u96B0\u53BF"
          },
          {
            code: "141032",
            name: "\u6C38\u548C\u53BF"
          },
          {
            code: "141033",
            name: "\u84B2\u53BF"
          },
          {
            code: "141034",
            name: "\u6C7E\u897F\u53BF"
          },
          {
            code: "141081",
            name: "\u4FAF\u9A6C\u5E02"
          },
          {
            code: "141082",
            name: "\u970D\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "1411",
        name: "\u5415\u6881\u5E02",
        children: [
          {
            code: "141102",
            name: "\u79BB\u77F3\u533A"
          },
          {
            code: "141121",
            name: "\u6587\u6C34\u53BF"
          },
          {
            code: "141122",
            name: "\u4EA4\u57CE\u53BF"
          },
          {
            code: "141123",
            name: "\u5174\u53BF"
          },
          {
            code: "141124",
            name: "\u4E34\u53BF"
          },
          {
            code: "141125",
            name: "\u67F3\u6797\u53BF"
          },
          {
            code: "141126",
            name: "\u77F3\u697C\u53BF"
          },
          {
            code: "141127",
            name: "\u5C9A\u53BF"
          },
          {
            code: "141128",
            name: "\u65B9\u5C71\u53BF"
          },
          {
            code: "141129",
            name: "\u4E2D\u9633\u53BF"
          },
          {
            code: "141130",
            name: "\u4EA4\u53E3\u53BF"
          },
          {
            code: "141181",
            name: "\u5B5D\u4E49\u5E02"
          },
          {
            code: "141182",
            name: "\u6C7E\u9633\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "15",
    name: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
    children: [
      {
        code: "1501",
        name: "\u547C\u548C\u6D69\u7279\u5E02",
        children: [
          {
            code: "150102",
            name: "\u65B0\u57CE\u533A"
          },
          {
            code: "150103",
            name: "\u56DE\u6C11\u533A"
          },
          {
            code: "150104",
            name: "\u7389\u6CC9\u533A"
          },
          {
            code: "150105",
            name: "\u8D5B\u7F55\u533A"
          },
          {
            code: "150121",
            name: "\u571F\u9ED8\u7279\u5DE6\u65D7"
          },
          {
            code: "150122",
            name: "\u6258\u514B\u6258\u53BF"
          },
          {
            code: "150123",
            name: "\u548C\u6797\u683C\u5C14\u53BF"
          },
          {
            code: "150124",
            name: "\u6E05\u6C34\u6CB3\u53BF"
          },
          {
            code: "150125",
            name: "\u6B66\u5DDD\u53BF"
          },
          {
            code: "150172",
            name: "\u547C\u548C\u6D69\u7279\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1502",
        name: "\u5305\u5934\u5E02",
        children: [
          {
            code: "150202",
            name: "\u4E1C\u6CB3\u533A"
          },
          {
            code: "150203",
            name: "\u6606\u90FD\u4ED1\u533A"
          },
          {
            code: "150204",
            name: "\u9752\u5C71\u533A"
          },
          {
            code: "150205",
            name: "\u77F3\u62D0\u533A"
          },
          {
            code: "150206",
            name: "\u767D\u4E91\u9102\u535A\u77FF\u533A"
          },
          {
            code: "150207",
            name: "\u4E5D\u539F\u533A"
          },
          {
            code: "150221",
            name: "\u571F\u9ED8\u7279\u53F3\u65D7"
          },
          {
            code: "150222",
            name: "\u56FA\u9633\u53BF"
          },
          {
            code: "150223",
            name: "\u8FBE\u5C14\u7F55\u8302\u660E\u5B89\u8054\u5408\u65D7"
          },
          {
            code: "150271",
            name: "\u5305\u5934\u7A00\u571F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1503",
        name: "\u4E4C\u6D77\u5E02",
        children: [
          {
            code: "150302",
            name: "\u6D77\u52C3\u6E7E\u533A"
          },
          {
            code: "150303",
            name: "\u6D77\u5357\u533A"
          },
          {
            code: "150304",
            name: "\u4E4C\u8FBE\u533A"
          }
        ]
      },
      {
        code: "1504",
        name: "\u8D64\u5CF0\u5E02",
        children: [
          {
            code: "150402",
            name: "\u7EA2\u5C71\u533A"
          },
          {
            code: "150403",
            name: "\u5143\u5B9D\u5C71\u533A"
          },
          {
            code: "150404",
            name: "\u677E\u5C71\u533A"
          },
          {
            code: "150421",
            name: "\u963F\u9C81\u79D1\u5C14\u6C81\u65D7"
          },
          {
            code: "150422",
            name: "\u5DF4\u6797\u5DE6\u65D7"
          },
          {
            code: "150423",
            name: "\u5DF4\u6797\u53F3\u65D7"
          },
          {
            code: "150424",
            name: "\u6797\u897F\u53BF"
          },
          {
            code: "150425",
            name: "\u514B\u4EC0\u514B\u817E\u65D7"
          },
          {
            code: "150426",
            name: "\u7FC1\u725B\u7279\u65D7"
          },
          {
            code: "150428",
            name: "\u5580\u5587\u6C81\u65D7"
          },
          {
            code: "150429",
            name: "\u5B81\u57CE\u53BF"
          },
          {
            code: "150430",
            name: "\u6556\u6C49\u65D7"
          }
        ]
      },
      {
        code: "1505",
        name: "\u901A\u8FBD\u5E02",
        children: [
          {
            code: "150502",
            name: "\u79D1\u5C14\u6C81\u533A"
          },
          {
            code: "150521",
            name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u4E2D\u65D7"
          },
          {
            code: "150522",
            name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u540E\u65D7"
          },
          {
            code: "150523",
            name: "\u5F00\u9C81\u53BF"
          },
          {
            code: "150524",
            name: "\u5E93\u4F26\u65D7"
          },
          {
            code: "150525",
            name: "\u5948\u66FC\u65D7"
          },
          {
            code: "150526",
            name: "\u624E\u9C81\u7279\u65D7"
          },
          {
            code: "150571",
            name: "\u901A\u8FBD\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "150581",
            name: "\u970D\u6797\u90ED\u52D2\u5E02"
          }
        ]
      },
      {
        code: "1506",
        name: "\u9102\u5C14\u591A\u65AF\u5E02",
        children: [
          {
            code: "150602",
            name: "\u4E1C\u80DC\u533A"
          },
          {
            code: "150603",
            name: "\u5EB7\u5DF4\u4EC0\u533A"
          },
          {
            code: "150621",
            name: "\u8FBE\u62C9\u7279\u65D7"
          },
          {
            code: "150622",
            name: "\u51C6\u683C\u5C14\u65D7"
          },
          {
            code: "150623",
            name: "\u9102\u6258\u514B\u524D\u65D7"
          },
          {
            code: "150624",
            name: "\u9102\u6258\u514B\u65D7"
          },
          {
            code: "150625",
            name: "\u676D\u9526\u65D7"
          },
          {
            code: "150626",
            name: "\u4E4C\u5BA1\u65D7"
          },
          {
            code: "150627",
            name: "\u4F0A\u91D1\u970D\u6D1B\u65D7"
          }
        ]
      },
      {
        code: "1507",
        name: "\u547C\u4F26\u8D1D\u5C14\u5E02",
        children: [
          {
            code: "150702",
            name: "\u6D77\u62C9\u5C14\u533A"
          },
          {
            code: "150703",
            name: "\u624E\u8D49\u8BFA\u5C14\u533A"
          },
          {
            code: "150721",
            name: "\u963F\u8363\u65D7"
          },
          {
            code: "150722",
            name: "\u83AB\u529B\u8FBE\u74E6\u8FBE\u65A1\u5C14\u65CF\u81EA\u6CBB\u65D7"
          },
          {
            code: "150723",
            name: "\u9102\u4F26\u6625\u81EA\u6CBB\u65D7"
          },
          {
            code: "150724",
            name: "\u9102\u6E29\u514B\u65CF\u81EA\u6CBB\u65D7"
          },
          {
            code: "150725",
            name: "\u9648\u5DF4\u5C14\u864E\u65D7"
          },
          {
            code: "150726",
            name: "\u65B0\u5DF4\u5C14\u864E\u5DE6\u65D7"
          },
          {
            code: "150727",
            name: "\u65B0\u5DF4\u5C14\u864E\u53F3\u65D7"
          },
          {
            code: "150781",
            name: "\u6EE1\u6D32\u91CC\u5E02"
          },
          {
            code: "150782",
            name: "\u7259\u514B\u77F3\u5E02"
          },
          {
            code: "150783",
            name: "\u624E\u5170\u5C6F\u5E02"
          },
          {
            code: "150784",
            name: "\u989D\u5C14\u53E4\u7EB3\u5E02"
          },
          {
            code: "150785",
            name: "\u6839\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1508",
        name: "\u5DF4\u5F66\u6DD6\u5C14\u5E02",
        children: [
          {
            code: "150802",
            name: "\u4E34\u6CB3\u533A"
          },
          {
            code: "150821",
            name: "\u4E94\u539F\u53BF"
          },
          {
            code: "150822",
            name: "\u78F4\u53E3\u53BF"
          },
          {
            code: "150823",
            name: "\u4E4C\u62C9\u7279\u524D\u65D7"
          },
          {
            code: "150824",
            name: "\u4E4C\u62C9\u7279\u4E2D\u65D7"
          },
          {
            code: "150825",
            name: "\u4E4C\u62C9\u7279\u540E\u65D7"
          },
          {
            code: "150826",
            name: "\u676D\u9526\u540E\u65D7"
          }
        ]
      },
      {
        code: "1509",
        name: "\u4E4C\u5170\u5BDF\u5E03\u5E02",
        children: [
          {
            code: "150902",
            name: "\u96C6\u5B81\u533A"
          },
          {
            code: "150921",
            name: "\u5353\u8D44\u53BF"
          },
          {
            code: "150922",
            name: "\u5316\u5FB7\u53BF"
          },
          {
            code: "150923",
            name: "\u5546\u90FD\u53BF"
          },
          {
            code: "150924",
            name: "\u5174\u548C\u53BF"
          },
          {
            code: "150925",
            name: "\u51C9\u57CE\u53BF"
          },
          {
            code: "150926",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u524D\u65D7"
          },
          {
            code: "150927",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u4E2D\u65D7"
          },
          {
            code: "150928",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u540E\u65D7"
          },
          {
            code: "150929",
            name: "\u56DB\u5B50\u738B\u65D7"
          },
          {
            code: "150981",
            name: "\u4E30\u9547\u5E02"
          }
        ]
      },
      {
        code: "1522",
        name: "\u5174\u5B89\u76DF",
        children: [
          {
            code: "152201",
            name: "\u4E4C\u5170\u6D69\u7279\u5E02"
          },
          {
            code: "152202",
            name: "\u963F\u5C14\u5C71\u5E02"
          },
          {
            code: "152221",
            name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u524D\u65D7"
          },
          {
            code: "152222",
            name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u4E2D\u65D7"
          },
          {
            code: "152223",
            name: "\u624E\u8D49\u7279\u65D7"
          },
          {
            code: "152224",
            name: "\u7A81\u6CC9\u53BF"
          }
        ]
      },
      {
        code: "1525",
        name: "\u9521\u6797\u90ED\u52D2\u76DF",
        children: [
          {
            code: "152501",
            name: "\u4E8C\u8FDE\u6D69\u7279\u5E02"
          },
          {
            code: "152502",
            name: "\u9521\u6797\u6D69\u7279\u5E02"
          },
          {
            code: "152522",
            name: "\u963F\u5DF4\u560E\u65D7"
          },
          {
            code: "152523",
            name: "\u82CF\u5C3C\u7279\u5DE6\u65D7"
          },
          {
            code: "152524",
            name: "\u82CF\u5C3C\u7279\u53F3\u65D7"
          },
          {
            code: "152525",
            name: "\u4E1C\u4E4C\u73E0\u7A46\u6C81\u65D7"
          },
          {
            code: "152526",
            name: "\u897F\u4E4C\u73E0\u7A46\u6C81\u65D7"
          },
          {
            code: "152527",
            name: "\u592A\u4EC6\u5BFA\u65D7"
          },
          {
            code: "152528",
            name: "\u9576\u9EC4\u65D7"
          },
          {
            code: "152529",
            name: "\u6B63\u9576\u767D\u65D7"
          },
          {
            code: "152530",
            name: "\u6B63\u84DD\u65D7"
          },
          {
            code: "152531",
            name: "\u591A\u4F26\u53BF"
          },
          {
            code: "152571",
            name: "\u4E4C\u62C9\u76D6\u7BA1\u59D4\u4F1A"
          }
        ]
      },
      {
        code: "1529",
        name: "\u963F\u62C9\u5584\u76DF",
        children: [
          {
            code: "152921",
            name: "\u963F\u62C9\u5584\u5DE6\u65D7"
          },
          {
            code: "152922",
            name: "\u963F\u62C9\u5584\u53F3\u65D7"
          },
          {
            code: "152923",
            name: "\u989D\u6D4E\u7EB3\u65D7"
          },
          {
            code: "152971",
            name: "\u5185\u8499\u53E4\u963F\u62C9\u5584\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "21",
    name: "\u8FBD\u5B81\u7701",
    children: [
      {
        code: "2101",
        name: "\u6C88\u9633\u5E02",
        children: [
          {
            code: "210102",
            name: "\u548C\u5E73\u533A"
          },
          {
            code: "210103",
            name: "\u6C88\u6CB3\u533A"
          },
          {
            code: "210104",
            name: "\u5927\u4E1C\u533A"
          },
          {
            code: "210105",
            name: "\u7687\u59D1\u533A"
          },
          {
            code: "210106",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "210111",
            name: "\u82CF\u5BB6\u5C6F\u533A"
          },
          {
            code: "210112",
            name: "\u6D51\u5357\u533A"
          },
          {
            code: "210113",
            name: "\u6C88\u5317\u65B0\u533A"
          },
          {
            code: "210114",
            name: "\u4E8E\u6D2A\u533A"
          },
          {
            code: "210115",
            name: "\u8FBD\u4E2D\u533A"
          },
          {
            code: "210123",
            name: "\u5EB7\u5E73\u53BF"
          },
          {
            code: "210124",
            name: "\u6CD5\u5E93\u53BF"
          },
          {
            code: "210181",
            name: "\u65B0\u6C11\u5E02"
          }
        ]
      },
      {
        code: "2102",
        name: "\u5927\u8FDE\u5E02",
        children: [
          {
            code: "210202",
            name: "\u4E2D\u5C71\u533A"
          },
          {
            code: "210203",
            name: "\u897F\u5C97\u533A"
          },
          {
            code: "210204",
            name: "\u6C99\u6CB3\u53E3\u533A"
          },
          {
            code: "210211",
            name: "\u7518\u4E95\u5B50\u533A"
          },
          {
            code: "210212",
            name: "\u65C5\u987A\u53E3\u533A"
          },
          {
            code: "210213",
            name: "\u91D1\u5DDE\u533A"
          },
          {
            code: "210214",
            name: "\u666E\u5170\u5E97\u533A"
          },
          {
            code: "210224",
            name: "\u957F\u6D77\u53BF"
          },
          {
            code: "210281",
            name: "\u74E6\u623F\u5E97\u5E02"
          },
          {
            code: "210283",
            name: "\u5E84\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "2103",
        name: "\u978D\u5C71\u5E02",
        children: [
          {
            code: "210302",
            name: "\u94C1\u4E1C\u533A"
          },
          {
            code: "210303",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "210304",
            name: "\u7ACB\u5C71\u533A"
          },
          {
            code: "210311",
            name: "\u5343\u5C71\u533A"
          },
          {
            code: "210321",
            name: "\u53F0\u5B89\u53BF"
          },
          {
            code: "210323",
            name: "\u5CAB\u5CA9\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210381",
            name: "\u6D77\u57CE\u5E02"
          }
        ]
      },
      {
        code: "2104",
        name: "\u629A\u987A\u5E02",
        children: [
          {
            code: "210402",
            name: "\u65B0\u629A\u533A"
          },
          {
            code: "210403",
            name: "\u4E1C\u6D32\u533A"
          },
          {
            code: "210404",
            name: "\u671B\u82B1\u533A"
          },
          {
            code: "210411",
            name: "\u987A\u57CE\u533A"
          },
          {
            code: "210421",
            name: "\u629A\u987A\u53BF"
          },
          {
            code: "210422",
            name: "\u65B0\u5BBE\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210423",
            name: "\u6E05\u539F\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "2105",
        name: "\u672C\u6EAA\u5E02",
        children: [
          {
            code: "210502",
            name: "\u5E73\u5C71\u533A"
          },
          {
            code: "210503",
            name: "\u6EAA\u6E56\u533A"
          },
          {
            code: "210504",
            name: "\u660E\u5C71\u533A"
          },
          {
            code: "210505",
            name: "\u5357\u82AC\u533A"
          },
          {
            code: "210521",
            name: "\u672C\u6EAA\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210522",
            name: "\u6853\u4EC1\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "2106",
        name: "\u4E39\u4E1C\u5E02",
        children: [
          {
            code: "210602",
            name: "\u5143\u5B9D\u533A"
          },
          {
            code: "210603",
            name: "\u632F\u5174\u533A"
          },
          {
            code: "210604",
            name: "\u632F\u5B89\u533A"
          },
          {
            code: "210624",
            name: "\u5BBD\u7538\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210681",
            name: "\u4E1C\u6E2F\u5E02"
          },
          {
            code: "210682",
            name: "\u51E4\u57CE\u5E02"
          }
        ]
      },
      {
        code: "2107",
        name: "\u9526\u5DDE\u5E02",
        children: [
          {
            code: "210702",
            name: "\u53E4\u5854\u533A"
          },
          {
            code: "210703",
            name: "\u51CC\u6CB3\u533A"
          },
          {
            code: "210711",
            name: "\u592A\u548C\u533A"
          },
          {
            code: "210726",
            name: "\u9ED1\u5C71\u53BF"
          },
          {
            code: "210727",
            name: "\u4E49\u53BF"
          },
          {
            code: "210781",
            name: "\u51CC\u6D77\u5E02"
          },
          {
            code: "210782",
            name: "\u5317\u9547\u5E02"
          }
        ]
      },
      {
        code: "2108",
        name: "\u8425\u53E3\u5E02",
        children: [
          {
            code: "210802",
            name: "\u7AD9\u524D\u533A"
          },
          {
            code: "210803",
            name: "\u897F\u5E02\u533A"
          },
          {
            code: "210804",
            name: "\u9C85\u9C7C\u5708\u533A"
          },
          {
            code: "210811",
            name: "\u8001\u8FB9\u533A"
          },
          {
            code: "210881",
            name: "\u76D6\u5DDE\u5E02"
          },
          {
            code: "210882",
            name: "\u5927\u77F3\u6865\u5E02"
          }
        ]
      },
      {
        code: "2109",
        name: "\u961C\u65B0\u5E02",
        children: [
          {
            code: "210902",
            name: "\u6D77\u5DDE\u533A"
          },
          {
            code: "210903",
            name: "\u65B0\u90B1\u533A"
          },
          {
            code: "210904",
            name: "\u592A\u5E73\u533A"
          },
          {
            code: "210905",
            name: "\u6E05\u6CB3\u95E8\u533A"
          },
          {
            code: "210911",
            name: "\u7EC6\u6CB3\u533A"
          },
          {
            code: "210921",
            name: "\u961C\u65B0\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210922",
            name: "\u5F70\u6B66\u53BF"
          }
        ]
      },
      {
        code: "2110",
        name: "\u8FBD\u9633\u5E02",
        children: [
          {
            code: "211002",
            name: "\u767D\u5854\u533A"
          },
          {
            code: "211003",
            name: "\u6587\u5723\u533A"
          },
          {
            code: "211004",
            name: "\u5B8F\u4F1F\u533A"
          },
          {
            code: "211005",
            name: "\u5F13\u957F\u5CAD\u533A"
          },
          {
            code: "211011",
            name: "\u592A\u5B50\u6CB3\u533A"
          },
          {
            code: "211021",
            name: "\u8FBD\u9633\u53BF"
          },
          {
            code: "211081",
            name: "\u706F\u5854\u5E02"
          }
        ]
      },
      {
        code: "2111",
        name: "\u76D8\u9526\u5E02",
        children: [
          {
            code: "211102",
            name: "\u53CC\u53F0\u5B50\u533A"
          },
          {
            code: "211103",
            name: "\u5174\u9686\u53F0\u533A"
          },
          {
            code: "211104",
            name: "\u5927\u6D3C\u533A"
          },
          {
            code: "211122",
            name: "\u76D8\u5C71\u53BF"
          }
        ]
      },
      {
        code: "2112",
        name: "\u94C1\u5CAD\u5E02",
        children: [
          {
            code: "211202",
            name: "\u94F6\u5DDE\u533A"
          },
          {
            code: "211204",
            name: "\u6E05\u6CB3\u533A"
          },
          {
            code: "211221",
            name: "\u94C1\u5CAD\u53BF"
          },
          {
            code: "211223",
            name: "\u897F\u4E30\u53BF"
          },
          {
            code: "211224",
            name: "\u660C\u56FE\u53BF"
          },
          {
            code: "211281",
            name: "\u8C03\u5175\u5C71\u5E02"
          },
          {
            code: "211282",
            name: "\u5F00\u539F\u5E02"
          }
        ]
      },
      {
        code: "2113",
        name: "\u671D\u9633\u5E02",
        children: [
          {
            code: "211302",
            name: "\u53CC\u5854\u533A"
          },
          {
            code: "211303",
            name: "\u9F99\u57CE\u533A"
          },
          {
            code: "211321",
            name: "\u671D\u9633\u53BF"
          },
          {
            code: "211322",
            name: "\u5EFA\u5E73\u53BF"
          },
          {
            code: "211324",
            name: "\u5580\u5587\u6C81\u5DE6\u7FFC\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "211381",
            name: "\u5317\u7968\u5E02"
          },
          {
            code: "211382",
            name: "\u51CC\u6E90\u5E02"
          }
        ]
      },
      {
        code: "2114",
        name: "\u846B\u82A6\u5C9B\u5E02",
        children: [
          {
            code: "211402",
            name: "\u8FDE\u5C71\u533A"
          },
          {
            code: "211403",
            name: "\u9F99\u6E2F\u533A"
          },
          {
            code: "211404",
            name: "\u5357\u7968\u533A"
          },
          {
            code: "211421",
            name: "\u7EE5\u4E2D\u53BF"
          },
          {
            code: "211422",
            name: "\u5EFA\u660C\u53BF"
          },
          {
            code: "211481",
            name: "\u5174\u57CE\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "22",
    name: "\u5409\u6797\u7701",
    children: [
      {
        code: "2201",
        name: "\u957F\u6625\u5E02",
        children: [
          {
            code: "220102",
            name: "\u5357\u5173\u533A"
          },
          {
            code: "220103",
            name: "\u5BBD\u57CE\u533A"
          },
          {
            code: "220104",
            name: "\u671D\u9633\u533A"
          },
          {
            code: "220105",
            name: "\u4E8C\u9053\u533A"
          },
          {
            code: "220106",
            name: "\u7EFF\u56ED\u533A"
          },
          {
            code: "220112",
            name: "\u53CC\u9633\u533A"
          },
          {
            code: "220113",
            name: "\u4E5D\u53F0\u533A"
          },
          {
            code: "220122",
            name: "\u519C\u5B89\u53BF"
          },
          {
            code: "220171",
            name: "\u957F\u6625\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "220172",
            name: "\u957F\u6625\u51C0\u6708\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220173",
            name: "\u957F\u6625\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220174",
            name: "\u957F\u6625\u6C7D\u8F66\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "220182",
            name: "\u6986\u6811\u5E02"
          },
          {
            code: "220183",
            name: "\u5FB7\u60E0\u5E02"
          },
          {
            code: "220184",
            name: "\u516C\u4E3B\u5CAD\u5E02"
          }
        ]
      },
      {
        code: "2202",
        name: "\u5409\u6797\u5E02",
        children: [
          {
            code: "220202",
            name: "\u660C\u9091\u533A"
          },
          {
            code: "220203",
            name: "\u9F99\u6F6D\u533A"
          },
          {
            code: "220204",
            name: "\u8239\u8425\u533A"
          },
          {
            code: "220211",
            name: "\u4E30\u6EE1\u533A"
          },
          {
            code: "220221",
            name: "\u6C38\u5409\u53BF"
          },
          {
            code: "220271",
            name: "\u5409\u6797\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220272",
            name: "\u5409\u6797\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220273",
            name: "\u5409\u6797\u4E2D\u56FD\u65B0\u52A0\u5761\u98DF\u54C1\u533A"
          },
          {
            code: "220281",
            name: "\u86DF\u6CB3\u5E02"
          },
          {
            code: "220282",
            name: "\u6866\u7538\u5E02"
          },
          {
            code: "220283",
            name: "\u8212\u5170\u5E02"
          },
          {
            code: "220284",
            name: "\u78D0\u77F3\u5E02"
          }
        ]
      },
      {
        code: "2203",
        name: "\u56DB\u5E73\u5E02",
        children: [
          {
            code: "220302",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "220303",
            name: "\u94C1\u4E1C\u533A"
          },
          {
            code: "220322",
            name: "\u68A8\u6811\u53BF"
          },
          {
            code: "220323",
            name: "\u4F0A\u901A\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220382",
            name: "\u53CC\u8FBD\u5E02"
          }
        ]
      },
      {
        code: "2204",
        name: "\u8FBD\u6E90\u5E02",
        children: [
          {
            code: "220402",
            name: "\u9F99\u5C71\u533A"
          },
          {
            code: "220403",
            name: "\u897F\u5B89\u533A"
          },
          {
            code: "220421",
            name: "\u4E1C\u4E30\u53BF"
          },
          {
            code: "220422",
            name: "\u4E1C\u8FBD\u53BF"
          }
        ]
      },
      {
        code: "2205",
        name: "\u901A\u5316\u5E02",
        children: [
          {
            code: "220502",
            name: "\u4E1C\u660C\u533A"
          },
          {
            code: "220503",
            name: "\u4E8C\u9053\u6C5F\u533A"
          },
          {
            code: "220521",
            name: "\u901A\u5316\u53BF"
          },
          {
            code: "220523",
            name: "\u8F89\u5357\u53BF"
          },
          {
            code: "220524",
            name: "\u67F3\u6CB3\u53BF"
          },
          {
            code: "220581",
            name: "\u6885\u6CB3\u53E3\u5E02"
          },
          {
            code: "220582",
            name: "\u96C6\u5B89\u5E02"
          }
        ]
      },
      {
        code: "2206",
        name: "\u767D\u5C71\u5E02",
        children: [
          {
            code: "220602",
            name: "\u6D51\u6C5F\u533A"
          },
          {
            code: "220605",
            name: "\u6C5F\u6E90\u533A"
          },
          {
            code: "220621",
            name: "\u629A\u677E\u53BF"
          },
          {
            code: "220622",
            name: "\u9756\u5B87\u53BF"
          },
          {
            code: "220623",
            name: "\u957F\u767D\u671D\u9C9C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220681",
            name: "\u4E34\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "2207",
        name: "\u677E\u539F\u5E02",
        children: [
          {
            code: "220702",
            name: "\u5B81\u6C5F\u533A"
          },
          {
            code: "220721",
            name: "\u524D\u90ED\u5C14\u7F57\u65AF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220722",
            name: "\u957F\u5CAD\u53BF"
          },
          {
            code: "220723",
            name: "\u4E7E\u5B89\u53BF"
          },
          {
            code: "220771",
            name: "\u5409\u6797\u677E\u539F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220781",
            name: "\u6276\u4F59\u5E02"
          }
        ]
      },
      {
        code: "2208",
        name: "\u767D\u57CE\u5E02",
        children: [
          {
            code: "220802",
            name: "\u6D2E\u5317\u533A"
          },
          {
            code: "220821",
            name: "\u9547\u8D49\u53BF"
          },
          {
            code: "220822",
            name: "\u901A\u6986\u53BF"
          },
          {
            code: "220871",
            name: "\u5409\u6797\u767D\u57CE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220881",
            name: "\u6D2E\u5357\u5E02"
          },
          {
            code: "220882",
            name: "\u5927\u5B89\u5E02"
          }
        ]
      },
      {
        code: "2224",
        name: "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "222401",
            name: "\u5EF6\u5409\u5E02"
          },
          {
            code: "222402",
            name: "\u56FE\u4EEC\u5E02"
          },
          {
            code: "222403",
            name: "\u6566\u5316\u5E02"
          },
          {
            code: "222404",
            name: "\u73F2\u6625\u5E02"
          },
          {
            code: "222405",
            name: "\u9F99\u4E95\u5E02"
          },
          {
            code: "222406",
            name: "\u548C\u9F99\u5E02"
          },
          {
            code: "222424",
            name: "\u6C6A\u6E05\u53BF"
          },
          {
            code: "222426",
            name: "\u5B89\u56FE\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "23",
    name: "\u9ED1\u9F99\u6C5F\u7701",
    children: [
      {
        code: "2301",
        name: "\u54C8\u5C14\u6EE8\u5E02",
        children: [
          {
            code: "230102",
            name: "\u9053\u91CC\u533A"
          },
          {
            code: "230103",
            name: "\u5357\u5C97\u533A"
          },
          {
            code: "230104",
            name: "\u9053\u5916\u533A"
          },
          {
            code: "230108",
            name: "\u5E73\u623F\u533A"
          },
          {
            code: "230109",
            name: "\u677E\u5317\u533A"
          },
          {
            code: "230110",
            name: "\u9999\u574A\u533A"
          },
          {
            code: "230111",
            name: "\u547C\u5170\u533A"
          },
          {
            code: "230112",
            name: "\u963F\u57CE\u533A"
          },
          {
            code: "230113",
            name: "\u53CC\u57CE\u533A"
          },
          {
            code: "230123",
            name: "\u4F9D\u5170\u53BF"
          },
          {
            code: "230124",
            name: "\u65B9\u6B63\u53BF"
          },
          {
            code: "230125",
            name: "\u5BBE\u53BF"
          },
          {
            code: "230126",
            name: "\u5DF4\u5F66\u53BF"
          },
          {
            code: "230127",
            name: "\u6728\u5170\u53BF"
          },
          {
            code: "230128",
            name: "\u901A\u6CB3\u53BF"
          },
          {
            code: "230129",
            name: "\u5EF6\u5BFF\u53BF"
          },
          {
            code: "230183",
            name: "\u5C1A\u5FD7\u5E02"
          },
          {
            code: "230184",
            name: "\u4E94\u5E38\u5E02"
          }
        ]
      },
      {
        code: "2302",
        name: "\u9F50\u9F50\u54C8\u5C14\u5E02",
        children: [
          {
            code: "230202",
            name: "\u9F99\u6C99\u533A"
          },
          {
            code: "230203",
            name: "\u5EFA\u534E\u533A"
          },
          {
            code: "230204",
            name: "\u94C1\u950B\u533A"
          },
          {
            code: "230205",
            name: "\u6602\u6602\u6EAA\u533A"
          },
          {
            code: "230206",
            name: "\u5BCC\u62C9\u5C14\u57FA\u533A"
          },
          {
            code: "230207",
            name: "\u78BE\u5B50\u5C71\u533A"
          },
          {
            code: "230208",
            name: "\u6885\u91CC\u65AF\u8FBE\u65A1\u5C14\u65CF\u533A"
          },
          {
            code: "230221",
            name: "\u9F99\u6C5F\u53BF"
          },
          {
            code: "230223",
            name: "\u4F9D\u5B89\u53BF"
          },
          {
            code: "230224",
            name: "\u6CF0\u6765\u53BF"
          },
          {
            code: "230225",
            name: "\u7518\u5357\u53BF"
          },
          {
            code: "230227",
            name: "\u5BCC\u88D5\u53BF"
          },
          {
            code: "230229",
            name: "\u514B\u5C71\u53BF"
          },
          {
            code: "230230",
            name: "\u514B\u4E1C\u53BF"
          },
          {
            code: "230231",
            name: "\u62DC\u6CC9\u53BF"
          },
          {
            code: "230281",
            name: "\u8BB7\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "2303",
        name: "\u9E21\u897F\u5E02",
        children: [
          {
            code: "230302",
            name: "\u9E21\u51A0\u533A"
          },
          {
            code: "230303",
            name: "\u6052\u5C71\u533A"
          },
          {
            code: "230304",
            name: "\u6EF4\u9053\u533A"
          },
          {
            code: "230305",
            name: "\u68A8\u6811\u533A"
          },
          {
            code: "230306",
            name: "\u57CE\u5B50\u6CB3\u533A"
          },
          {
            code: "230307",
            name: "\u9EBB\u5C71\u533A"
          },
          {
            code: "230321",
            name: "\u9E21\u4E1C\u53BF"
          },
          {
            code: "230381",
            name: "\u864E\u6797\u5E02"
          },
          {
            code: "230382",
            name: "\u5BC6\u5C71\u5E02"
          }
        ]
      },
      {
        code: "2304",
        name: "\u9E64\u5C97\u5E02",
        children: [
          {
            code: "230402",
            name: "\u5411\u9633\u533A"
          },
          {
            code: "230403",
            name: "\u5DE5\u519C\u533A"
          },
          {
            code: "230404",
            name: "\u5357\u5C71\u533A"
          },
          {
            code: "230405",
            name: "\u5174\u5B89\u533A"
          },
          {
            code: "230406",
            name: "\u4E1C\u5C71\u533A"
          },
          {
            code: "230407",
            name: "\u5174\u5C71\u533A"
          },
          {
            code: "230421",
            name: "\u841D\u5317\u53BF"
          },
          {
            code: "230422",
            name: "\u7EE5\u6EE8\u53BF"
          }
        ]
      },
      {
        code: "2305",
        name: "\u53CC\u9E2D\u5C71\u5E02",
        children: [
          {
            code: "230502",
            name: "\u5C16\u5C71\u533A"
          },
          {
            code: "230503",
            name: "\u5CAD\u4E1C\u533A"
          },
          {
            code: "230505",
            name: "\u56DB\u65B9\u53F0\u533A"
          },
          {
            code: "230506",
            name: "\u5B9D\u5C71\u533A"
          },
          {
            code: "230521",
            name: "\u96C6\u8D24\u53BF"
          },
          {
            code: "230522",
            name: "\u53CB\u8C0A\u53BF"
          },
          {
            code: "230523",
            name: "\u5B9D\u6E05\u53BF"
          },
          {
            code: "230524",
            name: "\u9976\u6CB3\u53BF"
          }
        ]
      },
      {
        code: "2306",
        name: "\u5927\u5E86\u5E02",
        children: [
          {
            code: "230602",
            name: "\u8428\u5C14\u56FE\u533A"
          },
          {
            code: "230603",
            name: "\u9F99\u51E4\u533A"
          },
          {
            code: "230604",
            name: "\u8BA9\u80E1\u8DEF\u533A"
          },
          {
            code: "230605",
            name: "\u7EA2\u5C97\u533A"
          },
          {
            code: "230606",
            name: "\u5927\u540C\u533A"
          },
          {
            code: "230621",
            name: "\u8087\u5DDE\u53BF"
          },
          {
            code: "230622",
            name: "\u8087\u6E90\u53BF"
          },
          {
            code: "230623",
            name: "\u6797\u7538\u53BF"
          },
          {
            code: "230624",
            name: "\u675C\u5C14\u4F2F\u7279\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "230671",
            name: "\u5927\u5E86\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "2307",
        name: "\u4F0A\u6625\u5E02",
        children: [
          {
            code: "230717",
            name: "\u4F0A\u7F8E\u533A"
          },
          {
            code: "230718",
            name: "\u4E4C\u7FE0\u533A"
          },
          {
            code: "230719",
            name: "\u53CB\u597D\u533A"
          },
          {
            code: "230722",
            name: "\u5609\u836B\u53BF"
          },
          {
            code: "230723",
            name: "\u6C64\u65FA\u53BF"
          },
          {
            code: "230724",
            name: "\u4E30\u6797\u53BF"
          },
          {
            code: "230725",
            name: "\u5927\u7B90\u5C71\u53BF"
          },
          {
            code: "230726",
            name: "\u5357\u5C94\u53BF"
          },
          {
            code: "230751",
            name: "\u91D1\u6797\u533A"
          },
          {
            code: "230781",
            name: "\u94C1\u529B\u5E02"
          }
        ]
      },
      {
        code: "2308",
        name: "\u4F73\u6728\u65AF\u5E02",
        children: [
          {
            code: "230803",
            name: "\u5411\u9633\u533A"
          },
          {
            code: "230804",
            name: "\u524D\u8FDB\u533A"
          },
          {
            code: "230805",
            name: "\u4E1C\u98CE\u533A"
          },
          {
            code: "230811",
            name: "\u90CA\u533A"
          },
          {
            code: "230822",
            name: "\u6866\u5357\u53BF"
          },
          {
            code: "230826",
            name: "\u6866\u5DDD\u53BF"
          },
          {
            code: "230828",
            name: "\u6C64\u539F\u53BF"
          },
          {
            code: "230881",
            name: "\u540C\u6C5F\u5E02"
          },
          {
            code: "230882",
            name: "\u5BCC\u9526\u5E02"
          },
          {
            code: "230883",
            name: "\u629A\u8FDC\u5E02"
          }
        ]
      },
      {
        code: "2309",
        name: "\u4E03\u53F0\u6CB3\u5E02",
        children: [
          {
            code: "230902",
            name: "\u65B0\u5174\u533A"
          },
          {
            code: "230903",
            name: "\u6843\u5C71\u533A"
          },
          {
            code: "230904",
            name: "\u8304\u5B50\u6CB3\u533A"
          },
          {
            code: "230921",
            name: "\u52C3\u5229\u53BF"
          }
        ]
      },
      {
        code: "2310",
        name: "\u7261\u4E39\u6C5F\u5E02",
        children: [
          {
            code: "231002",
            name: "\u4E1C\u5B89\u533A"
          },
          {
            code: "231003",
            name: "\u9633\u660E\u533A"
          },
          {
            code: "231004",
            name: "\u7231\u6C11\u533A"
          },
          {
            code: "231005",
            name: "\u897F\u5B89\u533A"
          },
          {
            code: "231025",
            name: "\u6797\u53E3\u53BF"
          },
          {
            code: "231071",
            name: "\u7261\u4E39\u6C5F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "231081",
            name: "\u7EE5\u82AC\u6CB3\u5E02"
          },
          {
            code: "231083",
            name: "\u6D77\u6797\u5E02"
          },
          {
            code: "231084",
            name: "\u5B81\u5B89\u5E02"
          },
          {
            code: "231085",
            name: "\u7A46\u68F1\u5E02"
          },
          {
            code: "231086",
            name: "\u4E1C\u5B81\u5E02"
          }
        ]
      },
      {
        code: "2311",
        name: "\u9ED1\u6CB3\u5E02",
        children: [
          {
            code: "231102",
            name: "\u7231\u8F89\u533A"
          },
          {
            code: "231123",
            name: "\u900A\u514B\u53BF"
          },
          {
            code: "231124",
            name: "\u5B59\u5434\u53BF"
          },
          {
            code: "231181",
            name: "\u5317\u5B89\u5E02"
          },
          {
            code: "231182",
            name: "\u4E94\u5927\u8FDE\u6C60\u5E02"
          },
          {
            code: "231183",
            name: "\u5AE9\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "2312",
        name: "\u7EE5\u5316\u5E02",
        children: [
          {
            code: "231202",
            name: "\u5317\u6797\u533A"
          },
          {
            code: "231221",
            name: "\u671B\u594E\u53BF"
          },
          {
            code: "231222",
            name: "\u5170\u897F\u53BF"
          },
          {
            code: "231223",
            name: "\u9752\u5188\u53BF"
          },
          {
            code: "231224",
            name: "\u5E86\u5B89\u53BF"
          },
          {
            code: "231225",
            name: "\u660E\u6C34\u53BF"
          },
          {
            code: "231226",
            name: "\u7EE5\u68F1\u53BF"
          },
          {
            code: "231281",
            name: "\u5B89\u8FBE\u5E02"
          },
          {
            code: "231282",
            name: "\u8087\u4E1C\u5E02"
          },
          {
            code: "231283",
            name: "\u6D77\u4F26\u5E02"
          }
        ]
      },
      {
        code: "2327",
        name: "\u5927\u5174\u5B89\u5CAD\u5730\u533A",
        children: [
          {
            code: "232701",
            name: "\u6F20\u6CB3\u5E02"
          },
          {
            code: "232721",
            name: "\u547C\u739B\u53BF"
          },
          {
            code: "232722",
            name: "\u5854\u6CB3\u53BF"
          },
          {
            code: "232761",
            name: "\u52A0\u683C\u8FBE\u5947\u533A"
          },
          {
            code: "232762",
            name: "\u677E\u5CAD\u533A"
          },
          {
            code: "232763",
            name: "\u65B0\u6797\u533A"
          },
          {
            code: "232764",
            name: "\u547C\u4E2D\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "31",
    name: "\u4E0A\u6D77\u5E02",
    children: [
      {
        code: "3101",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "310101",
            name: "\u9EC4\u6D66\u533A"
          },
          {
            code: "310104",
            name: "\u5F90\u6C47\u533A"
          },
          {
            code: "310105",
            name: "\u957F\u5B81\u533A"
          },
          {
            code: "310106",
            name: "\u9759\u5B89\u533A"
          },
          {
            code: "310107",
            name: "\u666E\u9640\u533A"
          },
          {
            code: "310109",
            name: "\u8679\u53E3\u533A"
          },
          {
            code: "310110",
            name: "\u6768\u6D66\u533A"
          },
          {
            code: "310112",
            name: "\u95F5\u884C\u533A"
          },
          {
            code: "310113",
            name: "\u5B9D\u5C71\u533A"
          },
          {
            code: "310114",
            name: "\u5609\u5B9A\u533A"
          },
          {
            code: "310115",
            name: "\u6D66\u4E1C\u65B0\u533A"
          },
          {
            code: "310116",
            name: "\u91D1\u5C71\u533A"
          },
          {
            code: "310117",
            name: "\u677E\u6C5F\u533A"
          },
          {
            code: "310118",
            name: "\u9752\u6D66\u533A"
          },
          {
            code: "310120",
            name: "\u5949\u8D24\u533A"
          },
          {
            code: "310151",
            name: "\u5D07\u660E\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "32",
    name: "\u6C5F\u82CF\u7701",
    children: [
      {
        code: "3201",
        name: "\u5357\u4EAC\u5E02",
        children: [
          {
            code: "320102",
            name: "\u7384\u6B66\u533A"
          },
          {
            code: "320104",
            name: "\u79E6\u6DEE\u533A"
          },
          {
            code: "320105",
            name: "\u5EFA\u90BA\u533A"
          },
          {
            code: "320106",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "320111",
            name: "\u6D66\u53E3\u533A"
          },
          {
            code: "320113",
            name: "\u6816\u971E\u533A"
          },
          {
            code: "320114",
            name: "\u96E8\u82B1\u53F0\u533A"
          },
          {
            code: "320115",
            name: "\u6C5F\u5B81\u533A"
          },
          {
            code: "320116",
            name: "\u516D\u5408\u533A"
          },
          {
            code: "320117",
            name: "\u6EA7\u6C34\u533A"
          },
          {
            code: "320118",
            name: "\u9AD8\u6DF3\u533A"
          }
        ]
      },
      {
        code: "3202",
        name: "\u65E0\u9521\u5E02",
        children: [
          {
            code: "320205",
            name: "\u9521\u5C71\u533A"
          },
          {
            code: "320206",
            name: "\u60E0\u5C71\u533A"
          },
          {
            code: "320211",
            name: "\u6EE8\u6E56\u533A"
          },
          {
            code: "320213",
            name: "\u6881\u6EAA\u533A"
          },
          {
            code: "320214",
            name: "\u65B0\u5434\u533A"
          },
          {
            code: "320281",
            name: "\u6C5F\u9634\u5E02"
          },
          {
            code: "320282",
            name: "\u5B9C\u5174\u5E02"
          }
        ]
      },
      {
        code: "3203",
        name: "\u5F90\u5DDE\u5E02",
        children: [
          {
            code: "320302",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "320303",
            name: "\u4E91\u9F99\u533A"
          },
          {
            code: "320305",
            name: "\u8D3E\u6C6A\u533A"
          },
          {
            code: "320311",
            name: "\u6CC9\u5C71\u533A"
          },
          {
            code: "320312",
            name: "\u94DC\u5C71\u533A"
          },
          {
            code: "320321",
            name: "\u4E30\u53BF"
          },
          {
            code: "320322",
            name: "\u6C9B\u53BF"
          },
          {
            code: "320324",
            name: "\u7762\u5B81\u53BF"
          },
          {
            code: "320371",
            name: "\u5F90\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320381",
            name: "\u65B0\u6C82\u5E02"
          },
          {
            code: "320382",
            name: "\u90B3\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3204",
        name: "\u5E38\u5DDE\u5E02",
        children: [
          {
            code: "320402",
            name: "\u5929\u5B81\u533A"
          },
          {
            code: "320404",
            name: "\u949F\u697C\u533A"
          },
          {
            code: "320411",
            name: "\u65B0\u5317\u533A"
          },
          {
            code: "320412",
            name: "\u6B66\u8FDB\u533A"
          },
          {
            code: "320413",
            name: "\u91D1\u575B\u533A"
          },
          {
            code: "320481",
            name: "\u6EA7\u9633\u5E02"
          }
        ]
      },
      {
        code: "3205",
        name: "\u82CF\u5DDE\u5E02",
        children: [
          {
            code: "320505",
            name: "\u864E\u4E18\u533A"
          },
          {
            code: "320506",
            name: "\u5434\u4E2D\u533A"
          },
          {
            code: "320507",
            name: "\u76F8\u57CE\u533A"
          },
          {
            code: "320508",
            name: "\u59D1\u82CF\u533A"
          },
          {
            code: "320509",
            name: "\u5434\u6C5F\u533A"
          },
          {
            code: "320571",
            name: "\u82CF\u5DDE\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "320581",
            name: "\u5E38\u719F\u5E02"
          },
          {
            code: "320582",
            name: "\u5F20\u5BB6\u6E2F\u5E02"
          },
          {
            code: "320583",
            name: "\u6606\u5C71\u5E02"
          },
          {
            code: "320585",
            name: "\u592A\u4ED3\u5E02"
          }
        ]
      },
      {
        code: "3206",
        name: "\u5357\u901A\u5E02",
        children: [
          {
            code: "320602",
            name: "\u5D07\u5DDD\u533A"
          },
          {
            code: "320611",
            name: "\u6E2F\u95F8\u533A"
          },
          {
            code: "320612",
            name: "\u901A\u5DDE\u533A"
          },
          {
            code: "320623",
            name: "\u5982\u4E1C\u53BF"
          },
          {
            code: "320671",
            name: "\u5357\u901A\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320681",
            name: "\u542F\u4E1C\u5E02"
          },
          {
            code: "320682",
            name: "\u5982\u768B\u5E02"
          },
          {
            code: "320684",
            name: "\u6D77\u95E8\u5E02"
          },
          {
            code: "320685",
            name: "\u6D77\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3207",
        name: "\u8FDE\u4E91\u6E2F\u5E02",
        children: [
          {
            code: "320703",
            name: "\u8FDE\u4E91\u533A"
          },
          {
            code: "320706",
            name: "\u6D77\u5DDE\u533A"
          },
          {
            code: "320707",
            name: "\u8D63\u6986\u533A"
          },
          {
            code: "320722",
            name: "\u4E1C\u6D77\u53BF"
          },
          {
            code: "320723",
            name: "\u704C\u4E91\u53BF"
          },
          {
            code: "320724",
            name: "\u704C\u5357\u53BF"
          },
          {
            code: "320771",
            name: "\u8FDE\u4E91\u6E2F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320772",
            name: "\u8FDE\u4E91\u6E2F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3208",
        name: "\u6DEE\u5B89\u5E02",
        children: [
          {
            code: "320803",
            name: "\u6DEE\u5B89\u533A"
          },
          {
            code: "320804",
            name: "\u6DEE\u9634\u533A"
          },
          {
            code: "320812",
            name: "\u6E05\u6C5F\u6D66\u533A"
          },
          {
            code: "320813",
            name: "\u6D2A\u6CFD\u533A"
          },
          {
            code: "320826",
            name: "\u6D9F\u6C34\u53BF"
          },
          {
            code: "320830",
            name: "\u76F1\u7719\u53BF"
          },
          {
            code: "320831",
            name: "\u91D1\u6E56\u53BF"
          },
          {
            code: "320871",
            name: "\u6DEE\u5B89\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3209",
        name: "\u76D0\u57CE\u5E02",
        children: [
          {
            code: "320902",
            name: "\u4EAD\u6E56\u533A"
          },
          {
            code: "320903",
            name: "\u76D0\u90FD\u533A"
          },
          {
            code: "320904",
            name: "\u5927\u4E30\u533A"
          },
          {
            code: "320921",
            name: "\u54CD\u6C34\u53BF"
          },
          {
            code: "320922",
            name: "\u6EE8\u6D77\u53BF"
          },
          {
            code: "320923",
            name: "\u961C\u5B81\u53BF"
          },
          {
            code: "320924",
            name: "\u5C04\u9633\u53BF"
          },
          {
            code: "320925",
            name: "\u5EFA\u6E56\u53BF"
          },
          {
            code: "320971",
            name: "\u76D0\u57CE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320981",
            name: "\u4E1C\u53F0\u5E02"
          }
        ]
      },
      {
        code: "3210",
        name: "\u626C\u5DDE\u5E02",
        children: [
          {
            code: "321002",
            name: "\u5E7F\u9675\u533A"
          },
          {
            code: "321003",
            name: "\u9097\u6C5F\u533A"
          },
          {
            code: "321012",
            name: "\u6C5F\u90FD\u533A"
          },
          {
            code: "321023",
            name: "\u5B9D\u5E94\u53BF"
          },
          {
            code: "321071",
            name: "\u626C\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "321081",
            name: "\u4EEA\u5F81\u5E02"
          },
          {
            code: "321084",
            name: "\u9AD8\u90AE\u5E02"
          }
        ]
      },
      {
        code: "3211",
        name: "\u9547\u6C5F\u5E02",
        children: [
          {
            code: "321102",
            name: "\u4EAC\u53E3\u533A"
          },
          {
            code: "321111",
            name: "\u6DA6\u5DDE\u533A"
          },
          {
            code: "321112",
            name: "\u4E39\u5F92\u533A"
          },
          {
            code: "321171",
            name: "\u9547\u6C5F\u65B0\u533A"
          },
          {
            code: "321181",
            name: "\u4E39\u9633\u5E02"
          },
          {
            code: "321182",
            name: "\u626C\u4E2D\u5E02"
          },
          {
            code: "321183",
            name: "\u53E5\u5BB9\u5E02"
          }
        ]
      },
      {
        code: "3212",
        name: "\u6CF0\u5DDE\u5E02",
        children: [
          {
            code: "321202",
            name: "\u6D77\u9675\u533A"
          },
          {
            code: "321203",
            name: "\u9AD8\u6E2F\u533A"
          },
          {
            code: "321204",
            name: "\u59DC\u5830\u533A"
          },
          {
            code: "321271",
            name: "\u6CF0\u5DDE\u533B\u836F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "321281",
            name: "\u5174\u5316\u5E02"
          },
          {
            code: "321282",
            name: "\u9756\u6C5F\u5E02"
          },
          {
            code: "321283",
            name: "\u6CF0\u5174\u5E02"
          }
        ]
      },
      {
        code: "3213",
        name: "\u5BBF\u8FC1\u5E02",
        children: [
          {
            code: "321302",
            name: "\u5BBF\u57CE\u533A"
          },
          {
            code: "321311",
            name: "\u5BBF\u8C6B\u533A"
          },
          {
            code: "321322",
            name: "\u6CAD\u9633\u53BF"
          },
          {
            code: "321323",
            name: "\u6CD7\u9633\u53BF"
          },
          {
            code: "321324",
            name: "\u6CD7\u6D2A\u53BF"
          },
          {
            code: "321371",
            name: "\u5BBF\u8FC1\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "33",
    name: "\u6D59\u6C5F\u7701",
    children: [
      {
        code: "3301",
        name: "\u676D\u5DDE\u5E02",
        children: [
          {
            code: "330102",
            name: "\u4E0A\u57CE\u533A"
          },
          {
            code: "330103",
            name: "\u4E0B\u57CE\u533A"
          },
          {
            code: "330104",
            name: "\u6C5F\u5E72\u533A"
          },
          {
            code: "330105",
            name: "\u62F1\u5885\u533A"
          },
          {
            code: "330106",
            name: "\u897F\u6E56\u533A"
          },
          {
            code: "330108",
            name: "\u6EE8\u6C5F\u533A"
          },
          {
            code: "330109",
            name: "\u8427\u5C71\u533A"
          },
          {
            code: "330110",
            name: "\u4F59\u676D\u533A"
          },
          {
            code: "330111",
            name: "\u5BCC\u9633\u533A"
          },
          {
            code: "330112",
            name: "\u4E34\u5B89\u533A"
          },
          {
            code: "330122",
            name: "\u6850\u5E90\u53BF"
          },
          {
            code: "330127",
            name: "\u6DF3\u5B89\u53BF"
          },
          {
            code: "330182",
            name: "\u5EFA\u5FB7\u5E02"
          }
        ]
      },
      {
        code: "3302",
        name: "\u5B81\u6CE2\u5E02",
        children: [
          {
            code: "330203",
            name: "\u6D77\u66D9\u533A"
          },
          {
            code: "330205",
            name: "\u6C5F\u5317\u533A"
          },
          {
            code: "330206",
            name: "\u5317\u4ED1\u533A"
          },
          {
            code: "330211",
            name: "\u9547\u6D77\u533A"
          },
          {
            code: "330212",
            name: "\u911E\u5DDE\u533A"
          },
          {
            code: "330213",
            name: "\u5949\u5316\u533A"
          },
          {
            code: "330225",
            name: "\u8C61\u5C71\u53BF"
          },
          {
            code: "330226",
            name: "\u5B81\u6D77\u53BF"
          },
          {
            code: "330281",
            name: "\u4F59\u59DA\u5E02"
          },
          {
            code: "330282",
            name: "\u6148\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "3303",
        name: "\u6E29\u5DDE\u5E02",
        children: [
          {
            code: "330302",
            name: "\u9E7F\u57CE\u533A"
          },
          {
            code: "330303",
            name: "\u9F99\u6E7E\u533A"
          },
          {
            code: "330304",
            name: "\u74EF\u6D77\u533A"
          },
          {
            code: "330305",
            name: "\u6D1E\u5934\u533A"
          },
          {
            code: "330324",
            name: "\u6C38\u5609\u53BF"
          },
          {
            code: "330326",
            name: "\u5E73\u9633\u53BF"
          },
          {
            code: "330327",
            name: "\u82CD\u5357\u53BF"
          },
          {
            code: "330328",
            name: "\u6587\u6210\u53BF"
          },
          {
            code: "330329",
            name: "\u6CF0\u987A\u53BF"
          },
          {
            code: "330371",
            name: "\u6E29\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "330381",
            name: "\u745E\u5B89\u5E02"
          },
          {
            code: "330382",
            name: "\u4E50\u6E05\u5E02"
          },
          {
            code: "330383",
            name: "\u9F99\u6E2F\u5E02"
          }
        ]
      },
      {
        code: "3304",
        name: "\u5609\u5174\u5E02",
        children: [
          {
            code: "330402",
            name: "\u5357\u6E56\u533A"
          },
          {
            code: "330411",
            name: "\u79C0\u6D32\u533A"
          },
          {
            code: "330421",
            name: "\u5609\u5584\u53BF"
          },
          {
            code: "330424",
            name: "\u6D77\u76D0\u53BF"
          },
          {
            code: "330481",
            name: "\u6D77\u5B81\u5E02"
          },
          {
            code: "330482",
            name: "\u5E73\u6E56\u5E02"
          },
          {
            code: "330483",
            name: "\u6850\u4E61\u5E02"
          }
        ]
      },
      {
        code: "3305",
        name: "\u6E56\u5DDE\u5E02",
        children: [
          {
            code: "330502",
            name: "\u5434\u5174\u533A"
          },
          {
            code: "330503",
            name: "\u5357\u6D54\u533A"
          },
          {
            code: "330521",
            name: "\u5FB7\u6E05\u53BF"
          },
          {
            code: "330522",
            name: "\u957F\u5174\u53BF"
          },
          {
            code: "330523",
            name: "\u5B89\u5409\u53BF"
          }
        ]
      },
      {
        code: "3306",
        name: "\u7ECD\u5174\u5E02",
        children: [
          {
            code: "330602",
            name: "\u8D8A\u57CE\u533A"
          },
          {
            code: "330603",
            name: "\u67EF\u6865\u533A"
          },
          {
            code: "330604",
            name: "\u4E0A\u865E\u533A"
          },
          {
            code: "330624",
            name: "\u65B0\u660C\u53BF"
          },
          {
            code: "330681",
            name: "\u8BF8\u66A8\u5E02"
          },
          {
            code: "330683",
            name: "\u5D4A\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3307",
        name: "\u91D1\u534E\u5E02",
        children: [
          {
            code: "330702",
            name: "\u5A7A\u57CE\u533A"
          },
          {
            code: "330703",
            name: "\u91D1\u4E1C\u533A"
          },
          {
            code: "330723",
            name: "\u6B66\u4E49\u53BF"
          },
          {
            code: "330726",
            name: "\u6D66\u6C5F\u53BF"
          },
          {
            code: "330727",
            name: "\u78D0\u5B89\u53BF"
          },
          {
            code: "330781",
            name: "\u5170\u6EAA\u5E02"
          },
          {
            code: "330782",
            name: "\u4E49\u4E4C\u5E02"
          },
          {
            code: "330783",
            name: "\u4E1C\u9633\u5E02"
          },
          {
            code: "330784",
            name: "\u6C38\u5EB7\u5E02"
          }
        ]
      },
      {
        code: "3308",
        name: "\u8862\u5DDE\u5E02",
        children: [
          {
            code: "330802",
            name: "\u67EF\u57CE\u533A"
          },
          {
            code: "330803",
            name: "\u8862\u6C5F\u533A"
          },
          {
            code: "330822",
            name: "\u5E38\u5C71\u53BF"
          },
          {
            code: "330824",
            name: "\u5F00\u5316\u53BF"
          },
          {
            code: "330825",
            name: "\u9F99\u6E38\u53BF"
          },
          {
            code: "330881",
            name: "\u6C5F\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3309",
        name: "\u821F\u5C71\u5E02",
        children: [
          {
            code: "330902",
            name: "\u5B9A\u6D77\u533A"
          },
          {
            code: "330903",
            name: "\u666E\u9640\u533A"
          },
          {
            code: "330921",
            name: "\u5CB1\u5C71\u53BF"
          },
          {
            code: "330922",
            name: "\u5D4A\u6CD7\u53BF"
          }
        ]
      },
      {
        code: "3310",
        name: "\u53F0\u5DDE\u5E02",
        children: [
          {
            code: "331002",
            name: "\u6912\u6C5F\u533A"
          },
          {
            code: "331003",
            name: "\u9EC4\u5CA9\u533A"
          },
          {
            code: "331004",
            name: "\u8DEF\u6865\u533A"
          },
          {
            code: "331022",
            name: "\u4E09\u95E8\u53BF"
          },
          {
            code: "331023",
            name: "\u5929\u53F0\u53BF"
          },
          {
            code: "331024",
            name: "\u4ED9\u5C45\u53BF"
          },
          {
            code: "331081",
            name: "\u6E29\u5CAD\u5E02"
          },
          {
            code: "331082",
            name: "\u4E34\u6D77\u5E02"
          },
          {
            code: "331083",
            name: "\u7389\u73AF\u5E02"
          }
        ]
      },
      {
        code: "3311",
        name: "\u4E3D\u6C34\u5E02",
        children: [
          {
            code: "331102",
            name: "\u83B2\u90FD\u533A"
          },
          {
            code: "331121",
            name: "\u9752\u7530\u53BF"
          },
          {
            code: "331122",
            name: "\u7F19\u4E91\u53BF"
          },
          {
            code: "331123",
            name: "\u9042\u660C\u53BF"
          },
          {
            code: "331124",
            name: "\u677E\u9633\u53BF"
          },
          {
            code: "331125",
            name: "\u4E91\u548C\u53BF"
          },
          {
            code: "331126",
            name: "\u5E86\u5143\u53BF"
          },
          {
            code: "331127",
            name: "\u666F\u5B81\u7572\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "331181",
            name: "\u9F99\u6CC9\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "34",
    name: "\u5B89\u5FBD\u7701",
    children: [
      {
        code: "3401",
        name: "\u5408\u80A5\u5E02",
        children: [
          {
            code: "340102",
            name: "\u7476\u6D77\u533A"
          },
          {
            code: "340103",
            name: "\u5E90\u9633\u533A"
          },
          {
            code: "340104",
            name: "\u8700\u5C71\u533A"
          },
          {
            code: "340111",
            name: "\u5305\u6CB3\u533A"
          },
          {
            code: "340121",
            name: "\u957F\u4E30\u53BF"
          },
          {
            code: "340122",
            name: "\u80A5\u4E1C\u53BF"
          },
          {
            code: "340123",
            name: "\u80A5\u897F\u53BF"
          },
          {
            code: "340124",
            name: "\u5E90\u6C5F\u53BF"
          },
          {
            code: "340171",
            name: "\u5408\u80A5\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "340172",
            name: "\u5408\u80A5\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340173",
            name: "\u5408\u80A5\u65B0\u7AD9\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "340181",
            name: "\u5DE2\u6E56\u5E02"
          }
        ]
      },
      {
        code: "3402",
        name: "\u829C\u6E56\u5E02",
        children: [
          {
            code: "340202",
            name: "\u955C\u6E56\u533A"
          },
          {
            code: "340203",
            name: "\u5F0B\u6C5F\u533A"
          },
          {
            code: "340207",
            name: "\u9E20\u6C5F\u533A"
          },
          {
            code: "340208",
            name: "\u4E09\u5C71\u533A"
          },
          {
            code: "340221",
            name: "\u829C\u6E56\u53BF"
          },
          {
            code: "340222",
            name: "\u7E41\u660C\u53BF"
          },
          {
            code: "340223",
            name: "\u5357\u9675\u53BF"
          },
          {
            code: "340271",
            name: "\u829C\u6E56\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340272",
            name: "\u5B89\u5FBD\u829C\u6E56\u957F\u6C5F\u5927\u6865\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "340281",
            name: "\u65E0\u4E3A\u5E02"
          }
        ]
      },
      {
        code: "3403",
        name: "\u868C\u57E0\u5E02",
        children: [
          {
            code: "340302",
            name: "\u9F99\u5B50\u6E56\u533A"
          },
          {
            code: "340303",
            name: "\u868C\u5C71\u533A"
          },
          {
            code: "340304",
            name: "\u79B9\u4F1A\u533A"
          },
          {
            code: "340311",
            name: "\u6DEE\u4E0A\u533A"
          },
          {
            code: "340321",
            name: "\u6000\u8FDC\u53BF"
          },
          {
            code: "340322",
            name: "\u4E94\u6CB3\u53BF"
          },
          {
            code: "340323",
            name: "\u56FA\u9547\u53BF"
          },
          {
            code: "340371",
            name: "\u868C\u57E0\u5E02\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340372",
            name: "\u868C\u57E0\u5E02\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3404",
        name: "\u6DEE\u5357\u5E02",
        children: [
          {
            code: "340402",
            name: "\u5927\u901A\u533A"
          },
          {
            code: "340403",
            name: "\u7530\u5BB6\u5EB5\u533A"
          },
          {
            code: "340404",
            name: "\u8C22\u5BB6\u96C6\u533A"
          },
          {
            code: "340405",
            name: "\u516B\u516C\u5C71\u533A"
          },
          {
            code: "340406",
            name: "\u6F58\u96C6\u533A"
          },
          {
            code: "340421",
            name: "\u51E4\u53F0\u53BF"
          },
          {
            code: "340422",
            name: "\u5BFF\u53BF"
          }
        ]
      },
      {
        code: "3405",
        name: "\u9A6C\u978D\u5C71\u5E02",
        children: [
          {
            code: "340503",
            name: "\u82B1\u5C71\u533A"
          },
          {
            code: "340504",
            name: "\u96E8\u5C71\u533A"
          },
          {
            code: "340506",
            name: "\u535A\u671B\u533A"
          },
          {
            code: "340521",
            name: "\u5F53\u6D82\u53BF"
          },
          {
            code: "340522",
            name: "\u542B\u5C71\u53BF"
          },
          {
            code: "340523",
            name: "\u548C\u53BF"
          }
        ]
      },
      {
        code: "3406",
        name: "\u6DEE\u5317\u5E02",
        children: [
          {
            code: "340602",
            name: "\u675C\u96C6\u533A"
          },
          {
            code: "340603",
            name: "\u76F8\u5C71\u533A"
          },
          {
            code: "340604",
            name: "\u70C8\u5C71\u533A"
          },
          {
            code: "340621",
            name: "\u6FC9\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "3407",
        name: "\u94DC\u9675\u5E02",
        children: [
          {
            code: "340705",
            name: "\u94DC\u5B98\u533A"
          },
          {
            code: "340706",
            name: "\u4E49\u5B89\u533A"
          },
          {
            code: "340711",
            name: "\u90CA\u533A"
          },
          {
            code: "340722",
            name: "\u679E\u9633\u53BF"
          }
        ]
      },
      {
        code: "3408",
        name: "\u5B89\u5E86\u5E02",
        children: [
          {
            code: "340802",
            name: "\u8FCE\u6C5F\u533A"
          },
          {
            code: "340803",
            name: "\u5927\u89C2\u533A"
          },
          {
            code: "340811",
            name: "\u5B9C\u79C0\u533A"
          },
          {
            code: "340822",
            name: "\u6000\u5B81\u53BF"
          },
          {
            code: "340825",
            name: "\u592A\u6E56\u53BF"
          },
          {
            code: "340826",
            name: "\u5BBF\u677E\u53BF"
          },
          {
            code: "340827",
            name: "\u671B\u6C5F\u53BF"
          },
          {
            code: "340828",
            name: "\u5CB3\u897F\u53BF"
          },
          {
            code: "340871",
            name: "\u5B89\u5FBD\u5B89\u5E86\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "340881",
            name: "\u6850\u57CE\u5E02"
          },
          {
            code: "340882",
            name: "\u6F5C\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3410",
        name: "\u9EC4\u5C71\u5E02",
        children: [
          {
            code: "341002",
            name: "\u5C6F\u6EAA\u533A"
          },
          {
            code: "341003",
            name: "\u9EC4\u5C71\u533A"
          },
          {
            code: "341004",
            name: "\u5FBD\u5DDE\u533A"
          },
          {
            code: "341021",
            name: "\u6B59\u53BF"
          },
          {
            code: "341022",
            name: "\u4F11\u5B81\u53BF"
          },
          {
            code: "341023",
            name: "\u9EDF\u53BF"
          },
          {
            code: "341024",
            name: "\u7941\u95E8\u53BF"
          }
        ]
      },
      {
        code: "3411",
        name: "\u6EC1\u5DDE\u5E02",
        children: [
          {
            code: "341102",
            name: "\u7405\u740A\u533A"
          },
          {
            code: "341103",
            name: "\u5357\u8C2F\u533A"
          },
          {
            code: "341122",
            name: "\u6765\u5B89\u53BF"
          },
          {
            code: "341124",
            name: "\u5168\u6912\u53BF"
          },
          {
            code: "341125",
            name: "\u5B9A\u8FDC\u53BF"
          },
          {
            code: "341126",
            name: "\u51E4\u9633\u53BF"
          },
          {
            code: "341171",
            name: "\u82CF\u6EC1\u73B0\u4EE3\u4EA7\u4E1A\u56ED"
          },
          {
            code: "341172",
            name: "\u6EC1\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "341181",
            name: "\u5929\u957F\u5E02"
          },
          {
            code: "341182",
            name: "\u660E\u5149\u5E02"
          }
        ]
      },
      {
        code: "3412",
        name: "\u961C\u9633\u5E02",
        children: [
          {
            code: "341202",
            name: "\u988D\u5DDE\u533A"
          },
          {
            code: "341203",
            name: "\u988D\u4E1C\u533A"
          },
          {
            code: "341204",
            name: "\u988D\u6CC9\u533A"
          },
          {
            code: "341221",
            name: "\u4E34\u6CC9\u53BF"
          },
          {
            code: "341222",
            name: "\u592A\u548C\u53BF"
          },
          {
            code: "341225",
            name: "\u961C\u5357\u53BF"
          },
          {
            code: "341226",
            name: "\u988D\u4E0A\u53BF"
          },
          {
            code: "341271",
            name: "\u961C\u9633\u5408\u80A5\u73B0\u4EE3\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "341272",
            name: "\u961C\u9633\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "341282",
            name: "\u754C\u9996\u5E02"
          }
        ]
      },
      {
        code: "3413",
        name: "\u5BBF\u5DDE\u5E02",
        children: [
          {
            code: "341302",
            name: "\u57C7\u6865\u533A"
          },
          {
            code: "341321",
            name: "\u7800\u5C71\u53BF"
          },
          {
            code: "341322",
            name: "\u8427\u53BF"
          },
          {
            code: "341323",
            name: "\u7075\u74A7\u53BF"
          },
          {
            code: "341324",
            name: "\u6CD7\u53BF"
          },
          {
            code: "341371",
            name: "\u5BBF\u5DDE\u9A6C\u978D\u5C71\u73B0\u4EE3\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "341372",
            name: "\u5BBF\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3415",
        name: "\u516D\u5B89\u5E02",
        children: [
          {
            code: "341502",
            name: "\u91D1\u5B89\u533A"
          },
          {
            code: "341503",
            name: "\u88D5\u5B89\u533A"
          },
          {
            code: "341504",
            name: "\u53F6\u96C6\u533A"
          },
          {
            code: "341522",
            name: "\u970D\u90B1\u53BF"
          },
          {
            code: "341523",
            name: "\u8212\u57CE\u53BF"
          },
          {
            code: "341524",
            name: "\u91D1\u5BE8\u53BF"
          },
          {
            code: "341525",
            name: "\u970D\u5C71\u53BF"
          }
        ]
      },
      {
        code: "3416",
        name: "\u4EB3\u5DDE\u5E02",
        children: [
          {
            code: "341602",
            name: "\u8C2F\u57CE\u533A"
          },
          {
            code: "341621",
            name: "\u6DA1\u9633\u53BF"
          },
          {
            code: "341622",
            name: "\u8499\u57CE\u53BF"
          },
          {
            code: "341623",
            name: "\u5229\u8F9B\u53BF"
          }
        ]
      },
      {
        code: "3417",
        name: "\u6C60\u5DDE\u5E02",
        children: [
          {
            code: "341702",
            name: "\u8D35\u6C60\u533A"
          },
          {
            code: "341721",
            name: "\u4E1C\u81F3\u53BF"
          },
          {
            code: "341722",
            name: "\u77F3\u53F0\u53BF"
          },
          {
            code: "341723",
            name: "\u9752\u9633\u53BF"
          }
        ]
      },
      {
        code: "3418",
        name: "\u5BA3\u57CE\u5E02",
        children: [
          {
            code: "341802",
            name: "\u5BA3\u5DDE\u533A"
          },
          {
            code: "341821",
            name: "\u90CE\u6EAA\u53BF"
          },
          {
            code: "341823",
            name: "\u6CFE\u53BF"
          },
          {
            code: "341824",
            name: "\u7EE9\u6EAA\u53BF"
          },
          {
            code: "341825",
            name: "\u65CC\u5FB7\u53BF"
          },
          {
            code: "341871",
            name: "\u5BA3\u57CE\u5E02\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "341881",
            name: "\u5B81\u56FD\u5E02"
          },
          {
            code: "341882",
            name: "\u5E7F\u5FB7\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "35",
    name: "\u798F\u5EFA\u7701",
    children: [
      {
        code: "3501",
        name: "\u798F\u5DDE\u5E02",
        children: [
          {
            code: "350102",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "350103",
            name: "\u53F0\u6C5F\u533A"
          },
          {
            code: "350104",
            name: "\u4ED3\u5C71\u533A"
          },
          {
            code: "350105",
            name: "\u9A6C\u5C3E\u533A"
          },
          {
            code: "350111",
            name: "\u664B\u5B89\u533A"
          },
          {
            code: "350112",
            name: "\u957F\u4E50\u533A"
          },
          {
            code: "350121",
            name: "\u95FD\u4FAF\u53BF"
          },
          {
            code: "350122",
            name: "\u8FDE\u6C5F\u53BF"
          },
          {
            code: "350123",
            name: "\u7F57\u6E90\u53BF"
          },
          {
            code: "350124",
            name: "\u95FD\u6E05\u53BF"
          },
          {
            code: "350125",
            name: "\u6C38\u6CF0\u53BF"
          },
          {
            code: "350128",
            name: "\u5E73\u6F6D\u53BF"
          },
          {
            code: "350181",
            name: "\u798F\u6E05\u5E02"
          }
        ]
      },
      {
        code: "3502",
        name: "\u53A6\u95E8\u5E02",
        children: [
          {
            code: "350203",
            name: "\u601D\u660E\u533A"
          },
          {
            code: "350205",
            name: "\u6D77\u6CA7\u533A"
          },
          {
            code: "350206",
            name: "\u6E56\u91CC\u533A"
          },
          {
            code: "350211",
            name: "\u96C6\u7F8E\u533A"
          },
          {
            code: "350212",
            name: "\u540C\u5B89\u533A"
          },
          {
            code: "350213",
            name: "\u7FD4\u5B89\u533A"
          }
        ]
      },
      {
        code: "3503",
        name: "\u8386\u7530\u5E02",
        children: [
          {
            code: "350302",
            name: "\u57CE\u53A2\u533A"
          },
          {
            code: "350303",
            name: "\u6DB5\u6C5F\u533A"
          },
          {
            code: "350304",
            name: "\u8354\u57CE\u533A"
          },
          {
            code: "350305",
            name: "\u79C0\u5C7F\u533A"
          },
          {
            code: "350322",
            name: "\u4ED9\u6E38\u53BF"
          }
        ]
      },
      {
        code: "3504",
        name: "\u4E09\u660E\u5E02",
        children: [
          {
            code: "350402",
            name: "\u6885\u5217\u533A"
          },
          {
            code: "350403",
            name: "\u4E09\u5143\u533A"
          },
          {
            code: "350421",
            name: "\u660E\u6EAA\u53BF"
          },
          {
            code: "350423",
            name: "\u6E05\u6D41\u53BF"
          },
          {
            code: "350424",
            name: "\u5B81\u5316\u53BF"
          },
          {
            code: "350425",
            name: "\u5927\u7530\u53BF"
          },
          {
            code: "350426",
            name: "\u5C24\u6EAA\u53BF"
          },
          {
            code: "350427",
            name: "\u6C99\u53BF"
          },
          {
            code: "350428",
            name: "\u5C06\u4E50\u53BF"
          },
          {
            code: "350429",
            name: "\u6CF0\u5B81\u53BF"
          },
          {
            code: "350430",
            name: "\u5EFA\u5B81\u53BF"
          },
          {
            code: "350481",
            name: "\u6C38\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3505",
        name: "\u6CC9\u5DDE\u5E02",
        children: [
          {
            code: "350502",
            name: "\u9CA4\u57CE\u533A"
          },
          {
            code: "350503",
            name: "\u4E30\u6CFD\u533A"
          },
          {
            code: "350504",
            name: "\u6D1B\u6C5F\u533A"
          },
          {
            code: "350505",
            name: "\u6CC9\u6E2F\u533A"
          },
          {
            code: "350521",
            name: "\u60E0\u5B89\u53BF"
          },
          {
            code: "350524",
            name: "\u5B89\u6EAA\u53BF"
          },
          {
            code: "350525",
            name: "\u6C38\u6625\u53BF"
          },
          {
            code: "350526",
            name: "\u5FB7\u5316\u53BF"
          },
          {
            code: "350527",
            name: "\u91D1\u95E8\u53BF"
          },
          {
            code: "350581",
            name: "\u77F3\u72EE\u5E02"
          },
          {
            code: "350582",
            name: "\u664B\u6C5F\u5E02"
          },
          {
            code: "350583",
            name: "\u5357\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3506",
        name: "\u6F33\u5DDE\u5E02",
        children: [
          {
            code: "350602",
            name: "\u8297\u57CE\u533A"
          },
          {
            code: "350603",
            name: "\u9F99\u6587\u533A"
          },
          {
            code: "350622",
            name: "\u4E91\u9704\u53BF"
          },
          {
            code: "350623",
            name: "\u6F33\u6D66\u53BF"
          },
          {
            code: "350624",
            name: "\u8BCF\u5B89\u53BF"
          },
          {
            code: "350625",
            name: "\u957F\u6CF0\u53BF"
          },
          {
            code: "350626",
            name: "\u4E1C\u5C71\u53BF"
          },
          {
            code: "350627",
            name: "\u5357\u9756\u53BF"
          },
          {
            code: "350628",
            name: "\u5E73\u548C\u53BF"
          },
          {
            code: "350629",
            name: "\u534E\u5B89\u53BF"
          },
          {
            code: "350681",
            name: "\u9F99\u6D77\u5E02"
          }
        ]
      },
      {
        code: "3507",
        name: "\u5357\u5E73\u5E02",
        children: [
          {
            code: "350702",
            name: "\u5EF6\u5E73\u533A"
          },
          {
            code: "350703",
            name: "\u5EFA\u9633\u533A"
          },
          {
            code: "350721",
            name: "\u987A\u660C\u53BF"
          },
          {
            code: "350722",
            name: "\u6D66\u57CE\u53BF"
          },
          {
            code: "350723",
            name: "\u5149\u6CFD\u53BF"
          },
          {
            code: "350724",
            name: "\u677E\u6EAA\u53BF"
          },
          {
            code: "350725",
            name: "\u653F\u548C\u53BF"
          },
          {
            code: "350781",
            name: "\u90B5\u6B66\u5E02"
          },
          {
            code: "350782",
            name: "\u6B66\u5937\u5C71\u5E02"
          },
          {
            code: "350783",
            name: "\u5EFA\u74EF\u5E02"
          }
        ]
      },
      {
        code: "3508",
        name: "\u9F99\u5CA9\u5E02",
        children: [
          {
            code: "350802",
            name: "\u65B0\u7F57\u533A"
          },
          {
            code: "350803",
            name: "\u6C38\u5B9A\u533A"
          },
          {
            code: "350821",
            name: "\u957F\u6C40\u53BF"
          },
          {
            code: "350823",
            name: "\u4E0A\u676D\u53BF"
          },
          {
            code: "350824",
            name: "\u6B66\u5E73\u53BF"
          },
          {
            code: "350825",
            name: "\u8FDE\u57CE\u53BF"
          },
          {
            code: "350881",
            name: "\u6F33\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3509",
        name: "\u5B81\u5FB7\u5E02",
        children: [
          {
            code: "350902",
            name: "\u8549\u57CE\u533A"
          },
          {
            code: "350921",
            name: "\u971E\u6D66\u53BF"
          },
          {
            code: "350922",
            name: "\u53E4\u7530\u53BF"
          },
          {
            code: "350923",
            name: "\u5C4F\u5357\u53BF"
          },
          {
            code: "350924",
            name: "\u5BFF\u5B81\u53BF"
          },
          {
            code: "350925",
            name: "\u5468\u5B81\u53BF"
          },
          {
            code: "350926",
            name: "\u67D8\u8363\u53BF"
          },
          {
            code: "350981",
            name: "\u798F\u5B89\u5E02"
          },
          {
            code: "350982",
            name: "\u798F\u9F0E\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "36",
    name: "\u6C5F\u897F\u7701",
    children: [
      {
        code: "3601",
        name: "\u5357\u660C\u5E02",
        children: [
          {
            code: "360102",
            name: "\u4E1C\u6E56\u533A"
          },
          {
            code: "360103",
            name: "\u897F\u6E56\u533A"
          },
          {
            code: "360104",
            name: "\u9752\u4E91\u8C31\u533A"
          },
          {
            code: "360111",
            name: "\u9752\u5C71\u6E56\u533A"
          },
          {
            code: "360112",
            name: "\u65B0\u5EFA\u533A"
          },
          {
            code: "360113",
            name: "\u7EA2\u8C37\u6EE9\u533A"
          },
          {
            code: "360121",
            name: "\u5357\u660C\u53BF"
          },
          {
            code: "360123",
            name: "\u5B89\u4E49\u53BF"
          },
          {
            code: "360124",
            name: "\u8FDB\u8D24\u53BF"
          }
        ]
      },
      {
        code: "3602",
        name: "\u666F\u5FB7\u9547\u5E02",
        children: [
          {
            code: "360202",
            name: "\u660C\u6C5F\u533A"
          },
          {
            code: "360203",
            name: "\u73E0\u5C71\u533A"
          },
          {
            code: "360222",
            name: "\u6D6E\u6881\u53BF"
          },
          {
            code: "360281",
            name: "\u4E50\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3603",
        name: "\u840D\u4E61\u5E02",
        children: [
          {
            code: "360302",
            name: "\u5B89\u6E90\u533A"
          },
          {
            code: "360313",
            name: "\u6E58\u4E1C\u533A"
          },
          {
            code: "360321",
            name: "\u83B2\u82B1\u53BF"
          },
          {
            code: "360322",
            name: "\u4E0A\u6817\u53BF"
          },
          {
            code: "360323",
            name: "\u82A6\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "3604",
        name: "\u4E5D\u6C5F\u5E02",
        children: [
          {
            code: "360402",
            name: "\u6FC2\u6EAA\u533A"
          },
          {
            code: "360403",
            name: "\u6D54\u9633\u533A"
          },
          {
            code: "360404",
            name: "\u67F4\u6851\u533A"
          },
          {
            code: "360423",
            name: "\u6B66\u5B81\u53BF"
          },
          {
            code: "360424",
            name: "\u4FEE\u6C34\u53BF"
          },
          {
            code: "360425",
            name: "\u6C38\u4FEE\u53BF"
          },
          {
            code: "360426",
            name: "\u5FB7\u5B89\u53BF"
          },
          {
            code: "360428",
            name: "\u90FD\u660C\u53BF"
          },
          {
            code: "360429",
            name: "\u6E56\u53E3\u53BF"
          },
          {
            code: "360430",
            name: "\u5F6D\u6CFD\u53BF"
          },
          {
            code: "360481",
            name: "\u745E\u660C\u5E02"
          },
          {
            code: "360482",
            name: "\u5171\u9752\u57CE\u5E02"
          },
          {
            code: "360483",
            name: "\u5E90\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3605",
        name: "\u65B0\u4F59\u5E02",
        children: [
          {
            code: "360502",
            name: "\u6E1D\u6C34\u533A"
          },
          {
            code: "360521",
            name: "\u5206\u5B9C\u53BF"
          }
        ]
      },
      {
        code: "3606",
        name: "\u9E70\u6F6D\u5E02",
        children: [
          {
            code: "360602",
            name: "\u6708\u6E56\u533A"
          },
          {
            code: "360603",
            name: "\u4F59\u6C5F\u533A"
          },
          {
            code: "360681",
            name: "\u8D35\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "3607",
        name: "\u8D63\u5DDE\u5E02",
        children: [
          {
            code: "360702",
            name: "\u7AE0\u8D21\u533A"
          },
          {
            code: "360703",
            name: "\u5357\u5EB7\u533A"
          },
          {
            code: "360704",
            name: "\u8D63\u53BF\u533A"
          },
          {
            code: "360722",
            name: "\u4FE1\u4E30\u53BF"
          },
          {
            code: "360723",
            name: "\u5927\u4F59\u53BF"
          },
          {
            code: "360724",
            name: "\u4E0A\u72B9\u53BF"
          },
          {
            code: "360725",
            name: "\u5D07\u4E49\u53BF"
          },
          {
            code: "360726",
            name: "\u5B89\u8FDC\u53BF"
          },
          {
            code: "360728",
            name: "\u5B9A\u5357\u53BF"
          },
          {
            code: "360729",
            name: "\u5168\u5357\u53BF"
          },
          {
            code: "360730",
            name: "\u5B81\u90FD\u53BF"
          },
          {
            code: "360731",
            name: "\u4E8E\u90FD\u53BF"
          },
          {
            code: "360732",
            name: "\u5174\u56FD\u53BF"
          },
          {
            code: "360733",
            name: "\u4F1A\u660C\u53BF"
          },
          {
            code: "360734",
            name: "\u5BFB\u4E4C\u53BF"
          },
          {
            code: "360735",
            name: "\u77F3\u57CE\u53BF"
          },
          {
            code: "360781",
            name: "\u745E\u91D1\u5E02"
          },
          {
            code: "360783",
            name: "\u9F99\u5357\u5E02"
          }
        ]
      },
      {
        code: "3608",
        name: "\u5409\u5B89\u5E02",
        children: [
          {
            code: "360802",
            name: "\u5409\u5DDE\u533A"
          },
          {
            code: "360803",
            name: "\u9752\u539F\u533A"
          },
          {
            code: "360821",
            name: "\u5409\u5B89\u53BF"
          },
          {
            code: "360822",
            name: "\u5409\u6C34\u53BF"
          },
          {
            code: "360823",
            name: "\u5CE1\u6C5F\u53BF"
          },
          {
            code: "360824",
            name: "\u65B0\u5E72\u53BF"
          },
          {
            code: "360825",
            name: "\u6C38\u4E30\u53BF"
          },
          {
            code: "360826",
            name: "\u6CF0\u548C\u53BF"
          },
          {
            code: "360827",
            name: "\u9042\u5DDD\u53BF"
          },
          {
            code: "360828",
            name: "\u4E07\u5B89\u53BF"
          },
          {
            code: "360829",
            name: "\u5B89\u798F\u53BF"
          },
          {
            code: "360830",
            name: "\u6C38\u65B0\u53BF"
          },
          {
            code: "360881",
            name: "\u4E95\u5188\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3609",
        name: "\u5B9C\u6625\u5E02",
        children: [
          {
            code: "360902",
            name: "\u8881\u5DDE\u533A"
          },
          {
            code: "360921",
            name: "\u5949\u65B0\u53BF"
          },
          {
            code: "360922",
            name: "\u4E07\u8F7D\u53BF"
          },
          {
            code: "360923",
            name: "\u4E0A\u9AD8\u53BF"
          },
          {
            code: "360924",
            name: "\u5B9C\u4E30\u53BF"
          },
          {
            code: "360925",
            name: "\u9756\u5B89\u53BF"
          },
          {
            code: "360926",
            name: "\u94DC\u9F13\u53BF"
          },
          {
            code: "360981",
            name: "\u4E30\u57CE\u5E02"
          },
          {
            code: "360982",
            name: "\u6A1F\u6811\u5E02"
          },
          {
            code: "360983",
            name: "\u9AD8\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3610",
        name: "\u629A\u5DDE\u5E02",
        children: [
          {
            code: "361002",
            name: "\u4E34\u5DDD\u533A"
          },
          {
            code: "361003",
            name: "\u4E1C\u4E61\u533A"
          },
          {
            code: "361021",
            name: "\u5357\u57CE\u53BF"
          },
          {
            code: "361022",
            name: "\u9ECE\u5DDD\u53BF"
          },
          {
            code: "361023",
            name: "\u5357\u4E30\u53BF"
          },
          {
            code: "361024",
            name: "\u5D07\u4EC1\u53BF"
          },
          {
            code: "361025",
            name: "\u4E50\u5B89\u53BF"
          },
          {
            code: "361026",
            name: "\u5B9C\u9EC4\u53BF"
          },
          {
            code: "361027",
            name: "\u91D1\u6EAA\u53BF"
          },
          {
            code: "361028",
            name: "\u8D44\u6EAA\u53BF"
          },
          {
            code: "361030",
            name: "\u5E7F\u660C\u53BF"
          }
        ]
      },
      {
        code: "3611",
        name: "\u4E0A\u9976\u5E02",
        children: [
          {
            code: "361102",
            name: "\u4FE1\u5DDE\u533A"
          },
          {
            code: "361103",
            name: "\u5E7F\u4E30\u533A"
          },
          {
            code: "361104",
            name: "\u5E7F\u4FE1\u533A"
          },
          {
            code: "361123",
            name: "\u7389\u5C71\u53BF"
          },
          {
            code: "361124",
            name: "\u94C5\u5C71\u53BF"
          },
          {
            code: "361125",
            name: "\u6A2A\u5CF0\u53BF"
          },
          {
            code: "361126",
            name: "\u5F0B\u9633\u53BF"
          },
          {
            code: "361127",
            name: "\u4F59\u5E72\u53BF"
          },
          {
            code: "361128",
            name: "\u9131\u9633\u53BF"
          },
          {
            code: "361129",
            name: "\u4E07\u5E74\u53BF"
          },
          {
            code: "361130",
            name: "\u5A7A\u6E90\u53BF"
          },
          {
            code: "361181",
            name: "\u5FB7\u5174\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "37",
    name: "\u5C71\u4E1C\u7701",
    children: [
      {
        code: "3701",
        name: "\u6D4E\u5357\u5E02",
        children: [
          {
            code: "370102",
            name: "\u5386\u4E0B\u533A"
          },
          {
            code: "370103",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "370104",
            name: "\u69D0\u836B\u533A"
          },
          {
            code: "370105",
            name: "\u5929\u6865\u533A"
          },
          {
            code: "370112",
            name: "\u5386\u57CE\u533A"
          },
          {
            code: "370113",
            name: "\u957F\u6E05\u533A"
          },
          {
            code: "370114",
            name: "\u7AE0\u4E18\u533A"
          },
          {
            code: "370115",
            name: "\u6D4E\u9633\u533A"
          },
          {
            code: "370116",
            name: "\u83B1\u829C\u533A"
          },
          {
            code: "370117",
            name: "\u94A2\u57CE\u533A"
          },
          {
            code: "370124",
            name: "\u5E73\u9634\u53BF"
          },
          {
            code: "370126",
            name: "\u5546\u6CB3\u53BF"
          },
          {
            code: "370171",
            name: "\u6D4E\u5357\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3702",
        name: "\u9752\u5C9B\u5E02",
        children: [
          {
            code: "370202",
            name: "\u5E02\u5357\u533A"
          },
          {
            code: "370203",
            name: "\u5E02\u5317\u533A"
          },
          {
            code: "370211",
            name: "\u9EC4\u5C9B\u533A"
          },
          {
            code: "370212",
            name: "\u5D02\u5C71\u533A"
          },
          {
            code: "370213",
            name: "\u674E\u6CA7\u533A"
          },
          {
            code: "370214",
            name: "\u57CE\u9633\u533A"
          },
          {
            code: "370215",
            name: "\u5373\u58A8\u533A"
          },
          {
            code: "370271",
            name: "\u9752\u5C9B\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370281",
            name: "\u80F6\u5DDE\u5E02"
          },
          {
            code: "370283",
            name: "\u5E73\u5EA6\u5E02"
          },
          {
            code: "370285",
            name: "\u83B1\u897F\u5E02"
          }
        ]
      },
      {
        code: "3703",
        name: "\u6DC4\u535A\u5E02",
        children: [
          {
            code: "370302",
            name: "\u6DC4\u5DDD\u533A"
          },
          {
            code: "370303",
            name: "\u5F20\u5E97\u533A"
          },
          {
            code: "370304",
            name: "\u535A\u5C71\u533A"
          },
          {
            code: "370305",
            name: "\u4E34\u6DC4\u533A"
          },
          {
            code: "370306",
            name: "\u5468\u6751\u533A"
          },
          {
            code: "370321",
            name: "\u6853\u53F0\u53BF"
          },
          {
            code: "370322",
            name: "\u9AD8\u9752\u53BF"
          },
          {
            code: "370323",
            name: "\u6C82\u6E90\u53BF"
          }
        ]
      },
      {
        code: "3704",
        name: "\u67A3\u5E84\u5E02",
        children: [
          {
            code: "370402",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "370403",
            name: "\u859B\u57CE\u533A"
          },
          {
            code: "370404",
            name: "\u5CC4\u57CE\u533A"
          },
          {
            code: "370405",
            name: "\u53F0\u513F\u5E84\u533A"
          },
          {
            code: "370406",
            name: "\u5C71\u4EAD\u533A"
          },
          {
            code: "370481",
            name: "\u6ED5\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3705",
        name: "\u4E1C\u8425\u5E02",
        children: [
          {
            code: "370502",
            name: "\u4E1C\u8425\u533A"
          },
          {
            code: "370503",
            name: "\u6CB3\u53E3\u533A"
          },
          {
            code: "370505",
            name: "\u57A6\u5229\u533A"
          },
          {
            code: "370522",
            name: "\u5229\u6D25\u53BF"
          },
          {
            code: "370523",
            name: "\u5E7F\u9976\u53BF"
          },
          {
            code: "370571",
            name: "\u4E1C\u8425\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370572",
            name: "\u4E1C\u8425\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3706",
        name: "\u70DF\u53F0\u5E02",
        children: [
          {
            code: "370602",
            name: "\u829D\u7F58\u533A"
          },
          {
            code: "370611",
            name: "\u798F\u5C71\u533A"
          },
          {
            code: "370612",
            name: "\u725F\u5E73\u533A"
          },
          {
            code: "370613",
            name: "\u83B1\u5C71\u533A"
          },
          {
            code: "370614",
            name: "\u84EC\u83B1\u533A"
          },
          {
            code: "370671",
            name: "\u70DF\u53F0\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370672",
            name: "\u70DF\u53F0\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370681",
            name: "\u9F99\u53E3\u5E02"
          },
          {
            code: "370682",
            name: "\u83B1\u9633\u5E02"
          },
          {
            code: "370683",
            name: "\u83B1\u5DDE\u5E02"
          },
          {
            code: "370685",
            name: "\u62DB\u8FDC\u5E02"
          },
          {
            code: "370686",
            name: "\u6816\u971E\u5E02"
          },
          {
            code: "370687",
            name: "\u6D77\u9633\u5E02"
          }
        ]
      },
      {
        code: "3707",
        name: "\u6F4D\u574A\u5E02",
        children: [
          {
            code: "370702",
            name: "\u6F4D\u57CE\u533A"
          },
          {
            code: "370703",
            name: "\u5BD2\u4EAD\u533A"
          },
          {
            code: "370704",
            name: "\u574A\u5B50\u533A"
          },
          {
            code: "370705",
            name: "\u594E\u6587\u533A"
          },
          {
            code: "370724",
            name: "\u4E34\u6710\u53BF"
          },
          {
            code: "370725",
            name: "\u660C\u4E50\u53BF"
          },
          {
            code: "370772",
            name: "\u6F4D\u574A\u6EE8\u6D77\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370781",
            name: "\u9752\u5DDE\u5E02"
          },
          {
            code: "370782",
            name: "\u8BF8\u57CE\u5E02"
          },
          {
            code: "370783",
            name: "\u5BFF\u5149\u5E02"
          },
          {
            code: "370784",
            name: "\u5B89\u4E18\u5E02"
          },
          {
            code: "370785",
            name: "\u9AD8\u5BC6\u5E02"
          },
          {
            code: "370786",
            name: "\u660C\u9091\u5E02"
          }
        ]
      },
      {
        code: "3708",
        name: "\u6D4E\u5B81\u5E02",
        children: [
          {
            code: "370811",
            name: "\u4EFB\u57CE\u533A"
          },
          {
            code: "370812",
            name: "\u5156\u5DDE\u533A"
          },
          {
            code: "370826",
            name: "\u5FAE\u5C71\u53BF"
          },
          {
            code: "370827",
            name: "\u9C7C\u53F0\u53BF"
          },
          {
            code: "370828",
            name: "\u91D1\u4E61\u53BF"
          },
          {
            code: "370829",
            name: "\u5609\u7965\u53BF"
          },
          {
            code: "370830",
            name: "\u6C76\u4E0A\u53BF"
          },
          {
            code: "370831",
            name: "\u6CD7\u6C34\u53BF"
          },
          {
            code: "370832",
            name: "\u6881\u5C71\u53BF"
          },
          {
            code: "370871",
            name: "\u6D4E\u5B81\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370881",
            name: "\u66F2\u961C\u5E02"
          },
          {
            code: "370883",
            name: "\u90B9\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3709",
        name: "\u6CF0\u5B89\u5E02",
        children: [
          {
            code: "370902",
            name: "\u6CF0\u5C71\u533A"
          },
          {
            code: "370911",
            name: "\u5CB1\u5CB3\u533A"
          },
          {
            code: "370921",
            name: "\u5B81\u9633\u53BF"
          },
          {
            code: "370923",
            name: "\u4E1C\u5E73\u53BF"
          },
          {
            code: "370982",
            name: "\u65B0\u6CF0\u5E02"
          },
          {
            code: "370983",
            name: "\u80A5\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3710",
        name: "\u5A01\u6D77\u5E02",
        children: [
          {
            code: "371002",
            name: "\u73AF\u7FE0\u533A"
          },
          {
            code: "371003",
            name: "\u6587\u767B\u533A"
          },
          {
            code: "371071",
            name: "\u5A01\u6D77\u706B\u70AC\u9AD8\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "371072",
            name: "\u5A01\u6D77\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371073",
            name: "\u5A01\u6D77\u4E34\u6E2F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371082",
            name: "\u8363\u6210\u5E02"
          },
          {
            code: "371083",
            name: "\u4E73\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3711",
        name: "\u65E5\u7167\u5E02",
        children: [
          {
            code: "371102",
            name: "\u4E1C\u6E2F\u533A"
          },
          {
            code: "371103",
            name: "\u5C9A\u5C71\u533A"
          },
          {
            code: "371121",
            name: "\u4E94\u83B2\u53BF"
          },
          {
            code: "371122",
            name: "\u8392\u53BF"
          },
          {
            code: "371171",
            name: "\u65E5\u7167\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3713",
        name: "\u4E34\u6C82\u5E02",
        children: [
          {
            code: "371302",
            name: "\u5170\u5C71\u533A"
          },
          {
            code: "371311",
            name: "\u7F57\u5E84\u533A"
          },
          {
            code: "371312",
            name: "\u6CB3\u4E1C\u533A"
          },
          {
            code: "371321",
            name: "\u6C82\u5357\u53BF"
          },
          {
            code: "371322",
            name: "\u90EF\u57CE\u53BF"
          },
          {
            code: "371323",
            name: "\u6C82\u6C34\u53BF"
          },
          {
            code: "371324",
            name: "\u5170\u9675\u53BF"
          },
          {
            code: "371325",
            name: "\u8D39\u53BF"
          },
          {
            code: "371326",
            name: "\u5E73\u9091\u53BF"
          },
          {
            code: "371327",
            name: "\u8392\u5357\u53BF"
          },
          {
            code: "371328",
            name: "\u8499\u9634\u53BF"
          },
          {
            code: "371329",
            name: "\u4E34\u6CAD\u53BF"
          },
          {
            code: "371371",
            name: "\u4E34\u6C82\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3714",
        name: "\u5FB7\u5DDE\u5E02",
        children: [
          {
            code: "371402",
            name: "\u5FB7\u57CE\u533A"
          },
          {
            code: "371403",
            name: "\u9675\u57CE\u533A"
          },
          {
            code: "371422",
            name: "\u5B81\u6D25\u53BF"
          },
          {
            code: "371423",
            name: "\u5E86\u4E91\u53BF"
          },
          {
            code: "371424",
            name: "\u4E34\u9091\u53BF"
          },
          {
            code: "371425",
            name: "\u9F50\u6CB3\u53BF"
          },
          {
            code: "371426",
            name: "\u5E73\u539F\u53BF"
          },
          {
            code: "371427",
            name: "\u590F\u6D25\u53BF"
          },
          {
            code: "371428",
            name: "\u6B66\u57CE\u53BF"
          },
          {
            code: "371471",
            name: "\u5FB7\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371472",
            name: "\u5FB7\u5DDE\u8FD0\u6CB3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "371481",
            name: "\u4E50\u9675\u5E02"
          },
          {
            code: "371482",
            name: "\u79B9\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3715",
        name: "\u804A\u57CE\u5E02",
        children: [
          {
            code: "371502",
            name: "\u4E1C\u660C\u5E9C\u533A"
          },
          {
            code: "371503",
            name: "\u830C\u5E73\u533A"
          },
          {
            code: "371521",
            name: "\u9633\u8C37\u53BF"
          },
          {
            code: "371522",
            name: "\u8398\u53BF"
          },
          {
            code: "371524",
            name: "\u4E1C\u963F\u53BF"
          },
          {
            code: "371525",
            name: "\u51A0\u53BF"
          },
          {
            code: "371526",
            name: "\u9AD8\u5510\u53BF"
          },
          {
            code: "371581",
            name: "\u4E34\u6E05\u5E02"
          }
        ]
      },
      {
        code: "3716",
        name: "\u6EE8\u5DDE\u5E02",
        children: [
          {
            code: "371602",
            name: "\u6EE8\u57CE\u533A"
          },
          {
            code: "371603",
            name: "\u6CBE\u5316\u533A"
          },
          {
            code: "371621",
            name: "\u60E0\u6C11\u53BF"
          },
          {
            code: "371622",
            name: "\u9633\u4FE1\u53BF"
          },
          {
            code: "371623",
            name: "\u65E0\u68E3\u53BF"
          },
          {
            code: "371625",
            name: "\u535A\u5174\u53BF"
          },
          {
            code: "371681",
            name: "\u90B9\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3717",
        name: "\u83CF\u6CFD\u5E02",
        children: [
          {
            code: "371702",
            name: "\u7261\u4E39\u533A"
          },
          {
            code: "371703",
            name: "\u5B9A\u9676\u533A"
          },
          {
            code: "371721",
            name: "\u66F9\u53BF"
          },
          {
            code: "371722",
            name: "\u5355\u53BF"
          },
          {
            code: "371723",
            name: "\u6210\u6B66\u53BF"
          },
          {
            code: "371724",
            name: "\u5DE8\u91CE\u53BF"
          },
          {
            code: "371725",
            name: "\u90D3\u57CE\u53BF"
          },
          {
            code: "371726",
            name: "\u9104\u57CE\u53BF"
          },
          {
            code: "371728",
            name: "\u4E1C\u660E\u53BF"
          },
          {
            code: "371771",
            name: "\u83CF\u6CFD\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371772",
            name: "\u83CF\u6CFD\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "41",
    name: "\u6CB3\u5357\u7701",
    children: [
      {
        code: "4101",
        name: "\u90D1\u5DDE\u5E02",
        children: [
          {
            code: "410102",
            name: "\u4E2D\u539F\u533A"
          },
          {
            code: "410103",
            name: "\u4E8C\u4E03\u533A"
          },
          {
            code: "410104",
            name: "\u7BA1\u57CE\u56DE\u65CF\u533A"
          },
          {
            code: "410105",
            name: "\u91D1\u6C34\u533A"
          },
          {
            code: "410106",
            name: "\u4E0A\u8857\u533A"
          },
          {
            code: "410108",
            name: "\u60E0\u6D4E\u533A"
          },
          {
            code: "410122",
            name: "\u4E2D\u725F\u53BF"
          },
          {
            code: "410171",
            name: "\u90D1\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "410172",
            name: "\u90D1\u5DDE\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410173",
            name: "\u90D1\u5DDE\u822A\u7A7A\u6E2F\u7ECF\u6D4E\u7EFC\u5408\u5B9E\u9A8C\u533A"
          },
          {
            code: "410181",
            name: "\u5DE9\u4E49\u5E02"
          },
          {
            code: "410182",
            name: "\u8365\u9633\u5E02"
          },
          {
            code: "410183",
            name: "\u65B0\u5BC6\u5E02"
          },
          {
            code: "410184",
            name: "\u65B0\u90D1\u5E02"
          },
          {
            code: "410185",
            name: "\u767B\u5C01\u5E02"
          }
        ]
      },
      {
        code: "4102",
        name: "\u5F00\u5C01\u5E02",
        children: [
          {
            code: "410202",
            name: "\u9F99\u4EAD\u533A"
          },
          {
            code: "410203",
            name: "\u987A\u6CB3\u56DE\u65CF\u533A"
          },
          {
            code: "410204",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "410205",
            name: "\u79B9\u738B\u53F0\u533A"
          },
          {
            code: "410212",
            name: "\u7965\u7B26\u533A"
          },
          {
            code: "410221",
            name: "\u675E\u53BF"
          },
          {
            code: "410222",
            name: "\u901A\u8BB8\u53BF"
          },
          {
            code: "410223",
            name: "\u5C09\u6C0F\u53BF"
          },
          {
            code: "410225",
            name: "\u5170\u8003\u53BF"
          }
        ]
      },
      {
        code: "4103",
        name: "\u6D1B\u9633\u5E02",
        children: [
          {
            code: "410302",
            name: "\u8001\u57CE\u533A"
          },
          {
            code: "410303",
            name: "\u897F\u5DE5\u533A"
          },
          {
            code: "410304",
            name: "\u700D\u6CB3\u56DE\u65CF\u533A"
          },
          {
            code: "410305",
            name: "\u6DA7\u897F\u533A"
          },
          {
            code: "410306",
            name: "\u5409\u5229\u533A"
          },
          {
            code: "410311",
            name: "\u6D1B\u9F99\u533A"
          },
          {
            code: "410322",
            name: "\u5B5F\u6D25\u53BF"
          },
          {
            code: "410323",
            name: "\u65B0\u5B89\u53BF"
          },
          {
            code: "410324",
            name: "\u683E\u5DDD\u53BF"
          },
          {
            code: "410325",
            name: "\u5D69\u53BF"
          },
          {
            code: "410326",
            name: "\u6C5D\u9633\u53BF"
          },
          {
            code: "410327",
            name: "\u5B9C\u9633\u53BF"
          },
          {
            code: "410328",
            name: "\u6D1B\u5B81\u53BF"
          },
          {
            code: "410329",
            name: "\u4F0A\u5DDD\u53BF"
          },
          {
            code: "410371",
            name: "\u6D1B\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410381",
            name: "\u5043\u5E08\u5E02"
          }
        ]
      },
      {
        code: "4104",
        name: "\u5E73\u9876\u5C71\u5E02",
        children: [
          {
            code: "410402",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "410403",
            name: "\u536B\u4E1C\u533A"
          },
          {
            code: "410404",
            name: "\u77F3\u9F99\u533A"
          },
          {
            code: "410411",
            name: "\u6E5B\u6CB3\u533A"
          },
          {
            code: "410421",
            name: "\u5B9D\u4E30\u53BF"
          },
          {
            code: "410422",
            name: "\u53F6\u53BF"
          },
          {
            code: "410423",
            name: "\u9C81\u5C71\u53BF"
          },
          {
            code: "410425",
            name: "\u90CF\u53BF"
          },
          {
            code: "410471",
            name: "\u5E73\u9876\u5C71\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410472",
            name: "\u5E73\u9876\u5C71\u5E02\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410481",
            name: "\u821E\u94A2\u5E02"
          },
          {
            code: "410482",
            name: "\u6C5D\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4105",
        name: "\u5B89\u9633\u5E02",
        children: [
          {
            code: "410502",
            name: "\u6587\u5CF0\u533A"
          },
          {
            code: "410503",
            name: "\u5317\u5173\u533A"
          },
          {
            code: "410505",
            name: "\u6BB7\u90FD\u533A"
          },
          {
            code: "410506",
            name: "\u9F99\u5B89\u533A"
          },
          {
            code: "410522",
            name: "\u5B89\u9633\u53BF"
          },
          {
            code: "410523",
            name: "\u6C64\u9634\u53BF"
          },
          {
            code: "410526",
            name: "\u6ED1\u53BF"
          },
          {
            code: "410527",
            name: "\u5185\u9EC4\u53BF"
          },
          {
            code: "410571",
            name: "\u5B89\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410581",
            name: "\u6797\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4106",
        name: "\u9E64\u58C1\u5E02",
        children: [
          {
            code: "410602",
            name: "\u9E64\u5C71\u533A"
          },
          {
            code: "410603",
            name: "\u5C71\u57CE\u533A"
          },
          {
            code: "410611",
            name: "\u6DC7\u6EE8\u533A"
          },
          {
            code: "410621",
            name: "\u6D5A\u53BF"
          },
          {
            code: "410622",
            name: "\u6DC7\u53BF"
          },
          {
            code: "410671",
            name: "\u9E64\u58C1\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4107",
        name: "\u65B0\u4E61\u5E02",
        children: [
          {
            code: "410702",
            name: "\u7EA2\u65D7\u533A"
          },
          {
            code: "410703",
            name: "\u536B\u6EE8\u533A"
          },
          {
            code: "410704",
            name: "\u51E4\u6CC9\u533A"
          },
          {
            code: "410711",
            name: "\u7267\u91CE\u533A"
          },
          {
            code: "410721",
            name: "\u65B0\u4E61\u53BF"
          },
          {
            code: "410724",
            name: "\u83B7\u5609\u53BF"
          },
          {
            code: "410725",
            name: "\u539F\u9633\u53BF"
          },
          {
            code: "410726",
            name: "\u5EF6\u6D25\u53BF"
          },
          {
            code: "410727",
            name: "\u5C01\u4E18\u53BF"
          },
          {
            code: "410771",
            name: "\u65B0\u4E61\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410772",
            name: "\u65B0\u4E61\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "410773",
            name: "\u65B0\u4E61\u5E02\u5E73\u539F\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410781",
            name: "\u536B\u8F89\u5E02"
          },
          {
            code: "410782",
            name: "\u8F89\u53BF\u5E02"
          },
          {
            code: "410783",
            name: "\u957F\u57A3\u5E02"
          }
        ]
      },
      {
        code: "4108",
        name: "\u7126\u4F5C\u5E02",
        children: [
          {
            code: "410802",
            name: "\u89E3\u653E\u533A"
          },
          {
            code: "410803",
            name: "\u4E2D\u7AD9\u533A"
          },
          {
            code: "410804",
            name: "\u9A6C\u6751\u533A"
          },
          {
            code: "410811",
            name: "\u5C71\u9633\u533A"
          },
          {
            code: "410821",
            name: "\u4FEE\u6B66\u53BF"
          },
          {
            code: "410822",
            name: "\u535A\u7231\u53BF"
          },
          {
            code: "410823",
            name: "\u6B66\u965F\u53BF"
          },
          {
            code: "410825",
            name: "\u6E29\u53BF"
          },
          {
            code: "410871",
            name: "\u7126\u4F5C\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410882",
            name: "\u6C81\u9633\u5E02"
          },
          {
            code: "410883",
            name: "\u5B5F\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4109",
        name: "\u6FEE\u9633\u5E02",
        children: [
          {
            code: "410902",
            name: "\u534E\u9F99\u533A"
          },
          {
            code: "410922",
            name: "\u6E05\u4E30\u53BF"
          },
          {
            code: "410923",
            name: "\u5357\u4E50\u53BF"
          },
          {
            code: "410926",
            name: "\u8303\u53BF"
          },
          {
            code: "410927",
            name: "\u53F0\u524D\u53BF"
          },
          {
            code: "410928",
            name: "\u6FEE\u9633\u53BF"
          },
          {
            code: "410971",
            name: "\u6CB3\u5357\u6FEE\u9633\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "410972",
            name: "\u6FEE\u9633\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4110",
        name: "\u8BB8\u660C\u5E02",
        children: [
          {
            code: "411002",
            name: "\u9B4F\u90FD\u533A"
          },
          {
            code: "411003",
            name: "\u5EFA\u5B89\u533A"
          },
          {
            code: "411024",
            name: "\u9122\u9675\u53BF"
          },
          {
            code: "411025",
            name: "\u8944\u57CE\u53BF"
          },
          {
            code: "411071",
            name: "\u8BB8\u660C\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "411081",
            name: "\u79B9\u5DDE\u5E02"
          },
          {
            code: "411082",
            name: "\u957F\u845B\u5E02"
          }
        ]
      },
      {
        code: "4111",
        name: "\u6F2F\u6CB3\u5E02",
        children: [
          {
            code: "411102",
            name: "\u6E90\u6C47\u533A"
          },
          {
            code: "411103",
            name: "\u90FE\u57CE\u533A"
          },
          {
            code: "411104",
            name: "\u53EC\u9675\u533A"
          },
          {
            code: "411121",
            name: "\u821E\u9633\u53BF"
          },
          {
            code: "411122",
            name: "\u4E34\u988D\u53BF"
          },
          {
            code: "411171",
            name: "\u6F2F\u6CB3\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4112",
        name: "\u4E09\u95E8\u5CE1\u5E02",
        children: [
          {
            code: "411202",
            name: "\u6E56\u6EE8\u533A"
          },
          {
            code: "411203",
            name: "\u9655\u5DDE\u533A"
          },
          {
            code: "411221",
            name: "\u6E11\u6C60\u53BF"
          },
          {
            code: "411224",
            name: "\u5362\u6C0F\u53BF"
          },
          {
            code: "411271",
            name: "\u6CB3\u5357\u4E09\u95E8\u5CE1\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411281",
            name: "\u4E49\u9A6C\u5E02"
          },
          {
            code: "411282",
            name: "\u7075\u5B9D\u5E02"
          }
        ]
      },
      {
        code: "4113",
        name: "\u5357\u9633\u5E02",
        children: [
          {
            code: "411302",
            name: "\u5B9B\u57CE\u533A"
          },
          {
            code: "411303",
            name: "\u5367\u9F99\u533A"
          },
          {
            code: "411321",
            name: "\u5357\u53EC\u53BF"
          },
          {
            code: "411322",
            name: "\u65B9\u57CE\u53BF"
          },
          {
            code: "411323",
            name: "\u897F\u5CE1\u53BF"
          },
          {
            code: "411324",
            name: "\u9547\u5E73\u53BF"
          },
          {
            code: "411325",
            name: "\u5185\u4E61\u53BF"
          },
          {
            code: "411326",
            name: "\u6DC5\u5DDD\u53BF"
          },
          {
            code: "411327",
            name: "\u793E\u65D7\u53BF"
          },
          {
            code: "411328",
            name: "\u5510\u6CB3\u53BF"
          },
          {
            code: "411329",
            name: "\u65B0\u91CE\u53BF"
          },
          {
            code: "411330",
            name: "\u6850\u67CF\u53BF"
          },
          {
            code: "411371",
            name: "\u5357\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "411372",
            name: "\u5357\u9633\u5E02\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "411381",
            name: "\u9093\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4114",
        name: "\u5546\u4E18\u5E02",
        children: [
          {
            code: "411402",
            name: "\u6881\u56ED\u533A"
          },
          {
            code: "411403",
            name: "\u7762\u9633\u533A"
          },
          {
            code: "411421",
            name: "\u6C11\u6743\u53BF"
          },
          {
            code: "411422",
            name: "\u7762\u53BF"
          },
          {
            code: "411423",
            name: "\u5B81\u9675\u53BF"
          },
          {
            code: "411424",
            name: "\u67D8\u57CE\u53BF"
          },
          {
            code: "411425",
            name: "\u865E\u57CE\u53BF"
          },
          {
            code: "411426",
            name: "\u590F\u9091\u53BF"
          },
          {
            code: "411471",
            name: "\u8C6B\u4E1C\u7EFC\u5408\u7269\u6D41\u4EA7\u4E1A\u805A\u96C6\u533A"
          },
          {
            code: "411472",
            name: "\u6CB3\u5357\u5546\u4E18\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411481",
            name: "\u6C38\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4115",
        name: "\u4FE1\u9633\u5E02",
        children: [
          {
            code: "411502",
            name: "\u6D49\u6CB3\u533A"
          },
          {
            code: "411503",
            name: "\u5E73\u6865\u533A"
          },
          {
            code: "411521",
            name: "\u7F57\u5C71\u53BF"
          },
          {
            code: "411522",
            name: "\u5149\u5C71\u53BF"
          },
          {
            code: "411523",
            name: "\u65B0\u53BF"
          },
          {
            code: "411524",
            name: "\u5546\u57CE\u53BF"
          },
          {
            code: "411525",
            name: "\u56FA\u59CB\u53BF"
          },
          {
            code: "411526",
            name: "\u6F62\u5DDD\u53BF"
          },
          {
            code: "411527",
            name: "\u6DEE\u6EE8\u53BF"
          },
          {
            code: "411528",
            name: "\u606F\u53BF"
          },
          {
            code: "411571",
            name: "\u4FE1\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4116",
        name: "\u5468\u53E3\u5E02",
        children: [
          {
            code: "411602",
            name: "\u5DDD\u6C47\u533A"
          },
          {
            code: "411603",
            name: "\u6DEE\u9633\u533A"
          },
          {
            code: "411621",
            name: "\u6276\u6C9F\u53BF"
          },
          {
            code: "411622",
            name: "\u897F\u534E\u53BF"
          },
          {
            code: "411623",
            name: "\u5546\u6C34\u53BF"
          },
          {
            code: "411624",
            name: "\u6C88\u4E18\u53BF"
          },
          {
            code: "411625",
            name: "\u90F8\u57CE\u53BF"
          },
          {
            code: "411627",
            name: "\u592A\u5EB7\u53BF"
          },
          {
            code: "411628",
            name: "\u9E7F\u9091\u53BF"
          },
          {
            code: "411671",
            name: "\u6CB3\u5357\u5468\u53E3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411681",
            name: "\u9879\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4117",
        name: "\u9A7B\u9A6C\u5E97\u5E02",
        children: [
          {
            code: "411702",
            name: "\u9A7F\u57CE\u533A"
          },
          {
            code: "411721",
            name: "\u897F\u5E73\u53BF"
          },
          {
            code: "411722",
            name: "\u4E0A\u8521\u53BF"
          },
          {
            code: "411723",
            name: "\u5E73\u8206\u53BF"
          },
          {
            code: "411724",
            name: "\u6B63\u9633\u53BF"
          },
          {
            code: "411725",
            name: "\u786E\u5C71\u53BF"
          },
          {
            code: "411726",
            name: "\u6CCC\u9633\u53BF"
          },
          {
            code: "411727",
            name: "\u6C5D\u5357\u53BF"
          },
          {
            code: "411728",
            name: "\u9042\u5E73\u53BF"
          },
          {
            code: "411729",
            name: "\u65B0\u8521\u53BF"
          },
          {
            code: "411771",
            name: "\u6CB3\u5357\u9A7B\u9A6C\u5E97\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4190",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "419001",
            name: "\u6D4E\u6E90\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "42",
    name: "\u6E56\u5317\u7701",
    children: [
      {
        code: "4201",
        name: "\u6B66\u6C49\u5E02",
        children: [
          {
            code: "420102",
            name: "\u6C5F\u5CB8\u533A"
          },
          {
            code: "420103",
            name: "\u6C5F\u6C49\u533A"
          },
          {
            code: "420104",
            name: "\u785A\u53E3\u533A"
          },
          {
            code: "420105",
            name: "\u6C49\u9633\u533A"
          },
          {
            code: "420106",
            name: "\u6B66\u660C\u533A"
          },
          {
            code: "420107",
            name: "\u9752\u5C71\u533A"
          },
          {
            code: "420111",
            name: "\u6D2A\u5C71\u533A"
          },
          {
            code: "420112",
            name: "\u4E1C\u897F\u6E56\u533A"
          },
          {
            code: "420113",
            name: "\u6C49\u5357\u533A"
          },
          {
            code: "420114",
            name: "\u8521\u7538\u533A"
          },
          {
            code: "420115",
            name: "\u6C5F\u590F\u533A"
          },
          {
            code: "420116",
            name: "\u9EC4\u9642\u533A"
          },
          {
            code: "420117",
            name: "\u65B0\u6D32\u533A"
          }
        ]
      },
      {
        code: "4202",
        name: "\u9EC4\u77F3\u5E02",
        children: [
          {
            code: "420202",
            name: "\u9EC4\u77F3\u6E2F\u533A"
          },
          {
            code: "420203",
            name: "\u897F\u585E\u5C71\u533A"
          },
          {
            code: "420204",
            name: "\u4E0B\u9646\u533A"
          },
          {
            code: "420205",
            name: "\u94C1\u5C71\u533A"
          },
          {
            code: "420222",
            name: "\u9633\u65B0\u53BF"
          },
          {
            code: "420281",
            name: "\u5927\u51B6\u5E02"
          }
        ]
      },
      {
        code: "4203",
        name: "\u5341\u5830\u5E02",
        children: [
          {
            code: "420302",
            name: "\u8305\u7BAD\u533A"
          },
          {
            code: "420303",
            name: "\u5F20\u6E7E\u533A"
          },
          {
            code: "420304",
            name: "\u90E7\u9633\u533A"
          },
          {
            code: "420322",
            name: "\u90E7\u897F\u53BF"
          },
          {
            code: "420323",
            name: "\u7AF9\u5C71\u53BF"
          },
          {
            code: "420324",
            name: "\u7AF9\u6EAA\u53BF"
          },
          {
            code: "420325",
            name: "\u623F\u53BF"
          },
          {
            code: "420381",
            name: "\u4E39\u6C5F\u53E3\u5E02"
          }
        ]
      },
      {
        code: "4205",
        name: "\u5B9C\u660C\u5E02",
        children: [
          {
            code: "420502",
            name: "\u897F\u9675\u533A"
          },
          {
            code: "420503",
            name: "\u4F0D\u5BB6\u5C97\u533A"
          },
          {
            code: "420504",
            name: "\u70B9\u519B\u533A"
          },
          {
            code: "420505",
            name: "\u7307\u4EAD\u533A"
          },
          {
            code: "420506",
            name: "\u5937\u9675\u533A"
          },
          {
            code: "420525",
            name: "\u8FDC\u5B89\u53BF"
          },
          {
            code: "420526",
            name: "\u5174\u5C71\u53BF"
          },
          {
            code: "420527",
            name: "\u79ED\u5F52\u53BF"
          },
          {
            code: "420528",
            name: "\u957F\u9633\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "420529",
            name: "\u4E94\u5CF0\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "420581",
            name: "\u5B9C\u90FD\u5E02"
          },
          {
            code: "420582",
            name: "\u5F53\u9633\u5E02"
          },
          {
            code: "420583",
            name: "\u679D\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4206",
        name: "\u8944\u9633\u5E02",
        children: [
          {
            code: "420602",
            name: "\u8944\u57CE\u533A"
          },
          {
            code: "420606",
            name: "\u6A0A\u57CE\u533A"
          },
          {
            code: "420607",
            name: "\u8944\u5DDE\u533A"
          },
          {
            code: "420624",
            name: "\u5357\u6F33\u53BF"
          },
          {
            code: "420625",
            name: "\u8C37\u57CE\u53BF"
          },
          {
            code: "420626",
            name: "\u4FDD\u5EB7\u53BF"
          },
          {
            code: "420682",
            name: "\u8001\u6CB3\u53E3\u5E02"
          },
          {
            code: "420683",
            name: "\u67A3\u9633\u5E02"
          },
          {
            code: "420684",
            name: "\u5B9C\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4207",
        name: "\u9102\u5DDE\u5E02",
        children: [
          {
            code: "420702",
            name: "\u6881\u5B50\u6E56\u533A"
          },
          {
            code: "420703",
            name: "\u534E\u5BB9\u533A"
          },
          {
            code: "420704",
            name: "\u9102\u57CE\u533A"
          }
        ]
      },
      {
        code: "4208",
        name: "\u8346\u95E8\u5E02",
        children: [
          {
            code: "420802",
            name: "\u4E1C\u5B9D\u533A"
          },
          {
            code: "420804",
            name: "\u6387\u5200\u533A"
          },
          {
            code: "420822",
            name: "\u6C99\u6D0B\u53BF"
          },
          {
            code: "420881",
            name: "\u949F\u7965\u5E02"
          },
          {
            code: "420882",
            name: "\u4EAC\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4209",
        name: "\u5B5D\u611F\u5E02",
        children: [
          {
            code: "420902",
            name: "\u5B5D\u5357\u533A"
          },
          {
            code: "420921",
            name: "\u5B5D\u660C\u53BF"
          },
          {
            code: "420922",
            name: "\u5927\u609F\u53BF"
          },
          {
            code: "420923",
            name: "\u4E91\u68A6\u53BF"
          },
          {
            code: "420981",
            name: "\u5E94\u57CE\u5E02"
          },
          {
            code: "420982",
            name: "\u5B89\u9646\u5E02"
          },
          {
            code: "420984",
            name: "\u6C49\u5DDD\u5E02"
          }
        ]
      },
      {
        code: "4210",
        name: "\u8346\u5DDE\u5E02",
        children: [
          {
            code: "421002",
            name: "\u6C99\u5E02\u533A"
          },
          {
            code: "421003",
            name: "\u8346\u5DDE\u533A"
          },
          {
            code: "421022",
            name: "\u516C\u5B89\u53BF"
          },
          {
            code: "421023",
            name: "\u76D1\u5229\u53BF"
          },
          {
            code: "421024",
            name: "\u6C5F\u9675\u53BF"
          },
          {
            code: "421071",
            name: "\u8346\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "421081",
            name: "\u77F3\u9996\u5E02"
          },
          {
            code: "421083",
            name: "\u6D2A\u6E56\u5E02"
          },
          {
            code: "421087",
            name: "\u677E\u6ECB\u5E02"
          }
        ]
      },
      {
        code: "4211",
        name: "\u9EC4\u5188\u5E02",
        children: [
          {
            code: "421102",
            name: "\u9EC4\u5DDE\u533A"
          },
          {
            code: "421121",
            name: "\u56E2\u98CE\u53BF"
          },
          {
            code: "421122",
            name: "\u7EA2\u5B89\u53BF"
          },
          {
            code: "421123",
            name: "\u7F57\u7530\u53BF"
          },
          {
            code: "421124",
            name: "\u82F1\u5C71\u53BF"
          },
          {
            code: "421125",
            name: "\u6D60\u6C34\u53BF"
          },
          {
            code: "421126",
            name: "\u8572\u6625\u53BF"
          },
          {
            code: "421127",
            name: "\u9EC4\u6885\u53BF"
          },
          {
            code: "421171",
            name: "\u9F99\u611F\u6E56\u7BA1\u7406\u533A"
          },
          {
            code: "421181",
            name: "\u9EBB\u57CE\u5E02"
          },
          {
            code: "421182",
            name: "\u6B66\u7A74\u5E02"
          }
        ]
      },
      {
        code: "4212",
        name: "\u54B8\u5B81\u5E02",
        children: [
          {
            code: "421202",
            name: "\u54B8\u5B89\u533A"
          },
          {
            code: "421221",
            name: "\u5609\u9C7C\u53BF"
          },
          {
            code: "421222",
            name: "\u901A\u57CE\u53BF"
          },
          {
            code: "421223",
            name: "\u5D07\u9633\u53BF"
          },
          {
            code: "421224",
            name: "\u901A\u5C71\u53BF"
          },
          {
            code: "421281",
            name: "\u8D64\u58C1\u5E02"
          }
        ]
      },
      {
        code: "4213",
        name: "\u968F\u5DDE\u5E02",
        children: [
          {
            code: "421303",
            name: "\u66FE\u90FD\u533A"
          },
          {
            code: "421321",
            name: "\u968F\u53BF"
          },
          {
            code: "421381",
            name: "\u5E7F\u6C34\u5E02"
          }
        ]
      },
      {
        code: "4228",
        name: "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "422801",
            name: "\u6069\u65BD\u5E02"
          },
          {
            code: "422802",
            name: "\u5229\u5DDD\u5E02"
          },
          {
            code: "422822",
            name: "\u5EFA\u59CB\u53BF"
          },
          {
            code: "422823",
            name: "\u5DF4\u4E1C\u53BF"
          },
          {
            code: "422825",
            name: "\u5BA3\u6069\u53BF"
          },
          {
            code: "422826",
            name: "\u54B8\u4E30\u53BF"
          },
          {
            code: "422827",
            name: "\u6765\u51E4\u53BF"
          },
          {
            code: "422828",
            name: "\u9E64\u5CF0\u53BF"
          }
        ]
      },
      {
        code: "4290",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "429004",
            name: "\u4ED9\u6843\u5E02"
          },
          {
            code: "429005",
            name: "\u6F5C\u6C5F\u5E02"
          },
          {
            code: "429006",
            name: "\u5929\u95E8\u5E02"
          },
          {
            code: "429021",
            name: "\u795E\u519C\u67B6\u6797\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "43",
    name: "\u6E56\u5357\u7701",
    children: [
      {
        code: "4301",
        name: "\u957F\u6C99\u5E02",
        children: [
          {
            code: "430102",
            name: "\u8299\u84C9\u533A"
          },
          {
            code: "430103",
            name: "\u5929\u5FC3\u533A"
          },
          {
            code: "430104",
            name: "\u5CB3\u9E93\u533A"
          },
          {
            code: "430105",
            name: "\u5F00\u798F\u533A"
          },
          {
            code: "430111",
            name: "\u96E8\u82B1\u533A"
          },
          {
            code: "430112",
            name: "\u671B\u57CE\u533A"
          },
          {
            code: "430121",
            name: "\u957F\u6C99\u53BF"
          },
          {
            code: "430181",
            name: "\u6D4F\u9633\u5E02"
          },
          {
            code: "430182",
            name: "\u5B81\u4E61\u5E02"
          }
        ]
      },
      {
        code: "4302",
        name: "\u682A\u6D32\u5E02",
        children: [
          {
            code: "430202",
            name: "\u8377\u5858\u533A"
          },
          {
            code: "430203",
            name: "\u82A6\u6DDE\u533A"
          },
          {
            code: "430204",
            name: "\u77F3\u5CF0\u533A"
          },
          {
            code: "430211",
            name: "\u5929\u5143\u533A"
          },
          {
            code: "430212",
            name: "\u6E0C\u53E3\u533A"
          },
          {
            code: "430223",
            name: "\u6538\u53BF"
          },
          {
            code: "430224",
            name: "\u8336\u9675\u53BF"
          },
          {
            code: "430225",
            name: "\u708E\u9675\u53BF"
          },
          {
            code: "430271",
            name: "\u4E91\u9F99\u793A\u8303\u533A"
          },
          {
            code: "430281",
            name: "\u91B4\u9675\u5E02"
          }
        ]
      },
      {
        code: "4303",
        name: "\u6E58\u6F6D\u5E02",
        children: [
          {
            code: "430302",
            name: "\u96E8\u6E56\u533A"
          },
          {
            code: "430304",
            name: "\u5CB3\u5858\u533A"
          },
          {
            code: "430321",
            name: "\u6E58\u6F6D\u53BF"
          },
          {
            code: "430371",
            name: "\u6E56\u5357\u6E58\u6F6D\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430372",
            name: "\u6E58\u6F6D\u662D\u5C71\u793A\u8303\u533A"
          },
          {
            code: "430373",
            name: "\u6E58\u6F6D\u4E5D\u534E\u793A\u8303\u533A"
          },
          {
            code: "430381",
            name: "\u6E58\u4E61\u5E02"
          },
          {
            code: "430382",
            name: "\u97F6\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4304",
        name: "\u8861\u9633\u5E02",
        children: [
          {
            code: "430405",
            name: "\u73E0\u6656\u533A"
          },
          {
            code: "430406",
            name: "\u96C1\u5CF0\u533A"
          },
          {
            code: "430407",
            name: "\u77F3\u9F13\u533A"
          },
          {
            code: "430408",
            name: "\u84B8\u6E58\u533A"
          },
          {
            code: "430412",
            name: "\u5357\u5CB3\u533A"
          },
          {
            code: "430421",
            name: "\u8861\u9633\u53BF"
          },
          {
            code: "430422",
            name: "\u8861\u5357\u53BF"
          },
          {
            code: "430423",
            name: "\u8861\u5C71\u53BF"
          },
          {
            code: "430424",
            name: "\u8861\u4E1C\u53BF"
          },
          {
            code: "430426",
            name: "\u7941\u4E1C\u53BF"
          },
          {
            code: "430471",
            name: "\u8861\u9633\u7EFC\u5408\u4FDD\u7A0E\u533A"
          },
          {
            code: "430472",
            name: "\u6E56\u5357\u8861\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430473",
            name: "\u6E56\u5357\u8861\u9633\u677E\u6728\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "430481",
            name: "\u8012\u9633\u5E02"
          },
          {
            code: "430482",
            name: "\u5E38\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4305",
        name: "\u90B5\u9633\u5E02",
        children: [
          {
            code: "430502",
            name: "\u53CC\u6E05\u533A"
          },
          {
            code: "430503",
            name: "\u5927\u7965\u533A"
          },
          {
            code: "430511",
            name: "\u5317\u5854\u533A"
          },
          {
            code: "430522",
            name: "\u65B0\u90B5\u53BF"
          },
          {
            code: "430523",
            name: "\u90B5\u9633\u53BF"
          },
          {
            code: "430524",
            name: "\u9686\u56DE\u53BF"
          },
          {
            code: "430525",
            name: "\u6D1E\u53E3\u53BF"
          },
          {
            code: "430527",
            name: "\u7EE5\u5B81\u53BF"
          },
          {
            code: "430528",
            name: "\u65B0\u5B81\u53BF"
          },
          {
            code: "430529",
            name: "\u57CE\u6B65\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "430581",
            name: "\u6B66\u5188\u5E02"
          },
          {
            code: "430582",
            name: "\u90B5\u4E1C\u5E02"
          }
        ]
      },
      {
        code: "4306",
        name: "\u5CB3\u9633\u5E02",
        children: [
          {
            code: "430602",
            name: "\u5CB3\u9633\u697C\u533A"
          },
          {
            code: "430603",
            name: "\u4E91\u6EAA\u533A"
          },
          {
            code: "430611",
            name: "\u541B\u5C71\u533A"
          },
          {
            code: "430621",
            name: "\u5CB3\u9633\u53BF"
          },
          {
            code: "430623",
            name: "\u534E\u5BB9\u53BF"
          },
          {
            code: "430624",
            name: "\u6E58\u9634\u53BF"
          },
          {
            code: "430626",
            name: "\u5E73\u6C5F\u53BF"
          },
          {
            code: "430671",
            name: "\u5CB3\u9633\u5E02\u5C48\u539F\u7BA1\u7406\u533A"
          },
          {
            code: "430681",
            name: "\u6C68\u7F57\u5E02"
          },
          {
            code: "430682",
            name: "\u4E34\u6E58\u5E02"
          }
        ]
      },
      {
        code: "4307",
        name: "\u5E38\u5FB7\u5E02",
        children: [
          {
            code: "430702",
            name: "\u6B66\u9675\u533A"
          },
          {
            code: "430703",
            name: "\u9F0E\u57CE\u533A"
          },
          {
            code: "430721",
            name: "\u5B89\u4E61\u53BF"
          },
          {
            code: "430722",
            name: "\u6C49\u5BFF\u53BF"
          },
          {
            code: "430723",
            name: "\u6FA7\u53BF"
          },
          {
            code: "430724",
            name: "\u4E34\u6FA7\u53BF"
          },
          {
            code: "430725",
            name: "\u6843\u6E90\u53BF"
          },
          {
            code: "430726",
            name: "\u77F3\u95E8\u53BF"
          },
          {
            code: "430771",
            name: "\u5E38\u5FB7\u5E02\u897F\u6D1E\u5EAD\u7BA1\u7406\u533A"
          },
          {
            code: "430781",
            name: "\u6D25\u5E02\u5E02"
          }
        ]
      },
      {
        code: "4308",
        name: "\u5F20\u5BB6\u754C\u5E02",
        children: [
          {
            code: "430802",
            name: "\u6C38\u5B9A\u533A"
          },
          {
            code: "430811",
            name: "\u6B66\u9675\u6E90\u533A"
          },
          {
            code: "430821",
            name: "\u6148\u5229\u53BF"
          },
          {
            code: "430822",
            name: "\u6851\u690D\u53BF"
          }
        ]
      },
      {
        code: "4309",
        name: "\u76CA\u9633\u5E02",
        children: [
          {
            code: "430902",
            name: "\u8D44\u9633\u533A"
          },
          {
            code: "430903",
            name: "\u8D6B\u5C71\u533A"
          },
          {
            code: "430921",
            name: "\u5357\u53BF"
          },
          {
            code: "430922",
            name: "\u6843\u6C5F\u53BF"
          },
          {
            code: "430923",
            name: "\u5B89\u5316\u53BF"
          },
          {
            code: "430971",
            name: "\u76CA\u9633\u5E02\u5927\u901A\u6E56\u7BA1\u7406\u533A"
          },
          {
            code: "430972",
            name: "\u6E56\u5357\u76CA\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430981",
            name: "\u6C85\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4310",
        name: "\u90F4\u5DDE\u5E02",
        children: [
          {
            code: "431002",
            name: "\u5317\u6E56\u533A"
          },
          {
            code: "431003",
            name: "\u82CF\u4ED9\u533A"
          },
          {
            code: "431021",
            name: "\u6842\u9633\u53BF"
          },
          {
            code: "431022",
            name: "\u5B9C\u7AE0\u53BF"
          },
          {
            code: "431023",
            name: "\u6C38\u5174\u53BF"
          },
          {
            code: "431024",
            name: "\u5609\u79BE\u53BF"
          },
          {
            code: "431025",
            name: "\u4E34\u6B66\u53BF"
          },
          {
            code: "431026",
            name: "\u6C5D\u57CE\u53BF"
          },
          {
            code: "431027",
            name: "\u6842\u4E1C\u53BF"
          },
          {
            code: "431028",
            name: "\u5B89\u4EC1\u53BF"
          },
          {
            code: "431081",
            name: "\u8D44\u5174\u5E02"
          }
        ]
      },
      {
        code: "4311",
        name: "\u6C38\u5DDE\u5E02",
        children: [
          {
            code: "431102",
            name: "\u96F6\u9675\u533A"
          },
          {
            code: "431103",
            name: "\u51B7\u6C34\u6EE9\u533A"
          },
          {
            code: "431121",
            name: "\u7941\u9633\u53BF"
          },
          {
            code: "431122",
            name: "\u4E1C\u5B89\u53BF"
          },
          {
            code: "431123",
            name: "\u53CC\u724C\u53BF"
          },
          {
            code: "431124",
            name: "\u9053\u53BF"
          },
          {
            code: "431125",
            name: "\u6C5F\u6C38\u53BF"
          },
          {
            code: "431126",
            name: "\u5B81\u8FDC\u53BF"
          },
          {
            code: "431127",
            name: "\u84DD\u5C71\u53BF"
          },
          {
            code: "431128",
            name: "\u65B0\u7530\u53BF"
          },
          {
            code: "431129",
            name: "\u6C5F\u534E\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431171",
            name: "\u6C38\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "431172",
            name: "\u6C38\u5DDE\u5E02\u91D1\u6D1E\u7BA1\u7406\u533A"
          },
          {
            code: "431173",
            name: "\u6C38\u5DDE\u5E02\u56DE\u9F99\u5729\u7BA1\u7406\u533A"
          }
        ]
      },
      {
        code: "4312",
        name: "\u6000\u5316\u5E02",
        children: [
          {
            code: "431202",
            name: "\u9E64\u57CE\u533A"
          },
          {
            code: "431221",
            name: "\u4E2D\u65B9\u53BF"
          },
          {
            code: "431222",
            name: "\u6C85\u9675\u53BF"
          },
          {
            code: "431223",
            name: "\u8FB0\u6EAA\u53BF"
          },
          {
            code: "431224",
            name: "\u6E86\u6D66\u53BF"
          },
          {
            code: "431225",
            name: "\u4F1A\u540C\u53BF"
          },
          {
            code: "431226",
            name: "\u9EBB\u9633\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431227",
            name: "\u65B0\u6643\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431228",
            name: "\u82B7\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431229",
            name: "\u9756\u5DDE\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431230",
            name: "\u901A\u9053\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431271",
            name: "\u6000\u5316\u5E02\u6D2A\u6C5F\u7BA1\u7406\u533A"
          },
          {
            code: "431281",
            name: "\u6D2A\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4313",
        name: "\u5A04\u5E95\u5E02",
        children: [
          {
            code: "431302",
            name: "\u5A04\u661F\u533A"
          },
          {
            code: "431321",
            name: "\u53CC\u5CF0\u53BF"
          },
          {
            code: "431322",
            name: "\u65B0\u5316\u53BF"
          },
          {
            code: "431381",
            name: "\u51B7\u6C34\u6C5F\u5E02"
          },
          {
            code: "431382",
            name: "\u6D9F\u6E90\u5E02"
          }
        ]
      },
      {
        code: "4331",
        name: "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "433101",
            name: "\u5409\u9996\u5E02"
          },
          {
            code: "433122",
            name: "\u6CF8\u6EAA\u53BF"
          },
          {
            code: "433123",
            name: "\u51E4\u51F0\u53BF"
          },
          {
            code: "433124",
            name: "\u82B1\u57A3\u53BF"
          },
          {
            code: "433125",
            name: "\u4FDD\u9756\u53BF"
          },
          {
            code: "433126",
            name: "\u53E4\u4E08\u53BF"
          },
          {
            code: "433127",
            name: "\u6C38\u987A\u53BF"
          },
          {
            code: "433130",
            name: "\u9F99\u5C71\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "44",
    name: "\u5E7F\u4E1C\u7701",
    children: [
      {
        code: "4401",
        name: "\u5E7F\u5DDE\u5E02",
        children: [
          {
            code: "440103",
            name: "\u8354\u6E7E\u533A"
          },
          {
            code: "440104",
            name: "\u8D8A\u79C0\u533A"
          },
          {
            code: "440105",
            name: "\u6D77\u73E0\u533A"
          },
          {
            code: "440106",
            name: "\u5929\u6CB3\u533A"
          },
          {
            code: "440111",
            name: "\u767D\u4E91\u533A"
          },
          {
            code: "440112",
            name: "\u9EC4\u57D4\u533A"
          },
          {
            code: "440113",
            name: "\u756A\u79BA\u533A"
          },
          {
            code: "440114",
            name: "\u82B1\u90FD\u533A"
          },
          {
            code: "440115",
            name: "\u5357\u6C99\u533A"
          },
          {
            code: "440117",
            name: "\u4ECE\u5316\u533A"
          },
          {
            code: "440118",
            name: "\u589E\u57CE\u533A"
          }
        ]
      },
      {
        code: "4402",
        name: "\u97F6\u5173\u5E02",
        children: [
          {
            code: "440203",
            name: "\u6B66\u6C5F\u533A"
          },
          {
            code: "440204",
            name: "\u6D48\u6C5F\u533A"
          },
          {
            code: "440205",
            name: "\u66F2\u6C5F\u533A"
          },
          {
            code: "440222",
            name: "\u59CB\u5174\u53BF"
          },
          {
            code: "440224",
            name: "\u4EC1\u5316\u53BF"
          },
          {
            code: "440229",
            name: "\u7FC1\u6E90\u53BF"
          },
          {
            code: "440232",
            name: "\u4E73\u6E90\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "440233",
            name: "\u65B0\u4E30\u53BF"
          },
          {
            code: "440281",
            name: "\u4E50\u660C\u5E02"
          },
          {
            code: "440282",
            name: "\u5357\u96C4\u5E02"
          }
        ]
      },
      {
        code: "4403",
        name: "\u6DF1\u5733\u5E02",
        children: [
          {
            code: "440303",
            name: "\u7F57\u6E56\u533A"
          },
          {
            code: "440304",
            name: "\u798F\u7530\u533A"
          },
          {
            code: "440305",
            name: "\u5357\u5C71\u533A"
          },
          {
            code: "440306",
            name: "\u5B9D\u5B89\u533A"
          },
          {
            code: "440307",
            name: "\u9F99\u5C97\u533A"
          },
          {
            code: "440308",
            name: "\u76D0\u7530\u533A"
          },
          {
            code: "440309",
            name: "\u9F99\u534E\u533A"
          },
          {
            code: "440310",
            name: "\u576A\u5C71\u533A"
          },
          {
            code: "440311",
            name: "\u5149\u660E\u533A"
          }
        ]
      },
      {
        code: "4404",
        name: "\u73E0\u6D77\u5E02",
        children: [
          {
            code: "440402",
            name: "\u9999\u6D32\u533A"
          },
          {
            code: "440403",
            name: "\u6597\u95E8\u533A"
          },
          {
            code: "440404",
            name: "\u91D1\u6E7E\u533A"
          }
        ]
      },
      {
        code: "4405",
        name: "\u6C55\u5934\u5E02",
        children: [
          {
            code: "440507",
            name: "\u9F99\u6E56\u533A"
          },
          {
            code: "440511",
            name: "\u91D1\u5E73\u533A"
          },
          {
            code: "440512",
            name: "\u6FE0\u6C5F\u533A"
          },
          {
            code: "440513",
            name: "\u6F6E\u9633\u533A"
          },
          {
            code: "440514",
            name: "\u6F6E\u5357\u533A"
          },
          {
            code: "440515",
            name: "\u6F84\u6D77\u533A"
          },
          {
            code: "440523",
            name: "\u5357\u6FB3\u53BF"
          }
        ]
      },
      {
        code: "4406",
        name: "\u4F5B\u5C71\u5E02",
        children: [
          {
            code: "440604",
            name: "\u7985\u57CE\u533A"
          },
          {
            code: "440605",
            name: "\u5357\u6D77\u533A"
          },
          {
            code: "440606",
            name: "\u987A\u5FB7\u533A"
          },
          {
            code: "440607",
            name: "\u4E09\u6C34\u533A"
          },
          {
            code: "440608",
            name: "\u9AD8\u660E\u533A"
          }
        ]
      },
      {
        code: "4407",
        name: "\u6C5F\u95E8\u5E02",
        children: [
          {
            code: "440703",
            name: "\u84EC\u6C5F\u533A"
          },
          {
            code: "440704",
            name: "\u6C5F\u6D77\u533A"
          },
          {
            code: "440705",
            name: "\u65B0\u4F1A\u533A"
          },
          {
            code: "440781",
            name: "\u53F0\u5C71\u5E02"
          },
          {
            code: "440783",
            name: "\u5F00\u5E73\u5E02"
          },
          {
            code: "440784",
            name: "\u9E64\u5C71\u5E02"
          },
          {
            code: "440785",
            name: "\u6069\u5E73\u5E02"
          }
        ]
      },
      {
        code: "4408",
        name: "\u6E5B\u6C5F\u5E02",
        children: [
          {
            code: "440802",
            name: "\u8D64\u574E\u533A"
          },
          {
            code: "440803",
            name: "\u971E\u5C71\u533A"
          },
          {
            code: "440804",
            name: "\u5761\u5934\u533A"
          },
          {
            code: "440811",
            name: "\u9EBB\u7AE0\u533A"
          },
          {
            code: "440823",
            name: "\u9042\u6EAA\u53BF"
          },
          {
            code: "440825",
            name: "\u5F90\u95FB\u53BF"
          },
          {
            code: "440881",
            name: "\u5EC9\u6C5F\u5E02"
          },
          {
            code: "440882",
            name: "\u96F7\u5DDE\u5E02"
          },
          {
            code: "440883",
            name: "\u5434\u5DDD\u5E02"
          }
        ]
      },
      {
        code: "4409",
        name: "\u8302\u540D\u5E02",
        children: [
          {
            code: "440902",
            name: "\u8302\u5357\u533A"
          },
          {
            code: "440904",
            name: "\u7535\u767D\u533A"
          },
          {
            code: "440981",
            name: "\u9AD8\u5DDE\u5E02"
          },
          {
            code: "440982",
            name: "\u5316\u5DDE\u5E02"
          },
          {
            code: "440983",
            name: "\u4FE1\u5B9C\u5E02"
          }
        ]
      },
      {
        code: "4412",
        name: "\u8087\u5E86\u5E02",
        children: [
          {
            code: "441202",
            name: "\u7AEF\u5DDE\u533A"
          },
          {
            code: "441203",
            name: "\u9F0E\u6E56\u533A"
          },
          {
            code: "441204",
            name: "\u9AD8\u8981\u533A"
          },
          {
            code: "441223",
            name: "\u5E7F\u5B81\u53BF"
          },
          {
            code: "441224",
            name: "\u6000\u96C6\u53BF"
          },
          {
            code: "441225",
            name: "\u5C01\u5F00\u53BF"
          },
          {
            code: "441226",
            name: "\u5FB7\u5E86\u53BF"
          },
          {
            code: "441284",
            name: "\u56DB\u4F1A\u5E02"
          }
        ]
      },
      {
        code: "4413",
        name: "\u60E0\u5DDE\u5E02",
        children: [
          {
            code: "441302",
            name: "\u60E0\u57CE\u533A"
          },
          {
            code: "441303",
            name: "\u60E0\u9633\u533A"
          },
          {
            code: "441322",
            name: "\u535A\u7F57\u53BF"
          },
          {
            code: "441323",
            name: "\u60E0\u4E1C\u53BF"
          },
          {
            code: "441324",
            name: "\u9F99\u95E8\u53BF"
          }
        ]
      },
      {
        code: "4414",
        name: "\u6885\u5DDE\u5E02",
        children: [
          {
            code: "441402",
            name: "\u6885\u6C5F\u533A"
          },
          {
            code: "441403",
            name: "\u6885\u53BF\u533A"
          },
          {
            code: "441422",
            name: "\u5927\u57D4\u53BF"
          },
          {
            code: "441423",
            name: "\u4E30\u987A\u53BF"
          },
          {
            code: "441424",
            name: "\u4E94\u534E\u53BF"
          },
          {
            code: "441426",
            name: "\u5E73\u8FDC\u53BF"
          },
          {
            code: "441427",
            name: "\u8549\u5CAD\u53BF"
          },
          {
            code: "441481",
            name: "\u5174\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4415",
        name: "\u6C55\u5C3E\u5E02",
        children: [
          {
            code: "441502",
            name: "\u57CE\u533A"
          },
          {
            code: "441521",
            name: "\u6D77\u4E30\u53BF"
          },
          {
            code: "441523",
            name: "\u9646\u6CB3\u53BF"
          },
          {
            code: "441581",
            name: "\u9646\u4E30\u5E02"
          }
        ]
      },
      {
        code: "4416",
        name: "\u6CB3\u6E90\u5E02",
        children: [
          {
            code: "441602",
            name: "\u6E90\u57CE\u533A"
          },
          {
            code: "441621",
            name: "\u7D2B\u91D1\u53BF"
          },
          {
            code: "441622",
            name: "\u9F99\u5DDD\u53BF"
          },
          {
            code: "441623",
            name: "\u8FDE\u5E73\u53BF"
          },
          {
            code: "441624",
            name: "\u548C\u5E73\u53BF"
          },
          {
            code: "441625",
            name: "\u4E1C\u6E90\u53BF"
          }
        ]
      },
      {
        code: "4417",
        name: "\u9633\u6C5F\u5E02",
        children: [
          {
            code: "441702",
            name: "\u6C5F\u57CE\u533A"
          },
          {
            code: "441704",
            name: "\u9633\u4E1C\u533A"
          },
          {
            code: "441721",
            name: "\u9633\u897F\u53BF"
          },
          {
            code: "441781",
            name: "\u9633\u6625\u5E02"
          }
        ]
      },
      {
        code: "4418",
        name: "\u6E05\u8FDC\u5E02",
        children: [
          {
            code: "441802",
            name: "\u6E05\u57CE\u533A"
          },
          {
            code: "441803",
            name: "\u6E05\u65B0\u533A"
          },
          {
            code: "441821",
            name: "\u4F5B\u5188\u53BF"
          },
          {
            code: "441823",
            name: "\u9633\u5C71\u53BF"
          },
          {
            code: "441825",
            name: "\u8FDE\u5C71\u58EE\u65CF\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "441826",
            name: "\u8FDE\u5357\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "441881",
            name: "\u82F1\u5FB7\u5E02"
          },
          {
            code: "441882",
            name: "\u8FDE\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4419",
        name: "\u4E1C\u839E\u5E02",
        children: [
          {
            code: "441900003",
            name: "\u4E1C\u57CE\u8857\u9053"
          },
          {
            code: "441900004",
            name: "\u5357\u57CE\u8857\u9053"
          },
          {
            code: "441900005",
            name: "\u4E07\u6C5F\u8857\u9053"
          },
          {
            code: "441900006",
            name: "\u839E\u57CE\u8857\u9053"
          },
          {
            code: "441900101",
            name: "\u77F3\u78A3\u9547"
          },
          {
            code: "441900102",
            name: "\u77F3\u9F99\u9547"
          },
          {
            code: "441900103",
            name: "\u8336\u5C71\u9547"
          },
          {
            code: "441900104",
            name: "\u77F3\u6392\u9547"
          },
          {
            code: "441900105",
            name: "\u4F01\u77F3\u9547"
          },
          {
            code: "441900106",
            name: "\u6A2A\u6CA5\u9547"
          },
          {
            code: "441900107",
            name: "\u6865\u5934\u9547"
          },
          {
            code: "441900108",
            name: "\u8C22\u5C97\u9547"
          },
          {
            code: "441900109",
            name: "\u4E1C\u5751\u9547"
          },
          {
            code: "441900110",
            name: "\u5E38\u5E73\u9547"
          },
          {
            code: "441900111",
            name: "\u5BEE\u6B65\u9547"
          },
          {
            code: "441900112",
            name: "\u6A1F\u6728\u5934\u9547"
          },
          {
            code: "441900113",
            name: "\u5927\u6717\u9547"
          },
          {
            code: "441900114",
            name: "\u9EC4\u6C5F\u9547"
          },
          {
            code: "441900115",
            name: "\u6E05\u6EAA\u9547"
          },
          {
            code: "441900116",
            name: "\u5858\u53A6\u9547"
          },
          {
            code: "441900117",
            name: "\u51E4\u5C97\u9547"
          },
          {
            code: "441900118",
            name: "\u5927\u5CAD\u5C71\u9547"
          },
          {
            code: "441900119",
            name: "\u957F\u5B89\u9547"
          },
          {
            code: "441900121",
            name: "\u864E\u95E8\u9547"
          },
          {
            code: "441900122",
            name: "\u539A\u8857\u9547"
          },
          {
            code: "441900123",
            name: "\u6C99\u7530\u9547"
          },
          {
            code: "441900124",
            name: "\u9053\u6ED8\u9547"
          },
          {
            code: "441900125",
            name: "\u6D2A\u6885\u9547"
          },
          {
            code: "441900126",
            name: "\u9EBB\u6D8C\u9547"
          },
          {
            code: "441900127",
            name: "\u671B\u725B\u58A9\u9547"
          },
          {
            code: "441900128",
            name: "\u4E2D\u5802\u9547"
          },
          {
            code: "441900129",
            name: "\u9AD8\u57D7\u9547"
          },
          {
            code: "441900401",
            name: "\u677E\u5C71\u6E56"
          },
          {
            code: "441900402",
            name: "\u4E1C\u839E\u6E2F"
          },
          {
            code: "441900403",
            name: "\u4E1C\u839E\u751F\u6001\u56ED"
          }
        ]
      },
      {
        code: "4420",
        name: "\u4E2D\u5C71\u5E02",
        children: [
          {
            code: "442000001",
            name: "\u77F3\u5C90\u8857\u9053"
          },
          {
            code: "442000002",
            name: "\u4E1C\u533A\u8857\u9053"
          },
          {
            code: "442000003",
            name: "\u4E2D\u5C71\u6E2F\u8857\u9053"
          },
          {
            code: "442000004",
            name: "\u897F\u533A\u8857\u9053"
          },
          {
            code: "442000005",
            name: "\u5357\u533A\u8857\u9053"
          },
          {
            code: "442000006",
            name: "\u4E94\u6842\u5C71\u8857\u9053"
          },
          {
            code: "442000100",
            name: "\u5C0F\u6984\u9547"
          },
          {
            code: "442000101",
            name: "\u9EC4\u5703\u9547"
          },
          {
            code: "442000102",
            name: "\u6C11\u4F17\u9547"
          },
          {
            code: "442000103",
            name: "\u4E1C\u51E4\u9547"
          },
          {
            code: "442000104",
            name: "\u4E1C\u5347\u9547"
          },
          {
            code: "442000105",
            name: "\u53E4\u9547\u9547"
          },
          {
            code: "442000106",
            name: "\u6C99\u6EAA\u9547"
          },
          {
            code: "442000107",
            name: "\u5766\u6D32\u9547"
          },
          {
            code: "442000108",
            name: "\u6E2F\u53E3\u9547"
          },
          {
            code: "442000109",
            name: "\u4E09\u89D2\u9547"
          },
          {
            code: "442000110",
            name: "\u6A2A\u680F\u9547"
          },
          {
            code: "442000111",
            name: "\u5357\u5934\u9547"
          },
          {
            code: "442000112",
            name: "\u961C\u6C99\u9547"
          },
          {
            code: "442000113",
            name: "\u5357\u6717\u9547"
          },
          {
            code: "442000114",
            name: "\u4E09\u4E61\u9547"
          },
          {
            code: "442000115",
            name: "\u677F\u8299\u9547"
          },
          {
            code: "442000116",
            name: "\u5927\u6D8C\u9547"
          },
          {
            code: "442000117",
            name: "\u795E\u6E7E\u9547"
          }
        ]
      },
      {
        code: "4451",
        name: "\u6F6E\u5DDE\u5E02",
        children: [
          {
            code: "445102",
            name: "\u6E58\u6865\u533A"
          },
          {
            code: "445103",
            name: "\u6F6E\u5B89\u533A"
          },
          {
            code: "445122",
            name: "\u9976\u5E73\u53BF"
          }
        ]
      },
      {
        code: "4452",
        name: "\u63ED\u9633\u5E02",
        children: [
          {
            code: "445202",
            name: "\u6995\u57CE\u533A"
          },
          {
            code: "445203",
            name: "\u63ED\u4E1C\u533A"
          },
          {
            code: "445222",
            name: "\u63ED\u897F\u53BF"
          },
          {
            code: "445224",
            name: "\u60E0\u6765\u53BF"
          },
          {
            code: "445281",
            name: "\u666E\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4453",
        name: "\u4E91\u6D6E\u5E02",
        children: [
          {
            code: "445302",
            name: "\u4E91\u57CE\u533A"
          },
          {
            code: "445303",
            name: "\u4E91\u5B89\u533A"
          },
          {
            code: "445321",
            name: "\u65B0\u5174\u53BF"
          },
          {
            code: "445322",
            name: "\u90C1\u5357\u53BF"
          },
          {
            code: "445381",
            name: "\u7F57\u5B9A\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "45",
    name: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "4501",
        name: "\u5357\u5B81\u5E02",
        children: [
          {
            code: "450102",
            name: "\u5174\u5B81\u533A"
          },
          {
            code: "450103",
            name: "\u9752\u79C0\u533A"
          },
          {
            code: "450105",
            name: "\u6C5F\u5357\u533A"
          },
          {
            code: "450107",
            name: "\u897F\u4E61\u5858\u533A"
          },
          {
            code: "450108",
            name: "\u826F\u5E86\u533A"
          },
          {
            code: "450109",
            name: "\u9095\u5B81\u533A"
          },
          {
            code: "450110",
            name: "\u6B66\u9E23\u533A"
          },
          {
            code: "450123",
            name: "\u9686\u5B89\u53BF"
          },
          {
            code: "450124",
            name: "\u9A6C\u5C71\u53BF"
          },
          {
            code: "450125",
            name: "\u4E0A\u6797\u53BF"
          },
          {
            code: "450126",
            name: "\u5BBE\u9633\u53BF"
          },
          {
            code: "450127",
            name: "\u6A2A\u53BF"
          }
        ]
      },
      {
        code: "4502",
        name: "\u67F3\u5DDE\u5E02",
        children: [
          {
            code: "450202",
            name: "\u57CE\u4E2D\u533A"
          },
          {
            code: "450203",
            name: "\u9C7C\u5CF0\u533A"
          },
          {
            code: "450204",
            name: "\u67F3\u5357\u533A"
          },
          {
            code: "450205",
            name: "\u67F3\u5317\u533A"
          },
          {
            code: "450206",
            name: "\u67F3\u6C5F\u533A"
          },
          {
            code: "450222",
            name: "\u67F3\u57CE\u53BF"
          },
          {
            code: "450223",
            name: "\u9E7F\u5BE8\u53BF"
          },
          {
            code: "450224",
            name: "\u878D\u5B89\u53BF"
          },
          {
            code: "450225",
            name: "\u878D\u6C34\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450226",
            name: "\u4E09\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4503",
        name: "\u6842\u6797\u5E02",
        children: [
          {
            code: "450302",
            name: "\u79C0\u5CF0\u533A"
          },
          {
            code: "450303",
            name: "\u53E0\u5F69\u533A"
          },
          {
            code: "450304",
            name: "\u8C61\u5C71\u533A"
          },
          {
            code: "450305",
            name: "\u4E03\u661F\u533A"
          },
          {
            code: "450311",
            name: "\u96C1\u5C71\u533A"
          },
          {
            code: "450312",
            name: "\u4E34\u6842\u533A"
          },
          {
            code: "450321",
            name: "\u9633\u6714\u53BF"
          },
          {
            code: "450323",
            name: "\u7075\u5DDD\u53BF"
          },
          {
            code: "450324",
            name: "\u5168\u5DDE\u53BF"
          },
          {
            code: "450325",
            name: "\u5174\u5B89\u53BF"
          },
          {
            code: "450326",
            name: "\u6C38\u798F\u53BF"
          },
          {
            code: "450327",
            name: "\u704C\u9633\u53BF"
          },
          {
            code: "450328",
            name: "\u9F99\u80DC\u5404\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450329",
            name: "\u8D44\u6E90\u53BF"
          },
          {
            code: "450330",
            name: "\u5E73\u4E50\u53BF"
          },
          {
            code: "450332",
            name: "\u606D\u57CE\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450381",
            name: "\u8354\u6D66\u5E02"
          }
        ]
      },
      {
        code: "4504",
        name: "\u68A7\u5DDE\u5E02",
        children: [
          {
            code: "450403",
            name: "\u4E07\u79C0\u533A"
          },
          {
            code: "450405",
            name: "\u957F\u6D32\u533A"
          },
          {
            code: "450406",
            name: "\u9F99\u5729\u533A"
          },
          {
            code: "450421",
            name: "\u82CD\u68A7\u53BF"
          },
          {
            code: "450422",
            name: "\u85E4\u53BF"
          },
          {
            code: "450423",
            name: "\u8499\u5C71\u53BF"
          },
          {
            code: "450481",
            name: "\u5C91\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "4505",
        name: "\u5317\u6D77\u5E02",
        children: [
          {
            code: "450502",
            name: "\u6D77\u57CE\u533A"
          },
          {
            code: "450503",
            name: "\u94F6\u6D77\u533A"
          },
          {
            code: "450512",
            name: "\u94C1\u5C71\u6E2F\u533A"
          },
          {
            code: "450521",
            name: "\u5408\u6D66\u53BF"
          }
        ]
      },
      {
        code: "4506",
        name: "\u9632\u57CE\u6E2F\u5E02",
        children: [
          {
            code: "450602",
            name: "\u6E2F\u53E3\u533A"
          },
          {
            code: "450603",
            name: "\u9632\u57CE\u533A"
          },
          {
            code: "450621",
            name: "\u4E0A\u601D\u53BF"
          },
          {
            code: "450681",
            name: "\u4E1C\u5174\u5E02"
          }
        ]
      },
      {
        code: "4507",
        name: "\u94A6\u5DDE\u5E02",
        children: [
          {
            code: "450702",
            name: "\u94A6\u5357\u533A"
          },
          {
            code: "450703",
            name: "\u94A6\u5317\u533A"
          },
          {
            code: "450721",
            name: "\u7075\u5C71\u53BF"
          },
          {
            code: "450722",
            name: "\u6D66\u5317\u53BF"
          }
        ]
      },
      {
        code: "4508",
        name: "\u8D35\u6E2F\u5E02",
        children: [
          {
            code: "450802",
            name: "\u6E2F\u5317\u533A"
          },
          {
            code: "450803",
            name: "\u6E2F\u5357\u533A"
          },
          {
            code: "450804",
            name: "\u8983\u5858\u533A"
          },
          {
            code: "450821",
            name: "\u5E73\u5357\u53BF"
          },
          {
            code: "450881",
            name: "\u6842\u5E73\u5E02"
          }
        ]
      },
      {
        code: "4509",
        name: "\u7389\u6797\u5E02",
        children: [
          {
            code: "450902",
            name: "\u7389\u5DDE\u533A"
          },
          {
            code: "450903",
            name: "\u798F\u7EF5\u533A"
          },
          {
            code: "450921",
            name: "\u5BB9\u53BF"
          },
          {
            code: "450922",
            name: "\u9646\u5DDD\u53BF"
          },
          {
            code: "450923",
            name: "\u535A\u767D\u53BF"
          },
          {
            code: "450924",
            name: "\u5174\u4E1A\u53BF"
          },
          {
            code: "450981",
            name: "\u5317\u6D41\u5E02"
          }
        ]
      },
      {
        code: "4510",
        name: "\u767E\u8272\u5E02",
        children: [
          {
            code: "451002",
            name: "\u53F3\u6C5F\u533A"
          },
          {
            code: "451003",
            name: "\u7530\u9633\u533A"
          },
          {
            code: "451022",
            name: "\u7530\u4E1C\u53BF"
          },
          {
            code: "451024",
            name: "\u5FB7\u4FDD\u53BF"
          },
          {
            code: "451026",
            name: "\u90A3\u5761\u53BF"
          },
          {
            code: "451027",
            name: "\u51CC\u4E91\u53BF"
          },
          {
            code: "451028",
            name: "\u4E50\u4E1A\u53BF"
          },
          {
            code: "451029",
            name: "\u7530\u6797\u53BF"
          },
          {
            code: "451030",
            name: "\u897F\u6797\u53BF"
          },
          {
            code: "451031",
            name: "\u9686\u6797\u5404\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451081",
            name: "\u9756\u897F\u5E02"
          },
          {
            code: "451082",
            name: "\u5E73\u679C\u5E02"
          }
        ]
      },
      {
        code: "4511",
        name: "\u8D3A\u5DDE\u5E02",
        children: [
          {
            code: "451102",
            name: "\u516B\u6B65\u533A"
          },
          {
            code: "451103",
            name: "\u5E73\u6842\u533A"
          },
          {
            code: "451121",
            name: "\u662D\u5E73\u53BF"
          },
          {
            code: "451122",
            name: "\u949F\u5C71\u53BF"
          },
          {
            code: "451123",
            name: "\u5BCC\u5DDD\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4512",
        name: "\u6CB3\u6C60\u5E02",
        children: [
          {
            code: "451202",
            name: "\u91D1\u57CE\u6C5F\u533A"
          },
          {
            code: "451203",
            name: "\u5B9C\u5DDE\u533A"
          },
          {
            code: "451221",
            name: "\u5357\u4E39\u53BF"
          },
          {
            code: "451222",
            name: "\u5929\u5CE8\u53BF"
          },
          {
            code: "451223",
            name: "\u51E4\u5C71\u53BF"
          },
          {
            code: "451224",
            name: "\u4E1C\u5170\u53BF"
          },
          {
            code: "451225",
            name: "\u7F57\u57CE\u4EEB\u4F6C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451226",
            name: "\u73AF\u6C5F\u6BDB\u5357\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451227",
            name: "\u5DF4\u9A6C\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451228",
            name: "\u90FD\u5B89\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451229",
            name: "\u5927\u5316\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4513",
        name: "\u6765\u5BBE\u5E02",
        children: [
          {
            code: "451302",
            name: "\u5174\u5BBE\u533A"
          },
          {
            code: "451321",
            name: "\u5FFB\u57CE\u53BF"
          },
          {
            code: "451322",
            name: "\u8C61\u5DDE\u53BF"
          },
          {
            code: "451323",
            name: "\u6B66\u5BA3\u53BF"
          },
          {
            code: "451324",
            name: "\u91D1\u79C0\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451381",
            name: "\u5408\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4514",
        name: "\u5D07\u5DE6\u5E02",
        children: [
          {
            code: "451402",
            name: "\u6C5F\u5DDE\u533A"
          },
          {
            code: "451421",
            name: "\u6276\u7EE5\u53BF"
          },
          {
            code: "451422",
            name: "\u5B81\u660E\u53BF"
          },
          {
            code: "451423",
            name: "\u9F99\u5DDE\u53BF"
          },
          {
            code: "451424",
            name: "\u5927\u65B0\u53BF"
          },
          {
            code: "451425",
            name: "\u5929\u7B49\u53BF"
          },
          {
            code: "451481",
            name: "\u51ED\u7965\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "46",
    name: "\u6D77\u5357\u7701",
    children: [
      {
        code: "4601",
        name: "\u6D77\u53E3\u5E02",
        children: [
          {
            code: "460105",
            name: "\u79C0\u82F1\u533A"
          },
          {
            code: "460106",
            name: "\u9F99\u534E\u533A"
          },
          {
            code: "460107",
            name: "\u743C\u5C71\u533A"
          },
          {
            code: "460108",
            name: "\u7F8E\u5170\u533A"
          }
        ]
      },
      {
        code: "4602",
        name: "\u4E09\u4E9A\u5E02",
        children: [
          {
            code: "460202",
            name: "\u6D77\u68E0\u533A"
          },
          {
            code: "460203",
            name: "\u5409\u9633\u533A"
          },
          {
            code: "460204",
            name: "\u5929\u6DAF\u533A"
          },
          {
            code: "460205",
            name: "\u5D16\u5DDE\u533A"
          }
        ]
      },
      {
        code: "4603",
        name: "\u4E09\u6C99\u5E02",
        children: [
          {
            code: "460321",
            name: "\u897F\u6C99\u7FA4\u5C9B"
          },
          {
            code: "460322",
            name: "\u5357\u6C99\u7FA4\u5C9B"
          },
          {
            code: "460323",
            name: "\u4E2D\u6C99\u7FA4\u5C9B\u7684\u5C9B\u7901\u53CA\u5176\u6D77\u57DF"
          }
        ]
      },
      {
        code: "4604",
        name: "\u510B\u5DDE\u5E02",
        children: [
          {
            code: "460400100",
            name: "\u90A3\u5927\u9547"
          },
          {
            code: "460400101",
            name: "\u548C\u5E86\u9547"
          },
          {
            code: "460400102",
            name: "\u5357\u4E30\u9547"
          },
          {
            code: "460400103",
            name: "\u5927\u6210\u9547"
          },
          {
            code: "460400104",
            name: "\u96C5\u661F\u9547"
          },
          {
            code: "460400105",
            name: "\u5170\u6D0B\u9547"
          },
          {
            code: "460400106",
            name: "\u5149\u6751\u9547"
          },
          {
            code: "460400107",
            name: "\u6728\u68E0\u9547"
          },
          {
            code: "460400108",
            name: "\u6D77\u5934\u9547"
          },
          {
            code: "460400109",
            name: "\u5CE8\u8513\u9547"
          },
          {
            code: "460400111",
            name: "\u738B\u4E94\u9547"
          },
          {
            code: "460400112",
            name: "\u767D\u9A6C\u4E95\u9547"
          },
          {
            code: "460400113",
            name: "\u4E2D\u548C\u9547"
          },
          {
            code: "460400114",
            name: "\u6392\u6D66\u9547"
          },
          {
            code: "460400115",
            name: "\u4E1C\u6210\u9547"
          },
          {
            code: "460400116",
            name: "\u65B0\u5DDE\u9547"
          },
          {
            code: "460400499",
            name: "\u6D0B\u6D66\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "460400500",
            name: "\u534E\u5357\u70ED\u4F5C\u5B66\u9662"
          }
        ]
      },
      {
        code: "4690",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "469001",
            name: "\u4E94\u6307\u5C71\u5E02"
          },
          {
            code: "469002",
            name: "\u743C\u6D77\u5E02"
          },
          {
            code: "469005",
            name: "\u6587\u660C\u5E02"
          },
          {
            code: "469006",
            name: "\u4E07\u5B81\u5E02"
          },
          {
            code: "469007",
            name: "\u4E1C\u65B9\u5E02"
          },
          {
            code: "469021",
            name: "\u5B9A\u5B89\u53BF"
          },
          {
            code: "469022",
            name: "\u5C6F\u660C\u53BF"
          },
          {
            code: "469023",
            name: "\u6F84\u8FC8\u53BF"
          },
          {
            code: "469024",
            name: "\u4E34\u9AD8\u53BF"
          },
          {
            code: "469025",
            name: "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469026",
            name: "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469027",
            name: "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469028",
            name: "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469029",
            name: "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469030",
            name: "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "50",
    name: "\u91CD\u5E86\u5E02",
    children: [
      {
        code: "5001",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "500101",
            name: "\u4E07\u5DDE\u533A"
          },
          {
            code: "500102",
            name: "\u6DAA\u9675\u533A"
          },
          {
            code: "500103",
            name: "\u6E1D\u4E2D\u533A"
          },
          {
            code: "500104",
            name: "\u5927\u6E21\u53E3\u533A"
          },
          {
            code: "500105",
            name: "\u6C5F\u5317\u533A"
          },
          {
            code: "500106",
            name: "\u6C99\u576A\u575D\u533A"
          },
          {
            code: "500107",
            name: "\u4E5D\u9F99\u5761\u533A"
          },
          {
            code: "500108",
            name: "\u5357\u5CB8\u533A"
          },
          {
            code: "500109",
            name: "\u5317\u789A\u533A"
          },
          {
            code: "500110",
            name: "\u7DA6\u6C5F\u533A"
          },
          {
            code: "500111",
            name: "\u5927\u8DB3\u533A"
          },
          {
            code: "500112",
            name: "\u6E1D\u5317\u533A"
          },
          {
            code: "500113",
            name: "\u5DF4\u5357\u533A"
          },
          {
            code: "500114",
            name: "\u9ED4\u6C5F\u533A"
          },
          {
            code: "500115",
            name: "\u957F\u5BFF\u533A"
          },
          {
            code: "500116",
            name: "\u6C5F\u6D25\u533A"
          },
          {
            code: "500117",
            name: "\u5408\u5DDD\u533A"
          },
          {
            code: "500118",
            name: "\u6C38\u5DDD\u533A"
          },
          {
            code: "500119",
            name: "\u5357\u5DDD\u533A"
          },
          {
            code: "500120",
            name: "\u74A7\u5C71\u533A"
          },
          {
            code: "500151",
            name: "\u94DC\u6881\u533A"
          },
          {
            code: "500152",
            name: "\u6F7C\u5357\u533A"
          },
          {
            code: "500153",
            name: "\u8363\u660C\u533A"
          },
          {
            code: "500154",
            name: "\u5F00\u5DDE\u533A"
          },
          {
            code: "500155",
            name: "\u6881\u5E73\u533A"
          },
          {
            code: "500156",
            name: "\u6B66\u9686\u533A"
          }
        ]
      },
      {
        code: "5002",
        name: "\u53BF",
        children: [
          {
            code: "500229",
            name: "\u57CE\u53E3\u53BF"
          },
          {
            code: "500230",
            name: "\u4E30\u90FD\u53BF"
          },
          {
            code: "500231",
            name: "\u57AB\u6C5F\u53BF"
          },
          {
            code: "500233",
            name: "\u5FE0\u53BF"
          },
          {
            code: "500235",
            name: "\u4E91\u9633\u53BF"
          },
          {
            code: "500236",
            name: "\u5949\u8282\u53BF"
          },
          {
            code: "500237",
            name: "\u5DEB\u5C71\u53BF"
          },
          {
            code: "500238",
            name: "\u5DEB\u6EAA\u53BF"
          },
          {
            code: "500240",
            name: "\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500241",
            name: "\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500242",
            name: "\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500243",
            name: "\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "51",
    name: "\u56DB\u5DDD\u7701",
    children: [
      {
        code: "5101",
        name: "\u6210\u90FD\u5E02",
        children: [
          {
            code: "510104",
            name: "\u9526\u6C5F\u533A"
          },
          {
            code: "510105",
            name: "\u9752\u7F8A\u533A"
          },
          {
            code: "510106",
            name: "\u91D1\u725B\u533A"
          },
          {
            code: "510107",
            name: "\u6B66\u4FAF\u533A"
          },
          {
            code: "510108",
            name: "\u6210\u534E\u533A"
          },
          {
            code: "510112",
            name: "\u9F99\u6CC9\u9A7F\u533A"
          },
          {
            code: "510113",
            name: "\u9752\u767D\u6C5F\u533A"
          },
          {
            code: "510114",
            name: "\u65B0\u90FD\u533A"
          },
          {
            code: "510115",
            name: "\u6E29\u6C5F\u533A"
          },
          {
            code: "510116",
            name: "\u53CC\u6D41\u533A"
          },
          {
            code: "510117",
            name: "\u90EB\u90FD\u533A"
          },
          {
            code: "510118",
            name: "\u65B0\u6D25\u533A"
          },
          {
            code: "510121",
            name: "\u91D1\u5802\u53BF"
          },
          {
            code: "510129",
            name: "\u5927\u9091\u53BF"
          },
          {
            code: "510131",
            name: "\u84B2\u6C5F\u53BF"
          },
          {
            code: "510181",
            name: "\u90FD\u6C5F\u5830\u5E02"
          },
          {
            code: "510182",
            name: "\u5F6D\u5DDE\u5E02"
          },
          {
            code: "510183",
            name: "\u909B\u5D03\u5E02"
          },
          {
            code: "510184",
            name: "\u5D07\u5DDE\u5E02"
          },
          {
            code: "510185",
            name: "\u7B80\u9633\u5E02"
          }
        ]
      },
      {
        code: "5103",
        name: "\u81EA\u8D21\u5E02",
        children: [
          {
            code: "510302",
            name: "\u81EA\u6D41\u4E95\u533A"
          },
          {
            code: "510303",
            name: "\u8D21\u4E95\u533A"
          },
          {
            code: "510304",
            name: "\u5927\u5B89\u533A"
          },
          {
            code: "510311",
            name: "\u6CBF\u6EE9\u533A"
          },
          {
            code: "510321",
            name: "\u8363\u53BF"
          },
          {
            code: "510322",
            name: "\u5BCC\u987A\u53BF"
          }
        ]
      },
      {
        code: "5104",
        name: "\u6500\u679D\u82B1\u5E02",
        children: [
          {
            code: "510402",
            name: "\u4E1C\u533A"
          },
          {
            code: "510403",
            name: "\u897F\u533A"
          },
          {
            code: "510411",
            name: "\u4EC1\u548C\u533A"
          },
          {
            code: "510421",
            name: "\u7C73\u6613\u53BF"
          },
          {
            code: "510422",
            name: "\u76D0\u8FB9\u53BF"
          }
        ]
      },
      {
        code: "5105",
        name: "\u6CF8\u5DDE\u5E02",
        children: [
          {
            code: "510502",
            name: "\u6C5F\u9633\u533A"
          },
          {
            code: "510503",
            name: "\u7EB3\u6EAA\u533A"
          },
          {
            code: "510504",
            name: "\u9F99\u9A6C\u6F6D\u533A"
          },
          {
            code: "510521",
            name: "\u6CF8\u53BF"
          },
          {
            code: "510522",
            name: "\u5408\u6C5F\u53BF"
          },
          {
            code: "510524",
            name: "\u53D9\u6C38\u53BF"
          },
          {
            code: "510525",
            name: "\u53E4\u853A\u53BF"
          }
        ]
      },
      {
        code: "5106",
        name: "\u5FB7\u9633\u5E02",
        children: [
          {
            code: "510603",
            name: "\u65CC\u9633\u533A"
          },
          {
            code: "510604",
            name: "\u7F57\u6C5F\u533A"
          },
          {
            code: "510623",
            name: "\u4E2D\u6C5F\u53BF"
          },
          {
            code: "510681",
            name: "\u5E7F\u6C49\u5E02"
          },
          {
            code: "510682",
            name: "\u4EC0\u90A1\u5E02"
          },
          {
            code: "510683",
            name: "\u7EF5\u7AF9\u5E02"
          }
        ]
      },
      {
        code: "5107",
        name: "\u7EF5\u9633\u5E02",
        children: [
          {
            code: "510703",
            name: "\u6DAA\u57CE\u533A"
          },
          {
            code: "510704",
            name: "\u6E38\u4ED9\u533A"
          },
          {
            code: "510705",
            name: "\u5B89\u5DDE\u533A"
          },
          {
            code: "510722",
            name: "\u4E09\u53F0\u53BF"
          },
          {
            code: "510723",
            name: "\u76D0\u4EAD\u53BF"
          },
          {
            code: "510725",
            name: "\u6893\u6F7C\u53BF"
          },
          {
            code: "510726",
            name: "\u5317\u5DDD\u7F8C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "510727",
            name: "\u5E73\u6B66\u53BF"
          },
          {
            code: "510781",
            name: "\u6C5F\u6CB9\u5E02"
          }
        ]
      },
      {
        code: "5108",
        name: "\u5E7F\u5143\u5E02",
        children: [
          {
            code: "510802",
            name: "\u5229\u5DDE\u533A"
          },
          {
            code: "510811",
            name: "\u662D\u5316\u533A"
          },
          {
            code: "510812",
            name: "\u671D\u5929\u533A"
          },
          {
            code: "510821",
            name: "\u65FA\u82CD\u53BF"
          },
          {
            code: "510822",
            name: "\u9752\u5DDD\u53BF"
          },
          {
            code: "510823",
            name: "\u5251\u9601\u53BF"
          },
          {
            code: "510824",
            name: "\u82CD\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "5109",
        name: "\u9042\u5B81\u5E02",
        children: [
          {
            code: "510903",
            name: "\u8239\u5C71\u533A"
          },
          {
            code: "510904",
            name: "\u5B89\u5C45\u533A"
          },
          {
            code: "510921",
            name: "\u84EC\u6EAA\u53BF"
          },
          {
            code: "510923",
            name: "\u5927\u82F1\u53BF"
          },
          {
            code: "510981",
            name: "\u5C04\u6D2A\u5E02"
          }
        ]
      },
      {
        code: "5110",
        name: "\u5185\u6C5F\u5E02",
        children: [
          {
            code: "511002",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "511011",
            name: "\u4E1C\u5174\u533A"
          },
          {
            code: "511024",
            name: "\u5A01\u8FDC\u53BF"
          },
          {
            code: "511025",
            name: "\u8D44\u4E2D\u53BF"
          },
          {
            code: "511071",
            name: "\u5185\u6C5F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "511083",
            name: "\u9686\u660C\u5E02"
          }
        ]
      },
      {
        code: "5111",
        name: "\u4E50\u5C71\u5E02",
        children: [
          {
            code: "511102",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "511111",
            name: "\u6C99\u6E7E\u533A"
          },
          {
            code: "511112",
            name: "\u4E94\u901A\u6865\u533A"
          },
          {
            code: "511113",
            name: "\u91D1\u53E3\u6CB3\u533A"
          },
          {
            code: "511123",
            name: "\u728D\u4E3A\u53BF"
          },
          {
            code: "511124",
            name: "\u4E95\u7814\u53BF"
          },
          {
            code: "511126",
            name: "\u5939\u6C5F\u53BF"
          },
          {
            code: "511129",
            name: "\u6C90\u5DDD\u53BF"
          },
          {
            code: "511132",
            name: "\u5CE8\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "511133",
            name: "\u9A6C\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "511181",
            name: "\u5CE8\u7709\u5C71\u5E02"
          }
        ]
      },
      {
        code: "5113",
        name: "\u5357\u5145\u5E02",
        children: [
          {
            code: "511302",
            name: "\u987A\u5E86\u533A"
          },
          {
            code: "511303",
            name: "\u9AD8\u576A\u533A"
          },
          {
            code: "511304",
            name: "\u5609\u9675\u533A"
          },
          {
            code: "511321",
            name: "\u5357\u90E8\u53BF"
          },
          {
            code: "511322",
            name: "\u8425\u5C71\u53BF"
          },
          {
            code: "511323",
            name: "\u84EC\u5B89\u53BF"
          },
          {
            code: "511324",
            name: "\u4EEA\u9647\u53BF"
          },
          {
            code: "511325",
            name: "\u897F\u5145\u53BF"
          },
          {
            code: "511381",
            name: "\u9606\u4E2D\u5E02"
          }
        ]
      },
      {
        code: "5114",
        name: "\u7709\u5C71\u5E02",
        children: [
          {
            code: "511402",
            name: "\u4E1C\u5761\u533A"
          },
          {
            code: "511403",
            name: "\u5F6D\u5C71\u533A"
          },
          {
            code: "511421",
            name: "\u4EC1\u5BFF\u53BF"
          },
          {
            code: "511423",
            name: "\u6D2A\u96C5\u53BF"
          },
          {
            code: "511424",
            name: "\u4E39\u68F1\u53BF"
          },
          {
            code: "511425",
            name: "\u9752\u795E\u53BF"
          }
        ]
      },
      {
        code: "5115",
        name: "\u5B9C\u5BBE\u5E02",
        children: [
          {
            code: "511502",
            name: "\u7FE0\u5C4F\u533A"
          },
          {
            code: "511503",
            name: "\u5357\u6EAA\u533A"
          },
          {
            code: "511504",
            name: "\u53D9\u5DDE\u533A"
          },
          {
            code: "511523",
            name: "\u6C5F\u5B89\u53BF"
          },
          {
            code: "511524",
            name: "\u957F\u5B81\u53BF"
          },
          {
            code: "511525",
            name: "\u9AD8\u53BF"
          },
          {
            code: "511526",
            name: "\u73D9\u53BF"
          },
          {
            code: "511527",
            name: "\u7B60\u8FDE\u53BF"
          },
          {
            code: "511528",
            name: "\u5174\u6587\u53BF"
          },
          {
            code: "511529",
            name: "\u5C4F\u5C71\u53BF"
          }
        ]
      },
      {
        code: "5116",
        name: "\u5E7F\u5B89\u5E02",
        children: [
          {
            code: "511602",
            name: "\u5E7F\u5B89\u533A"
          },
          {
            code: "511603",
            name: "\u524D\u950B\u533A"
          },
          {
            code: "511621",
            name: "\u5CB3\u6C60\u53BF"
          },
          {
            code: "511622",
            name: "\u6B66\u80DC\u53BF"
          },
          {
            code: "511623",
            name: "\u90BB\u6C34\u53BF"
          },
          {
            code: "511681",
            name: "\u534E\u84E5\u5E02"
          }
        ]
      },
      {
        code: "5117",
        name: "\u8FBE\u5DDE\u5E02",
        children: [
          {
            code: "511702",
            name: "\u901A\u5DDD\u533A"
          },
          {
            code: "511703",
            name: "\u8FBE\u5DDD\u533A"
          },
          {
            code: "511722",
            name: "\u5BA3\u6C49\u53BF"
          },
          {
            code: "511723",
            name: "\u5F00\u6C5F\u53BF"
          },
          {
            code: "511724",
            name: "\u5927\u7AF9\u53BF"
          },
          {
            code: "511725",
            name: "\u6E20\u53BF"
          },
          {
            code: "511771",
            name: "\u8FBE\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "511781",
            name: "\u4E07\u6E90\u5E02"
          }
        ]
      },
      {
        code: "5118",
        name: "\u96C5\u5B89\u5E02",
        children: [
          {
            code: "511802",
            name: "\u96E8\u57CE\u533A"
          },
          {
            code: "511803",
            name: "\u540D\u5C71\u533A"
          },
          {
            code: "511822",
            name: "\u8365\u7ECF\u53BF"
          },
          {
            code: "511823",
            name: "\u6C49\u6E90\u53BF"
          },
          {
            code: "511824",
            name: "\u77F3\u68C9\u53BF"
          },
          {
            code: "511825",
            name: "\u5929\u5168\u53BF"
          },
          {
            code: "511826",
            name: "\u82A6\u5C71\u53BF"
          },
          {
            code: "511827",
            name: "\u5B9D\u5174\u53BF"
          }
        ]
      },
      {
        code: "5119",
        name: "\u5DF4\u4E2D\u5E02",
        children: [
          {
            code: "511902",
            name: "\u5DF4\u5DDE\u533A"
          },
          {
            code: "511903",
            name: "\u6069\u9633\u533A"
          },
          {
            code: "511921",
            name: "\u901A\u6C5F\u53BF"
          },
          {
            code: "511922",
            name: "\u5357\u6C5F\u53BF"
          },
          {
            code: "511923",
            name: "\u5E73\u660C\u53BF"
          },
          {
            code: "511971",
            name: "\u5DF4\u4E2D\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "5120",
        name: "\u8D44\u9633\u5E02",
        children: [
          {
            code: "512002",
            name: "\u96C1\u6C5F\u533A"
          },
          {
            code: "512021",
            name: "\u5B89\u5CB3\u53BF"
          },
          {
            code: "512022",
            name: "\u4E50\u81F3\u53BF"
          }
        ]
      },
      {
        code: "5132",
        name: "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513201",
            name: "\u9A6C\u5C14\u5EB7\u5E02"
          },
          {
            code: "513221",
            name: "\u6C76\u5DDD\u53BF"
          },
          {
            code: "513222",
            name: "\u7406\u53BF"
          },
          {
            code: "513223",
            name: "\u8302\u53BF"
          },
          {
            code: "513224",
            name: "\u677E\u6F58\u53BF"
          },
          {
            code: "513225",
            name: "\u4E5D\u5BE8\u6C9F\u53BF"
          },
          {
            code: "513226",
            name: "\u91D1\u5DDD\u53BF"
          },
          {
            code: "513227",
            name: "\u5C0F\u91D1\u53BF"
          },
          {
            code: "513228",
            name: "\u9ED1\u6C34\u53BF"
          },
          {
            code: "513230",
            name: "\u58E4\u5858\u53BF"
          },
          {
            code: "513231",
            name: "\u963F\u575D\u53BF"
          },
          {
            code: "513232",
            name: "\u82E5\u5C14\u76D6\u53BF"
          },
          {
            code: "513233",
            name: "\u7EA2\u539F\u53BF"
          }
        ]
      },
      {
        code: "5133",
        name: "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513301",
            name: "\u5EB7\u5B9A\u5E02"
          },
          {
            code: "513322",
            name: "\u6CF8\u5B9A\u53BF"
          },
          {
            code: "513323",
            name: "\u4E39\u5DF4\u53BF"
          },
          {
            code: "513324",
            name: "\u4E5D\u9F99\u53BF"
          },
          {
            code: "513325",
            name: "\u96C5\u6C5F\u53BF"
          },
          {
            code: "513326",
            name: "\u9053\u5B5A\u53BF"
          },
          {
            code: "513327",
            name: "\u7089\u970D\u53BF"
          },
          {
            code: "513328",
            name: "\u7518\u5B5C\u53BF"
          },
          {
            code: "513329",
            name: "\u65B0\u9F99\u53BF"
          },
          {
            code: "513330",
            name: "\u5FB7\u683C\u53BF"
          },
          {
            code: "513331",
            name: "\u767D\u7389\u53BF"
          },
          {
            code: "513332",
            name: "\u77F3\u6E20\u53BF"
          },
          {
            code: "513333",
            name: "\u8272\u8FBE\u53BF"
          },
          {
            code: "513334",
            name: "\u7406\u5858\u53BF"
          },
          {
            code: "513335",
            name: "\u5DF4\u5858\u53BF"
          },
          {
            code: "513336",
            name: "\u4E61\u57CE\u53BF"
          },
          {
            code: "513337",
            name: "\u7A3B\u57CE\u53BF"
          },
          {
            code: "513338",
            name: "\u5F97\u8363\u53BF"
          }
        ]
      },
      {
        code: "5134",
        name: "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513401",
            name: "\u897F\u660C\u5E02"
          },
          {
            code: "513422",
            name: "\u6728\u91CC\u85CF\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "513423",
            name: "\u76D0\u6E90\u53BF"
          },
          {
            code: "513424",
            name: "\u5FB7\u660C\u53BF"
          },
          {
            code: "513425",
            name: "\u4F1A\u7406\u53BF"
          },
          {
            code: "513426",
            name: "\u4F1A\u4E1C\u53BF"
          },
          {
            code: "513427",
            name: "\u5B81\u5357\u53BF"
          },
          {
            code: "513428",
            name: "\u666E\u683C\u53BF"
          },
          {
            code: "513429",
            name: "\u5E03\u62D6\u53BF"
          },
          {
            code: "513430",
            name: "\u91D1\u9633\u53BF"
          },
          {
            code: "513431",
            name: "\u662D\u89C9\u53BF"
          },
          {
            code: "513432",
            name: "\u559C\u5FB7\u53BF"
          },
          {
            code: "513433",
            name: "\u5195\u5B81\u53BF"
          },
          {
            code: "513434",
            name: "\u8D8A\u897F\u53BF"
          },
          {
            code: "513435",
            name: "\u7518\u6D1B\u53BF"
          },
          {
            code: "513436",
            name: "\u7F8E\u59D1\u53BF"
          },
          {
            code: "513437",
            name: "\u96F7\u6CE2\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "52",
    name: "\u8D35\u5DDE\u7701",
    children: [
      {
        code: "5201",
        name: "\u8D35\u9633\u5E02",
        children: [
          {
            code: "520102",
            name: "\u5357\u660E\u533A"
          },
          {
            code: "520103",
            name: "\u4E91\u5CA9\u533A"
          },
          {
            code: "520111",
            name: "\u82B1\u6EAA\u533A"
          },
          {
            code: "520112",
            name: "\u4E4C\u5F53\u533A"
          },
          {
            code: "520113",
            name: "\u767D\u4E91\u533A"
          },
          {
            code: "520115",
            name: "\u89C2\u5C71\u6E56\u533A"
          },
          {
            code: "520121",
            name: "\u5F00\u9633\u53BF"
          },
          {
            code: "520122",
            name: "\u606F\u70FD\u53BF"
          },
          {
            code: "520123",
            name: "\u4FEE\u6587\u53BF"
          },
          {
            code: "520181",
            name: "\u6E05\u9547\u5E02"
          }
        ]
      },
      {
        code: "5202",
        name: "\u516D\u76D8\u6C34\u5E02",
        children: [
          {
            code: "520201",
            name: "\u949F\u5C71\u533A"
          },
          {
            code: "520203",
            name: "\u516D\u679D\u7279\u533A"
          },
          {
            code: "520221",
            name: "\u6C34\u57CE\u53BF"
          },
          {
            code: "520281",
            name: "\u76D8\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "5203",
        name: "\u9075\u4E49\u5E02",
        children: [
          {
            code: "520302",
            name: "\u7EA2\u82B1\u5C97\u533A"
          },
          {
            code: "520303",
            name: "\u6C47\u5DDD\u533A"
          },
          {
            code: "520304",
            name: "\u64AD\u5DDE\u533A"
          },
          {
            code: "520322",
            name: "\u6850\u6893\u53BF"
          },
          {
            code: "520323",
            name: "\u7EE5\u9633\u53BF"
          },
          {
            code: "520324",
            name: "\u6B63\u5B89\u53BF"
          },
          {
            code: "520325",
            name: "\u9053\u771F\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520326",
            name: "\u52A1\u5DDD\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520327",
            name: "\u51E4\u5188\u53BF"
          },
          {
            code: "520328",
            name: "\u6E44\u6F6D\u53BF"
          },
          {
            code: "520329",
            name: "\u4F59\u5E86\u53BF"
          },
          {
            code: "520330",
            name: "\u4E60\u6C34\u53BF"
          },
          {
            code: "520381",
            name: "\u8D64\u6C34\u5E02"
          },
          {
            code: "520382",
            name: "\u4EC1\u6000\u5E02"
          }
        ]
      },
      {
        code: "5204",
        name: "\u5B89\u987A\u5E02",
        children: [
          {
            code: "520402",
            name: "\u897F\u79C0\u533A"
          },
          {
            code: "520403",
            name: "\u5E73\u575D\u533A"
          },
          {
            code: "520422",
            name: "\u666E\u5B9A\u53BF"
          },
          {
            code: "520423",
            name: "\u9547\u5B81\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520424",
            name: "\u5173\u5CAD\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520425",
            name: "\u7D2B\u4E91\u82D7\u65CF\u5E03\u4F9D\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5205",
        name: "\u6BD5\u8282\u5E02",
        children: [
          {
            code: "520502",
            name: "\u4E03\u661F\u5173\u533A"
          },
          {
            code: "520521",
            name: "\u5927\u65B9\u53BF"
          },
          {
            code: "520522",
            name: "\u9ED4\u897F\u53BF"
          },
          {
            code: "520523",
            name: "\u91D1\u6C99\u53BF"
          },
          {
            code: "520524",
            name: "\u7EC7\u91D1\u53BF"
          },
          {
            code: "520525",
            name: "\u7EB3\u96CD\u53BF"
          },
          {
            code: "520526",
            name: "\u5A01\u5B81\u5F5D\u65CF\u56DE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520527",
            name: "\u8D6B\u7AE0\u53BF"
          }
        ]
      },
      {
        code: "5206",
        name: "\u94DC\u4EC1\u5E02",
        children: [
          {
            code: "520602",
            name: "\u78A7\u6C5F\u533A"
          },
          {
            code: "520603",
            name: "\u4E07\u5C71\u533A"
          },
          {
            code: "520621",
            name: "\u6C5F\u53E3\u53BF"
          },
          {
            code: "520622",
            name: "\u7389\u5C4F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520623",
            name: "\u77F3\u9621\u53BF"
          },
          {
            code: "520624",
            name: "\u601D\u5357\u53BF"
          },
          {
            code: "520625",
            name: "\u5370\u6C5F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520626",
            name: "\u5FB7\u6C5F\u53BF"
          },
          {
            code: "520627",
            name: "\u6CBF\u6CB3\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520628",
            name: "\u677E\u6843\u82D7\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5223",
        name: "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522301",
            name: "\u5174\u4E49\u5E02"
          },
          {
            code: "522302",
            name: "\u5174\u4EC1\u5E02"
          },
          {
            code: "522323",
            name: "\u666E\u5B89\u53BF"
          },
          {
            code: "522324",
            name: "\u6674\u9686\u53BF"
          },
          {
            code: "522325",
            name: "\u8D1E\u4E30\u53BF"
          },
          {
            code: "522326",
            name: "\u671B\u8C1F\u53BF"
          },
          {
            code: "522327",
            name: "\u518C\u4EA8\u53BF"
          },
          {
            code: "522328",
            name: "\u5B89\u9F99\u53BF"
          }
        ]
      },
      {
        code: "5226",
        name: "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522601",
            name: "\u51EF\u91CC\u5E02"
          },
          {
            code: "522622",
            name: "\u9EC4\u5E73\u53BF"
          },
          {
            code: "522623",
            name: "\u65BD\u79C9\u53BF"
          },
          {
            code: "522624",
            name: "\u4E09\u7A57\u53BF"
          },
          {
            code: "522625",
            name: "\u9547\u8FDC\u53BF"
          },
          {
            code: "522626",
            name: "\u5C91\u5DE9\u53BF"
          },
          {
            code: "522627",
            name: "\u5929\u67F1\u53BF"
          },
          {
            code: "522628",
            name: "\u9526\u5C4F\u53BF"
          },
          {
            code: "522629",
            name: "\u5251\u6CB3\u53BF"
          },
          {
            code: "522630",
            name: "\u53F0\u6C5F\u53BF"
          },
          {
            code: "522631",
            name: "\u9ECE\u5E73\u53BF"
          },
          {
            code: "522632",
            name: "\u6995\u6C5F\u53BF"
          },
          {
            code: "522633",
            name: "\u4ECE\u6C5F\u53BF"
          },
          {
            code: "522634",
            name: "\u96F7\u5C71\u53BF"
          },
          {
            code: "522635",
            name: "\u9EBB\u6C5F\u53BF"
          },
          {
            code: "522636",
            name: "\u4E39\u5BE8\u53BF"
          }
        ]
      },
      {
        code: "5227",
        name: "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522701",
            name: "\u90FD\u5300\u5E02"
          },
          {
            code: "522702",
            name: "\u798F\u6CC9\u5E02"
          },
          {
            code: "522722",
            name: "\u8354\u6CE2\u53BF"
          },
          {
            code: "522723",
            name: "\u8D35\u5B9A\u53BF"
          },
          {
            code: "522725",
            name: "\u74EE\u5B89\u53BF"
          },
          {
            code: "522726",
            name: "\u72EC\u5C71\u53BF"
          },
          {
            code: "522727",
            name: "\u5E73\u5858\u53BF"
          },
          {
            code: "522728",
            name: "\u7F57\u7538\u53BF"
          },
          {
            code: "522729",
            name: "\u957F\u987A\u53BF"
          },
          {
            code: "522730",
            name: "\u9F99\u91CC\u53BF"
          },
          {
            code: "522731",
            name: "\u60E0\u6C34\u53BF"
          },
          {
            code: "522732",
            name: "\u4E09\u90FD\u6C34\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "53",
    name: "\u4E91\u5357\u7701",
    children: [
      {
        code: "5301",
        name: "\u6606\u660E\u5E02",
        children: [
          {
            code: "530102",
            name: "\u4E94\u534E\u533A"
          },
          {
            code: "530103",
            name: "\u76D8\u9F99\u533A"
          },
          {
            code: "530111",
            name: "\u5B98\u6E21\u533A"
          },
          {
            code: "530112",
            name: "\u897F\u5C71\u533A"
          },
          {
            code: "530113",
            name: "\u4E1C\u5DDD\u533A"
          },
          {
            code: "530114",
            name: "\u5448\u8D21\u533A"
          },
          {
            code: "530115",
            name: "\u664B\u5B81\u533A"
          },
          {
            code: "530124",
            name: "\u5BCC\u6C11\u53BF"
          },
          {
            code: "530125",
            name: "\u5B9C\u826F\u53BF"
          },
          {
            code: "530126",
            name: "\u77F3\u6797\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530127",
            name: "\u5D69\u660E\u53BF"
          },
          {
            code: "530128",
            name: "\u7984\u529D\u5F5D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530129",
            name: "\u5BFB\u7538\u56DE\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530181",
            name: "\u5B89\u5B81\u5E02"
          }
        ]
      },
      {
        code: "5303",
        name: "\u66F2\u9756\u5E02",
        children: [
          {
            code: "530302",
            name: "\u9E92\u9E9F\u533A"
          },
          {
            code: "530303",
            name: "\u6CBE\u76CA\u533A"
          },
          {
            code: "530304",
            name: "\u9A6C\u9F99\u533A"
          },
          {
            code: "530322",
            name: "\u9646\u826F\u53BF"
          },
          {
            code: "530323",
            name: "\u5E08\u5B97\u53BF"
          },
          {
            code: "530324",
            name: "\u7F57\u5E73\u53BF"
          },
          {
            code: "530325",
            name: "\u5BCC\u6E90\u53BF"
          },
          {
            code: "530326",
            name: "\u4F1A\u6CFD\u53BF"
          },
          {
            code: "530381",
            name: "\u5BA3\u5A01\u5E02"
          }
        ]
      },
      {
        code: "5304",
        name: "\u7389\u6EAA\u5E02",
        children: [
          {
            code: "530402",
            name: "\u7EA2\u5854\u533A"
          },
          {
            code: "530403",
            name: "\u6C5F\u5DDD\u533A"
          },
          {
            code: "530423",
            name: "\u901A\u6D77\u53BF"
          },
          {
            code: "530424",
            name: "\u534E\u5B81\u53BF"
          },
          {
            code: "530425",
            name: "\u6613\u95E8\u53BF"
          },
          {
            code: "530426",
            name: "\u5CE8\u5C71\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530427",
            name: "\u65B0\u5E73\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530428",
            name: "\u5143\u6C5F\u54C8\u5C3C\u65CF\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530481",
            name: "\u6F84\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "5305",
        name: "\u4FDD\u5C71\u5E02",
        children: [
          {
            code: "530502",
            name: "\u9686\u9633\u533A"
          },
          {
            code: "530521",
            name: "\u65BD\u7538\u53BF"
          },
          {
            code: "530523",
            name: "\u9F99\u9675\u53BF"
          },
          {
            code: "530524",
            name: "\u660C\u5B81\u53BF"
          },
          {
            code: "530581",
            name: "\u817E\u51B2\u5E02"
          }
        ]
      },
      {
        code: "5306",
        name: "\u662D\u901A\u5E02",
        children: [
          {
            code: "530602",
            name: "\u662D\u9633\u533A"
          },
          {
            code: "530621",
            name: "\u9C81\u7538\u53BF"
          },
          {
            code: "530622",
            name: "\u5DE7\u5BB6\u53BF"
          },
          {
            code: "530623",
            name: "\u76D0\u6D25\u53BF"
          },
          {
            code: "530624",
            name: "\u5927\u5173\u53BF"
          },
          {
            code: "530625",
            name: "\u6C38\u5584\u53BF"
          },
          {
            code: "530626",
            name: "\u7EE5\u6C5F\u53BF"
          },
          {
            code: "530627",
            name: "\u9547\u96C4\u53BF"
          },
          {
            code: "530628",
            name: "\u5F5D\u826F\u53BF"
          },
          {
            code: "530629",
            name: "\u5A01\u4FE1\u53BF"
          },
          {
            code: "530681",
            name: "\u6C34\u5BCC\u5E02"
          }
        ]
      },
      {
        code: "5307",
        name: "\u4E3D\u6C5F\u5E02",
        children: [
          {
            code: "530702",
            name: "\u53E4\u57CE\u533A"
          },
          {
            code: "530721",
            name: "\u7389\u9F99\u7EB3\u897F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530722",
            name: "\u6C38\u80DC\u53BF"
          },
          {
            code: "530723",
            name: "\u534E\u576A\u53BF"
          },
          {
            code: "530724",
            name: "\u5B81\u8497\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5308",
        name: "\u666E\u6D31\u5E02",
        children: [
          {
            code: "530802",
            name: "\u601D\u8305\u533A"
          },
          {
            code: "530821",
            name: "\u5B81\u6D31\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530822",
            name: "\u58A8\u6C5F\u54C8\u5C3C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530823",
            name: "\u666F\u4E1C\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530824",
            name: "\u666F\u8C37\u50A3\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530825",
            name: "\u9547\u6C85\u5F5D\u65CF\u54C8\u5C3C\u65CF\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530826",
            name: "\u6C5F\u57CE\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530827",
            name: "\u5B5F\u8FDE\u50A3\u65CF\u62C9\u795C\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530828",
            name: "\u6F9C\u6CA7\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530829",
            name: "\u897F\u76DF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5309",
        name: "\u4E34\u6CA7\u5E02",
        children: [
          {
            code: "530902",
            name: "\u4E34\u7FD4\u533A"
          },
          {
            code: "530921",
            name: "\u51E4\u5E86\u53BF"
          },
          {
            code: "530922",
            name: "\u4E91\u53BF"
          },
          {
            code: "530923",
            name: "\u6C38\u5FB7\u53BF"
          },
          {
            code: "530924",
            name: "\u9547\u5EB7\u53BF"
          },
          {
            code: "530925",
            name: "\u53CC\u6C5F\u62C9\u795C\u65CF\u4F64\u65CF\u5E03\u6717\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530926",
            name: "\u803F\u9A6C\u50A3\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530927",
            name: "\u6CA7\u6E90\u4F64\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5323",
        name: "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532301",
            name: "\u695A\u96C4\u5E02"
          },
          {
            code: "532322",
            name: "\u53CC\u67CF\u53BF"
          },
          {
            code: "532323",
            name: "\u725F\u5B9A\u53BF"
          },
          {
            code: "532324",
            name: "\u5357\u534E\u53BF"
          },
          {
            code: "532325",
            name: "\u59DA\u5B89\u53BF"
          },
          {
            code: "532326",
            name: "\u5927\u59DA\u53BF"
          },
          {
            code: "532327",
            name: "\u6C38\u4EC1\u53BF"
          },
          {
            code: "532328",
            name: "\u5143\u8C0B\u53BF"
          },
          {
            code: "532329",
            name: "\u6B66\u5B9A\u53BF"
          },
          {
            code: "532331",
            name: "\u7984\u4E30\u53BF"
          }
        ]
      },
      {
        code: "5325",
        name: "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532501",
            name: "\u4E2A\u65E7\u5E02"
          },
          {
            code: "532502",
            name: "\u5F00\u8FDC\u5E02"
          },
          {
            code: "532503",
            name: "\u8499\u81EA\u5E02"
          },
          {
            code: "532504",
            name: "\u5F25\u52D2\u5E02"
          },
          {
            code: "532523",
            name: "\u5C4F\u8FB9\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532524",
            name: "\u5EFA\u6C34\u53BF"
          },
          {
            code: "532525",
            name: "\u77F3\u5C4F\u53BF"
          },
          {
            code: "532527",
            name: "\u6CF8\u897F\u53BF"
          },
          {
            code: "532528",
            name: "\u5143\u9633\u53BF"
          },
          {
            code: "532529",
            name: "\u7EA2\u6CB3\u53BF"
          },
          {
            code: "532530",
            name: "\u91D1\u5E73\u82D7\u65CF\u7476\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532531",
            name: "\u7EFF\u6625\u53BF"
          },
          {
            code: "532532",
            name: "\u6CB3\u53E3\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5326",
        name: "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532601",
            name: "\u6587\u5C71\u5E02"
          },
          {
            code: "532622",
            name: "\u781A\u5C71\u53BF"
          },
          {
            code: "532623",
            name: "\u897F\u7574\u53BF"
          },
          {
            code: "532624",
            name: "\u9EBB\u6817\u5761\u53BF"
          },
          {
            code: "532625",
            name: "\u9A6C\u5173\u53BF"
          },
          {
            code: "532626",
            name: "\u4E18\u5317\u53BF"
          },
          {
            code: "532627",
            name: "\u5E7F\u5357\u53BF"
          },
          {
            code: "532628",
            name: "\u5BCC\u5B81\u53BF"
          }
        ]
      },
      {
        code: "5328",
        name: "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532801",
            name: "\u666F\u6D2A\u5E02"
          },
          {
            code: "532822",
            name: "\u52D0\u6D77\u53BF"
          },
          {
            code: "532823",
            name: "\u52D0\u814A\u53BF"
          }
        ]
      },
      {
        code: "5329",
        name: "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532901",
            name: "\u5927\u7406\u5E02"
          },
          {
            code: "532922",
            name: "\u6F3E\u6FDE\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532923",
            name: "\u7965\u4E91\u53BF"
          },
          {
            code: "532924",
            name: "\u5BBE\u5DDD\u53BF"
          },
          {
            code: "532925",
            name: "\u5F25\u6E21\u53BF"
          },
          {
            code: "532926",
            name: "\u5357\u6DA7\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532927",
            name: "\u5DCD\u5C71\u5F5D\u65CF\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532928",
            name: "\u6C38\u5E73\u53BF"
          },
          {
            code: "532929",
            name: "\u4E91\u9F99\u53BF"
          },
          {
            code: "532930",
            name: "\u6D31\u6E90\u53BF"
          },
          {
            code: "532931",
            name: "\u5251\u5DDD\u53BF"
          },
          {
            code: "532932",
            name: "\u9E64\u5E86\u53BF"
          }
        ]
      },
      {
        code: "5331",
        name: "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533102",
            name: "\u745E\u4E3D\u5E02"
          },
          {
            code: "533103",
            name: "\u8292\u5E02"
          },
          {
            code: "533122",
            name: "\u6881\u6CB3\u53BF"
          },
          {
            code: "533123",
            name: "\u76C8\u6C5F\u53BF"
          },
          {
            code: "533124",
            name: "\u9647\u5DDD\u53BF"
          }
        ]
      },
      {
        code: "5333",
        name: "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533301",
            name: "\u6CF8\u6C34\u5E02"
          },
          {
            code: "533323",
            name: "\u798F\u8D21\u53BF"
          },
          {
            code: "533324",
            name: "\u8D21\u5C71\u72EC\u9F99\u65CF\u6012\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "533325",
            name: "\u5170\u576A\u767D\u65CF\u666E\u7C73\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5334",
        name: "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533401",
            name: "\u9999\u683C\u91CC\u62C9\u5E02"
          },
          {
            code: "533422",
            name: "\u5FB7\u94A6\u53BF"
          },
          {
            code: "533423",
            name: "\u7EF4\u897F\u5088\u50F3\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "54",
    name: "\u897F\u85CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "5401",
        name: "\u62C9\u8428\u5E02",
        children: [
          {
            code: "540102",
            name: "\u57CE\u5173\u533A"
          },
          {
            code: "540103",
            name: "\u5806\u9F99\u5FB7\u5E86\u533A"
          },
          {
            code: "540104",
            name: "\u8FBE\u5B5C\u533A"
          },
          {
            code: "540121",
            name: "\u6797\u5468\u53BF"
          },
          {
            code: "540122",
            name: "\u5F53\u96C4\u53BF"
          },
          {
            code: "540123",
            name: "\u5C3C\u6728\u53BF"
          },
          {
            code: "540124",
            name: "\u66F2\u6C34\u53BF"
          },
          {
            code: "540127",
            name: "\u58A8\u7AF9\u5DE5\u5361\u53BF"
          },
          {
            code: "540171",
            name: "\u683C\u5C14\u6728\u85CF\u9752\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "540172",
            name: "\u62C9\u8428\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "540173",
            name: "\u897F\u85CF\u6587\u5316\u65C5\u6E38\u521B\u610F\u56ED\u533A"
          },
          {
            code: "540174",
            name: "\u8FBE\u5B5C\u5DE5\u4E1A\u56ED\u533A"
          }
        ]
      },
      {
        code: "5402",
        name: "\u65E5\u5580\u5219\u5E02",
        children: [
          {
            code: "540202",
            name: "\u6851\u73E0\u5B5C\u533A"
          },
          {
            code: "540221",
            name: "\u5357\u6728\u6797\u53BF"
          },
          {
            code: "540222",
            name: "\u6C5F\u5B5C\u53BF"
          },
          {
            code: "540223",
            name: "\u5B9A\u65E5\u53BF"
          },
          {
            code: "540224",
            name: "\u8428\u8FE6\u53BF"
          },
          {
            code: "540225",
            name: "\u62C9\u5B5C\u53BF"
          },
          {
            code: "540226",
            name: "\u6602\u4EC1\u53BF"
          },
          {
            code: "540227",
            name: "\u8C22\u901A\u95E8\u53BF"
          },
          {
            code: "540228",
            name: "\u767D\u6717\u53BF"
          },
          {
            code: "540229",
            name: "\u4EC1\u5E03\u53BF"
          },
          {
            code: "540230",
            name: "\u5EB7\u9A6C\u53BF"
          },
          {
            code: "540231",
            name: "\u5B9A\u7ED3\u53BF"
          },
          {
            code: "540232",
            name: "\u4EF2\u5DF4\u53BF"
          },
          {
            code: "540233",
            name: "\u4E9A\u4E1C\u53BF"
          },
          {
            code: "540234",
            name: "\u5409\u9686\u53BF"
          },
          {
            code: "540235",
            name: "\u8042\u62C9\u6728\u53BF"
          },
          {
            code: "540236",
            name: "\u8428\u560E\u53BF"
          },
          {
            code: "540237",
            name: "\u5C97\u5DF4\u53BF"
          }
        ]
      },
      {
        code: "5403",
        name: "\u660C\u90FD\u5E02",
        children: [
          {
            code: "540302",
            name: "\u5361\u82E5\u533A"
          },
          {
            code: "540321",
            name: "\u6C5F\u8FBE\u53BF"
          },
          {
            code: "540322",
            name: "\u8D21\u89C9\u53BF"
          },
          {
            code: "540323",
            name: "\u7C7B\u4E4C\u9F50\u53BF"
          },
          {
            code: "540324",
            name: "\u4E01\u9752\u53BF"
          },
          {
            code: "540325",
            name: "\u5BDF\u96C5\u53BF"
          },
          {
            code: "540326",
            name: "\u516B\u5BBF\u53BF"
          },
          {
            code: "540327",
            name: "\u5DE6\u8D21\u53BF"
          },
          {
            code: "540328",
            name: "\u8292\u5EB7\u53BF"
          },
          {
            code: "540329",
            name: "\u6D1B\u9686\u53BF"
          },
          {
            code: "540330",
            name: "\u8FB9\u575D\u53BF"
          }
        ]
      },
      {
        code: "5404",
        name: "\u6797\u829D\u5E02",
        children: [
          {
            code: "540402",
            name: "\u5DF4\u5B9C\u533A"
          },
          {
            code: "540421",
            name: "\u5DE5\u5E03\u6C5F\u8FBE\u53BF"
          },
          {
            code: "540422",
            name: "\u7C73\u6797\u53BF"
          },
          {
            code: "540423",
            name: "\u58A8\u8131\u53BF"
          },
          {
            code: "540424",
            name: "\u6CE2\u5BC6\u53BF"
          },
          {
            code: "540425",
            name: "\u5BDF\u9685\u53BF"
          },
          {
            code: "540426",
            name: "\u6717\u53BF"
          }
        ]
      },
      {
        code: "5405",
        name: "\u5C71\u5357\u5E02",
        children: [
          {
            code: "540502",
            name: "\u4E43\u4E1C\u533A"
          },
          {
            code: "540521",
            name: "\u624E\u56CA\u53BF"
          },
          {
            code: "540522",
            name: "\u8D21\u560E\u53BF"
          },
          {
            code: "540523",
            name: "\u6851\u65E5\u53BF"
          },
          {
            code: "540524",
            name: "\u743C\u7ED3\u53BF"
          },
          {
            code: "540525",
            name: "\u66F2\u677E\u53BF"
          },
          {
            code: "540526",
            name: "\u63AA\u7F8E\u53BF"
          },
          {
            code: "540527",
            name: "\u6D1B\u624E\u53BF"
          },
          {
            code: "540528",
            name: "\u52A0\u67E5\u53BF"
          },
          {
            code: "540529",
            name: "\u9686\u5B50\u53BF"
          },
          {
            code: "540530",
            name: "\u9519\u90A3\u53BF"
          },
          {
            code: "540531",
            name: "\u6D6A\u5361\u5B50\u53BF"
          }
        ]
      },
      {
        code: "5406",
        name: "\u90A3\u66F2\u5E02",
        children: [
          {
            code: "540602",
            name: "\u8272\u5C3C\u533A"
          },
          {
            code: "540621",
            name: "\u5609\u9ECE\u53BF"
          },
          {
            code: "540622",
            name: "\u6BD4\u5982\u53BF"
          },
          {
            code: "540623",
            name: "\u8042\u8363\u53BF"
          },
          {
            code: "540624",
            name: "\u5B89\u591A\u53BF"
          },
          {
            code: "540625",
            name: "\u7533\u624E\u53BF"
          },
          {
            code: "540626",
            name: "\u7D22\u53BF"
          },
          {
            code: "540627",
            name: "\u73ED\u6208\u53BF"
          },
          {
            code: "540628",
            name: "\u5DF4\u9752\u53BF"
          },
          {
            code: "540629",
            name: "\u5C3C\u739B\u53BF"
          },
          {
            code: "540630",
            name: "\u53CC\u6E56\u53BF"
          }
        ]
      },
      {
        code: "5425",
        name: "\u963F\u91CC\u5730\u533A",
        children: [
          {
            code: "542521",
            name: "\u666E\u5170\u53BF"
          },
          {
            code: "542522",
            name: "\u672D\u8FBE\u53BF"
          },
          {
            code: "542523",
            name: "\u5676\u5C14\u53BF"
          },
          {
            code: "542524",
            name: "\u65E5\u571F\u53BF"
          },
          {
            code: "542525",
            name: "\u9769\u5409\u53BF"
          },
          {
            code: "542526",
            name: "\u6539\u5219\u53BF"
          },
          {
            code: "542527",
            name: "\u63AA\u52E4\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "61",
    name: "\u9655\u897F\u7701",
    children: [
      {
        code: "6101",
        name: "\u897F\u5B89\u5E02",
        children: [
          {
            code: "610102",
            name: "\u65B0\u57CE\u533A"
          },
          {
            code: "610103",
            name: "\u7891\u6797\u533A"
          },
          {
            code: "610104",
            name: "\u83B2\u6E56\u533A"
          },
          {
            code: "610111",
            name: "\u705E\u6865\u533A"
          },
          {
            code: "610112",
            name: "\u672A\u592E\u533A"
          },
          {
            code: "610113",
            name: "\u96C1\u5854\u533A"
          },
          {
            code: "610114",
            name: "\u960E\u826F\u533A"
          },
          {
            code: "610115",
            name: "\u4E34\u6F7C\u533A"
          },
          {
            code: "610116",
            name: "\u957F\u5B89\u533A"
          },
          {
            code: "610117",
            name: "\u9AD8\u9675\u533A"
          },
          {
            code: "610118",
            name: "\u9120\u9091\u533A"
          },
          {
            code: "610122",
            name: "\u84DD\u7530\u53BF"
          },
          {
            code: "610124",
            name: "\u5468\u81F3\u53BF"
          }
        ]
      },
      {
        code: "6102",
        name: "\u94DC\u5DDD\u5E02",
        children: [
          {
            code: "610202",
            name: "\u738B\u76CA\u533A"
          },
          {
            code: "610203",
            name: "\u5370\u53F0\u533A"
          },
          {
            code: "610204",
            name: "\u8000\u5DDE\u533A"
          },
          {
            code: "610222",
            name: "\u5B9C\u541B\u53BF"
          }
        ]
      },
      {
        code: "6103",
        name: "\u5B9D\u9E21\u5E02",
        children: [
          {
            code: "610302",
            name: "\u6E2D\u6EE8\u533A"
          },
          {
            code: "610303",
            name: "\u91D1\u53F0\u533A"
          },
          {
            code: "610304",
            name: "\u9648\u4ED3\u533A"
          },
          {
            code: "610322",
            name: "\u51E4\u7FD4\u53BF"
          },
          {
            code: "610323",
            name: "\u5C90\u5C71\u53BF"
          },
          {
            code: "610324",
            name: "\u6276\u98CE\u53BF"
          },
          {
            code: "610326",
            name: "\u7709\u53BF"
          },
          {
            code: "610327",
            name: "\u9647\u53BF"
          },
          {
            code: "610328",
            name: "\u5343\u9633\u53BF"
          },
          {
            code: "610329",
            name: "\u9E9F\u6E38\u53BF"
          },
          {
            code: "610330",
            name: "\u51E4\u53BF"
          },
          {
            code: "610331",
            name: "\u592A\u767D\u53BF"
          }
        ]
      },
      {
        code: "6104",
        name: "\u54B8\u9633\u5E02",
        children: [
          {
            code: "610402",
            name: "\u79E6\u90FD\u533A"
          },
          {
            code: "610403",
            name: "\u6768\u9675\u533A"
          },
          {
            code: "610404",
            name: "\u6E2D\u57CE\u533A"
          },
          {
            code: "610422",
            name: "\u4E09\u539F\u53BF"
          },
          {
            code: "610423",
            name: "\u6CFE\u9633\u53BF"
          },
          {
            code: "610424",
            name: "\u4E7E\u53BF"
          },
          {
            code: "610425",
            name: "\u793C\u6CC9\u53BF"
          },
          {
            code: "610426",
            name: "\u6C38\u5BFF\u53BF"
          },
          {
            code: "610428",
            name: "\u957F\u6B66\u53BF"
          },
          {
            code: "610429",
            name: "\u65EC\u9091\u53BF"
          },
          {
            code: "610430",
            name: "\u6DF3\u5316\u53BF"
          },
          {
            code: "610431",
            name: "\u6B66\u529F\u53BF"
          },
          {
            code: "610481",
            name: "\u5174\u5E73\u5E02"
          },
          {
            code: "610482",
            name: "\u5F6C\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "6105",
        name: "\u6E2D\u5357\u5E02",
        children: [
          {
            code: "610502",
            name: "\u4E34\u6E2D\u533A"
          },
          {
            code: "610503",
            name: "\u534E\u5DDE\u533A"
          },
          {
            code: "610522",
            name: "\u6F7C\u5173\u53BF"
          },
          {
            code: "610523",
            name: "\u5927\u8354\u53BF"
          },
          {
            code: "610524",
            name: "\u5408\u9633\u53BF"
          },
          {
            code: "610525",
            name: "\u6F84\u57CE\u53BF"
          },
          {
            code: "610526",
            name: "\u84B2\u57CE\u53BF"
          },
          {
            code: "610527",
            name: "\u767D\u6C34\u53BF"
          },
          {
            code: "610528",
            name: "\u5BCC\u5E73\u53BF"
          },
          {
            code: "610581",
            name: "\u97E9\u57CE\u5E02"
          },
          {
            code: "610582",
            name: "\u534E\u9634\u5E02"
          }
        ]
      },
      {
        code: "6106",
        name: "\u5EF6\u5B89\u5E02",
        children: [
          {
            code: "610602",
            name: "\u5B9D\u5854\u533A"
          },
          {
            code: "610603",
            name: "\u5B89\u585E\u533A"
          },
          {
            code: "610621",
            name: "\u5EF6\u957F\u53BF"
          },
          {
            code: "610622",
            name: "\u5EF6\u5DDD\u53BF"
          },
          {
            code: "610625",
            name: "\u5FD7\u4E39\u53BF"
          },
          {
            code: "610626",
            name: "\u5434\u8D77\u53BF"
          },
          {
            code: "610627",
            name: "\u7518\u6CC9\u53BF"
          },
          {
            code: "610628",
            name: "\u5BCC\u53BF"
          },
          {
            code: "610629",
            name: "\u6D1B\u5DDD\u53BF"
          },
          {
            code: "610630",
            name: "\u5B9C\u5DDD\u53BF"
          },
          {
            code: "610631",
            name: "\u9EC4\u9F99\u53BF"
          },
          {
            code: "610632",
            name: "\u9EC4\u9675\u53BF"
          },
          {
            code: "610681",
            name: "\u5B50\u957F\u5E02"
          }
        ]
      },
      {
        code: "6107",
        name: "\u6C49\u4E2D\u5E02",
        children: [
          {
            code: "610702",
            name: "\u6C49\u53F0\u533A"
          },
          {
            code: "610703",
            name: "\u5357\u90D1\u533A"
          },
          {
            code: "610722",
            name: "\u57CE\u56FA\u53BF"
          },
          {
            code: "610723",
            name: "\u6D0B\u53BF"
          },
          {
            code: "610724",
            name: "\u897F\u4E61\u53BF"
          },
          {
            code: "610725",
            name: "\u52C9\u53BF"
          },
          {
            code: "610726",
            name: "\u5B81\u5F3A\u53BF"
          },
          {
            code: "610727",
            name: "\u7565\u9633\u53BF"
          },
          {
            code: "610728",
            name: "\u9547\u5DF4\u53BF"
          },
          {
            code: "610729",
            name: "\u7559\u575D\u53BF"
          },
          {
            code: "610730",
            name: "\u4F5B\u576A\u53BF"
          }
        ]
      },
      {
        code: "6108",
        name: "\u6986\u6797\u5E02",
        children: [
          {
            code: "610802",
            name: "\u6986\u9633\u533A"
          },
          {
            code: "610803",
            name: "\u6A2A\u5C71\u533A"
          },
          {
            code: "610822",
            name: "\u5E9C\u8C37\u53BF"
          },
          {
            code: "610824",
            name: "\u9756\u8FB9\u53BF"
          },
          {
            code: "610825",
            name: "\u5B9A\u8FB9\u53BF"
          },
          {
            code: "610826",
            name: "\u7EE5\u5FB7\u53BF"
          },
          {
            code: "610827",
            name: "\u7C73\u8102\u53BF"
          },
          {
            code: "610828",
            name: "\u4F73\u53BF"
          },
          {
            code: "610829",
            name: "\u5434\u5821\u53BF"
          },
          {
            code: "610830",
            name: "\u6E05\u6DA7\u53BF"
          },
          {
            code: "610831",
            name: "\u5B50\u6D32\u53BF"
          },
          {
            code: "610881",
            name: "\u795E\u6728\u5E02"
          }
        ]
      },
      {
        code: "6109",
        name: "\u5B89\u5EB7\u5E02",
        children: [
          {
            code: "610902",
            name: "\u6C49\u6EE8\u533A"
          },
          {
            code: "610921",
            name: "\u6C49\u9634\u53BF"
          },
          {
            code: "610922",
            name: "\u77F3\u6CC9\u53BF"
          },
          {
            code: "610923",
            name: "\u5B81\u9655\u53BF"
          },
          {
            code: "610924",
            name: "\u7D2B\u9633\u53BF"
          },
          {
            code: "610925",
            name: "\u5C9A\u768B\u53BF"
          },
          {
            code: "610926",
            name: "\u5E73\u5229\u53BF"
          },
          {
            code: "610927",
            name: "\u9547\u576A\u53BF"
          },
          {
            code: "610928",
            name: "\u65EC\u9633\u53BF"
          },
          {
            code: "610929",
            name: "\u767D\u6CB3\u53BF"
          }
        ]
      },
      {
        code: "6110",
        name: "\u5546\u6D1B\u5E02",
        children: [
          {
            code: "611002",
            name: "\u5546\u5DDE\u533A"
          },
          {
            code: "611021",
            name: "\u6D1B\u5357\u53BF"
          },
          {
            code: "611022",
            name: "\u4E39\u51E4\u53BF"
          },
          {
            code: "611023",
            name: "\u5546\u5357\u53BF"
          },
          {
            code: "611024",
            name: "\u5C71\u9633\u53BF"
          },
          {
            code: "611025",
            name: "\u9547\u5B89\u53BF"
          },
          {
            code: "611026",
            name: "\u67DE\u6C34\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "62",
    name: "\u7518\u8083\u7701",
    children: [
      {
        code: "6201",
        name: "\u5170\u5DDE\u5E02",
        children: [
          {
            code: "620102",
            name: "\u57CE\u5173\u533A"
          },
          {
            code: "620103",
            name: "\u4E03\u91CC\u6CB3\u533A"
          },
          {
            code: "620104",
            name: "\u897F\u56FA\u533A"
          },
          {
            code: "620105",
            name: "\u5B89\u5B81\u533A"
          },
          {
            code: "620111",
            name: "\u7EA2\u53E4\u533A"
          },
          {
            code: "620121",
            name: "\u6C38\u767B\u53BF"
          },
          {
            code: "620122",
            name: "\u768B\u5170\u53BF"
          },
          {
            code: "620123",
            name: "\u6986\u4E2D\u53BF"
          },
          {
            code: "620171",
            name: "\u5170\u5DDE\u65B0\u533A"
          }
        ]
      },
      {
        code: "6202",
        name: "\u5609\u5CEA\u5173\u5E02",
        children: [
          {
            code: "620201001",
            name: "\u96C4\u5173\u8857\u9053"
          },
          {
            code: "620201002",
            name: "\u94A2\u57CE\u8857\u9053"
          },
          {
            code: "620201100",
            name: "\u65B0\u57CE\u9547"
          },
          {
            code: "620201101",
            name: "\u5CEA\u6CC9\u9547"
          },
          {
            code: "620201102",
            name: "\u6587\u6B8A\u9547"
          }
        ]
      },
      {
        code: "6203",
        name: "\u91D1\u660C\u5E02",
        children: [
          {
            code: "620302",
            name: "\u91D1\u5DDD\u533A"
          },
          {
            code: "620321",
            name: "\u6C38\u660C\u53BF"
          }
        ]
      },
      {
        code: "6204",
        name: "\u767D\u94F6\u5E02",
        children: [
          {
            code: "620402",
            name: "\u767D\u94F6\u533A"
          },
          {
            code: "620403",
            name: "\u5E73\u5DDD\u533A"
          },
          {
            code: "620421",
            name: "\u9756\u8FDC\u53BF"
          },
          {
            code: "620422",
            name: "\u4F1A\u5B81\u53BF"
          },
          {
            code: "620423",
            name: "\u666F\u6CF0\u53BF"
          }
        ]
      },
      {
        code: "6205",
        name: "\u5929\u6C34\u5E02",
        children: [
          {
            code: "620502",
            name: "\u79E6\u5DDE\u533A"
          },
          {
            code: "620503",
            name: "\u9EA6\u79EF\u533A"
          },
          {
            code: "620521",
            name: "\u6E05\u6C34\u53BF"
          },
          {
            code: "620522",
            name: "\u79E6\u5B89\u53BF"
          },
          {
            code: "620523",
            name: "\u7518\u8C37\u53BF"
          },
          {
            code: "620524",
            name: "\u6B66\u5C71\u53BF"
          },
          {
            code: "620525",
            name: "\u5F20\u5BB6\u5DDD\u56DE\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6206",
        name: "\u6B66\u5A01\u5E02",
        children: [
          {
            code: "620602",
            name: "\u51C9\u5DDE\u533A"
          },
          {
            code: "620621",
            name: "\u6C11\u52E4\u53BF"
          },
          {
            code: "620622",
            name: "\u53E4\u6D6A\u53BF"
          },
          {
            code: "620623",
            name: "\u5929\u795D\u85CF\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6207",
        name: "\u5F20\u6396\u5E02",
        children: [
          {
            code: "620702",
            name: "\u7518\u5DDE\u533A"
          },
          {
            code: "620721",
            name: "\u8083\u5357\u88D5\u56FA\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620722",
            name: "\u6C11\u4E50\u53BF"
          },
          {
            code: "620723",
            name: "\u4E34\u6CFD\u53BF"
          },
          {
            code: "620724",
            name: "\u9AD8\u53F0\u53BF"
          },
          {
            code: "620725",
            name: "\u5C71\u4E39\u53BF"
          }
        ]
      },
      {
        code: "6208",
        name: "\u5E73\u51C9\u5E02",
        children: [
          {
            code: "620802",
            name: "\u5D06\u5CD2\u533A"
          },
          {
            code: "620821",
            name: "\u6CFE\u5DDD\u53BF"
          },
          {
            code: "620822",
            name: "\u7075\u53F0\u53BF"
          },
          {
            code: "620823",
            name: "\u5D07\u4FE1\u53BF"
          },
          {
            code: "620825",
            name: "\u5E84\u6D6A\u53BF"
          },
          {
            code: "620826",
            name: "\u9759\u5B81\u53BF"
          },
          {
            code: "620881",
            name: "\u534E\u4EAD\u5E02"
          }
        ]
      },
      {
        code: "6209",
        name: "\u9152\u6CC9\u5E02",
        children: [
          {
            code: "620902",
            name: "\u8083\u5DDE\u533A"
          },
          {
            code: "620921",
            name: "\u91D1\u5854\u53BF"
          },
          {
            code: "620922",
            name: "\u74DC\u5DDE\u53BF"
          },
          {
            code: "620923",
            name: "\u8083\u5317\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620924",
            name: "\u963F\u514B\u585E\u54C8\u8428\u514B\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620981",
            name: "\u7389\u95E8\u5E02"
          },
          {
            code: "620982",
            name: "\u6566\u714C\u5E02"
          }
        ]
      },
      {
        code: "6210",
        name: "\u5E86\u9633\u5E02",
        children: [
          {
            code: "621002",
            name: "\u897F\u5CF0\u533A"
          },
          {
            code: "621021",
            name: "\u5E86\u57CE\u53BF"
          },
          {
            code: "621022",
            name: "\u73AF\u53BF"
          },
          {
            code: "621023",
            name: "\u534E\u6C60\u53BF"
          },
          {
            code: "621024",
            name: "\u5408\u6C34\u53BF"
          },
          {
            code: "621025",
            name: "\u6B63\u5B81\u53BF"
          },
          {
            code: "621026",
            name: "\u5B81\u53BF"
          },
          {
            code: "621027",
            name: "\u9547\u539F\u53BF"
          }
        ]
      },
      {
        code: "6211",
        name: "\u5B9A\u897F\u5E02",
        children: [
          {
            code: "621102",
            name: "\u5B89\u5B9A\u533A"
          },
          {
            code: "621121",
            name: "\u901A\u6E2D\u53BF"
          },
          {
            code: "621122",
            name: "\u9647\u897F\u53BF"
          },
          {
            code: "621123",
            name: "\u6E2D\u6E90\u53BF"
          },
          {
            code: "621124",
            name: "\u4E34\u6D2E\u53BF"
          },
          {
            code: "621125",
            name: "\u6F33\u53BF"
          },
          {
            code: "621126",
            name: "\u5CB7\u53BF"
          }
        ]
      },
      {
        code: "6212",
        name: "\u9647\u5357\u5E02",
        children: [
          {
            code: "621202",
            name: "\u6B66\u90FD\u533A"
          },
          {
            code: "621221",
            name: "\u6210\u53BF"
          },
          {
            code: "621222",
            name: "\u6587\u53BF"
          },
          {
            code: "621223",
            name: "\u5B95\u660C\u53BF"
          },
          {
            code: "621224",
            name: "\u5EB7\u53BF"
          },
          {
            code: "621225",
            name: "\u897F\u548C\u53BF"
          },
          {
            code: "621226",
            name: "\u793C\u53BF"
          },
          {
            code: "621227",
            name: "\u5FBD\u53BF"
          },
          {
            code: "621228",
            name: "\u4E24\u5F53\u53BF"
          }
        ]
      },
      {
        code: "6229",
        name: "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "622901",
            name: "\u4E34\u590F\u5E02"
          },
          {
            code: "622921",
            name: "\u4E34\u590F\u53BF"
          },
          {
            code: "622922",
            name: "\u5EB7\u4E50\u53BF"
          },
          {
            code: "622923",
            name: "\u6C38\u9756\u53BF"
          },
          {
            code: "622924",
            name: "\u5E7F\u6CB3\u53BF"
          },
          {
            code: "622925",
            name: "\u548C\u653F\u53BF"
          },
          {
            code: "622926",
            name: "\u4E1C\u4E61\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "622927",
            name: "\u79EF\u77F3\u5C71\u4FDD\u5B89\u65CF\u4E1C\u4E61\u65CF\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6230",
        name: "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "623001",
            name: "\u5408\u4F5C\u5E02"
          },
          {
            code: "623021",
            name: "\u4E34\u6F6D\u53BF"
          },
          {
            code: "623022",
            name: "\u5353\u5C3C\u53BF"
          },
          {
            code: "623023",
            name: "\u821F\u66F2\u53BF"
          },
          {
            code: "623024",
            name: "\u8FED\u90E8\u53BF"
          },
          {
            code: "623025",
            name: "\u739B\u66F2\u53BF"
          },
          {
            code: "623026",
            name: "\u788C\u66F2\u53BF"
          },
          {
            code: "623027",
            name: "\u590F\u6CB3\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "63",
    name: "\u9752\u6D77\u7701",
    children: [
      {
        code: "6301",
        name: "\u897F\u5B81\u5E02",
        children: [
          {
            code: "630102",
            name: "\u57CE\u4E1C\u533A"
          },
          {
            code: "630103",
            name: "\u57CE\u4E2D\u533A"
          },
          {
            code: "630104",
            name: "\u57CE\u897F\u533A"
          },
          {
            code: "630105",
            name: "\u57CE\u5317\u533A"
          },
          {
            code: "630106",
            name: "\u6E5F\u4E2D\u533A"
          },
          {
            code: "630121",
            name: "\u5927\u901A\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630123",
            name: "\u6E5F\u6E90\u53BF"
          }
        ]
      },
      {
        code: "6302",
        name: "\u6D77\u4E1C\u5E02",
        children: [
          {
            code: "630202",
            name: "\u4E50\u90FD\u533A"
          },
          {
            code: "630203",
            name: "\u5E73\u5B89\u533A"
          },
          {
            code: "630222",
            name: "\u6C11\u548C\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630223",
            name: "\u4E92\u52A9\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630224",
            name: "\u5316\u9686\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630225",
            name: "\u5FAA\u5316\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6322",
        name: "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632221",
            name: "\u95E8\u6E90\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "632222",
            name: "\u7941\u8FDE\u53BF"
          },
          {
            code: "632223",
            name: "\u6D77\u664F\u53BF"
          },
          {
            code: "632224",
            name: "\u521A\u5BDF\u53BF"
          }
        ]
      },
      {
        code: "6323",
        name: "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632321",
            name: "\u540C\u4EC1\u53BF"
          },
          {
            code: "632322",
            name: "\u5C16\u624E\u53BF"
          },
          {
            code: "632323",
            name: "\u6CFD\u5E93\u53BF"
          },
          {
            code: "632324",
            name: "\u6CB3\u5357\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6325",
        name: "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632521",
            name: "\u5171\u548C\u53BF"
          },
          {
            code: "632522",
            name: "\u540C\u5FB7\u53BF"
          },
          {
            code: "632523",
            name: "\u8D35\u5FB7\u53BF"
          },
          {
            code: "632524",
            name: "\u5174\u6D77\u53BF"
          },
          {
            code: "632525",
            name: "\u8D35\u5357\u53BF"
          }
        ]
      },
      {
        code: "6326",
        name: "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632621",
            name: "\u739B\u6C81\u53BF"
          },
          {
            code: "632622",
            name: "\u73ED\u739B\u53BF"
          },
          {
            code: "632623",
            name: "\u7518\u5FB7\u53BF"
          },
          {
            code: "632624",
            name: "\u8FBE\u65E5\u53BF"
          },
          {
            code: "632625",
            name: "\u4E45\u6CBB\u53BF"
          },
          {
            code: "632626",
            name: "\u739B\u591A\u53BF"
          }
        ]
      },
      {
        code: "6327",
        name: "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632701",
            name: "\u7389\u6811\u5E02"
          },
          {
            code: "632722",
            name: "\u6742\u591A\u53BF"
          },
          {
            code: "632723",
            name: "\u79F0\u591A\u53BF"
          },
          {
            code: "632724",
            name: "\u6CBB\u591A\u53BF"
          },
          {
            code: "632725",
            name: "\u56CA\u8C26\u53BF"
          },
          {
            code: "632726",
            name: "\u66F2\u9EBB\u83B1\u53BF"
          }
        ]
      },
      {
        code: "6328",
        name: "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632801",
            name: "\u683C\u5C14\u6728\u5E02"
          },
          {
            code: "632802",
            name: "\u5FB7\u4EE4\u54C8\u5E02"
          },
          {
            code: "632803",
            name: "\u832B\u5D16\u5E02"
          },
          {
            code: "632821",
            name: "\u4E4C\u5170\u53BF"
          },
          {
            code: "632822",
            name: "\u90FD\u5170\u53BF"
          },
          {
            code: "632823",
            name: "\u5929\u5CFB\u53BF"
          },
          {
            code: "632857",
            name: "\u5927\u67F4\u65E6\u884C\u653F\u59D4\u5458\u4F1A"
          }
        ]
      }
    ]
  },
  {
    code: "64",
    name: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "6401",
        name: "\u94F6\u5DDD\u5E02",
        children: [
          {
            code: "640104",
            name: "\u5174\u5E86\u533A"
          },
          {
            code: "640105",
            name: "\u897F\u590F\u533A"
          },
          {
            code: "640106",
            name: "\u91D1\u51E4\u533A"
          },
          {
            code: "640121",
            name: "\u6C38\u5B81\u53BF"
          },
          {
            code: "640122",
            name: "\u8D3A\u5170\u53BF"
          },
          {
            code: "640181",
            name: "\u7075\u6B66\u5E02"
          }
        ]
      },
      {
        code: "6402",
        name: "\u77F3\u5634\u5C71\u5E02",
        children: [
          {
            code: "640202",
            name: "\u5927\u6B66\u53E3\u533A"
          },
          {
            code: "640205",
            name: "\u60E0\u519C\u533A"
          },
          {
            code: "640221",
            name: "\u5E73\u7F57\u53BF"
          }
        ]
      },
      {
        code: "6403",
        name: "\u5434\u5FE0\u5E02",
        children: [
          {
            code: "640302",
            name: "\u5229\u901A\u533A"
          },
          {
            code: "640303",
            name: "\u7EA2\u5BFA\u5821\u533A"
          },
          {
            code: "640323",
            name: "\u76D0\u6C60\u53BF"
          },
          {
            code: "640324",
            name: "\u540C\u5FC3\u53BF"
          },
          {
            code: "640381",
            name: "\u9752\u94DC\u5CE1\u5E02"
          }
        ]
      },
      {
        code: "6404",
        name: "\u56FA\u539F\u5E02",
        children: [
          {
            code: "640402",
            name: "\u539F\u5DDE\u533A"
          },
          {
            code: "640422",
            name: "\u897F\u5409\u53BF"
          },
          {
            code: "640423",
            name: "\u9686\u5FB7\u53BF"
          },
          {
            code: "640424",
            name: "\u6CFE\u6E90\u53BF"
          },
          {
            code: "640425",
            name: "\u5F6D\u9633\u53BF"
          }
        ]
      },
      {
        code: "6405",
        name: "\u4E2D\u536B\u5E02",
        children: [
          {
            code: "640502",
            name: "\u6C99\u5761\u5934\u533A"
          },
          {
            code: "640521",
            name: "\u4E2D\u5B81\u53BF"
          },
          {
            code: "640522",
            name: "\u6D77\u539F\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "65",
    name: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
    children: [
      {
        code: "6501",
        name: "\u4E4C\u9C81\u6728\u9F50\u5E02",
        children: [
          {
            code: "650102",
            name: "\u5929\u5C71\u533A"
          },
          {
            code: "650103",
            name: "\u6C99\u4F9D\u5DF4\u514B\u533A"
          },
          {
            code: "650104",
            name: "\u65B0\u5E02\u533A"
          },
          {
            code: "650105",
            name: "\u6C34\u78E8\u6C9F\u533A"
          },
          {
            code: "650106",
            name: "\u5934\u5C6F\u6CB3\u533A"
          },
          {
            code: "650107",
            name: "\u8FBE\u5742\u57CE\u533A"
          },
          {
            code: "650109",
            name: "\u7C73\u4E1C\u533A"
          },
          {
            code: "650121",
            name: "\u4E4C\u9C81\u6728\u9F50\u53BF"
          }
        ]
      },
      {
        code: "6502",
        name: "\u514B\u62C9\u739B\u4F9D\u5E02",
        children: [
          {
            code: "650202",
            name: "\u72EC\u5C71\u5B50\u533A"
          },
          {
            code: "650203",
            name: "\u514B\u62C9\u739B\u4F9D\u533A"
          },
          {
            code: "650204",
            name: "\u767D\u78B1\u6EE9\u533A"
          },
          {
            code: "650205",
            name: "\u4E4C\u5C14\u79BE\u533A"
          }
        ]
      },
      {
        code: "6504",
        name: "\u5410\u9C81\u756A\u5E02",
        children: [
          {
            code: "650402",
            name: "\u9AD8\u660C\u533A"
          },
          {
            code: "650421",
            name: "\u912F\u5584\u53BF"
          },
          {
            code: "650422",
            name: "\u6258\u514B\u900A\u53BF"
          }
        ]
      },
      {
        code: "6505",
        name: "\u54C8\u5BC6\u5E02",
        children: [
          {
            code: "650502",
            name: "\u4F0A\u5DDE\u533A"
          },
          {
            code: "650521",
            name: "\u5DF4\u91CC\u5764\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
          },
          {
            code: "650522",
            name: "\u4F0A\u543E\u53BF"
          }
        ]
      },
      {
        code: "6523",
        name: "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652301",
            name: "\u660C\u5409\u5E02"
          },
          {
            code: "652302",
            name: "\u961C\u5EB7\u5E02"
          },
          {
            code: "652323",
            name: "\u547C\u56FE\u58C1\u53BF"
          },
          {
            code: "652324",
            name: "\u739B\u7EB3\u65AF\u53BF"
          },
          {
            code: "652325",
            name: "\u5947\u53F0\u53BF"
          },
          {
            code: "652327",
            name: "\u5409\u6728\u8428\u5C14\u53BF"
          },
          {
            code: "652328",
            name: "\u6728\u5792\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6527",
        name: "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652701",
            name: "\u535A\u4E50\u5E02"
          },
          {
            code: "652702",
            name: "\u963F\u62C9\u5C71\u53E3\u5E02"
          },
          {
            code: "652722",
            name: "\u7CBE\u6CB3\u53BF"
          },
          {
            code: "652723",
            name: "\u6E29\u6CC9\u53BF"
          }
        ]
      },
      {
        code: "6528",
        name: "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652801",
            name: "\u5E93\u5C14\u52D2\u5E02"
          },
          {
            code: "652822",
            name: "\u8F6E\u53F0\u53BF"
          },
          {
            code: "652823",
            name: "\u5C09\u7281\u53BF"
          },
          {
            code: "652824",
            name: "\u82E5\u7F8C\u53BF"
          },
          {
            code: "652825",
            name: "\u4E14\u672B\u53BF"
          },
          {
            code: "652826",
            name: "\u7109\u8006\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "652827",
            name: "\u548C\u9759\u53BF"
          },
          {
            code: "652828",
            name: "\u548C\u7855\u53BF"
          },
          {
            code: "652829",
            name: "\u535A\u6E56\u53BF"
          },
          {
            code: "652871",
            name: "\u5E93\u5C14\u52D2\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "6529",
        name: "\u963F\u514B\u82CF\u5730\u533A",
        children: [
          {
            code: "652901",
            name: "\u963F\u514B\u82CF\u5E02"
          },
          {
            code: "652902",
            name: "\u5E93\u8F66\u5E02"
          },
          {
            code: "652922",
            name: "\u6E29\u5BBF\u53BF"
          },
          {
            code: "652924",
            name: "\u6C99\u96C5\u53BF"
          },
          {
            code: "652925",
            name: "\u65B0\u548C\u53BF"
          },
          {
            code: "652926",
            name: "\u62DC\u57CE\u53BF"
          },
          {
            code: "652927",
            name: "\u4E4C\u4EC0\u53BF"
          },
          {
            code: "652928",
            name: "\u963F\u74E6\u63D0\u53BF"
          },
          {
            code: "652929",
            name: "\u67EF\u576A\u53BF"
          }
        ]
      },
      {
        code: "6530",
        name: "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "653001",
            name: "\u963F\u56FE\u4EC0\u5E02"
          },
          {
            code: "653022",
            name: "\u963F\u514B\u9676\u53BF"
          },
          {
            code: "653023",
            name: "\u963F\u5408\u5947\u53BF"
          },
          {
            code: "653024",
            name: "\u4E4C\u6070\u53BF"
          }
        ]
      },
      {
        code: "6531",
        name: "\u5580\u4EC0\u5730\u533A",
        children: [
          {
            code: "653101",
            name: "\u5580\u4EC0\u5E02"
          },
          {
            code: "653121",
            name: "\u758F\u9644\u53BF"
          },
          {
            code: "653122",
            name: "\u758F\u52D2\u53BF"
          },
          {
            code: "653123",
            name: "\u82F1\u5409\u6C99\u53BF"
          },
          {
            code: "653124",
            name: "\u6CFD\u666E\u53BF"
          },
          {
            code: "653125",
            name: "\u838E\u8F66\u53BF"
          },
          {
            code: "653126",
            name: "\u53F6\u57CE\u53BF"
          },
          {
            code: "653127",
            name: "\u9EA6\u76D6\u63D0\u53BF"
          },
          {
            code: "653128",
            name: "\u5CB3\u666E\u6E56\u53BF"
          },
          {
            code: "653129",
            name: "\u4F3D\u5E08\u53BF"
          },
          {
            code: "653130",
            name: "\u5DF4\u695A\u53BF"
          },
          {
            code: "653131",
            name: "\u5854\u4EC0\u5E93\u5C14\u5E72\u5854\u5409\u514B\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6532",
        name: "\u548C\u7530\u5730\u533A",
        children: [
          {
            code: "653201",
            name: "\u548C\u7530\u5E02"
          },
          {
            code: "653221",
            name: "\u548C\u7530\u53BF"
          },
          {
            code: "653222",
            name: "\u58A8\u7389\u53BF"
          },
          {
            code: "653223",
            name: "\u76AE\u5C71\u53BF"
          },
          {
            code: "653224",
            name: "\u6D1B\u6D66\u53BF"
          },
          {
            code: "653225",
            name: "\u7B56\u52D2\u53BF"
          },
          {
            code: "653226",
            name: "\u4E8E\u7530\u53BF"
          },
          {
            code: "653227",
            name: "\u6C11\u4E30\u53BF"
          }
        ]
      },
      {
        code: "6540",
        name: "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "654002",
            name: "\u4F0A\u5B81\u5E02"
          },
          {
            code: "654003",
            name: "\u594E\u5C6F\u5E02"
          },
          {
            code: "654004",
            name: "\u970D\u5C14\u679C\u65AF\u5E02"
          },
          {
            code: "654021",
            name: "\u4F0A\u5B81\u53BF"
          },
          {
            code: "654022",
            name: "\u5BDF\u5E03\u67E5\u5C14\u9521\u4F2F\u81EA\u6CBB\u53BF"
          },
          {
            code: "654023",
            name: "\u970D\u57CE\u53BF"
          },
          {
            code: "654024",
            name: "\u5DE9\u7559\u53BF"
          },
          {
            code: "654025",
            name: "\u65B0\u6E90\u53BF"
          },
          {
            code: "654026",
            name: "\u662D\u82CF\u53BF"
          },
          {
            code: "654027",
            name: "\u7279\u514B\u65AF\u53BF"
          },
          {
            code: "654028",
            name: "\u5C3C\u52D2\u514B\u53BF"
          }
        ]
      },
      {
        code: "6542",
        name: "\u5854\u57CE\u5730\u533A",
        children: [
          {
            code: "654201",
            name: "\u5854\u57CE\u5E02"
          },
          {
            code: "654202",
            name: "\u4E4C\u82CF\u5E02"
          },
          {
            code: "654221",
            name: "\u989D\u654F\u53BF"
          },
          {
            code: "654223",
            name: "\u6C99\u6E7E\u53BF"
          },
          {
            code: "654224",
            name: "\u6258\u91CC\u53BF"
          },
          {
            code: "654225",
            name: "\u88D5\u6C11\u53BF"
          },
          {
            code: "654226",
            name: "\u548C\u5E03\u514B\u8D5B\u5C14\u8499\u53E4\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6543",
        name: "\u963F\u52D2\u6CF0\u5730\u533A",
        children: [
          {
            code: "654301",
            name: "\u963F\u52D2\u6CF0\u5E02"
          },
          {
            code: "654321",
            name: "\u5E03\u5C14\u6D25\u53BF"
          },
          {
            code: "654322",
            name: "\u5BCC\u8574\u53BF"
          },
          {
            code: "654323",
            name: "\u798F\u6D77\u53BF"
          },
          {
            code: "654324",
            name: "\u54C8\u5DF4\u6CB3\u53BF"
          },
          {
            code: "654325",
            name: "\u9752\u6CB3\u53BF"
          },
          {
            code: "654326",
            name: "\u5409\u6728\u4E43\u53BF"
          }
        ]
      },
      {
        code: "6590",
        name: "\u81EA\u6CBB\u533A\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "659001",
            name: "\u77F3\u6CB3\u5B50\u5E02"
          },
          {
            code: "659002",
            name: "\u963F\u62C9\u5C14\u5E02"
          },
          {
            code: "659003",
            name: "\u56FE\u6728\u8212\u514B\u5E02"
          },
          {
            code: "659004",
            name: "\u4E94\u5BB6\u6E20\u5E02"
          },
          {
            code: "659005",
            name: "\u5317\u5C6F\u5E02"
          },
          {
            code: "659006",
            name: "\u94C1\u95E8\u5173\u5E02"
          },
          {
            code: "659007",
            name: "\u53CC\u6CB3\u5E02"
          },
          {
            code: "659008",
            name: "\u53EF\u514B\u8FBE\u62C9\u5E02"
          },
          {
            code: "659009",
            name: "\u6606\u7389\u5E02"
          },
          {
            code: "659010",
            name: "\u80E1\u6768\u6CB3\u5E02"
          }
        ]
      }
    ]
  }
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  emits: ["change"],
  setup(__props, { emit: emits }) {
    let province2 = ref("");
    let city2 = ref("");
    let area = ref("");
    let areas = ref(allAreas);
    let selectCity = ref([]);
    let selectArea = ref([]);
    watch(() => province2.value, (val) => {
      if (val) {
        let cities = areas.value.find((item) => item.code === province2.value).children;
        selectCity.value = cities;
      }
      city2.value = "";
      area.value = "";
    });
    watch(() => city2.value, (val) => {
      if (val) {
        let area2 = selectCity.value.find((item) => item.code === city2.value).children;
        selectArea.value = area2;
      }
      area.value = "";
    });
    watch(() => area.value, (val) => {
      if (val) {
        let provinceData = {
          code: province2.value,
          name: province2.value && allAreas.find((item) => item.code === province2.value).name
        };
        let cityData = {
          code: city2.value,
          name: city2.value && selectCity.value.find((item) => item.code === city2.value).name
        };
        let areaData = {
          code: val,
          name: val && selectArea.value.find((item) => item.code === val).name
        };
        emits("change", {
          province: provinceData,
          city: cityData,
          area: areaData
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_select, {
          clearable: "",
          placeholder: "\u8BF7\u9009\u62E9\u7701\u4EFD",
          modelValue: unref(province2),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(province2) ? province2.value = $event : province2 = $event)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(areas), (item) => {
              return openBlock(), createBlock(_component_el_option, {
                key: item.code,
                value: item.code,
                label: item.name
              }, null, 8, ["value", "label"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_el_select, {
          clearable: "",
          disabled: !unref(province2),
          style: { "margin": "0 10px" },
          placeholder: "\u8BF7\u9009\u62E9\u57CE\u5E02",
          modelValue: unref(city2),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(city2) ? city2.value = $event : city2 = $event)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selectCity), (item) => {
              return openBlock(), createBlock(_component_el_option, {
                key: item.code,
                value: item.code,
                label: item.name
              }, null, 8, ["value", "label"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["disabled", "modelValue"]),
        createVNode(_component_el_select, {
          clearable: "",
          disabled: !unref(province2) || !unref(city2),
          placeholder: "\u8BF7\u9009\u62E9\u533A\u57DF",
          modelValue: unref(area),
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(area) ? area.value = $event : area = $event)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selectArea), (item) => {
              return openBlock(), createBlock(_component_el_option, {
                key: item.code,
                value: item.code,
                label: item.name
              }, null, 8, ["value", "label"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["disabled", "modelValue"])
      ]);
    };
  }
});
var chooseArea = {
  install(app) {
    app.component("n-choose-area", _sfc_main$8);
  }
};
var script$8K = defineComponent({
  name: "Aim"
});
const _hoisted_1$4s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$1l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1);
function render$4o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4s, [
    _hoisted_2$4s,
    _hoisted_3$1l
  ]);
}
script$8K.render = render$4o;
script$8K.__file = "packages/components/Aim.vue";
var script$8L = script$8K;
var script$8I = defineComponent({
  name: "AddLocation"
});
const _hoisted_1$4r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$1k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1);
function render$4n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4r, [
    _hoisted_2$4r,
    _hoisted_3$1k,
    _hoisted_4$o
  ]);
}
script$8I.render = render$4n;
script$8I.__file = "packages/components/AddLocation.vue";
var script$8J = script$8I;
var script$8G = defineComponent({
  name: "Apple"
});
const _hoisted_1$4q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1);
function render$4m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4q, [
    _hoisted_2$4q
  ]);
}
script$8G.render = render$4m;
script$8G.__file = "packages/components/Apple.vue";
var script$8H = script$8G;
var script$8E = defineComponent({
  name: "AlarmClock"
});
const _hoisted_1$4p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1);
const _hoisted_3$1j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1);
function render$4l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4p, [
    _hoisted_2$4p,
    _hoisted_3$1j
  ]);
}
script$8E.render = render$4l;
script$8E.__file = "packages/components/AlarmClock.vue";
var script$8F = script$8E;
var script$8C = defineComponent({
  name: "ArrowDown"
});
const _hoisted_1$4o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1);
function render$4k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4o, [
    _hoisted_2$4o
  ]);
}
script$8C.render = render$4k;
script$8C.__file = "packages/components/ArrowDown.vue";
var script$8D = script$8C;
var script$8A = defineComponent({
  name: "ArrowDownBold"
});
const _hoisted_1$4n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1);
function render$4j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4n, [
    _hoisted_2$4n
  ]);
}
script$8A.render = render$4j;
script$8A.__file = "packages/components/ArrowDownBold.vue";
var script$8B = script$8A;
var script$8y = defineComponent({
  name: "ArrowLeft"
});
const _hoisted_1$4m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
function render$4i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4m, [
    _hoisted_2$4m
  ]);
}
script$8y.render = render$4i;
script$8y.__file = "packages/components/ArrowLeft.vue";
var script$8z = script$8y;
var script$8w = defineComponent({
  name: "ArrowLeftBold"
});
const _hoisted_1$4l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1);
function render$4h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4l, [
    _hoisted_2$4l
  ]);
}
script$8w.render = render$4h;
script$8w.__file = "packages/components/ArrowLeftBold.vue";
var script$8x = script$8w;
var script$8u = defineComponent({
  name: "ArrowRightBold"
});
const _hoisted_1$4k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1);
function render$4g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4k, [
    _hoisted_2$4k
  ]);
}
script$8u.render = render$4g;
script$8u.__file = "packages/components/ArrowRightBold.vue";
var script$8v = script$8u;
var script$8s = defineComponent({
  name: "ArrowUp"
});
const _hoisted_1$4j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1);
function render$4f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4j, [
    _hoisted_2$4j
  ]);
}
script$8s.render = render$4f;
script$8s.__file = "packages/components/ArrowUp.vue";
var script$8t = script$8s;
var script$8q = defineComponent({
  name: "Back"
});
const _hoisted_1$4i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$1i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1);
function render$4e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4i, [
    _hoisted_2$4i,
    _hoisted_3$1i
  ]);
}
script$8q.render = render$4e;
script$8q.__file = "packages/components/Back.vue";
var script$8r = script$8q;
var script$8o = defineComponent({
  name: "Bell"
});
const _hoisted_1$4h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1);
const _hoisted_3$1h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1);
const _hoisted_4$n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1);
function render$4d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4h, [
    _hoisted_2$4h,
    _hoisted_3$1h,
    _hoisted_4$n
  ]);
}
script$8o.render = render$4d;
script$8o.__file = "packages/components/Bell.vue";
var script$8p = script$8o;
var script$8m = defineComponent({
  name: "Baseball"
});
const _hoisted_1$4g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1);
const _hoisted_3$1g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1);
function render$4c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4g, [
    _hoisted_2$4g,
    _hoisted_3$1g
  ]);
}
script$8m.render = render$4c;
script$8m.__file = "packages/components/Baseball.vue";
var script$8n = script$8m;
var script$8k = defineComponent({
  name: "Bicycle"
});
const _hoisted_1$4f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
const _hoisted_3$1f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
const _hoisted_5$5 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"
}, null, -1);
const _hoisted_6$2 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"
}, null, -1);
function render$4b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4f, [
    _hoisted_2$4f,
    _hoisted_3$1f,
    _hoisted_4$m,
    _hoisted_5$5,
    _hoisted_6$2
  ]);
}
script$8k.render = render$4b;
script$8k.__file = "packages/components/Bicycle.vue";
var script$8l = script$8k;
var script$8i = defineComponent({
  name: "BellFilled"
});
const _hoisted_1$4e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1);
function render$4a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4e, [
    _hoisted_2$4e
  ]);
}
script$8i.render = render$4a;
script$8i.__file = "packages/components/BellFilled.vue";
var script$8j = script$8i;
var script$8g = defineComponent({
  name: "Basketball"
});
const _hoisted_1$4d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1);
function render$49(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4d, [
    _hoisted_2$4d
  ]);
}
script$8g.render = render$49;
script$8g.__file = "packages/components/Basketball.vue";
var script$8h = script$8g;
var script$8e = defineComponent({
  name: "Bottom"
});
const _hoisted_1$4c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1);
function render$48(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4c, [
    _hoisted_2$4c
  ]);
}
script$8e.render = render$48;
script$8e.__file = "packages/components/Bottom.vue";
var script$8f = script$8e;
var script$8c = defineComponent({
  name: "Box"
});
const _hoisted_1$4b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1);
const _hoisted_3$1e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1);
const _hoisted_4$l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1);
function render$47(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4b, [
    _hoisted_2$4b,
    _hoisted_3$1e,
    _hoisted_4$l
  ]);
}
script$8c.render = render$47;
script$8c.__file = "packages/components/Box.vue";
var script$8d = script$8c;
var script$8a = defineComponent({
  name: "Briefcase"
});
const _hoisted_1$4a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1);
function render$46(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4a, [
    _hoisted_2$4a
  ]);
}
script$8a.render = render$46;
script$8a.__file = "packages/components/Briefcase.vue";
var script$8b = script$8a;
var script$88 = defineComponent({
  name: "BrushFilled"
});
const _hoisted_1$49 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$49 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1);
function render$45(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$49, [
    _hoisted_2$49
  ]);
}
script$88.render = render$45;
script$88.__file = "packages/components/BrushFilled.vue";
var script$89 = script$88;
var script$86 = defineComponent({
  name: "Bowl"
});
const _hoisted_1$48 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$48 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1);
function render$44(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$48, [
    _hoisted_2$48
  ]);
}
script$86.render = render$44;
script$86.__file = "packages/components/Bowl.vue";
var script$87 = script$86;
var script$84 = defineComponent({
  name: "Avatar"
});
const _hoisted_1$47 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$47 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1);
function render$43(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$47, [
    _hoisted_2$47
  ]);
}
script$84.render = render$43;
script$84.__file = "packages/components/Avatar.vue";
var script$85 = script$84;
var script$82 = defineComponent({
  name: "Brush"
});
const _hoisted_1$46 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$46 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1);
function render$42(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$46, [
    _hoisted_2$46
  ]);
}
script$82.render = render$42;
script$82.__file = "packages/components/Brush.vue";
var script$83 = script$82;
var script$80 = defineComponent({
  name: "Burger"
});
const _hoisted_1$45 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$45 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1);
function render$41(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$45, [
    _hoisted_2$45
  ]);
}
script$80.render = render$41;
script$80.__file = "packages/components/Burger.vue";
var script$81 = script$80;
var script$7_ = defineComponent({
  name: "Camera"
});
const _hoisted_1$44 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$44 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1);
function render$40(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$44, [
    _hoisted_2$44
  ]);
}
script$7_.render = render$40;
script$7_.__file = "packages/components/Camera.vue";
var script$7$ = script$7_;
var script$7Y = defineComponent({
  name: "BottomLeft"
});
const _hoisted_1$43 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$43 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1);
const _hoisted_3$1d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1);
function render$3$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$43, [
    _hoisted_2$43,
    _hoisted_3$1d
  ]);
}
script$7Y.render = render$3$;
script$7Y.__file = "packages/components/BottomLeft.vue";
var script$7Z = script$7Y;
var script$7W = defineComponent({
  name: "Calendar"
});
const _hoisted_1$42 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$42 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1);
function render$3_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$42, [
    _hoisted_2$42
  ]);
}
script$7W.render = render$3_;
script$7W.__file = "packages/components/Calendar.vue";
var script$7X = script$7W;
var script$7U = defineComponent({
  name: "CaretBottom"
});
const _hoisted_1$41 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$41 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1);
function render$3Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$41, [
    _hoisted_2$41
  ]);
}
script$7U.render = render$3Z;
script$7U.__file = "packages/components/CaretBottom.vue";
var script$7V = script$7U;
var script$7S = defineComponent({
  name: "CaretLeft"
});
const _hoisted_1$40 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$40 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1);
function render$3Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$40, [
    _hoisted_2$40
  ]);
}
script$7S.render = render$3Y;
script$7S.__file = "packages/components/CaretLeft.vue";
var script$7T = script$7S;
var script$7R = defineComponent({
  name: "CaretRight"
});
const _hoisted_1$3$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1);
function render$3X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3$, [
    _hoisted_2$3$
  ]);
}
script$7R.render = render$3X;
script$7R.__file = "packages/components/CaretRight.vue";
var CaretRight = script$7R;
var script$7P = defineComponent({
  name: "CaretTop"
});
const _hoisted_1$3_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1);
function render$3W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3_, [
    _hoisted_2$3_
  ]);
}
script$7P.render = render$3W;
script$7P.__file = "packages/components/CaretTop.vue";
var script$7Q = script$7P;
var script$7N = defineComponent({
  name: "ChatDotSquare"
});
const _hoisted_1$3Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
const _hoisted_3$1c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1);
function render$3V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3Z, [
    _hoisted_2$3Z,
    _hoisted_3$1c
  ]);
}
script$7N.render = render$3V;
script$7N.__file = "packages/components/ChatDotSquare.vue";
var script$7O = script$7N;
var script$7L = defineComponent({
  name: "Cellphone"
});
const _hoisted_1$3Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1);
function render$3U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3Y, [
    _hoisted_2$3Y
  ]);
}
script$7L.render = render$3U;
script$7L.__file = "packages/components/Cellphone.vue";
var script$7M = script$7L;
var script$7J = defineComponent({
  name: "ChatDotRound"
});
const _hoisted_1$3X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1);
const _hoisted_3$1b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1);
function render$3T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3X, [
    _hoisted_2$3X,
    _hoisted_3$1b
  ]);
}
script$7J.render = render$3T;
script$7J.__file = "packages/components/ChatDotRound.vue";
var script$7K = script$7J;
var script$7H = defineComponent({
  name: "ChatLineSquare"
});
const _hoisted_1$3W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
const _hoisted_3$1a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1);
function render$3S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3W, [
    _hoisted_2$3W,
    _hoisted_3$1a
  ]);
}
script$7H.render = render$3S;
script$7H.__file = "packages/components/ChatLineSquare.vue";
var script$7I = script$7H;
var script$7F = defineComponent({
  name: "ChatLineRound"
});
const _hoisted_1$3V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1);
const _hoisted_3$19 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1);
function render$3R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3V, [
    _hoisted_2$3V,
    _hoisted_3$19
  ]);
}
script$7F.render = render$3R;
script$7F.__file = "packages/components/ChatLineRound.vue";
var script$7G = script$7F;
var script$7D = defineComponent({
  name: "ChatRound"
});
const _hoisted_1$3U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1);
function render$3Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3U, [
    _hoisted_2$3U
  ]);
}
script$7D.render = render$3Q;
script$7D.__file = "packages/components/ChatRound.vue";
var script$7E = script$7D;
var script$7B = defineComponent({
  name: "Check"
});
const _hoisted_1$3T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1);
function render$3P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3T, [
    _hoisted_2$3T
  ]);
}
script$7B.render = render$3P;
script$7B.__file = "packages/components/Check.vue";
var script$7C = script$7B;
var script$7z = defineComponent({
  name: "ChatSquare"
});
const _hoisted_1$3S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
function render$3O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3S, [
    _hoisted_2$3S
  ]);
}
script$7z.render = render$3O;
script$7z.__file = "packages/components/ChatSquare.vue";
var script$7A = script$7z;
var script$7x = defineComponent({
  name: "Cherry"
});
const _hoisted_1$3R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1);
function render$3N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3R, [
    _hoisted_2$3R
  ]);
}
script$7x.render = render$3N;
script$7x.__file = "packages/components/Cherry.vue";
var script$7y = script$7x;
var script$7v = defineComponent({
  name: "Chicken"
});
const _hoisted_1$3Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1);
function render$3M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3Q, [
    _hoisted_2$3Q
  ]);
}
script$7v.render = render$3M;
script$7v.__file = "packages/components/Chicken.vue";
var script$7w = script$7v;
var script$7t = defineComponent({
  name: "CircleCheckFilled"
});
const _hoisted_1$3P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
function render$3L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3P, [
    _hoisted_2$3P
  ]);
}
script$7t.render = render$3L;
script$7t.__file = "packages/components/CircleCheckFilled.vue";
var script$7u = script$7t;
var script$7r = defineComponent({
  name: "CircleCheck"
});
const _hoisted_1$3O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$18 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1);
function render$3K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3O, [
    _hoisted_2$3O,
    _hoisted_3$18
  ]);
}
script$7r.render = render$3K;
script$7r.__file = "packages/components/CircleCheck.vue";
var script$7s = script$7r;
var script$7p = defineComponent({
  name: "Checked"
});
const _hoisted_1$3N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1);
function render$3J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3N, [
    _hoisted_2$3N
  ]);
}
script$7p.render = render$3J;
script$7p.__file = "packages/components/Checked.vue";
var script$7q = script$7p;
var script$7n = defineComponent({
  name: "CircleCloseFilled"
});
const _hoisted_1$3M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1);
function render$3I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3M, [
    _hoisted_2$3M
  ]);
}
script$7n.render = render$3I;
script$7n.__file = "packages/components/CircleCloseFilled.vue";
var script$7o = script$7n;
var script$7l = defineComponent({
  name: "CircleClose"
});
const _hoisted_1$3L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1);
const _hoisted_3$17 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function render$3H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3L, [
    _hoisted_2$3L,
    _hoisted_3$17
  ]);
}
script$7l.render = render$3H;
script$7l.__file = "packages/components/CircleClose.vue";
var script$7m = script$7l;
var script$7j = defineComponent({
  name: "ArrowRight"
});
const _hoisted_1$3K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
function render$3G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3K, [
    _hoisted_2$3K
  ]);
}
script$7j.render = render$3G;
script$7j.__file = "packages/components/ArrowRight.vue";
var script$7k = script$7j;
var script$7h = defineComponent({
  name: "CirclePlus"
});
const _hoisted_1$3J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$16 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1);
const _hoisted_4$k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function render$3F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3J, [
    _hoisted_2$3J,
    _hoisted_3$16,
    _hoisted_4$k
  ]);
}
script$7h.render = render$3F;
script$7h.__file = "packages/components/CirclePlus.vue";
var script$7i = script$7h;
var script$7f = defineComponent({
  name: "Clock"
});
const _hoisted_1$3I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$15 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1);
function render$3E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3I, [
    _hoisted_2$3I,
    _hoisted_3$15,
    _hoisted_4$j
  ]);
}
script$7f.render = render$3E;
script$7f.__file = "packages/components/Clock.vue";
var script$7g = script$7f;
var script$7d = defineComponent({
  name: "CloseBold"
});
const _hoisted_1$3H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1);
function render$3D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3H, [
    _hoisted_2$3H
  ]);
}
script$7d.render = render$3D;
script$7d.__file = "packages/components/CloseBold.vue";
var script$7e = script$7d;
var script$7b = defineComponent({
  name: "Close"
});
const _hoisted_1$3G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1);
function render$3C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3G, [
    _hoisted_2$3G
  ]);
}
script$7b.render = render$3C;
script$7b.__file = "packages/components/Close.vue";
var script$7c = script$7b;
var script$79 = defineComponent({
  name: "Cloudy"
});
const _hoisted_1$3F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1);
function render$3B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3F, [
    _hoisted_2$3F
  ]);
}
script$79.render = render$3B;
script$79.__file = "packages/components/Cloudy.vue";
var script$7a = script$79;
var script$77 = defineComponent({
  name: "CirclePlusFilled"
});
const _hoisted_1$3E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1);
function render$3A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3E, [
    _hoisted_2$3E
  ]);
}
script$77.render = render$3A;
script$77.__file = "packages/components/CirclePlusFilled.vue";
var script$78 = script$77;
var script$75 = defineComponent({
  name: "CoffeeCup"
});
const _hoisted_1$3D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1);
function render$3z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3D, [
    _hoisted_2$3D
  ]);
}
script$75.render = render$3z;
script$75.__file = "packages/components/CoffeeCup.vue";
var script$76 = script$75;
var script$73 = defineComponent({
  name: "ColdDrink"
});
const _hoisted_1$3C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1);
function render$3y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3C, [
    _hoisted_2$3C
  ]);
}
script$73.render = render$3y;
script$73.__file = "packages/components/ColdDrink.vue";
var script$74 = script$73;
var script$71 = defineComponent({
  name: "Coin"
});
const _hoisted_1$3B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1);
const _hoisted_3$14 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1);
const _hoisted_4$i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1);
function render$3x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3B, [
    _hoisted_2$3B,
    _hoisted_3$14,
    _hoisted_4$i
  ]);
}
script$71.render = render$3x;
script$71.__file = "packages/components/Coin.vue";
var script$72 = script$71;
var script$6$ = defineComponent({
  name: "ArrowUpBold"
});
const _hoisted_1$3A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1);
function render$3w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3A, [
    _hoisted_2$3A
  ]);
}
script$6$.render = render$3w;
script$6$.__file = "packages/components/ArrowUpBold.vue";
var script$70 = script$6$;
var script$6Z = defineComponent({
  name: "CollectionTag"
});
const _hoisted_1$3z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1);
function render$3v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3z, [
    _hoisted_2$3z
  ]);
}
script$6Z.render = render$3v;
script$6Z.__file = "packages/components/CollectionTag.vue";
var script$6_ = script$6Z;
var script$6X = defineComponent({
  name: "BottomRight"
});
const _hoisted_1$3y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1);
const _hoisted_3$13 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1);
function render$3u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3y, [
    _hoisted_2$3y,
    _hoisted_3$13
  ]);
}
script$6X.render = render$3u;
script$6X.__file = "packages/components/BottomRight.vue";
var script$6Y = script$6X;
var script$6V = defineComponent({
  name: "Coffee"
});
const _hoisted_1$3x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1);
function render$3t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3x, [
    _hoisted_2$3x
  ]);
}
script$6V.render = render$3t;
script$6V.__file = "packages/components/Coffee.vue";
var script$6W = script$6V;
var script$6T = defineComponent({
  name: "CameraFilled"
});
const _hoisted_1$3w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
function render$3s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3w, [
    _hoisted_2$3w
  ]);
}
script$6T.render = render$3s;
script$6T.__file = "packages/components/CameraFilled.vue";
var script$6U = script$6T;
var script$6R = defineComponent({
  name: "Collection"
});
const _hoisted_1$3v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1);
const _hoisted_3$12 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1);
function render$3r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3v, [
    _hoisted_2$3v,
    _hoisted_3$12
  ]);
}
script$6R.render = render$3r;
script$6R.__file = "packages/components/Collection.vue";
var script$6S = script$6R;
var script$6P = defineComponent({
  name: "Cpu"
});
const _hoisted_1$3u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$11 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1);
function render$3q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3u, [
    _hoisted_2$3u,
    _hoisted_3$11
  ]);
}
script$6P.render = render$3q;
script$6P.__file = "packages/components/Cpu.vue";
var script$6Q = script$6P;
var script$6N = defineComponent({
  name: "Crop"
});
const _hoisted_1$3t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1);
const _hoisted_3$10 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1);
function render$3p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3t, [
    _hoisted_2$3t,
    _hoisted_3$10
  ]);
}
script$6N.render = render$3p;
script$6N.__file = "packages/components/Crop.vue";
var script$6O = script$6N;
var script$6L = defineComponent({
  name: "Coordinate"
});
const _hoisted_1$3s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1);
const _hoisted_3$$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
function render$3o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3s, [
    _hoisted_2$3s,
    _hoisted_3$$
  ]);
}
script$6L.render = render$3o;
script$6L.__file = "packages/components/Coordinate.vue";
var script$6M = script$6L;
var script$6J = defineComponent({
  name: "DArrowLeft"
});
const _hoisted_1$3r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1);
function render$3n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3r, [
    _hoisted_2$3r
  ]);
}
script$6J.render = render$3n;
script$6J.__file = "packages/components/DArrowLeft.vue";
var script$6K = script$6J;
var script$6H = defineComponent({
  name: "Compass"
});
const _hoisted_1$3q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1);
function render$3m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3q, [
    _hoisted_2$3q,
    _hoisted_3$_
  ]);
}
script$6H.render = render$3m;
script$6H.__file = "packages/components/Compass.vue";
var script$6I = script$6H;
var script$6F = defineComponent({
  name: "Connection"
});
const _hoisted_1$3p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1);
const _hoisted_3$Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1);
function render$3l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3p, [
    _hoisted_2$3p,
    _hoisted_3$Z
  ]);
}
script$6F.render = render$3l;
script$6F.__file = "packages/components/Connection.vue";
var script$6G = script$6F;
var script$6D = defineComponent({
  name: "CreditCard"
});
const _hoisted_1$3o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1);
const _hoisted_3$Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1);
function render$3k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3o, [
    _hoisted_2$3o,
    _hoisted_3$Y
  ]);
}
script$6D.render = render$3k;
script$6D.__file = "packages/components/CreditCard.vue";
var script$6E = script$6D;
var script$6B = defineComponent({
  name: "DataBoard"
});
const _hoisted_1$3n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1);
const _hoisted_3$X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1);
const _hoisted_4$h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1);
function render$3j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3n, [
    _hoisted_2$3n,
    _hoisted_3$X,
    _hoisted_4$h
  ]);
}
script$6B.render = render$3j;
script$6B.__file = "packages/components/DataBoard.vue";
var script$6C = script$6B;
var script$6z = defineComponent({
  name: "DArrowRight"
});
const _hoisted_1$3m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1);
function render$3i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3m, [
    _hoisted_2$3m
  ]);
}
script$6z.render = render$3i;
script$6z.__file = "packages/components/DArrowRight.vue";
var script$6A = script$6z;
var script$6x = defineComponent({
  name: "Dessert"
});
const _hoisted_1$3l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1);
function render$3h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3l, [
    _hoisted_2$3l
  ]);
}
script$6x.render = render$3h;
script$6x.__file = "packages/components/Dessert.vue";
var script$6y = script$6x;
var script$6v = defineComponent({
  name: "DeleteLocation"
});
const _hoisted_1$3k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1);
function render$3g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3k, [
    _hoisted_2$3k,
    _hoisted_3$W,
    _hoisted_4$g
  ]);
}
script$6v.render = render$3g;
script$6v.__file = "packages/components/DeleteLocation.vue";
var script$6w = script$6v;
var script$6t = defineComponent({
  name: "DCaret"
});
const _hoisted_1$3j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1);
function render$3f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3j, [
    _hoisted_2$3j
  ]);
}
script$6t.render = render$3f;
script$6t.__file = "packages/components/DCaret.vue";
var script$6u = script$6t;
var script$6r = defineComponent({
  name: "Delete"
});
const _hoisted_1$3i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1);
function render$3e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3i, [
    _hoisted_2$3i
  ]);
}
script$6r.render = render$3e;
script$6r.__file = "packages/components/Delete.vue";
var script$6s = script$6r;
var script$6p = defineComponent({
  name: "Dish"
});
const _hoisted_1$3h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1);
function render$3d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3h, [
    _hoisted_2$3h
  ]);
}
script$6p.render = render$3d;
script$6p.__file = "packages/components/Dish.vue";
var script$6q = script$6p;
var script$6n = defineComponent({
  name: "DishDot"
});
const _hoisted_1$3g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1);
function render$3c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3g, [
    _hoisted_2$3g
  ]);
}
script$6n.render = render$3c;
script$6n.__file = "packages/components/DishDot.vue";
var script$6o = script$6n;
var script$6l = defineComponent({
  name: "DocumentCopy"
});
const _hoisted_1$3f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1);
function render$3b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3f, [
    _hoisted_2$3f
  ]);
}
script$6l.render = render$3b;
script$6l.__file = "packages/components/DocumentCopy.vue";
var script$6m = script$6l;
var script$6j = defineComponent({
  name: "Discount"
});
const _hoisted_1$3e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1);
const _hoisted_3$V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function render$3a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3e, [
    _hoisted_2$3e,
    _hoisted_3$V
  ]);
}
script$6j.render = render$3a;
script$6j.__file = "packages/components/Discount.vue";
var script$6k = script$6j;
var script$6h = defineComponent({
  name: "DocumentChecked"
});
const _hoisted_1$3d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1);
function render$39(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3d, [
    _hoisted_2$3d
  ]);
}
script$6h.render = render$39;
script$6h.__file = "packages/components/DocumentChecked.vue";
var script$6i = script$6h;
var script$6f = defineComponent({
  name: "DocumentAdd"
});
const _hoisted_1$3c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1);
function render$38(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3c, [
    _hoisted_2$3c
  ]);
}
script$6f.render = render$38;
script$6f.__file = "packages/components/DocumentAdd.vue";
var script$6g = script$6f;
var script$6d = defineComponent({
  name: "DocumentRemove"
});
const _hoisted_1$3b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1);
function render$37(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3b, [
    _hoisted_2$3b
  ]);
}
script$6d.render = render$37;
script$6d.__file = "packages/components/DocumentRemove.vue";
var script$6e = script$6d;
var script$6b = defineComponent({
  name: "DataAnalysis"
});
const _hoisted_1$3a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1);
function render$36(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3a, [
    _hoisted_2$3a
  ]);
}
script$6b.render = render$36;
script$6b.__file = "packages/components/DataAnalysis.vue";
var script$6c = script$6b;
var script$69 = defineComponent({
  name: "DeleteFilled"
});
const _hoisted_1$39 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$39 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1);
function render$35(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$39, [
    _hoisted_2$39
  ]);
}
script$69.render = render$35;
script$69.__file = "packages/components/DeleteFilled.vue";
var script$6a = script$69;
var script$67 = defineComponent({
  name: "Download"
});
const _hoisted_1$38 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$38 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1);
function render$34(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$38, [
    _hoisted_2$38
  ]);
}
script$67.render = render$34;
script$67.__file = "packages/components/Download.vue";
var script$68 = script$67;
var script$65 = defineComponent({
  name: "Drizzling"
});
const _hoisted_1$37 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$37 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1);
function render$33(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$37, [
    _hoisted_2$37
  ]);
}
script$65.render = render$33;
script$65.__file = "packages/components/Drizzling.vue";
var script$66 = script$65;
var script$63 = defineComponent({
  name: "Eleme"
});
const _hoisted_1$36 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$36 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1);
function render$32(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$36, [
    _hoisted_2$36
  ]);
}
script$63.render = render$32;
script$63.__file = "packages/components/Eleme.vue";
var script$64 = script$63;
var script$61 = defineComponent({
  name: "ElemeFilled"
});
const _hoisted_1$35 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$35 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1);
function render$31(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$35, [
    _hoisted_2$35
  ]);
}
script$61.render = render$31;
script$61.__file = "packages/components/ElemeFilled.vue";
var script$62 = script$61;
var script$5$ = defineComponent({
  name: "Edit"
});
const _hoisted_1$34 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$34 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1);
const _hoisted_3$U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1);
function render$30(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$34, [
    _hoisted_2$34,
    _hoisted_3$U
  ]);
}
script$5$.render = render$30;
script$5$.__file = "packages/components/Edit.vue";
var script$60 = script$5$;
var script$5Z = defineComponent({
  name: "Failed"
});
const _hoisted_1$33 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$33 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1);
function render$2$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$33, [
    _hoisted_2$33
  ]);
}
script$5Z.render = render$2$;
script$5Z.__file = "packages/components/Failed.vue";
var script$5_ = script$5Z;
var script$5X = defineComponent({
  name: "Expand"
});
const _hoisted_1$32 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$32 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1);
function render$2_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$32, [
    _hoisted_2$32
  ]);
}
script$5X.render = render$2_;
script$5X.__file = "packages/components/Expand.vue";
var script$5Y = script$5X;
var script$5V = defineComponent({
  name: "Female"
});
const _hoisted_1$31 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$31 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1);
const _hoisted_4$f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1);
function render$2Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$31, [
    _hoisted_2$31,
    _hoisted_3$T,
    _hoisted_4$f
  ]);
}
script$5V.render = render$2Z;
script$5V.__file = "packages/components/Female.vue";
var script$5W = script$5V;
var script$5T = defineComponent({
  name: "Document"
});
const _hoisted_1$30 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$30 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1);
function render$2Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$30, [
    _hoisted_2$30
  ]);
}
script$5T.render = render$2Y;
script$5T.__file = "packages/components/Document.vue";
var script$5U = script$5T;
var script$5R = defineComponent({
  name: "Film"
});
const _hoisted_1$2$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1);
function render$2X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2$, [
    _hoisted_2$2$,
    _hoisted_3$S
  ]);
}
script$5R.render = render$2X;
script$5R.__file = "packages/components/Film.vue";
var script$5S = script$5R;
var script$5P = defineComponent({
  name: "Finished"
});
const _hoisted_1$2_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1);
function render$2W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2_, [
    _hoisted_2$2_
  ]);
}
script$5P.render = render$2W;
script$5P.__file = "packages/components/Finished.vue";
var script$5Q = script$5P;
var script$5N = defineComponent({
  name: "DataLine"
});
const _hoisted_1$2Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1);
function render$2V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2Z, [
    _hoisted_2$2Z
  ]);
}
script$5N.render = render$2V;
script$5N.__file = "packages/components/DataLine.vue";
var script$5O = script$5N;
var script$5L = defineComponent({
  name: "Filter"
});
const _hoisted_1$2Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1);
function render$2U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2Y, [
    _hoisted_2$2Y
  ]);
}
script$5L.render = render$2U;
script$5L.__file = "packages/components/Filter.vue";
var script$5M = script$5L;
var script$5J = defineComponent({
  name: "Flag"
});
const _hoisted_1$2X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1);
function render$2T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2X, [
    _hoisted_2$2X
  ]);
}
script$5J.render = render$2T;
script$5J.__file = "packages/components/Flag.vue";
var script$5K = script$5J;
var script$5H = defineComponent({
  name: "FolderChecked"
});
const _hoisted_1$2W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1);
function render$2S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2W, [
    _hoisted_2$2W
  ]);
}
script$5H.render = render$2S;
script$5H.__file = "packages/components/FolderChecked.vue";
var script$5I = script$5H;
var script$5F = defineComponent({
  name: "FirstAidKit"
});
const _hoisted_1$2V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
function render$2R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2V, [
    _hoisted_2$2V,
    _hoisted_3$R
  ]);
}
script$5F.render = render$2R;
script$5F.__file = "packages/components/FirstAidKit.vue";
var script$5G = script$5F;
var script$5D = defineComponent({
  name: "FolderAdd"
});
const _hoisted_1$2U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1);
function render$2Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2U, [
    _hoisted_2$2U
  ]);
}
script$5D.render = render$2Q;
script$5D.__file = "packages/components/FolderAdd.vue";
var script$5E = script$5D;
var script$5B = defineComponent({
  name: "Fold"
});
const _hoisted_1$2T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1);
function render$2P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2T, [
    _hoisted_2$2T
  ]);
}
script$5B.render = render$2P;
script$5B.__file = "packages/components/Fold.vue";
var script$5C = script$5B;
var script$5z = defineComponent({
  name: "FolderDelete"
});
const _hoisted_1$2S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1);
function render$2O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2S, [
    _hoisted_2$2S
  ]);
}
script$5z.render = render$2O;
script$5z.__file = "packages/components/FolderDelete.vue";
var script$5A = script$5z;
var script$5x = defineComponent({
  name: "DocumentDelete"
});
const _hoisted_1$2R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1);
function render$2N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2R, [
    _hoisted_2$2R
  ]);
}
script$5x.render = render$2N;
script$5x.__file = "packages/components/DocumentDelete.vue";
var script$5y = script$5x;
var script$5v = defineComponent({
  name: "Folder"
});
const _hoisted_1$2Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1);
function render$2M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2Q, [
    _hoisted_2$2Q
  ]);
}
script$5v.render = render$2M;
script$5v.__file = "packages/components/Folder.vue";
var script$5w = script$5v;
var script$5t = defineComponent({
  name: "Food"
});
const _hoisted_1$2P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1);
function render$2L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2P, [
    _hoisted_2$2P
  ]);
}
script$5t.render = render$2L;
script$5t.__file = "packages/components/Food.vue";
var script$5u = script$5t;
var script$5r = defineComponent({
  name: "FolderOpened"
});
const _hoisted_1$2O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1);
function render$2K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2O, [
    _hoisted_2$2O
  ]);
}
script$5r.render = render$2K;
script$5r.__file = "packages/components/FolderOpened.vue";
var script$5s = script$5r;
var script$5p = defineComponent({
  name: "Football"
});
const _hoisted_1$2N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1);
const _hoisted_3$Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1);
function render$2J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2N, [
    _hoisted_2$2N,
    _hoisted_3$Q
  ]);
}
script$5p.render = render$2J;
script$5p.__file = "packages/components/Football.vue";
var script$5q = script$5p;
var script$5n = defineComponent({
  name: "FolderRemove"
});
const _hoisted_1$2M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1);
function render$2I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2M, [
    _hoisted_2$2M
  ]);
}
script$5n.render = render$2I;
script$5n.__file = "packages/components/FolderRemove.vue";
var script$5o = script$5n;
var script$5l = defineComponent({
  name: "Fries"
});
const _hoisted_1$2L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1);
function render$2H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2L, [
    _hoisted_2$2L
  ]);
}
script$5l.render = render$2H;
script$5l.__file = "packages/components/Fries.vue";
var script$5m = script$5l;
var script$5j = defineComponent({
  name: "FullScreen"
});
const _hoisted_1$2K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1);
function render$2G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2K, [
    _hoisted_2$2K
  ]);
}
script$5j.render = render$2G;
script$5j.__file = "packages/components/FullScreen.vue";
var script$5k = script$5j;
var script$5h = defineComponent({
  name: "ForkSpoon"
});
const _hoisted_1$2J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1);
function render$2F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2J, [
    _hoisted_2$2J
  ]);
}
script$5h.render = render$2F;
script$5h.__file = "packages/components/ForkSpoon.vue";
var script$5i = script$5h;
var script$5f = defineComponent({
  name: "Goblet"
});
const _hoisted_1$2I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1);
function render$2E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2I, [
    _hoisted_2$2I
  ]);
}
script$5f.render = render$2E;
script$5f.__file = "packages/components/Goblet.vue";
var script$5g = script$5f;
var script$5d = defineComponent({
  name: "GobletFull"
});
const _hoisted_1$2H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1);
function render$2D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2H, [
    _hoisted_2$2H
  ]);
}
script$5d.render = render$2D;
script$5d.__file = "packages/components/GobletFull.vue";
var script$5e = script$5d;
var script$5b = defineComponent({
  name: "Goods"
});
const _hoisted_1$2G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1);
function render$2C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2G, [
    _hoisted_2$2G
  ]);
}
script$5b.render = render$2C;
script$5b.__file = "packages/components/Goods.vue";
var script$5c = script$5b;
var script$59 = defineComponent({
  name: "GobletSquareFull"
});
const _hoisted_1$2F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1);
function render$2B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2F, [
    _hoisted_2$2F
  ]);
}
script$59.render = render$2B;
script$59.__file = "packages/components/GobletSquareFull.vue";
var script$5a = script$59;
var script$57 = defineComponent({
  name: "GoodsFilled"
});
const _hoisted_1$2E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1);
function render$2A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2E, [
    _hoisted_2$2E
  ]);
}
script$57.render = render$2A;
script$57.__file = "packages/components/GoodsFilled.vue";
var script$58 = script$57;
var script$55 = defineComponent({
  name: "Grid"
});
const _hoisted_1$2D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1);
function render$2z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2D, [
    _hoisted_2$2D
  ]);
}
script$55.render = render$2z;
script$55.__file = "packages/components/Grid.vue";
var script$56 = script$55;
var script$53 = defineComponent({
  name: "Grape"
});
const _hoisted_1$2C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1);
function render$2y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2C, [
    _hoisted_2$2C
  ]);
}
script$53.render = render$2y;
script$53.__file = "packages/components/Grape.vue";
var script$54 = script$53;
var script$51 = defineComponent({
  name: "GobletSquare"
});
const _hoisted_1$2B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1);
function render$2x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2B, [
    _hoisted_2$2B
  ]);
}
script$51.render = render$2x;
script$51.__file = "packages/components/GobletSquare.vue";
var script$52 = script$51;
var script$4$ = defineComponent({
  name: "Headset"
});
const _hoisted_1$2A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1);
function render$2w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2A, [
    _hoisted_2$2A
  ]);
}
script$4$.render = render$2w;
script$4$.__file = "packages/components/Headset.vue";
var script$50 = script$4$;
var script$4Z = defineComponent({
  name: "Comment"
});
const _hoisted_1$2z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1);
function render$2v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2z, [
    _hoisted_2$2z
  ]);
}
script$4Z.render = render$2v;
script$4Z.__file = "packages/components/Comment.vue";
var script$4_ = script$4Z;
var script$4X = defineComponent({
  name: "HelpFilled"
});
const _hoisted_1$2y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1);
function render$2u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2y, [
    _hoisted_2$2y
  ]);
}
script$4X.render = render$2u;
script$4X.__file = "packages/components/HelpFilled.vue";
var script$4Y = script$4X;
var script$4V = defineComponent({
  name: "Histogram"
});
const _hoisted_1$2x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1);
function render$2t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2x, [
    _hoisted_2$2x
  ]);
}
script$4V.render = render$2t;
script$4V.__file = "packages/components/Histogram.vue";
var script$4W = script$4V;
var script$4T = defineComponent({
  name: "HomeFilled"
});
const _hoisted_1$2w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1);
function render$2s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2w, [
    _hoisted_2$2w
  ]);
}
script$4T.render = render$2s;
script$4T.__file = "packages/components/HomeFilled.vue";
var script$4U = script$4T;
var script$4R = defineComponent({
  name: "Help"
});
const _hoisted_1$2v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function render$2r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2v, [
    _hoisted_2$2v
  ]);
}
script$4R.render = render$2r;
script$4R.__file = "packages/components/Help.vue";
var script$4S = script$4R;
var script$4P = defineComponent({
  name: "House"
});
const _hoisted_1$2u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1);
function render$2q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2u, [
    _hoisted_2$2u
  ]);
}
script$4P.render = render$2q;
script$4P.__file = "packages/components/House.vue";
var script$4Q = script$4P;
var script$4N = defineComponent({
  name: "IceCreamRound"
});
const _hoisted_1$2t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1);
function render$2p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2t, [
    _hoisted_2$2t
  ]);
}
script$4N.render = render$2p;
script$4N.__file = "packages/components/IceCreamRound.vue";
var script$4O = script$4N;
var script$4L = defineComponent({
  name: "HotWater"
});
const _hoisted_1$2s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1);
function render$2o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2s, [
    _hoisted_2$2s
  ]);
}
script$4L.render = render$2o;
script$4L.__file = "packages/components/HotWater.vue";
var script$4M = script$4L;
var script$4J = defineComponent({
  name: "IceCream"
});
const _hoisted_1$2r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1);
function render$2n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2r, [
    _hoisted_2$2r
  ]);
}
script$4J.render = render$2n;
script$4J.__file = "packages/components/IceCream.vue";
var script$4K = script$4J;
var script$4H = defineComponent({
  name: "Files"
});
const _hoisted_1$2q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1);
function render$2m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2q, [
    _hoisted_2$2q
  ]);
}
script$4H.render = render$2m;
script$4H.__file = "packages/components/Files.vue";
var script$4I = script$4H;
var script$4F = defineComponent({
  name: "IceCreamSquare"
});
const _hoisted_1$2p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1);
function render$2l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2p, [
    _hoisted_2$2p
  ]);
}
script$4F.render = render$2l;
script$4F.__file = "packages/components/IceCreamSquare.vue";
var script$4G = script$4F;
var script$4D = defineComponent({
  name: "Key"
});
const _hoisted_1$2o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1);
function render$2k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2o, [
    _hoisted_2$2o
  ]);
}
script$4D.render = render$2k;
script$4D.__file = "packages/components/Key.vue";
var script$4E = script$4D;
var script$4B = defineComponent({
  name: "IceTea"
});
const _hoisted_1$2n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1);
function render$2j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2n, [
    _hoisted_2$2n
  ]);
}
script$4B.render = render$2j;
script$4B.__file = "packages/components/IceTea.vue";
var script$4C = script$4B;
var script$4z = defineComponent({
  name: "KnifeFork"
});
const _hoisted_1$2m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1);
function render$2i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2m, [
    _hoisted_2$2m
  ]);
}
script$4z.render = render$2i;
script$4z.__file = "packages/components/KnifeFork.vue";
var script$4A = script$4z;
var script$4x = defineComponent({
  name: "Iphone"
});
const _hoisted_1$2l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1);
function render$2h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2l, [
    _hoisted_2$2l
  ]);
}
script$4x.render = render$2h;
script$4x.__file = "packages/components/Iphone.vue";
var script$4y = script$4x;
var script$4v = defineComponent({
  name: "InfoFilled"
});
const _hoisted_1$2k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
function render$2g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2k, [
    _hoisted_2$2k
  ]);
}
script$4v.render = render$2g;
script$4v.__file = "packages/components/InfoFilled.vue";
var script$4w = script$4v;
var script$4t = defineComponent({
  name: "Link"
});
const _hoisted_1$2j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1);
function render$2f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2j, [
    _hoisted_2$2j
  ]);
}
script$4t.render = render$2f;
script$4t.__file = "packages/components/Link.vue";
var script$4u = script$4t;
var script$4r = defineComponent({
  name: "IceDrink"
});
const _hoisted_1$2i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1);
function render$2e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2i, [
    _hoisted_2$2i
  ]);
}
script$4r.render = render$2e;
script$4r.__file = "packages/components/IceDrink.vue";
var script$4s = script$4r;
var script$4p = defineComponent({
  name: "Lightning"
});
const _hoisted_1$2h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1);
const _hoisted_3$P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1);
function render$2d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2h, [
    _hoisted_2$2h,
    _hoisted_3$P
  ]);
}
script$4p.render = render$2d;
script$4p.__file = "packages/components/Lightning.vue";
var script$4q = script$4p;
var script$4n = defineComponent({
  name: "Loading"
});
const _hoisted_1$2g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1);
function render$2c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2g, [
    _hoisted_2$2g
  ]);
}
script$4n.render = render$2c;
script$4n.__file = "packages/components/Loading.vue";
var script$4o = script$4n;
var script$4l = defineComponent({
  name: "Lollipop"
});
const _hoisted_1$2f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1);
function render$2b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2f, [
    _hoisted_2$2f
  ]);
}
script$4l.render = render$2b;
script$4l.__file = "packages/components/Lollipop.vue";
var script$4m = script$4l;
var script$4j = defineComponent({
  name: "LocationInformation"
});
const _hoisted_1$2e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1);
function render$2a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2e, [
    _hoisted_2$2e,
    _hoisted_3$O,
    _hoisted_4$e
  ]);
}
script$4j.render = render$2a;
script$4j.__file = "packages/components/LocationInformation.vue";
var script$4k = script$4j;
var script$4h = defineComponent({
  name: "Lock"
});
const _hoisted_1$2d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1);
function render$29(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2d, [
    _hoisted_2$2d,
    _hoisted_3$N
  ]);
}
script$4h.render = render$29;
script$4h.__file = "packages/components/Lock.vue";
var script$4i = script$4h;
var script$4f = defineComponent({
  name: "LocationFilled"
});
const _hoisted_1$2c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1);
function render$28(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2c, [
    _hoisted_2$2c
  ]);
}
script$4f.render = render$28;
script$4f.__file = "packages/components/LocationFilled.vue";
var script$4g = script$4f;
var script$4d = defineComponent({
  name: "Magnet"
});
const _hoisted_1$2b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1);
function render$27(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2b, [
    _hoisted_2$2b
  ]);
}
script$4d.render = render$27;
script$4d.__file = "packages/components/Magnet.vue";
var script$4e = script$4d;
var script$4b = defineComponent({
  name: "Male"
});
const _hoisted_1$2a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1);
const _hoisted_3$M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1);
const _hoisted_4$d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1);
function render$26(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2a, [
    _hoisted_2$2a,
    _hoisted_3$M,
    _hoisted_4$d
  ]);
}
script$4b.render = render$26;
script$4b.__file = "packages/components/Male.vue";
var script$4c = script$4b;
var script$49 = defineComponent({
  name: "Location"
});
const _hoisted_1$29 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$29 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_3$L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1);
function render$25(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$29, [
    _hoisted_2$29,
    _hoisted_3$L
  ]);
}
script$49.render = render$25;
script$49.__file = "packages/components/Location.vue";
var script$4a = script$49;
var script$47 = defineComponent({
  name: "Menu"
});
const _hoisted_1$28 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$28 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1);
function render$24(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$28, [
    _hoisted_2$28
  ]);
}
script$47.render = render$24;
script$47.__file = "packages/components/Menu.vue";
var script$48 = script$47;
var script$45 = defineComponent({
  name: "MagicStick"
});
const _hoisted_1$27 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$27 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1);
function render$23(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$27, [
    _hoisted_2$27
  ]);
}
script$45.render = render$23;
script$45.__file = "packages/components/MagicStick.vue";
var script$46 = script$45;
var script$43 = defineComponent({
  name: "MessageBox"
});
const _hoisted_1$26 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$26 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1);
function render$22(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$26, [
    _hoisted_2$26
  ]);
}
script$43.render = render$22;
script$43.__file = "packages/components/MessageBox.vue";
var script$44 = script$43;
var script$41 = defineComponent({
  name: "MapLocation"
});
const _hoisted_1$25 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$25 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_3$K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1);
function render$21(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$25, [
    _hoisted_2$25,
    _hoisted_3$K
  ]);
}
script$41.render = render$21;
script$41.__file = "packages/components/MapLocation.vue";
var script$42 = script$41;
var script$3$ = defineComponent({
  name: "Mic"
});
const _hoisted_1$24 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$24 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1);
function render$20(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$24, [
    _hoisted_2$24
  ]);
}
script$3$.render = render$20;
script$3$.__file = "packages/components/Mic.vue";
var script$40 = script$3$;
var script$3Z = defineComponent({
  name: "Message"
});
const _hoisted_1$23 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$23 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1);
const _hoisted_3$J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1);
function render$1$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$23, [
    _hoisted_2$23,
    _hoisted_3$J
  ]);
}
script$3Z.render = render$1$;
script$3Z.__file = "packages/components/Message.vue";
var script$3_ = script$3Z;
var script$3X = defineComponent({
  name: "Medal"
});
const _hoisted_1$22 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$22 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1);
function render$1_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$22, [
    _hoisted_2$22,
    _hoisted_3$I
  ]);
}
script$3X.render = render$1_;
script$3X.__file = "packages/components/Medal.vue";
var script$3Y = script$3X;
var script$3V = defineComponent({
  name: "MilkTea"
});
const _hoisted_1$21 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$21 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1);
function render$1Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$21, [
    _hoisted_2$21
  ]);
}
script$3V.render = render$1Z;
script$3V.__file = "packages/components/MilkTea.vue";
var script$3W = script$3V;
var script$3T = defineComponent({
  name: "Microphone"
});
const _hoisted_1$20 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$20 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1);
function render$1Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$20, [
    _hoisted_2$20
  ]);
}
script$3T.render = render$1Y;
script$3T.__file = "packages/components/Microphone.vue";
var script$3U = script$3T;
var script$3R = defineComponent({
  name: "Minus"
});
const _hoisted_1$1$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1);
function render$1X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1$, [
    _hoisted_2$1$
  ]);
}
script$3R.render = render$1X;
script$3R.__file = "packages/components/Minus.vue";
var script$3S = script$3R;
var script$3P = defineComponent({
  name: "Money"
});
const _hoisted_1$1_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1);
const _hoisted_3$H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1);
const _hoisted_4$c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1);
function render$1W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1_, [
    _hoisted_2$1_,
    _hoisted_3$H,
    _hoisted_4$c
  ]);
}
script$3P.render = render$1W;
script$3P.__file = "packages/components/Money.vue";
var script$3Q = script$3P;
var script$3N = defineComponent({
  name: "MoonNight"
});
const _hoisted_1$1Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1);
const _hoisted_3$G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1);
function render$1V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1Z, [
    _hoisted_2$1Z,
    _hoisted_3$G
  ]);
}
script$3N.render = render$1V;
script$3N.__file = "packages/components/MoonNight.vue";
var script$3O = script$3N;
var script$3L = defineComponent({
  name: "Monitor"
});
const _hoisted_1$1Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1);
function render$1U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1Y, [
    _hoisted_2$1Y
  ]);
}
script$3L.render = render$1U;
script$3L.__file = "packages/components/Monitor.vue";
var script$3M = script$3L;
var script$3J = defineComponent({
  name: "Moon"
});
const _hoisted_1$1X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1);
function render$1T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1X, [
    _hoisted_2$1X
  ]);
}
script$3J.render = render$1T;
script$3J.__file = "packages/components/Moon.vue";
var script$3K = script$3J;
var script$3H = defineComponent({
  name: "More"
});
const _hoisted_1$1W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1);
function render$1S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1W, [
    _hoisted_2$1W
  ]);
}
script$3H.render = render$1S;
script$3H.__file = "packages/components/More.vue";
var script$3I = script$3H;
var script$3F = defineComponent({
  name: "MostlyCloudy"
});
const _hoisted_1$1V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1);
function render$1R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1V, [
    _hoisted_2$1V
  ]);
}
script$3F.render = render$1R;
script$3F.__file = "packages/components/MostlyCloudy.vue";
var script$3G = script$3F;
var script$3D = defineComponent({
  name: "MoreFilled"
});
const _hoisted_1$1U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1);
function render$1Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1U, [
    _hoisted_2$1U
  ]);
}
script$3D.render = render$1Q;
script$3D.__file = "packages/components/MoreFilled.vue";
var script$3E = script$3D;
var script$3B = defineComponent({
  name: "Mouse"
});
const _hoisted_1$1T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1);
const _hoisted_3$F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1);
function render$1P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1T, [
    _hoisted_2$1T,
    _hoisted_3$F
  ]);
}
script$3B.render = render$1P;
script$3B.__file = "packages/components/Mouse.vue";
var script$3C = script$3B;
var script$3z = defineComponent({
  name: "Mug"
});
const _hoisted_1$1S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1);
function render$1O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1S, [
    _hoisted_2$1S
  ]);
}
script$3z.render = render$1O;
script$3z.__file = "packages/components/Mug.vue";
var script$3A = script$3z;
var script$3x = defineComponent({
  name: "Mute"
});
const _hoisted_1$1R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1);
const _hoisted_3$E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1);
function render$1N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1R, [
    _hoisted_2$1R,
    _hoisted_3$E
  ]);
}
script$3x.render = render$1N;
script$3x.__file = "packages/components/Mute.vue";
var script$3y = script$3x;
var script$3v = defineComponent({
  name: "NoSmoking"
});
const _hoisted_1$1Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1);
function render$1M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1Q, [
    _hoisted_2$1Q
  ]);
}
script$3v.render = render$1M;
script$3v.__file = "packages/components/NoSmoking.vue";
var script$3w = script$3v;
var script$3t = defineComponent({
  name: "MuteNotification"
});
const _hoisted_1$1P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1);
const _hoisted_3$D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1);
function render$1L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1P, [
    _hoisted_2$1P,
    _hoisted_3$D
  ]);
}
script$3t.render = render$1L;
script$3t.__file = "packages/components/MuteNotification.vue";
var script$3u = script$3t;
var script$3r = defineComponent({
  name: "Notification"
});
const _hoisted_1$1O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1);
const _hoisted_3$C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
function render$1K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1O, [
    _hoisted_2$1O,
    _hoisted_3$C
  ]);
}
script$3r.render = render$1K;
script$3r.__file = "packages/components/Notification.vue";
var script$3s = script$3r;
var script$3p = defineComponent({
  name: "Notebook"
});
const _hoisted_1$1N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1);
function render$1J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1N, [
    _hoisted_2$1N,
    _hoisted_3$B
  ]);
}
script$3p.render = render$1J;
script$3p.__file = "packages/components/Notebook.vue";
var script$3q = script$3p;
var script$3n = defineComponent({
  name: "Odometer"
});
const _hoisted_1$1M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1);
const _hoisted_4$b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1);
function render$1I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1M, [
    _hoisted_2$1M,
    _hoisted_3$A,
    _hoisted_4$b
  ]);
}
script$3n.render = render$1I;
script$3n.__file = "packages/components/Odometer.vue";
var script$3o = script$3n;
var script$3l = defineComponent({
  name: "OfficeBuilding"
});
const _hoisted_1$1L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1);
const _hoisted_4$a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1);
function render$1H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1L, [
    _hoisted_2$1L,
    _hoisted_3$z,
    _hoisted_4$a
  ]);
}
script$3l.render = render$1H;
script$3l.__file = "packages/components/OfficeBuilding.vue";
var script$3m = script$3l;
var script$3j = defineComponent({
  name: "Operation"
});
const _hoisted_1$1K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1);
function render$1G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1K, [
    _hoisted_2$1K
  ]);
}
script$3j.render = render$1G;
script$3j.__file = "packages/components/Operation.vue";
var script$3k = script$3j;
var script$3h = defineComponent({
  name: "Opportunity"
});
const _hoisted_1$1J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1);
function render$1F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1J, [
    _hoisted_2$1J
  ]);
}
script$3h.render = render$1F;
script$3h.__file = "packages/components/Opportunity.vue";
var script$3i = script$3h;
var script$3f = defineComponent({
  name: "Orange"
});
const _hoisted_1$1I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1);
function render$1E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1I, [
    _hoisted_2$1I
  ]);
}
script$3f.render = render$1E;
script$3f.__file = "packages/components/Orange.vue";
var script$3g = script$3f;
var script$3d = defineComponent({
  name: "Open"
});
const _hoisted_1$1H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1);
const _hoisted_3$y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1);
function render$1D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1H, [
    _hoisted_2$1H,
    _hoisted_3$y
  ]);
}
script$3d.render = render$1D;
script$3d.__file = "packages/components/Open.vue";
var script$3e = script$3d;
var script$3b = defineComponent({
  name: "Paperclip"
});
const _hoisted_1$1G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1);
function render$1C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1G, [
    _hoisted_2$1G
  ]);
}
script$3b.render = render$1C;
script$3b.__file = "packages/components/Paperclip.vue";
var script$3c = script$3b;
var script$39 = defineComponent({
  name: "Pear"
});
const _hoisted_1$1F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1);
function render$1B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1F, [
    _hoisted_2$1F
  ]);
}
script$39.render = render$1B;
script$39.__file = "packages/components/Pear.vue";
var script$3a = script$39;
var script$37 = defineComponent({
  name: "PartlyCloudy"
});
const _hoisted_1$1E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1);
const _hoisted_3$x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1);
function render$1A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1E, [
    _hoisted_2$1E,
    _hoisted_3$x
  ]);
}
script$37.render = render$1A;
script$37.__file = "packages/components/PartlyCloudy.vue";
var script$38 = script$37;
var script$35 = defineComponent({
  name: "Phone"
});
const _hoisted_1$1D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1);
function render$1z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1D, [
    _hoisted_2$1D
  ]);
}
script$35.render = render$1z;
script$35.__file = "packages/components/Phone.vue";
var script$36 = script$35;
var script$33 = defineComponent({
  name: "PictureFilled"
});
const _hoisted_1$1C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1);
function render$1y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1C, [
    _hoisted_2$1C
  ]);
}
script$33.render = render$1y;
script$33.__file = "packages/components/PictureFilled.vue";
var script$34 = script$33;
var script$31 = defineComponent({
  name: "PhoneFilled"
});
const _hoisted_1$1B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1);
function render$1x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1B, [
    _hoisted_2$1B
  ]);
}
script$31.render = render$1x;
script$31.__file = "packages/components/PhoneFilled.vue";
var script$32 = script$31;
var script$2$ = defineComponent({
  name: "PictureRounded"
});
const _hoisted_1$1A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1);
const _hoisted_3$w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1);
function render$1w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1A, [
    _hoisted_2$1A,
    _hoisted_3$w
  ]);
}
script$2$.render = render$1w;
script$2$.__file = "packages/components/PictureRounded.vue";
var script$30 = script$2$;
var script$2Z = defineComponent({
  name: "Guide"
});
const _hoisted_1$1z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1);
const _hoisted_3$v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1);
function render$1v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1z, [
    _hoisted_2$1z,
    _hoisted_3$v
  ]);
}
script$2Z.render = render$1v;
script$2Z.__file = "packages/components/Guide.vue";
var script$2_ = script$2Z;
var script$2X = defineComponent({
  name: "Place"
});
const _hoisted_1$1y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
const _hoisted_3$u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$9 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1);
function render$1u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1y, [
    _hoisted_2$1y,
    _hoisted_3$u,
    _hoisted_4$9
  ]);
}
script$2X.render = render$1u;
script$2X.__file = "packages/components/Place.vue";
var script$2Y = script$2X;
var script$2V = defineComponent({
  name: "Platform"
});
const _hoisted_1$1x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1);
function render$1t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1x, [
    _hoisted_2$1x
  ]);
}
script$2V.render = render$1t;
script$2V.__file = "packages/components/Platform.vue";
var script$2W = script$2V;
var script$2T = defineComponent({
  name: "PieChart"
});
const _hoisted_1$1w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1);
const _hoisted_3$t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1);
function render$1s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1w, [
    _hoisted_2$1w,
    _hoisted_3$t
  ]);
}
script$2T.render = render$1s;
script$2T.__file = "packages/components/PieChart.vue";
var script$2U = script$2T;
var script$2R = defineComponent({
  name: "Pointer"
});
const _hoisted_1$1v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1);
function render$1r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1v, [
    _hoisted_2$1v
  ]);
}
script$2R.render = render$1r;
script$2R.__file = "packages/components/Pointer.vue";
var script$2S = script$2R;
var script$2P = defineComponent({
  name: "Plus"
});
const _hoisted_1$1u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1);
function render$1q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1u, [
    _hoisted_2$1u
  ]);
}
script$2P.render = render$1q;
script$2P.__file = "packages/components/Plus.vue";
var script$2Q = script$2P;
var script$2N = defineComponent({
  name: "Position"
});
const _hoisted_1$1t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1);
function render$1p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1t, [
    _hoisted_2$1t
  ]);
}
script$2N.render = render$1p;
script$2N.__file = "packages/components/Position.vue";
var script$2O = script$2N;
var script$2L = defineComponent({
  name: "Postcard"
});
const _hoisted_1$1s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function render$1o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1s, [
    _hoisted_2$1s,
    _hoisted_3$s
  ]);
}
script$2L.render = render$1o;
script$2L.__file = "packages/components/Postcard.vue";
var script$2M = script$2L;
var script$2J = defineComponent({
  name: "Present"
});
const _hoisted_1$1r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1);
const _hoisted_3$r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$8 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_5$4 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function render$1n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1r, [
    _hoisted_2$1r,
    _hoisted_3$r,
    _hoisted_4$8,
    _hoisted_5$4
  ]);
}
script$2J.render = render$1n;
script$2J.__file = "packages/components/Present.vue";
var script$2K = script$2J;
var script$2H = defineComponent({
  name: "PriceTag"
});
const _hoisted_1$1q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1);
const _hoisted_3$q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function render$1m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1q, [
    _hoisted_2$1q,
    _hoisted_3$q
  ]);
}
script$2H.render = render$1m;
script$2H.__file = "packages/components/PriceTag.vue";
var script$2I = script$2H;
var script$2F = defineComponent({
  name: "Promotion"
});
const _hoisted_1$1p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1);
function render$1l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1p, [
    _hoisted_2$1p
  ]);
}
script$2F.render = render$1l;
script$2F.__file = "packages/components/Promotion.vue";
var script$2G = script$2F;
var script$2D = defineComponent({
  name: "Pouring"
});
const _hoisted_1$1o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1);
function render$1k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1o, [
    _hoisted_2$1o
  ]);
}
script$2D.render = render$1k;
script$2D.__file = "packages/components/Pouring.vue";
var script$2E = script$2D;
var script$2B = defineComponent({
  name: "ReadingLamp"
});
const _hoisted_1$1n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1);
const _hoisted_3$p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1);
function render$1j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1n, [
    _hoisted_2$1n,
    _hoisted_3$p
  ]);
}
script$2B.render = render$1j;
script$2B.__file = "packages/components/ReadingLamp.vue";
var script$2C = script$2B;
var script$2z = defineComponent({
  name: "QuestionFilled"
});
const _hoisted_1$1m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1);
function render$1i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1m, [
    _hoisted_2$1m
  ]);
}
script$2z.render = render$1i;
script$2z.__file = "packages/components/QuestionFilled.vue";
var script$2A = script$2z;
var script$2x = defineComponent({
  name: "Printer"
});
const _hoisted_1$1l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1);
function render$1h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1l, [
    _hoisted_2$1l
  ]);
}
script$2x.render = render$1h;
script$2x.__file = "packages/components/Printer.vue";
var script$2y = script$2x;
var script$2v = defineComponent({
  name: "Picture"
});
const _hoisted_1$1k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1);
function render$1g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1k, [
    _hoisted_2$1k,
    _hoisted_3$o
  ]);
}
script$2v.render = render$1g;
script$2v.__file = "packages/components/Picture.vue";
var script$2w = script$2v;
var script$2t = defineComponent({
  name: "RefreshRight"
});
const _hoisted_1$1j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1);
function render$1f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1j, [
    _hoisted_2$1j
  ]);
}
script$2t.render = render$1f;
script$2t.__file = "packages/components/RefreshRight.vue";
var script$2u = script$2t;
var script$2r = defineComponent({
  name: "Reading"
});
const _hoisted_1$1i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1);
const _hoisted_3$n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1);
function render$1e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1i, [
    _hoisted_2$1i,
    _hoisted_3$n
  ]);
}
script$2r.render = render$1e;
script$2r.__file = "packages/components/Reading.vue";
var script$2s = script$2r;
var script$2p = defineComponent({
  name: "RefreshLeft"
});
const _hoisted_1$1h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1);
function render$1d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1h, [
    _hoisted_2$1h
  ]);
}
script$2p.render = render$1d;
script$2p.__file = "packages/components/RefreshLeft.vue";
var script$2q = script$2p;
var script$2n = defineComponent({
  name: "Refresh"
});
const _hoisted_1$1g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1);
function render$1c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1g, [
    _hoisted_2$1g
  ]);
}
script$2n.render = render$1c;
script$2n.__file = "packages/components/Refresh.vue";
var script$2o = script$2n;
var script$2l = defineComponent({
  name: "Refrigerator"
});
const _hoisted_1$1f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1);
function render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1f, [
    _hoisted_2$1f
  ]);
}
script$2l.render = render$1b;
script$2l.__file = "packages/components/Refrigerator.vue";
var script$2m = script$2l;
var script$2j = defineComponent({
  name: "RemoveFilled"
});
const _hoisted_1$1e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1);
function render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1e, [
    _hoisted_2$1e
  ]);
}
script$2j.render = render$1a;
script$2j.__file = "packages/components/RemoveFilled.vue";
var script$2k = script$2j;
var script$2h = defineComponent({
  name: "Right"
});
const _hoisted_1$1d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1);
function render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1d, [
    _hoisted_2$1d
  ]);
}
script$2h.render = render$19;
script$2h.__file = "packages/components/Right.vue";
var script$2i = script$2h;
var script$2f = defineComponent({
  name: "ScaleToOriginal"
});
const _hoisted_1$1c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1);
function render$18(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1c, [
    _hoisted_2$1c
  ]);
}
script$2f.render = render$18;
script$2f.__file = "packages/components/ScaleToOriginal.vue";
var script$2g = script$2f;
var script$2d = defineComponent({
  name: "School"
});
const _hoisted_1$1b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1);
const _hoisted_4$7 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1);
function render$17(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1b, [
    _hoisted_2$1b,
    _hoisted_3$m,
    _hoisted_4$7
  ]);
}
script$2d.render = render$17;
script$2d.__file = "packages/components/School.vue";
var script$2e = script$2d;
var script$2b = defineComponent({
  name: "Remove"
});
const _hoisted_1$1a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function render$16(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1a, [
    _hoisted_2$1a,
    _hoisted_3$l
  ]);
}
script$2b.render = render$16;
script$2b.__file = "packages/components/Remove.vue";
var script$2c = script$2b;
var script$29 = defineComponent({
  name: "Scissor"
});
const _hoisted_1$19 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$19 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1);
function render$15(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$19, [
    _hoisted_2$19
  ]);
}
script$29.render = render$15;
script$29.__file = "packages/components/Scissor.vue";
var script$2a = script$29;
var script$27 = defineComponent({
  name: "Select"
});
const _hoisted_1$18 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$18 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1);
function render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$18, [
    _hoisted_2$18
  ]);
}
script$27.render = render$14;
script$27.__file = "packages/components/Select.vue";
var script$28 = script$27;
var script$25 = defineComponent({
  name: "Management"
});
const _hoisted_1$17 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$17 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1);
function render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$17, [
    _hoisted_2$17
  ]);
}
script$25.render = render$13;
script$25.__file = "packages/components/Management.vue";
var script$26 = script$25;
var script$23 = defineComponent({
  name: "Search"
});
const _hoisted_1$16 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$16 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1);
function render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$16, [
    _hoisted_2$16
  ]);
}
script$23.render = render$12;
script$23.__file = "packages/components/Search.vue";
var script$24 = script$23;
var script$21 = defineComponent({
  name: "Sell"
});
const _hoisted_1$15 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$15 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1);
function render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$15, [
    _hoisted_2$15
  ]);
}
script$21.render = render$11;
script$21.__file = "packages/components/Sell.vue";
var script$22 = script$21;
var script$1$ = defineComponent({
  name: "SemiSelect"
});
const _hoisted_1$14 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$14 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1);
function render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$14, [
    _hoisted_2$14
  ]);
}
script$1$.render = render$10;
script$1$.__file = "packages/components/SemiSelect.vue";
var script$20 = script$1$;
var script$1Z = defineComponent({
  name: "Share"
});
const _hoisted_1$13 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$13 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1);
function render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$13, [
    _hoisted_2$13
  ]);
}
script$1Z.render = render$$;
script$1Z.__file = "packages/components/Share.vue";
var script$1_ = script$1Z;
var script$1X = defineComponent({
  name: "Setting"
});
const _hoisted_1$12 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$12 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1);
function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$12, [
    _hoisted_2$12
  ]);
}
script$1X.render = render$_;
script$1X.__file = "packages/components/Setting.vue";
var script$1Y = script$1X;
var script$1V = defineComponent({
  name: "Service"
});
const _hoisted_1$11 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$11 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1);
function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$11, [
    _hoisted_2$11
  ]);
}
script$1V.render = render$Z;
script$1V.__file = "packages/components/Service.vue";
var script$1W = script$1V;
var script$1T = defineComponent({
  name: "Ship"
});
const _hoisted_1$10 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$10 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1);
function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$10, [
    _hoisted_2$10
  ]);
}
script$1T.render = render$Y;
script$1T.__file = "packages/components/Ship.vue";
var script$1U = script$1T;
var script$1R = defineComponent({
  name: "SetUp"
});
const _hoisted_1$$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1);
const _hoisted_3$k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_4$6 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_5$3 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$$, [
    _hoisted_2$$,
    _hoisted_3$k,
    _hoisted_4$6,
    _hoisted_5$3
  ]);
}
script$1R.render = render$X;
script$1R.__file = "packages/components/SetUp.vue";
var script$1S = script$1R;
var script$1P = defineComponent({
  name: "ShoppingBag"
});
const _hoisted_1$_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1);
const _hoisted_3$j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1);
function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$_, [
    _hoisted_2$_,
    _hoisted_3$j
  ]);
}
script$1P.render = render$W;
script$1P.__file = "packages/components/ShoppingBag.vue";
var script$1Q = script$1P;
var script$1N = defineComponent({
  name: "Shop"
});
const _hoisted_1$Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1);
function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$Z, [
    _hoisted_2$Z
  ]);
}
script$1N.render = render$V;
script$1N.__file = "packages/components/Shop.vue";
var script$1O = script$1N;
var script$1L = defineComponent({
  name: "ShoppingCart"
});
const _hoisted_1$Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1);
function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$Y, [
    _hoisted_2$Y
  ]);
}
script$1L.render = render$U;
script$1L.__file = "packages/components/ShoppingCart.vue";
var script$1M = script$1L;
var script$1J = defineComponent({
  name: "ShoppingCartFull"
});
const _hoisted_1$X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1);
const _hoisted_3$i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1);
function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$X, [
    _hoisted_2$X,
    _hoisted_3$i
  ]);
}
script$1J.render = render$T;
script$1J.__file = "packages/components/ShoppingCartFull.vue";
var script$1K = script$1J;
var script$1H = defineComponent({
  name: "Soccer"
});
const _hoisted_1$W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1);
function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$W, [
    _hoisted_2$W
  ]);
}
script$1H.render = render$S;
script$1H.__file = "packages/components/Soccer.vue";
var script$1I = script$1H;
var script$1F = defineComponent({
  name: "SoldOut"
});
const _hoisted_1$V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1);
function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$V, [
    _hoisted_2$V
  ]);
}
script$1F.render = render$R;
script$1F.__file = "packages/components/SoldOut.vue";
var script$1G = script$1F;
var script$1D = defineComponent({
  name: "Smoking"
});
const _hoisted_1$U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1);
function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$U, [
    _hoisted_2$U,
    _hoisted_3$h
  ]);
}
script$1D.render = render$Q;
script$1D.__file = "packages/components/Smoking.vue";
var script$1E = script$1D;
var script$1B = defineComponent({
  name: "SortDown"
});
const _hoisted_1$T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1);
function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$T, [
    _hoisted_2$T
  ]);
}
script$1B.render = render$P;
script$1B.__file = "packages/components/SortDown.vue";
var script$1C = script$1B;
var script$1z = defineComponent({
  name: "Sort"
});
const _hoisted_1$S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1);
function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$S, [
    _hoisted_2$S
  ]);
}
script$1z.render = render$O;
script$1z.__file = "packages/components/Sort.vue";
var script$1A = script$1z;
var script$1x = defineComponent({
  name: "SortUp"
});
const _hoisted_1$R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1);
function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$R, [
    _hoisted_2$R
  ]);
}
script$1x.render = render$N;
script$1x.__file = "packages/components/SortUp.vue";
var script$1y = script$1x;
var script$1v = defineComponent({
  name: "Star"
});
const _hoisted_1$Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1);
function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$Q, [
    _hoisted_2$Q
  ]);
}
script$1v.render = render$M;
script$1v.__file = "packages/components/Star.vue";
var script$1w = script$1v;
var script$1t = defineComponent({
  name: "Stamp"
});
const _hoisted_1$P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1);
function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$P, [
    _hoisted_2$P
  ]);
}
script$1t.render = render$L;
script$1t.__file = "packages/components/Stamp.vue";
var script$1u = script$1t;
var script$1r = defineComponent({
  name: "StarFilled"
});
const _hoisted_1$O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1);
function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$O, [
    _hoisted_2$O
  ]);
}
script$1r.render = render$K;
script$1r.__file = "packages/components/StarFilled.vue";
var script$1s = script$1r;
var script$1p = defineComponent({
  name: "Stopwatch"
});
const _hoisted_1$N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1);
function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$N, [
    _hoisted_2$N,
    _hoisted_3$g
  ]);
}
script$1p.render = render$J;
script$1p.__file = "packages/components/Stopwatch.vue";
var script$1q = script$1p;
var script$1n = defineComponent({
  name: "SuccessFilled"
});
const _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$M, [
    _hoisted_2$M
  ]);
}
script$1n.render = render$I;
script$1n.__file = "packages/components/SuccessFilled.vue";
var script$1o = script$1n;
var script$1l = defineComponent({
  name: "Suitcase"
});
const _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1);
function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$L, [
    _hoisted_2$L,
    _hoisted_3$f
  ]);
}
script$1l.render = render$H;
script$1l.__file = "packages/components/Suitcase.vue";
var script$1m = script$1l;
var script$1j = defineComponent({
  name: "Sugar"
});
const _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1);
function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$K, [
    _hoisted_2$K
  ]);
}
script$1j.render = render$G;
script$1j.__file = "packages/components/Sugar.vue";
var script$1k = script$1j;
var script$1h = defineComponent({
  name: "Sunny"
});
const _hoisted_1$J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1);
function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$J, [
    _hoisted_2$J
  ]);
}
script$1h.render = render$F;
script$1h.__file = "packages/components/Sunny.vue";
var script$1i = script$1h;
var script$1f = defineComponent({
  name: "Sunrise"
});
const _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1);
function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$I, [
    _hoisted_2$I
  ]);
}
script$1f.render = render$E;
script$1f.__file = "packages/components/Sunrise.vue";
var script$1g = script$1f;
var script$1d = defineComponent({
  name: "Switch"
});
const _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1);
function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$H, [
    _hoisted_2$H
  ]);
}
script$1d.render = render$D;
script$1d.__file = "packages/components/Switch.vue";
var script$1e = script$1d;
var script$1b = defineComponent({
  name: "Ticket"
});
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1);
function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$G, [
    _hoisted_2$G
  ]);
}
script$1b.render = render$C;
script$1b.__file = "packages/components/Ticket.vue";
var script$1c = script$1b;
var script$19 = defineComponent({
  name: "Sunset"
});
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$F, [
    _hoisted_2$F
  ]);
}
script$19.render = render$B;
script$19.__file = "packages/components/Sunset.vue";
var script$1a = script$19;
var script$17 = defineComponent({
  name: "Tickets"
});
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1);
function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$E, [
    _hoisted_2$E
  ]);
}
script$17.render = render$A;
script$17.__file = "packages/components/Tickets.vue";
var script$18 = script$17;
var script$15 = defineComponent({
  name: "SwitchButton"
});
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1);
const _hoisted_3$e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1);
function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$D, [
    _hoisted_2$D,
    _hoisted_3$e
  ]);
}
script$15.render = render$z;
script$15.__file = "packages/components/SwitchButton.vue";
var script$16 = script$15;
var script$13 = defineComponent({
  name: "TakeawayBox"
});
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1);
function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$C, [
    _hoisted_2$C
  ]);
}
script$13.render = render$y;
script$13.__file = "packages/components/TakeawayBox.vue";
var script$14 = script$13;
var script$11 = defineComponent({
  name: "ToiletPaper"
});
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1);
const _hoisted_3$d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1);
function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$B, [
    _hoisted_2$B,
    _hoisted_3$d
  ]);
}
script$11.render = render$x;
script$11.__file = "packages/components/ToiletPaper.vue";
var script$12 = script$11;
var script$$ = defineComponent({
  name: "Timer"
});
const _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$5 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1);
function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$A, [
    _hoisted_2$A,
    _hoisted_3$c,
    _hoisted_4$5
  ]);
}
script$$.render = render$w;
script$$.__file = "packages/components/Timer.vue";
var script$10 = script$$;
var script$Z = defineComponent({
  name: "Tools"
});
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1);
function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$z, [
    _hoisted_2$z
  ]);
}
script$Z.render = render$v;
script$Z.__file = "packages/components/Tools.vue";
var script$_ = script$Z;
var script$X = defineComponent({
  name: "TopLeft"
});
const _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1);
const _hoisted_3$b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1);
function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$y, [
    _hoisted_2$y,
    _hoisted_3$b
  ]);
}
script$X.render = render$u;
script$X.__file = "packages/components/TopLeft.vue";
var script$Y = script$X;
var script$V = defineComponent({
  name: "Top"
});
const _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1);
function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$x, [
    _hoisted_2$x
  ]);
}
script$V.render = render$t;
script$V.__file = "packages/components/Top.vue";
var script$W = script$V;
var script$T = defineComponent({
  name: "TopRight"
});
const _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1);
const _hoisted_3$a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1);
function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$w, [
    _hoisted_2$w,
    _hoisted_3$a
  ]);
}
script$T.render = render$s;
script$T.__file = "packages/components/TopRight.vue";
var script$U = script$T;
var script$R = defineComponent({
  name: "TrendCharts"
});
const _hoisted_1$v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1);
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$v, [
    _hoisted_2$v
  ]);
}
script$R.render = render$r;
script$R.__file = "packages/components/TrendCharts.vue";
var script$S = script$R;
var script$P = defineComponent({
  name: "TurnOff"
});
const _hoisted_1$u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1);
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$u, [
    _hoisted_2$u,
    _hoisted_3$9
  ]);
}
script$P.render = render$q;
script$P.__file = "packages/components/TurnOff.vue";
var script$Q = script$P;
var script$N = defineComponent({
  name: "Unlock"
});
const _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1);
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$t, [
    _hoisted_2$t,
    _hoisted_3$8
  ]);
}
script$N.render = render$p;
script$N.__file = "packages/components/Unlock.vue";
var script$O = script$N;
var script$L = defineComponent({
  name: "Trophy"
});
const _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1);
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$s, [
    _hoisted_2$s
  ]);
}
script$L.render = render$o;
script$L.__file = "packages/components/Trophy.vue";
var script$M = script$L;
var script$J = defineComponent({
  name: "Umbrella"
});
const _hoisted_1$r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1);
function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$r, [
    _hoisted_2$r
  ]);
}
script$J.render = render$n;
script$J.__file = "packages/components/Umbrella.vue";
var script$K = script$J;
var script$H = defineComponent({
  name: "UploadFilled"
});
const _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1);
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$q, [
    _hoisted_2$q
  ]);
}
script$H.render = render$m;
script$H.__file = "packages/components/UploadFilled.vue";
var script$I = script$H;
var script$F = defineComponent({
  name: "UserFilled"
});
const _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1);
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$p, [
    _hoisted_2$p
  ]);
}
script$F.render = render$l;
script$F.__file = "packages/components/UserFilled.vue";
var script$G = script$F;
var script$D = defineComponent({
  name: "Upload"
});
const _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1);
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$o, [
    _hoisted_2$o
  ]);
}
script$D.render = render$k;
script$D.__file = "packages/components/Upload.vue";
var script$E = script$D;
var script$B = defineComponent({
  name: "User"
});
const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1);
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$n, [
    _hoisted_2$n
  ]);
}
script$B.render = render$j;
script$B.__file = "packages/components/User.vue";
var script$C = script$B;
var script$z = defineComponent({
  name: "Van"
});
const _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1);
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$m, [
    _hoisted_2$m
  ]);
}
script$z.render = render$i;
script$z.__file = "packages/components/Van.vue";
var script$A = script$z;
var script$x = defineComponent({
  name: "CopyDocument"
});
const _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1);
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$l, [
    _hoisted_2$l,
    _hoisted_3$7
  ]);
}
script$x.render = render$h;
script$x.__file = "packages/components/CopyDocument.vue";
var script$y = script$x;
var script$v = defineComponent({
  name: "VideoPause"
});
const _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1);
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$k, [
    _hoisted_2$k
  ]);
}
script$v.render = render$g;
script$v.__file = "packages/components/VideoPause.vue";
var script$w = script$v;
var script$t = defineComponent({
  name: "VideoCameraFilled"
});
const _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1);
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$j, [
    _hoisted_2$j
  ]);
}
script$t.render = render$f;
script$t.__file = "packages/components/VideoCameraFilled.vue";
var script$u = script$t;
var script$r = defineComponent({
  name: "View"
});
const _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1);
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$i, [
    _hoisted_2$i
  ]);
}
script$r.render = render$e;
script$r.__file = "packages/components/View.vue";
var script$s = script$r;
var script$p = defineComponent({
  name: "Wallet"
});
const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1);
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$h, [
    _hoisted_2$h,
    _hoisted_3$6,
    _hoisted_4$4
  ]);
}
script$p.render = render$d;
script$p.__file = "packages/components/Wallet.vue";
var script$q = script$p;
var script$n = defineComponent({
  name: "WarningFilled"
});
const _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1);
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$g, [
    _hoisted_2$g
  ]);
}
script$n.render = render$c;
script$n.__file = "packages/components/WarningFilled.vue";
var script$o = script$n;
var script$l = defineComponent({
  name: "Watch"
});
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1);
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$f, [
    _hoisted_2$f,
    _hoisted_3$5,
    _hoisted_4$3
  ]);
}
script$l.render = render$b;
script$l.__file = "packages/components/Watch.vue";
var script$m = script$l;
var script$j = defineComponent({
  name: "VideoPlay"
});
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1);
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$e, [
    _hoisted_2$e
  ]);
}
script$j.render = render$a;
script$j.__file = "packages/components/VideoPlay.vue";
var script$k = script$j;
var script$h = defineComponent({
  name: "Watermelon"
});
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1);
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$d, [
    _hoisted_2$d
  ]);
}
script$h.render = render$9;
script$h.__file = "packages/components/Watermelon.vue";
var script$i = script$h;
var script$f = defineComponent({
  name: "VideoCamera"
});
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1);
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$c, [
    _hoisted_2$c
  ]);
}
script$f.render = render$8;
script$f.__file = "packages/components/VideoCamera.vue";
var script$g = script$f;
var script$d = defineComponent({
  name: "WalletFilled"
});
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1);
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$b, [
    _hoisted_2$b
  ]);
}
script$d.render = render$7;
script$d.__file = "packages/components/WalletFilled.vue";
var script$e = script$d;
var script$b = defineComponent({
  name: "Warning"
});
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$a, [
    _hoisted_2$a
  ]);
}
script$b.render = render$6;
script$b.__file = "packages/components/Warning.vue";
var script$c = script$b;
var script$9 = defineComponent({
  name: "List"
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$9 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1);
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$9, [
    _hoisted_2$9
  ]);
}
script$9.render = render$5;
script$9.__file = "packages/components/List.vue";
var script$a = script$9;
var script$7 = defineComponent({
  name: "ZoomIn"
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$8 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1);
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$8, [
    _hoisted_2$8
  ]);
}
script$7.render = render$4;
script$7.__file = "packages/components/ZoomIn.vue";
var script$8 = script$7;
var script$5 = defineComponent({
  name: "ZoomOut"
});
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$7 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$7, [
    _hoisted_2$7
  ]);
}
script$5.render = render$3;
script$5.__file = "packages/components/ZoomOut.vue";
var script$6 = script$5;
var script$3 = defineComponent({
  name: "Rank"
});
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$6 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1);
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$6, [
    _hoisted_2$6
  ]);
}
script$3.render = render$2;
script$3.__file = "packages/components/Rank.vue";
var script$4 = script$3;
var script$1 = defineComponent({
  name: "WindPower"
});
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$5 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1);
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$5, [
    _hoisted_2$5
  ]);
}
script$1.render = render$1;
script$1.__file = "packages/components/WindPower.vue";
var script$2 = script$1;
var Icons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Aim: script$8L,
  AddLocation: script$8J,
  Apple: script$8H,
  AlarmClock: script$8F,
  ArrowDown: script$8D,
  ArrowDownBold: script$8B,
  ArrowLeft: script$8z,
  ArrowLeftBold: script$8x,
  ArrowRightBold: script$8v,
  ArrowUp: script$8t,
  Back: script$8r,
  Bell: script$8p,
  Baseball: script$8n,
  Bicycle: script$8l,
  BellFilled: script$8j,
  Basketball: script$8h,
  Bottom: script$8f,
  Box: script$8d,
  Briefcase: script$8b,
  BrushFilled: script$89,
  Bowl: script$87,
  Avatar: script$85,
  Brush: script$83,
  Burger: script$81,
  Camera: script$7$,
  BottomLeft: script$7Z,
  Calendar: script$7X,
  CaretBottom: script$7V,
  CaretLeft: script$7T,
  CaretRight,
  CaretTop: script$7Q,
  ChatDotSquare: script$7O,
  Cellphone: script$7M,
  ChatDotRound: script$7K,
  ChatLineSquare: script$7I,
  ChatLineRound: script$7G,
  ChatRound: script$7E,
  Check: script$7C,
  ChatSquare: script$7A,
  Cherry: script$7y,
  Chicken: script$7w,
  CircleCheckFilled: script$7u,
  CircleCheck: script$7s,
  Checked: script$7q,
  CircleCloseFilled: script$7o,
  CircleClose: script$7m,
  ArrowRight: script$7k,
  CirclePlus: script$7i,
  Clock: script$7g,
  CloseBold: script$7e,
  Close: script$7c,
  Cloudy: script$7a,
  CirclePlusFilled: script$78,
  CoffeeCup: script$76,
  ColdDrink: script$74,
  Coin: script$72,
  ArrowUpBold: script$70,
  CollectionTag: script$6_,
  BottomRight: script$6Y,
  Coffee: script$6W,
  CameraFilled: script$6U,
  Collection: script$6S,
  Cpu: script$6Q,
  Crop: script$6O,
  Coordinate: script$6M,
  DArrowLeft: script$6K,
  Compass: script$6I,
  Connection: script$6G,
  CreditCard: script$6E,
  DataBoard: script$6C,
  DArrowRight: script$6A,
  Dessert: script$6y,
  DeleteLocation: script$6w,
  DCaret: script$6u,
  Delete: script$6s,
  Dish: script$6q,
  DishDot: script$6o,
  DocumentCopy: script$6m,
  Discount: script$6k,
  DocumentChecked: script$6i,
  DocumentAdd: script$6g,
  DocumentRemove: script$6e,
  DataAnalysis: script$6c,
  DeleteFilled: script$6a,
  Download: script$68,
  Drizzling: script$66,
  Eleme: script$64,
  ElemeFilled: script$62,
  Edit: script$60,
  Failed: script$5_,
  Expand: script$5Y,
  Female: script$5W,
  Document: script$5U,
  Film: script$5S,
  Finished: script$5Q,
  DataLine: script$5O,
  Filter: script$5M,
  Flag: script$5K,
  FolderChecked: script$5I,
  FirstAidKit: script$5G,
  FolderAdd: script$5E,
  Fold: script$5C,
  FolderDelete: script$5A,
  DocumentDelete: script$5y,
  Folder: script$5w,
  Food: script$5u,
  FolderOpened: script$5s,
  Football: script$5q,
  FolderRemove: script$5o,
  Fries: script$5m,
  FullScreen: script$5k,
  ForkSpoon: script$5i,
  Goblet: script$5g,
  GobletFull: script$5e,
  Goods: script$5c,
  GobletSquareFull: script$5a,
  GoodsFilled: script$58,
  Grid: script$56,
  Grape: script$54,
  GobletSquare: script$52,
  Headset: script$50,
  Comment: script$4_,
  HelpFilled: script$4Y,
  Histogram: script$4W,
  HomeFilled: script$4U,
  Help: script$4S,
  House: script$4Q,
  IceCreamRound: script$4O,
  HotWater: script$4M,
  IceCream: script$4K,
  Files: script$4I,
  IceCreamSquare: script$4G,
  Key: script$4E,
  IceTea: script$4C,
  KnifeFork: script$4A,
  Iphone: script$4y,
  InfoFilled: script$4w,
  Link: script$4u,
  IceDrink: script$4s,
  Lightning: script$4q,
  Loading: script$4o,
  Lollipop: script$4m,
  LocationInformation: script$4k,
  Lock: script$4i,
  LocationFilled: script$4g,
  Magnet: script$4e,
  Male: script$4c,
  Location: script$4a,
  Menu: script$48,
  MagicStick: script$46,
  MessageBox: script$44,
  MapLocation: script$42,
  Mic: script$40,
  Message: script$3_,
  Medal: script$3Y,
  MilkTea: script$3W,
  Microphone: script$3U,
  Minus: script$3S,
  Money: script$3Q,
  MoonNight: script$3O,
  Monitor: script$3M,
  Moon: script$3K,
  More: script$3I,
  MostlyCloudy: script$3G,
  MoreFilled: script$3E,
  Mouse: script$3C,
  Mug: script$3A,
  Mute: script$3y,
  NoSmoking: script$3w,
  MuteNotification: script$3u,
  Notification: script$3s,
  Notebook: script$3q,
  Odometer: script$3o,
  OfficeBuilding: script$3m,
  Operation: script$3k,
  Opportunity: script$3i,
  Orange: script$3g,
  Open: script$3e,
  Paperclip: script$3c,
  Pear: script$3a,
  PartlyCloudy: script$38,
  Phone: script$36,
  PictureFilled: script$34,
  PhoneFilled: script$32,
  PictureRounded: script$30,
  Guide: script$2_,
  Place: script$2Y,
  Platform: script$2W,
  PieChart: script$2U,
  Pointer: script$2S,
  Plus: script$2Q,
  Position: script$2O,
  Postcard: script$2M,
  Present: script$2K,
  PriceTag: script$2I,
  Promotion: script$2G,
  Pouring: script$2E,
  ReadingLamp: script$2C,
  QuestionFilled: script$2A,
  Printer: script$2y,
  Picture: script$2w,
  RefreshRight: script$2u,
  Reading: script$2s,
  RefreshLeft: script$2q,
  Refresh: script$2o,
  Refrigerator: script$2m,
  RemoveFilled: script$2k,
  Right: script$2i,
  ScaleToOriginal: script$2g,
  School: script$2e,
  Remove: script$2c,
  Scissor: script$2a,
  Select: script$28,
  Management: script$26,
  Search: script$24,
  Sell: script$22,
  SemiSelect: script$20,
  Share: script$1_,
  Setting: script$1Y,
  Service: script$1W,
  Ship: script$1U,
  SetUp: script$1S,
  ShoppingBag: script$1Q,
  Shop: script$1O,
  ShoppingCart: script$1M,
  ShoppingCartFull: script$1K,
  Soccer: script$1I,
  SoldOut: script$1G,
  Smoking: script$1E,
  SortDown: script$1C,
  Sort: script$1A,
  SortUp: script$1y,
  Star: script$1w,
  Stamp: script$1u,
  StarFilled: script$1s,
  Stopwatch: script$1q,
  SuccessFilled: script$1o,
  Suitcase: script$1m,
  Sugar: script$1k,
  Sunny: script$1i,
  Sunrise: script$1g,
  Switch: script$1e,
  Ticket: script$1c,
  Sunset: script$1a,
  Tickets: script$18,
  SwitchButton: script$16,
  TakeawayBox: script$14,
  ToiletPaper: script$12,
  Timer: script$10,
  Tools: script$_,
  TopLeft: script$Y,
  Top: script$W,
  TopRight: script$U,
  TrendCharts: script$S,
  TurnOff: script$Q,
  Unlock: script$O,
  Trophy: script$M,
  Umbrella: script$K,
  UploadFilled: script$I,
  UserFilled: script$G,
  Upload: script$E,
  User: script$C,
  Van: script$A,
  CopyDocument: script$y,
  VideoPause: script$w,
  VideoCameraFilled: script$u,
  View: script$s,
  Wallet: script$q,
  WarningFilled: script$o,
  Watch: script$m,
  VideoPlay: script$k,
  Watermelon: script$i,
  VideoCamera: script$g,
  WalletFilled: script$e,
  Warning: script$c,
  List: script$a,
  ZoomIn: script$8,
  ZoomOut: script$6,
  Rank: script$4,
  WindPower: script$2
}, Symbol.toStringTag, { value: "Module" }));
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
let $ELEMENT = {};
const getConfig = (key) => {
  return $ELEMENT[key];
};
function fromPairs(pairs) {
  var index2 = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index2 < length) {
    var pair = pairs[index2];
    result[pair[0]] = pair[1];
  }
  return result;
}
var fromPairs_1 = fromPairs;
var isServer = typeof window === "undefined";
const isObject = (val) => val !== null && typeof val === "object";
const trimArr = function(s) {
  return (s || "").split(" ").filter((item) => !!item.trim());
};
const on = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element === null || element === void 0 ? void 0 : element.addEventListener(event, handler, useCapture);
  }
};
function addClass(el, cls) {
  if (!el)
    return;
  let className = el.getAttribute("class") || "";
  const curClass = trimArr(className);
  const classes = (cls || "").split(" ").filter((item) => !curClass.includes(item) && !!item.trim());
  if (el.classList) {
    el.classList.add(...classes);
  } else {
    className += ` ${classes.join(" ")}`;
    el.setAttribute("class", className);
  }
}
function removeClass(el, cls) {
  if (!el || !cls)
    return;
  const classes = trimArr(cls);
  let curClass = el.getAttribute("class") || "";
  if (el.classList) {
    el.classList.remove(...classes);
    return;
  }
  classes.forEach((item) => {
    curClass = curClass.replace(` ${item} `, " ");
  });
  const className = trimArr(curClass).join(" ");
  el.setAttribute("class", className);
}
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
};
const onTouchMove = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
const onModalClick = () => {
  PopupManager === null || PopupManager === void 0 ? void 0 : PopupManager.doOnModalClick();
};
let hasModal = false;
let zIndex;
const getModal = function() {
  if (isServer)
    return;
  let modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement("div");
    PopupManager.modalDom = modalDom;
    on(modalDom, "touchmove", onTouchMove);
    on(modalDom, "click", onModalClick);
  }
  return modalDom;
};
const instances$1 = {};
const PopupManager = {
  modalFade: true,
  modalDom: void 0,
  zIndex,
  getInstance(id) {
    return instances$1[id];
  },
  register(id, instance) {
    if (id && instance) {
      instances$1[id] = instance;
    }
  },
  deregister(id) {
    if (id) {
      instances$1[id] = null;
      delete instances$1[id];
    }
  },
  nextZIndex() {
    return ++PopupManager.zIndex;
  },
  modalStack: [],
  doOnModalClick() {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem)
      return;
    const instance = PopupManager.getInstance(topItem.id);
    if (instance && instance.closeOnClickModal.value) {
      instance.close();
    }
  },
  openModal(id, zIndex2, dom, modalClass, modalFade) {
    if (isServer)
      return;
    if (!id || zIndex2 === void 0)
      return;
    this.modalFade = modalFade;
    const modalStack = this.modalStack;
    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }
    const modalDom = getModal();
    addClass(modalDom, "v-modal");
    if (this.modalFade && !hasModal) {
      addClass(modalDom, "v-modal-enter");
    }
    if (modalClass) {
      const classArr = modalClass.trim().split(/\s+/);
      classArr.forEach((item) => addClass(modalDom, item));
    }
    setTimeout(() => {
      removeClass(modalDom, "v-modal-enter");
    }, 200);
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }
    if (zIndex2) {
      modalDom.style.zIndex = String(zIndex2);
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = "";
    this.modalStack.push({ id, zIndex: zIndex2, modalClass });
  },
  closeModal(id) {
    const modalStack = this.modalStack;
    const modalDom = getModal();
    if (modalStack.length > 0) {
      const topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          const classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach((item) => removeClass(modalDom, item));
        }
        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }
    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, "v-modal-leave");
      }
      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode)
            modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = "none";
          PopupManager.modalDom = void 0;
        }
        removeClass(modalDom, "v-modal-leave");
      }, 200);
    }
  }
};
Object.defineProperty(PopupManager, "zIndex", {
  configurable: true,
  get() {
    if (zIndex === void 0) {
      zIndex = getConfig("zIndex") || 2e3;
    }
    return zIndex;
  },
  set(value) {
    zIndex = value;
  }
});
const getTopPopup = function() {
  if (isServer)
    return;
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup)
      return;
    const instance = PopupManager.getInstance(topPopup.id);
    return instance;
  }
};
if (!isServer) {
  on(window, "keydown", function(event) {
    if (event.code === EVENT_CODE.esc) {
      const topPopup = getTopPopup();
      if (topPopup && topPopup.closeOnPressEscape.value) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction("cancel") : topPopup.close();
      }
    }
  });
}
var PopupManager$1 = PopupManager;
const wrapperKey = Symbol();
const propKey = Symbol();
function buildProp(option, key) {
  if (!isObject(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = [...values, defaultValue];
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  return {
    type: typeof type === "object" && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    default: defaultValue,
    validator: _validator,
    [propKey]: true
  };
}
const buildProps = (props) => fromPairs_1(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const definePropType = (val) => ({ [wrapperKey]: val });
const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const isClient = typeof window !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useTimeoutFn(cb, interval, options = {}) {
  const { immediate = true } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unref(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
const messageTypes = ["success", "info", "warning", "error"];
const messageProps = buildProps({
  customClass: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: false
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3e3
  },
  iconClass: {
    type: String,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: definePropType([String, Object]),
    default: ""
  },
  onClose: {
    type: definePropType(Function),
    required: false
  },
  showClose: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: messageTypes,
    default: "info"
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  }
});
const messageEmits = {
  destroy: () => true
};
const typeMap = {
  success: "el-icon-success",
  info: "el-icon-info",
  warning: "el-icon-warning",
  error: "el-icon-error"
};
var script = defineComponent({
  name: "ElMessage",
  props: messageProps,
  emits: messageEmits,
  setup(props) {
    const visible = ref(false);
    let timer = void 0;
    const typeClass = computed(() => {
      var _a;
      return props.iconClass ? props.iconClass : (_a = typeMap[props.type]) != null ? _a : "";
    });
    const customStyle = computed(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    function startTimer() {
      if (props.duration > 0) {
        ({ stop: timer } = useTimeoutFn(() => {
          if (visible.value)
            close2();
        }, props.duration));
      }
    }
    function clearTimer() {
      timer == null ? void 0 : timer();
    }
    function close2() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        if (visible.value) {
          close2();
        }
      } else {
        startTimer();
      }
    }
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    useEventListener(document, "keydown", keydown);
    return {
      typeClass,
      customStyle,
      visible,
      close: close2,
      clearTimer,
      startTimer
    };
  }
});
const _hoisted_1$4 = ["id"];
const _hoisted_2$4 = {
  key: 0,
  class: "el-message__content"
};
const _hoisted_3$4 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "el-message-fade",
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        id: _ctx.id,
        class: normalizeClass([
          "el-message",
          _ctx.type && !_ctx.iconClass ? `el-message--${_ctx.type}` : "",
          _ctx.center ? "is-center" : "",
          _ctx.showClose ? "is-closable" : "",
          _ctx.customClass
        ]),
        style: normalizeStyle(_ctx.customStyle),
        role: "alert",
        onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.clearTimer && _ctx.clearTimer(...args)),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.startTimer && _ctx.startTimer(...args))
      }, [
        _ctx.type || _ctx.iconClass ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["el-message__icon", _ctx.typeClass, _ctx.iconClass])
        }, null, 2)) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", _hoisted_2$4, toDisplayString(_ctx.message), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
            createElementVNode("p", {
              class: "el-message__content",
              innerHTML: _ctx.message
            }, null, 8, _hoisted_3$4)
          ], 2112))
        ]),
        _ctx.showClose ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "el-message__closeBtn el-icon-close",
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.close && _ctx.close(...args), ["stop"]))
        })) : createCommentVNode("v-if", true)
      ], 46, _hoisted_1$4), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["onBeforeLeave"]);
}
script.render = render;
script.__file = "packages/components/message/src/message.vue";
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const instances = [];
let seed = 1;
const message = function(options = {}) {
  if (isServer)
    return { close: () => void 0 };
  if (typeof options === "string" || isVNode(options)) {
    options = { message: options };
  }
  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm: vm2 }) => {
    var _a;
    verticalOffset += (((_a = vm2.el) == null ? void 0 : _a.offsetHeight) || 0) + 16;
  });
  verticalOffset += 16;
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const props = __spreadProps(__spreadValues2({
    zIndex: PopupManager$1.nextZIndex(),
    offset: verticalOffset
  }, options), {
    id,
    onClose: () => {
      close(id, userOnClose);
    }
  });
  const container = document.createElement("div");
  container.className = `container_${id}`;
  const message2 = props.message;
  const vm = createVNode(script, props, isVNode(props.message) ? { default: () => message2 } : null);
  vm.props.onDestroy = () => {
    render$4p(null, container);
  };
  render$4p(vm, container);
  instances.push({ vm });
  document.body.appendChild(container.firstElementChild);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
messageTypes.forEach((type) => {
  message[type] = (options = {}) => {
    if (typeof options === "string" || isVNode(options)) {
      options = {
        message: options
      };
    }
    return message(__spreadProps(__spreadValues2({}, options), {
      type
    }));
  };
});
function close(id, userOnClose) {
  const idx = instances.findIndex(({ vm: vm2 }) => id === vm2.component.props.id);
  if (idx === -1)
    return;
  const { vm } = instances[idx];
  if (!vm)
    return;
  userOnClose == null ? void 0 : userOnClose(vm);
  const removedHeight = vm.el.offsetHeight;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1)
    return;
  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].vm.el.style["top"], 10) - removedHeight - 16;
    instances[i].vm.component.props.offset = pos;
  }
}
function closeAll() {
  var _a;
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component;
    (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.close();
  }
}
message.closeAll = closeAll;
const ElMessage = withInstallFunction(message, "$message");
const useCopy = (text) => {
  let input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
  ElMessage.success("\u590D\u5236\u6210\u529F");
};
var index_vue_vue_type_style_index_0_scoped_true_lang$5 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$3 = { class: "n-choose-icon-dialog-body-height" };
const _hoisted_2$3 = { class: "container" };
const _hoisted_3$3 = ["onClick"];
const _hoisted_4$2 = { class: "text" };
const _hoisted_5$2 = { class: "icon" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let dialogVisible = ref(props.visible);
    const handleClick = () => {
      emits("update:visible", !props.visible);
    };
    let clickItem = (item) => {
      let text = `<el-icon-${toLine(item)} />`;
      useCopy(text);
      dialogVisible.value = false;
    };
    watch(() => props.visible, (val) => {
      dialogVisible.value = val;
    });
    watch(() => dialogVisible.value, (val) => {
      emits("update:visible", val);
    });
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_button, {
          onClick: handleClick,
          type: "primary"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        }),
        createElementVNode("div", _hoisted_1$3, [
          createVNode(_component_el_dialog, {
            title: __props.title,
            modelValue: unref(dialogVisible),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(dialogVisible) ? dialogVisible.value = $event : dialogVisible = $event)
          }, {
            default: withCtx(() => [
              createElementVNode("div", _hoisted_2$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(Icons)), (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    class: "item",
                    key: index2,
                    onClick: ($event) => unref(clickItem)(item)
                  }, [
                    createElementVNode("div", _hoisted_4$2, [
                      (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(item)}`)))
                    ]),
                    createElementVNode("div", _hoisted_5$2, toDisplayString(item), 1)
                  ], 8, _hoisted_3$3);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["title", "modelValue"])
        ])
      ], 64);
    };
  }
});
var chooseIcon$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-95e17112"]]);
var chooseIcon = {
  install(app) {
    app.component("n-choose-icon", chooseIcon$1);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const _hoisted_1$2 = { class: "trend" };
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$2 = { class: "icon" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    type: {
      type: String,
      default: "up"
    },
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    text: {
      type: String,
      default: "\u6587\u5B57"
    },
    reverseColor: {
      type: Boolean,
      default: false
    },
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    upTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    },
    downTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    }
  },
  setup(__props) {
    const props = __props;
    let slots = useSlots();
    let textColor = computed(() => {
      return props.type === "up" ? props.upTextColor : props.downTextColor;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", {
          class: "text",
          style: normalizeStyle({ color: unref(textColor) })
        }, [
          unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_2$2, toDisplayString(__props.text), 1))
        ], 4),
        createElementVNode("div", _hoisted_3$2, [
          __props.type === "up" ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.upIcon)}`), {
            key: 0,
            style: normalizeStyle({ color: !__props.reverseColor ? __props.upIconColor : "#52c41a" })
          }, null, 8, ["style"])) : (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.downIcon)}`), {
            key: 1,
            style: normalizeStyle({ color: !__props.reverseColor ? __props.downIconColor : "#f5222d" })
          }, null, 8, ["style"]))
        ])
      ]);
    };
  }
});
var trend$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-93606bfe"]]);
var trend = {
  install(app) {
    app.component("n-trend", trend$1);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_badge = resolveComponent("el-badge");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        "popper-class": "notification-popper-class",
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        reference: withCtx(() => [
          createVNode(_component_el_badge, {
            style: { "cursor": "pointer" },
            value: __props.value,
            max: __props.max,
            "is-dot": __props.isDot
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
      });
    };
  }
});
var notification$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3441528b"]]);
var notification = {
  install(app) {
    app.component("n-notification", notification$1);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$1 = { class: "list-tabs__item" };
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = {
  key: 0,
  class: "avatar"
};
const _hoisted_4$1 = { class: "content" };
const _hoisted_5$1 = {
  key: 0,
  class: "title"
};
const _hoisted_6$1 = {
  key: 1,
  class: "time"
};
const _hoisted_7$1 = {
  key: 2,
  class: "time"
};
const _hoisted_8$1 = { class: "actions" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = {
  key: 0,
  class: "a-icon"
};
const _hoisted_11 = { class: "a-text" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
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
                          item1.avatar ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                            createVNode(_component_el_avatar, {
                              size: "small",
                              src: item1.avatar
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("v-if", true),
                          createElementVNode("div", _hoisted_4$1, [
                            item1.title ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
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
                            item1.desc ? (openBlock(), createElementBlock("div", _hoisted_6$1, toDisplayString(item1.desc), 1)) : createCommentVNode("v-if", true),
                            item1.time ? (openBlock(), createElementBlock("div", _hoisted_7$1, toDisplayString(item1.time), 1)) : createCommentVNode("v-if", true)
                          ])
                        ], 8, _hoisted_2$1);
                      }), 128)),
                      createElementVNode("div", _hoisted_8$1, [
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
var list$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-62996acf"]]);
var list = {
  install(app) {
    app.component("n-list", list$1);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    },
    defaultActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "name"
    },
    index: {
      type: String,
      default: "index"
    },
    icon: {
      type: String,
      default: "icon"
    },
    children: {
      type: String,
      default: "children"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_menu_item = resolveComponent("el-menu-item");
      const _component_el_sub_menu = resolveComponent("el-sub-menu");
      const _component_el_menu = resolveComponent("el-menu");
      return openBlock(), createBlock(_component_el_menu, mergeProps({
        class: "el-menu-vertical-demo",
        "default-active": __props.defaultActive,
        router: __props.router
      }, _ctx.$attrs), {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (item, i) => {
            return openBlock(), createElementBlock(Fragment, { key: i }, [
              !item[__props.children] || !item[__props.children].length ? (openBlock(), createBlock(_component_el_menu_item, {
                key: 0,
                index: item[__props.index]
              }, {
                default: withCtx(() => [
                  item[__props.icon] ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(item[__props.icon])}`), { key: 0 })) : createCommentVNode("v-if", true),
                  createElementVNode("span", null, toDisplayString(item[__props.name]), 1)
                ]),
                _: 2
              }, 1032, ["index"])) : createCommentVNode("v-if", true),
              item[__props.children] && item[__props.children].length ? (openBlock(), createBlock(_component_el_sub_menu, {
                key: 1,
                index: item[__props.index]
              }, {
                title: withCtx(() => [
                  item[__props.icon] ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(item[__props.icon])}`), { key: 0 })) : createCommentVNode("v-if", true),
                  createElementVNode("span", null, toDisplayString(item[__props.name]), 1)
                ]),
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item[__props.children], (item1, index1) => {
                    return openBlock(), createBlock(_component_el_menu_item, {
                      key: index1,
                      index: item1.index
                    }, {
                      default: withCtx(() => [
                        item1[__props.icon] ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(item1[__props.icon])}`), { key: 0 })) : createCommentVNode("v-if", true),
                        createElementVNode("span", null, toDisplayString(item1[__props.name]), 1)
                      ]),
                      _: 2
                    }, 1032, ["index"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["index"])) : createCommentVNode("v-if", true)
            ], 64);
          }), 128))
        ]),
        _: 1
      }, 16, ["default-active", "router"]);
    };
  }
});
var menu$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-61bf4712"]]);
var index$1 = "";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var infiniteMenu = defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    },
    defaultActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "name"
    },
    index: {
      type: String,
      default: "index"
    },
    icon: {
      type: String,
      default: "icon"
    },
    children: {
      type: String,
      default: "children"
    }
  },
  setup(props, ctx) {
    let renderMenu = (data) => {
      return data.map((item) => {
        item.i = Icons[item[props.icon]];
        let slots = {
          title: () => {
            return createVNode(Fragment, null, [createVNode(item.i, null, null), createVNode("span", null, [item[props.name]])]);
          }
        };
        if (item[props.children] && item[props.children].length) {
          return createVNode(resolveComponent("el-sub-menu"), {
            "index": item[props.index]
          }, __spreadValues({
            default: () => [renderMenu(item[props.children])]
          }, slots));
        }
        return createVNode(resolveComponent("el-menu-item"), {
          "index": item[props.index]
        }, {
          default: () => [createVNode(item.i, null, null), createVNode("span", null, [item[props.name]])]
        });
      });
    };
    let attrs = useAttrs();
    return () => {
      let _slot;
      return createVNode(resolveComponent("el-menu"), mergeProps({
        "class": "menu-icon-svg",
        "default-active": props.defaultActive,
        "router": props.router
      }, attrs), _isSlot(_slot = renderMenu(props.data)) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
var menu = {
  install(app) {
    app.component("n-menu", menu$1);
    app.component("n-infinite-menu", infiniteMenu);
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      default: 3e3
    }
  },
  setup(__props) {
    const props = __props;
    ref(0);
    let p = ref(0);
    onMounted(() => {
      if (props.isAnimate) {
        let t = Math.ceil(props.time / props.percentage);
        let timer = setInterval(() => {
          p.value += 1;
          if (p.value >= props.percentage) {
            p.value = props.percentage;
            clearInterval(timer);
          }
        }, t);
      }
    });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return openBlock(), createBlock(_component_el_progress, mergeProps({ percentage: unref(p) }, _ctx.$attrs), null, 16, ["percentage"]);
    };
  }
});
var progress = {
  install(app) {
    app.component("n-progress", _sfc_main$2);
  }
};
var city = {
  "cities": {
    "A": [{
      "id": 56,
      "spell": "aba",
      "name": "\u963F\u575D"
    }, {
      "id": 57,
      "spell": "akesu",
      "name": "\u963F\u514B\u82CF"
    }, {
      "id": 58,
      "spell": "alashanmeng",
      "name": "\u963F\u62C9\u5584\u76DF"
    }, {
      "id": 59,
      "spell": "aletai",
      "name": "\u963F\u52D2\u6CF0"
    }, {
      "id": 60,
      "spell": "ali",
      "name": "\u963F\u91CC"
    }, {
      "id": 61,
      "spell": "ankang",
      "name": "\u5B89\u5EB7"
    }, {
      "id": 62,
      "spell": "anqing",
      "name": "\u5B89\u5E86"
    }, {
      "id": 63,
      "spell": "anshan",
      "name": "\u978D\u5C71"
    }, {
      "id": 64,
      "spell": "anshun",
      "name": "\u5B89\u987A"
    }, {
      "id": 65,
      "spell": "anyang",
      "name": "\u5B89\u9633"
    }, {
      "id": 338,
      "spell": "acheng",
      "name": "\u963F\u57CE"
    }, {
      "id": 339,
      "spell": "anfu",
      "name": "\u5B89\u798F"
    }, {
      "id": 340,
      "spell": "anji",
      "name": "\u5B89\u5409"
    }, {
      "id": 341,
      "spell": "anning",
      "name": "\u5B89\u5B81"
    }, {
      "id": 342,
      "spell": "anqiu",
      "name": "\u5B89\u4E18"
    }, {
      "id": 343,
      "spell": "anxi",
      "name": "\u5B89\u6EAA"
    }, {
      "id": 344,
      "spell": "anyi",
      "name": "\u5B89\u4E49"
    }, {
      "id": 345,
      "spell": "anyuan",
      "name": "\u5B89\u8FDC"
    }],
    "B": [{
      "id": 1,
      "spell": "beijing",
      "name": "\u5317\u4EAC"
    }, {
      "id": 66,
      "spell": "baicheng",
      "name": "\u767D\u57CE"
    }, {
      "id": 67,
      "spell": "baise",
      "name": "\u767E\u8272"
    }, {
      "id": 68,
      "spell": "baishan",
      "name": "\u767D\u5C71"
    }, {
      "id": 69,
      "spell": "baiyin",
      "name": "\u767D\u94F6"
    }, {
      "id": 70,
      "spell": "bangbu",
      "name": "\u868C\u57E0"
    }, {
      "id": 71,
      "spell": "baoding",
      "name": "\u4FDD\u5B9A"
    }, {
      "id": 72,
      "spell": "baoji",
      "name": "\u5B9D\u9E21"
    }, {
      "id": 73,
      "spell": "baoshan",
      "name": "\u4FDD\u5C71"
    }, {
      "id": 74,
      "spell": "baotou",
      "name": "\u5305\u5934"
    }, {
      "id": 75,
      "spell": "bayannaoer",
      "name": "\u5DF4\u5F66\u6DD6\u5C14"
    }, {
      "id": 76,
      "spell": "bayinguoleng",
      "name": "\u5DF4\u97F3\u90ED\u695E"
    }, {
      "id": 77,
      "spell": "bazhong",
      "name": "\u5DF4\u4E2D"
    }, {
      "id": 78,
      "spell": "beihai",
      "name": "\u5317\u6D77"
    }, {
      "id": 79,
      "spell": "benxi",
      "name": "\u672C\u6EAA"
    }, {
      "id": 80,
      "spell": "bijie",
      "name": "\u6BD5\u8282"
    }, {
      "id": 81,
      "spell": "binzhou",
      "name": "\u6EE8\u5DDE"
    }, {
      "id": 82,
      "spell": "boertala",
      "name": "\u535A\u5C14\u5854\u62C9"
    }, {
      "id": 83,
      "spell": "bozhou",
      "name": "\u4EB3\u5DDE"
    }, {
      "id": 346,
      "spell": "baoying",
      "name": "\u5B9D\u5E94"
    }, {
      "id": 347,
      "spell": "bayan",
      "name": "\u5DF4\u5F66"
    }, {
      "id": 348,
      "spell": "binhai",
      "name": "\u6EE8\u6D77"
    }, {
      "id": 349,
      "spell": "binxian",
      "name": "\u5BBE\u53BF"
    }, {
      "id": 350,
      "spell": "binyang",
      "name": "\u5BBE\u9633"
    }, {
      "id": 351,
      "spell": "bishan",
      "name": "\u74A7\u5C71"
    }, {
      "id": 352,
      "spell": "boai",
      "name": "\u535A\u7231"
    }, {
      "id": 353,
      "spell": "boluo",
      "name": "\u535A\u7F57"
    }, {
      "id": 354,
      "spell": "boxing",
      "name": "\u535A\u5174"
    }],
    "C": [{
      "id": 2,
      "spell": "chongqing",
      "name": "\u91CD\u5E86"
    }, {
      "id": 5,
      "spell": "changchun",
      "name": "\u957F\u6625"
    }, {
      "id": 6,
      "spell": "changsha",
      "name": "\u957F\u6C99"
    }, {
      "id": 7,
      "spell": "changzhou",
      "name": "\u5E38\u5DDE"
    }, {
      "id": 8,
      "spell": "chengdu",
      "name": "\u6210\u90FD"
    }, {
      "id": 84,
      "spell": "cangzhou",
      "name": "\u6CA7\u5DDE"
    }, {
      "id": 85,
      "spell": "changde",
      "name": "\u5E38\u5FB7"
    }, {
      "id": 86,
      "spell": "changdu",
      "name": "\u660C\u90FD"
    }, {
      "id": 87,
      "spell": "changji",
      "name": "\u660C\u5409"
    }, {
      "id": 88,
      "spell": "changzhi",
      "name": "\u957F\u6CBB"
    }, {
      "id": 89,
      "spell": "chaohu",
      "name": "\u5DE2\u6E56"
    }, {
      "id": 90,
      "spell": "chaoyang",
      "name": "\u671D\u9633"
    }, {
      "id": 91,
      "spell": "chaozhou",
      "name": "\u6F6E\u5DDE"
    }, {
      "id": 92,
      "spell": "chengde",
      "name": "\u627F\u5FB7"
    }, {
      "id": 93,
      "spell": "chenzhou",
      "name": "\u90F4\u5DDE"
    }, {
      "id": 94,
      "spell": "chifeng",
      "name": "\u8D64\u5CF0"
    }, {
      "id": 95,
      "spell": "chizhou",
      "name": "\u6C60\u5DDE"
    }, {
      "id": 96,
      "spell": "chongzuo",
      "name": "\u5D07\u5DE6"
    }, {
      "id": 97,
      "spell": "chuxiong",
      "name": "\u695A\u96C4"
    }, {
      "id": 98,
      "spell": "chuzhou",
      "name": "\u6EC1\u5DDE"
    }, {
      "id": 355,
      "spell": "cangnan",
      "name": "\u82CD\u5357"
    }, {
      "id": 356,
      "spell": "cangshan",
      "name": "\u82CD\u5C71"
    }, {
      "id": 357,
      "spell": "caoxian",
      "name": "\u66F9\u53BF"
    }, {
      "id": 358,
      "spell": "changdao",
      "name": "\u957F\u5C9B"
    }, {
      "id": 359,
      "spell": "changfeng",
      "name": "\u957F\u4E30"
    }, {
      "id": 360,
      "spell": "changhai",
      "name": "\u957F\u6D77"
    }, {
      "id": 361,
      "spell": "changle",
      "name": "\u957F\u4E50"
    }, {
      "id": 362,
      "spell": "changle",
      "name": "\u660C\u4E50"
    }, {
      "id": 363,
      "spell": "changshan",
      "name": "\u5E38\u5C71"
    }, {
      "id": 364,
      "spell": "changshu",
      "name": "\u5E38\u719F"
    }, {
      "id": 365,
      "spell": "changtai",
      "name": "\u957F\u6CF0"
    }, {
      "id": 366,
      "spell": "changting",
      "name": "\u957F\u6C40"
    }, {
      "id": 367,
      "spell": "changxing",
      "name": "\u957F\u5174"
    }, {
      "id": 368,
      "spell": "changyi",
      "name": "\u660C\u9091"
    }, {
      "id": 369,
      "spell": "chaoan",
      "name": "\u6F6E\u5B89"
    }, {
      "id": 370,
      "spell": "chenggong",
      "name": "\u5448\u8D21"
    }, {
      "id": 371,
      "spell": "chengkou",
      "name": "\u57CE\u53E3"
    }, {
      "id": 372,
      "spell": "chengwu",
      "name": "\u6210\u6B66"
    }, {
      "id": 373,
      "spell": "chiping",
      "name": "\u830C\u5E73"
    }, {
      "id": 374,
      "spell": "chongren",
      "name": "\u5D07\u4EC1"
    }, {
      "id": 375,
      "spell": "chongyi",
      "name": "\u5D07\u4E49"
    }, {
      "id": 376,
      "spell": "chongzhou",
      "name": "\u5D07\u5DDE"
    }, {
      "id": 377,
      "spell": "chunan",
      "name": "\u6DF3\u5B89"
    }, {
      "id": 378,
      "spell": "cixi",
      "name": "\u6148\u6EAA"
    }, {
      "id": 379,
      "spell": "conghua",
      "name": "\u4ECE\u5316"
    }, {
      "id": 380,
      "spell": "congyang",
      "name": "\u679E\u9633"
    }],
    "D": [{
      "id": 9,
      "spell": "dalian",
      "name": "\u5927\u8FDE"
    }, {
      "id": 10,
      "spell": "dongguan",
      "name": "\u4E1C\u839E"
    }, {
      "id": 99,
      "spell": "dali",
      "name": "\u5927\u7406"
    }, {
      "id": 100,
      "spell": "dandong",
      "name": "\u4E39\u4E1C"
    }, {
      "id": 101,
      "spell": "daqing",
      "name": "\u5927\u5E86"
    }, {
      "id": 102,
      "spell": "datong",
      "name": "\u5927\u540C"
    }, {
      "id": 103,
      "spell": "daxinganling",
      "name": "\u5927\u5174\u5B89\u5CAD"
    }, {
      "id": 104,
      "spell": "dazhou",
      "name": "\u8FBE\u5DDE"
    }, {
      "id": 105,
      "spell": "dehong",
      "name": "\u5FB7\u5B8F"
    }, {
      "id": 106,
      "spell": "deyang",
      "name": "\u5FB7\u9633"
    }, {
      "id": 107,
      "spell": "dezhou",
      "name": "\u5FB7\u5DDE"
    }, {
      "id": 108,
      "spell": "dingxi",
      "name": "\u5B9A\u897F"
    }, {
      "id": 109,
      "spell": "diqing",
      "name": "\u8FEA\u5E86"
    }, {
      "id": 110,
      "spell": "dongying",
      "name": "\u4E1C\u8425"
    }, {
      "id": 381,
      "spell": "dafeng",
      "name": "\u5927\u4E30"
    }, {
      "id": 382,
      "spell": "daishan",
      "name": "\u5CB1\u5C71"
    }, {
      "id": 383,
      "spell": "dangshan",
      "name": "\u7800\u5C71"
    }, {
      "id": 384,
      "spell": "dangtu",
      "name": "\u5F53\u6D82"
    }, {
      "id": 385,
      "spell": "danxian",
      "name": "\u5355\u53BF"
    }, {
      "id": 386,
      "spell": "danyang",
      "name": "\u4E39\u9633"
    }, {
      "id": 387,
      "spell": "dapu",
      "name": "\u5927\u57D4"
    }, {
      "id": 388,
      "spell": "datian",
      "name": "\u5927\u7530"
    }, {
      "id": 389,
      "spell": "dayi",
      "name": "\u5927\u9091"
    }, {
      "id": 390,
      "spell": "dayu",
      "name": "\u5927\u4F59"
    }, {
      "id": 391,
      "spell": "dazu",
      "name": "\u5927\u8DB3"
    }, {
      "id": 392,
      "spell": "dean",
      "name": "\u5FB7\u5B89"
    }, {
      "id": 393,
      "spell": "dehua",
      "name": "\u5FB7\u5316"
    }, {
      "id": 394,
      "spell": "dehui",
      "name": "\u5FB7\u60E0"
    }, {
      "id": 395,
      "spell": "dengfeng",
      "name": "\u767B\u5C01"
    }, {
      "id": 396,
      "spell": "deqing",
      "name": "\u5FB7\u6E05"
    }, {
      "id": 397,
      "spell": "deqing",
      "name": "\u5FB7\u5E86"
    }, {
      "id": 398,
      "spell": "dexing",
      "name": "\u5FB7\u5174"
    }, {
      "id": 399,
      "spell": "dianbai",
      "name": "\u7535\u767D"
    }, {
      "id": 400,
      "spell": "dianjiang",
      "name": "\u57AB\u6C5F"
    }, {
      "id": 401,
      "spell": "dingnan",
      "name": "\u5B9A\u5357"
    }, {
      "id": 402,
      "spell": "dingtao",
      "name": "\u5B9A\u9676"
    }, {
      "id": 403,
      "spell": "dingyuan",
      "name": "\u5B9A\u8FDC"
    }, {
      "id": 404,
      "spell": "donga",
      "name": "\u4E1C\u963F"
    }, {
      "id": 405,
      "spell": "donghai",
      "name": "\u4E1C\u6D77"
    }, {
      "id": 406,
      "spell": "dongming",
      "name": "\u4E1C\u660E"
    }, {
      "id": 407,
      "spell": "dongping",
      "name": "\u4E1C\u5E73"
    }, {
      "id": 408,
      "spell": "dongshan",
      "name": "\u4E1C\u5C71"
    }, {
      "id": 409,
      "spell": "dongtai",
      "name": "\u4E1C\u53F0"
    }, {
      "id": 410,
      "spell": "dongtou",
      "name": "\u6D1E\u5934"
    }, {
      "id": 411,
      "spell": "dongxiang",
      "name": "\u4E1C\u4E61"
    }, {
      "id": 412,
      "spell": "dongyang",
      "name": "\u4E1C\u9633"
    }, {
      "id": 413,
      "spell": "dongyuan",
      "name": "\u4E1C\u6E90"
    }, {
      "id": 414,
      "spell": "dongzhi",
      "name": "\u4E1C\u81F3"
    }, {
      "id": 415,
      "spell": "duchang",
      "name": "\u90FD\u660C"
    }, {
      "id": 416,
      "spell": "dujiangyan",
      "name": "\u90FD\u6C5F\u5830"
    }],
    "E": [{
      "id": 111,
      "spell": "eerduosi",
      "name": "\u9102\u5C14\u591A\u65AF"
    }, {
      "id": 112,
      "spell": "enshi",
      "name": "\u6069\u65BD"
    }, {
      "id": 113,
      "spell": "ezhou",
      "name": "\u9102\u5DDE"
    }, {
      "id": 417,
      "spell": "enping",
      "name": "\u6069\u5E73"
    }],
    "F": [{
      "id": 11,
      "spell": "foshan",
      "name": "\u4F5B\u5C71"
    }, {
      "id": 12,
      "spell": "fuzhou",
      "name": "\u798F\u5DDE"
    }, {
      "id": 114,
      "spell": "fangchenggang",
      "name": "\u9632\u57CE\u6E2F"
    }, {
      "id": 115,
      "spell": "fushun",
      "name": "\u629A\u987A"
    }, {
      "id": 116,
      "spell": "fuxin",
      "name": "\u961C\u65B0"
    }, {
      "id": 117,
      "spell": "fuyang",
      "name": "\u961C\u9633"
    }, {
      "id": 118,
      "spell": "fuzhou",
      "name": "\u629A\u5DDE"
    }, {
      "id": 418,
      "spell": "faku",
      "name": "\u6CD5\u5E93"
    }, {
      "id": 419,
      "spell": "fanchang",
      "name": "\u7E41\u660C"
    }, {
      "id": 420,
      "spell": "fangzheng",
      "name": "\u65B9\u6B63"
    }, {
      "id": 421,
      "spell": "feicheng",
      "name": "\u80A5\u57CE"
    }, {
      "id": 422,
      "spell": "feidong",
      "name": "\u80A5\u4E1C"
    }, {
      "id": 423,
      "spell": "feixi",
      "name": "\u80A5\u897F"
    }, {
      "id": 424,
      "spell": "feixian",
      "name": "\u8D39\u53BF"
    }, {
      "id": 425,
      "spell": "fengcheng",
      "name": "\u4E30\u57CE"
    }, {
      "id": 426,
      "spell": "fengdu",
      "name": "\u4E30\u90FD"
    }, {
      "id": 427,
      "spell": "fenghua",
      "name": "\u5949\u5316"
    }, {
      "id": 428,
      "spell": "fengjie",
      "name": "\u5949\u8282"
    }, {
      "id": 429,
      "spell": "fengkai",
      "name": "\u5C01\u5F00"
    }, {
      "id": 430,
      "spell": "fengshun",
      "name": "\u4E30\u987A"
    }, {
      "id": 431,
      "spell": "fengtai",
      "name": "\u51E4\u53F0"
    }, {
      "id": 432,
      "spell": "fengxian",
      "name": "\u4E30\u53BF"
    }, {
      "id": 433,
      "spell": "fengxin",
      "name": "\u5949\u65B0"
    }, {
      "id": 434,
      "spell": "fengyang",
      "name": "\u51E4\u9633"
    }, {
      "id": 435,
      "spell": "fenyi",
      "name": "\u5206\u5B9C"
    }, {
      "id": 436,
      "spell": "fogang",
      "name": "\u4F5B\u5188"
    }, {
      "id": 437,
      "spell": "fuan",
      "name": "\u798F\u5B89"
    }, {
      "id": 438,
      "spell": "fuding",
      "name": "\u798F\u9F0E"
    }, {
      "id": 439,
      "spell": "fuliang",
      "name": "\u6D6E\u6881"
    }, {
      "id": 440,
      "spell": "fumin",
      "name": "\u5BCC\u6C11"
    }, {
      "id": 441,
      "spell": "funan",
      "name": "\u961C\u5357"
    }, {
      "id": 442,
      "spell": "funing",
      "name": "\u961C\u5B81"
    }, {
      "id": 443,
      "spell": "fuqing",
      "name": "\u798F\u6E05"
    }, {
      "id": 444,
      "spell": "fuyang",
      "name": "\u5BCC\u9633"
    }],
    "G": [{
      "id": 13,
      "spell": "guangzhou",
      "name": "\u5E7F\u5DDE"
    }, {
      "id": 14,
      "spell": "guiyang",
      "name": "\u8D35\u9633"
    }, {
      "id": 119,
      "spell": "gannan",
      "name": "\u7518\u5357"
    }, {
      "id": 120,
      "spell": "ganzhou",
      "name": "\u8D63\u5DDE"
    }, {
      "id": 121,
      "spell": "ganzi",
      "name": "\u7518\u5B5C"
    }, {
      "id": 122,
      "spell": "guangan",
      "name": "\u5E7F\u5B89"
    }, {
      "id": 123,
      "spell": "guangyuan",
      "name": "\u5E7F\u5143"
    }, {
      "id": 124,
      "spell": "guigang",
      "name": "\u8D35\u6E2F"
    }, {
      "id": 125,
      "spell": "guilin",
      "name": "\u6842\u6797"
    }, {
      "id": 126,
      "spell": "guoluo",
      "name": "\u679C\u6D1B"
    }, {
      "id": 127,
      "spell": "guyuan",
      "name": "\u56FA\u539F"
    }, {
      "id": 445,
      "spell": "ganxian",
      "name": "\u8D63\u53BF"
    }, {
      "id": 446,
      "spell": "ganyu",
      "name": "\u8D63\u6986"
    }, {
      "id": 447,
      "spell": "gaoan",
      "name": "\u9AD8\u5B89"
    }, {
      "id": 448,
      "spell": "gaocheng",
      "name": "\u85C1\u57CE"
    }, {
      "id": 449,
      "spell": "gaochun",
      "name": "\u9AD8\u6DF3"
    }, {
      "id": 450,
      "spell": "gaolan",
      "name": "\u768B\u5170"
    }, {
      "id": 451,
      "spell": "gaoling",
      "name": "\u9AD8\u9675"
    }, {
      "id": 452,
      "spell": "gaomi",
      "name": "\u9AD8\u5BC6"
    }, {
      "id": 453,
      "spell": "gaoqing",
      "name": "\u9AD8\u9752"
    }, {
      "id": 454,
      "spell": "gaotang",
      "name": "\u9AD8\u5510"
    }, {
      "id": 455,
      "spell": "gaoyao",
      "name": "\u9AD8\u8981"
    }, {
      "id": 456,
      "spell": "gaoyi",
      "name": "\u9AD8\u9091"
    }, {
      "id": 457,
      "spell": "gaoyou",
      "name": "\u9AD8\u90AE"
    }, {
      "id": 458,
      "spell": "gaozhou",
      "name": "\u9AD8\u5DDE"
    }, {
      "id": 459,
      "spell": "gongyi",
      "name": "\u5DE9\u4E49"
    }, {
      "id": 460,
      "spell": "guangchang",
      "name": "\u5E7F\u660C"
    }, {
      "id": 461,
      "spell": "guangde",
      "name": "\u5E7F\u5FB7"
    }, {
      "id": 462,
      "spell": "guangfeng",
      "name": "\u5E7F\u4E30"
    }, {
      "id": 463,
      "spell": "guangning",
      "name": "\u5E7F\u5B81"
    }, {
      "id": 464,
      "spell": "guangrao",
      "name": "\u5E7F\u9976"
    }, {
      "id": 465,
      "spell": "guangze",
      "name": "\u5149\u6CFD"
    }, {
      "id": 466,
      "spell": "guannan",
      "name": "\u704C\u5357"
    }, {
      "id": 467,
      "spell": "guanxian",
      "name": "\u51A0\u53BF"
    }, {
      "id": 468,
      "spell": "guanyun",
      "name": "\u704C\u4E91"
    }, {
      "id": 469,
      "spell": "guixi",
      "name": "\u8D35\u6EAA"
    }, {
      "id": 470,
      "spell": "gutian",
      "name": "\u53E4\u7530"
    }, {
      "id": 471,
      "spell": "guzhen",
      "name": "\u56FA\u9547"
    }],
    "H": [{
      "id": 15,
      "spell": "haerbin",
      "name": "\u54C8\u5C14\u6EE8"
    }, {
      "id": 16,
      "spell": "haikou",
      "name": "\u6D77\u53E3"
    }, {
      "id": 17,
      "spell": "handan",
      "name": "\u90AF\u90F8"
    }, {
      "id": 18,
      "spell": "hangzhou",
      "name": "\u676D\u5DDE"
    }, {
      "id": 19,
      "spell": "hefei",
      "name": "\u5408\u80A5"
    }, {
      "id": 20,
      "spell": "huizhou",
      "name": "\u60E0\u5DDE"
    }, {
      "id": 128,
      "spell": "haibei",
      "name": "\u6D77\u5317"
    }, {
      "id": 129,
      "spell": "haidong",
      "name": "\u6D77\u4E1C"
    }, {
      "id": 130,
      "spell": "hainan",
      "name": "\u6D77\u5357"
    }, {
      "id": 131,
      "spell": "haixi",
      "name": "\u6D77\u897F"
    }, {
      "id": 132,
      "spell": "hami",
      "name": "\u54C8\u5BC6"
    }, {
      "id": 133,
      "spell": "hanzhong",
      "name": "\u6C49\u4E2D"
    }, {
      "id": 134,
      "spell": "hebi",
      "name": "\u9E64\u58C1"
    }, {
      "id": 135,
      "spell": "hechi",
      "name": "\u6CB3\u6C60"
    }, {
      "id": 136,
      "spell": "hegang",
      "name": "\u9E64\u5C97"
    }, {
      "id": 137,
      "spell": "heihe",
      "name": "\u9ED1\u6CB3"
    }, {
      "id": 138,
      "spell": "hengshui",
      "name": "\u8861\u6C34"
    }, {
      "id": 139,
      "spell": "hengyang",
      "name": "\u8861\u9633"
    }, {
      "id": 140,
      "spell": "hetiandi",
      "name": "\u548C\u7530\u5730"
    }, {
      "id": 141,
      "spell": "heyuan",
      "name": "\u6CB3\u6E90"
    }, {
      "id": 142,
      "spell": "heze",
      "name": "\u83CF\u6CFD"
    }, {
      "id": 143,
      "spell": "hezhou",
      "name": "\u8D3A\u5DDE"
    }, {
      "id": 144,
      "spell": "honghe",
      "name": "\u7EA2\u6CB3"
    }, {
      "id": 145,
      "spell": "huaian",
      "name": "\u6DEE\u5B89"
    }, {
      "id": 146,
      "spell": "huaibei",
      "name": "\u6DEE\u5317"
    }, {
      "id": 147,
      "spell": "huaihua",
      "name": "\u6000\u5316"
    }, {
      "id": 148,
      "spell": "huainan",
      "name": "\u6DEE\u5357"
    }, {
      "id": 149,
      "spell": "huanggang",
      "name": "\u9EC4\u5188"
    }, {
      "id": 150,
      "spell": "huangnan",
      "name": "\u9EC4\u5357"
    }, {
      "id": 151,
      "spell": "huangshan",
      "name": "\u9EC4\u5C71"
    }, {
      "id": 152,
      "spell": "huangshi",
      "name": "\u9EC4\u77F3"
    }, {
      "id": 153,
      "spell": "huhehaote",
      "name": "\u547C\u548C\u6D69\u7279"
    }, {
      "id": 154,
      "spell": "huludao",
      "name": "\u846B\u82A6\u5C9B"
    }, {
      "id": 155,
      "spell": "hulunbeier",
      "name": "\u547C\u4F26\u8D1D\u5C14"
    }, {
      "id": 156,
      "spell": "huzhou",
      "name": "\u6E56\u5DDE"
    }, {
      "id": 472,
      "spell": "haian",
      "name": "\u6D77\u5B89"
    }, {
      "id": 473,
      "spell": "haifeng",
      "name": "\u6D77\u4E30"
    }, {
      "id": 474,
      "spell": "haimen",
      "name": "\u6D77\u95E8"
    }, {
      "id": 475,
      "spell": "haining",
      "name": "\u6D77\u5B81"
    }, {
      "id": 476,
      "spell": "haiyan",
      "name": "\u6D77\u76D0"
    }, {
      "id": 477,
      "spell": "haiyang",
      "name": "\u6D77\u9633"
    }, {
      "id": 478,
      "spell": "hanshan",
      "name": "\u542B\u5C71"
    }, {
      "id": 479,
      "spell": "hechuan",
      "name": "\u5408\u5DDD"
    }, {
      "id": 480,
      "spell": "hengfeng",
      "name": "\u6A2A\u5CF0"
    }, {
      "id": 481,
      "spell": "hengxian",
      "name": "\u6A2A\u53BF"
    }, {
      "id": 482,
      "spell": "heping",
      "name": "\u548C\u5E73"
    }, {
      "id": 483,
      "spell": "heshan",
      "name": "\u9E64\u5C71"
    }, {
      "id": 484,
      "spell": "hexian",
      "name": "\u548C\u53BF"
    }, {
      "id": 485,
      "spell": "hongze",
      "name": "\u6D2A\u6CFD"
    }, {
      "id": 486,
      "spell": "huaan",
      "name": "\u534E\u5B89"
    }, {
      "id": 487,
      "spell": "huadian",
      "name": "\u6866\u7538"
    }, {
      "id": 488,
      "spell": "huaiji",
      "name": "\u6000\u96C6"
    }, {
      "id": 489,
      "spell": "huaining",
      "name": "\u6000\u5B81"
    }, {
      "id": 490,
      "spell": "huaiyuan",
      "name": "\u6000\u8FDC"
    }, {
      "id": 491,
      "spell": "huantai",
      "name": "\u6853\u53F0"
    }, {
      "id": 492,
      "spell": "huazhou",
      "name": "\u5316\u5DDE"
    }, {
      "id": 493,
      "spell": "huian",
      "name": "\u60E0\u5B89"
    }, {
      "id": 494,
      "spell": "huichang",
      "name": "\u4F1A\u660C"
    }, {
      "id": 495,
      "spell": "huidong",
      "name": "\u60E0\u4E1C"
    }, {
      "id": 496,
      "spell": "huilai",
      "name": "\u60E0\u6765"
    }, {
      "id": 497,
      "spell": "huimin",
      "name": "\u60E0\u6C11"
    }, {
      "id": 498,
      "spell": "hukou",
      "name": "\u6E56\u53E3"
    }, {
      "id": 499,
      "spell": "hulan",
      "name": "\u547C\u5170"
    }, {
      "id": 500,
      "spell": "huoqiu",
      "name": "\u970D\u90B1"
    }, {
      "id": 501,
      "spell": "huoshan",
      "name": "\u970D\u5C71"
    }, {
      "id": 502,
      "spell": "huxian",
      "name": "\u6237\u53BF"
    }],
    "J": [{
      "id": 21,
      "spell": "jiaozuo",
      "name": "\u7126\u4F5C"
    }, {
      "id": 22,
      "spell": "jiaxing",
      "name": "\u5609\u5174"
    }, {
      "id": 23,
      "spell": "jilin",
      "name": "\u5409\u6797"
    }, {
      "id": 24,
      "spell": "jinan",
      "name": "\u6D4E\u5357"
    }, {
      "id": 157,
      "spell": "jiamusi",
      "name": "\u4F73\u6728\u65AF"
    }, {
      "id": 158,
      "spell": "jiangmen",
      "name": "\u6C5F\u95E8"
    }, {
      "id": 159,
      "spell": "jian",
      "name": "\u5409\u5B89"
    }, {
      "id": 160,
      "spell": "jiayuguan",
      "name": "\u5609\u5CEA\u5173"
    }, {
      "id": 161,
      "spell": "jieyang",
      "name": "\u63ED\u9633"
    }, {
      "id": 162,
      "spell": "jinchang",
      "name": "\u91D1\u660C"
    }, {
      "id": 163,
      "spell": "jincheng",
      "name": "\u664B\u57CE"
    }, {
      "id": 164,
      "spell": "jingdezhen",
      "name": "\u666F\u5FB7\u9547"
    }, {
      "id": 165,
      "spell": "jingmen",
      "name": "\u8346\u95E8"
    }, {
      "id": 166,
      "spell": "jingzhou",
      "name": "\u8346\u5DDE"
    }, {
      "id": 167,
      "spell": "jinhua",
      "name": "\u91D1\u534E"
    }, {
      "id": 168,
      "spell": "jining",
      "name": "\u6D4E\u5B81"
    }, {
      "id": 169,
      "spell": "jinzhong",
      "name": "\u664B\u4E2D"
    }, {
      "id": 170,
      "spell": "jinzhou",
      "name": "\u9526\u5DDE"
    }, {
      "id": 171,
      "spell": "jiujiang",
      "name": "\u4E5D\u6C5F"
    }, {
      "id": 172,
      "spell": "jiuquan",
      "name": "\u9152\u6CC9"
    }, {
      "id": 173,
      "spell": "jixi",
      "name": "\u9E21\u897F"
    }, {
      "id": 503,
      "spell": "jiande",
      "name": "\u5EFA\u5FB7"
    }, {
      "id": 504,
      "spell": "jiangdu",
      "name": "\u6C5F\u90FD"
    }, {
      "id": 505,
      "spell": "jiangjin",
      "name": "\u6C5F\u6D25"
    }, {
      "id": 506,
      "spell": "jiangle",
      "name": "\u5C06\u4E50"
    }, {
      "id": 507,
      "spell": "jiangshan",
      "name": "\u6C5F\u5C71"
    }, {
      "id": 508,
      "spell": "jiangyan",
      "name": "\u59DC\u5830"
    }, {
      "id": 509,
      "spell": "jiangyin",
      "name": "\u6C5F\u9634"
    }, {
      "id": 510,
      "spell": "jianhu",
      "name": "\u5EFA\u6E56"
    }, {
      "id": 511,
      "spell": "jianning",
      "name": "\u5EFA\u5B81"
    }, {
      "id": 512,
      "spell": "jianou",
      "name": "\u5EFA\u74EF"
    }, {
      "id": 513,
      "spell": "jianyang",
      "name": "\u5EFA\u9633"
    }, {
      "id": 514,
      "spell": "jian",
      "name": "\u5409\u5B89"
    }, {
      "id": 515,
      "spell": "jiaohe",
      "name": "\u86DF\u6CB3"
    }, {
      "id": 516,
      "spell": "jiaoling",
      "name": "\u8549\u5CAD"
    }, {
      "id": 517,
      "spell": "jiaonan",
      "name": "\u80F6\u5357"
    }, {
      "id": 518,
      "spell": "jiaozhou",
      "name": "\u80F6\u5DDE"
    }, {
      "id": 519,
      "spell": "jiashan",
      "name": "\u5609\u5584"
    }, {
      "id": 520,
      "spell": "jiaxiang",
      "name": "\u5609\u7965"
    }, {
      "id": 521,
      "spell": "jiedong",
      "name": "\u63ED\u4E1C"
    }, {
      "id": 522,
      "spell": "jieshou",
      "name": "\u754C\u9996"
    }, {
      "id": 523,
      "spell": "jiexi",
      "name": "\u63ED\u897F"
    }, {
      "id": 524,
      "spell": "jimo",
      "name": "\u5373\u58A8"
    }, {
      "id": 525,
      "spell": "jingan",
      "name": "\u9756\u5B89"
    }, {
      "id": 526,
      "spell": "jingde",
      "name": "\u65CC\u5FB7"
    }, {
      "id": 527,
      "spell": "jinggangshan",
      "name": "\u4E95\u5188\u5C71"
    }, {
      "id": 528,
      "spell": "jingjiang",
      "name": "\u9756\u6C5F"
    }, {
      "id": 529,
      "spell": "jingning",
      "name": "\u666F\u5B81"
    }, {
      "id": 530,
      "spell": "jingxian",
      "name": "\u6CFE\u53BF"
    }, {
      "id": 531,
      "spell": "jingxing",
      "name": "\u4E95\u9649"
    }, {
      "id": 532,
      "spell": "jinhu",
      "name": "\u91D1\u6E56"
    }, {
      "id": 533,
      "spell": "jinjiang",
      "name": "\u664B\u6C5F"
    }, {
      "id": 534,
      "spell": "jinmen",
      "name": "\u91D1\u95E8"
    }, {
      "id": 535,
      "spell": "jinning",
      "name": "\u664B\u5B81"
    }, {
      "id": 536,
      "spell": "jintan",
      "name": "\u91D1\u575B"
    }, {
      "id": 537,
      "spell": "jintang",
      "name": "\u91D1\u5802"
    }, {
      "id": 538,
      "spell": "jinxian",
      "name": "\u8FDB\u8D24"
    }, {
      "id": 539,
      "spell": "jinxi",
      "name": "\u91D1\u6EAA"
    }, {
      "id": 540,
      "spell": "jinxiang",
      "name": "\u91D1\u4E61"
    }, {
      "id": 541,
      "spell": "jinyun",
      "name": "\u7F19\u4E91"
    }, {
      "id": 542,
      "spell": "jinzhai",
      "name": "\u91D1\u5BE8"
    }, {
      "id": 543,
      "spell": "jinzhou",
      "name": "\u664B\u5DDE"
    }, {
      "id": 544,
      "spell": "jishui",
      "name": "\u5409\u6C34"
    }, {
      "id": 545,
      "spell": "jiujiang",
      "name": "\u4E5D\u6C5F"
    }, {
      "id": 546,
      "spell": "jiutai",
      "name": "\u4E5D\u53F0"
    }, {
      "id": 547,
      "spell": "jixi",
      "name": "\u7EE9\u6EAA"
    }, {
      "id": 548,
      "spell": "jiyang",
      "name": "\u6D4E\u9633"
    }, {
      "id": 549,
      "spell": "jiyuan",
      "name": "\u6D4E\u6E90"
    }, {
      "id": 550,
      "spell": "juancheng",
      "name": "\u9104\u57CE"
    }, {
      "id": 551,
      "spell": "junan",
      "name": "\u8392\u5357"
    }, {
      "id": 552,
      "spell": "jurong",
      "name": "\u53E5\u5BB9"
    }, {
      "id": 553,
      "spell": "juxian",
      "name": "\u8392\u53BF"
    }, {
      "id": 554,
      "spell": "juye",
      "name": "\u5DE8\u91CE"
    }],
    "K": [{
      "id": 25,
      "spell": "kunming",
      "name": "\u6606\u660E"
    }, {
      "id": 174,
      "spell": "kaifeng",
      "name": "\u5F00\u5C01"
    }, {
      "id": 175,
      "spell": "kashidi",
      "name": "\u5580\u4EC0\u5730"
    }, {
      "id": 176,
      "spell": "kelamayi",
      "name": "\u514B\u62C9\u739B\u4F9D"
    }, {
      "id": 177,
      "spell": "kezile",
      "name": "\u514B\u5B5C\u52D2"
    }, {
      "id": 555,
      "spell": "kaihua",
      "name": "\u5F00\u5316"
    }, {
      "id": 556,
      "spell": "kaiping",
      "name": "\u5F00\u5E73"
    }, {
      "id": 557,
      "spell": "kaixian",
      "name": "\u5F00\u53BF"
    }, {
      "id": 558,
      "spell": "kaiyang",
      "name": "\u5F00\u9633"
    }, {
      "id": 559,
      "spell": "kangping",
      "name": "\u5EB7\u5E73"
    }, {
      "id": 560,
      "spell": "kenli",
      "name": "\u57A6\u5229"
    }, {
      "id": 561,
      "spell": "kunshan",
      "name": "\u6606\u5C71"
    }],
    "L": [{
      "id": 26,
      "spell": "lanzhou",
      "name": "\u5170\u5DDE"
    }, {
      "id": 27,
      "spell": "liuzhou",
      "name": "\u67F3\u5DDE"
    }, {
      "id": 28,
      "spell": "luoyang",
      "name": "\u6D1B\u9633"
    }, {
      "id": 178,
      "spell": "laibin",
      "name": "\u6765\u5BBE"
    }, {
      "id": 179,
      "spell": "laiwu",
      "name": "\u83B1\u829C"
    }, {
      "id": 180,
      "spell": "langfang",
      "name": "\u5ECA\u574A"
    }, {
      "id": 181,
      "spell": "lasa",
      "name": "\u62C9\u8428"
    }, {
      "id": 182,
      "spell": "leshan",
      "name": "\u4E50\u5C71"
    }, {
      "id": 183,
      "spell": "liangshan",
      "name": "\u51C9\u5C71"
    }, {
      "id": 184,
      "spell": "lianyungang",
      "name": "\u8FDE\u4E91\u6E2F"
    }, {
      "id": 185,
      "spell": "liaocheng",
      "name": "\u804A\u57CE"
    }, {
      "id": 186,
      "spell": "liaoyang",
      "name": "\u8FBD\u9633"
    }, {
      "id": 187,
      "spell": "liaoyuan",
      "name": "\u8FBD\u6E90"
    }, {
      "id": 188,
      "spell": "lijiang",
      "name": "\u4E3D\u6C5F"
    }, {
      "id": 189,
      "spell": "lincang",
      "name": "\u4E34\u6CA7"
    }, {
      "id": 190,
      "spell": "linfen",
      "name": "\u4E34\u6C7E"
    }, {
      "id": 191,
      "spell": "linxia",
      "name": "\u4E34\u590F"
    }, {
      "id": 192,
      "spell": "linyi",
      "name": "\u4E34\u6C82"
    }, {
      "id": 193,
      "spell": "linzhi",
      "name": "\u6797\u829D"
    }, {
      "id": 194,
      "spell": "lishui",
      "name": "\u4E3D\u6C34"
    }, {
      "id": 195,
      "spell": "liuan",
      "name": "\u516D\u5B89"
    }, {
      "id": 196,
      "spell": "liupanshui",
      "name": "\u516D\u76D8\u6C34"
    }, {
      "id": 197,
      "spell": "longnan",
      "name": "\u9647\u5357"
    }, {
      "id": 198,
      "spell": "longyan",
      "name": "\u9F99\u5CA9"
    }, {
      "id": 199,
      "spell": "loudi",
      "name": "\u5A04\u5E95"
    }, {
      "id": 200,
      "spell": "luohe",
      "name": "\u6F2F\u6CB3"
    }, {
      "id": 201,
      "spell": "luzhou",
      "name": "\u6CF8\u5DDE"
    }, {
      "id": 202,
      "spell": "lvliang",
      "name": "\u5415\u6881"
    }, {
      "id": 562,
      "spell": "laian",
      "name": "\u6765\u5B89"
    }, {
      "id": 563,
      "spell": "laixi",
      "name": "\u83B1\u897F"
    }, {
      "id": 564,
      "spell": "laiyang",
      "name": "\u83B1\u9633"
    }, {
      "id": 565,
      "spell": "laizhou",
      "name": "\u83B1\u5DDE"
    }, {
      "id": 566,
      "spell": "langxi",
      "name": "\u90CE\u6EAA"
    }, {
      "id": 567,
      "spell": "lantian",
      "name": "\u84DD\u7530"
    }, {
      "id": 568,
      "spell": "lanxi",
      "name": "\u5170\u6EAA"
    }, {
      "id": 569,
      "spell": "lean",
      "name": "\u4E50\u5B89"
    }, {
      "id": 570,
      "spell": "lechang",
      "name": "\u4E50\u660C"
    }, {
      "id": 571,
      "spell": "leizhou",
      "name": "\u96F7\u5DDE"
    }, {
      "id": 572,
      "spell": "leling",
      "name": "\u4E50\u9675"
    }, {
      "id": 573,
      "spell": "leping",
      "name": "\u4E50\u5E73"
    }, {
      "id": 574,
      "spell": "leqing",
      "name": "\u4E50\u6E05"
    }, {
      "id": 575,
      "spell": "leting",
      "name": "\u4E50\u4EAD"
    }, {
      "id": 576,
      "spell": "liancheng",
      "name": "\u8FDE\u57CE"
    }, {
      "id": 577,
      "spell": "liangping",
      "name": "\u6881\u5E73"
    }, {
      "id": 578,
      "spell": "liangshan",
      "name": "\u6881\u5C71"
    }, {
      "id": 579,
      "spell": "lianhua",
      "name": "\u83B2\u82B1"
    }, {
      "id": 580,
      "spell": "lianjiang",
      "name": "\u8FDE\u6C5F"
    }, {
      "id": 581,
      "spell": "lianjiang",
      "name": "\u5EC9\u6C5F"
    }, {
      "id": 582,
      "spell": "liannan",
      "name": "\u8FDE\u5357"
    }, {
      "id": 583,
      "spell": "lianping",
      "name": "\u8FDE\u5E73"
    }, {
      "id": 584,
      "spell": "lianshan",
      "name": "\u8FDE\u5C71"
    }, {
      "id": 585,
      "spell": "lianshui",
      "name": "\u6D9F\u6C34"
    }, {
      "id": 586,
      "spell": "lianzhou",
      "name": "\u8FDE\u5DDE"
    }, {
      "id": 587,
      "spell": "liaozhong",
      "name": "\u8FBD\u4E2D"
    }, {
      "id": 588,
      "spell": "lichuan",
      "name": "\u9ECE\u5DDD"
    }, {
      "id": 589,
      "spell": "lijin",
      "name": "\u5229\u6D25"
    }, {
      "id": 590,
      "spell": "linan",
      "name": "\u4E34\u5B89"
    }, {
      "id": 591,
      "spell": "lingbi",
      "name": "\u7075\u74A7"
    }, {
      "id": 592,
      "spell": "lingshou",
      "name": "\u7075\u5BFF"
    }, {
      "id": 593,
      "spell": "lingxian",
      "name": "\u9675\u53BF"
    }, {
      "id": 594,
      "spell": "linhai",
      "name": "\u4E34\u6D77"
    }, {
      "id": 595,
      "spell": "linqing",
      "name": "\u4E34\u6E05"
    }, {
      "id": 596,
      "spell": "linquan",
      "name": "\u4E34\u6CC9"
    }, {
      "id": 597,
      "spell": "linqu",
      "name": "\u4E34\u6710"
    }, {
      "id": 598,
      "spell": "linshu",
      "name": "\u4E34\u6CAD"
    }, {
      "id": 599,
      "spell": "linyi",
      "name": "\u4E34\u9091"
    }, {
      "id": 600,
      "spell": "lishui",
      "name": "\u6EA7\u6C34"
    }, {
      "id": 601,
      "spell": "liucheng",
      "name": "\u67F3\u57CE"
    }, {
      "id": 602,
      "spell": "liujiang",
      "name": "\u67F3\u6C5F"
    }, {
      "id": 603,
      "spell": "liuyang",
      "name": "\u6D4F\u9633"
    }, {
      "id": 604,
      "spell": "lixin",
      "name": "\u5229\u8F9B"
    }, {
      "id": 605,
      "spell": "liyang",
      "name": "\u6EA7\u9633"
    }, {
      "id": 606,
      "spell": "longan",
      "name": "\u9686\u5B89"
    }, {
      "id": 607,
      "spell": "longchuan",
      "name": "\u9F99\u5DDD"
    }, {
      "id": 608,
      "spell": "longhai",
      "name": "\u9F99\u6D77"
    }, {
      "id": 609,
      "spell": "longkou",
      "name": "\u9F99\u53E3"
    }, {
      "id": 610,
      "spell": "longmen",
      "name": "\u9F99\u95E8"
    }, {
      "id": 611,
      "spell": "longnan",
      "name": "\u9F99\u5357"
    }, {
      "id": 612,
      "spell": "longquan",
      "name": "\u9F99\u6CC9"
    }, {
      "id": 613,
      "spell": "longyou",
      "name": "\u9F99\u6E38"
    }, {
      "id": 614,
      "spell": "luancheng",
      "name": "\u683E\u57CE"
    }, {
      "id": 615,
      "spell": "luanchuan",
      "name": "\u683E\u5DDD"
    }, {
      "id": 616,
      "spell": "luannan",
      "name": "\u6EE6\u5357"
    }, {
      "id": 617,
      "spell": "luanxian",
      "name": "\u6EE6\u53BF"
    }, {
      "id": 618,
      "spell": "lufeng",
      "name": "\u9646\u4E30"
    }, {
      "id": 619,
      "spell": "luhe",
      "name": "\u9646\u6CB3"
    }, {
      "id": 620,
      "spell": "lujiang",
      "name": "\u5E90\u6C5F"
    }, {
      "id": 621,
      "spell": "luoding",
      "name": "\u7F57\u5B9A"
    }, {
      "id": 622,
      "spell": "luoning",
      "name": "\u6D1B\u5B81"
    }, {
      "id": 623,
      "spell": "luoyuan",
      "name": "\u7F57\u6E90"
    }, {
      "id": 624,
      "spell": "luquan",
      "name": "\u9E7F\u6CC9"
    }, {
      "id": 625,
      "spell": "luquan",
      "name": "\u7984\u529D"
    }, {
      "id": 626,
      "spell": "luxi",
      "name": "\u82A6\u6EAA"
    }, {
      "id": 627,
      "spell": "luzhai",
      "name": "\u9E7F\u5BE8"
    }],
    "M": [{
      "id": 203,
      "spell": "maanshan",
      "name": "\u9A6C\u978D\u5C71"
    }, {
      "id": 204,
      "spell": "maoming",
      "name": "\u8302\u540D"
    }, {
      "id": 205,
      "spell": "meishan",
      "name": "\u7709\u5C71"
    }, {
      "id": 206,
      "spell": "meizhou",
      "name": "\u6885\u5DDE"
    }, {
      "id": 207,
      "spell": "mianyang",
      "name": "\u7EF5\u9633"
    }, {
      "id": 208,
      "spell": "mudanjiang",
      "name": "\u7261\u4E39\u6C5F"
    }, {
      "id": 628,
      "spell": "mashan",
      "name": "\u9A6C\u5C71"
    }, {
      "id": 629,
      "spell": "meixian",
      "name": "\u6885\u53BF"
    }, {
      "id": 630,
      "spell": "mengcheng",
      "name": "\u8499\u57CE"
    }, {
      "id": 631,
      "spell": "mengjin",
      "name": "\u5B5F\u6D25"
    }, {
      "id": 632,
      "spell": "mengyin",
      "name": "\u8499\u9634"
    }, {
      "id": 633,
      "spell": "mengzhou",
      "name": "\u5B5F\u5DDE"
    }, {
      "id": 634,
      "spell": "mingguang",
      "name": "\u660E\u5149"
    }, {
      "id": 635,
      "spell": "mingxi",
      "name": "\u660E\u6EAA"
    }, {
      "id": 636,
      "spell": "minhou",
      "name": "\u95FD\u4FAF"
    }, {
      "id": 637,
      "spell": "minqing",
      "name": "\u95FD\u6E05"
    }, {
      "id": 638,
      "spell": "mulan",
      "name": "\u6728\u5170"
    }],
    "N": [{
      "id": 29,
      "spell": "nanchang",
      "name": "\u5357\u660C"
    }, {
      "id": 30,
      "spell": "nanjing",
      "name": "\u5357\u4EAC"
    }, {
      "id": 31,
      "spell": "nanning",
      "name": "\u5357\u5B81"
    }, {
      "id": 32,
      "spell": "nantong",
      "name": "\u5357\u901A"
    }, {
      "id": 33,
      "spell": "ningbo",
      "name": "\u5B81\u6CE2"
    }, {
      "id": 209,
      "spell": "nanchong",
      "name": "\u5357\u5145"
    }, {
      "id": 210,
      "spell": "nanping",
      "name": "\u5357\u5E73"
    }, {
      "id": 211,
      "spell": "nanyang",
      "name": "\u5357\u9633"
    }, {
      "id": 212,
      "spell": "naqu",
      "name": "\u90A3\u66F2"
    }, {
      "id": 213,
      "spell": "neijiang",
      "name": "\u5185\u6C5F"
    }, {
      "id": 214,
      "spell": "ningde",
      "name": "\u5B81\u5FB7"
    }, {
      "id": 215,
      "spell": "nujiang",
      "name": "\u6012\u6C5F"
    }, {
      "id": 639,
      "spell": "nanan",
      "name": "\u5357\u5B89"
    }, {
      "id": 640,
      "spell": "nanao",
      "name": "\u5357\u6FB3"
    }, {
      "id": 641,
      "spell": "nancheng",
      "name": "\u5357\u57CE"
    }, {
      "id": 642,
      "spell": "nanchuan",
      "name": "\u5357\u5DDD"
    }, {
      "id": 643,
      "spell": "nanfeng",
      "name": "\u5357\u4E30"
    }, {
      "id": 644,
      "spell": "nanjing",
      "name": "\u5357\u9756"
    }, {
      "id": 645,
      "spell": "nankang",
      "name": "\u5357\u5EB7"
    }, {
      "id": 646,
      "spell": "nanling",
      "name": "\u5357\u9675"
    }, {
      "id": 647,
      "spell": "nanxiong",
      "name": "\u5357\u96C4"
    }, {
      "id": 648,
      "spell": "ningdu",
      "name": "\u5B81\u90FD"
    }, {
      "id": 649,
      "spell": "ningguo",
      "name": "\u5B81\u56FD"
    }, {
      "id": 650,
      "spell": "ninghai",
      "name": "\u5B81\u6D77"
    }, {
      "id": 651,
      "spell": "ninghua",
      "name": "\u5B81\u5316"
    }, {
      "id": 652,
      "spell": "ningjin",
      "name": "\u5B81\u6D25"
    }, {
      "id": 653,
      "spell": "ningxiang",
      "name": "\u5B81\u4E61"
    }, {
      "id": 654,
      "spell": "ningyang",
      "name": "\u5B81\u9633"
    }, {
      "id": 655,
      "spell": "nongan",
      "name": "\u519C\u5B89"
    }],
    "P": [{
      "id": 216,
      "spell": "panjin",
      "name": "\u76D8\u9526"
    }, {
      "id": 217,
      "spell": "panzhihua",
      "name": "\u6500\u679D\u82B1"
    }, {
      "id": 218,
      "spell": "pingdingshan",
      "name": "\u5E73\u9876\u5C71"
    }, {
      "id": 219,
      "spell": "pingliang",
      "name": "\u5E73\u51C9"
    }, {
      "id": 220,
      "spell": "pingxiang",
      "name": "\u840D\u4E61"
    }, {
      "id": 221,
      "spell": "puer",
      "name": "\u666E\u6D31"
    }, {
      "id": 222,
      "spell": "putian",
      "name": "\u8386\u7530"
    }, {
      "id": 223,
      "spell": "puyang",
      "name": "\u6FEE\u9633"
    }, {
      "id": 656,
      "spell": "panan",
      "name": "\u78D0\u5B89"
    }, {
      "id": 657,
      "spell": "panshi",
      "name": "\u78D0\u77F3"
    }, {
      "id": 658,
      "spell": "peixian",
      "name": "\u6C9B\u53BF"
    }, {
      "id": 659,
      "spell": "penglai",
      "name": "\u84EC\u83B1"
    }, {
      "id": 660,
      "spell": "pengshui",
      "name": "\u5F6D\u6C34"
    }, {
      "id": 661,
      "spell": "pengze",
      "name": "\u5F6D\u6CFD"
    }, {
      "id": 662,
      "spell": "pengzhou",
      "name": "\u5F6D\u5DDE"
    }, {
      "id": 663,
      "spell": "pingdu",
      "name": "\u5E73\u5EA6"
    }, {
      "id": 664,
      "spell": "pinghe",
      "name": "\u5E73\u548C"
    }, {
      "id": 665,
      "spell": "pinghu",
      "name": "\u5E73\u6E56"
    }, {
      "id": 666,
      "spell": "pingnan",
      "name": "\u5C4F\u5357"
    }, {
      "id": 667,
      "spell": "pingshan",
      "name": "\u5E73\u5C71"
    }, {
      "id": 668,
      "spell": "pingtan",
      "name": "\u5E73\u6F6D"
    }, {
      "id": 669,
      "spell": "pingyang",
      "name": "\u5E73\u9633"
    }, {
      "id": 670,
      "spell": "pingyin",
      "name": "\u5E73\u9634"
    }, {
      "id": 671,
      "spell": "pingyi",
      "name": "\u5E73\u9091"
    }, {
      "id": 672,
      "spell": "pingyuan",
      "name": "\u5E73\u539F"
    }, {
      "id": 673,
      "spell": "pingyuan",
      "name": "\u5E73\u8FDC"
    }, {
      "id": 674,
      "spell": "pixian",
      "name": "\u90EB\u53BF"
    }, {
      "id": 675,
      "spell": "pizhou",
      "name": "\u90B3\u5DDE"
    }, {
      "id": 676,
      "spell": "poyang",
      "name": "\u9131\u9633"
    }, {
      "id": 677,
      "spell": "pucheng",
      "name": "\u6D66\u57CE"
    }, {
      "id": 678,
      "spell": "pujiang",
      "name": "\u6D66\u6C5F"
    }, {
      "id": 679,
      "spell": "pujiang",
      "name": "\u84B2\u6C5F"
    }, {
      "id": 680,
      "spell": "pulandian",
      "name": "\u666E\u5170\u5E97"
    }, {
      "id": 681,
      "spell": "puning",
      "name": "\u666E\u5B81"
    }],
    "Q": [{
      "id": 34,
      "spell": "qingdao",
      "name": "\u9752\u5C9B"
    }, {
      "id": 35,
      "spell": "quanzhou",
      "name": "\u6CC9\u5DDE"
    }, {
      "id": 224,
      "spell": "qiandong",
      "name": "\u9ED4\u4E1C"
    }, {
      "id": 225,
      "spell": "qiannan",
      "name": "\u9ED4\u5357"
    }, {
      "id": 226,
      "spell": "qianxinan",
      "name": "\u9ED4\u897F\u5357"
    }, {
      "id": 227,
      "spell": "qingyang",
      "name": "\u5E86\u9633"
    }, {
      "id": 228,
      "spell": "qingyuan",
      "name": "\u6E05\u8FDC"
    }, {
      "id": 229,
      "spell": "qinhuangdao",
      "name": "\u79E6\u7687\u5C9B"
    }, {
      "id": 230,
      "spell": "qinzhou",
      "name": "\u94A6\u5DDE"
    }, {
      "id": 231,
      "spell": "qiqihaer",
      "name": "\u9F50\u9F50\u54C8\u5C14"
    }, {
      "id": 232,
      "spell": "qitaihe",
      "name": "\u4E03\u53F0\u6CB3"
    }, {
      "id": 233,
      "spell": "qujing",
      "name": "\u66F2\u9756"
    }, {
      "id": 234,
      "spell": "quzhou",
      "name": "\u8862\u5DDE"
    }, {
      "id": 682,
      "spell": "qianan",
      "name": "\u8FC1\u5B89"
    }, {
      "id": 683,
      "spell": "qianshan",
      "name": "\u6F5C\u5C71"
    }, {
      "id": 684,
      "spell": "qianshan",
      "name": "\u94C5\u5C71"
    }, {
      "id": 685,
      "spell": "qianxi",
      "name": "\u8FC1\u897F"
    }, {
      "id": 686,
      "spell": "qidong",
      "name": "\u542F\u4E1C"
    }, {
      "id": 687,
      "spell": "qihe",
      "name": "\u9F50\u6CB3"
    }, {
      "id": 688,
      "spell": "qijiang",
      "name": "\u7DA6\u6C5F"
    }, {
      "id": 689,
      "spell": "qimen",
      "name": "\u7941\u95E8"
    }, {
      "id": 690,
      "spell": "qingliu",
      "name": "\u6E05\u6D41"
    }, {
      "id": 691,
      "spell": "qingtian",
      "name": "\u9752\u7530"
    }, {
      "id": 692,
      "spell": "qingxin",
      "name": "\u6E05\u65B0"
    }, {
      "id": 693,
      "spell": "qingyang",
      "name": "\u9752\u9633"
    }, {
      "id": 694,
      "spell": "qingyuan",
      "name": "\u5E86\u5143"
    }, {
      "id": 695,
      "spell": "qingyun",
      "name": "\u5E86\u4E91"
    }, {
      "id": 696,
      "spell": "qingzhen",
      "name": "\u6E05\u9547"
    }, {
      "id": 697,
      "spell": "qingzhou",
      "name": "\u9752\u5DDE"
    }, {
      "id": 698,
      "spell": "qinyang",
      "name": "\u6C81\u9633"
    }, {
      "id": 699,
      "spell": "qionglai",
      "name": "\u909B\u5D03"
    }, {
      "id": 700,
      "spell": "qixia",
      "name": "\u6816\u971E"
    }, {
      "id": 701,
      "spell": "quanjiao",
      "name": "\u5168\u6912"
    }, {
      "id": 702,
      "spell": "quannan",
      "name": "\u5168\u5357"
    }, {
      "id": 703,
      "spell": "qufu",
      "name": "\u66F2\u961C"
    }, {
      "id": 704,
      "spell": "qujiang",
      "name": "\u66F2\u6C5F"
    }],
    "R": [{
      "id": 235,
      "spell": "rikaze",
      "name": "\u65E5\u5580\u5219"
    }, {
      "id": 236,
      "spell": "rizhao",
      "name": "\u65E5\u7167"
    }, {
      "id": 705,
      "spell": "raoping",
      "name": "\u9976\u5E73"
    }, {
      "id": 706,
      "spell": "renhua",
      "name": "\u4EC1\u5316"
    }, {
      "id": 707,
      "spell": "rongan",
      "name": "\u878D\u5B89"
    }, {
      "id": 708,
      "spell": "rongchang",
      "name": "\u8363\u660C"
    }, {
      "id": 709,
      "spell": "rongcheng",
      "name": "\u8363\u6210"
    }, {
      "id": 710,
      "spell": "rongshui",
      "name": "\u878D\u6C34"
    }, {
      "id": 711,
      "spell": "rudong",
      "name": "\u5982\u4E1C"
    }, {
      "id": 712,
      "spell": "rugao",
      "name": "\u5982\u768B"
    }, {
      "id": 713,
      "spell": "ruian",
      "name": "\u745E\u5B89"
    }, {
      "id": 714,
      "spell": "ruichang",
      "name": "\u745E\u660C"
    }, {
      "id": 715,
      "spell": "ruijin",
      "name": "\u745E\u91D1"
    }, {
      "id": 716,
      "spell": "rushan",
      "name": "\u4E73\u5C71"
    }, {
      "id": 717,
      "spell": "ruyang",
      "name": "\u6C5D\u9633"
    }, {
      "id": 718,
      "spell": "ruyuan",
      "name": "\u4E73\u6E90"
    }],
    "S": [{
      "id": 3,
      "spell": "shanghai",
      "name": "\u4E0A\u6D77"
    }, {
      "id": 36,
      "spell": "shenyang",
      "name": "\u6C88\u9633"
    }, {
      "id": 37,
      "spell": "shenzhen",
      "name": "\u6DF1\u5733"
    }, {
      "id": 38,
      "spell": "shijiazhuang",
      "name": "\u77F3\u5BB6\u5E84"
    }, {
      "id": 39,
      "spell": "suzhou",
      "name": "\u82CF\u5DDE"
    }, {
      "id": 237,
      "spell": "sanmenxia",
      "name": "\u4E09\u95E8\u5CE1"
    }, {
      "id": 238,
      "spell": "sanming",
      "name": "\u4E09\u660E"
    }, {
      "id": 239,
      "spell": "sanya",
      "name": "\u4E09\u4E9A"
    }, {
      "id": 240,
      "spell": "shangluo",
      "name": "\u5546\u6D1B"
    }, {
      "id": 241,
      "spell": "shangqiu",
      "name": "\u5546\u4E18"
    }, {
      "id": 242,
      "spell": "shangrao",
      "name": "\u4E0A\u9976"
    }, {
      "id": 243,
      "spell": "shannan",
      "name": "\u5C71\u5357"
    }, {
      "id": 244,
      "spell": "shantou",
      "name": "\u6C55\u5934"
    }, {
      "id": 245,
      "spell": "shanwei",
      "name": "\u6C55\u5C3E"
    }, {
      "id": 246,
      "spell": "shaoguan",
      "name": "\u97F6\u5173"
    }, {
      "id": 247,
      "spell": "shaoxing",
      "name": "\u7ECD\u5174"
    }, {
      "id": 248,
      "spell": "shaoyang",
      "name": "\u90B5\u9633"
    }, {
      "id": 249,
      "spell": "shiyan",
      "name": "\u5341\u5830"
    }, {
      "id": 250,
      "spell": "shizuishan",
      "name": "\u77F3\u5634\u5C71"
    }, {
      "id": 251,
      "spell": "shuangyashan",
      "name": "\u53CC\u9E2D\u5C71"
    }, {
      "id": 252,
      "spell": "shuozhou",
      "name": "\u6714\u5DDE"
    }, {
      "id": 253,
      "spell": "siping",
      "name": "\u56DB\u5E73"
    }, {
      "id": 254,
      "spell": "songyuan",
      "name": "\u677E\u539F"
    }, {
      "id": 255,
      "spell": "suihua",
      "name": "\u7EE5\u5316"
    }, {
      "id": 256,
      "spell": "suining",
      "name": "\u9042\u5B81"
    }, {
      "id": 257,
      "spell": "suizhou",
      "name": "\u968F\u5DDE"
    }, {
      "id": 258,
      "spell": "suqian",
      "name": "\u5BBF\u8FC1"
    }, {
      "id": 259,
      "spell": "suzhou",
      "name": "\u5BBF\u5DDE"
    }, {
      "id": 719,
      "spell": "sanjiang",
      "name": "\u4E09\u6C5F"
    }, {
      "id": 720,
      "spell": "sanmen",
      "name": "\u4E09\u95E8"
    }, {
      "id": 721,
      "spell": "saoan",
      "name": "\u8BCF\u5B89"
    }, {
      "id": 722,
      "spell": "shanggao",
      "name": "\u4E0A\u9AD8"
    }, {
      "id": 723,
      "spell": "shanghang",
      "name": "\u4E0A\u676D"
    }, {
      "id": 724,
      "spell": "shanghe",
      "name": "\u5546\u6CB3"
    }, {
      "id": 725,
      "spell": "shangli",
      "name": "\u4E0A\u6817"
    }, {
      "id": 726,
      "spell": "shanglin",
      "name": "\u4E0A\u6797"
    }, {
      "id": 727,
      "spell": "shangrao",
      "name": "\u4E0A\u9976"
    }, {
      "id": 728,
      "spell": "shangyou",
      "name": "\u4E0A\u72B9"
    }, {
      "id": 729,
      "spell": "shangyu",
      "name": "\u4E0A\u865E"
    }, {
      "id": 730,
      "spell": "shangzhi",
      "name": "\u5C1A\u5FD7"
    }, {
      "id": 731,
      "spell": "shaowu",
      "name": "\u90B5\u6B66"
    }, {
      "id": 732,
      "spell": "shaoxing",
      "name": "\u7ECD\u5174"
    }, {
      "id": 733,
      "spell": "shaxian",
      "name": "\u6C99\u53BF"
    }, {
      "id": 734,
      "spell": "shengsi",
      "name": "\u5D4A\u6CD7"
    }, {
      "id": 735,
      "spell": "shengzhou",
      "name": "\u5D4A\u5DDE"
    }, {
      "id": 736,
      "spell": "shenxian",
      "name": "\u8398\u53BF"
    }, {
      "id": 737,
      "spell": "shenze",
      "name": "\u6DF1\u6CFD"
    }, {
      "id": 738,
      "spell": "shexian",
      "name": "\u6B59\u53BF"
    }, {
      "id": 739,
      "spell": "sheyang",
      "name": "\u5C04\u9633"
    }, {
      "id": 740,
      "spell": "shicheng",
      "name": "\u77F3\u57CE"
    }, {
      "id": 741,
      "spell": "shilin",
      "name": "\u77F3\u6797"
    }, {
      "id": 742,
      "spell": "shishi",
      "name": "\u77F3\u72EE"
    }, {
      "id": 743,
      "spell": "shitai",
      "name": "\u77F3\u53F0"
    }, {
      "id": 744,
      "spell": "shixing",
      "name": "\u59CB\u5174"
    }, {
      "id": 745,
      "spell": "shizhu",
      "name": "\u77F3\u67F1"
    }, {
      "id": 746,
      "spell": "shouguang",
      "name": "\u5BFF\u5149"
    }, {
      "id": 747,
      "spell": "shouning",
      "name": "\u5BFF\u5B81"
    }, {
      "id": 748,
      "spell": "shouxian",
      "name": "\u5BFF\u53BF"
    }, {
      "id": 749,
      "spell": "shuangcheng",
      "name": "\u53CC\u57CE"
    }, {
      "id": 750,
      "spell": "shuangliu",
      "name": "\u53CC\u6D41"
    }, {
      "id": 751,
      "spell": "shucheng",
      "name": "\u8212\u57CE"
    }, {
      "id": 752,
      "spell": "shulan",
      "name": "\u8212\u5170"
    }, {
      "id": 753,
      "spell": "shunchang",
      "name": "\u987A\u660C"
    }, {
      "id": 754,
      "spell": "shuyang",
      "name": "\u6CAD\u9633"
    }, {
      "id": 755,
      "spell": "sihong",
      "name": "\u6CD7\u6D2A"
    }, {
      "id": 756,
      "spell": "sihui",
      "name": "\u56DB\u4F1A"
    }, {
      "id": 757,
      "spell": "sishui",
      "name": "\u6CD7\u6C34"
    }, {
      "id": 758,
      "spell": "sixian",
      "name": "\u6CD7\u53BF"
    }, {
      "id": 759,
      "spell": "siyang",
      "name": "\u6CD7\u9633"
    }, {
      "id": 760,
      "spell": "songming",
      "name": "\u5D69\u660E"
    }, {
      "id": 761,
      "spell": "songxi",
      "name": "\u677E\u6EAA"
    }, {
      "id": 762,
      "spell": "songxian",
      "name": "\u5D69\u53BF"
    }, {
      "id": 763,
      "spell": "songyang",
      "name": "\u677E\u9633"
    }, {
      "id": 764,
      "spell": "suichang",
      "name": "\u9042\u660C"
    }, {
      "id": 765,
      "spell": "suichuan",
      "name": "\u9042\u5DDD"
    }, {
      "id": 766,
      "spell": "suining",
      "name": "\u7762\u5B81"
    }, {
      "id": 767,
      "spell": "suixi",
      "name": "\u6FC9\u6EAA"
    }, {
      "id": 768,
      "spell": "suixi",
      "name": "\u9042\u6EAA"
    }, {
      "id": 769,
      "spell": "susong",
      "name": "\u5BBF\u677E"
    }, {
      "id": 770,
      "spell": "suyu",
      "name": "\u5BBF\u8C6B"
    }],
    "T": [{
      "id": 4,
      "spell": "tianjin",
      "name": "\u5929\u6D25"
    }, {
      "id": 40,
      "spell": "taizhou",
      "name": "\u53F0\u5DDE"
    }, {
      "id": 41,
      "spell": "tangshan",
      "name": "\u5510\u5C71"
    }, {
      "id": 260,
      "spell": "tachengdi",
      "name": "\u5854\u57CE\u5730"
    }, {
      "id": 261,
      "spell": "taian",
      "name": "\u6CF0\u5B89"
    }, {
      "id": 262,
      "spell": "taiyuan",
      "name": "\u592A\u539F"
    }, {
      "id": 263,
      "spell": "taizhou",
      "name": "\u6CF0\u5DDE"
    }, {
      "id": 264,
      "spell": "tianshui",
      "name": "\u5929\u6C34"
    }, {
      "id": 265,
      "spell": "tieling",
      "name": "\u94C1\u5CAD"
    }, {
      "id": 266,
      "spell": "tongchuan",
      "name": "\u94DC\u5DDD"
    }, {
      "id": 267,
      "spell": "tonghua",
      "name": "\u901A\u5316"
    }, {
      "id": 268,
      "spell": "tongliao",
      "name": "\u901A\u8FBD"
    }, {
      "id": 269,
      "spell": "tongling",
      "name": "\u94DC\u9675"
    }, {
      "id": 270,
      "spell": "tongren",
      "name": "\u94DC\u4EC1"
    }, {
      "id": 271,
      "spell": "tulufan",
      "name": "\u5410\u9C81\u756A"
    }, {
      "id": 771,
      "spell": "taicang",
      "name": "\u592A\u4ED3"
    }, {
      "id": 772,
      "spell": "taihe",
      "name": "\u592A\u548C"
    }, {
      "id": 773,
      "spell": "taihe",
      "name": "\u6CF0\u548C"
    }, {
      "id": 774,
      "spell": "taihu",
      "name": "\u592A\u6E56"
    }, {
      "id": 775,
      "spell": "taining",
      "name": "\u6CF0\u5B81"
    }, {
      "id": 776,
      "spell": "taishan",
      "name": "\u53F0\u5C71"
    }, {
      "id": 777,
      "spell": "taishun",
      "name": "\u6CF0\u987A"
    }, {
      "id": 778,
      "spell": "taixing",
      "name": "\u6CF0\u5174"
    }, {
      "id": 779,
      "spell": "tancheng",
      "name": "\u90EF\u57CE"
    }, {
      "id": 780,
      "spell": "tanghai",
      "name": "\u5510\u6D77"
    }, {
      "id": 781,
      "spell": "tengzhou",
      "name": "\u6ED5\u5DDE"
    }, {
      "id": 782,
      "spell": "tianchang",
      "name": "\u5929\u957F"
    }, {
      "id": 783,
      "spell": "tiantai",
      "name": "\u5929\u53F0"
    }, {
      "id": 784,
      "spell": "tongcheng",
      "name": "\u6850\u57CE"
    }, {
      "id": 785,
      "spell": "tonggu",
      "name": "\u94DC\u9F13"
    }, {
      "id": 786,
      "spell": "tonghe",
      "name": "\u901A\u6CB3"
    }, {
      "id": 787,
      "spell": "tongliang",
      "name": "\u94DC\u6881"
    }, {
      "id": 788,
      "spell": "tongling",
      "name": "\u94DC\u9675"
    }, {
      "id": 789,
      "spell": "tonglu",
      "name": "\u6850\u5E90"
    }, {
      "id": 790,
      "spell": "tongnan",
      "name": "\u6F7C\u5357"
    }, {
      "id": 791,
      "spell": "tongshan",
      "name": "\u94DC\u5C71"
    }, {
      "id": 792,
      "spell": "tongxiang",
      "name": "\u6850\u4E61"
    }, {
      "id": 793,
      "spell": "tongzhou",
      "name": "\u901A\u5DDE"
    }],
    "W": [{
      "id": 42,
      "spell": "weifang",
      "name": "\u6F4D\u574A"
    }, {
      "id": 43,
      "spell": "weihai",
      "name": "\u5A01\u6D77"
    }, {
      "id": 44,
      "spell": "wuhan",
      "name": "\u6B66\u6C49"
    }, {
      "id": 45,
      "spell": "wuxi",
      "name": "\u65E0\u9521"
    }, {
      "id": 272,
      "spell": "weinan",
      "name": "\u6E2D\u5357"
    }, {
      "id": 273,
      "spell": "wenshan",
      "name": "\u6587\u5C71"
    }, {
      "id": 274,
      "spell": "wenzhou",
      "name": "\u6E29\u5DDE"
    }, {
      "id": 275,
      "spell": "wuhai",
      "name": "\u4E4C\u6D77"
    }, {
      "id": 276,
      "spell": "wuhu",
      "name": "\u829C\u6E56"
    }, {
      "id": 277,
      "spell": "wulanchabu",
      "name": "\u4E4C\u5170\u5BDF\u5E03"
    }, {
      "id": 278,
      "spell": "wulumuqi",
      "name": "\u4E4C\u9C81\u6728\u9F50"
    }, {
      "id": 279,
      "spell": "wuwei",
      "name": "\u6B66\u5A01"
    }, {
      "id": 280,
      "spell": "wuzhong",
      "name": "\u5434\u5FE0"
    }, {
      "id": 281,
      "spell": "wuzhou",
      "name": "\u68A7\u5DDE"
    }, {
      "id": 794,
      "spell": "wafangdian",
      "name": "\u74E6\u623F\u5E97"
    }, {
      "id": 795,
      "spell": "wanan",
      "name": "\u4E07\u5B89"
    }, {
      "id": 796,
      "spell": "wangcheng",
      "name": "\u671B\u57CE"
    }, {
      "id": 797,
      "spell": "wangjiang",
      "name": "\u671B\u6C5F"
    }, {
      "id": 798,
      "spell": "wannian",
      "name": "\u4E07\u5E74"
    }, {
      "id": 799,
      "spell": "wanzai",
      "name": "\u4E07\u8F7D"
    }, {
      "id": 800,
      "spell": "weishan",
      "name": "\u5FAE\u5C71"
    }, {
      "id": 801,
      "spell": "wencheng",
      "name": "\u6587\u6210"
    }, {
      "id": 802,
      "spell": "wendeng",
      "name": "\u6587\u767B"
    }, {
      "id": 803,
      "spell": "wengyuan",
      "name": "\u7FC1\u6E90"
    }, {
      "id": 804,
      "spell": "wenling",
      "name": "\u6E29\u5CAD"
    }, {
      "id": 805,
      "spell": "wenshang",
      "name": "\u6C76\u4E0A"
    }, {
      "id": 806,
      "spell": "wenxian",
      "name": "\u6E29\u53BF"
    }, {
      "id": 807,
      "spell": "woyang",
      "name": "\u6DA1\u9633"
    }, {
      "id": 808,
      "spell": "wuchang",
      "name": "\u4E94\u5E38"
    }, {
      "id": 809,
      "spell": "wucheng",
      "name": "\u6B66\u57CE"
    }, {
      "id": 810,
      "spell": "wuchuan",
      "name": "\u5434\u5DDD"
    }, {
      "id": 811,
      "spell": "wudi",
      "name": "\u65E0\u68E3"
    }, {
      "id": 812,
      "spell": "wuhe",
      "name": "\u4E94\u6CB3"
    }, {
      "id": 813,
      "spell": "wuhu",
      "name": "\u829C\u6E56"
    }, {
      "id": 814,
      "spell": "wuhua",
      "name": "\u4E94\u534E"
    }, {
      "id": 815,
      "spell": "wuji",
      "name": "\u65E0\u6781"
    }, {
      "id": 816,
      "spell": "wujiang",
      "name": "\u5434\u6C5F"
    }, {
      "id": 817,
      "spell": "wulian",
      "name": "\u4E94\u83B2"
    }, {
      "id": 818,
      "spell": "wulong",
      "name": "\u6B66\u9686"
    }, {
      "id": 819,
      "spell": "wuming",
      "name": "\u6B66\u9E23"
    }, {
      "id": 820,
      "spell": "wuning",
      "name": "\u6B66\u5B81"
    }, {
      "id": 821,
      "spell": "wuping",
      "name": "\u6B66\u5E73"
    }, {
      "id": 822,
      "spell": "wushan",
      "name": "\u5DEB\u5C71"
    }, {
      "id": 823,
      "spell": "wuwei",
      "name": "\u65E0\u4E3A"
    }, {
      "id": 824,
      "spell": "wuxi",
      "name": "\u5DEB\u6EAA"
    }, {
      "id": 825,
      "spell": "wuyi",
      "name": "\u6B66\u4E49"
    }, {
      "id": 826,
      "spell": "wuyishan",
      "name": "\u6B66\u5937\u5C71"
    }, {
      "id": 827,
      "spell": "wuyuan",
      "name": "\u5A7A\u6E90"
    }, {
      "id": 828,
      "spell": "wuzhi",
      "name": "\u6B66\u965F"
    }],
    "X": [{
      "id": 46,
      "spell": "xiamen",
      "name": "\u53A6\u95E8"
    }, {
      "id": 47,
      "spell": "xian",
      "name": "\u897F\u5B89"
    }, {
      "id": 48,
      "spell": "xuchang",
      "name": "\u8BB8\u660C"
    }, {
      "id": 49,
      "spell": "xuzhou",
      "name": "\u5F90\u5DDE"
    }, {
      "id": 282,
      "spell": "xiangfan",
      "name": "\u8944\u6A0A"
    }, {
      "id": 283,
      "spell": "xiangtan",
      "name": "\u6E58\u6F6D"
    }, {
      "id": 284,
      "spell": "xiangxi",
      "name": "\u6E58\u897F"
    }, {
      "id": 285,
      "spell": "xianning",
      "name": "\u54B8\u5B81"
    }, {
      "id": 286,
      "spell": "xianyang",
      "name": "\u54B8\u9633"
    }, {
      "id": 287,
      "spell": "xiaogan",
      "name": "\u5B5D\u611F"
    }, {
      "id": 288,
      "spell": "xilinguolemeng",
      "name": "\u9521\u6797\u90ED\u52D2\u76DF"
    }, {
      "id": 289,
      "spell": "xinganmeng",
      "name": "\u5174\u5B89\u76DF"
    }, {
      "id": 290,
      "spell": "xingtai",
      "name": "\u90A2\u53F0"
    }, {
      "id": 291,
      "spell": "xining",
      "name": "\u897F\u5B81"
    }, {
      "id": 292,
      "spell": "xinxiang",
      "name": "\u65B0\u4E61"
    }, {
      "id": 293,
      "spell": "xinyang",
      "name": "\u4FE1\u9633"
    }, {
      "id": 294,
      "spell": "xinyu",
      "name": "\u65B0\u4F59"
    }, {
      "id": 295,
      "spell": "xinzhou",
      "name": "\u5FFB\u5DDE"
    }, {
      "id": 296,
      "spell": "xishuangbanna",
      "name": "\u897F\u53CC\u7248\u7EB3"
    }, {
      "id": 297,
      "spell": "xuancheng",
      "name": "\u5BA3\u57CE"
    }, {
      "id": 829,
      "spell": "xiajiang",
      "name": "\u5CE1\u6C5F"
    }, {
      "id": 830,
      "spell": "xiajin",
      "name": "\u590F\u6D25"
    }, {
      "id": 831,
      "spell": "xiangshan",
      "name": "\u8C61\u5C71"
    }, {
      "id": 832,
      "spell": "xiangshui",
      "name": "\u54CD\u6C34"
    }, {
      "id": 833,
      "spell": "xianju",
      "name": "\u4ED9\u5C45"
    }, {
      "id": 834,
      "spell": "xianyou",
      "name": "\u4ED9\u6E38"
    }, {
      "id": 835,
      "spell": "xiaoxian",
      "name": "\u8427\u53BF"
    }, {
      "id": 836,
      "spell": "xiapu",
      "name": "\u971E\u6D66"
    }, {
      "id": 837,
      "spell": "xifeng",
      "name": "\u606F\u70FD"
    }, {
      "id": 838,
      "spell": "xinan",
      "name": "\u65B0\u5B89"
    }, {
      "id": 839,
      "spell": "xinchang",
      "name": "\u65B0\u660C"
    }, {
      "id": 840,
      "spell": "xinfeng",
      "name": "\u4FE1\u4E30"
    }, {
      "id": 841,
      "spell": "xinfeng",
      "name": "\u65B0\u4E30"
    }, {
      "id": 842,
      "spell": "xingan",
      "name": "\u65B0\u5E72"
    }, {
      "id": 843,
      "spell": "xingguo",
      "name": "\u5174\u56FD"
    }, {
      "id": 844,
      "spell": "xinghua",
      "name": "\u5174\u5316"
    }, {
      "id": 845,
      "spell": "xingning",
      "name": "\u5174\u5B81"
    }, {
      "id": 846,
      "spell": "xingtang",
      "name": "\u884C\u5510"
    }, {
      "id": 847,
      "spell": "xingyang",
      "name": "\u8365\u9633"
    }, {
      "id": 848,
      "spell": "xingzi",
      "name": "\u661F\u5B50"
    }, {
      "id": 849,
      "spell": "xinji",
      "name": "\u8F9B\u96C6"
    }, {
      "id": 850,
      "spell": "xinjian",
      "name": "\u65B0\u5EFA"
    }, {
      "id": 851,
      "spell": "xinjin",
      "name": "\u65B0\u6D25"
    }, {
      "id": 852,
      "spell": "xinle",
      "name": "\u65B0\u4E50"
    }, {
      "id": 853,
      "spell": "xinmin",
      "name": "\u65B0\u6C11"
    }, {
      "id": 854,
      "spell": "xinmi",
      "name": "\u65B0\u5BC6"
    }, {
      "id": 855,
      "spell": "xintai",
      "name": "\u65B0\u6CF0"
    }, {
      "id": 856,
      "spell": "xinxing",
      "name": "\u65B0\u5174"
    }, {
      "id": 857,
      "spell": "xinyi",
      "name": "\u65B0\u6C82"
    }, {
      "id": 858,
      "spell": "xinyi",
      "name": "\u4FE1\u5B9C"
    }, {
      "id": 859,
      "spell": "xinzheng",
      "name": "\u65B0\u90D1"
    }, {
      "id": 860,
      "spell": "xiuning",
      "name": "\u4F11\u5B81"
    }, {
      "id": 861,
      "spell": "xiushan",
      "name": "\u79C0\u5C71"
    }, {
      "id": 862,
      "spell": "xiushui",
      "name": "\u4FEE\u6C34"
    }, {
      "id": 863,
      "spell": "xiuwen",
      "name": "\u4FEE\u6587"
    }, {
      "id": 864,
      "spell": "xiuwu",
      "name": "\u4FEE\u6B66"
    }, {
      "id": 865,
      "spell": "xundian",
      "name": "\u5BFB\u7538"
    }, {
      "id": 866,
      "spell": "xunwu",
      "name": "\u5BFB\u4E4C"
    }, {
      "id": 867,
      "spell": "xuwen",
      "name": "\u5F90\u95FB"
    }, {
      "id": 868,
      "spell": "xuyi",
      "name": "\u76F1\u7719"
    }],
    "Y": [{
      "id": 50,
      "spell": "yangzhou",
      "name": "\u626C\u5DDE"
    }, {
      "id": 51,
      "spell": "yantai",
      "name": "\u70DF\u53F0"
    }, {
      "id": 298,
      "spell": "yaan",
      "name": "\u96C5\u5B89"
    }, {
      "id": 299,
      "spell": "yanan",
      "name": "\u5EF6\u5B89"
    }, {
      "id": 300,
      "spell": "yanbian",
      "name": "\u5EF6\u8FB9"
    }, {
      "id": 301,
      "spell": "yancheng",
      "name": "\u76D0\u57CE"
    }, {
      "id": 302,
      "spell": "yangjiang",
      "name": "\u9633\u6C5F"
    }, {
      "id": 303,
      "spell": "yangquan",
      "name": "\u9633\u6CC9"
    }, {
      "id": 304,
      "spell": "yibin",
      "name": "\u5B9C\u5BBE"
    }, {
      "id": 305,
      "spell": "yichang",
      "name": "\u5B9C\u660C"
    }, {
      "id": 306,
      "spell": "yichun",
      "name": "\u4F0A\u6625"
    }, {
      "id": 307,
      "spell": "yichun",
      "name": "\u5B9C\u6625"
    }, {
      "id": 308,
      "spell": "yilihasake",
      "name": "\u4F0A\u7281\u54C8\u8428\u514B"
    }, {
      "id": 309,
      "spell": "yinchuan",
      "name": "\u94F6\u5DDD"
    }, {
      "id": 310,
      "spell": "yingkou",
      "name": "\u8425\u53E3"
    }, {
      "id": 311,
      "spell": "yingtan",
      "name": "\u9E70\u6F6D"
    }, {
      "id": 312,
      "spell": "yiyang",
      "name": "\u76CA\u9633"
    }, {
      "id": 313,
      "spell": "yongzhou",
      "name": "\u6C38\u5DDE"
    }, {
      "id": 314,
      "spell": "yueyang",
      "name": "\u5CB3\u9633"
    }, {
      "id": 315,
      "spell": "yulin",
      "name": "\u7389\u6797"
    }, {
      "id": 316,
      "spell": "yulin",
      "name": "\u6986\u6797"
    }, {
      "id": 317,
      "spell": "yuncheng",
      "name": "\u8FD0\u57CE"
    }, {
      "id": 318,
      "spell": "yunfu",
      "name": "\u4E91\u6D6E"
    }, {
      "id": 319,
      "spell": "yushu",
      "name": "\u7389\u6811"
    }, {
      "id": 320,
      "spell": "yuxi",
      "name": "\u7389\u6EAA"
    }, {
      "id": 869,
      "spell": "yangchun",
      "name": "\u9633\u6625"
    }, {
      "id": 870,
      "spell": "yangdong",
      "name": "\u9633\u4E1C"
    }, {
      "id": 871,
      "spell": "yanggu",
      "name": "\u9633\u8C37"
    }, {
      "id": 872,
      "spell": "yangshan",
      "name": "\u9633\u5C71"
    }, {
      "id": 873,
      "spell": "yangxin",
      "name": "\u9633\u4FE1"
    }, {
      "id": 874,
      "spell": "yangxi",
      "name": "\u9633\u897F"
    }, {
      "id": 875,
      "spell": "yangzhong",
      "name": "\u626C\u4E2D"
    }, {
      "id": 876,
      "spell": "yanshi",
      "name": "\u5043\u5E08"
    }, {
      "id": 877,
      "spell": "yanshou",
      "name": "\u5EF6\u5BFF"
    }, {
      "id": 878,
      "spell": "yanzhou",
      "name": "\u5156\u5DDE"
    }, {
      "id": 879,
      "spell": "yichuan",
      "name": "\u4F0A\u5DDD"
    }, {
      "id": 880,
      "spell": "yifeng",
      "name": "\u5B9C\u4E30"
    }, {
      "id": 881,
      "spell": "yihuang",
      "name": "\u5B9C\u9EC4"
    }, {
      "id": 882,
      "spell": "yilan",
      "name": "\u4F9D\u5170"
    }, {
      "id": 883,
      "spell": "yiliang",
      "name": "\u5B9C\u826F"
    }, {
      "id": 884,
      "spell": "yinan",
      "name": "\u6C82\u5357"
    }, {
      "id": 885,
      "spell": "yingde",
      "name": "\u82F1\u5FB7"
    }, {
      "id": 886,
      "spell": "yingshang",
      "name": "\u988D\u4E0A"
    }, {
      "id": 887,
      "spell": "yishui",
      "name": "\u6C82\u6C34"
    }, {
      "id": 888,
      "spell": "yiwu",
      "name": "\u4E49\u4E4C"
    }, {
      "id": 889,
      "spell": "yixian",
      "name": "\u9EDF\u53BF"
    }, {
      "id": 890,
      "spell": "yixing",
      "name": "\u5B9C\u5174"
    }, {
      "id": 891,
      "spell": "yiyang",
      "name": "\u5F0B\u9633"
    }, {
      "id": 892,
      "spell": "yiyang",
      "name": "\u5B9C\u9633"
    }, {
      "id": 893,
      "spell": "yiyuan",
      "name": "\u6C82\u6E90"
    }, {
      "id": 894,
      "spell": "yizheng",
      "name": "\u4EEA\u5F81"
    }, {
      "id": 895,
      "spell": "yongan",
      "name": "\u6C38\u5B89"
    }, {
      "id": 896,
      "spell": "yongchuan",
      "name": "\u6C38\u5DDD"
    }, {
      "id": 897,
      "spell": "yongchun",
      "name": "\u6C38\u6625"
    }, {
      "id": 898,
      "spell": "yongdeng",
      "name": "\u6C38\u767B"
    }, {
      "id": 899,
      "spell": "yongding",
      "name": "\u6C38\u5B9A"
    }, {
      "id": 900,
      "spell": "yongfeng",
      "name": "\u6C38\u4E30"
    }, {
      "id": 901,
      "spell": "yongji",
      "name": "\u6C38\u5409"
    }, {
      "id": 902,
      "spell": "yongjia",
      "name": "\u6C38\u5609"
    }, {
      "id": 903,
      "spell": "yongkang",
      "name": "\u6C38\u5EB7"
    }, {
      "id": 904,
      "spell": "yongning",
      "name": "\u9095\u5B81"
    }, {
      "id": 905,
      "spell": "yongtai",
      "name": "\u6C38\u6CF0"
    }, {
      "id": 906,
      "spell": "yongxin",
      "name": "\u6C38\u65B0"
    }, {
      "id": 907,
      "spell": "yongxiu",
      "name": "\u6C38\u4FEE"
    }, {
      "id": 908,
      "spell": "youxi",
      "name": "\u5C24\u6EAA"
    }, {
      "id": 909,
      "spell": "youyang",
      "name": "\u9149\u9633"
    }, {
      "id": 910,
      "spell": "yuanshi",
      "name": "\u5143\u6C0F"
    }, {
      "id": 911,
      "spell": "yucheng",
      "name": "\u79B9\u57CE"
    }, {
      "id": 912,
      "spell": "yudu",
      "name": "\u4E8E\u90FD"
    }, {
      "id": 913,
      "spell": "yuexi",
      "name": "\u5CB3\u897F"
    }, {
      "id": 914,
      "spell": "yugan",
      "name": "\u4F59\u5E72"
    }, {
      "id": 915,
      "spell": "yuhuan",
      "name": "\u7389\u73AF"
    }, {
      "id": 916,
      "spell": "yujiang",
      "name": "\u4F59\u6C5F"
    }, {
      "id": 917,
      "spell": "yunan",
      "name": "\u90C1\u5357"
    }, {
      "id": 918,
      "spell": "yunan",
      "name": "\u4E91\u5B89"
    }, {
      "id": 919,
      "spell": "yuncheng",
      "name": "\u90D3\u57CE"
    }, {
      "id": 920,
      "spell": "yunhe",
      "name": "\u4E91\u548C"
    }, {
      "id": 921,
      "spell": "yunxiao",
      "name": "\u4E91\u9704"
    }, {
      "id": 922,
      "spell": "yunyang",
      "name": "\u4E91\u9633"
    }, {
      "id": 923,
      "spell": "yushan",
      "name": "\u7389\u5C71"
    }, {
      "id": 924,
      "spell": "yushu",
      "name": "\u6986\u6811"
    }, {
      "id": 925,
      "spell": "yutai",
      "name": "\u9C7C\u53F0"
    }, {
      "id": 926,
      "spell": "yutian",
      "name": "\u7389\u7530"
    }, {
      "id": 927,
      "spell": "yuyao",
      "name": "\u4F59\u59DA"
    }, {
      "id": 928,
      "spell": "yuzhong",
      "name": "\u6986\u4E2D"
    }],
    "Z": [{
      "id": 52,
      "spell": "zhangzhou",
      "name": "\u6F33\u5DDE"
    }, {
      "id": 53,
      "spell": "zhengzhou",
      "name": "\u90D1\u5DDE"
    }, {
      "id": 54,
      "spell": "zhongshan",
      "name": "\u4E2D\u5C71"
    }, {
      "id": 55,
      "spell": "zhuhai",
      "name": "\u73E0\u6D77"
    }, {
      "id": 321,
      "spell": "zaozhuang",
      "name": "\u67A3\u5E84"
    }, {
      "id": 322,
      "spell": "zhangjiajie",
      "name": "\u5F20\u5BB6\u754C"
    }, {
      "id": 323,
      "spell": "zhangjiakou",
      "name": "\u5F20\u5BB6\u53E3"
    }, {
      "id": 324,
      "spell": "zhangye",
      "name": "\u5F20\u6396"
    }, {
      "id": 325,
      "spell": "zhanjiang",
      "name": "\u6E5B\u6C5F"
    }, {
      "id": 326,
      "spell": "zhaoqing",
      "name": "\u8087\u5E86"
    }, {
      "id": 327,
      "spell": "zhaotong",
      "name": "\u662D\u901A"
    }, {
      "id": 328,
      "spell": "zhenjiang",
      "name": "\u9547\u6C5F"
    }, {
      "id": 329,
      "spell": "zhongwei",
      "name": "\u4E2D\u536B"
    }, {
      "id": 330,
      "spell": "zhoukou",
      "name": "\u5468\u53E3"
    }, {
      "id": 331,
      "spell": "zhoushan",
      "name": "\u821F\u5C71"
    }, {
      "id": 332,
      "spell": "zhumadian",
      "name": "\u9A7B\u9A6C\u5E97"
    }, {
      "id": 333,
      "spell": "zhuzhou",
      "name": "\u682A\u6D32"
    }, {
      "id": 334,
      "spell": "zibo",
      "name": "\u6DC4\u535A"
    }, {
      "id": 335,
      "spell": "zigong",
      "name": "\u81EA\u8D21"
    }, {
      "id": 336,
      "spell": "ziyang",
      "name": "\u8D44\u9633"
    }, {
      "id": 337,
      "spell": "zunyi",
      "name": "\u9075\u4E49"
    }, {
      "id": 929,
      "spell": "zanhuang",
      "name": "\u8D5E\u7687"
    }, {
      "id": 930,
      "spell": "zengcheng",
      "name": "\u589E\u57CE"
    }, {
      "id": 931,
      "spell": "zhangjiagang",
      "name": "\u5F20\u5BB6\u6E2F"
    }, {
      "id": 932,
      "spell": "zhangping",
      "name": "\u6F33\u5E73"
    }, {
      "id": 933,
      "spell": "zhangpu",
      "name": "\u6F33\u6D66"
    }, {
      "id": 934,
      "spell": "zhangqiu",
      "name": "\u7AE0\u4E18"
    }, {
      "id": 935,
      "spell": "zhangshu",
      "name": "\u6A1F\u6811"
    }, {
      "id": 936,
      "spell": "zhanhua",
      "name": "\u6CBE\u5316"
    }, {
      "id": 937,
      "spell": "zhaoxian",
      "name": "\u8D75\u53BF"
    }, {
      "id": 938,
      "spell": "zhaoyuan",
      "name": "\u62DB\u8FDC"
    }, {
      "id": 939,
      "spell": "zhengding",
      "name": "\u6B63\u5B9A"
    }, {
      "id": 940,
      "spell": "zhenghe",
      "name": "\u653F\u548C"
    }, {
      "id": 941,
      "spell": "zherong",
      "name": "\u67D8\u8363"
    }, {
      "id": 942,
      "spell": "zhongmou",
      "name": "\u4E2D\u725F"
    }, {
      "id": 943,
      "spell": "zhongxian",
      "name": "\u5FE0\u53BF"
    }, {
      "id": 944,
      "spell": "zhouning",
      "name": "\u5468\u5B81"
    }, {
      "id": 945,
      "spell": "zhouzhi",
      "name": "\u5468\u81F3"
    }, {
      "id": 946,
      "spell": "zhuanghe",
      "name": "\u5E84\u6CB3"
    }, {
      "id": 947,
      "spell": "zhucheng",
      "name": "\u8BF8\u57CE"
    }, {
      "id": 948,
      "spell": "zhuji",
      "name": "\u8BF8\u66A8"
    }, {
      "id": 949,
      "spell": "zijin",
      "name": "\u7D2B\u91D1"
    }, {
      "id": 950,
      "spell": "zixi",
      "name": "\u8D44\u6EAA"
    }, {
      "id": 951,
      "spell": "zoucheng",
      "name": "\u90B9\u57CE"
    }, {
      "id": 952,
      "spell": "zouping",
      "name": "\u90B9\u5E73"
    }, {
      "id": 953,
      "spell": "zunhua",
      "name": "\u9075\u5316"
    }]
  }
};
const A = [
  {
    name: "\u5B89\u5FBD",
    id: "A",
    data: [
      "\u5408\u80A5",
      "\u829C\u6E56",
      "\u868C\u57E0",
      "\u6DEE\u5357",
      "\u9A6C\u978D\u5C71",
      "\u6DEE\u5317",
      "\u94DC\u9675",
      "\u5B89\u5E86",
      "\u9EC4\u5C71",
      "\u6EC1\u5DDE",
      "\u961C\u9633",
      "\u5BBF\u5DDE",
      "\u516D\u5B89",
      "\u4EB3\u5DDE",
      "\u6C60\u5DDE",
      "\u5BA3\u57CE"
    ]
  }
];
const C = [
  {
    name: "\u91CD\u5E86",
    id: "C",
    data: [
      "\u4E07\u5DDE",
      "\u6DAA\u9675",
      "\u6E1D\u4E2D",
      "\u5927\u6E21\u53E3",
      "\u6C5F\u5317",
      "\u6C99\u576A\u575D",
      "\u4E5D\u9F99\u5761",
      "\u5357\u5CB8",
      "\u5317\u789A",
      "\u7DA6\u6C5F",
      "\u5927\u8DB3",
      "\u6E1D\u5317",
      "\u5DF4\u5357",
      "\u9ED4\u6C5F",
      "\u957F\u5BFF",
      "\u6C5F\u6D25",
      "\u5408\u5DDD",
      "\u6C38\u5DDD",
      "\u5357\u5DDD",
      "\u74A7\u5C71",
      "\u94DC\u6881",
      "\u6F7C\u5357",
      "\u8363\u660C",
      "\u5F00\u5DDE",
      "\u6881\u5E73",
      "\u6B66\u9686",
      "\u57CE\u53E3\u53BF",
      "\u4E30\u90FD\u53BF",
      "\u57AB\u6C5F\u53BF",
      "\u5FE0\u53BF",
      "\u4E91\u9633\u53BF",
      "\u5949\u8282\u53BF",
      "\u5DEB\u5C71\u53BF",
      "\u5DEB\u6EAA\u53BF",
      "\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
      "\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      "\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      "\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
    ]
  }
];
const F = [
  {
    name: "\u798F\u5EFA",
    id: "F",
    data: [
      "\u798F\u5DDE",
      "\u53A6\u95E8",
      "\u8386\u7530",
      "\u4E09\u660E",
      "\u6CC9\u5DDE",
      "\u6F33\u5DDE",
      "\u5357\u5E73",
      "\u9F99\u5CA9",
      "\u5B81\u5FB7"
    ]
  }
];
const G = [
  {
    name: "\u5E7F\u4E1C",
    id: "G",
    data: [
      "\u5E7F\u5DDE",
      "\u97F6\u5173",
      "\u6DF1\u5733",
      "\u73E0\u6D77",
      "\u6C55\u5934",
      "\u4F5B\u5C71",
      "\u6C5F\u95E8",
      "\u6E5B\u6C5F",
      "\u8302\u540D",
      "\u8087\u5E86",
      "\u60E0\u5DDE",
      "\u6885\u5DDE",
      "\u6C55\u5C3E",
      "\u6CB3\u6E90",
      "\u9633\u6C5F",
      "\u6E05\u8FDC",
      "\u4E1C\u839E",
      "\u4E2D\u5C71",
      "\u6F6E\u5DDE",
      "\u63ED\u9633",
      "\u4E91\u6D6E"
    ]
  },
  {
    name: "\u5E7F\u897F",
    data: [
      "\u5357\u5B81",
      "\u67F3\u5DDE",
      "\u6842\u6797",
      "\u68A7\u5DDE",
      "\u5317\u6D77",
      "\u9632\u57CE\u6E2F",
      "\u94A6\u5DDE",
      "\u8D35\u6E2F",
      "\u7389\u6797",
      "\u767E\u8272",
      "\u8D3A\u5DDE",
      "\u6CB3\u6C60",
      "\u6765\u5BBE",
      "\u5D07\u5DE6"
    ]
  },
  {
    name: "\u8D35\u5DDE",
    data: [
      "\u8D35\u9633",
      "\u516D\u76D8\u6C34",
      "\u9075\u4E49",
      "\u5B89\u987A",
      "\u6BD5\u8282",
      "\u94DC\u4EC1",
      "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",
      "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
    ]
  },
  {
    name: "\u7518\u8083",
    data: [
      "\u5170\u5DDE",
      "\u5609\u5CEA\u5173",
      "\u91D1\u660C",
      "\u767D\u94F6",
      "\u5929\u6C34",
      "\u6B66\u5A01",
      "\u5F20\u6396",
      "\u5E73\u51C9",
      "\u9152\u6CC9",
      "\u5E86\u9633",
      "\u5B9A\u897F",
      "\u9647\u5357",
      "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",
      "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
    ]
  }
];
const H = [
  {
    name: "\u6CB3\u5317",
    id: "H",
    data: [
      "\u77F3\u5BB6\u5E84",
      "\u5510\u5C71",
      "\u79E6\u7687\u5C9B",
      "\u90AF\u90F8",
      "\u90A2\u53F0",
      "\u4FDD\u5B9A",
      "\u5F20\u5BB6\u53E3",
      "\u627F\u5FB7",
      "\u6CA7\u5DDE",
      "\u5ECA\u574A",
      "\u8861\u6C34"
    ]
  },
  {
    name: "\u9ED1\u9F99\u6C5F",
    data: [
      "\u54C8\u5C14\u6EE8",
      "\u9F50\u9F50\u54C8\u5C14",
      "\u9E21\u897F",
      "\u9E64\u5C97",
      "\u53CC\u9E2D\u5C71",
      "\u5927\u5E86",
      "\u4F0A\u6625",
      "\u4F73\u6728\u65AF",
      "\u4E03\u53F0\u6CB3",
      "\u7261\u4E39\u6C5F",
      "\u9ED1\u6CB3",
      "\u7EE5\u5316",
      "\u5927\u5174\u5B89\u5CAD\u5730"
    ]
  },
  {
    name: "\u6CB3\u5357",
    data: [
      "\u90D1\u5DDE",
      "\u5F00\u5C01",
      "\u6D1B\u9633",
      "\u5E73\u9876\u5C71",
      "\u5B89\u9633",
      "\u9E64\u58C1",
      "\u65B0\u4E61",
      "\u7126\u4F5C",
      "\u6FEE\u9633",
      "\u8BB8\u660C",
      "\u6F2F\u6CB3",
      "\u4E09\u95E8\u5CE1",
      "\u5357\u9633",
      "\u5546\u4E18",
      "\u4FE1\u9633",
      "\u5468\u53E3",
      "\u9A7B\u9A6C\u5E97",
      "\u6D4E\u6E90"
    ]
  },
  {
    name: "\u6E56\u5317",
    data: [
      "\u6B66\u6C49",
      "\u9EC4\u77F3",
      "\u5341\u5830",
      "\u5B9C\u660C",
      "\u8944\u9633",
      "\u9102\u5DDE",
      "\u8346\u95E8",
      "\u5B5D\u611F",
      "\u8346\u5DDE",
      "\u9EC4\u5188",
      "\u54B8\u5B81",
      "\u968F\u5DDE",
      "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      "\u4ED9\u6843",
      "\u6F5C\u6C5F",
      "\u5929\u95E8",
      "\u795E\u519C\u67B6\u6797"
    ]
  },
  {
    name: "\u6E56\u5357",
    data: [
      "\u957F\u6C99",
      "\u682A\u6D32",
      "\u6E58\u6F6D",
      "\u8861\u9633",
      "\u90B5\u9633",
      "\u5CB3\u9633",
      "\u5E38\u5FB7",
      "\u5F20\u5BB6\u754C",
      "\u76CA\u9633",
      "\u90F4\u5DDE",
      "\u6C38\u5DDE",
      "\u6000\u5316",
      "\u5A04\u5E95",
      "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
    ]
  },
  {
    name: "\u6D77\u5357",
    data: [
      "\u6D77\u53E3",
      "\u4E09\u4E9A",
      "\u4E09\u6C99",
      "\u510B\u5DDE",
      "\u4E94\u6307\u5C71",
      "\u743C\u6D77",
      "\u6587\u660C",
      "\u4E07\u5B81",
      "\u4E1C\u65B9",
      "\u5B9A\u5B89\u53BF",
      "\u5C6F\u660C\u53BF",
      "\u6F84\u8FC8\u53BF",
      "\u4E34\u9AD8\u53BF",
      "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
    ]
  }
];
const J = [
  {
    name: "\u5409\u6797",
    id: "J",
    data: [
      "\u957F\u6625",
      "\u5409\u6797",
      "\u56DB\u5E73",
      "\u8FBD\u6E90",
      "\u901A\u5316",
      "\u767D\u5C71",
      "\u677E\u539F",
      "\u767D\u57CE",
      "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE"
    ]
  },
  {
    name: "\u6C5F\u82CF",
    data: [
      "\u5357\u4EAC",
      "\u65E0\u9521",
      "\u5F90\u5DDE",
      "\u5E38\u5DDE",
      "\u82CF\u5DDE",
      "\u5357\u901A",
      "\u8FDE\u4E91\u6E2F",
      "\u6DEE\u5B89",
      "\u76D0\u57CE",
      "\u626C\u5DDE",
      "\u9547\u6C5F",
      "\u6CF0\u5DDE",
      "\u5BBF\u8FC1"
    ]
  },
  {
    name: "\u6C5F\u897F",
    data: [
      "\u5357\u660C",
      "\u666F\u5FB7\u9547",
      "\u840D\u4E61",
      "\u4E5D\u6C5F",
      "\u65B0\u4F59",
      "\u9E70\u6F6D",
      "\u8D63\u5DDE",
      "\u5409\u5B89",
      "\u5B9C\u6625",
      "\u629A\u5DDE",
      "\u4E0A\u9976"
    ]
  }
];
const L = [
  {
    name: "\u8FBD\u5B81",
    id: "L",
    data: [
      "\u6C88\u9633",
      "\u5927\u8FDE",
      "\u978D\u5C71",
      "\u629A\u987A",
      "\u672C\u6EAA",
      "\u4E39\u4E1C",
      "\u9526\u5DDE",
      "\u8425\u53E3",
      "\u961C\u65B0",
      "\u8FBD\u9633",
      "\u76D8\u9526",
      "\u94C1\u5CAD",
      "\u671D\u9633",
      "\u846B\u82A6\u5C9B"
    ]
  }
];
const N = [
  {
    name: "\u5185\u8499\u53E4",
    id: "N",
    data: [
      "\u547C\u548C\u6D69\u7279",
      "\u5305\u5934",
      "\u4E4C\u6D77",
      "\u8D64\u5CF0",
      "\u901A\u8FBD",
      "\u9102\u5C14\u591A\u65AF",
      "\u547C\u4F26\u8D1D\u5C14",
      "\u5DF4\u5F66\u6DD6\u5C14",
      "\u4E4C\u5170\u5BDF\u5E03",
      "\u5174\u5B89\u76DF",
      "\u9521\u6797\u90ED\u52D2\u76DF",
      "\u963F\u62C9\u5584\u76DF"
    ]
  },
  {
    name: "\u5B81\u590F",
    data: [
      "\u94F6\u5DDD",
      "\u77F3\u5634\u5C71",
      "\u5434\u5FE0",
      "\u56FA\u539F",
      "\u4E2D\u536B"
    ]
  }
];
const Q = [
  {
    name: "\u9752\u6D77",
    id: "Q",
    data: [
      "\u897F\u5B81",
      "\u6D77\u4E1C",
      "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE"
    ]
  }
];
const S = [
  {
    name: "\u5C71\u897F",
    id: "S",
    data: [
      "\u592A\u539F",
      "\u5927\u540C",
      "\u9633\u6CC9",
      "\u957F\u6CBB",
      "\u664B\u57CE",
      "\u6714\u5DDE",
      "\u664B\u4E2D",
      "\u8FD0\u57CE",
      "\u5FFB\u5DDE",
      "\u4E34\u6C7E",
      "\u5415\u6881"
    ]
  },
  {
    name: "\u4E0A\u6D77",
    data: [
      "\u9EC4\u6D66",
      "\u5F90\u6C47",
      "\u957F\u5B81",
      "\u9759\u5B89",
      "\u666E\u9640",
      "\u8679\u53E3",
      "\u6768\u6D66",
      "\u95F5\u884C",
      "\u5B9D\u5C71",
      "\u5609\u5B9A",
      "\u6D66\u4E1C\u65B0",
      "\u91D1\u5C71",
      "\u677E\u6C5F",
      "\u9752\u6D66",
      "\u5949\u8D24",
      "\u5D07\u660E"
    ]
  },
  {
    name: "\u5C71\u4E1C",
    data: [
      "\u6D4E\u5357",
      "\u9752\u5C9B",
      "\u6DC4\u535A",
      "\u67A3\u5E84",
      "\u4E1C\u8425",
      "\u70DF\u53F0",
      "\u6F4D\u574A",
      "\u6D4E\u5B81",
      "\u6CF0\u5B89",
      "\u5A01\u6D77",
      "\u65E5\u7167",
      "\u4E34\u6C82",
      "\u5FB7\u5DDE",
      "\u804A\u57CE",
      "\u6EE8\u5DDE",
      "\u83CF\u6CFD"
    ]
  },
  {
    name: "\u56DB\u5DDD",
    data: [
      "\u6210\u90FD",
      "\u81EA\u8D21",
      "\u6500\u679D\u82B1",
      "\u6CF8\u5DDE",
      "\u5FB7\u9633",
      "\u7EF5\u9633",
      "\u5E7F\u5143",
      "\u9042\u5B81",
      "\u5185\u6C5F",
      "\u4E50\u5C71",
      "\u5357\u5145",
      "\u7709\u5C71",
      "\u5B9C\u5BBE",
      "\u5E7F\u5B89",
      "\u8FBE\u5DDE",
      "\u96C5\u5B89",
      "\u5DF4\u4E2D",
      "\u8D44\u9633",
      "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",
      "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
    ]
  },
  {
    name: "\u9655\u897F",
    data: [
      "\u897F\u5B89",
      "\u94DC\u5DDD",
      "\u5B9D\u9E21",
      "\u54B8\u9633",
      "\u6E2D\u5357",
      "\u5EF6\u5B89",
      "\u6C49\u4E2D",
      "\u6986\u6797",
      "\u5B89\u5EB7",
      "\u5546\u6D1B"
    ]
  }
];
const T = [
  {
    name: "\u5929\u6D25",
    id: "T",
    data: [
      "\u548C\u5E73",
      "\u6CB3\u4E1C",
      "\u6CB3\u897F",
      "\u5357\u5F00",
      "\u6CB3\u5317",
      "\u7EA2\u6865",
      "\u4E1C\u4E3D",
      "\u897F\u9752",
      "\u6D25\u5357",
      "\u5317\u8FB0",
      "\u6B66\u6E05",
      "\u5B9D\u577B",
      "\u6EE8\u6D77\u65B0",
      "\u5B81\u6CB3",
      "\u9759\u6D77",
      "\u84DF\u5DDE"
    ]
  }
];
const X = [
  {
    name: "\u897F\u85CF",
    id: "X",
    data: [
      "\u62C9\u8428",
      "\u65E5\u5580\u5219",
      "\u660C\u90FD",
      "\u6797\u829D",
      "\u5C71\u5357",
      "\u90A3\u66F2",
      "\u963F\u91CC\u5730"
    ]
  },
  {
    name: "\u65B0\u7586",
    data: [
      "\u4E4C\u9C81\u6728\u9F50",
      "\u514B\u62C9\u739B\u4F9D",
      "\u5410\u9C81\u756A",
      "\u54C8\u5BC6",
      "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",
      "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",
      "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",
      "\u963F\u514B\u82CF\u5730",
      "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",
      "\u5580\u4EC0\u5730",
      "\u548C\u7530\u5730",
      "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",
      "\u5854\u57CE\u5730",
      "\u963F\u52D2\u6CF0\u5730",
      "\u77F3\u6CB3\u5B50",
      "\u963F\u62C9\u5C14",
      "\u56FE\u6728\u8212\u514B",
      "\u4E94\u5BB6\u6E20",
      "\u5317\u5C6F",
      "\u94C1\u95E8\u5173",
      "\u53CC\u6CB3",
      "\u53EF\u514B\u8FBE\u62C9",
      "\u6606\u7389",
      "\u80E1\u6768\u6CB3"
    ]
  }
];
const Y = [
  {
    name: "\u4E91\u5357",
    id: "Y",
    data: [
      "\u6606\u660E",
      "\u66F2\u9756",
      "\u7389\u6EAA",
      "\u4FDD\u5C71",
      "\u662D\u901A",
      "\u4E3D\u6C5F",
      "\u666E\u6D31",
      "\u4E34\u6CA7",
      "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
      "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
      "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",
      "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",
      "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",
      "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",
      "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE"
    ]
  }
];
const Z = [
  {
    name: "\u6D59\u6C5F",
    id: "Z",
    data: [
      "\u676D\u5DDE",
      "\u5B81\u6CE2",
      "\u6E29\u5DDE",
      "\u5609\u5174",
      "\u6E56\u5DDE",
      "\u7ECD\u5174",
      "\u91D1\u534E",
      "\u8862\u5DDE",
      "\u821F\u5C71",
      "\u53F0\u5DDE",
      "\u4E3D\u6C34"
    ]
  }
];
var province = {
  A,
  C,
  F,
  G,
  H,
  J,
  L,
  N,
  Q,
  S,
  T,
  X,
  Y,
  Z,
  "\u76F4\u8F96\u5E02": [
    {
      name: "\u76F4\u8F96\u5E02",
      id: "\u76F4\u8F96\u5E02",
      data: [
        "\u5317\u4EAC",
        "\u5929\u6D25",
        "\u4E0A\u6D77",
        "\u91CD\u5E86"
      ]
    }
  ],
  "\u6E2F\u6FB3": [
    {
      name: "\u6E2F\u6FB3",
      id: "\u6E2F\u6FB3",
      data: [
        "\u9999\u6E2F",
        "\u6FB3\u95E8"
      ]
    }
  ]
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "result" };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "city" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "province" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["changeCity", "changeProvince"],
  setup(__props, { emit: emits }) {
    let result = ref("\u8BF7\u9009\u62E9");
    let visible = ref(false);
    let radioValue = ref("\u6309\u57CE\u5E02");
    let selectValue = ref("");
    let options = ref([]);
    let cities = ref(city.cities);
    let provinces = ref(province);
    let allCity = ref([]);
    let clickItem = (item) => {
      result.value = item.name;
      visible.value = false;
      emits("changeCity", item);
    };
    let clickProvince = (item) => {
      result.value = item;
      visible.value = false;
      emits("changeProvince", item);
    };
    let clickChat = (item) => {
      let el = document.getElementById(item);
      if (el)
        el.scrollIntoView();
    };
    let filterMethod = (val) => {
      let values = Object.values(cities.value).flat(2);
      if (val === "") {
        options.value = values;
      } else {
        if (radioValue.value === "\u6309\u57CE\u5E02") {
          options.value = values.filter((item) => {
            return item.name.includes(val) || item.spell.includes(val);
          });
        } else {
          options.value = values.filter((item) => {
            return item.name.includes(val);
          });
        }
      }
    };
    let changeSelect = (val) => {
      let city2 = allCity.value.find((item) => item.id === val);
      result.value = city2.name;
      if (radioValue.value === "\u6309\u57CE\u5E02") {
        emits("changeCity", city2);
      } else {
        emits("changeProvince", city2.name);
      }
    };
    onMounted(() => {
      let values = Object.values(cities.value).flat(2);
      allCity.value = values;
      options.value = values;
    });
    return (_ctx, _cache) => {
      const _component_el_icon_arrowdown = resolveComponent("el-icon-arrowdown");
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_scrollbar = resolveComponent("el-scrollbar");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        visible: unref(visible),
        "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => isRef(visible) ? visible.value = $event : visible = $event),
        placement: "bottom-start",
        width: 480,
        trigger: "click"
      }, {
        reference: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", null, toDisplayString(unref(result)), 1),
            createElementVNode("div", null, [
              createVNode(_component_el_icon_arrowdown, {
                class: normalizeClass({ "rotate": unref(visible) })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_2, [
            createVNode(_component_el_row, null, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 8 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(radioValue),
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(radioValue) ? radioValue.value = $event : radioValue = $event),
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio_button, { label: "\u6309\u57CE\u5E02" }),
                        createVNode(_component_el_radio_button, { label: "\u6309\u7701\u4EFD" })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, {
                  offset: 1,
                  span: 15
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      onChange: unref(changeSelect),
                      placeholder: "\u8BF7\u641C\u7D22\u57CE\u5E02",
                      size: "small",
                      modelValue: unref(selectValue),
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selectValue) ? selectValue.value = $event : selectValue = $event),
                      filterable: "",
                      "filter-method": unref(filterMethod)
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.id,
                            label: item.name,
                            value: item.id
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["onChange", "modelValue", "filter-method"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            unref(radioValue) === "\u6309\u57CE\u5E02" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createElementVNode("div", _hoisted_3, [
                createCommentVNode('  <div v-for="(value, key) in cities">{{key}}</div> '),
                createCommentVNode(" \u5B57\u6BCD\u533A\u57DF "),
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(cities)), (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    class: "city-item",
                    onClick: ($event) => unref(clickChat)(item),
                    key: index2
                  }, toDisplayString(item), 9, _hoisted_4);
                }), 128))
              ]),
              createVNode(_component_el_scrollbar, { "max-height": "300px" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(cities), (value, key) => {
                    return openBlock(), createBlock(_component_el_row, {
                      key,
                      style: { "margin-bottom": "10px" },
                      id: key
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_col, { span: 2 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(key) + ":", 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_el_col, {
                          span: 22,
                          class: "city-name"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(value, (item) => {
                              return openBlock(), createElementBlock("div", {
                                onClick: ($event) => unref(clickItem)(item),
                                class: "city-name-item",
                                key: item.id
                              }, [
                                createElementVNode("div", null, toDisplayString(item.name), 1)
                              ], 8, _hoisted_5);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["id"]);
                  }), 128))
                ]),
                _: 1
              })
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createElementVNode("div", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(provinces)), (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    class: "province-item",
                    key: index2,
                    onClick: ($event) => unref(clickChat)(item)
                  }, toDisplayString(item), 9, _hoisted_7);
                }), 128))
              ]),
              createVNode(_component_el_scrollbar, { "max-height": "300px" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(unref(provinces)), (item, index2) => {
                    return openBlock(), createElementBlock(Fragment, { key: index2 }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item, (item1, index1) => {
                        return openBlock(), createBlock(_component_el_row, {
                          key: index1,
                          style: { "margin-bottom": "10px" },
                          id: item1.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_col, { span: 3 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item1.name) + ":", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_el_col, {
                              span: 21,
                              class: "province-name"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(item1.data, (item2, index22) => {
                                  return openBlock(), createElementBlock("div", {
                                    class: "province-name-item",
                                    key: index22
                                  }, [
                                    createElementVNode("div", {
                                      onClick: ($event) => unref(clickProvince)(item2)
                                    }, toDisplayString(item2), 9, _hoisted_8)
                                  ]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["id"]);
                      }), 128))
                    ], 64);
                  }), 128))
                ]),
                _: 1
              })
            ], 64))
          ])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
});
var chooseCity$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-29441af1"]]);
var chooseCity = {
  install(app) {
    app.component("n-choose-city", chooseCity$1);
  }
};
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
var modalForm = {
  install(app) {
    app.component("n-modal-form", _sfc_main);
  }
};
const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  chooseCity,
  progress,
  modalForm
];
const install = (app) => {
  components.map((item) => {
    app.use(item);
  });
};
var index = {
  install
};
export { chooseArea, chooseCity, chooseIcon, index as default, install, list, menu, modalForm, notification, progress, trend };
