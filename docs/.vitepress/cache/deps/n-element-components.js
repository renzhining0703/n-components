import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentScope,
  guardReactiveProps,
  init_vue_runtime_esm_bundler,
  isRef,
  isVNode,
  mergeProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  openBlock,
  ref,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useAttrs,
  useSlots,
  vShow,
  warn,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-2JTJ26FZ.js";

// node_modules/.pnpm/n-element-components@1.0.6/node_modules/n-element-components/index.es.js
init_vue_runtime_esm_bundler();
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
var allAreas = [
  {
    code: "11",
    name: "北京市",
    children: [
      {
        code: "1101",
        name: "市辖区",
        children: [
          {
            code: "110101",
            name: "东城区"
          },
          {
            code: "110102",
            name: "西城区"
          },
          {
            code: "110105",
            name: "朝阳区"
          },
          {
            code: "110106",
            name: "丰台区"
          },
          {
            code: "110107",
            name: "石景山区"
          },
          {
            code: "110108",
            name: "海淀区"
          },
          {
            code: "110109",
            name: "门头沟区"
          },
          {
            code: "110111",
            name: "房山区"
          },
          {
            code: "110112",
            name: "通州区"
          },
          {
            code: "110113",
            name: "顺义区"
          },
          {
            code: "110114",
            name: "昌平区"
          },
          {
            code: "110115",
            name: "大兴区"
          },
          {
            code: "110116",
            name: "怀柔区"
          },
          {
            code: "110117",
            name: "平谷区"
          },
          {
            code: "110118",
            name: "密云区"
          },
          {
            code: "110119",
            name: "延庆区"
          }
        ]
      }
    ]
  },
  {
    code: "12",
    name: "天津市",
    children: [
      {
        code: "1201",
        name: "市辖区",
        children: [
          {
            code: "120101",
            name: "和平区"
          },
          {
            code: "120102",
            name: "河东区"
          },
          {
            code: "120103",
            name: "河西区"
          },
          {
            code: "120104",
            name: "南开区"
          },
          {
            code: "120105",
            name: "河北区"
          },
          {
            code: "120106",
            name: "红桥区"
          },
          {
            code: "120110",
            name: "东丽区"
          },
          {
            code: "120111",
            name: "西青区"
          },
          {
            code: "120112",
            name: "津南区"
          },
          {
            code: "120113",
            name: "北辰区"
          },
          {
            code: "120114",
            name: "武清区"
          },
          {
            code: "120115",
            name: "宝坻区"
          },
          {
            code: "120116",
            name: "滨海新区"
          },
          {
            code: "120117",
            name: "宁河区"
          },
          {
            code: "120118",
            name: "静海区"
          },
          {
            code: "120119",
            name: "蓟州区"
          }
        ]
      }
    ]
  },
  {
    code: "13",
    name: "河北省",
    children: [
      {
        code: "1301",
        name: "石家庄市",
        children: [
          {
            code: "130102",
            name: "长安区"
          },
          {
            code: "130104",
            name: "桥西区"
          },
          {
            code: "130105",
            name: "新华区"
          },
          {
            code: "130107",
            name: "井陉矿区"
          },
          {
            code: "130108",
            name: "裕华区"
          },
          {
            code: "130109",
            name: "藁城区"
          },
          {
            code: "130110",
            name: "鹿泉区"
          },
          {
            code: "130111",
            name: "栾城区"
          },
          {
            code: "130121",
            name: "井陉县"
          },
          {
            code: "130123",
            name: "正定县"
          },
          {
            code: "130125",
            name: "行唐县"
          },
          {
            code: "130126",
            name: "灵寿县"
          },
          {
            code: "130127",
            name: "高邑县"
          },
          {
            code: "130128",
            name: "深泽县"
          },
          {
            code: "130129",
            name: "赞皇县"
          },
          {
            code: "130130",
            name: "无极县"
          },
          {
            code: "130131",
            name: "平山县"
          },
          {
            code: "130132",
            name: "元氏县"
          },
          {
            code: "130133",
            name: "赵县"
          },
          {
            code: "130171",
            name: "石家庄高新技术产业开发区"
          },
          {
            code: "130172",
            name: "石家庄循环化工园区"
          },
          {
            code: "130181",
            name: "辛集市"
          },
          {
            code: "130183",
            name: "晋州市"
          },
          {
            code: "130184",
            name: "新乐市"
          }
        ]
      },
      {
        code: "1302",
        name: "唐山市",
        children: [
          {
            code: "130202",
            name: "路南区"
          },
          {
            code: "130203",
            name: "路北区"
          },
          {
            code: "130204",
            name: "古冶区"
          },
          {
            code: "130205",
            name: "开平区"
          },
          {
            code: "130207",
            name: "丰南区"
          },
          {
            code: "130208",
            name: "丰润区"
          },
          {
            code: "130209",
            name: "曹妃甸区"
          },
          {
            code: "130224",
            name: "滦南县"
          },
          {
            code: "130225",
            name: "乐亭县"
          },
          {
            code: "130227",
            name: "迁西县"
          },
          {
            code: "130229",
            name: "玉田县"
          },
          {
            code: "130271",
            name: "河北唐山芦台经济开发区"
          },
          {
            code: "130272",
            name: "唐山市汉沽管理区"
          },
          {
            code: "130273",
            name: "唐山高新技术产业开发区"
          },
          {
            code: "130274",
            name: "河北唐山海港经济开发区"
          },
          {
            code: "130281",
            name: "遵化市"
          },
          {
            code: "130283",
            name: "迁安市"
          },
          {
            code: "130284",
            name: "滦州市"
          }
        ]
      },
      {
        code: "1303",
        name: "秦皇岛市",
        children: [
          {
            code: "130302",
            name: "海港区"
          },
          {
            code: "130303",
            name: "山海关区"
          },
          {
            code: "130304",
            name: "北戴河区"
          },
          {
            code: "130306",
            name: "抚宁区"
          },
          {
            code: "130321",
            name: "青龙满族自治县"
          },
          {
            code: "130322",
            name: "昌黎县"
          },
          {
            code: "130324",
            name: "卢龙县"
          },
          {
            code: "130371",
            name: "秦皇岛市经济技术开发区"
          },
          {
            code: "130372",
            name: "北戴河新区"
          }
        ]
      },
      {
        code: "1304",
        name: "邯郸市",
        children: [
          {
            code: "130402",
            name: "邯山区"
          },
          {
            code: "130403",
            name: "丛台区"
          },
          {
            code: "130404",
            name: "复兴区"
          },
          {
            code: "130406",
            name: "峰峰矿区"
          },
          {
            code: "130407",
            name: "肥乡区"
          },
          {
            code: "130408",
            name: "永年区"
          },
          {
            code: "130423",
            name: "临漳县"
          },
          {
            code: "130424",
            name: "成安县"
          },
          {
            code: "130425",
            name: "大名县"
          },
          {
            code: "130426",
            name: "涉县"
          },
          {
            code: "130427",
            name: "磁县"
          },
          {
            code: "130430",
            name: "邱县"
          },
          {
            code: "130431",
            name: "鸡泽县"
          },
          {
            code: "130432",
            name: "广平县"
          },
          {
            code: "130433",
            name: "馆陶县"
          },
          {
            code: "130434",
            name: "魏县"
          },
          {
            code: "130435",
            name: "曲周县"
          },
          {
            code: "130471",
            name: "邯郸经济技术开发区"
          },
          {
            code: "130473",
            name: "邯郸冀南新区"
          },
          {
            code: "130481",
            name: "武安市"
          }
        ]
      },
      {
        code: "1305",
        name: "邢台市",
        children: [
          {
            code: "130502",
            name: "襄都区"
          },
          {
            code: "130503",
            name: "信都区"
          },
          {
            code: "130505",
            name: "任泽区"
          },
          {
            code: "130506",
            name: "南和区"
          },
          {
            code: "130522",
            name: "临城县"
          },
          {
            code: "130523",
            name: "内丘县"
          },
          {
            code: "130524",
            name: "柏乡县"
          },
          {
            code: "130525",
            name: "隆尧县"
          },
          {
            code: "130528",
            name: "宁晋县"
          },
          {
            code: "130529",
            name: "巨鹿县"
          },
          {
            code: "130530",
            name: "新河县"
          },
          {
            code: "130531",
            name: "广宗县"
          },
          {
            code: "130532",
            name: "平乡县"
          },
          {
            code: "130533",
            name: "威县"
          },
          {
            code: "130534",
            name: "清河县"
          },
          {
            code: "130535",
            name: "临西县"
          },
          {
            code: "130571",
            name: "河北邢台经济开发区"
          },
          {
            code: "130581",
            name: "南宫市"
          },
          {
            code: "130582",
            name: "沙河市"
          }
        ]
      },
      {
        code: "1306",
        name: "保定市",
        children: [
          {
            code: "130602",
            name: "竞秀区"
          },
          {
            code: "130606",
            name: "莲池区"
          },
          {
            code: "130607",
            name: "满城区"
          },
          {
            code: "130608",
            name: "清苑区"
          },
          {
            code: "130609",
            name: "徐水区"
          },
          {
            code: "130623",
            name: "涞水县"
          },
          {
            code: "130624",
            name: "阜平县"
          },
          {
            code: "130626",
            name: "定兴县"
          },
          {
            code: "130627",
            name: "唐县"
          },
          {
            code: "130628",
            name: "高阳县"
          },
          {
            code: "130629",
            name: "容城县"
          },
          {
            code: "130630",
            name: "涞源县"
          },
          {
            code: "130631",
            name: "望都县"
          },
          {
            code: "130632",
            name: "安新县"
          },
          {
            code: "130633",
            name: "易县"
          },
          {
            code: "130634",
            name: "曲阳县"
          },
          {
            code: "130635",
            name: "蠡县"
          },
          {
            code: "130636",
            name: "顺平县"
          },
          {
            code: "130637",
            name: "博野县"
          },
          {
            code: "130638",
            name: "雄县"
          },
          {
            code: "130671",
            name: "保定高新技术产业开发区"
          },
          {
            code: "130672",
            name: "保定白沟新城"
          },
          {
            code: "130681",
            name: "涿州市"
          },
          {
            code: "130682",
            name: "定州市"
          },
          {
            code: "130683",
            name: "安国市"
          },
          {
            code: "130684",
            name: "高碑店市"
          }
        ]
      },
      {
        code: "1307",
        name: "张家口市",
        children: [
          {
            code: "130702",
            name: "桥东区"
          },
          {
            code: "130703",
            name: "桥西区"
          },
          {
            code: "130705",
            name: "宣化区"
          },
          {
            code: "130706",
            name: "下花园区"
          },
          {
            code: "130708",
            name: "万全区"
          },
          {
            code: "130709",
            name: "崇礼区"
          },
          {
            code: "130722",
            name: "张北县"
          },
          {
            code: "130723",
            name: "康保县"
          },
          {
            code: "130724",
            name: "沽源县"
          },
          {
            code: "130725",
            name: "尚义县"
          },
          {
            code: "130726",
            name: "蔚县"
          },
          {
            code: "130727",
            name: "阳原县"
          },
          {
            code: "130728",
            name: "怀安县"
          },
          {
            code: "130730",
            name: "怀来县"
          },
          {
            code: "130731",
            name: "涿鹿县"
          },
          {
            code: "130732",
            name: "赤城县"
          },
          {
            code: "130771",
            name: "张家口经济开发区"
          },
          {
            code: "130772",
            name: "张家口市察北管理区"
          },
          {
            code: "130773",
            name: "张家口市塞北管理区"
          }
        ]
      },
      {
        code: "1308",
        name: "承德市",
        children: [
          {
            code: "130802",
            name: "双桥区"
          },
          {
            code: "130803",
            name: "双滦区"
          },
          {
            code: "130804",
            name: "鹰手营子矿区"
          },
          {
            code: "130821",
            name: "承德县"
          },
          {
            code: "130822",
            name: "兴隆县"
          },
          {
            code: "130824",
            name: "滦平县"
          },
          {
            code: "130825",
            name: "隆化县"
          },
          {
            code: "130826",
            name: "丰宁满族自治县"
          },
          {
            code: "130827",
            name: "宽城满族自治县"
          },
          {
            code: "130828",
            name: "围场满族蒙古族自治县"
          },
          {
            code: "130871",
            name: "承德高新技术产业开发区"
          },
          {
            code: "130881",
            name: "平泉市"
          }
        ]
      },
      {
        code: "1309",
        name: "沧州市",
        children: [
          {
            code: "130902",
            name: "新华区"
          },
          {
            code: "130903",
            name: "运河区"
          },
          {
            code: "130921",
            name: "沧县"
          },
          {
            code: "130922",
            name: "青县"
          },
          {
            code: "130923",
            name: "东光县"
          },
          {
            code: "130924",
            name: "海兴县"
          },
          {
            code: "130925",
            name: "盐山县"
          },
          {
            code: "130926",
            name: "肃宁县"
          },
          {
            code: "130927",
            name: "南皮县"
          },
          {
            code: "130928",
            name: "吴桥县"
          },
          {
            code: "130929",
            name: "献县"
          },
          {
            code: "130930",
            name: "孟村回族自治县"
          },
          {
            code: "130971",
            name: "河北沧州经济开发区"
          },
          {
            code: "130972",
            name: "沧州高新技术产业开发区"
          },
          {
            code: "130973",
            name: "沧州渤海新区"
          },
          {
            code: "130981",
            name: "泊头市"
          },
          {
            code: "130982",
            name: "任丘市"
          },
          {
            code: "130983",
            name: "黄骅市"
          },
          {
            code: "130984",
            name: "河间市"
          }
        ]
      },
      {
        code: "1310",
        name: "廊坊市",
        children: [
          {
            code: "131002",
            name: "安次区"
          },
          {
            code: "131003",
            name: "广阳区"
          },
          {
            code: "131022",
            name: "固安县"
          },
          {
            code: "131023",
            name: "永清县"
          },
          {
            code: "131024",
            name: "香河县"
          },
          {
            code: "131025",
            name: "大城县"
          },
          {
            code: "131026",
            name: "文安县"
          },
          {
            code: "131028",
            name: "大厂回族自治县"
          },
          {
            code: "131071",
            name: "廊坊经济技术开发区"
          },
          {
            code: "131081",
            name: "霸州市"
          },
          {
            code: "131082",
            name: "三河市"
          }
        ]
      },
      {
        code: "1311",
        name: "衡水市",
        children: [
          {
            code: "131102",
            name: "桃城区"
          },
          {
            code: "131103",
            name: "冀州区"
          },
          {
            code: "131121",
            name: "枣强县"
          },
          {
            code: "131122",
            name: "武邑县"
          },
          {
            code: "131123",
            name: "武强县"
          },
          {
            code: "131124",
            name: "饶阳县"
          },
          {
            code: "131125",
            name: "安平县"
          },
          {
            code: "131126",
            name: "故城县"
          },
          {
            code: "131127",
            name: "景县"
          },
          {
            code: "131128",
            name: "阜城县"
          },
          {
            code: "131171",
            name: "河北衡水高新技术产业开发区"
          },
          {
            code: "131172",
            name: "衡水滨湖新区"
          },
          {
            code: "131182",
            name: "深州市"
          }
        ]
      }
    ]
  },
  {
    code: "14",
    name: "山西省",
    children: [
      {
        code: "1401",
        name: "太原市",
        children: [
          {
            code: "140105",
            name: "小店区"
          },
          {
            code: "140106",
            name: "迎泽区"
          },
          {
            code: "140107",
            name: "杏花岭区"
          },
          {
            code: "140108",
            name: "尖草坪区"
          },
          {
            code: "140109",
            name: "万柏林区"
          },
          {
            code: "140110",
            name: "晋源区"
          },
          {
            code: "140121",
            name: "清徐县"
          },
          {
            code: "140122",
            name: "阳曲县"
          },
          {
            code: "140123",
            name: "娄烦县"
          },
          {
            code: "140171",
            name: "山西转型综合改革示范区"
          },
          {
            code: "140181",
            name: "古交市"
          }
        ]
      },
      {
        code: "1402",
        name: "大同市",
        children: [
          {
            code: "140212",
            name: "新荣区"
          },
          {
            code: "140213",
            name: "平城区"
          },
          {
            code: "140214",
            name: "云冈区"
          },
          {
            code: "140215",
            name: "云州区"
          },
          {
            code: "140221",
            name: "阳高县"
          },
          {
            code: "140222",
            name: "天镇县"
          },
          {
            code: "140223",
            name: "广灵县"
          },
          {
            code: "140224",
            name: "灵丘县"
          },
          {
            code: "140225",
            name: "浑源县"
          },
          {
            code: "140226",
            name: "左云县"
          },
          {
            code: "140271",
            name: "山西大同经济开发区"
          }
        ]
      },
      {
        code: "1403",
        name: "阳泉市",
        children: [
          {
            code: "140302",
            name: "城区"
          },
          {
            code: "140303",
            name: "矿区"
          },
          {
            code: "140311",
            name: "郊区"
          },
          {
            code: "140321",
            name: "平定县"
          },
          {
            code: "140322",
            name: "盂县"
          }
        ]
      },
      {
        code: "1404",
        name: "长治市",
        children: [
          {
            code: "140403",
            name: "潞州区"
          },
          {
            code: "140404",
            name: "上党区"
          },
          {
            code: "140405",
            name: "屯留区"
          },
          {
            code: "140406",
            name: "潞城区"
          },
          {
            code: "140423",
            name: "襄垣县"
          },
          {
            code: "140425",
            name: "平顺县"
          },
          {
            code: "140426",
            name: "黎城县"
          },
          {
            code: "140427",
            name: "壶关县"
          },
          {
            code: "140428",
            name: "长子县"
          },
          {
            code: "140429",
            name: "武乡县"
          },
          {
            code: "140430",
            name: "沁县"
          },
          {
            code: "140431",
            name: "沁源县"
          },
          {
            code: "140471",
            name: "山西长治高新技术产业园区"
          }
        ]
      },
      {
        code: "1405",
        name: "晋城市",
        children: [
          {
            code: "140502",
            name: "城区"
          },
          {
            code: "140521",
            name: "沁水县"
          },
          {
            code: "140522",
            name: "阳城县"
          },
          {
            code: "140524",
            name: "陵川县"
          },
          {
            code: "140525",
            name: "泽州县"
          },
          {
            code: "140581",
            name: "高平市"
          }
        ]
      },
      {
        code: "1406",
        name: "朔州市",
        children: [
          {
            code: "140602",
            name: "朔城区"
          },
          {
            code: "140603",
            name: "平鲁区"
          },
          {
            code: "140621",
            name: "山阴县"
          },
          {
            code: "140622",
            name: "应县"
          },
          {
            code: "140623",
            name: "右玉县"
          },
          {
            code: "140671",
            name: "山西朔州经济开发区"
          },
          {
            code: "140681",
            name: "怀仁市"
          }
        ]
      },
      {
        code: "1407",
        name: "晋中市",
        children: [
          {
            code: "140702",
            name: "榆次区"
          },
          {
            code: "140703",
            name: "太谷区"
          },
          {
            code: "140721",
            name: "榆社县"
          },
          {
            code: "140722",
            name: "左权县"
          },
          {
            code: "140723",
            name: "和顺县"
          },
          {
            code: "140724",
            name: "昔阳县"
          },
          {
            code: "140725",
            name: "寿阳县"
          },
          {
            code: "140727",
            name: "祁县"
          },
          {
            code: "140728",
            name: "平遥县"
          },
          {
            code: "140729",
            name: "灵石县"
          },
          {
            code: "140781",
            name: "介休市"
          }
        ]
      },
      {
        code: "1408",
        name: "运城市",
        children: [
          {
            code: "140802",
            name: "盐湖区"
          },
          {
            code: "140821",
            name: "临猗县"
          },
          {
            code: "140822",
            name: "万荣县"
          },
          {
            code: "140823",
            name: "闻喜县"
          },
          {
            code: "140824",
            name: "稷山县"
          },
          {
            code: "140825",
            name: "新绛县"
          },
          {
            code: "140826",
            name: "绛县"
          },
          {
            code: "140827",
            name: "垣曲县"
          },
          {
            code: "140828",
            name: "夏县"
          },
          {
            code: "140829",
            name: "平陆县"
          },
          {
            code: "140830",
            name: "芮城县"
          },
          {
            code: "140881",
            name: "永济市"
          },
          {
            code: "140882",
            name: "河津市"
          }
        ]
      },
      {
        code: "1409",
        name: "忻州市",
        children: [
          {
            code: "140902",
            name: "忻府区"
          },
          {
            code: "140921",
            name: "定襄县"
          },
          {
            code: "140922",
            name: "五台县"
          },
          {
            code: "140923",
            name: "代县"
          },
          {
            code: "140924",
            name: "繁峙县"
          },
          {
            code: "140925",
            name: "宁武县"
          },
          {
            code: "140926",
            name: "静乐县"
          },
          {
            code: "140927",
            name: "神池县"
          },
          {
            code: "140928",
            name: "五寨县"
          },
          {
            code: "140929",
            name: "岢岚县"
          },
          {
            code: "140930",
            name: "河曲县"
          },
          {
            code: "140931",
            name: "保德县"
          },
          {
            code: "140932",
            name: "偏关县"
          },
          {
            code: "140971",
            name: "五台山风景名胜区"
          },
          {
            code: "140981",
            name: "原平市"
          }
        ]
      },
      {
        code: "1410",
        name: "临汾市",
        children: [
          {
            code: "141002",
            name: "尧都区"
          },
          {
            code: "141021",
            name: "曲沃县"
          },
          {
            code: "141022",
            name: "翼城县"
          },
          {
            code: "141023",
            name: "襄汾县"
          },
          {
            code: "141024",
            name: "洪洞县"
          },
          {
            code: "141025",
            name: "古县"
          },
          {
            code: "141026",
            name: "安泽县"
          },
          {
            code: "141027",
            name: "浮山县"
          },
          {
            code: "141028",
            name: "吉县"
          },
          {
            code: "141029",
            name: "乡宁县"
          },
          {
            code: "141030",
            name: "大宁县"
          },
          {
            code: "141031",
            name: "隰县"
          },
          {
            code: "141032",
            name: "永和县"
          },
          {
            code: "141033",
            name: "蒲县"
          },
          {
            code: "141034",
            name: "汾西县"
          },
          {
            code: "141081",
            name: "侯马市"
          },
          {
            code: "141082",
            name: "霍州市"
          }
        ]
      },
      {
        code: "1411",
        name: "吕梁市",
        children: [
          {
            code: "141102",
            name: "离石区"
          },
          {
            code: "141121",
            name: "文水县"
          },
          {
            code: "141122",
            name: "交城县"
          },
          {
            code: "141123",
            name: "兴县"
          },
          {
            code: "141124",
            name: "临县"
          },
          {
            code: "141125",
            name: "柳林县"
          },
          {
            code: "141126",
            name: "石楼县"
          },
          {
            code: "141127",
            name: "岚县"
          },
          {
            code: "141128",
            name: "方山县"
          },
          {
            code: "141129",
            name: "中阳县"
          },
          {
            code: "141130",
            name: "交口县"
          },
          {
            code: "141181",
            name: "孝义市"
          },
          {
            code: "141182",
            name: "汾阳市"
          }
        ]
      }
    ]
  },
  {
    code: "15",
    name: "内蒙古自治区",
    children: [
      {
        code: "1501",
        name: "呼和浩特市",
        children: [
          {
            code: "150102",
            name: "新城区"
          },
          {
            code: "150103",
            name: "回民区"
          },
          {
            code: "150104",
            name: "玉泉区"
          },
          {
            code: "150105",
            name: "赛罕区"
          },
          {
            code: "150121",
            name: "土默特左旗"
          },
          {
            code: "150122",
            name: "托克托县"
          },
          {
            code: "150123",
            name: "和林格尔县"
          },
          {
            code: "150124",
            name: "清水河县"
          },
          {
            code: "150125",
            name: "武川县"
          },
          {
            code: "150172",
            name: "呼和浩特经济技术开发区"
          }
        ]
      },
      {
        code: "1502",
        name: "包头市",
        children: [
          {
            code: "150202",
            name: "东河区"
          },
          {
            code: "150203",
            name: "昆都仑区"
          },
          {
            code: "150204",
            name: "青山区"
          },
          {
            code: "150205",
            name: "石拐区"
          },
          {
            code: "150206",
            name: "白云鄂博矿区"
          },
          {
            code: "150207",
            name: "九原区"
          },
          {
            code: "150221",
            name: "土默特右旗"
          },
          {
            code: "150222",
            name: "固阳县"
          },
          {
            code: "150223",
            name: "达尔罕茂明安联合旗"
          },
          {
            code: "150271",
            name: "包头稀土高新技术产业开发区"
          }
        ]
      },
      {
        code: "1503",
        name: "乌海市",
        children: [
          {
            code: "150302",
            name: "海勃湾区"
          },
          {
            code: "150303",
            name: "海南区"
          },
          {
            code: "150304",
            name: "乌达区"
          }
        ]
      },
      {
        code: "1504",
        name: "赤峰市",
        children: [
          {
            code: "150402",
            name: "红山区"
          },
          {
            code: "150403",
            name: "元宝山区"
          },
          {
            code: "150404",
            name: "松山区"
          },
          {
            code: "150421",
            name: "阿鲁科尔沁旗"
          },
          {
            code: "150422",
            name: "巴林左旗"
          },
          {
            code: "150423",
            name: "巴林右旗"
          },
          {
            code: "150424",
            name: "林西县"
          },
          {
            code: "150425",
            name: "克什克腾旗"
          },
          {
            code: "150426",
            name: "翁牛特旗"
          },
          {
            code: "150428",
            name: "喀喇沁旗"
          },
          {
            code: "150429",
            name: "宁城县"
          },
          {
            code: "150430",
            name: "敖汉旗"
          }
        ]
      },
      {
        code: "1505",
        name: "通辽市",
        children: [
          {
            code: "150502",
            name: "科尔沁区"
          },
          {
            code: "150521",
            name: "科尔沁左翼中旗"
          },
          {
            code: "150522",
            name: "科尔沁左翼后旗"
          },
          {
            code: "150523",
            name: "开鲁县"
          },
          {
            code: "150524",
            name: "库伦旗"
          },
          {
            code: "150525",
            name: "奈曼旗"
          },
          {
            code: "150526",
            name: "扎鲁特旗"
          },
          {
            code: "150571",
            name: "通辽经济技术开发区"
          },
          {
            code: "150581",
            name: "霍林郭勒市"
          }
        ]
      },
      {
        code: "1506",
        name: "鄂尔多斯市",
        children: [
          {
            code: "150602",
            name: "东胜区"
          },
          {
            code: "150603",
            name: "康巴什区"
          },
          {
            code: "150621",
            name: "达拉特旗"
          },
          {
            code: "150622",
            name: "准格尔旗"
          },
          {
            code: "150623",
            name: "鄂托克前旗"
          },
          {
            code: "150624",
            name: "鄂托克旗"
          },
          {
            code: "150625",
            name: "杭锦旗"
          },
          {
            code: "150626",
            name: "乌审旗"
          },
          {
            code: "150627",
            name: "伊金霍洛旗"
          }
        ]
      },
      {
        code: "1507",
        name: "呼伦贝尔市",
        children: [
          {
            code: "150702",
            name: "海拉尔区"
          },
          {
            code: "150703",
            name: "扎赉诺尔区"
          },
          {
            code: "150721",
            name: "阿荣旗"
          },
          {
            code: "150722",
            name: "莫力达瓦达斡尔族自治旗"
          },
          {
            code: "150723",
            name: "鄂伦春自治旗"
          },
          {
            code: "150724",
            name: "鄂温克族自治旗"
          },
          {
            code: "150725",
            name: "陈巴尔虎旗"
          },
          {
            code: "150726",
            name: "新巴尔虎左旗"
          },
          {
            code: "150727",
            name: "新巴尔虎右旗"
          },
          {
            code: "150781",
            name: "满洲里市"
          },
          {
            code: "150782",
            name: "牙克石市"
          },
          {
            code: "150783",
            name: "扎兰屯市"
          },
          {
            code: "150784",
            name: "额尔古纳市"
          },
          {
            code: "150785",
            name: "根河市"
          }
        ]
      },
      {
        code: "1508",
        name: "巴彦淖尔市",
        children: [
          {
            code: "150802",
            name: "临河区"
          },
          {
            code: "150821",
            name: "五原县"
          },
          {
            code: "150822",
            name: "磴口县"
          },
          {
            code: "150823",
            name: "乌拉特前旗"
          },
          {
            code: "150824",
            name: "乌拉特中旗"
          },
          {
            code: "150825",
            name: "乌拉特后旗"
          },
          {
            code: "150826",
            name: "杭锦后旗"
          }
        ]
      },
      {
        code: "1509",
        name: "乌兰察布市",
        children: [
          {
            code: "150902",
            name: "集宁区"
          },
          {
            code: "150921",
            name: "卓资县"
          },
          {
            code: "150922",
            name: "化德县"
          },
          {
            code: "150923",
            name: "商都县"
          },
          {
            code: "150924",
            name: "兴和县"
          },
          {
            code: "150925",
            name: "凉城县"
          },
          {
            code: "150926",
            name: "察哈尔右翼前旗"
          },
          {
            code: "150927",
            name: "察哈尔右翼中旗"
          },
          {
            code: "150928",
            name: "察哈尔右翼后旗"
          },
          {
            code: "150929",
            name: "四子王旗"
          },
          {
            code: "150981",
            name: "丰镇市"
          }
        ]
      },
      {
        code: "1522",
        name: "兴安盟",
        children: [
          {
            code: "152201",
            name: "乌兰浩特市"
          },
          {
            code: "152202",
            name: "阿尔山市"
          },
          {
            code: "152221",
            name: "科尔沁右翼前旗"
          },
          {
            code: "152222",
            name: "科尔沁右翼中旗"
          },
          {
            code: "152223",
            name: "扎赉特旗"
          },
          {
            code: "152224",
            name: "突泉县"
          }
        ]
      },
      {
        code: "1525",
        name: "锡林郭勒盟",
        children: [
          {
            code: "152501",
            name: "二连浩特市"
          },
          {
            code: "152502",
            name: "锡林浩特市"
          },
          {
            code: "152522",
            name: "阿巴嘎旗"
          },
          {
            code: "152523",
            name: "苏尼特左旗"
          },
          {
            code: "152524",
            name: "苏尼特右旗"
          },
          {
            code: "152525",
            name: "东乌珠穆沁旗"
          },
          {
            code: "152526",
            name: "西乌珠穆沁旗"
          },
          {
            code: "152527",
            name: "太仆寺旗"
          },
          {
            code: "152528",
            name: "镶黄旗"
          },
          {
            code: "152529",
            name: "正镶白旗"
          },
          {
            code: "152530",
            name: "正蓝旗"
          },
          {
            code: "152531",
            name: "多伦县"
          },
          {
            code: "152571",
            name: "乌拉盖管委会"
          }
        ]
      },
      {
        code: "1529",
        name: "阿拉善盟",
        children: [
          {
            code: "152921",
            name: "阿拉善左旗"
          },
          {
            code: "152922",
            name: "阿拉善右旗"
          },
          {
            code: "152923",
            name: "额济纳旗"
          },
          {
            code: "152971",
            name: "内蒙古阿拉善经济开发区"
          }
        ]
      }
    ]
  },
  {
    code: "21",
    name: "辽宁省",
    children: [
      {
        code: "2101",
        name: "沈阳市",
        children: [
          {
            code: "210102",
            name: "和平区"
          },
          {
            code: "210103",
            name: "沈河区"
          },
          {
            code: "210104",
            name: "大东区"
          },
          {
            code: "210105",
            name: "皇姑区"
          },
          {
            code: "210106",
            name: "铁西区"
          },
          {
            code: "210111",
            name: "苏家屯区"
          },
          {
            code: "210112",
            name: "浑南区"
          },
          {
            code: "210113",
            name: "沈北新区"
          },
          {
            code: "210114",
            name: "于洪区"
          },
          {
            code: "210115",
            name: "辽中区"
          },
          {
            code: "210123",
            name: "康平县"
          },
          {
            code: "210124",
            name: "法库县"
          },
          {
            code: "210181",
            name: "新民市"
          }
        ]
      },
      {
        code: "2102",
        name: "大连市",
        children: [
          {
            code: "210202",
            name: "中山区"
          },
          {
            code: "210203",
            name: "西岗区"
          },
          {
            code: "210204",
            name: "沙河口区"
          },
          {
            code: "210211",
            name: "甘井子区"
          },
          {
            code: "210212",
            name: "旅顺口区"
          },
          {
            code: "210213",
            name: "金州区"
          },
          {
            code: "210214",
            name: "普兰店区"
          },
          {
            code: "210224",
            name: "长海县"
          },
          {
            code: "210281",
            name: "瓦房店市"
          },
          {
            code: "210283",
            name: "庄河市"
          }
        ]
      },
      {
        code: "2103",
        name: "鞍山市",
        children: [
          {
            code: "210302",
            name: "铁东区"
          },
          {
            code: "210303",
            name: "铁西区"
          },
          {
            code: "210304",
            name: "立山区"
          },
          {
            code: "210311",
            name: "千山区"
          },
          {
            code: "210321",
            name: "台安县"
          },
          {
            code: "210323",
            name: "岫岩满族自治县"
          },
          {
            code: "210381",
            name: "海城市"
          }
        ]
      },
      {
        code: "2104",
        name: "抚顺市",
        children: [
          {
            code: "210402",
            name: "新抚区"
          },
          {
            code: "210403",
            name: "东洲区"
          },
          {
            code: "210404",
            name: "望花区"
          },
          {
            code: "210411",
            name: "顺城区"
          },
          {
            code: "210421",
            name: "抚顺县"
          },
          {
            code: "210422",
            name: "新宾满族自治县"
          },
          {
            code: "210423",
            name: "清原满族自治县"
          }
        ]
      },
      {
        code: "2105",
        name: "本溪市",
        children: [
          {
            code: "210502",
            name: "平山区"
          },
          {
            code: "210503",
            name: "溪湖区"
          },
          {
            code: "210504",
            name: "明山区"
          },
          {
            code: "210505",
            name: "南芬区"
          },
          {
            code: "210521",
            name: "本溪满族自治县"
          },
          {
            code: "210522",
            name: "桓仁满族自治县"
          }
        ]
      },
      {
        code: "2106",
        name: "丹东市",
        children: [
          {
            code: "210602",
            name: "元宝区"
          },
          {
            code: "210603",
            name: "振兴区"
          },
          {
            code: "210604",
            name: "振安区"
          },
          {
            code: "210624",
            name: "宽甸满族自治县"
          },
          {
            code: "210681",
            name: "东港市"
          },
          {
            code: "210682",
            name: "凤城市"
          }
        ]
      },
      {
        code: "2107",
        name: "锦州市",
        children: [
          {
            code: "210702",
            name: "古塔区"
          },
          {
            code: "210703",
            name: "凌河区"
          },
          {
            code: "210711",
            name: "太和区"
          },
          {
            code: "210726",
            name: "黑山县"
          },
          {
            code: "210727",
            name: "义县"
          },
          {
            code: "210781",
            name: "凌海市"
          },
          {
            code: "210782",
            name: "北镇市"
          }
        ]
      },
      {
        code: "2108",
        name: "营口市",
        children: [
          {
            code: "210802",
            name: "站前区"
          },
          {
            code: "210803",
            name: "西市区"
          },
          {
            code: "210804",
            name: "鲅鱼圈区"
          },
          {
            code: "210811",
            name: "老边区"
          },
          {
            code: "210881",
            name: "盖州市"
          },
          {
            code: "210882",
            name: "大石桥市"
          }
        ]
      },
      {
        code: "2109",
        name: "阜新市",
        children: [
          {
            code: "210902",
            name: "海州区"
          },
          {
            code: "210903",
            name: "新邱区"
          },
          {
            code: "210904",
            name: "太平区"
          },
          {
            code: "210905",
            name: "清河门区"
          },
          {
            code: "210911",
            name: "细河区"
          },
          {
            code: "210921",
            name: "阜新蒙古族自治县"
          },
          {
            code: "210922",
            name: "彰武县"
          }
        ]
      },
      {
        code: "2110",
        name: "辽阳市",
        children: [
          {
            code: "211002",
            name: "白塔区"
          },
          {
            code: "211003",
            name: "文圣区"
          },
          {
            code: "211004",
            name: "宏伟区"
          },
          {
            code: "211005",
            name: "弓长岭区"
          },
          {
            code: "211011",
            name: "太子河区"
          },
          {
            code: "211021",
            name: "辽阳县"
          },
          {
            code: "211081",
            name: "灯塔市"
          }
        ]
      },
      {
        code: "2111",
        name: "盘锦市",
        children: [
          {
            code: "211102",
            name: "双台子区"
          },
          {
            code: "211103",
            name: "兴隆台区"
          },
          {
            code: "211104",
            name: "大洼区"
          },
          {
            code: "211122",
            name: "盘山县"
          }
        ]
      },
      {
        code: "2112",
        name: "铁岭市",
        children: [
          {
            code: "211202",
            name: "银州区"
          },
          {
            code: "211204",
            name: "清河区"
          },
          {
            code: "211221",
            name: "铁岭县"
          },
          {
            code: "211223",
            name: "西丰县"
          },
          {
            code: "211224",
            name: "昌图县"
          },
          {
            code: "211281",
            name: "调兵山市"
          },
          {
            code: "211282",
            name: "开原市"
          }
        ]
      },
      {
        code: "2113",
        name: "朝阳市",
        children: [
          {
            code: "211302",
            name: "双塔区"
          },
          {
            code: "211303",
            name: "龙城区"
          },
          {
            code: "211321",
            name: "朝阳县"
          },
          {
            code: "211322",
            name: "建平县"
          },
          {
            code: "211324",
            name: "喀喇沁左翼蒙古族自治县"
          },
          {
            code: "211381",
            name: "北票市"
          },
          {
            code: "211382",
            name: "凌源市"
          }
        ]
      },
      {
        code: "2114",
        name: "葫芦岛市",
        children: [
          {
            code: "211402",
            name: "连山区"
          },
          {
            code: "211403",
            name: "龙港区"
          },
          {
            code: "211404",
            name: "南票区"
          },
          {
            code: "211421",
            name: "绥中县"
          },
          {
            code: "211422",
            name: "建昌县"
          },
          {
            code: "211481",
            name: "兴城市"
          }
        ]
      }
    ]
  },
  {
    code: "22",
    name: "吉林省",
    children: [
      {
        code: "2201",
        name: "长春市",
        children: [
          {
            code: "220102",
            name: "南关区"
          },
          {
            code: "220103",
            name: "宽城区"
          },
          {
            code: "220104",
            name: "朝阳区"
          },
          {
            code: "220105",
            name: "二道区"
          },
          {
            code: "220106",
            name: "绿园区"
          },
          {
            code: "220112",
            name: "双阳区"
          },
          {
            code: "220113",
            name: "九台区"
          },
          {
            code: "220122",
            name: "农安县"
          },
          {
            code: "220171",
            name: "长春经济技术开发区"
          },
          {
            code: "220172",
            name: "长春净月高新技术产业开发区"
          },
          {
            code: "220173",
            name: "长春高新技术产业开发区"
          },
          {
            code: "220174",
            name: "长春汽车经济技术开发区"
          },
          {
            code: "220182",
            name: "榆树市"
          },
          {
            code: "220183",
            name: "德惠市"
          },
          {
            code: "220184",
            name: "公主岭市"
          }
        ]
      },
      {
        code: "2202",
        name: "吉林市",
        children: [
          {
            code: "220202",
            name: "昌邑区"
          },
          {
            code: "220203",
            name: "龙潭区"
          },
          {
            code: "220204",
            name: "船营区"
          },
          {
            code: "220211",
            name: "丰满区"
          },
          {
            code: "220221",
            name: "永吉县"
          },
          {
            code: "220271",
            name: "吉林经济开发区"
          },
          {
            code: "220272",
            name: "吉林高新技术产业开发区"
          },
          {
            code: "220273",
            name: "吉林中国新加坡食品区"
          },
          {
            code: "220281",
            name: "蛟河市"
          },
          {
            code: "220282",
            name: "桦甸市"
          },
          {
            code: "220283",
            name: "舒兰市"
          },
          {
            code: "220284",
            name: "磐石市"
          }
        ]
      },
      {
        code: "2203",
        name: "四平市",
        children: [
          {
            code: "220302",
            name: "铁西区"
          },
          {
            code: "220303",
            name: "铁东区"
          },
          {
            code: "220322",
            name: "梨树县"
          },
          {
            code: "220323",
            name: "伊通满族自治县"
          },
          {
            code: "220382",
            name: "双辽市"
          }
        ]
      },
      {
        code: "2204",
        name: "辽源市",
        children: [
          {
            code: "220402",
            name: "龙山区"
          },
          {
            code: "220403",
            name: "西安区"
          },
          {
            code: "220421",
            name: "东丰县"
          },
          {
            code: "220422",
            name: "东辽县"
          }
        ]
      },
      {
        code: "2205",
        name: "通化市",
        children: [
          {
            code: "220502",
            name: "东昌区"
          },
          {
            code: "220503",
            name: "二道江区"
          },
          {
            code: "220521",
            name: "通化县"
          },
          {
            code: "220523",
            name: "辉南县"
          },
          {
            code: "220524",
            name: "柳河县"
          },
          {
            code: "220581",
            name: "梅河口市"
          },
          {
            code: "220582",
            name: "集安市"
          }
        ]
      },
      {
        code: "2206",
        name: "白山市",
        children: [
          {
            code: "220602",
            name: "浑江区"
          },
          {
            code: "220605",
            name: "江源区"
          },
          {
            code: "220621",
            name: "抚松县"
          },
          {
            code: "220622",
            name: "靖宇县"
          },
          {
            code: "220623",
            name: "长白朝鲜族自治县"
          },
          {
            code: "220681",
            name: "临江市"
          }
        ]
      },
      {
        code: "2207",
        name: "松原市",
        children: [
          {
            code: "220702",
            name: "宁江区"
          },
          {
            code: "220721",
            name: "前郭尔罗斯蒙古族自治县"
          },
          {
            code: "220722",
            name: "长岭县"
          },
          {
            code: "220723",
            name: "乾安县"
          },
          {
            code: "220771",
            name: "吉林松原经济开发区"
          },
          {
            code: "220781",
            name: "扶余市"
          }
        ]
      },
      {
        code: "2208",
        name: "白城市",
        children: [
          {
            code: "220802",
            name: "洮北区"
          },
          {
            code: "220821",
            name: "镇赉县"
          },
          {
            code: "220822",
            name: "通榆县"
          },
          {
            code: "220871",
            name: "吉林白城经济开发区"
          },
          {
            code: "220881",
            name: "洮南市"
          },
          {
            code: "220882",
            name: "大安市"
          }
        ]
      },
      {
        code: "2224",
        name: "延边朝鲜族自治州",
        children: [
          {
            code: "222401",
            name: "延吉市"
          },
          {
            code: "222402",
            name: "图们市"
          },
          {
            code: "222403",
            name: "敦化市"
          },
          {
            code: "222404",
            name: "珲春市"
          },
          {
            code: "222405",
            name: "龙井市"
          },
          {
            code: "222406",
            name: "和龙市"
          },
          {
            code: "222424",
            name: "汪清县"
          },
          {
            code: "222426",
            name: "安图县"
          }
        ]
      }
    ]
  },
  {
    code: "23",
    name: "黑龙江省",
    children: [
      {
        code: "2301",
        name: "哈尔滨市",
        children: [
          {
            code: "230102",
            name: "道里区"
          },
          {
            code: "230103",
            name: "南岗区"
          },
          {
            code: "230104",
            name: "道外区"
          },
          {
            code: "230108",
            name: "平房区"
          },
          {
            code: "230109",
            name: "松北区"
          },
          {
            code: "230110",
            name: "香坊区"
          },
          {
            code: "230111",
            name: "呼兰区"
          },
          {
            code: "230112",
            name: "阿城区"
          },
          {
            code: "230113",
            name: "双城区"
          },
          {
            code: "230123",
            name: "依兰县"
          },
          {
            code: "230124",
            name: "方正县"
          },
          {
            code: "230125",
            name: "宾县"
          },
          {
            code: "230126",
            name: "巴彦县"
          },
          {
            code: "230127",
            name: "木兰县"
          },
          {
            code: "230128",
            name: "通河县"
          },
          {
            code: "230129",
            name: "延寿县"
          },
          {
            code: "230183",
            name: "尚志市"
          },
          {
            code: "230184",
            name: "五常市"
          }
        ]
      },
      {
        code: "2302",
        name: "齐齐哈尔市",
        children: [
          {
            code: "230202",
            name: "龙沙区"
          },
          {
            code: "230203",
            name: "建华区"
          },
          {
            code: "230204",
            name: "铁锋区"
          },
          {
            code: "230205",
            name: "昂昂溪区"
          },
          {
            code: "230206",
            name: "富拉尔基区"
          },
          {
            code: "230207",
            name: "碾子山区"
          },
          {
            code: "230208",
            name: "梅里斯达斡尔族区"
          },
          {
            code: "230221",
            name: "龙江县"
          },
          {
            code: "230223",
            name: "依安县"
          },
          {
            code: "230224",
            name: "泰来县"
          },
          {
            code: "230225",
            name: "甘南县"
          },
          {
            code: "230227",
            name: "富裕县"
          },
          {
            code: "230229",
            name: "克山县"
          },
          {
            code: "230230",
            name: "克东县"
          },
          {
            code: "230231",
            name: "拜泉县"
          },
          {
            code: "230281",
            name: "讷河市"
          }
        ]
      },
      {
        code: "2303",
        name: "鸡西市",
        children: [
          {
            code: "230302",
            name: "鸡冠区"
          },
          {
            code: "230303",
            name: "恒山区"
          },
          {
            code: "230304",
            name: "滴道区"
          },
          {
            code: "230305",
            name: "梨树区"
          },
          {
            code: "230306",
            name: "城子河区"
          },
          {
            code: "230307",
            name: "麻山区"
          },
          {
            code: "230321",
            name: "鸡东县"
          },
          {
            code: "230381",
            name: "虎林市"
          },
          {
            code: "230382",
            name: "密山市"
          }
        ]
      },
      {
        code: "2304",
        name: "鹤岗市",
        children: [
          {
            code: "230402",
            name: "向阳区"
          },
          {
            code: "230403",
            name: "工农区"
          },
          {
            code: "230404",
            name: "南山区"
          },
          {
            code: "230405",
            name: "兴安区"
          },
          {
            code: "230406",
            name: "东山区"
          },
          {
            code: "230407",
            name: "兴山区"
          },
          {
            code: "230421",
            name: "萝北县"
          },
          {
            code: "230422",
            name: "绥滨县"
          }
        ]
      },
      {
        code: "2305",
        name: "双鸭山市",
        children: [
          {
            code: "230502",
            name: "尖山区"
          },
          {
            code: "230503",
            name: "岭东区"
          },
          {
            code: "230505",
            name: "四方台区"
          },
          {
            code: "230506",
            name: "宝山区"
          },
          {
            code: "230521",
            name: "集贤县"
          },
          {
            code: "230522",
            name: "友谊县"
          },
          {
            code: "230523",
            name: "宝清县"
          },
          {
            code: "230524",
            name: "饶河县"
          }
        ]
      },
      {
        code: "2306",
        name: "大庆市",
        children: [
          {
            code: "230602",
            name: "萨尔图区"
          },
          {
            code: "230603",
            name: "龙凤区"
          },
          {
            code: "230604",
            name: "让胡路区"
          },
          {
            code: "230605",
            name: "红岗区"
          },
          {
            code: "230606",
            name: "大同区"
          },
          {
            code: "230621",
            name: "肇州县"
          },
          {
            code: "230622",
            name: "肇源县"
          },
          {
            code: "230623",
            name: "林甸县"
          },
          {
            code: "230624",
            name: "杜尔伯特蒙古族自治县"
          },
          {
            code: "230671",
            name: "大庆高新技术产业开发区"
          }
        ]
      },
      {
        code: "2307",
        name: "伊春市",
        children: [
          {
            code: "230717",
            name: "伊美区"
          },
          {
            code: "230718",
            name: "乌翠区"
          },
          {
            code: "230719",
            name: "友好区"
          },
          {
            code: "230722",
            name: "嘉荫县"
          },
          {
            code: "230723",
            name: "汤旺县"
          },
          {
            code: "230724",
            name: "丰林县"
          },
          {
            code: "230725",
            name: "大箐山县"
          },
          {
            code: "230726",
            name: "南岔县"
          },
          {
            code: "230751",
            name: "金林区"
          },
          {
            code: "230781",
            name: "铁力市"
          }
        ]
      },
      {
        code: "2308",
        name: "佳木斯市",
        children: [
          {
            code: "230803",
            name: "向阳区"
          },
          {
            code: "230804",
            name: "前进区"
          },
          {
            code: "230805",
            name: "东风区"
          },
          {
            code: "230811",
            name: "郊区"
          },
          {
            code: "230822",
            name: "桦南县"
          },
          {
            code: "230826",
            name: "桦川县"
          },
          {
            code: "230828",
            name: "汤原县"
          },
          {
            code: "230881",
            name: "同江市"
          },
          {
            code: "230882",
            name: "富锦市"
          },
          {
            code: "230883",
            name: "抚远市"
          }
        ]
      },
      {
        code: "2309",
        name: "七台河市",
        children: [
          {
            code: "230902",
            name: "新兴区"
          },
          {
            code: "230903",
            name: "桃山区"
          },
          {
            code: "230904",
            name: "茄子河区"
          },
          {
            code: "230921",
            name: "勃利县"
          }
        ]
      },
      {
        code: "2310",
        name: "牡丹江市",
        children: [
          {
            code: "231002",
            name: "东安区"
          },
          {
            code: "231003",
            name: "阳明区"
          },
          {
            code: "231004",
            name: "爱民区"
          },
          {
            code: "231005",
            name: "西安区"
          },
          {
            code: "231025",
            name: "林口县"
          },
          {
            code: "231071",
            name: "牡丹江经济技术开发区"
          },
          {
            code: "231081",
            name: "绥芬河市"
          },
          {
            code: "231083",
            name: "海林市"
          },
          {
            code: "231084",
            name: "宁安市"
          },
          {
            code: "231085",
            name: "穆棱市"
          },
          {
            code: "231086",
            name: "东宁市"
          }
        ]
      },
      {
        code: "2311",
        name: "黑河市",
        children: [
          {
            code: "231102",
            name: "爱辉区"
          },
          {
            code: "231123",
            name: "逊克县"
          },
          {
            code: "231124",
            name: "孙吴县"
          },
          {
            code: "231181",
            name: "北安市"
          },
          {
            code: "231182",
            name: "五大连池市"
          },
          {
            code: "231183",
            name: "嫩江市"
          }
        ]
      },
      {
        code: "2312",
        name: "绥化市",
        children: [
          {
            code: "231202",
            name: "北林区"
          },
          {
            code: "231221",
            name: "望奎县"
          },
          {
            code: "231222",
            name: "兰西县"
          },
          {
            code: "231223",
            name: "青冈县"
          },
          {
            code: "231224",
            name: "庆安县"
          },
          {
            code: "231225",
            name: "明水县"
          },
          {
            code: "231226",
            name: "绥棱县"
          },
          {
            code: "231281",
            name: "安达市"
          },
          {
            code: "231282",
            name: "肇东市"
          },
          {
            code: "231283",
            name: "海伦市"
          }
        ]
      },
      {
        code: "2327",
        name: "大兴安岭地区",
        children: [
          {
            code: "232701",
            name: "漠河市"
          },
          {
            code: "232721",
            name: "呼玛县"
          },
          {
            code: "232722",
            name: "塔河县"
          },
          {
            code: "232761",
            name: "加格达奇区"
          },
          {
            code: "232762",
            name: "松岭区"
          },
          {
            code: "232763",
            name: "新林区"
          },
          {
            code: "232764",
            name: "呼中区"
          }
        ]
      }
    ]
  },
  {
    code: "31",
    name: "上海市",
    children: [
      {
        code: "3101",
        name: "市辖区",
        children: [
          {
            code: "310101",
            name: "黄浦区"
          },
          {
            code: "310104",
            name: "徐汇区"
          },
          {
            code: "310105",
            name: "长宁区"
          },
          {
            code: "310106",
            name: "静安区"
          },
          {
            code: "310107",
            name: "普陀区"
          },
          {
            code: "310109",
            name: "虹口区"
          },
          {
            code: "310110",
            name: "杨浦区"
          },
          {
            code: "310112",
            name: "闵行区"
          },
          {
            code: "310113",
            name: "宝山区"
          },
          {
            code: "310114",
            name: "嘉定区"
          },
          {
            code: "310115",
            name: "浦东新区"
          },
          {
            code: "310116",
            name: "金山区"
          },
          {
            code: "310117",
            name: "松江区"
          },
          {
            code: "310118",
            name: "青浦区"
          },
          {
            code: "310120",
            name: "奉贤区"
          },
          {
            code: "310151",
            name: "崇明区"
          }
        ]
      }
    ]
  },
  {
    code: "32",
    name: "江苏省",
    children: [
      {
        code: "3201",
        name: "南京市",
        children: [
          {
            code: "320102",
            name: "玄武区"
          },
          {
            code: "320104",
            name: "秦淮区"
          },
          {
            code: "320105",
            name: "建邺区"
          },
          {
            code: "320106",
            name: "鼓楼区"
          },
          {
            code: "320111",
            name: "浦口区"
          },
          {
            code: "320113",
            name: "栖霞区"
          },
          {
            code: "320114",
            name: "雨花台区"
          },
          {
            code: "320115",
            name: "江宁区"
          },
          {
            code: "320116",
            name: "六合区"
          },
          {
            code: "320117",
            name: "溧水区"
          },
          {
            code: "320118",
            name: "高淳区"
          }
        ]
      },
      {
        code: "3202",
        name: "无锡市",
        children: [
          {
            code: "320205",
            name: "锡山区"
          },
          {
            code: "320206",
            name: "惠山区"
          },
          {
            code: "320211",
            name: "滨湖区"
          },
          {
            code: "320213",
            name: "梁溪区"
          },
          {
            code: "320214",
            name: "新吴区"
          },
          {
            code: "320281",
            name: "江阴市"
          },
          {
            code: "320282",
            name: "宜兴市"
          }
        ]
      },
      {
        code: "3203",
        name: "徐州市",
        children: [
          {
            code: "320302",
            name: "鼓楼区"
          },
          {
            code: "320303",
            name: "云龙区"
          },
          {
            code: "320305",
            name: "贾汪区"
          },
          {
            code: "320311",
            name: "泉山区"
          },
          {
            code: "320312",
            name: "铜山区"
          },
          {
            code: "320321",
            name: "丰县"
          },
          {
            code: "320322",
            name: "沛县"
          },
          {
            code: "320324",
            name: "睢宁县"
          },
          {
            code: "320371",
            name: "徐州经济技术开发区"
          },
          {
            code: "320381",
            name: "新沂市"
          },
          {
            code: "320382",
            name: "邳州市"
          }
        ]
      },
      {
        code: "3204",
        name: "常州市",
        children: [
          {
            code: "320402",
            name: "天宁区"
          },
          {
            code: "320404",
            name: "钟楼区"
          },
          {
            code: "320411",
            name: "新北区"
          },
          {
            code: "320412",
            name: "武进区"
          },
          {
            code: "320413",
            name: "金坛区"
          },
          {
            code: "320481",
            name: "溧阳市"
          }
        ]
      },
      {
        code: "3205",
        name: "苏州市",
        children: [
          {
            code: "320505",
            name: "虎丘区"
          },
          {
            code: "320506",
            name: "吴中区"
          },
          {
            code: "320507",
            name: "相城区"
          },
          {
            code: "320508",
            name: "姑苏区"
          },
          {
            code: "320509",
            name: "吴江区"
          },
          {
            code: "320571",
            name: "苏州工业园区"
          },
          {
            code: "320581",
            name: "常熟市"
          },
          {
            code: "320582",
            name: "张家港市"
          },
          {
            code: "320583",
            name: "昆山市"
          },
          {
            code: "320585",
            name: "太仓市"
          }
        ]
      },
      {
        code: "3206",
        name: "南通市",
        children: [
          {
            code: "320602",
            name: "崇川区"
          },
          {
            code: "320611",
            name: "港闸区"
          },
          {
            code: "320612",
            name: "通州区"
          },
          {
            code: "320623",
            name: "如东县"
          },
          {
            code: "320671",
            name: "南通经济技术开发区"
          },
          {
            code: "320681",
            name: "启东市"
          },
          {
            code: "320682",
            name: "如皋市"
          },
          {
            code: "320684",
            name: "海门市"
          },
          {
            code: "320685",
            name: "海安市"
          }
        ]
      },
      {
        code: "3207",
        name: "连云港市",
        children: [
          {
            code: "320703",
            name: "连云区"
          },
          {
            code: "320706",
            name: "海州区"
          },
          {
            code: "320707",
            name: "赣榆区"
          },
          {
            code: "320722",
            name: "东海县"
          },
          {
            code: "320723",
            name: "灌云县"
          },
          {
            code: "320724",
            name: "灌南县"
          },
          {
            code: "320771",
            name: "连云港经济技术开发区"
          },
          {
            code: "320772",
            name: "连云港高新技术产业开发区"
          }
        ]
      },
      {
        code: "3208",
        name: "淮安市",
        children: [
          {
            code: "320803",
            name: "淮安区"
          },
          {
            code: "320804",
            name: "淮阴区"
          },
          {
            code: "320812",
            name: "清江浦区"
          },
          {
            code: "320813",
            name: "洪泽区"
          },
          {
            code: "320826",
            name: "涟水县"
          },
          {
            code: "320830",
            name: "盱眙县"
          },
          {
            code: "320831",
            name: "金湖县"
          },
          {
            code: "320871",
            name: "淮安经济技术开发区"
          }
        ]
      },
      {
        code: "3209",
        name: "盐城市",
        children: [
          {
            code: "320902",
            name: "亭湖区"
          },
          {
            code: "320903",
            name: "盐都区"
          },
          {
            code: "320904",
            name: "大丰区"
          },
          {
            code: "320921",
            name: "响水县"
          },
          {
            code: "320922",
            name: "滨海县"
          },
          {
            code: "320923",
            name: "阜宁县"
          },
          {
            code: "320924",
            name: "射阳县"
          },
          {
            code: "320925",
            name: "建湖县"
          },
          {
            code: "320971",
            name: "盐城经济技术开发区"
          },
          {
            code: "320981",
            name: "东台市"
          }
        ]
      },
      {
        code: "3210",
        name: "扬州市",
        children: [
          {
            code: "321002",
            name: "广陵区"
          },
          {
            code: "321003",
            name: "邗江区"
          },
          {
            code: "321012",
            name: "江都区"
          },
          {
            code: "321023",
            name: "宝应县"
          },
          {
            code: "321071",
            name: "扬州经济技术开发区"
          },
          {
            code: "321081",
            name: "仪征市"
          },
          {
            code: "321084",
            name: "高邮市"
          }
        ]
      },
      {
        code: "3211",
        name: "镇江市",
        children: [
          {
            code: "321102",
            name: "京口区"
          },
          {
            code: "321111",
            name: "润州区"
          },
          {
            code: "321112",
            name: "丹徒区"
          },
          {
            code: "321171",
            name: "镇江新区"
          },
          {
            code: "321181",
            name: "丹阳市"
          },
          {
            code: "321182",
            name: "扬中市"
          },
          {
            code: "321183",
            name: "句容市"
          }
        ]
      },
      {
        code: "3212",
        name: "泰州市",
        children: [
          {
            code: "321202",
            name: "海陵区"
          },
          {
            code: "321203",
            name: "高港区"
          },
          {
            code: "321204",
            name: "姜堰区"
          },
          {
            code: "321271",
            name: "泰州医药高新技术产业开发区"
          },
          {
            code: "321281",
            name: "兴化市"
          },
          {
            code: "321282",
            name: "靖江市"
          },
          {
            code: "321283",
            name: "泰兴市"
          }
        ]
      },
      {
        code: "3213",
        name: "宿迁市",
        children: [
          {
            code: "321302",
            name: "宿城区"
          },
          {
            code: "321311",
            name: "宿豫区"
          },
          {
            code: "321322",
            name: "沭阳县"
          },
          {
            code: "321323",
            name: "泗阳县"
          },
          {
            code: "321324",
            name: "泗洪县"
          },
          {
            code: "321371",
            name: "宿迁经济技术开发区"
          }
        ]
      }
    ]
  },
  {
    code: "33",
    name: "浙江省",
    children: [
      {
        code: "3301",
        name: "杭州市",
        children: [
          {
            code: "330102",
            name: "上城区"
          },
          {
            code: "330103",
            name: "下城区"
          },
          {
            code: "330104",
            name: "江干区"
          },
          {
            code: "330105",
            name: "拱墅区"
          },
          {
            code: "330106",
            name: "西湖区"
          },
          {
            code: "330108",
            name: "滨江区"
          },
          {
            code: "330109",
            name: "萧山区"
          },
          {
            code: "330110",
            name: "余杭区"
          },
          {
            code: "330111",
            name: "富阳区"
          },
          {
            code: "330112",
            name: "临安区"
          },
          {
            code: "330122",
            name: "桐庐县"
          },
          {
            code: "330127",
            name: "淳安县"
          },
          {
            code: "330182",
            name: "建德市"
          }
        ]
      },
      {
        code: "3302",
        name: "宁波市",
        children: [
          {
            code: "330203",
            name: "海曙区"
          },
          {
            code: "330205",
            name: "江北区"
          },
          {
            code: "330206",
            name: "北仑区"
          },
          {
            code: "330211",
            name: "镇海区"
          },
          {
            code: "330212",
            name: "鄞州区"
          },
          {
            code: "330213",
            name: "奉化区"
          },
          {
            code: "330225",
            name: "象山县"
          },
          {
            code: "330226",
            name: "宁海县"
          },
          {
            code: "330281",
            name: "余姚市"
          },
          {
            code: "330282",
            name: "慈溪市"
          }
        ]
      },
      {
        code: "3303",
        name: "温州市",
        children: [
          {
            code: "330302",
            name: "鹿城区"
          },
          {
            code: "330303",
            name: "龙湾区"
          },
          {
            code: "330304",
            name: "瓯海区"
          },
          {
            code: "330305",
            name: "洞头区"
          },
          {
            code: "330324",
            name: "永嘉县"
          },
          {
            code: "330326",
            name: "平阳县"
          },
          {
            code: "330327",
            name: "苍南县"
          },
          {
            code: "330328",
            name: "文成县"
          },
          {
            code: "330329",
            name: "泰顺县"
          },
          {
            code: "330371",
            name: "温州经济技术开发区"
          },
          {
            code: "330381",
            name: "瑞安市"
          },
          {
            code: "330382",
            name: "乐清市"
          },
          {
            code: "330383",
            name: "龙港市"
          }
        ]
      },
      {
        code: "3304",
        name: "嘉兴市",
        children: [
          {
            code: "330402",
            name: "南湖区"
          },
          {
            code: "330411",
            name: "秀洲区"
          },
          {
            code: "330421",
            name: "嘉善县"
          },
          {
            code: "330424",
            name: "海盐县"
          },
          {
            code: "330481",
            name: "海宁市"
          },
          {
            code: "330482",
            name: "平湖市"
          },
          {
            code: "330483",
            name: "桐乡市"
          }
        ]
      },
      {
        code: "3305",
        name: "湖州市",
        children: [
          {
            code: "330502",
            name: "吴兴区"
          },
          {
            code: "330503",
            name: "南浔区"
          },
          {
            code: "330521",
            name: "德清县"
          },
          {
            code: "330522",
            name: "长兴县"
          },
          {
            code: "330523",
            name: "安吉县"
          }
        ]
      },
      {
        code: "3306",
        name: "绍兴市",
        children: [
          {
            code: "330602",
            name: "越城区"
          },
          {
            code: "330603",
            name: "柯桥区"
          },
          {
            code: "330604",
            name: "上虞区"
          },
          {
            code: "330624",
            name: "新昌县"
          },
          {
            code: "330681",
            name: "诸暨市"
          },
          {
            code: "330683",
            name: "嵊州市"
          }
        ]
      },
      {
        code: "3307",
        name: "金华市",
        children: [
          {
            code: "330702",
            name: "婺城区"
          },
          {
            code: "330703",
            name: "金东区"
          },
          {
            code: "330723",
            name: "武义县"
          },
          {
            code: "330726",
            name: "浦江县"
          },
          {
            code: "330727",
            name: "磐安县"
          },
          {
            code: "330781",
            name: "兰溪市"
          },
          {
            code: "330782",
            name: "义乌市"
          },
          {
            code: "330783",
            name: "东阳市"
          },
          {
            code: "330784",
            name: "永康市"
          }
        ]
      },
      {
        code: "3308",
        name: "衢州市",
        children: [
          {
            code: "330802",
            name: "柯城区"
          },
          {
            code: "330803",
            name: "衢江区"
          },
          {
            code: "330822",
            name: "常山县"
          },
          {
            code: "330824",
            name: "开化县"
          },
          {
            code: "330825",
            name: "龙游县"
          },
          {
            code: "330881",
            name: "江山市"
          }
        ]
      },
      {
        code: "3309",
        name: "舟山市",
        children: [
          {
            code: "330902",
            name: "定海区"
          },
          {
            code: "330903",
            name: "普陀区"
          },
          {
            code: "330921",
            name: "岱山县"
          },
          {
            code: "330922",
            name: "嵊泗县"
          }
        ]
      },
      {
        code: "3310",
        name: "台州市",
        children: [
          {
            code: "331002",
            name: "椒江区"
          },
          {
            code: "331003",
            name: "黄岩区"
          },
          {
            code: "331004",
            name: "路桥区"
          },
          {
            code: "331022",
            name: "三门县"
          },
          {
            code: "331023",
            name: "天台县"
          },
          {
            code: "331024",
            name: "仙居县"
          },
          {
            code: "331081",
            name: "温岭市"
          },
          {
            code: "331082",
            name: "临海市"
          },
          {
            code: "331083",
            name: "玉环市"
          }
        ]
      },
      {
        code: "3311",
        name: "丽水市",
        children: [
          {
            code: "331102",
            name: "莲都区"
          },
          {
            code: "331121",
            name: "青田县"
          },
          {
            code: "331122",
            name: "缙云县"
          },
          {
            code: "331123",
            name: "遂昌县"
          },
          {
            code: "331124",
            name: "松阳县"
          },
          {
            code: "331125",
            name: "云和县"
          },
          {
            code: "331126",
            name: "庆元县"
          },
          {
            code: "331127",
            name: "景宁畲族自治县"
          },
          {
            code: "331181",
            name: "龙泉市"
          }
        ]
      }
    ]
  },
  {
    code: "34",
    name: "安徽省",
    children: [
      {
        code: "3401",
        name: "合肥市",
        children: [
          {
            code: "340102",
            name: "瑶海区"
          },
          {
            code: "340103",
            name: "庐阳区"
          },
          {
            code: "340104",
            name: "蜀山区"
          },
          {
            code: "340111",
            name: "包河区"
          },
          {
            code: "340121",
            name: "长丰县"
          },
          {
            code: "340122",
            name: "肥东县"
          },
          {
            code: "340123",
            name: "肥西县"
          },
          {
            code: "340124",
            name: "庐江县"
          },
          {
            code: "340171",
            name: "合肥高新技术产业开发区"
          },
          {
            code: "340172",
            name: "合肥经济技术开发区"
          },
          {
            code: "340173",
            name: "合肥新站高新技术产业开发区"
          },
          {
            code: "340181",
            name: "巢湖市"
          }
        ]
      },
      {
        code: "3402",
        name: "芜湖市",
        children: [
          {
            code: "340202",
            name: "镜湖区"
          },
          {
            code: "340203",
            name: "弋江区"
          },
          {
            code: "340207",
            name: "鸠江区"
          },
          {
            code: "340208",
            name: "三山区"
          },
          {
            code: "340221",
            name: "芜湖县"
          },
          {
            code: "340222",
            name: "繁昌县"
          },
          {
            code: "340223",
            name: "南陵县"
          },
          {
            code: "340271",
            name: "芜湖经济技术开发区"
          },
          {
            code: "340272",
            name: "安徽芜湖长江大桥经济开发区"
          },
          {
            code: "340281",
            name: "无为市"
          }
        ]
      },
      {
        code: "3403",
        name: "蚌埠市",
        children: [
          {
            code: "340302",
            name: "龙子湖区"
          },
          {
            code: "340303",
            name: "蚌山区"
          },
          {
            code: "340304",
            name: "禹会区"
          },
          {
            code: "340311",
            name: "淮上区"
          },
          {
            code: "340321",
            name: "怀远县"
          },
          {
            code: "340322",
            name: "五河县"
          },
          {
            code: "340323",
            name: "固镇县"
          },
          {
            code: "340371",
            name: "蚌埠市高新技术开发区"
          },
          {
            code: "340372",
            name: "蚌埠市经济开发区"
          }
        ]
      },
      {
        code: "3404",
        name: "淮南市",
        children: [
          {
            code: "340402",
            name: "大通区"
          },
          {
            code: "340403",
            name: "田家庵区"
          },
          {
            code: "340404",
            name: "谢家集区"
          },
          {
            code: "340405",
            name: "八公山区"
          },
          {
            code: "340406",
            name: "潘集区"
          },
          {
            code: "340421",
            name: "凤台县"
          },
          {
            code: "340422",
            name: "寿县"
          }
        ]
      },
      {
        code: "3405",
        name: "马鞍山市",
        children: [
          {
            code: "340503",
            name: "花山区"
          },
          {
            code: "340504",
            name: "雨山区"
          },
          {
            code: "340506",
            name: "博望区"
          },
          {
            code: "340521",
            name: "当涂县"
          },
          {
            code: "340522",
            name: "含山县"
          },
          {
            code: "340523",
            name: "和县"
          }
        ]
      },
      {
        code: "3406",
        name: "淮北市",
        children: [
          {
            code: "340602",
            name: "杜集区"
          },
          {
            code: "340603",
            name: "相山区"
          },
          {
            code: "340604",
            name: "烈山区"
          },
          {
            code: "340621",
            name: "濉溪县"
          }
        ]
      },
      {
        code: "3407",
        name: "铜陵市",
        children: [
          {
            code: "340705",
            name: "铜官区"
          },
          {
            code: "340706",
            name: "义安区"
          },
          {
            code: "340711",
            name: "郊区"
          },
          {
            code: "340722",
            name: "枞阳县"
          }
        ]
      },
      {
        code: "3408",
        name: "安庆市",
        children: [
          {
            code: "340802",
            name: "迎江区"
          },
          {
            code: "340803",
            name: "大观区"
          },
          {
            code: "340811",
            name: "宜秀区"
          },
          {
            code: "340822",
            name: "怀宁县"
          },
          {
            code: "340825",
            name: "太湖县"
          },
          {
            code: "340826",
            name: "宿松县"
          },
          {
            code: "340827",
            name: "望江县"
          },
          {
            code: "340828",
            name: "岳西县"
          },
          {
            code: "340871",
            name: "安徽安庆经济开发区"
          },
          {
            code: "340881",
            name: "桐城市"
          },
          {
            code: "340882",
            name: "潜山市"
          }
        ]
      },
      {
        code: "3410",
        name: "黄山市",
        children: [
          {
            code: "341002",
            name: "屯溪区"
          },
          {
            code: "341003",
            name: "黄山区"
          },
          {
            code: "341004",
            name: "徽州区"
          },
          {
            code: "341021",
            name: "歙县"
          },
          {
            code: "341022",
            name: "休宁县"
          },
          {
            code: "341023",
            name: "黟县"
          },
          {
            code: "341024",
            name: "祁门县"
          }
        ]
      },
      {
        code: "3411",
        name: "滁州市",
        children: [
          {
            code: "341102",
            name: "琅琊区"
          },
          {
            code: "341103",
            name: "南谯区"
          },
          {
            code: "341122",
            name: "来安县"
          },
          {
            code: "341124",
            name: "全椒县"
          },
          {
            code: "341125",
            name: "定远县"
          },
          {
            code: "341126",
            name: "凤阳县"
          },
          {
            code: "341171",
            name: "苏滁现代产业园"
          },
          {
            code: "341172",
            name: "滁州经济技术开发区"
          },
          {
            code: "341181",
            name: "天长市"
          },
          {
            code: "341182",
            name: "明光市"
          }
        ]
      },
      {
        code: "3412",
        name: "阜阳市",
        children: [
          {
            code: "341202",
            name: "颍州区"
          },
          {
            code: "341203",
            name: "颍东区"
          },
          {
            code: "341204",
            name: "颍泉区"
          },
          {
            code: "341221",
            name: "临泉县"
          },
          {
            code: "341222",
            name: "太和县"
          },
          {
            code: "341225",
            name: "阜南县"
          },
          {
            code: "341226",
            name: "颍上县"
          },
          {
            code: "341271",
            name: "阜阳合肥现代产业园区"
          },
          {
            code: "341272",
            name: "阜阳经济技术开发区"
          },
          {
            code: "341282",
            name: "界首市"
          }
        ]
      },
      {
        code: "3413",
        name: "宿州市",
        children: [
          {
            code: "341302",
            name: "埇桥区"
          },
          {
            code: "341321",
            name: "砀山县"
          },
          {
            code: "341322",
            name: "萧县"
          },
          {
            code: "341323",
            name: "灵璧县"
          },
          {
            code: "341324",
            name: "泗县"
          },
          {
            code: "341371",
            name: "宿州马鞍山现代产业园区"
          },
          {
            code: "341372",
            name: "宿州经济技术开发区"
          }
        ]
      },
      {
        code: "3415",
        name: "六安市",
        children: [
          {
            code: "341502",
            name: "金安区"
          },
          {
            code: "341503",
            name: "裕安区"
          },
          {
            code: "341504",
            name: "叶集区"
          },
          {
            code: "341522",
            name: "霍邱县"
          },
          {
            code: "341523",
            name: "舒城县"
          },
          {
            code: "341524",
            name: "金寨县"
          },
          {
            code: "341525",
            name: "霍山县"
          }
        ]
      },
      {
        code: "3416",
        name: "亳州市",
        children: [
          {
            code: "341602",
            name: "谯城区"
          },
          {
            code: "341621",
            name: "涡阳县"
          },
          {
            code: "341622",
            name: "蒙城县"
          },
          {
            code: "341623",
            name: "利辛县"
          }
        ]
      },
      {
        code: "3417",
        name: "池州市",
        children: [
          {
            code: "341702",
            name: "贵池区"
          },
          {
            code: "341721",
            name: "东至县"
          },
          {
            code: "341722",
            name: "石台县"
          },
          {
            code: "341723",
            name: "青阳县"
          }
        ]
      },
      {
        code: "3418",
        name: "宣城市",
        children: [
          {
            code: "341802",
            name: "宣州区"
          },
          {
            code: "341821",
            name: "郎溪县"
          },
          {
            code: "341823",
            name: "泾县"
          },
          {
            code: "341824",
            name: "绩溪县"
          },
          {
            code: "341825",
            name: "旌德县"
          },
          {
            code: "341871",
            name: "宣城市经济开发区"
          },
          {
            code: "341881",
            name: "宁国市"
          },
          {
            code: "341882",
            name: "广德市"
          }
        ]
      }
    ]
  },
  {
    code: "35",
    name: "福建省",
    children: [
      {
        code: "3501",
        name: "福州市",
        children: [
          {
            code: "350102",
            name: "鼓楼区"
          },
          {
            code: "350103",
            name: "台江区"
          },
          {
            code: "350104",
            name: "仓山区"
          },
          {
            code: "350105",
            name: "马尾区"
          },
          {
            code: "350111",
            name: "晋安区"
          },
          {
            code: "350112",
            name: "长乐区"
          },
          {
            code: "350121",
            name: "闽侯县"
          },
          {
            code: "350122",
            name: "连江县"
          },
          {
            code: "350123",
            name: "罗源县"
          },
          {
            code: "350124",
            name: "闽清县"
          },
          {
            code: "350125",
            name: "永泰县"
          },
          {
            code: "350128",
            name: "平潭县"
          },
          {
            code: "350181",
            name: "福清市"
          }
        ]
      },
      {
        code: "3502",
        name: "厦门市",
        children: [
          {
            code: "350203",
            name: "思明区"
          },
          {
            code: "350205",
            name: "海沧区"
          },
          {
            code: "350206",
            name: "湖里区"
          },
          {
            code: "350211",
            name: "集美区"
          },
          {
            code: "350212",
            name: "同安区"
          },
          {
            code: "350213",
            name: "翔安区"
          }
        ]
      },
      {
        code: "3503",
        name: "莆田市",
        children: [
          {
            code: "350302",
            name: "城厢区"
          },
          {
            code: "350303",
            name: "涵江区"
          },
          {
            code: "350304",
            name: "荔城区"
          },
          {
            code: "350305",
            name: "秀屿区"
          },
          {
            code: "350322",
            name: "仙游县"
          }
        ]
      },
      {
        code: "3504",
        name: "三明市",
        children: [
          {
            code: "350402",
            name: "梅列区"
          },
          {
            code: "350403",
            name: "三元区"
          },
          {
            code: "350421",
            name: "明溪县"
          },
          {
            code: "350423",
            name: "清流县"
          },
          {
            code: "350424",
            name: "宁化县"
          },
          {
            code: "350425",
            name: "大田县"
          },
          {
            code: "350426",
            name: "尤溪县"
          },
          {
            code: "350427",
            name: "沙县"
          },
          {
            code: "350428",
            name: "将乐县"
          },
          {
            code: "350429",
            name: "泰宁县"
          },
          {
            code: "350430",
            name: "建宁县"
          },
          {
            code: "350481",
            name: "永安市"
          }
        ]
      },
      {
        code: "3505",
        name: "泉州市",
        children: [
          {
            code: "350502",
            name: "鲤城区"
          },
          {
            code: "350503",
            name: "丰泽区"
          },
          {
            code: "350504",
            name: "洛江区"
          },
          {
            code: "350505",
            name: "泉港区"
          },
          {
            code: "350521",
            name: "惠安县"
          },
          {
            code: "350524",
            name: "安溪县"
          },
          {
            code: "350525",
            name: "永春县"
          },
          {
            code: "350526",
            name: "德化县"
          },
          {
            code: "350527",
            name: "金门县"
          },
          {
            code: "350581",
            name: "石狮市"
          },
          {
            code: "350582",
            name: "晋江市"
          },
          {
            code: "350583",
            name: "南安市"
          }
        ]
      },
      {
        code: "3506",
        name: "漳州市",
        children: [
          {
            code: "350602",
            name: "芗城区"
          },
          {
            code: "350603",
            name: "龙文区"
          },
          {
            code: "350622",
            name: "云霄县"
          },
          {
            code: "350623",
            name: "漳浦县"
          },
          {
            code: "350624",
            name: "诏安县"
          },
          {
            code: "350625",
            name: "长泰县"
          },
          {
            code: "350626",
            name: "东山县"
          },
          {
            code: "350627",
            name: "南靖县"
          },
          {
            code: "350628",
            name: "平和县"
          },
          {
            code: "350629",
            name: "华安县"
          },
          {
            code: "350681",
            name: "龙海市"
          }
        ]
      },
      {
        code: "3507",
        name: "南平市",
        children: [
          {
            code: "350702",
            name: "延平区"
          },
          {
            code: "350703",
            name: "建阳区"
          },
          {
            code: "350721",
            name: "顺昌县"
          },
          {
            code: "350722",
            name: "浦城县"
          },
          {
            code: "350723",
            name: "光泽县"
          },
          {
            code: "350724",
            name: "松溪县"
          },
          {
            code: "350725",
            name: "政和县"
          },
          {
            code: "350781",
            name: "邵武市"
          },
          {
            code: "350782",
            name: "武夷山市"
          },
          {
            code: "350783",
            name: "建瓯市"
          }
        ]
      },
      {
        code: "3508",
        name: "龙岩市",
        children: [
          {
            code: "350802",
            name: "新罗区"
          },
          {
            code: "350803",
            name: "永定区"
          },
          {
            code: "350821",
            name: "长汀县"
          },
          {
            code: "350823",
            name: "上杭县"
          },
          {
            code: "350824",
            name: "武平县"
          },
          {
            code: "350825",
            name: "连城县"
          },
          {
            code: "350881",
            name: "漳平市"
          }
        ]
      },
      {
        code: "3509",
        name: "宁德市",
        children: [
          {
            code: "350902",
            name: "蕉城区"
          },
          {
            code: "350921",
            name: "霞浦县"
          },
          {
            code: "350922",
            name: "古田县"
          },
          {
            code: "350923",
            name: "屏南县"
          },
          {
            code: "350924",
            name: "寿宁县"
          },
          {
            code: "350925",
            name: "周宁县"
          },
          {
            code: "350926",
            name: "柘荣县"
          },
          {
            code: "350981",
            name: "福安市"
          },
          {
            code: "350982",
            name: "福鼎市"
          }
        ]
      }
    ]
  },
  {
    code: "36",
    name: "江西省",
    children: [
      {
        code: "3601",
        name: "南昌市",
        children: [
          {
            code: "360102",
            name: "东湖区"
          },
          {
            code: "360103",
            name: "西湖区"
          },
          {
            code: "360104",
            name: "青云谱区"
          },
          {
            code: "360111",
            name: "青山湖区"
          },
          {
            code: "360112",
            name: "新建区"
          },
          {
            code: "360113",
            name: "红谷滩区"
          },
          {
            code: "360121",
            name: "南昌县"
          },
          {
            code: "360123",
            name: "安义县"
          },
          {
            code: "360124",
            name: "进贤县"
          }
        ]
      },
      {
        code: "3602",
        name: "景德镇市",
        children: [
          {
            code: "360202",
            name: "昌江区"
          },
          {
            code: "360203",
            name: "珠山区"
          },
          {
            code: "360222",
            name: "浮梁县"
          },
          {
            code: "360281",
            name: "乐平市"
          }
        ]
      },
      {
        code: "3603",
        name: "萍乡市",
        children: [
          {
            code: "360302",
            name: "安源区"
          },
          {
            code: "360313",
            name: "湘东区"
          },
          {
            code: "360321",
            name: "莲花县"
          },
          {
            code: "360322",
            name: "上栗县"
          },
          {
            code: "360323",
            name: "芦溪县"
          }
        ]
      },
      {
        code: "3604",
        name: "九江市",
        children: [
          {
            code: "360402",
            name: "濂溪区"
          },
          {
            code: "360403",
            name: "浔阳区"
          },
          {
            code: "360404",
            name: "柴桑区"
          },
          {
            code: "360423",
            name: "武宁县"
          },
          {
            code: "360424",
            name: "修水县"
          },
          {
            code: "360425",
            name: "永修县"
          },
          {
            code: "360426",
            name: "德安县"
          },
          {
            code: "360428",
            name: "都昌县"
          },
          {
            code: "360429",
            name: "湖口县"
          },
          {
            code: "360430",
            name: "彭泽县"
          },
          {
            code: "360481",
            name: "瑞昌市"
          },
          {
            code: "360482",
            name: "共青城市"
          },
          {
            code: "360483",
            name: "庐山市"
          }
        ]
      },
      {
        code: "3605",
        name: "新余市",
        children: [
          {
            code: "360502",
            name: "渝水区"
          },
          {
            code: "360521",
            name: "分宜县"
          }
        ]
      },
      {
        code: "3606",
        name: "鹰潭市",
        children: [
          {
            code: "360602",
            name: "月湖区"
          },
          {
            code: "360603",
            name: "余江区"
          },
          {
            code: "360681",
            name: "贵溪市"
          }
        ]
      },
      {
        code: "3607",
        name: "赣州市",
        children: [
          {
            code: "360702",
            name: "章贡区"
          },
          {
            code: "360703",
            name: "南康区"
          },
          {
            code: "360704",
            name: "赣县区"
          },
          {
            code: "360722",
            name: "信丰县"
          },
          {
            code: "360723",
            name: "大余县"
          },
          {
            code: "360724",
            name: "上犹县"
          },
          {
            code: "360725",
            name: "崇义县"
          },
          {
            code: "360726",
            name: "安远县"
          },
          {
            code: "360728",
            name: "定南县"
          },
          {
            code: "360729",
            name: "全南县"
          },
          {
            code: "360730",
            name: "宁都县"
          },
          {
            code: "360731",
            name: "于都县"
          },
          {
            code: "360732",
            name: "兴国县"
          },
          {
            code: "360733",
            name: "会昌县"
          },
          {
            code: "360734",
            name: "寻乌县"
          },
          {
            code: "360735",
            name: "石城县"
          },
          {
            code: "360781",
            name: "瑞金市"
          },
          {
            code: "360783",
            name: "龙南市"
          }
        ]
      },
      {
        code: "3608",
        name: "吉安市",
        children: [
          {
            code: "360802",
            name: "吉州区"
          },
          {
            code: "360803",
            name: "青原区"
          },
          {
            code: "360821",
            name: "吉安县"
          },
          {
            code: "360822",
            name: "吉水县"
          },
          {
            code: "360823",
            name: "峡江县"
          },
          {
            code: "360824",
            name: "新干县"
          },
          {
            code: "360825",
            name: "永丰县"
          },
          {
            code: "360826",
            name: "泰和县"
          },
          {
            code: "360827",
            name: "遂川县"
          },
          {
            code: "360828",
            name: "万安县"
          },
          {
            code: "360829",
            name: "安福县"
          },
          {
            code: "360830",
            name: "永新县"
          },
          {
            code: "360881",
            name: "井冈山市"
          }
        ]
      },
      {
        code: "3609",
        name: "宜春市",
        children: [
          {
            code: "360902",
            name: "袁州区"
          },
          {
            code: "360921",
            name: "奉新县"
          },
          {
            code: "360922",
            name: "万载县"
          },
          {
            code: "360923",
            name: "上高县"
          },
          {
            code: "360924",
            name: "宜丰县"
          },
          {
            code: "360925",
            name: "靖安县"
          },
          {
            code: "360926",
            name: "铜鼓县"
          },
          {
            code: "360981",
            name: "丰城市"
          },
          {
            code: "360982",
            name: "樟树市"
          },
          {
            code: "360983",
            name: "高安市"
          }
        ]
      },
      {
        code: "3610",
        name: "抚州市",
        children: [
          {
            code: "361002",
            name: "临川区"
          },
          {
            code: "361003",
            name: "东乡区"
          },
          {
            code: "361021",
            name: "南城县"
          },
          {
            code: "361022",
            name: "黎川县"
          },
          {
            code: "361023",
            name: "南丰县"
          },
          {
            code: "361024",
            name: "崇仁县"
          },
          {
            code: "361025",
            name: "乐安县"
          },
          {
            code: "361026",
            name: "宜黄县"
          },
          {
            code: "361027",
            name: "金溪县"
          },
          {
            code: "361028",
            name: "资溪县"
          },
          {
            code: "361030",
            name: "广昌县"
          }
        ]
      },
      {
        code: "3611",
        name: "上饶市",
        children: [
          {
            code: "361102",
            name: "信州区"
          },
          {
            code: "361103",
            name: "广丰区"
          },
          {
            code: "361104",
            name: "广信区"
          },
          {
            code: "361123",
            name: "玉山县"
          },
          {
            code: "361124",
            name: "铅山县"
          },
          {
            code: "361125",
            name: "横峰县"
          },
          {
            code: "361126",
            name: "弋阳县"
          },
          {
            code: "361127",
            name: "余干县"
          },
          {
            code: "361128",
            name: "鄱阳县"
          },
          {
            code: "361129",
            name: "万年县"
          },
          {
            code: "361130",
            name: "婺源县"
          },
          {
            code: "361181",
            name: "德兴市"
          }
        ]
      }
    ]
  },
  {
    code: "37",
    name: "山东省",
    children: [
      {
        code: "3701",
        name: "济南市",
        children: [
          {
            code: "370102",
            name: "历下区"
          },
          {
            code: "370103",
            name: "市中区"
          },
          {
            code: "370104",
            name: "槐荫区"
          },
          {
            code: "370105",
            name: "天桥区"
          },
          {
            code: "370112",
            name: "历城区"
          },
          {
            code: "370113",
            name: "长清区"
          },
          {
            code: "370114",
            name: "章丘区"
          },
          {
            code: "370115",
            name: "济阳区"
          },
          {
            code: "370116",
            name: "莱芜区"
          },
          {
            code: "370117",
            name: "钢城区"
          },
          {
            code: "370124",
            name: "平阴县"
          },
          {
            code: "370126",
            name: "商河县"
          },
          {
            code: "370171",
            name: "济南高新技术产业开发区"
          }
        ]
      },
      {
        code: "3702",
        name: "青岛市",
        children: [
          {
            code: "370202",
            name: "市南区"
          },
          {
            code: "370203",
            name: "市北区"
          },
          {
            code: "370211",
            name: "黄岛区"
          },
          {
            code: "370212",
            name: "崂山区"
          },
          {
            code: "370213",
            name: "李沧区"
          },
          {
            code: "370214",
            name: "城阳区"
          },
          {
            code: "370215",
            name: "即墨区"
          },
          {
            code: "370271",
            name: "青岛高新技术产业开发区"
          },
          {
            code: "370281",
            name: "胶州市"
          },
          {
            code: "370283",
            name: "平度市"
          },
          {
            code: "370285",
            name: "莱西市"
          }
        ]
      },
      {
        code: "3703",
        name: "淄博市",
        children: [
          {
            code: "370302",
            name: "淄川区"
          },
          {
            code: "370303",
            name: "张店区"
          },
          {
            code: "370304",
            name: "博山区"
          },
          {
            code: "370305",
            name: "临淄区"
          },
          {
            code: "370306",
            name: "周村区"
          },
          {
            code: "370321",
            name: "桓台县"
          },
          {
            code: "370322",
            name: "高青县"
          },
          {
            code: "370323",
            name: "沂源县"
          }
        ]
      },
      {
        code: "3704",
        name: "枣庄市",
        children: [
          {
            code: "370402",
            name: "市中区"
          },
          {
            code: "370403",
            name: "薛城区"
          },
          {
            code: "370404",
            name: "峄城区"
          },
          {
            code: "370405",
            name: "台儿庄区"
          },
          {
            code: "370406",
            name: "山亭区"
          },
          {
            code: "370481",
            name: "滕州市"
          }
        ]
      },
      {
        code: "3705",
        name: "东营市",
        children: [
          {
            code: "370502",
            name: "东营区"
          },
          {
            code: "370503",
            name: "河口区"
          },
          {
            code: "370505",
            name: "垦利区"
          },
          {
            code: "370522",
            name: "利津县"
          },
          {
            code: "370523",
            name: "广饶县"
          },
          {
            code: "370571",
            name: "东营经济技术开发区"
          },
          {
            code: "370572",
            name: "东营港经济开发区"
          }
        ]
      },
      {
        code: "3706",
        name: "烟台市",
        children: [
          {
            code: "370602",
            name: "芝罘区"
          },
          {
            code: "370611",
            name: "福山区"
          },
          {
            code: "370612",
            name: "牟平区"
          },
          {
            code: "370613",
            name: "莱山区"
          },
          {
            code: "370614",
            name: "蓬莱区"
          },
          {
            code: "370671",
            name: "烟台高新技术产业开发区"
          },
          {
            code: "370672",
            name: "烟台经济技术开发区"
          },
          {
            code: "370681",
            name: "龙口市"
          },
          {
            code: "370682",
            name: "莱阳市"
          },
          {
            code: "370683",
            name: "莱州市"
          },
          {
            code: "370685",
            name: "招远市"
          },
          {
            code: "370686",
            name: "栖霞市"
          },
          {
            code: "370687",
            name: "海阳市"
          }
        ]
      },
      {
        code: "3707",
        name: "潍坊市",
        children: [
          {
            code: "370702",
            name: "潍城区"
          },
          {
            code: "370703",
            name: "寒亭区"
          },
          {
            code: "370704",
            name: "坊子区"
          },
          {
            code: "370705",
            name: "奎文区"
          },
          {
            code: "370724",
            name: "临朐县"
          },
          {
            code: "370725",
            name: "昌乐县"
          },
          {
            code: "370772",
            name: "潍坊滨海经济技术开发区"
          },
          {
            code: "370781",
            name: "青州市"
          },
          {
            code: "370782",
            name: "诸城市"
          },
          {
            code: "370783",
            name: "寿光市"
          },
          {
            code: "370784",
            name: "安丘市"
          },
          {
            code: "370785",
            name: "高密市"
          },
          {
            code: "370786",
            name: "昌邑市"
          }
        ]
      },
      {
        code: "3708",
        name: "济宁市",
        children: [
          {
            code: "370811",
            name: "任城区"
          },
          {
            code: "370812",
            name: "兖州区"
          },
          {
            code: "370826",
            name: "微山县"
          },
          {
            code: "370827",
            name: "鱼台县"
          },
          {
            code: "370828",
            name: "金乡县"
          },
          {
            code: "370829",
            name: "嘉祥县"
          },
          {
            code: "370830",
            name: "汶上县"
          },
          {
            code: "370831",
            name: "泗水县"
          },
          {
            code: "370832",
            name: "梁山县"
          },
          {
            code: "370871",
            name: "济宁高新技术产业开发区"
          },
          {
            code: "370881",
            name: "曲阜市"
          },
          {
            code: "370883",
            name: "邹城市"
          }
        ]
      },
      {
        code: "3709",
        name: "泰安市",
        children: [
          {
            code: "370902",
            name: "泰山区"
          },
          {
            code: "370911",
            name: "岱岳区"
          },
          {
            code: "370921",
            name: "宁阳县"
          },
          {
            code: "370923",
            name: "东平县"
          },
          {
            code: "370982",
            name: "新泰市"
          },
          {
            code: "370983",
            name: "肥城市"
          }
        ]
      },
      {
        code: "3710",
        name: "威海市",
        children: [
          {
            code: "371002",
            name: "环翠区"
          },
          {
            code: "371003",
            name: "文登区"
          },
          {
            code: "371071",
            name: "威海火炬高技术产业开发区"
          },
          {
            code: "371072",
            name: "威海经济技术开发区"
          },
          {
            code: "371073",
            name: "威海临港经济技术开发区"
          },
          {
            code: "371082",
            name: "荣成市"
          },
          {
            code: "371083",
            name: "乳山市"
          }
        ]
      },
      {
        code: "3711",
        name: "日照市",
        children: [
          {
            code: "371102",
            name: "东港区"
          },
          {
            code: "371103",
            name: "岚山区"
          },
          {
            code: "371121",
            name: "五莲县"
          },
          {
            code: "371122",
            name: "莒县"
          },
          {
            code: "371171",
            name: "日照经济技术开发区"
          }
        ]
      },
      {
        code: "3713",
        name: "临沂市",
        children: [
          {
            code: "371302",
            name: "兰山区"
          },
          {
            code: "371311",
            name: "罗庄区"
          },
          {
            code: "371312",
            name: "河东区"
          },
          {
            code: "371321",
            name: "沂南县"
          },
          {
            code: "371322",
            name: "郯城县"
          },
          {
            code: "371323",
            name: "沂水县"
          },
          {
            code: "371324",
            name: "兰陵县"
          },
          {
            code: "371325",
            name: "费县"
          },
          {
            code: "371326",
            name: "平邑县"
          },
          {
            code: "371327",
            name: "莒南县"
          },
          {
            code: "371328",
            name: "蒙阴县"
          },
          {
            code: "371329",
            name: "临沭县"
          },
          {
            code: "371371",
            name: "临沂高新技术产业开发区"
          }
        ]
      },
      {
        code: "3714",
        name: "德州市",
        children: [
          {
            code: "371402",
            name: "德城区"
          },
          {
            code: "371403",
            name: "陵城区"
          },
          {
            code: "371422",
            name: "宁津县"
          },
          {
            code: "371423",
            name: "庆云县"
          },
          {
            code: "371424",
            name: "临邑县"
          },
          {
            code: "371425",
            name: "齐河县"
          },
          {
            code: "371426",
            name: "平原县"
          },
          {
            code: "371427",
            name: "夏津县"
          },
          {
            code: "371428",
            name: "武城县"
          },
          {
            code: "371471",
            name: "德州经济技术开发区"
          },
          {
            code: "371472",
            name: "德州运河经济开发区"
          },
          {
            code: "371481",
            name: "乐陵市"
          },
          {
            code: "371482",
            name: "禹城市"
          }
        ]
      },
      {
        code: "3715",
        name: "聊城市",
        children: [
          {
            code: "371502",
            name: "东昌府区"
          },
          {
            code: "371503",
            name: "茌平区"
          },
          {
            code: "371521",
            name: "阳谷县"
          },
          {
            code: "371522",
            name: "莘县"
          },
          {
            code: "371524",
            name: "东阿县"
          },
          {
            code: "371525",
            name: "冠县"
          },
          {
            code: "371526",
            name: "高唐县"
          },
          {
            code: "371581",
            name: "临清市"
          }
        ]
      },
      {
        code: "3716",
        name: "滨州市",
        children: [
          {
            code: "371602",
            name: "滨城区"
          },
          {
            code: "371603",
            name: "沾化区"
          },
          {
            code: "371621",
            name: "惠民县"
          },
          {
            code: "371622",
            name: "阳信县"
          },
          {
            code: "371623",
            name: "无棣县"
          },
          {
            code: "371625",
            name: "博兴县"
          },
          {
            code: "371681",
            name: "邹平市"
          }
        ]
      },
      {
        code: "3717",
        name: "菏泽市",
        children: [
          {
            code: "371702",
            name: "牡丹区"
          },
          {
            code: "371703",
            name: "定陶区"
          },
          {
            code: "371721",
            name: "曹县"
          },
          {
            code: "371722",
            name: "单县"
          },
          {
            code: "371723",
            name: "成武县"
          },
          {
            code: "371724",
            name: "巨野县"
          },
          {
            code: "371725",
            name: "郓城县"
          },
          {
            code: "371726",
            name: "鄄城县"
          },
          {
            code: "371728",
            name: "东明县"
          },
          {
            code: "371771",
            name: "菏泽经济技术开发区"
          },
          {
            code: "371772",
            name: "菏泽高新技术开发区"
          }
        ]
      }
    ]
  },
  {
    code: "41",
    name: "河南省",
    children: [
      {
        code: "4101",
        name: "郑州市",
        children: [
          {
            code: "410102",
            name: "中原区"
          },
          {
            code: "410103",
            name: "二七区"
          },
          {
            code: "410104",
            name: "管城回族区"
          },
          {
            code: "410105",
            name: "金水区"
          },
          {
            code: "410106",
            name: "上街区"
          },
          {
            code: "410108",
            name: "惠济区"
          },
          {
            code: "410122",
            name: "中牟县"
          },
          {
            code: "410171",
            name: "郑州经济技术开发区"
          },
          {
            code: "410172",
            name: "郑州高新技术产业开发区"
          },
          {
            code: "410173",
            name: "郑州航空港经济综合实验区"
          },
          {
            code: "410181",
            name: "巩义市"
          },
          {
            code: "410182",
            name: "荥阳市"
          },
          {
            code: "410183",
            name: "新密市"
          },
          {
            code: "410184",
            name: "新郑市"
          },
          {
            code: "410185",
            name: "登封市"
          }
        ]
      },
      {
        code: "4102",
        name: "开封市",
        children: [
          {
            code: "410202",
            name: "龙亭区"
          },
          {
            code: "410203",
            name: "顺河回族区"
          },
          {
            code: "410204",
            name: "鼓楼区"
          },
          {
            code: "410205",
            name: "禹王台区"
          },
          {
            code: "410212",
            name: "祥符区"
          },
          {
            code: "410221",
            name: "杞县"
          },
          {
            code: "410222",
            name: "通许县"
          },
          {
            code: "410223",
            name: "尉氏县"
          },
          {
            code: "410225",
            name: "兰考县"
          }
        ]
      },
      {
        code: "4103",
        name: "洛阳市",
        children: [
          {
            code: "410302",
            name: "老城区"
          },
          {
            code: "410303",
            name: "西工区"
          },
          {
            code: "410304",
            name: "瀍河回族区"
          },
          {
            code: "410305",
            name: "涧西区"
          },
          {
            code: "410306",
            name: "吉利区"
          },
          {
            code: "410311",
            name: "洛龙区"
          },
          {
            code: "410322",
            name: "孟津县"
          },
          {
            code: "410323",
            name: "新安县"
          },
          {
            code: "410324",
            name: "栾川县"
          },
          {
            code: "410325",
            name: "嵩县"
          },
          {
            code: "410326",
            name: "汝阳县"
          },
          {
            code: "410327",
            name: "宜阳县"
          },
          {
            code: "410328",
            name: "洛宁县"
          },
          {
            code: "410329",
            name: "伊川县"
          },
          {
            code: "410371",
            name: "洛阳高新技术产业开发区"
          },
          {
            code: "410381",
            name: "偃师市"
          }
        ]
      },
      {
        code: "4104",
        name: "平顶山市",
        children: [
          {
            code: "410402",
            name: "新华区"
          },
          {
            code: "410403",
            name: "卫东区"
          },
          {
            code: "410404",
            name: "石龙区"
          },
          {
            code: "410411",
            name: "湛河区"
          },
          {
            code: "410421",
            name: "宝丰县"
          },
          {
            code: "410422",
            name: "叶县"
          },
          {
            code: "410423",
            name: "鲁山县"
          },
          {
            code: "410425",
            name: "郏县"
          },
          {
            code: "410471",
            name: "平顶山高新技术产业开发区"
          },
          {
            code: "410472",
            name: "平顶山市城乡一体化示范区"
          },
          {
            code: "410481",
            name: "舞钢市"
          },
          {
            code: "410482",
            name: "汝州市"
          }
        ]
      },
      {
        code: "4105",
        name: "安阳市",
        children: [
          {
            code: "410502",
            name: "文峰区"
          },
          {
            code: "410503",
            name: "北关区"
          },
          {
            code: "410505",
            name: "殷都区"
          },
          {
            code: "410506",
            name: "龙安区"
          },
          {
            code: "410522",
            name: "安阳县"
          },
          {
            code: "410523",
            name: "汤阴县"
          },
          {
            code: "410526",
            name: "滑县"
          },
          {
            code: "410527",
            name: "内黄县"
          },
          {
            code: "410571",
            name: "安阳高新技术产业开发区"
          },
          {
            code: "410581",
            name: "林州市"
          }
        ]
      },
      {
        code: "4106",
        name: "鹤壁市",
        children: [
          {
            code: "410602",
            name: "鹤山区"
          },
          {
            code: "410603",
            name: "山城区"
          },
          {
            code: "410611",
            name: "淇滨区"
          },
          {
            code: "410621",
            name: "浚县"
          },
          {
            code: "410622",
            name: "淇县"
          },
          {
            code: "410671",
            name: "鹤壁经济技术开发区"
          }
        ]
      },
      {
        code: "4107",
        name: "新乡市",
        children: [
          {
            code: "410702",
            name: "红旗区"
          },
          {
            code: "410703",
            name: "卫滨区"
          },
          {
            code: "410704",
            name: "凤泉区"
          },
          {
            code: "410711",
            name: "牧野区"
          },
          {
            code: "410721",
            name: "新乡县"
          },
          {
            code: "410724",
            name: "获嘉县"
          },
          {
            code: "410725",
            name: "原阳县"
          },
          {
            code: "410726",
            name: "延津县"
          },
          {
            code: "410727",
            name: "封丘县"
          },
          {
            code: "410771",
            name: "新乡高新技术产业开发区"
          },
          {
            code: "410772",
            name: "新乡经济技术开发区"
          },
          {
            code: "410773",
            name: "新乡市平原城乡一体化示范区"
          },
          {
            code: "410781",
            name: "卫辉市"
          },
          {
            code: "410782",
            name: "辉县市"
          },
          {
            code: "410783",
            name: "长垣市"
          }
        ]
      },
      {
        code: "4108",
        name: "焦作市",
        children: [
          {
            code: "410802",
            name: "解放区"
          },
          {
            code: "410803",
            name: "中站区"
          },
          {
            code: "410804",
            name: "马村区"
          },
          {
            code: "410811",
            name: "山阳区"
          },
          {
            code: "410821",
            name: "修武县"
          },
          {
            code: "410822",
            name: "博爱县"
          },
          {
            code: "410823",
            name: "武陟县"
          },
          {
            code: "410825",
            name: "温县"
          },
          {
            code: "410871",
            name: "焦作城乡一体化示范区"
          },
          {
            code: "410882",
            name: "沁阳市"
          },
          {
            code: "410883",
            name: "孟州市"
          }
        ]
      },
      {
        code: "4109",
        name: "濮阳市",
        children: [
          {
            code: "410902",
            name: "华龙区"
          },
          {
            code: "410922",
            name: "清丰县"
          },
          {
            code: "410923",
            name: "南乐县"
          },
          {
            code: "410926",
            name: "范县"
          },
          {
            code: "410927",
            name: "台前县"
          },
          {
            code: "410928",
            name: "濮阳县"
          },
          {
            code: "410971",
            name: "河南濮阳工业园区"
          },
          {
            code: "410972",
            name: "濮阳经济技术开发区"
          }
        ]
      },
      {
        code: "4110",
        name: "许昌市",
        children: [
          {
            code: "411002",
            name: "魏都区"
          },
          {
            code: "411003",
            name: "建安区"
          },
          {
            code: "411024",
            name: "鄢陵县"
          },
          {
            code: "411025",
            name: "襄城县"
          },
          {
            code: "411071",
            name: "许昌经济技术开发区"
          },
          {
            code: "411081",
            name: "禹州市"
          },
          {
            code: "411082",
            name: "长葛市"
          }
        ]
      },
      {
        code: "4111",
        name: "漯河市",
        children: [
          {
            code: "411102",
            name: "源汇区"
          },
          {
            code: "411103",
            name: "郾城区"
          },
          {
            code: "411104",
            name: "召陵区"
          },
          {
            code: "411121",
            name: "舞阳县"
          },
          {
            code: "411122",
            name: "临颍县"
          },
          {
            code: "411171",
            name: "漯河经济技术开发区"
          }
        ]
      },
      {
        code: "4112",
        name: "三门峡市",
        children: [
          {
            code: "411202",
            name: "湖滨区"
          },
          {
            code: "411203",
            name: "陕州区"
          },
          {
            code: "411221",
            name: "渑池县"
          },
          {
            code: "411224",
            name: "卢氏县"
          },
          {
            code: "411271",
            name: "河南三门峡经济开发区"
          },
          {
            code: "411281",
            name: "义马市"
          },
          {
            code: "411282",
            name: "灵宝市"
          }
        ]
      },
      {
        code: "4113",
        name: "南阳市",
        children: [
          {
            code: "411302",
            name: "宛城区"
          },
          {
            code: "411303",
            name: "卧龙区"
          },
          {
            code: "411321",
            name: "南召县"
          },
          {
            code: "411322",
            name: "方城县"
          },
          {
            code: "411323",
            name: "西峡县"
          },
          {
            code: "411324",
            name: "镇平县"
          },
          {
            code: "411325",
            name: "内乡县"
          },
          {
            code: "411326",
            name: "淅川县"
          },
          {
            code: "411327",
            name: "社旗县"
          },
          {
            code: "411328",
            name: "唐河县"
          },
          {
            code: "411329",
            name: "新野县"
          },
          {
            code: "411330",
            name: "桐柏县"
          },
          {
            code: "411371",
            name: "南阳高新技术产业开发区"
          },
          {
            code: "411372",
            name: "南阳市城乡一体化示范区"
          },
          {
            code: "411381",
            name: "邓州市"
          }
        ]
      },
      {
        code: "4114",
        name: "商丘市",
        children: [
          {
            code: "411402",
            name: "梁园区"
          },
          {
            code: "411403",
            name: "睢阳区"
          },
          {
            code: "411421",
            name: "民权县"
          },
          {
            code: "411422",
            name: "睢县"
          },
          {
            code: "411423",
            name: "宁陵县"
          },
          {
            code: "411424",
            name: "柘城县"
          },
          {
            code: "411425",
            name: "虞城县"
          },
          {
            code: "411426",
            name: "夏邑县"
          },
          {
            code: "411471",
            name: "豫东综合物流产业聚集区"
          },
          {
            code: "411472",
            name: "河南商丘经济开发区"
          },
          {
            code: "411481",
            name: "永城市"
          }
        ]
      },
      {
        code: "4115",
        name: "信阳市",
        children: [
          {
            code: "411502",
            name: "浉河区"
          },
          {
            code: "411503",
            name: "平桥区"
          },
          {
            code: "411521",
            name: "罗山县"
          },
          {
            code: "411522",
            name: "光山县"
          },
          {
            code: "411523",
            name: "新县"
          },
          {
            code: "411524",
            name: "商城县"
          },
          {
            code: "411525",
            name: "固始县"
          },
          {
            code: "411526",
            name: "潢川县"
          },
          {
            code: "411527",
            name: "淮滨县"
          },
          {
            code: "411528",
            name: "息县"
          },
          {
            code: "411571",
            name: "信阳高新技术产业开发区"
          }
        ]
      },
      {
        code: "4116",
        name: "周口市",
        children: [
          {
            code: "411602",
            name: "川汇区"
          },
          {
            code: "411603",
            name: "淮阳区"
          },
          {
            code: "411621",
            name: "扶沟县"
          },
          {
            code: "411622",
            name: "西华县"
          },
          {
            code: "411623",
            name: "商水县"
          },
          {
            code: "411624",
            name: "沈丘县"
          },
          {
            code: "411625",
            name: "郸城县"
          },
          {
            code: "411627",
            name: "太康县"
          },
          {
            code: "411628",
            name: "鹿邑县"
          },
          {
            code: "411671",
            name: "河南周口经济开发区"
          },
          {
            code: "411681",
            name: "项城市"
          }
        ]
      },
      {
        code: "4117",
        name: "驻马店市",
        children: [
          {
            code: "411702",
            name: "驿城区"
          },
          {
            code: "411721",
            name: "西平县"
          },
          {
            code: "411722",
            name: "上蔡县"
          },
          {
            code: "411723",
            name: "平舆县"
          },
          {
            code: "411724",
            name: "正阳县"
          },
          {
            code: "411725",
            name: "确山县"
          },
          {
            code: "411726",
            name: "泌阳县"
          },
          {
            code: "411727",
            name: "汝南县"
          },
          {
            code: "411728",
            name: "遂平县"
          },
          {
            code: "411729",
            name: "新蔡县"
          },
          {
            code: "411771",
            name: "河南驻马店经济开发区"
          }
        ]
      },
      {
        code: "4190",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "419001",
            name: "济源市"
          }
        ]
      }
    ]
  },
  {
    code: "42",
    name: "湖北省",
    children: [
      {
        code: "4201",
        name: "武汉市",
        children: [
          {
            code: "420102",
            name: "江岸区"
          },
          {
            code: "420103",
            name: "江汉区"
          },
          {
            code: "420104",
            name: "硚口区"
          },
          {
            code: "420105",
            name: "汉阳区"
          },
          {
            code: "420106",
            name: "武昌区"
          },
          {
            code: "420107",
            name: "青山区"
          },
          {
            code: "420111",
            name: "洪山区"
          },
          {
            code: "420112",
            name: "东西湖区"
          },
          {
            code: "420113",
            name: "汉南区"
          },
          {
            code: "420114",
            name: "蔡甸区"
          },
          {
            code: "420115",
            name: "江夏区"
          },
          {
            code: "420116",
            name: "黄陂区"
          },
          {
            code: "420117",
            name: "新洲区"
          }
        ]
      },
      {
        code: "4202",
        name: "黄石市",
        children: [
          {
            code: "420202",
            name: "黄石港区"
          },
          {
            code: "420203",
            name: "西塞山区"
          },
          {
            code: "420204",
            name: "下陆区"
          },
          {
            code: "420205",
            name: "铁山区"
          },
          {
            code: "420222",
            name: "阳新县"
          },
          {
            code: "420281",
            name: "大冶市"
          }
        ]
      },
      {
        code: "4203",
        name: "十堰市",
        children: [
          {
            code: "420302",
            name: "茅箭区"
          },
          {
            code: "420303",
            name: "张湾区"
          },
          {
            code: "420304",
            name: "郧阳区"
          },
          {
            code: "420322",
            name: "郧西县"
          },
          {
            code: "420323",
            name: "竹山县"
          },
          {
            code: "420324",
            name: "竹溪县"
          },
          {
            code: "420325",
            name: "房县"
          },
          {
            code: "420381",
            name: "丹江口市"
          }
        ]
      },
      {
        code: "4205",
        name: "宜昌市",
        children: [
          {
            code: "420502",
            name: "西陵区"
          },
          {
            code: "420503",
            name: "伍家岗区"
          },
          {
            code: "420504",
            name: "点军区"
          },
          {
            code: "420505",
            name: "猇亭区"
          },
          {
            code: "420506",
            name: "夷陵区"
          },
          {
            code: "420525",
            name: "远安县"
          },
          {
            code: "420526",
            name: "兴山县"
          },
          {
            code: "420527",
            name: "秭归县"
          },
          {
            code: "420528",
            name: "长阳土家族自治县"
          },
          {
            code: "420529",
            name: "五峰土家族自治县"
          },
          {
            code: "420581",
            name: "宜都市"
          },
          {
            code: "420582",
            name: "当阳市"
          },
          {
            code: "420583",
            name: "枝江市"
          }
        ]
      },
      {
        code: "4206",
        name: "襄阳市",
        children: [
          {
            code: "420602",
            name: "襄城区"
          },
          {
            code: "420606",
            name: "樊城区"
          },
          {
            code: "420607",
            name: "襄州区"
          },
          {
            code: "420624",
            name: "南漳县"
          },
          {
            code: "420625",
            name: "谷城县"
          },
          {
            code: "420626",
            name: "保康县"
          },
          {
            code: "420682",
            name: "老河口市"
          },
          {
            code: "420683",
            name: "枣阳市"
          },
          {
            code: "420684",
            name: "宜城市"
          }
        ]
      },
      {
        code: "4207",
        name: "鄂州市",
        children: [
          {
            code: "420702",
            name: "梁子湖区"
          },
          {
            code: "420703",
            name: "华容区"
          },
          {
            code: "420704",
            name: "鄂城区"
          }
        ]
      },
      {
        code: "4208",
        name: "荆门市",
        children: [
          {
            code: "420802",
            name: "东宝区"
          },
          {
            code: "420804",
            name: "掇刀区"
          },
          {
            code: "420822",
            name: "沙洋县"
          },
          {
            code: "420881",
            name: "钟祥市"
          },
          {
            code: "420882",
            name: "京山市"
          }
        ]
      },
      {
        code: "4209",
        name: "孝感市",
        children: [
          {
            code: "420902",
            name: "孝南区"
          },
          {
            code: "420921",
            name: "孝昌县"
          },
          {
            code: "420922",
            name: "大悟县"
          },
          {
            code: "420923",
            name: "云梦县"
          },
          {
            code: "420981",
            name: "应城市"
          },
          {
            code: "420982",
            name: "安陆市"
          },
          {
            code: "420984",
            name: "汉川市"
          }
        ]
      },
      {
        code: "4210",
        name: "荆州市",
        children: [
          {
            code: "421002",
            name: "沙市区"
          },
          {
            code: "421003",
            name: "荆州区"
          },
          {
            code: "421022",
            name: "公安县"
          },
          {
            code: "421023",
            name: "监利县"
          },
          {
            code: "421024",
            name: "江陵县"
          },
          {
            code: "421071",
            name: "荆州经济技术开发区"
          },
          {
            code: "421081",
            name: "石首市"
          },
          {
            code: "421083",
            name: "洪湖市"
          },
          {
            code: "421087",
            name: "松滋市"
          }
        ]
      },
      {
        code: "4211",
        name: "黄冈市",
        children: [
          {
            code: "421102",
            name: "黄州区"
          },
          {
            code: "421121",
            name: "团风县"
          },
          {
            code: "421122",
            name: "红安县"
          },
          {
            code: "421123",
            name: "罗田县"
          },
          {
            code: "421124",
            name: "英山县"
          },
          {
            code: "421125",
            name: "浠水县"
          },
          {
            code: "421126",
            name: "蕲春县"
          },
          {
            code: "421127",
            name: "黄梅县"
          },
          {
            code: "421171",
            name: "龙感湖管理区"
          },
          {
            code: "421181",
            name: "麻城市"
          },
          {
            code: "421182",
            name: "武穴市"
          }
        ]
      },
      {
        code: "4212",
        name: "咸宁市",
        children: [
          {
            code: "421202",
            name: "咸安区"
          },
          {
            code: "421221",
            name: "嘉鱼县"
          },
          {
            code: "421222",
            name: "通城县"
          },
          {
            code: "421223",
            name: "崇阳县"
          },
          {
            code: "421224",
            name: "通山县"
          },
          {
            code: "421281",
            name: "赤壁市"
          }
        ]
      },
      {
        code: "4213",
        name: "随州市",
        children: [
          {
            code: "421303",
            name: "曾都区"
          },
          {
            code: "421321",
            name: "随县"
          },
          {
            code: "421381",
            name: "广水市"
          }
        ]
      },
      {
        code: "4228",
        name: "恩施土家族苗族自治州",
        children: [
          {
            code: "422801",
            name: "恩施市"
          },
          {
            code: "422802",
            name: "利川市"
          },
          {
            code: "422822",
            name: "建始县"
          },
          {
            code: "422823",
            name: "巴东县"
          },
          {
            code: "422825",
            name: "宣恩县"
          },
          {
            code: "422826",
            name: "咸丰县"
          },
          {
            code: "422827",
            name: "来凤县"
          },
          {
            code: "422828",
            name: "鹤峰县"
          }
        ]
      },
      {
        code: "4290",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "429004",
            name: "仙桃市"
          },
          {
            code: "429005",
            name: "潜江市"
          },
          {
            code: "429006",
            name: "天门市"
          },
          {
            code: "429021",
            name: "神农架林区"
          }
        ]
      }
    ]
  },
  {
    code: "43",
    name: "湖南省",
    children: [
      {
        code: "4301",
        name: "长沙市",
        children: [
          {
            code: "430102",
            name: "芙蓉区"
          },
          {
            code: "430103",
            name: "天心区"
          },
          {
            code: "430104",
            name: "岳麓区"
          },
          {
            code: "430105",
            name: "开福区"
          },
          {
            code: "430111",
            name: "雨花区"
          },
          {
            code: "430112",
            name: "望城区"
          },
          {
            code: "430121",
            name: "长沙县"
          },
          {
            code: "430181",
            name: "浏阳市"
          },
          {
            code: "430182",
            name: "宁乡市"
          }
        ]
      },
      {
        code: "4302",
        name: "株洲市",
        children: [
          {
            code: "430202",
            name: "荷塘区"
          },
          {
            code: "430203",
            name: "芦淞区"
          },
          {
            code: "430204",
            name: "石峰区"
          },
          {
            code: "430211",
            name: "天元区"
          },
          {
            code: "430212",
            name: "渌口区"
          },
          {
            code: "430223",
            name: "攸县"
          },
          {
            code: "430224",
            name: "茶陵县"
          },
          {
            code: "430225",
            name: "炎陵县"
          },
          {
            code: "430271",
            name: "云龙示范区"
          },
          {
            code: "430281",
            name: "醴陵市"
          }
        ]
      },
      {
        code: "4303",
        name: "湘潭市",
        children: [
          {
            code: "430302",
            name: "雨湖区"
          },
          {
            code: "430304",
            name: "岳塘区"
          },
          {
            code: "430321",
            name: "湘潭县"
          },
          {
            code: "430371",
            name: "湖南湘潭高新技术产业园区"
          },
          {
            code: "430372",
            name: "湘潭昭山示范区"
          },
          {
            code: "430373",
            name: "湘潭九华示范区"
          },
          {
            code: "430381",
            name: "湘乡市"
          },
          {
            code: "430382",
            name: "韶山市"
          }
        ]
      },
      {
        code: "4304",
        name: "衡阳市",
        children: [
          {
            code: "430405",
            name: "珠晖区"
          },
          {
            code: "430406",
            name: "雁峰区"
          },
          {
            code: "430407",
            name: "石鼓区"
          },
          {
            code: "430408",
            name: "蒸湘区"
          },
          {
            code: "430412",
            name: "南岳区"
          },
          {
            code: "430421",
            name: "衡阳县"
          },
          {
            code: "430422",
            name: "衡南县"
          },
          {
            code: "430423",
            name: "衡山县"
          },
          {
            code: "430424",
            name: "衡东县"
          },
          {
            code: "430426",
            name: "祁东县"
          },
          {
            code: "430471",
            name: "衡阳综合保税区"
          },
          {
            code: "430472",
            name: "湖南衡阳高新技术产业园区"
          },
          {
            code: "430473",
            name: "湖南衡阳松木经济开发区"
          },
          {
            code: "430481",
            name: "耒阳市"
          },
          {
            code: "430482",
            name: "常宁市"
          }
        ]
      },
      {
        code: "4305",
        name: "邵阳市",
        children: [
          {
            code: "430502",
            name: "双清区"
          },
          {
            code: "430503",
            name: "大祥区"
          },
          {
            code: "430511",
            name: "北塔区"
          },
          {
            code: "430522",
            name: "新邵县"
          },
          {
            code: "430523",
            name: "邵阳县"
          },
          {
            code: "430524",
            name: "隆回县"
          },
          {
            code: "430525",
            name: "洞口县"
          },
          {
            code: "430527",
            name: "绥宁县"
          },
          {
            code: "430528",
            name: "新宁县"
          },
          {
            code: "430529",
            name: "城步苗族自治县"
          },
          {
            code: "430581",
            name: "武冈市"
          },
          {
            code: "430582",
            name: "邵东市"
          }
        ]
      },
      {
        code: "4306",
        name: "岳阳市",
        children: [
          {
            code: "430602",
            name: "岳阳楼区"
          },
          {
            code: "430603",
            name: "云溪区"
          },
          {
            code: "430611",
            name: "君山区"
          },
          {
            code: "430621",
            name: "岳阳县"
          },
          {
            code: "430623",
            name: "华容县"
          },
          {
            code: "430624",
            name: "湘阴县"
          },
          {
            code: "430626",
            name: "平江县"
          },
          {
            code: "430671",
            name: "岳阳市屈原管理区"
          },
          {
            code: "430681",
            name: "汨罗市"
          },
          {
            code: "430682",
            name: "临湘市"
          }
        ]
      },
      {
        code: "4307",
        name: "常德市",
        children: [
          {
            code: "430702",
            name: "武陵区"
          },
          {
            code: "430703",
            name: "鼎城区"
          },
          {
            code: "430721",
            name: "安乡县"
          },
          {
            code: "430722",
            name: "汉寿县"
          },
          {
            code: "430723",
            name: "澧县"
          },
          {
            code: "430724",
            name: "临澧县"
          },
          {
            code: "430725",
            name: "桃源县"
          },
          {
            code: "430726",
            name: "石门县"
          },
          {
            code: "430771",
            name: "常德市西洞庭管理区"
          },
          {
            code: "430781",
            name: "津市市"
          }
        ]
      },
      {
        code: "4308",
        name: "张家界市",
        children: [
          {
            code: "430802",
            name: "永定区"
          },
          {
            code: "430811",
            name: "武陵源区"
          },
          {
            code: "430821",
            name: "慈利县"
          },
          {
            code: "430822",
            name: "桑植县"
          }
        ]
      },
      {
        code: "4309",
        name: "益阳市",
        children: [
          {
            code: "430902",
            name: "资阳区"
          },
          {
            code: "430903",
            name: "赫山区"
          },
          {
            code: "430921",
            name: "南县"
          },
          {
            code: "430922",
            name: "桃江县"
          },
          {
            code: "430923",
            name: "安化县"
          },
          {
            code: "430971",
            name: "益阳市大通湖管理区"
          },
          {
            code: "430972",
            name: "湖南益阳高新技术产业园区"
          },
          {
            code: "430981",
            name: "沅江市"
          }
        ]
      },
      {
        code: "4310",
        name: "郴州市",
        children: [
          {
            code: "431002",
            name: "北湖区"
          },
          {
            code: "431003",
            name: "苏仙区"
          },
          {
            code: "431021",
            name: "桂阳县"
          },
          {
            code: "431022",
            name: "宜章县"
          },
          {
            code: "431023",
            name: "永兴县"
          },
          {
            code: "431024",
            name: "嘉禾县"
          },
          {
            code: "431025",
            name: "临武县"
          },
          {
            code: "431026",
            name: "汝城县"
          },
          {
            code: "431027",
            name: "桂东县"
          },
          {
            code: "431028",
            name: "安仁县"
          },
          {
            code: "431081",
            name: "资兴市"
          }
        ]
      },
      {
        code: "4311",
        name: "永州市",
        children: [
          {
            code: "431102",
            name: "零陵区"
          },
          {
            code: "431103",
            name: "冷水滩区"
          },
          {
            code: "431121",
            name: "祁阳县"
          },
          {
            code: "431122",
            name: "东安县"
          },
          {
            code: "431123",
            name: "双牌县"
          },
          {
            code: "431124",
            name: "道县"
          },
          {
            code: "431125",
            name: "江永县"
          },
          {
            code: "431126",
            name: "宁远县"
          },
          {
            code: "431127",
            name: "蓝山县"
          },
          {
            code: "431128",
            name: "新田县"
          },
          {
            code: "431129",
            name: "江华瑶族自治县"
          },
          {
            code: "431171",
            name: "永州经济技术开发区"
          },
          {
            code: "431172",
            name: "永州市金洞管理区"
          },
          {
            code: "431173",
            name: "永州市回龙圩管理区"
          }
        ]
      },
      {
        code: "4312",
        name: "怀化市",
        children: [
          {
            code: "431202",
            name: "鹤城区"
          },
          {
            code: "431221",
            name: "中方县"
          },
          {
            code: "431222",
            name: "沅陵县"
          },
          {
            code: "431223",
            name: "辰溪县"
          },
          {
            code: "431224",
            name: "溆浦县"
          },
          {
            code: "431225",
            name: "会同县"
          },
          {
            code: "431226",
            name: "麻阳苗族自治县"
          },
          {
            code: "431227",
            name: "新晃侗族自治县"
          },
          {
            code: "431228",
            name: "芷江侗族自治县"
          },
          {
            code: "431229",
            name: "靖州苗族侗族自治县"
          },
          {
            code: "431230",
            name: "通道侗族自治县"
          },
          {
            code: "431271",
            name: "怀化市洪江管理区"
          },
          {
            code: "431281",
            name: "洪江市"
          }
        ]
      },
      {
        code: "4313",
        name: "娄底市",
        children: [
          {
            code: "431302",
            name: "娄星区"
          },
          {
            code: "431321",
            name: "双峰县"
          },
          {
            code: "431322",
            name: "新化县"
          },
          {
            code: "431381",
            name: "冷水江市"
          },
          {
            code: "431382",
            name: "涟源市"
          }
        ]
      },
      {
        code: "4331",
        name: "湘西土家族苗族自治州",
        children: [
          {
            code: "433101",
            name: "吉首市"
          },
          {
            code: "433122",
            name: "泸溪县"
          },
          {
            code: "433123",
            name: "凤凰县"
          },
          {
            code: "433124",
            name: "花垣县"
          },
          {
            code: "433125",
            name: "保靖县"
          },
          {
            code: "433126",
            name: "古丈县"
          },
          {
            code: "433127",
            name: "永顺县"
          },
          {
            code: "433130",
            name: "龙山县"
          }
        ]
      }
    ]
  },
  {
    code: "44",
    name: "广东省",
    children: [
      {
        code: "4401",
        name: "广州市",
        children: [
          {
            code: "440103",
            name: "荔湾区"
          },
          {
            code: "440104",
            name: "越秀区"
          },
          {
            code: "440105",
            name: "海珠区"
          },
          {
            code: "440106",
            name: "天河区"
          },
          {
            code: "440111",
            name: "白云区"
          },
          {
            code: "440112",
            name: "黄埔区"
          },
          {
            code: "440113",
            name: "番禺区"
          },
          {
            code: "440114",
            name: "花都区"
          },
          {
            code: "440115",
            name: "南沙区"
          },
          {
            code: "440117",
            name: "从化区"
          },
          {
            code: "440118",
            name: "增城区"
          }
        ]
      },
      {
        code: "4402",
        name: "韶关市",
        children: [
          {
            code: "440203",
            name: "武江区"
          },
          {
            code: "440204",
            name: "浈江区"
          },
          {
            code: "440205",
            name: "曲江区"
          },
          {
            code: "440222",
            name: "始兴县"
          },
          {
            code: "440224",
            name: "仁化县"
          },
          {
            code: "440229",
            name: "翁源县"
          },
          {
            code: "440232",
            name: "乳源瑶族自治县"
          },
          {
            code: "440233",
            name: "新丰县"
          },
          {
            code: "440281",
            name: "乐昌市"
          },
          {
            code: "440282",
            name: "南雄市"
          }
        ]
      },
      {
        code: "4403",
        name: "深圳市",
        children: [
          {
            code: "440303",
            name: "罗湖区"
          },
          {
            code: "440304",
            name: "福田区"
          },
          {
            code: "440305",
            name: "南山区"
          },
          {
            code: "440306",
            name: "宝安区"
          },
          {
            code: "440307",
            name: "龙岗区"
          },
          {
            code: "440308",
            name: "盐田区"
          },
          {
            code: "440309",
            name: "龙华区"
          },
          {
            code: "440310",
            name: "坪山区"
          },
          {
            code: "440311",
            name: "光明区"
          }
        ]
      },
      {
        code: "4404",
        name: "珠海市",
        children: [
          {
            code: "440402",
            name: "香洲区"
          },
          {
            code: "440403",
            name: "斗门区"
          },
          {
            code: "440404",
            name: "金湾区"
          }
        ]
      },
      {
        code: "4405",
        name: "汕头市",
        children: [
          {
            code: "440507",
            name: "龙湖区"
          },
          {
            code: "440511",
            name: "金平区"
          },
          {
            code: "440512",
            name: "濠江区"
          },
          {
            code: "440513",
            name: "潮阳区"
          },
          {
            code: "440514",
            name: "潮南区"
          },
          {
            code: "440515",
            name: "澄海区"
          },
          {
            code: "440523",
            name: "南澳县"
          }
        ]
      },
      {
        code: "4406",
        name: "佛山市",
        children: [
          {
            code: "440604",
            name: "禅城区"
          },
          {
            code: "440605",
            name: "南海区"
          },
          {
            code: "440606",
            name: "顺德区"
          },
          {
            code: "440607",
            name: "三水区"
          },
          {
            code: "440608",
            name: "高明区"
          }
        ]
      },
      {
        code: "4407",
        name: "江门市",
        children: [
          {
            code: "440703",
            name: "蓬江区"
          },
          {
            code: "440704",
            name: "江海区"
          },
          {
            code: "440705",
            name: "新会区"
          },
          {
            code: "440781",
            name: "台山市"
          },
          {
            code: "440783",
            name: "开平市"
          },
          {
            code: "440784",
            name: "鹤山市"
          },
          {
            code: "440785",
            name: "恩平市"
          }
        ]
      },
      {
        code: "4408",
        name: "湛江市",
        children: [
          {
            code: "440802",
            name: "赤坎区"
          },
          {
            code: "440803",
            name: "霞山区"
          },
          {
            code: "440804",
            name: "坡头区"
          },
          {
            code: "440811",
            name: "麻章区"
          },
          {
            code: "440823",
            name: "遂溪县"
          },
          {
            code: "440825",
            name: "徐闻县"
          },
          {
            code: "440881",
            name: "廉江市"
          },
          {
            code: "440882",
            name: "雷州市"
          },
          {
            code: "440883",
            name: "吴川市"
          }
        ]
      },
      {
        code: "4409",
        name: "茂名市",
        children: [
          {
            code: "440902",
            name: "茂南区"
          },
          {
            code: "440904",
            name: "电白区"
          },
          {
            code: "440981",
            name: "高州市"
          },
          {
            code: "440982",
            name: "化州市"
          },
          {
            code: "440983",
            name: "信宜市"
          }
        ]
      },
      {
        code: "4412",
        name: "肇庆市",
        children: [
          {
            code: "441202",
            name: "端州区"
          },
          {
            code: "441203",
            name: "鼎湖区"
          },
          {
            code: "441204",
            name: "高要区"
          },
          {
            code: "441223",
            name: "广宁县"
          },
          {
            code: "441224",
            name: "怀集县"
          },
          {
            code: "441225",
            name: "封开县"
          },
          {
            code: "441226",
            name: "德庆县"
          },
          {
            code: "441284",
            name: "四会市"
          }
        ]
      },
      {
        code: "4413",
        name: "惠州市",
        children: [
          {
            code: "441302",
            name: "惠城区"
          },
          {
            code: "441303",
            name: "惠阳区"
          },
          {
            code: "441322",
            name: "博罗县"
          },
          {
            code: "441323",
            name: "惠东县"
          },
          {
            code: "441324",
            name: "龙门县"
          }
        ]
      },
      {
        code: "4414",
        name: "梅州市",
        children: [
          {
            code: "441402",
            name: "梅江区"
          },
          {
            code: "441403",
            name: "梅县区"
          },
          {
            code: "441422",
            name: "大埔县"
          },
          {
            code: "441423",
            name: "丰顺县"
          },
          {
            code: "441424",
            name: "五华县"
          },
          {
            code: "441426",
            name: "平远县"
          },
          {
            code: "441427",
            name: "蕉岭县"
          },
          {
            code: "441481",
            name: "兴宁市"
          }
        ]
      },
      {
        code: "4415",
        name: "汕尾市",
        children: [
          {
            code: "441502",
            name: "城区"
          },
          {
            code: "441521",
            name: "海丰县"
          },
          {
            code: "441523",
            name: "陆河县"
          },
          {
            code: "441581",
            name: "陆丰市"
          }
        ]
      },
      {
        code: "4416",
        name: "河源市",
        children: [
          {
            code: "441602",
            name: "源城区"
          },
          {
            code: "441621",
            name: "紫金县"
          },
          {
            code: "441622",
            name: "龙川县"
          },
          {
            code: "441623",
            name: "连平县"
          },
          {
            code: "441624",
            name: "和平县"
          },
          {
            code: "441625",
            name: "东源县"
          }
        ]
      },
      {
        code: "4417",
        name: "阳江市",
        children: [
          {
            code: "441702",
            name: "江城区"
          },
          {
            code: "441704",
            name: "阳东区"
          },
          {
            code: "441721",
            name: "阳西县"
          },
          {
            code: "441781",
            name: "阳春市"
          }
        ]
      },
      {
        code: "4418",
        name: "清远市",
        children: [
          {
            code: "441802",
            name: "清城区"
          },
          {
            code: "441803",
            name: "清新区"
          },
          {
            code: "441821",
            name: "佛冈县"
          },
          {
            code: "441823",
            name: "阳山县"
          },
          {
            code: "441825",
            name: "连山壮族瑶族自治县"
          },
          {
            code: "441826",
            name: "连南瑶族自治县"
          },
          {
            code: "441881",
            name: "英德市"
          },
          {
            code: "441882",
            name: "连州市"
          }
        ]
      },
      {
        code: "4419",
        name: "东莞市",
        children: [
          {
            code: "441900003",
            name: "东城街道"
          },
          {
            code: "441900004",
            name: "南城街道"
          },
          {
            code: "441900005",
            name: "万江街道"
          },
          {
            code: "441900006",
            name: "莞城街道"
          },
          {
            code: "441900101",
            name: "石碣镇"
          },
          {
            code: "441900102",
            name: "石龙镇"
          },
          {
            code: "441900103",
            name: "茶山镇"
          },
          {
            code: "441900104",
            name: "石排镇"
          },
          {
            code: "441900105",
            name: "企石镇"
          },
          {
            code: "441900106",
            name: "横沥镇"
          },
          {
            code: "441900107",
            name: "桥头镇"
          },
          {
            code: "441900108",
            name: "谢岗镇"
          },
          {
            code: "441900109",
            name: "东坑镇"
          },
          {
            code: "441900110",
            name: "常平镇"
          },
          {
            code: "441900111",
            name: "寮步镇"
          },
          {
            code: "441900112",
            name: "樟木头镇"
          },
          {
            code: "441900113",
            name: "大朗镇"
          },
          {
            code: "441900114",
            name: "黄江镇"
          },
          {
            code: "441900115",
            name: "清溪镇"
          },
          {
            code: "441900116",
            name: "塘厦镇"
          },
          {
            code: "441900117",
            name: "凤岗镇"
          },
          {
            code: "441900118",
            name: "大岭山镇"
          },
          {
            code: "441900119",
            name: "长安镇"
          },
          {
            code: "441900121",
            name: "虎门镇"
          },
          {
            code: "441900122",
            name: "厚街镇"
          },
          {
            code: "441900123",
            name: "沙田镇"
          },
          {
            code: "441900124",
            name: "道滘镇"
          },
          {
            code: "441900125",
            name: "洪梅镇"
          },
          {
            code: "441900126",
            name: "麻涌镇"
          },
          {
            code: "441900127",
            name: "望牛墩镇"
          },
          {
            code: "441900128",
            name: "中堂镇"
          },
          {
            code: "441900129",
            name: "高埗镇"
          },
          {
            code: "441900401",
            name: "松山湖"
          },
          {
            code: "441900402",
            name: "东莞港"
          },
          {
            code: "441900403",
            name: "东莞生态园"
          }
        ]
      },
      {
        code: "4420",
        name: "中山市",
        children: [
          {
            code: "442000001",
            name: "石岐街道"
          },
          {
            code: "442000002",
            name: "东区街道"
          },
          {
            code: "442000003",
            name: "中山港街道"
          },
          {
            code: "442000004",
            name: "西区街道"
          },
          {
            code: "442000005",
            name: "南区街道"
          },
          {
            code: "442000006",
            name: "五桂山街道"
          },
          {
            code: "442000100",
            name: "小榄镇"
          },
          {
            code: "442000101",
            name: "黄圃镇"
          },
          {
            code: "442000102",
            name: "民众镇"
          },
          {
            code: "442000103",
            name: "东凤镇"
          },
          {
            code: "442000104",
            name: "东升镇"
          },
          {
            code: "442000105",
            name: "古镇镇"
          },
          {
            code: "442000106",
            name: "沙溪镇"
          },
          {
            code: "442000107",
            name: "坦洲镇"
          },
          {
            code: "442000108",
            name: "港口镇"
          },
          {
            code: "442000109",
            name: "三角镇"
          },
          {
            code: "442000110",
            name: "横栏镇"
          },
          {
            code: "442000111",
            name: "南头镇"
          },
          {
            code: "442000112",
            name: "阜沙镇"
          },
          {
            code: "442000113",
            name: "南朗镇"
          },
          {
            code: "442000114",
            name: "三乡镇"
          },
          {
            code: "442000115",
            name: "板芙镇"
          },
          {
            code: "442000116",
            name: "大涌镇"
          },
          {
            code: "442000117",
            name: "神湾镇"
          }
        ]
      },
      {
        code: "4451",
        name: "潮州市",
        children: [
          {
            code: "445102",
            name: "湘桥区"
          },
          {
            code: "445103",
            name: "潮安区"
          },
          {
            code: "445122",
            name: "饶平县"
          }
        ]
      },
      {
        code: "4452",
        name: "揭阳市",
        children: [
          {
            code: "445202",
            name: "榕城区"
          },
          {
            code: "445203",
            name: "揭东区"
          },
          {
            code: "445222",
            name: "揭西县"
          },
          {
            code: "445224",
            name: "惠来县"
          },
          {
            code: "445281",
            name: "普宁市"
          }
        ]
      },
      {
        code: "4453",
        name: "云浮市",
        children: [
          {
            code: "445302",
            name: "云城区"
          },
          {
            code: "445303",
            name: "云安区"
          },
          {
            code: "445321",
            name: "新兴县"
          },
          {
            code: "445322",
            name: "郁南县"
          },
          {
            code: "445381",
            name: "罗定市"
          }
        ]
      }
    ]
  },
  {
    code: "45",
    name: "广西壮族自治区",
    children: [
      {
        code: "4501",
        name: "南宁市",
        children: [
          {
            code: "450102",
            name: "兴宁区"
          },
          {
            code: "450103",
            name: "青秀区"
          },
          {
            code: "450105",
            name: "江南区"
          },
          {
            code: "450107",
            name: "西乡塘区"
          },
          {
            code: "450108",
            name: "良庆区"
          },
          {
            code: "450109",
            name: "邕宁区"
          },
          {
            code: "450110",
            name: "武鸣区"
          },
          {
            code: "450123",
            name: "隆安县"
          },
          {
            code: "450124",
            name: "马山县"
          },
          {
            code: "450125",
            name: "上林县"
          },
          {
            code: "450126",
            name: "宾阳县"
          },
          {
            code: "450127",
            name: "横县"
          }
        ]
      },
      {
        code: "4502",
        name: "柳州市",
        children: [
          {
            code: "450202",
            name: "城中区"
          },
          {
            code: "450203",
            name: "鱼峰区"
          },
          {
            code: "450204",
            name: "柳南区"
          },
          {
            code: "450205",
            name: "柳北区"
          },
          {
            code: "450206",
            name: "柳江区"
          },
          {
            code: "450222",
            name: "柳城县"
          },
          {
            code: "450223",
            name: "鹿寨县"
          },
          {
            code: "450224",
            name: "融安县"
          },
          {
            code: "450225",
            name: "融水苗族自治县"
          },
          {
            code: "450226",
            name: "三江侗族自治县"
          }
        ]
      },
      {
        code: "4503",
        name: "桂林市",
        children: [
          {
            code: "450302",
            name: "秀峰区"
          },
          {
            code: "450303",
            name: "叠彩区"
          },
          {
            code: "450304",
            name: "象山区"
          },
          {
            code: "450305",
            name: "七星区"
          },
          {
            code: "450311",
            name: "雁山区"
          },
          {
            code: "450312",
            name: "临桂区"
          },
          {
            code: "450321",
            name: "阳朔县"
          },
          {
            code: "450323",
            name: "灵川县"
          },
          {
            code: "450324",
            name: "全州县"
          },
          {
            code: "450325",
            name: "兴安县"
          },
          {
            code: "450326",
            name: "永福县"
          },
          {
            code: "450327",
            name: "灌阳县"
          },
          {
            code: "450328",
            name: "龙胜各族自治县"
          },
          {
            code: "450329",
            name: "资源县"
          },
          {
            code: "450330",
            name: "平乐县"
          },
          {
            code: "450332",
            name: "恭城瑶族自治县"
          },
          {
            code: "450381",
            name: "荔浦市"
          }
        ]
      },
      {
        code: "4504",
        name: "梧州市",
        children: [
          {
            code: "450403",
            name: "万秀区"
          },
          {
            code: "450405",
            name: "长洲区"
          },
          {
            code: "450406",
            name: "龙圩区"
          },
          {
            code: "450421",
            name: "苍梧县"
          },
          {
            code: "450422",
            name: "藤县"
          },
          {
            code: "450423",
            name: "蒙山县"
          },
          {
            code: "450481",
            name: "岑溪市"
          }
        ]
      },
      {
        code: "4505",
        name: "北海市",
        children: [
          {
            code: "450502",
            name: "海城区"
          },
          {
            code: "450503",
            name: "银海区"
          },
          {
            code: "450512",
            name: "铁山港区"
          },
          {
            code: "450521",
            name: "合浦县"
          }
        ]
      },
      {
        code: "4506",
        name: "防城港市",
        children: [
          {
            code: "450602",
            name: "港口区"
          },
          {
            code: "450603",
            name: "防城区"
          },
          {
            code: "450621",
            name: "上思县"
          },
          {
            code: "450681",
            name: "东兴市"
          }
        ]
      },
      {
        code: "4507",
        name: "钦州市",
        children: [
          {
            code: "450702",
            name: "钦南区"
          },
          {
            code: "450703",
            name: "钦北区"
          },
          {
            code: "450721",
            name: "灵山县"
          },
          {
            code: "450722",
            name: "浦北县"
          }
        ]
      },
      {
        code: "4508",
        name: "贵港市",
        children: [
          {
            code: "450802",
            name: "港北区"
          },
          {
            code: "450803",
            name: "港南区"
          },
          {
            code: "450804",
            name: "覃塘区"
          },
          {
            code: "450821",
            name: "平南县"
          },
          {
            code: "450881",
            name: "桂平市"
          }
        ]
      },
      {
        code: "4509",
        name: "玉林市",
        children: [
          {
            code: "450902",
            name: "玉州区"
          },
          {
            code: "450903",
            name: "福绵区"
          },
          {
            code: "450921",
            name: "容县"
          },
          {
            code: "450922",
            name: "陆川县"
          },
          {
            code: "450923",
            name: "博白县"
          },
          {
            code: "450924",
            name: "兴业县"
          },
          {
            code: "450981",
            name: "北流市"
          }
        ]
      },
      {
        code: "4510",
        name: "百色市",
        children: [
          {
            code: "451002",
            name: "右江区"
          },
          {
            code: "451003",
            name: "田阳区"
          },
          {
            code: "451022",
            name: "田东县"
          },
          {
            code: "451024",
            name: "德保县"
          },
          {
            code: "451026",
            name: "那坡县"
          },
          {
            code: "451027",
            name: "凌云县"
          },
          {
            code: "451028",
            name: "乐业县"
          },
          {
            code: "451029",
            name: "田林县"
          },
          {
            code: "451030",
            name: "西林县"
          },
          {
            code: "451031",
            name: "隆林各族自治县"
          },
          {
            code: "451081",
            name: "靖西市"
          },
          {
            code: "451082",
            name: "平果市"
          }
        ]
      },
      {
        code: "4511",
        name: "贺州市",
        children: [
          {
            code: "451102",
            name: "八步区"
          },
          {
            code: "451103",
            name: "平桂区"
          },
          {
            code: "451121",
            name: "昭平县"
          },
          {
            code: "451122",
            name: "钟山县"
          },
          {
            code: "451123",
            name: "富川瑶族自治县"
          }
        ]
      },
      {
        code: "4512",
        name: "河池市",
        children: [
          {
            code: "451202",
            name: "金城江区"
          },
          {
            code: "451203",
            name: "宜州区"
          },
          {
            code: "451221",
            name: "南丹县"
          },
          {
            code: "451222",
            name: "天峨县"
          },
          {
            code: "451223",
            name: "凤山县"
          },
          {
            code: "451224",
            name: "东兰县"
          },
          {
            code: "451225",
            name: "罗城仫佬族自治县"
          },
          {
            code: "451226",
            name: "环江毛南族自治县"
          },
          {
            code: "451227",
            name: "巴马瑶族自治县"
          },
          {
            code: "451228",
            name: "都安瑶族自治县"
          },
          {
            code: "451229",
            name: "大化瑶族自治县"
          }
        ]
      },
      {
        code: "4513",
        name: "来宾市",
        children: [
          {
            code: "451302",
            name: "兴宾区"
          },
          {
            code: "451321",
            name: "忻城县"
          },
          {
            code: "451322",
            name: "象州县"
          },
          {
            code: "451323",
            name: "武宣县"
          },
          {
            code: "451324",
            name: "金秀瑶族自治县"
          },
          {
            code: "451381",
            name: "合山市"
          }
        ]
      },
      {
        code: "4514",
        name: "崇左市",
        children: [
          {
            code: "451402",
            name: "江州区"
          },
          {
            code: "451421",
            name: "扶绥县"
          },
          {
            code: "451422",
            name: "宁明县"
          },
          {
            code: "451423",
            name: "龙州县"
          },
          {
            code: "451424",
            name: "大新县"
          },
          {
            code: "451425",
            name: "天等县"
          },
          {
            code: "451481",
            name: "凭祥市"
          }
        ]
      }
    ]
  },
  {
    code: "46",
    name: "海南省",
    children: [
      {
        code: "4601",
        name: "海口市",
        children: [
          {
            code: "460105",
            name: "秀英区"
          },
          {
            code: "460106",
            name: "龙华区"
          },
          {
            code: "460107",
            name: "琼山区"
          },
          {
            code: "460108",
            name: "美兰区"
          }
        ]
      },
      {
        code: "4602",
        name: "三亚市",
        children: [
          {
            code: "460202",
            name: "海棠区"
          },
          {
            code: "460203",
            name: "吉阳区"
          },
          {
            code: "460204",
            name: "天涯区"
          },
          {
            code: "460205",
            name: "崖州区"
          }
        ]
      },
      {
        code: "4603",
        name: "三沙市",
        children: [
          {
            code: "460321",
            name: "西沙群岛"
          },
          {
            code: "460322",
            name: "南沙群岛"
          },
          {
            code: "460323",
            name: "中沙群岛的岛礁及其海域"
          }
        ]
      },
      {
        code: "4604",
        name: "儋州市",
        children: [
          {
            code: "460400100",
            name: "那大镇"
          },
          {
            code: "460400101",
            name: "和庆镇"
          },
          {
            code: "460400102",
            name: "南丰镇"
          },
          {
            code: "460400103",
            name: "大成镇"
          },
          {
            code: "460400104",
            name: "雅星镇"
          },
          {
            code: "460400105",
            name: "兰洋镇"
          },
          {
            code: "460400106",
            name: "光村镇"
          },
          {
            code: "460400107",
            name: "木棠镇"
          },
          {
            code: "460400108",
            name: "海头镇"
          },
          {
            code: "460400109",
            name: "峨蔓镇"
          },
          {
            code: "460400111",
            name: "王五镇"
          },
          {
            code: "460400112",
            name: "白马井镇"
          },
          {
            code: "460400113",
            name: "中和镇"
          },
          {
            code: "460400114",
            name: "排浦镇"
          },
          {
            code: "460400115",
            name: "东成镇"
          },
          {
            code: "460400116",
            name: "新州镇"
          },
          {
            code: "460400499",
            name: "洋浦经济开发区"
          },
          {
            code: "460400500",
            name: "华南热作学院"
          }
        ]
      },
      {
        code: "4690",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "469001",
            name: "五指山市"
          },
          {
            code: "469002",
            name: "琼海市"
          },
          {
            code: "469005",
            name: "文昌市"
          },
          {
            code: "469006",
            name: "万宁市"
          },
          {
            code: "469007",
            name: "东方市"
          },
          {
            code: "469021",
            name: "定安县"
          },
          {
            code: "469022",
            name: "屯昌县"
          },
          {
            code: "469023",
            name: "澄迈县"
          },
          {
            code: "469024",
            name: "临高县"
          },
          {
            code: "469025",
            name: "白沙黎族自治县"
          },
          {
            code: "469026",
            name: "昌江黎族自治县"
          },
          {
            code: "469027",
            name: "乐东黎族自治县"
          },
          {
            code: "469028",
            name: "陵水黎族自治县"
          },
          {
            code: "469029",
            name: "保亭黎族苗族自治县"
          },
          {
            code: "469030",
            name: "琼中黎族苗族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "50",
    name: "重庆市",
    children: [
      {
        code: "5001",
        name: "市辖区",
        children: [
          {
            code: "500101",
            name: "万州区"
          },
          {
            code: "500102",
            name: "涪陵区"
          },
          {
            code: "500103",
            name: "渝中区"
          },
          {
            code: "500104",
            name: "大渡口区"
          },
          {
            code: "500105",
            name: "江北区"
          },
          {
            code: "500106",
            name: "沙坪坝区"
          },
          {
            code: "500107",
            name: "九龙坡区"
          },
          {
            code: "500108",
            name: "南岸区"
          },
          {
            code: "500109",
            name: "北碚区"
          },
          {
            code: "500110",
            name: "綦江区"
          },
          {
            code: "500111",
            name: "大足区"
          },
          {
            code: "500112",
            name: "渝北区"
          },
          {
            code: "500113",
            name: "巴南区"
          },
          {
            code: "500114",
            name: "黔江区"
          },
          {
            code: "500115",
            name: "长寿区"
          },
          {
            code: "500116",
            name: "江津区"
          },
          {
            code: "500117",
            name: "合川区"
          },
          {
            code: "500118",
            name: "永川区"
          },
          {
            code: "500119",
            name: "南川区"
          },
          {
            code: "500120",
            name: "璧山区"
          },
          {
            code: "500151",
            name: "铜梁区"
          },
          {
            code: "500152",
            name: "潼南区"
          },
          {
            code: "500153",
            name: "荣昌区"
          },
          {
            code: "500154",
            name: "开州区"
          },
          {
            code: "500155",
            name: "梁平区"
          },
          {
            code: "500156",
            name: "武隆区"
          }
        ]
      },
      {
        code: "5002",
        name: "县",
        children: [
          {
            code: "500229",
            name: "城口县"
          },
          {
            code: "500230",
            name: "丰都县"
          },
          {
            code: "500231",
            name: "垫江县"
          },
          {
            code: "500233",
            name: "忠县"
          },
          {
            code: "500235",
            name: "云阳县"
          },
          {
            code: "500236",
            name: "奉节县"
          },
          {
            code: "500237",
            name: "巫山县"
          },
          {
            code: "500238",
            name: "巫溪县"
          },
          {
            code: "500240",
            name: "石柱土家族自治县"
          },
          {
            code: "500241",
            name: "秀山土家族苗族自治县"
          },
          {
            code: "500242",
            name: "酉阳土家族苗族自治县"
          },
          {
            code: "500243",
            name: "彭水苗族土家族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "51",
    name: "四川省",
    children: [
      {
        code: "5101",
        name: "成都市",
        children: [
          {
            code: "510104",
            name: "锦江区"
          },
          {
            code: "510105",
            name: "青羊区"
          },
          {
            code: "510106",
            name: "金牛区"
          },
          {
            code: "510107",
            name: "武侯区"
          },
          {
            code: "510108",
            name: "成华区"
          },
          {
            code: "510112",
            name: "龙泉驿区"
          },
          {
            code: "510113",
            name: "青白江区"
          },
          {
            code: "510114",
            name: "新都区"
          },
          {
            code: "510115",
            name: "温江区"
          },
          {
            code: "510116",
            name: "双流区"
          },
          {
            code: "510117",
            name: "郫都区"
          },
          {
            code: "510118",
            name: "新津区"
          },
          {
            code: "510121",
            name: "金堂县"
          },
          {
            code: "510129",
            name: "大邑县"
          },
          {
            code: "510131",
            name: "蒲江县"
          },
          {
            code: "510181",
            name: "都江堰市"
          },
          {
            code: "510182",
            name: "彭州市"
          },
          {
            code: "510183",
            name: "邛崃市"
          },
          {
            code: "510184",
            name: "崇州市"
          },
          {
            code: "510185",
            name: "简阳市"
          }
        ]
      },
      {
        code: "5103",
        name: "自贡市",
        children: [
          {
            code: "510302",
            name: "自流井区"
          },
          {
            code: "510303",
            name: "贡井区"
          },
          {
            code: "510304",
            name: "大安区"
          },
          {
            code: "510311",
            name: "沿滩区"
          },
          {
            code: "510321",
            name: "荣县"
          },
          {
            code: "510322",
            name: "富顺县"
          }
        ]
      },
      {
        code: "5104",
        name: "攀枝花市",
        children: [
          {
            code: "510402",
            name: "东区"
          },
          {
            code: "510403",
            name: "西区"
          },
          {
            code: "510411",
            name: "仁和区"
          },
          {
            code: "510421",
            name: "米易县"
          },
          {
            code: "510422",
            name: "盐边县"
          }
        ]
      },
      {
        code: "5105",
        name: "泸州市",
        children: [
          {
            code: "510502",
            name: "江阳区"
          },
          {
            code: "510503",
            name: "纳溪区"
          },
          {
            code: "510504",
            name: "龙马潭区"
          },
          {
            code: "510521",
            name: "泸县"
          },
          {
            code: "510522",
            name: "合江县"
          },
          {
            code: "510524",
            name: "叙永县"
          },
          {
            code: "510525",
            name: "古蔺县"
          }
        ]
      },
      {
        code: "5106",
        name: "德阳市",
        children: [
          {
            code: "510603",
            name: "旌阳区"
          },
          {
            code: "510604",
            name: "罗江区"
          },
          {
            code: "510623",
            name: "中江县"
          },
          {
            code: "510681",
            name: "广汉市"
          },
          {
            code: "510682",
            name: "什邡市"
          },
          {
            code: "510683",
            name: "绵竹市"
          }
        ]
      },
      {
        code: "5107",
        name: "绵阳市",
        children: [
          {
            code: "510703",
            name: "涪城区"
          },
          {
            code: "510704",
            name: "游仙区"
          },
          {
            code: "510705",
            name: "安州区"
          },
          {
            code: "510722",
            name: "三台县"
          },
          {
            code: "510723",
            name: "盐亭县"
          },
          {
            code: "510725",
            name: "梓潼县"
          },
          {
            code: "510726",
            name: "北川羌族自治县"
          },
          {
            code: "510727",
            name: "平武县"
          },
          {
            code: "510781",
            name: "江油市"
          }
        ]
      },
      {
        code: "5108",
        name: "广元市",
        children: [
          {
            code: "510802",
            name: "利州区"
          },
          {
            code: "510811",
            name: "昭化区"
          },
          {
            code: "510812",
            name: "朝天区"
          },
          {
            code: "510821",
            name: "旺苍县"
          },
          {
            code: "510822",
            name: "青川县"
          },
          {
            code: "510823",
            name: "剑阁县"
          },
          {
            code: "510824",
            name: "苍溪县"
          }
        ]
      },
      {
        code: "5109",
        name: "遂宁市",
        children: [
          {
            code: "510903",
            name: "船山区"
          },
          {
            code: "510904",
            name: "安居区"
          },
          {
            code: "510921",
            name: "蓬溪县"
          },
          {
            code: "510923",
            name: "大英县"
          },
          {
            code: "510981",
            name: "射洪市"
          }
        ]
      },
      {
        code: "5110",
        name: "内江市",
        children: [
          {
            code: "511002",
            name: "市中区"
          },
          {
            code: "511011",
            name: "东兴区"
          },
          {
            code: "511024",
            name: "威远县"
          },
          {
            code: "511025",
            name: "资中县"
          },
          {
            code: "511071",
            name: "内江经济开发区"
          },
          {
            code: "511083",
            name: "隆昌市"
          }
        ]
      },
      {
        code: "5111",
        name: "乐山市",
        children: [
          {
            code: "511102",
            name: "市中区"
          },
          {
            code: "511111",
            name: "沙湾区"
          },
          {
            code: "511112",
            name: "五通桥区"
          },
          {
            code: "511113",
            name: "金口河区"
          },
          {
            code: "511123",
            name: "犍为县"
          },
          {
            code: "511124",
            name: "井研县"
          },
          {
            code: "511126",
            name: "夹江县"
          },
          {
            code: "511129",
            name: "沐川县"
          },
          {
            code: "511132",
            name: "峨边彝族自治县"
          },
          {
            code: "511133",
            name: "马边彝族自治县"
          },
          {
            code: "511181",
            name: "峨眉山市"
          }
        ]
      },
      {
        code: "5113",
        name: "南充市",
        children: [
          {
            code: "511302",
            name: "顺庆区"
          },
          {
            code: "511303",
            name: "高坪区"
          },
          {
            code: "511304",
            name: "嘉陵区"
          },
          {
            code: "511321",
            name: "南部县"
          },
          {
            code: "511322",
            name: "营山县"
          },
          {
            code: "511323",
            name: "蓬安县"
          },
          {
            code: "511324",
            name: "仪陇县"
          },
          {
            code: "511325",
            name: "西充县"
          },
          {
            code: "511381",
            name: "阆中市"
          }
        ]
      },
      {
        code: "5114",
        name: "眉山市",
        children: [
          {
            code: "511402",
            name: "东坡区"
          },
          {
            code: "511403",
            name: "彭山区"
          },
          {
            code: "511421",
            name: "仁寿县"
          },
          {
            code: "511423",
            name: "洪雅县"
          },
          {
            code: "511424",
            name: "丹棱县"
          },
          {
            code: "511425",
            name: "青神县"
          }
        ]
      },
      {
        code: "5115",
        name: "宜宾市",
        children: [
          {
            code: "511502",
            name: "翠屏区"
          },
          {
            code: "511503",
            name: "南溪区"
          },
          {
            code: "511504",
            name: "叙州区"
          },
          {
            code: "511523",
            name: "江安县"
          },
          {
            code: "511524",
            name: "长宁县"
          },
          {
            code: "511525",
            name: "高县"
          },
          {
            code: "511526",
            name: "珙县"
          },
          {
            code: "511527",
            name: "筠连县"
          },
          {
            code: "511528",
            name: "兴文县"
          },
          {
            code: "511529",
            name: "屏山县"
          }
        ]
      },
      {
        code: "5116",
        name: "广安市",
        children: [
          {
            code: "511602",
            name: "广安区"
          },
          {
            code: "511603",
            name: "前锋区"
          },
          {
            code: "511621",
            name: "岳池县"
          },
          {
            code: "511622",
            name: "武胜县"
          },
          {
            code: "511623",
            name: "邻水县"
          },
          {
            code: "511681",
            name: "华蓥市"
          }
        ]
      },
      {
        code: "5117",
        name: "达州市",
        children: [
          {
            code: "511702",
            name: "通川区"
          },
          {
            code: "511703",
            name: "达川区"
          },
          {
            code: "511722",
            name: "宣汉县"
          },
          {
            code: "511723",
            name: "开江县"
          },
          {
            code: "511724",
            name: "大竹县"
          },
          {
            code: "511725",
            name: "渠县"
          },
          {
            code: "511771",
            name: "达州经济开发区"
          },
          {
            code: "511781",
            name: "万源市"
          }
        ]
      },
      {
        code: "5118",
        name: "雅安市",
        children: [
          {
            code: "511802",
            name: "雨城区"
          },
          {
            code: "511803",
            name: "名山区"
          },
          {
            code: "511822",
            name: "荥经县"
          },
          {
            code: "511823",
            name: "汉源县"
          },
          {
            code: "511824",
            name: "石棉县"
          },
          {
            code: "511825",
            name: "天全县"
          },
          {
            code: "511826",
            name: "芦山县"
          },
          {
            code: "511827",
            name: "宝兴县"
          }
        ]
      },
      {
        code: "5119",
        name: "巴中市",
        children: [
          {
            code: "511902",
            name: "巴州区"
          },
          {
            code: "511903",
            name: "恩阳区"
          },
          {
            code: "511921",
            name: "通江县"
          },
          {
            code: "511922",
            name: "南江县"
          },
          {
            code: "511923",
            name: "平昌县"
          },
          {
            code: "511971",
            name: "巴中经济开发区"
          }
        ]
      },
      {
        code: "5120",
        name: "资阳市",
        children: [
          {
            code: "512002",
            name: "雁江区"
          },
          {
            code: "512021",
            name: "安岳县"
          },
          {
            code: "512022",
            name: "乐至县"
          }
        ]
      },
      {
        code: "5132",
        name: "阿坝藏族羌族自治州",
        children: [
          {
            code: "513201",
            name: "马尔康市"
          },
          {
            code: "513221",
            name: "汶川县"
          },
          {
            code: "513222",
            name: "理县"
          },
          {
            code: "513223",
            name: "茂县"
          },
          {
            code: "513224",
            name: "松潘县"
          },
          {
            code: "513225",
            name: "九寨沟县"
          },
          {
            code: "513226",
            name: "金川县"
          },
          {
            code: "513227",
            name: "小金县"
          },
          {
            code: "513228",
            name: "黑水县"
          },
          {
            code: "513230",
            name: "壤塘县"
          },
          {
            code: "513231",
            name: "阿坝县"
          },
          {
            code: "513232",
            name: "若尔盖县"
          },
          {
            code: "513233",
            name: "红原县"
          }
        ]
      },
      {
        code: "5133",
        name: "甘孜藏族自治州",
        children: [
          {
            code: "513301",
            name: "康定市"
          },
          {
            code: "513322",
            name: "泸定县"
          },
          {
            code: "513323",
            name: "丹巴县"
          },
          {
            code: "513324",
            name: "九龙县"
          },
          {
            code: "513325",
            name: "雅江县"
          },
          {
            code: "513326",
            name: "道孚县"
          },
          {
            code: "513327",
            name: "炉霍县"
          },
          {
            code: "513328",
            name: "甘孜县"
          },
          {
            code: "513329",
            name: "新龙县"
          },
          {
            code: "513330",
            name: "德格县"
          },
          {
            code: "513331",
            name: "白玉县"
          },
          {
            code: "513332",
            name: "石渠县"
          },
          {
            code: "513333",
            name: "色达县"
          },
          {
            code: "513334",
            name: "理塘县"
          },
          {
            code: "513335",
            name: "巴塘县"
          },
          {
            code: "513336",
            name: "乡城县"
          },
          {
            code: "513337",
            name: "稻城县"
          },
          {
            code: "513338",
            name: "得荣县"
          }
        ]
      },
      {
        code: "5134",
        name: "凉山彝族自治州",
        children: [
          {
            code: "513401",
            name: "西昌市"
          },
          {
            code: "513422",
            name: "木里藏族自治县"
          },
          {
            code: "513423",
            name: "盐源县"
          },
          {
            code: "513424",
            name: "德昌县"
          },
          {
            code: "513425",
            name: "会理县"
          },
          {
            code: "513426",
            name: "会东县"
          },
          {
            code: "513427",
            name: "宁南县"
          },
          {
            code: "513428",
            name: "普格县"
          },
          {
            code: "513429",
            name: "布拖县"
          },
          {
            code: "513430",
            name: "金阳县"
          },
          {
            code: "513431",
            name: "昭觉县"
          },
          {
            code: "513432",
            name: "喜德县"
          },
          {
            code: "513433",
            name: "冕宁县"
          },
          {
            code: "513434",
            name: "越西县"
          },
          {
            code: "513435",
            name: "甘洛县"
          },
          {
            code: "513436",
            name: "美姑县"
          },
          {
            code: "513437",
            name: "雷波县"
          }
        ]
      }
    ]
  },
  {
    code: "52",
    name: "贵州省",
    children: [
      {
        code: "5201",
        name: "贵阳市",
        children: [
          {
            code: "520102",
            name: "南明区"
          },
          {
            code: "520103",
            name: "云岩区"
          },
          {
            code: "520111",
            name: "花溪区"
          },
          {
            code: "520112",
            name: "乌当区"
          },
          {
            code: "520113",
            name: "白云区"
          },
          {
            code: "520115",
            name: "观山湖区"
          },
          {
            code: "520121",
            name: "开阳县"
          },
          {
            code: "520122",
            name: "息烽县"
          },
          {
            code: "520123",
            name: "修文县"
          },
          {
            code: "520181",
            name: "清镇市"
          }
        ]
      },
      {
        code: "5202",
        name: "六盘水市",
        children: [
          {
            code: "520201",
            name: "钟山区"
          },
          {
            code: "520203",
            name: "六枝特区"
          },
          {
            code: "520221",
            name: "水城县"
          },
          {
            code: "520281",
            name: "盘州市"
          }
        ]
      },
      {
        code: "5203",
        name: "遵义市",
        children: [
          {
            code: "520302",
            name: "红花岗区"
          },
          {
            code: "520303",
            name: "汇川区"
          },
          {
            code: "520304",
            name: "播州区"
          },
          {
            code: "520322",
            name: "桐梓县"
          },
          {
            code: "520323",
            name: "绥阳县"
          },
          {
            code: "520324",
            name: "正安县"
          },
          {
            code: "520325",
            name: "道真仡佬族苗族自治县"
          },
          {
            code: "520326",
            name: "务川仡佬族苗族自治县"
          },
          {
            code: "520327",
            name: "凤冈县"
          },
          {
            code: "520328",
            name: "湄潭县"
          },
          {
            code: "520329",
            name: "余庆县"
          },
          {
            code: "520330",
            name: "习水县"
          },
          {
            code: "520381",
            name: "赤水市"
          },
          {
            code: "520382",
            name: "仁怀市"
          }
        ]
      },
      {
        code: "5204",
        name: "安顺市",
        children: [
          {
            code: "520402",
            name: "西秀区"
          },
          {
            code: "520403",
            name: "平坝区"
          },
          {
            code: "520422",
            name: "普定县"
          },
          {
            code: "520423",
            name: "镇宁布依族苗族自治县"
          },
          {
            code: "520424",
            name: "关岭布依族苗族自治县"
          },
          {
            code: "520425",
            name: "紫云苗族布依族自治县"
          }
        ]
      },
      {
        code: "5205",
        name: "毕节市",
        children: [
          {
            code: "520502",
            name: "七星关区"
          },
          {
            code: "520521",
            name: "大方县"
          },
          {
            code: "520522",
            name: "黔西县"
          },
          {
            code: "520523",
            name: "金沙县"
          },
          {
            code: "520524",
            name: "织金县"
          },
          {
            code: "520525",
            name: "纳雍县"
          },
          {
            code: "520526",
            name: "威宁彝族回族苗族自治县"
          },
          {
            code: "520527",
            name: "赫章县"
          }
        ]
      },
      {
        code: "5206",
        name: "铜仁市",
        children: [
          {
            code: "520602",
            name: "碧江区"
          },
          {
            code: "520603",
            name: "万山区"
          },
          {
            code: "520621",
            name: "江口县"
          },
          {
            code: "520622",
            name: "玉屏侗族自治县"
          },
          {
            code: "520623",
            name: "石阡县"
          },
          {
            code: "520624",
            name: "思南县"
          },
          {
            code: "520625",
            name: "印江土家族苗族自治县"
          },
          {
            code: "520626",
            name: "德江县"
          },
          {
            code: "520627",
            name: "沿河土家族自治县"
          },
          {
            code: "520628",
            name: "松桃苗族自治县"
          }
        ]
      },
      {
        code: "5223",
        name: "黔西南布依族苗族自治州",
        children: [
          {
            code: "522301",
            name: "兴义市"
          },
          {
            code: "522302",
            name: "兴仁市"
          },
          {
            code: "522323",
            name: "普安县"
          },
          {
            code: "522324",
            name: "晴隆县"
          },
          {
            code: "522325",
            name: "贞丰县"
          },
          {
            code: "522326",
            name: "望谟县"
          },
          {
            code: "522327",
            name: "册亨县"
          },
          {
            code: "522328",
            name: "安龙县"
          }
        ]
      },
      {
        code: "5226",
        name: "黔东南苗族侗族自治州",
        children: [
          {
            code: "522601",
            name: "凯里市"
          },
          {
            code: "522622",
            name: "黄平县"
          },
          {
            code: "522623",
            name: "施秉县"
          },
          {
            code: "522624",
            name: "三穗县"
          },
          {
            code: "522625",
            name: "镇远县"
          },
          {
            code: "522626",
            name: "岑巩县"
          },
          {
            code: "522627",
            name: "天柱县"
          },
          {
            code: "522628",
            name: "锦屏县"
          },
          {
            code: "522629",
            name: "剑河县"
          },
          {
            code: "522630",
            name: "台江县"
          },
          {
            code: "522631",
            name: "黎平县"
          },
          {
            code: "522632",
            name: "榕江县"
          },
          {
            code: "522633",
            name: "从江县"
          },
          {
            code: "522634",
            name: "雷山县"
          },
          {
            code: "522635",
            name: "麻江县"
          },
          {
            code: "522636",
            name: "丹寨县"
          }
        ]
      },
      {
        code: "5227",
        name: "黔南布依族苗族自治州",
        children: [
          {
            code: "522701",
            name: "都匀市"
          },
          {
            code: "522702",
            name: "福泉市"
          },
          {
            code: "522722",
            name: "荔波县"
          },
          {
            code: "522723",
            name: "贵定县"
          },
          {
            code: "522725",
            name: "瓮安县"
          },
          {
            code: "522726",
            name: "独山县"
          },
          {
            code: "522727",
            name: "平塘县"
          },
          {
            code: "522728",
            name: "罗甸县"
          },
          {
            code: "522729",
            name: "长顺县"
          },
          {
            code: "522730",
            name: "龙里县"
          },
          {
            code: "522731",
            name: "惠水县"
          },
          {
            code: "522732",
            name: "三都水族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "53",
    name: "云南省",
    children: [
      {
        code: "5301",
        name: "昆明市",
        children: [
          {
            code: "530102",
            name: "五华区"
          },
          {
            code: "530103",
            name: "盘龙区"
          },
          {
            code: "530111",
            name: "官渡区"
          },
          {
            code: "530112",
            name: "西山区"
          },
          {
            code: "530113",
            name: "东川区"
          },
          {
            code: "530114",
            name: "呈贡区"
          },
          {
            code: "530115",
            name: "晋宁区"
          },
          {
            code: "530124",
            name: "富民县"
          },
          {
            code: "530125",
            name: "宜良县"
          },
          {
            code: "530126",
            name: "石林彝族自治县"
          },
          {
            code: "530127",
            name: "嵩明县"
          },
          {
            code: "530128",
            name: "禄劝彝族苗族自治县"
          },
          {
            code: "530129",
            name: "寻甸回族彝族自治县"
          },
          {
            code: "530181",
            name: "安宁市"
          }
        ]
      },
      {
        code: "5303",
        name: "曲靖市",
        children: [
          {
            code: "530302",
            name: "麒麟区"
          },
          {
            code: "530303",
            name: "沾益区"
          },
          {
            code: "530304",
            name: "马龙区"
          },
          {
            code: "530322",
            name: "陆良县"
          },
          {
            code: "530323",
            name: "师宗县"
          },
          {
            code: "530324",
            name: "罗平县"
          },
          {
            code: "530325",
            name: "富源县"
          },
          {
            code: "530326",
            name: "会泽县"
          },
          {
            code: "530381",
            name: "宣威市"
          }
        ]
      },
      {
        code: "5304",
        name: "玉溪市",
        children: [
          {
            code: "530402",
            name: "红塔区"
          },
          {
            code: "530403",
            name: "江川区"
          },
          {
            code: "530423",
            name: "通海县"
          },
          {
            code: "530424",
            name: "华宁县"
          },
          {
            code: "530425",
            name: "易门县"
          },
          {
            code: "530426",
            name: "峨山彝族自治县"
          },
          {
            code: "530427",
            name: "新平彝族傣族自治县"
          },
          {
            code: "530428",
            name: "元江哈尼族彝族傣族自治县"
          },
          {
            code: "530481",
            name: "澄江市"
          }
        ]
      },
      {
        code: "5305",
        name: "保山市",
        children: [
          {
            code: "530502",
            name: "隆阳区"
          },
          {
            code: "530521",
            name: "施甸县"
          },
          {
            code: "530523",
            name: "龙陵县"
          },
          {
            code: "530524",
            name: "昌宁县"
          },
          {
            code: "530581",
            name: "腾冲市"
          }
        ]
      },
      {
        code: "5306",
        name: "昭通市",
        children: [
          {
            code: "530602",
            name: "昭阳区"
          },
          {
            code: "530621",
            name: "鲁甸县"
          },
          {
            code: "530622",
            name: "巧家县"
          },
          {
            code: "530623",
            name: "盐津县"
          },
          {
            code: "530624",
            name: "大关县"
          },
          {
            code: "530625",
            name: "永善县"
          },
          {
            code: "530626",
            name: "绥江县"
          },
          {
            code: "530627",
            name: "镇雄县"
          },
          {
            code: "530628",
            name: "彝良县"
          },
          {
            code: "530629",
            name: "威信县"
          },
          {
            code: "530681",
            name: "水富市"
          }
        ]
      },
      {
        code: "5307",
        name: "丽江市",
        children: [
          {
            code: "530702",
            name: "古城区"
          },
          {
            code: "530721",
            name: "玉龙纳西族自治县"
          },
          {
            code: "530722",
            name: "永胜县"
          },
          {
            code: "530723",
            name: "华坪县"
          },
          {
            code: "530724",
            name: "宁蒗彝族自治县"
          }
        ]
      },
      {
        code: "5308",
        name: "普洱市",
        children: [
          {
            code: "530802",
            name: "思茅区"
          },
          {
            code: "530821",
            name: "宁洱哈尼族彝族自治县"
          },
          {
            code: "530822",
            name: "墨江哈尼族自治县"
          },
          {
            code: "530823",
            name: "景东彝族自治县"
          },
          {
            code: "530824",
            name: "景谷傣族彝族自治县"
          },
          {
            code: "530825",
            name: "镇沅彝族哈尼族拉祜族自治县"
          },
          {
            code: "530826",
            name: "江城哈尼族彝族自治县"
          },
          {
            code: "530827",
            name: "孟连傣族拉祜族佤族自治县"
          },
          {
            code: "530828",
            name: "澜沧拉祜族自治县"
          },
          {
            code: "530829",
            name: "西盟佤族自治县"
          }
        ]
      },
      {
        code: "5309",
        name: "临沧市",
        children: [
          {
            code: "530902",
            name: "临翔区"
          },
          {
            code: "530921",
            name: "凤庆县"
          },
          {
            code: "530922",
            name: "云县"
          },
          {
            code: "530923",
            name: "永德县"
          },
          {
            code: "530924",
            name: "镇康县"
          },
          {
            code: "530925",
            name: "双江拉祜族佤族布朗族傣族自治县"
          },
          {
            code: "530926",
            name: "耿马傣族佤族自治县"
          },
          {
            code: "530927",
            name: "沧源佤族自治县"
          }
        ]
      },
      {
        code: "5323",
        name: "楚雄彝族自治州",
        children: [
          {
            code: "532301",
            name: "楚雄市"
          },
          {
            code: "532322",
            name: "双柏县"
          },
          {
            code: "532323",
            name: "牟定县"
          },
          {
            code: "532324",
            name: "南华县"
          },
          {
            code: "532325",
            name: "姚安县"
          },
          {
            code: "532326",
            name: "大姚县"
          },
          {
            code: "532327",
            name: "永仁县"
          },
          {
            code: "532328",
            name: "元谋县"
          },
          {
            code: "532329",
            name: "武定县"
          },
          {
            code: "532331",
            name: "禄丰县"
          }
        ]
      },
      {
        code: "5325",
        name: "红河哈尼族彝族自治州",
        children: [
          {
            code: "532501",
            name: "个旧市"
          },
          {
            code: "532502",
            name: "开远市"
          },
          {
            code: "532503",
            name: "蒙自市"
          },
          {
            code: "532504",
            name: "弥勒市"
          },
          {
            code: "532523",
            name: "屏边苗族自治县"
          },
          {
            code: "532524",
            name: "建水县"
          },
          {
            code: "532525",
            name: "石屏县"
          },
          {
            code: "532527",
            name: "泸西县"
          },
          {
            code: "532528",
            name: "元阳县"
          },
          {
            code: "532529",
            name: "红河县"
          },
          {
            code: "532530",
            name: "金平苗族瑶族傣族自治县"
          },
          {
            code: "532531",
            name: "绿春县"
          },
          {
            code: "532532",
            name: "河口瑶族自治县"
          }
        ]
      },
      {
        code: "5326",
        name: "文山壮族苗族自治州",
        children: [
          {
            code: "532601",
            name: "文山市"
          },
          {
            code: "532622",
            name: "砚山县"
          },
          {
            code: "532623",
            name: "西畴县"
          },
          {
            code: "532624",
            name: "麻栗坡县"
          },
          {
            code: "532625",
            name: "马关县"
          },
          {
            code: "532626",
            name: "丘北县"
          },
          {
            code: "532627",
            name: "广南县"
          },
          {
            code: "532628",
            name: "富宁县"
          }
        ]
      },
      {
        code: "5328",
        name: "西双版纳傣族自治州",
        children: [
          {
            code: "532801",
            name: "景洪市"
          },
          {
            code: "532822",
            name: "勐海县"
          },
          {
            code: "532823",
            name: "勐腊县"
          }
        ]
      },
      {
        code: "5329",
        name: "大理白族自治州",
        children: [
          {
            code: "532901",
            name: "大理市"
          },
          {
            code: "532922",
            name: "漾濞彝族自治县"
          },
          {
            code: "532923",
            name: "祥云县"
          },
          {
            code: "532924",
            name: "宾川县"
          },
          {
            code: "532925",
            name: "弥渡县"
          },
          {
            code: "532926",
            name: "南涧彝族自治县"
          },
          {
            code: "532927",
            name: "巍山彝族回族自治县"
          },
          {
            code: "532928",
            name: "永平县"
          },
          {
            code: "532929",
            name: "云龙县"
          },
          {
            code: "532930",
            name: "洱源县"
          },
          {
            code: "532931",
            name: "剑川县"
          },
          {
            code: "532932",
            name: "鹤庆县"
          }
        ]
      },
      {
        code: "5331",
        name: "德宏傣族景颇族自治州",
        children: [
          {
            code: "533102",
            name: "瑞丽市"
          },
          {
            code: "533103",
            name: "芒市"
          },
          {
            code: "533122",
            name: "梁河县"
          },
          {
            code: "533123",
            name: "盈江县"
          },
          {
            code: "533124",
            name: "陇川县"
          }
        ]
      },
      {
        code: "5333",
        name: "怒江傈僳族自治州",
        children: [
          {
            code: "533301",
            name: "泸水市"
          },
          {
            code: "533323",
            name: "福贡县"
          },
          {
            code: "533324",
            name: "贡山独龙族怒族自治县"
          },
          {
            code: "533325",
            name: "兰坪白族普米族自治县"
          }
        ]
      },
      {
        code: "5334",
        name: "迪庆藏族自治州",
        children: [
          {
            code: "533401",
            name: "香格里拉市"
          },
          {
            code: "533422",
            name: "德钦县"
          },
          {
            code: "533423",
            name: "维西傈僳族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "54",
    name: "西藏自治区",
    children: [
      {
        code: "5401",
        name: "拉萨市",
        children: [
          {
            code: "540102",
            name: "城关区"
          },
          {
            code: "540103",
            name: "堆龙德庆区"
          },
          {
            code: "540104",
            name: "达孜区"
          },
          {
            code: "540121",
            name: "林周县"
          },
          {
            code: "540122",
            name: "当雄县"
          },
          {
            code: "540123",
            name: "尼木县"
          },
          {
            code: "540124",
            name: "曲水县"
          },
          {
            code: "540127",
            name: "墨竹工卡县"
          },
          {
            code: "540171",
            name: "格尔木藏青工业园区"
          },
          {
            code: "540172",
            name: "拉萨经济技术开发区"
          },
          {
            code: "540173",
            name: "西藏文化旅游创意园区"
          },
          {
            code: "540174",
            name: "达孜工业园区"
          }
        ]
      },
      {
        code: "5402",
        name: "日喀则市",
        children: [
          {
            code: "540202",
            name: "桑珠孜区"
          },
          {
            code: "540221",
            name: "南木林县"
          },
          {
            code: "540222",
            name: "江孜县"
          },
          {
            code: "540223",
            name: "定日县"
          },
          {
            code: "540224",
            name: "萨迦县"
          },
          {
            code: "540225",
            name: "拉孜县"
          },
          {
            code: "540226",
            name: "昂仁县"
          },
          {
            code: "540227",
            name: "谢通门县"
          },
          {
            code: "540228",
            name: "白朗县"
          },
          {
            code: "540229",
            name: "仁布县"
          },
          {
            code: "540230",
            name: "康马县"
          },
          {
            code: "540231",
            name: "定结县"
          },
          {
            code: "540232",
            name: "仲巴县"
          },
          {
            code: "540233",
            name: "亚东县"
          },
          {
            code: "540234",
            name: "吉隆县"
          },
          {
            code: "540235",
            name: "聂拉木县"
          },
          {
            code: "540236",
            name: "萨嘎县"
          },
          {
            code: "540237",
            name: "岗巴县"
          }
        ]
      },
      {
        code: "5403",
        name: "昌都市",
        children: [
          {
            code: "540302",
            name: "卡若区"
          },
          {
            code: "540321",
            name: "江达县"
          },
          {
            code: "540322",
            name: "贡觉县"
          },
          {
            code: "540323",
            name: "类乌齐县"
          },
          {
            code: "540324",
            name: "丁青县"
          },
          {
            code: "540325",
            name: "察雅县"
          },
          {
            code: "540326",
            name: "八宿县"
          },
          {
            code: "540327",
            name: "左贡县"
          },
          {
            code: "540328",
            name: "芒康县"
          },
          {
            code: "540329",
            name: "洛隆县"
          },
          {
            code: "540330",
            name: "边坝县"
          }
        ]
      },
      {
        code: "5404",
        name: "林芝市",
        children: [
          {
            code: "540402",
            name: "巴宜区"
          },
          {
            code: "540421",
            name: "工布江达县"
          },
          {
            code: "540422",
            name: "米林县"
          },
          {
            code: "540423",
            name: "墨脱县"
          },
          {
            code: "540424",
            name: "波密县"
          },
          {
            code: "540425",
            name: "察隅县"
          },
          {
            code: "540426",
            name: "朗县"
          }
        ]
      },
      {
        code: "5405",
        name: "山南市",
        children: [
          {
            code: "540502",
            name: "乃东区"
          },
          {
            code: "540521",
            name: "扎囊县"
          },
          {
            code: "540522",
            name: "贡嘎县"
          },
          {
            code: "540523",
            name: "桑日县"
          },
          {
            code: "540524",
            name: "琼结县"
          },
          {
            code: "540525",
            name: "曲松县"
          },
          {
            code: "540526",
            name: "措美县"
          },
          {
            code: "540527",
            name: "洛扎县"
          },
          {
            code: "540528",
            name: "加查县"
          },
          {
            code: "540529",
            name: "隆子县"
          },
          {
            code: "540530",
            name: "错那县"
          },
          {
            code: "540531",
            name: "浪卡子县"
          }
        ]
      },
      {
        code: "5406",
        name: "那曲市",
        children: [
          {
            code: "540602",
            name: "色尼区"
          },
          {
            code: "540621",
            name: "嘉黎县"
          },
          {
            code: "540622",
            name: "比如县"
          },
          {
            code: "540623",
            name: "聂荣县"
          },
          {
            code: "540624",
            name: "安多县"
          },
          {
            code: "540625",
            name: "申扎县"
          },
          {
            code: "540626",
            name: "索县"
          },
          {
            code: "540627",
            name: "班戈县"
          },
          {
            code: "540628",
            name: "巴青县"
          },
          {
            code: "540629",
            name: "尼玛县"
          },
          {
            code: "540630",
            name: "双湖县"
          }
        ]
      },
      {
        code: "5425",
        name: "阿里地区",
        children: [
          {
            code: "542521",
            name: "普兰县"
          },
          {
            code: "542522",
            name: "札达县"
          },
          {
            code: "542523",
            name: "噶尔县"
          },
          {
            code: "542524",
            name: "日土县"
          },
          {
            code: "542525",
            name: "革吉县"
          },
          {
            code: "542526",
            name: "改则县"
          },
          {
            code: "542527",
            name: "措勤县"
          }
        ]
      }
    ]
  },
  {
    code: "61",
    name: "陕西省",
    children: [
      {
        code: "6101",
        name: "西安市",
        children: [
          {
            code: "610102",
            name: "新城区"
          },
          {
            code: "610103",
            name: "碑林区"
          },
          {
            code: "610104",
            name: "莲湖区"
          },
          {
            code: "610111",
            name: "灞桥区"
          },
          {
            code: "610112",
            name: "未央区"
          },
          {
            code: "610113",
            name: "雁塔区"
          },
          {
            code: "610114",
            name: "阎良区"
          },
          {
            code: "610115",
            name: "临潼区"
          },
          {
            code: "610116",
            name: "长安区"
          },
          {
            code: "610117",
            name: "高陵区"
          },
          {
            code: "610118",
            name: "鄠邑区"
          },
          {
            code: "610122",
            name: "蓝田县"
          },
          {
            code: "610124",
            name: "周至县"
          }
        ]
      },
      {
        code: "6102",
        name: "铜川市",
        children: [
          {
            code: "610202",
            name: "王益区"
          },
          {
            code: "610203",
            name: "印台区"
          },
          {
            code: "610204",
            name: "耀州区"
          },
          {
            code: "610222",
            name: "宜君县"
          }
        ]
      },
      {
        code: "6103",
        name: "宝鸡市",
        children: [
          {
            code: "610302",
            name: "渭滨区"
          },
          {
            code: "610303",
            name: "金台区"
          },
          {
            code: "610304",
            name: "陈仓区"
          },
          {
            code: "610322",
            name: "凤翔县"
          },
          {
            code: "610323",
            name: "岐山县"
          },
          {
            code: "610324",
            name: "扶风县"
          },
          {
            code: "610326",
            name: "眉县"
          },
          {
            code: "610327",
            name: "陇县"
          },
          {
            code: "610328",
            name: "千阳县"
          },
          {
            code: "610329",
            name: "麟游县"
          },
          {
            code: "610330",
            name: "凤县"
          },
          {
            code: "610331",
            name: "太白县"
          }
        ]
      },
      {
        code: "6104",
        name: "咸阳市",
        children: [
          {
            code: "610402",
            name: "秦都区"
          },
          {
            code: "610403",
            name: "杨陵区"
          },
          {
            code: "610404",
            name: "渭城区"
          },
          {
            code: "610422",
            name: "三原县"
          },
          {
            code: "610423",
            name: "泾阳县"
          },
          {
            code: "610424",
            name: "乾县"
          },
          {
            code: "610425",
            name: "礼泉县"
          },
          {
            code: "610426",
            name: "永寿县"
          },
          {
            code: "610428",
            name: "长武县"
          },
          {
            code: "610429",
            name: "旬邑县"
          },
          {
            code: "610430",
            name: "淳化县"
          },
          {
            code: "610431",
            name: "武功县"
          },
          {
            code: "610481",
            name: "兴平市"
          },
          {
            code: "610482",
            name: "彬州市"
          }
        ]
      },
      {
        code: "6105",
        name: "渭南市",
        children: [
          {
            code: "610502",
            name: "临渭区"
          },
          {
            code: "610503",
            name: "华州区"
          },
          {
            code: "610522",
            name: "潼关县"
          },
          {
            code: "610523",
            name: "大荔县"
          },
          {
            code: "610524",
            name: "合阳县"
          },
          {
            code: "610525",
            name: "澄城县"
          },
          {
            code: "610526",
            name: "蒲城县"
          },
          {
            code: "610527",
            name: "白水县"
          },
          {
            code: "610528",
            name: "富平县"
          },
          {
            code: "610581",
            name: "韩城市"
          },
          {
            code: "610582",
            name: "华阴市"
          }
        ]
      },
      {
        code: "6106",
        name: "延安市",
        children: [
          {
            code: "610602",
            name: "宝塔区"
          },
          {
            code: "610603",
            name: "安塞区"
          },
          {
            code: "610621",
            name: "延长县"
          },
          {
            code: "610622",
            name: "延川县"
          },
          {
            code: "610625",
            name: "志丹县"
          },
          {
            code: "610626",
            name: "吴起县"
          },
          {
            code: "610627",
            name: "甘泉县"
          },
          {
            code: "610628",
            name: "富县"
          },
          {
            code: "610629",
            name: "洛川县"
          },
          {
            code: "610630",
            name: "宜川县"
          },
          {
            code: "610631",
            name: "黄龙县"
          },
          {
            code: "610632",
            name: "黄陵县"
          },
          {
            code: "610681",
            name: "子长市"
          }
        ]
      },
      {
        code: "6107",
        name: "汉中市",
        children: [
          {
            code: "610702",
            name: "汉台区"
          },
          {
            code: "610703",
            name: "南郑区"
          },
          {
            code: "610722",
            name: "城固县"
          },
          {
            code: "610723",
            name: "洋县"
          },
          {
            code: "610724",
            name: "西乡县"
          },
          {
            code: "610725",
            name: "勉县"
          },
          {
            code: "610726",
            name: "宁强县"
          },
          {
            code: "610727",
            name: "略阳县"
          },
          {
            code: "610728",
            name: "镇巴县"
          },
          {
            code: "610729",
            name: "留坝县"
          },
          {
            code: "610730",
            name: "佛坪县"
          }
        ]
      },
      {
        code: "6108",
        name: "榆林市",
        children: [
          {
            code: "610802",
            name: "榆阳区"
          },
          {
            code: "610803",
            name: "横山区"
          },
          {
            code: "610822",
            name: "府谷县"
          },
          {
            code: "610824",
            name: "靖边县"
          },
          {
            code: "610825",
            name: "定边县"
          },
          {
            code: "610826",
            name: "绥德县"
          },
          {
            code: "610827",
            name: "米脂县"
          },
          {
            code: "610828",
            name: "佳县"
          },
          {
            code: "610829",
            name: "吴堡县"
          },
          {
            code: "610830",
            name: "清涧县"
          },
          {
            code: "610831",
            name: "子洲县"
          },
          {
            code: "610881",
            name: "神木市"
          }
        ]
      },
      {
        code: "6109",
        name: "安康市",
        children: [
          {
            code: "610902",
            name: "汉滨区"
          },
          {
            code: "610921",
            name: "汉阴县"
          },
          {
            code: "610922",
            name: "石泉县"
          },
          {
            code: "610923",
            name: "宁陕县"
          },
          {
            code: "610924",
            name: "紫阳县"
          },
          {
            code: "610925",
            name: "岚皋县"
          },
          {
            code: "610926",
            name: "平利县"
          },
          {
            code: "610927",
            name: "镇坪县"
          },
          {
            code: "610928",
            name: "旬阳县"
          },
          {
            code: "610929",
            name: "白河县"
          }
        ]
      },
      {
        code: "6110",
        name: "商洛市",
        children: [
          {
            code: "611002",
            name: "商州区"
          },
          {
            code: "611021",
            name: "洛南县"
          },
          {
            code: "611022",
            name: "丹凤县"
          },
          {
            code: "611023",
            name: "商南县"
          },
          {
            code: "611024",
            name: "山阳县"
          },
          {
            code: "611025",
            name: "镇安县"
          },
          {
            code: "611026",
            name: "柞水县"
          }
        ]
      }
    ]
  },
  {
    code: "62",
    name: "甘肃省",
    children: [
      {
        code: "6201",
        name: "兰州市",
        children: [
          {
            code: "620102",
            name: "城关区"
          },
          {
            code: "620103",
            name: "七里河区"
          },
          {
            code: "620104",
            name: "西固区"
          },
          {
            code: "620105",
            name: "安宁区"
          },
          {
            code: "620111",
            name: "红古区"
          },
          {
            code: "620121",
            name: "永登县"
          },
          {
            code: "620122",
            name: "皋兰县"
          },
          {
            code: "620123",
            name: "榆中县"
          },
          {
            code: "620171",
            name: "兰州新区"
          }
        ]
      },
      {
        code: "6202",
        name: "嘉峪关市",
        children: [
          {
            code: "620201001",
            name: "雄关街道"
          },
          {
            code: "620201002",
            name: "钢城街道"
          },
          {
            code: "620201100",
            name: "新城镇"
          },
          {
            code: "620201101",
            name: "峪泉镇"
          },
          {
            code: "620201102",
            name: "文殊镇"
          }
        ]
      },
      {
        code: "6203",
        name: "金昌市",
        children: [
          {
            code: "620302",
            name: "金川区"
          },
          {
            code: "620321",
            name: "永昌县"
          }
        ]
      },
      {
        code: "6204",
        name: "白银市",
        children: [
          {
            code: "620402",
            name: "白银区"
          },
          {
            code: "620403",
            name: "平川区"
          },
          {
            code: "620421",
            name: "靖远县"
          },
          {
            code: "620422",
            name: "会宁县"
          },
          {
            code: "620423",
            name: "景泰县"
          }
        ]
      },
      {
        code: "6205",
        name: "天水市",
        children: [
          {
            code: "620502",
            name: "秦州区"
          },
          {
            code: "620503",
            name: "麦积区"
          },
          {
            code: "620521",
            name: "清水县"
          },
          {
            code: "620522",
            name: "秦安县"
          },
          {
            code: "620523",
            name: "甘谷县"
          },
          {
            code: "620524",
            name: "武山县"
          },
          {
            code: "620525",
            name: "张家川回族自治县"
          }
        ]
      },
      {
        code: "6206",
        name: "武威市",
        children: [
          {
            code: "620602",
            name: "凉州区"
          },
          {
            code: "620621",
            name: "民勤县"
          },
          {
            code: "620622",
            name: "古浪县"
          },
          {
            code: "620623",
            name: "天祝藏族自治县"
          }
        ]
      },
      {
        code: "6207",
        name: "张掖市",
        children: [
          {
            code: "620702",
            name: "甘州区"
          },
          {
            code: "620721",
            name: "肃南裕固族自治县"
          },
          {
            code: "620722",
            name: "民乐县"
          },
          {
            code: "620723",
            name: "临泽县"
          },
          {
            code: "620724",
            name: "高台县"
          },
          {
            code: "620725",
            name: "山丹县"
          }
        ]
      },
      {
        code: "6208",
        name: "平凉市",
        children: [
          {
            code: "620802",
            name: "崆峒区"
          },
          {
            code: "620821",
            name: "泾川县"
          },
          {
            code: "620822",
            name: "灵台县"
          },
          {
            code: "620823",
            name: "崇信县"
          },
          {
            code: "620825",
            name: "庄浪县"
          },
          {
            code: "620826",
            name: "静宁县"
          },
          {
            code: "620881",
            name: "华亭市"
          }
        ]
      },
      {
        code: "6209",
        name: "酒泉市",
        children: [
          {
            code: "620902",
            name: "肃州区"
          },
          {
            code: "620921",
            name: "金塔县"
          },
          {
            code: "620922",
            name: "瓜州县"
          },
          {
            code: "620923",
            name: "肃北蒙古族自治县"
          },
          {
            code: "620924",
            name: "阿克塞哈萨克族自治县"
          },
          {
            code: "620981",
            name: "玉门市"
          },
          {
            code: "620982",
            name: "敦煌市"
          }
        ]
      },
      {
        code: "6210",
        name: "庆阳市",
        children: [
          {
            code: "621002",
            name: "西峰区"
          },
          {
            code: "621021",
            name: "庆城县"
          },
          {
            code: "621022",
            name: "环县"
          },
          {
            code: "621023",
            name: "华池县"
          },
          {
            code: "621024",
            name: "合水县"
          },
          {
            code: "621025",
            name: "正宁县"
          },
          {
            code: "621026",
            name: "宁县"
          },
          {
            code: "621027",
            name: "镇原县"
          }
        ]
      },
      {
        code: "6211",
        name: "定西市",
        children: [
          {
            code: "621102",
            name: "安定区"
          },
          {
            code: "621121",
            name: "通渭县"
          },
          {
            code: "621122",
            name: "陇西县"
          },
          {
            code: "621123",
            name: "渭源县"
          },
          {
            code: "621124",
            name: "临洮县"
          },
          {
            code: "621125",
            name: "漳县"
          },
          {
            code: "621126",
            name: "岷县"
          }
        ]
      },
      {
        code: "6212",
        name: "陇南市",
        children: [
          {
            code: "621202",
            name: "武都区"
          },
          {
            code: "621221",
            name: "成县"
          },
          {
            code: "621222",
            name: "文县"
          },
          {
            code: "621223",
            name: "宕昌县"
          },
          {
            code: "621224",
            name: "康县"
          },
          {
            code: "621225",
            name: "西和县"
          },
          {
            code: "621226",
            name: "礼县"
          },
          {
            code: "621227",
            name: "徽县"
          },
          {
            code: "621228",
            name: "两当县"
          }
        ]
      },
      {
        code: "6229",
        name: "临夏回族自治州",
        children: [
          {
            code: "622901",
            name: "临夏市"
          },
          {
            code: "622921",
            name: "临夏县"
          },
          {
            code: "622922",
            name: "康乐县"
          },
          {
            code: "622923",
            name: "永靖县"
          },
          {
            code: "622924",
            name: "广河县"
          },
          {
            code: "622925",
            name: "和政县"
          },
          {
            code: "622926",
            name: "东乡族自治县"
          },
          {
            code: "622927",
            name: "积石山保安族东乡族撒拉族自治县"
          }
        ]
      },
      {
        code: "6230",
        name: "甘南藏族自治州",
        children: [
          {
            code: "623001",
            name: "合作市"
          },
          {
            code: "623021",
            name: "临潭县"
          },
          {
            code: "623022",
            name: "卓尼县"
          },
          {
            code: "623023",
            name: "舟曲县"
          },
          {
            code: "623024",
            name: "迭部县"
          },
          {
            code: "623025",
            name: "玛曲县"
          },
          {
            code: "623026",
            name: "碌曲县"
          },
          {
            code: "623027",
            name: "夏河县"
          }
        ]
      }
    ]
  },
  {
    code: "63",
    name: "青海省",
    children: [
      {
        code: "6301",
        name: "西宁市",
        children: [
          {
            code: "630102",
            name: "城东区"
          },
          {
            code: "630103",
            name: "城中区"
          },
          {
            code: "630104",
            name: "城西区"
          },
          {
            code: "630105",
            name: "城北区"
          },
          {
            code: "630106",
            name: "湟中区"
          },
          {
            code: "630121",
            name: "大通回族土族自治县"
          },
          {
            code: "630123",
            name: "湟源县"
          }
        ]
      },
      {
        code: "6302",
        name: "海东市",
        children: [
          {
            code: "630202",
            name: "乐都区"
          },
          {
            code: "630203",
            name: "平安区"
          },
          {
            code: "630222",
            name: "民和回族土族自治县"
          },
          {
            code: "630223",
            name: "互助土族自治县"
          },
          {
            code: "630224",
            name: "化隆回族自治县"
          },
          {
            code: "630225",
            name: "循化撒拉族自治县"
          }
        ]
      },
      {
        code: "6322",
        name: "海北藏族自治州",
        children: [
          {
            code: "632221",
            name: "门源回族自治县"
          },
          {
            code: "632222",
            name: "祁连县"
          },
          {
            code: "632223",
            name: "海晏县"
          },
          {
            code: "632224",
            name: "刚察县"
          }
        ]
      },
      {
        code: "6323",
        name: "黄南藏族自治州",
        children: [
          {
            code: "632321",
            name: "同仁县"
          },
          {
            code: "632322",
            name: "尖扎县"
          },
          {
            code: "632323",
            name: "泽库县"
          },
          {
            code: "632324",
            name: "河南蒙古族自治县"
          }
        ]
      },
      {
        code: "6325",
        name: "海南藏族自治州",
        children: [
          {
            code: "632521",
            name: "共和县"
          },
          {
            code: "632522",
            name: "同德县"
          },
          {
            code: "632523",
            name: "贵德县"
          },
          {
            code: "632524",
            name: "兴海县"
          },
          {
            code: "632525",
            name: "贵南县"
          }
        ]
      },
      {
        code: "6326",
        name: "果洛藏族自治州",
        children: [
          {
            code: "632621",
            name: "玛沁县"
          },
          {
            code: "632622",
            name: "班玛县"
          },
          {
            code: "632623",
            name: "甘德县"
          },
          {
            code: "632624",
            name: "达日县"
          },
          {
            code: "632625",
            name: "久治县"
          },
          {
            code: "632626",
            name: "玛多县"
          }
        ]
      },
      {
        code: "6327",
        name: "玉树藏族自治州",
        children: [
          {
            code: "632701",
            name: "玉树市"
          },
          {
            code: "632722",
            name: "杂多县"
          },
          {
            code: "632723",
            name: "称多县"
          },
          {
            code: "632724",
            name: "治多县"
          },
          {
            code: "632725",
            name: "囊谦县"
          },
          {
            code: "632726",
            name: "曲麻莱县"
          }
        ]
      },
      {
        code: "6328",
        name: "海西蒙古族藏族自治州",
        children: [
          {
            code: "632801",
            name: "格尔木市"
          },
          {
            code: "632802",
            name: "德令哈市"
          },
          {
            code: "632803",
            name: "茫崖市"
          },
          {
            code: "632821",
            name: "乌兰县"
          },
          {
            code: "632822",
            name: "都兰县"
          },
          {
            code: "632823",
            name: "天峻县"
          },
          {
            code: "632857",
            name: "大柴旦行政委员会"
          }
        ]
      }
    ]
  },
  {
    code: "64",
    name: "宁夏回族自治区",
    children: [
      {
        code: "6401",
        name: "银川市",
        children: [
          {
            code: "640104",
            name: "兴庆区"
          },
          {
            code: "640105",
            name: "西夏区"
          },
          {
            code: "640106",
            name: "金凤区"
          },
          {
            code: "640121",
            name: "永宁县"
          },
          {
            code: "640122",
            name: "贺兰县"
          },
          {
            code: "640181",
            name: "灵武市"
          }
        ]
      },
      {
        code: "6402",
        name: "石嘴山市",
        children: [
          {
            code: "640202",
            name: "大武口区"
          },
          {
            code: "640205",
            name: "惠农区"
          },
          {
            code: "640221",
            name: "平罗县"
          }
        ]
      },
      {
        code: "6403",
        name: "吴忠市",
        children: [
          {
            code: "640302",
            name: "利通区"
          },
          {
            code: "640303",
            name: "红寺堡区"
          },
          {
            code: "640323",
            name: "盐池县"
          },
          {
            code: "640324",
            name: "同心县"
          },
          {
            code: "640381",
            name: "青铜峡市"
          }
        ]
      },
      {
        code: "6404",
        name: "固原市",
        children: [
          {
            code: "640402",
            name: "原州区"
          },
          {
            code: "640422",
            name: "西吉县"
          },
          {
            code: "640423",
            name: "隆德县"
          },
          {
            code: "640424",
            name: "泾源县"
          },
          {
            code: "640425",
            name: "彭阳县"
          }
        ]
      },
      {
        code: "6405",
        name: "中卫市",
        children: [
          {
            code: "640502",
            name: "沙坡头区"
          },
          {
            code: "640521",
            name: "中宁县"
          },
          {
            code: "640522",
            name: "海原县"
          }
        ]
      }
    ]
  },
  {
    code: "65",
    name: "新疆维吾尔自治区",
    children: [
      {
        code: "6501",
        name: "乌鲁木齐市",
        children: [
          {
            code: "650102",
            name: "天山区"
          },
          {
            code: "650103",
            name: "沙依巴克区"
          },
          {
            code: "650104",
            name: "新市区"
          },
          {
            code: "650105",
            name: "水磨沟区"
          },
          {
            code: "650106",
            name: "头屯河区"
          },
          {
            code: "650107",
            name: "达坂城区"
          },
          {
            code: "650109",
            name: "米东区"
          },
          {
            code: "650121",
            name: "乌鲁木齐县"
          }
        ]
      },
      {
        code: "6502",
        name: "克拉玛依市",
        children: [
          {
            code: "650202",
            name: "独山子区"
          },
          {
            code: "650203",
            name: "克拉玛依区"
          },
          {
            code: "650204",
            name: "白碱滩区"
          },
          {
            code: "650205",
            name: "乌尔禾区"
          }
        ]
      },
      {
        code: "6504",
        name: "吐鲁番市",
        children: [
          {
            code: "650402",
            name: "高昌区"
          },
          {
            code: "650421",
            name: "鄯善县"
          },
          {
            code: "650422",
            name: "托克逊县"
          }
        ]
      },
      {
        code: "6505",
        name: "哈密市",
        children: [
          {
            code: "650502",
            name: "伊州区"
          },
          {
            code: "650521",
            name: "巴里坤哈萨克自治县"
          },
          {
            code: "650522",
            name: "伊吾县"
          }
        ]
      },
      {
        code: "6523",
        name: "昌吉回族自治州",
        children: [
          {
            code: "652301",
            name: "昌吉市"
          },
          {
            code: "652302",
            name: "阜康市"
          },
          {
            code: "652323",
            name: "呼图壁县"
          },
          {
            code: "652324",
            name: "玛纳斯县"
          },
          {
            code: "652325",
            name: "奇台县"
          },
          {
            code: "652327",
            name: "吉木萨尔县"
          },
          {
            code: "652328",
            name: "木垒哈萨克自治县"
          }
        ]
      },
      {
        code: "6527",
        name: "博尔塔拉蒙古自治州",
        children: [
          {
            code: "652701",
            name: "博乐市"
          },
          {
            code: "652702",
            name: "阿拉山口市"
          },
          {
            code: "652722",
            name: "精河县"
          },
          {
            code: "652723",
            name: "温泉县"
          }
        ]
      },
      {
        code: "6528",
        name: "巴音郭楞蒙古自治州",
        children: [
          {
            code: "652801",
            name: "库尔勒市"
          },
          {
            code: "652822",
            name: "轮台县"
          },
          {
            code: "652823",
            name: "尉犁县"
          },
          {
            code: "652824",
            name: "若羌县"
          },
          {
            code: "652825",
            name: "且末县"
          },
          {
            code: "652826",
            name: "焉耆回族自治县"
          },
          {
            code: "652827",
            name: "和静县"
          },
          {
            code: "652828",
            name: "和硕县"
          },
          {
            code: "652829",
            name: "博湖县"
          },
          {
            code: "652871",
            name: "库尔勒经济技术开发区"
          }
        ]
      },
      {
        code: "6529",
        name: "阿克苏地区",
        children: [
          {
            code: "652901",
            name: "阿克苏市"
          },
          {
            code: "652902",
            name: "库车市"
          },
          {
            code: "652922",
            name: "温宿县"
          },
          {
            code: "652924",
            name: "沙雅县"
          },
          {
            code: "652925",
            name: "新和县"
          },
          {
            code: "652926",
            name: "拜城县"
          },
          {
            code: "652927",
            name: "乌什县"
          },
          {
            code: "652928",
            name: "阿瓦提县"
          },
          {
            code: "652929",
            name: "柯坪县"
          }
        ]
      },
      {
        code: "6530",
        name: "克孜勒苏柯尔克孜自治州",
        children: [
          {
            code: "653001",
            name: "阿图什市"
          },
          {
            code: "653022",
            name: "阿克陶县"
          },
          {
            code: "653023",
            name: "阿合奇县"
          },
          {
            code: "653024",
            name: "乌恰县"
          }
        ]
      },
      {
        code: "6531",
        name: "喀什地区",
        children: [
          {
            code: "653101",
            name: "喀什市"
          },
          {
            code: "653121",
            name: "疏附县"
          },
          {
            code: "653122",
            name: "疏勒县"
          },
          {
            code: "653123",
            name: "英吉沙县"
          },
          {
            code: "653124",
            name: "泽普县"
          },
          {
            code: "653125",
            name: "莎车县"
          },
          {
            code: "653126",
            name: "叶城县"
          },
          {
            code: "653127",
            name: "麦盖提县"
          },
          {
            code: "653128",
            name: "岳普湖县"
          },
          {
            code: "653129",
            name: "伽师县"
          },
          {
            code: "653130",
            name: "巴楚县"
          },
          {
            code: "653131",
            name: "塔什库尔干塔吉克自治县"
          }
        ]
      },
      {
        code: "6532",
        name: "和田地区",
        children: [
          {
            code: "653201",
            name: "和田市"
          },
          {
            code: "653221",
            name: "和田县"
          },
          {
            code: "653222",
            name: "墨玉县"
          },
          {
            code: "653223",
            name: "皮山县"
          },
          {
            code: "653224",
            name: "洛浦县"
          },
          {
            code: "653225",
            name: "策勒县"
          },
          {
            code: "653226",
            name: "于田县"
          },
          {
            code: "653227",
            name: "民丰县"
          }
        ]
      },
      {
        code: "6540",
        name: "伊犁哈萨克自治州",
        children: [
          {
            code: "654002",
            name: "伊宁市"
          },
          {
            code: "654003",
            name: "奎屯市"
          },
          {
            code: "654004",
            name: "霍尔果斯市"
          },
          {
            code: "654021",
            name: "伊宁县"
          },
          {
            code: "654022",
            name: "察布查尔锡伯自治县"
          },
          {
            code: "654023",
            name: "霍城县"
          },
          {
            code: "654024",
            name: "巩留县"
          },
          {
            code: "654025",
            name: "新源县"
          },
          {
            code: "654026",
            name: "昭苏县"
          },
          {
            code: "654027",
            name: "特克斯县"
          },
          {
            code: "654028",
            name: "尼勒克县"
          }
        ]
      },
      {
        code: "6542",
        name: "塔城地区",
        children: [
          {
            code: "654201",
            name: "塔城市"
          },
          {
            code: "654202",
            name: "乌苏市"
          },
          {
            code: "654221",
            name: "额敏县"
          },
          {
            code: "654223",
            name: "沙湾县"
          },
          {
            code: "654224",
            name: "托里县"
          },
          {
            code: "654225",
            name: "裕民县"
          },
          {
            code: "654226",
            name: "和布克赛尔蒙古自治县"
          }
        ]
      },
      {
        code: "6543",
        name: "阿勒泰地区",
        children: [
          {
            code: "654301",
            name: "阿勒泰市"
          },
          {
            code: "654321",
            name: "布尔津县"
          },
          {
            code: "654322",
            name: "富蕴县"
          },
          {
            code: "654323",
            name: "福海县"
          },
          {
            code: "654324",
            name: "哈巴河县"
          },
          {
            code: "654325",
            name: "青河县"
          },
          {
            code: "654326",
            name: "吉木乃县"
          }
        ]
      },
      {
        code: "6590",
        name: "自治区直辖县级行政区划",
        children: [
          {
            code: "659001",
            name: "石河子市"
          },
          {
            code: "659002",
            name: "阿拉尔市"
          },
          {
            code: "659003",
            name: "图木舒克市"
          },
          {
            code: "659004",
            name: "五家渠市"
          },
          {
            code: "659005",
            name: "北屯市"
          },
          {
            code: "659006",
            name: "铁门关市"
          },
          {
            code: "659007",
            name: "双河市"
          },
          {
            code: "659008",
            name: "可克达拉市"
          },
          {
            code: "659009",
            name: "昆玉市"
          },
          {
            code: "659010",
            name: "胡杨河市"
          }
        ]
      }
    ]
  }
];
var _sfc_main$8 = defineComponent({
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
          placeholder: "请选择省份",
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
          placeholder: "请选择城市",
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
          placeholder: "请选择区域",
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
var _hoisted_1$4s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4s = createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
var _hoisted_3$1l = createVNode("path", {
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
var _hoisted_1$4r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4r = createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
var _hoisted_3$1k = createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
var _hoisted_4$o = createVNode("path", {
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
var _hoisted_1$4q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4q = createVNode("path", {
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
var _hoisted_1$4p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4p = createVNode("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1);
var _hoisted_3$1j = createVNode("path", {
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
var _hoisted_1$4o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4o = createVNode("path", {
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
var _hoisted_1$4n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4n = createVNode("path", {
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
var _hoisted_1$4m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4m = createVNode("path", {
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
var _hoisted_1$4l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4l = createVNode("path", {
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
var _hoisted_1$4k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4k = createVNode("path", {
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
var _hoisted_1$4j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4j = createVNode("path", {
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
var _hoisted_1$4i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4i = createVNode("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1);
var _hoisted_3$1i = createVNode("path", {
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
var _hoisted_1$4h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4h = createVNode("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1);
var _hoisted_3$1h = createVNode("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1);
var _hoisted_4$n = createVNode("path", {
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
var _hoisted_1$4g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4g = createVNode("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1);
var _hoisted_3$1g = createVNode("path", {
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
var _hoisted_1$4f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4f = createVNode("path", {
  fill: "currentColor",
  d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
var _hoisted_3$1f = createVNode("path", {
  fill: "currentColor",
  d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
var _hoisted_4$m = createVNode("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
var _hoisted_5$5 = createVNode("path", {
  fill: "currentColor",
  d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"
}, null, -1);
var _hoisted_6$2 = createVNode("path", {
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
var _hoisted_1$4e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4e = createVNode("path", {
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
var _hoisted_1$4d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4d = createVNode("path", {
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
var _hoisted_1$4c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4c = createVNode("path", {
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
var _hoisted_1$4b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4b = createVNode("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1);
var _hoisted_3$1e = createVNode("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1);
var _hoisted_4$l = createVNode("path", {
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
var _hoisted_1$4a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$4a = createVNode("path", {
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
var _hoisted_1$49 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$49 = createVNode("path", {
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
var _hoisted_1$48 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$48 = createVNode("path", {
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
var _hoisted_1$47 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$47 = createVNode("path", {
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
var _hoisted_1$46 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$46 = createVNode("path", {
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
var _hoisted_1$45 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$45 = createVNode("path", {
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
var _hoisted_1$44 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$44 = createVNode("path", {
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
var _hoisted_1$43 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$43 = createVNode("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1);
var _hoisted_3$1d = createVNode("path", {
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
var _hoisted_1$42 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$42 = createVNode("path", {
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
var _hoisted_1$41 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$41 = createVNode("path", {
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
var _hoisted_1$40 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$40 = createVNode("path", {
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
var _hoisted_1$3$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3$ = createVNode("path", {
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
var _hoisted_1$3_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3_ = createVNode("path", {
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
var _hoisted_1$3Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3Z = createVNode("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
var _hoisted_3$1c = createVNode("path", {
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
var _hoisted_1$3Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3Y = createVNode("path", {
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
var _hoisted_1$3X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3X = createVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1);
var _hoisted_3$1b = createVNode("path", {
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
var _hoisted_1$3W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3W = createVNode("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
var _hoisted_3$1a = createVNode("path", {
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
var _hoisted_1$3V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3V = createVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1);
var _hoisted_3$19 = createVNode("path", {
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
var _hoisted_1$3U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3U = createVNode("path", {
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
var _hoisted_1$3T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3T = createVNode("path", {
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
var _hoisted_1$3S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3S = createVNode("path", {
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
var _hoisted_1$3R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3R = createVNode("path", {
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
var _hoisted_1$3Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3Q = createVNode("path", {
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
var _hoisted_1$3P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3P = createVNode("path", {
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
var _hoisted_1$3O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3O = createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
var _hoisted_3$18 = createVNode("path", {
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
var _hoisted_1$3N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3N = createVNode("path", {
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
var _hoisted_1$3M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3M = createVNode("path", {
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
var _hoisted_1$3L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3L = createVNode("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1);
var _hoisted_3$17 = createVNode("path", {
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
var _hoisted_1$3K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3K = createVNode("path", {
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
var _hoisted_1$3J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3J = createVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
var _hoisted_3$16 = createVNode("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1);
var _hoisted_4$k = createVNode("path", {
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
var _hoisted_1$3I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3I = createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
var _hoisted_3$15 = createVNode("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_4$j = createVNode("path", {
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
var _hoisted_1$3H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3H = createVNode("path", {
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
var _hoisted_1$3G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3G = createVNode("path", {
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
var _hoisted_1$3F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3F = createVNode("path", {
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
var _hoisted_1$3E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3E = createVNode("path", {
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
var _hoisted_1$3D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3D = createVNode("path", {
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
var _hoisted_1$3C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3C = createVNode("path", {
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
var _hoisted_1$3B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3B = createVNode("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1);
var _hoisted_3$14 = createVNode("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1);
var _hoisted_4$i = createVNode("path", {
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
var _hoisted_1$3A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3A = createVNode("path", {
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
var _hoisted_1$3z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3z = createVNode("path", {
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
var _hoisted_1$3y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3y = createVNode("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1);
var _hoisted_3$13 = createVNode("path", {
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
var _hoisted_1$3x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3x = createVNode("path", {
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
var _hoisted_1$3w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3w = createVNode("path", {
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
var _hoisted_1$3v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3v = createVNode("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1);
var _hoisted_3$12 = createVNode("path", {
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
var _hoisted_1$3u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3u = createVNode("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1);
var _hoisted_3$11 = createVNode("path", {
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
var _hoisted_1$3t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3t = createVNode("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1);
var _hoisted_3$10 = createVNode("path", {
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
var _hoisted_1$3s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3s = createVNode("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1);
var _hoisted_3$$ = createVNode("path", {
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
var _hoisted_1$3r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3r = createVNode("path", {
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
var _hoisted_1$3q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3q = createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
var _hoisted_3$_ = createVNode("path", {
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
var _hoisted_1$3p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3p = createVNode("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1);
var _hoisted_3$Z = createVNode("path", {
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
var _hoisted_1$3o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3o = createVNode("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1);
var _hoisted_3$Y = createVNode("path", {
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
var _hoisted_1$3n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3n = createVNode("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1);
var _hoisted_3$X = createVNode("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1);
var _hoisted_4$h = createVNode("path", {
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
var _hoisted_1$3m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3m = createVNode("path", {
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
var _hoisted_1$3l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3l = createVNode("path", {
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
var _hoisted_1$3k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3k = createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
var _hoisted_3$W = createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
var _hoisted_4$g = createVNode("path", {
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
var _hoisted_1$3j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3j = createVNode("path", {
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
var _hoisted_1$3i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3i = createVNode("path", {
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
var _hoisted_1$3h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3h = createVNode("path", {
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
var _hoisted_1$3g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3g = createVNode("path", {
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
var _hoisted_1$3f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3f = createVNode("path", {
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
var _hoisted_1$3e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3e = createVNode("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1);
var _hoisted_3$V = createVNode("path", {
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
var _hoisted_1$3d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3d = createVNode("path", {
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
var _hoisted_1$3c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3c = createVNode("path", {
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
var _hoisted_1$3b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3b = createVNode("path", {
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
var _hoisted_1$3a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$3a = createVNode("path", {
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
var _hoisted_1$39 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$39 = createVNode("path", {
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
var _hoisted_1$38 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$38 = createVNode("path", {
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
var _hoisted_1$37 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$37 = createVNode("path", {
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
var _hoisted_1$36 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$36 = createVNode("path", {
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
var _hoisted_1$35 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$35 = createVNode("path", {
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
var _hoisted_1$34 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$34 = createVNode("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1);
var _hoisted_3$U = createVNode("path", {
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
var _hoisted_1$33 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$33 = createVNode("path", {
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
var _hoisted_1$32 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$32 = createVNode("path", {
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
var _hoisted_1$31 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$31 = createVNode("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
var _hoisted_3$T = createVNode("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1);
var _hoisted_4$f = createVNode("path", {
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
var _hoisted_1$30 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$30 = createVNode("path", {
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
var _hoisted_1$2$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2$ = createVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_3$S = createVNode("path", {
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
var _hoisted_1$2_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2_ = createVNode("path", {
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
var _hoisted_1$2Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2Z = createVNode("path", {
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
var _hoisted_1$2Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2Y = createVNode("path", {
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
var _hoisted_1$2X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2X = createVNode("path", {
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
var _hoisted_1$2W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2W = createVNode("path", {
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
var _hoisted_1$2V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2V = createVNode("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1);
var _hoisted_3$R = createVNode("path", {
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
var _hoisted_1$2U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2U = createVNode("path", {
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
var _hoisted_1$2T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2T = createVNode("path", {
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
var _hoisted_1$2S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2S = createVNode("path", {
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
var _hoisted_1$2R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2R = createVNode("path", {
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
var _hoisted_1$2Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2Q = createVNode("path", {
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
var _hoisted_1$2P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2P = createVNode("path", {
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
var _hoisted_1$2O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2O = createVNode("path", {
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
var _hoisted_1$2N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2N = createVNode("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1);
var _hoisted_3$Q = createVNode("path", {
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
var _hoisted_1$2M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2M = createVNode("path", {
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
var _hoisted_1$2L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2L = createVNode("path", {
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
var _hoisted_1$2K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2K = createVNode("path", {
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
var _hoisted_1$2J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2J = createVNode("path", {
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
var _hoisted_1$2I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2I = createVNode("path", {
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
var _hoisted_1$2H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2H = createVNode("path", {
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
var _hoisted_1$2G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2G = createVNode("path", {
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
var _hoisted_1$2F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2F = createVNode("path", {
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
var _hoisted_1$2E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2E = createVNode("path", {
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
var _hoisted_1$2D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2D = createVNode("path", {
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
var _hoisted_1$2C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2C = createVNode("path", {
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
var _hoisted_1$2B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2B = createVNode("path", {
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
var _hoisted_1$2A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2A = createVNode("path", {
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
var _hoisted_1$2z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2z = createVNode("path", {
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
var _hoisted_1$2y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2y = createVNode("path", {
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
var _hoisted_1$2x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2x = createVNode("path", {
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
var _hoisted_1$2w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2w = createVNode("path", {
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
var _hoisted_1$2v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2v = createVNode("path", {
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
var _hoisted_1$2u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2u = createVNode("path", {
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
var _hoisted_1$2t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2t = createVNode("path", {
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
var _hoisted_1$2s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2s = createVNode("path", {
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
var _hoisted_1$2r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2r = createVNode("path", {
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
var _hoisted_1$2q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2q = createVNode("path", {
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
var _hoisted_1$2p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2p = createVNode("path", {
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
var _hoisted_1$2o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2o = createVNode("path", {
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
var _hoisted_1$2n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2n = createVNode("path", {
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
var _hoisted_1$2m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2m = createVNode("path", {
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
var _hoisted_1$2l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2l = createVNode("path", {
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
var _hoisted_1$2k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2k = createVNode("path", {
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
var _hoisted_1$2j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2j = createVNode("path", {
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
var _hoisted_1$2i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2i = createVNode("path", {
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
var _hoisted_1$2h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2h = createVNode("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1);
var _hoisted_3$P = createVNode("path", {
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
var _hoisted_1$2g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2g = createVNode("path", {
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
var _hoisted_1$2f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2f = createVNode("path", {
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
var _hoisted_1$2e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2e = createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
var _hoisted_3$O = createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
var _hoisted_4$e = createVNode("path", {
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
var _hoisted_1$2d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2d = createVNode("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1);
var _hoisted_3$N = createVNode("path", {
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
var _hoisted_1$2c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2c = createVNode("path", {
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
var _hoisted_1$2b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2b = createVNode("path", {
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
var _hoisted_1$2a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$2a = createVNode("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1);
var _hoisted_3$M = createVNode("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1);
var _hoisted_4$d = createVNode("path", {
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
var _hoisted_1$29 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$29 = createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
var _hoisted_3$L = createVNode("path", {
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
var _hoisted_1$28 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$28 = createVNode("path", {
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
var _hoisted_1$27 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$27 = createVNode("path", {
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
var _hoisted_1$26 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$26 = createVNode("path", {
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
var _hoisted_1$25 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$25 = createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
var _hoisted_3$K = createVNode("path", {
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
var _hoisted_1$24 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$24 = createVNode("path", {
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
var _hoisted_1$23 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$23 = createVNode("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1);
var _hoisted_3$J = createVNode("path", {
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
var _hoisted_1$22 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$22 = createVNode("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
var _hoisted_3$I = createVNode("path", {
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
var _hoisted_1$21 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$21 = createVNode("path", {
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
var _hoisted_1$20 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$20 = createVNode("path", {
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
var _hoisted_1$1$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1$ = createVNode("path", {
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
var _hoisted_1$1_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1_ = createVNode("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1);
var _hoisted_3$H = createVNode("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1);
var _hoisted_4$c = createVNode("path", {
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
var _hoisted_1$1Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1Z = createVNode("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1);
var _hoisted_3$G = createVNode("path", {
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
var _hoisted_1$1Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1Y = createVNode("path", {
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
var _hoisted_1$1X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1X = createVNode("path", {
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
var _hoisted_1$1W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1W = createVNode("path", {
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
var _hoisted_1$1V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1V = createVNode("path", {
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
var _hoisted_1$1U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1U = createVNode("path", {
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
var _hoisted_1$1T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1T = createVNode("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1);
var _hoisted_3$F = createVNode("path", {
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
var _hoisted_1$1S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1S = createVNode("path", {
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
var _hoisted_1$1R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1R = createVNode("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1);
var _hoisted_3$E = createVNode("path", {
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
var _hoisted_1$1Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1Q = createVNode("path", {
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
var _hoisted_1$1P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1P = createVNode("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1);
var _hoisted_3$D = createVNode("path", {
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
var _hoisted_1$1O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1O = createVNode("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1);
var _hoisted_3$C = createVNode("path", {
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
var _hoisted_1$1N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1N = createVNode("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_3$B = createVNode("path", {
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
var _hoisted_1$1M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1M = createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
var _hoisted_3$A = createVNode("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1);
var _hoisted_4$b = createVNode("path", {
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
var _hoisted_1$1L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1L = createVNode("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_3$z = createVNode("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1);
var _hoisted_4$a = createVNode("path", {
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
var _hoisted_1$1K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1K = createVNode("path", {
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
var _hoisted_1$1J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1J = createVNode("path", {
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
var _hoisted_1$1I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1I = createVNode("path", {
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
var _hoisted_1$1H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1H = createVNode("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1);
var _hoisted_3$y = createVNode("path", {
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
var _hoisted_1$1G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1G = createVNode("path", {
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
var _hoisted_1$1F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1F = createVNode("path", {
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
var _hoisted_1$1E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1E = createVNode("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1);
var _hoisted_3$x = createVNode("path", {
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
var _hoisted_1$1D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1D = createVNode("path", {
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
var _hoisted_1$1C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1C = createVNode("path", {
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
var _hoisted_1$1B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1B = createVNode("path", {
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
var _hoisted_1$1A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1A = createVNode("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1);
var _hoisted_3$w = createVNode("path", {
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
var _hoisted_1$1z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1z = createVNode("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1);
var _hoisted_3$v = createVNode("path", {
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
var _hoisted_1$1y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1y = createVNode("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
var _hoisted_3$u = createVNode("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_4$9 = createVNode("path", {
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
var _hoisted_1$1x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1x = createVNode("path", {
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
var _hoisted_1$1w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1w = createVNode("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1);
var _hoisted_3$t = createVNode("path", {
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
var _hoisted_1$1v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1v = createVNode("path", {
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
var _hoisted_1$1u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1u = createVNode("path", {
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
var _hoisted_1$1t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1t = createVNode("path", {
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
var _hoisted_1$1s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1s = createVNode("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1);
var _hoisted_3$s = createVNode("path", {
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
var _hoisted_1$1r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1r = createVNode("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1);
var _hoisted_3$r = createVNode("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1);
var _hoisted_4$8 = createVNode("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
var _hoisted_5$4 = createVNode("path", {
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
var _hoisted_1$1q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1q = createVNode("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1);
var _hoisted_3$q = createVNode("path", {
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
var _hoisted_1$1p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1p = createVNode("path", {
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
var _hoisted_1$1o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1o = createVNode("path", {
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
var _hoisted_1$1n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1n = createVNode("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1);
var _hoisted_3$p = createVNode("path", {
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
var _hoisted_1$1m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1m = createVNode("path", {
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
var _hoisted_1$1l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1l = createVNode("path", {
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
var _hoisted_1$1k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1k = createVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_3$o = createVNode("path", {
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
var _hoisted_1$1j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1j = createVNode("path", {
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
var _hoisted_1$1i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1i = createVNode("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1);
var _hoisted_3$n = createVNode("path", {
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
var _hoisted_1$1h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1h = createVNode("path", {
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
var _hoisted_1$1g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1g = createVNode("path", {
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
var _hoisted_1$1f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1f = createVNode("path", {
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
var _hoisted_1$1e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1e = createVNode("path", {
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
var _hoisted_1$1d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1d = createVNode("path", {
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
var _hoisted_1$1c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1c = createVNode("path", {
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
var _hoisted_1$1b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1b = createVNode("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_3$m = createVNode("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1);
var _hoisted_4$7 = createVNode("path", {
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
var _hoisted_1$1a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$1a = createVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
var _hoisted_3$l = createVNode("path", {
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
var _hoisted_1$19 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$19 = createVNode("path", {
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
var _hoisted_1$18 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$18 = createVNode("path", {
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
var _hoisted_1$17 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$17 = createVNode("path", {
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
var _hoisted_1$16 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$16 = createVNode("path", {
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
var _hoisted_1$15 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$15 = createVNode("path", {
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
var _hoisted_1$14 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$14 = createVNode("path", {
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
var _hoisted_1$13 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$13 = createVNode("path", {
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
var _hoisted_1$12 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$12 = createVNode("path", {
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
var _hoisted_1$11 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$11 = createVNode("path", {
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
var _hoisted_1$10 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$10 = createVNode("path", {
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
var _hoisted_1$$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$$ = createVNode("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1);
var _hoisted_3$k = createVNode("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
var _hoisted_4$6 = createVNode("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
var _hoisted_5$3 = createVNode("path", {
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
var _hoisted_1$_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$_ = createVNode("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1);
var _hoisted_3$j = createVNode("path", {
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
var _hoisted_1$Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$Z = createVNode("path", {
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
var _hoisted_1$Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$Y = createVNode("path", {
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
var _hoisted_1$X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$X = createVNode("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1);
var _hoisted_3$i = createVNode("path", {
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
var _hoisted_1$W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$W = createVNode("path", {
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
var _hoisted_1$V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$V = createVNode("path", {
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
var _hoisted_1$U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$U = createVNode("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_3$h = createVNode("path", {
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
var _hoisted_1$T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$T = createVNode("path", {
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
var _hoisted_1$S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$S = createVNode("path", {
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
var _hoisted_1$R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$R = createVNode("path", {
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
var _hoisted_1$Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$Q = createVNode("path", {
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
var _hoisted_1$P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$P = createVNode("path", {
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
var _hoisted_1$O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$O = createVNode("path", {
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
var _hoisted_1$N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$N = createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
var _hoisted_3$g = createVNode("path", {
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
var _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$M = createVNode("path", {
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
var _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$L = createVNode("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1);
var _hoisted_3$f = createVNode("path", {
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
var _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$K = createVNode("path", {
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
var _hoisted_1$J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$J = createVNode("path", {
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
var _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$I = createVNode("path", {
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
var _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$H = createVNode("path", {
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
var _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$G = createVNode("path", {
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
var _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$F = createVNode("path", {
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
var _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$E = createVNode("path", {
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
var _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$D = createVNode("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1);
var _hoisted_3$e = createVNode("path", {
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
var _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$C = createVNode("path", {
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
var _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$B = createVNode("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1);
var _hoisted_3$d = createVNode("path", {
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
var _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$A = createVNode("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1);
var _hoisted_3$c = createVNode("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_4$5 = createVNode("path", {
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
var _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$z = createVNode("path", {
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
var _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$y = createVNode("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1);
var _hoisted_3$b = createVNode("path", {
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
var _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$x = createVNode("path", {
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
var _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$w = createVNode("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1);
var _hoisted_3$a = createVNode("path", {
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
var _hoisted_1$v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$v = createVNode("path", {
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
var _hoisted_1$u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$u = createVNode("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1);
var _hoisted_3$9 = createVNode("path", {
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
var _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$t = createVNode("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1);
var _hoisted_3$8 = createVNode("path", {
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
var _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$s = createVNode("path", {
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
var _hoisted_1$r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$r = createVNode("path", {
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
var _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$q = createVNode("path", {
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
var _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$p = createVNode("path", {
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
var _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$o = createVNode("path", {
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
var _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$n = createVNode("path", {
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
var _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$m = createVNode("path", {
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
var _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$l = createVNode("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1);
var _hoisted_3$7 = createVNode("path", {
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
var _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$k = createVNode("path", {
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
var _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$j = createVNode("path", {
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
var _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$i = createVNode("path", {
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
var _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$h = createVNode("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1);
var _hoisted_3$6 = createVNode("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_4$4 = createVNode("path", {
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
var _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$g = createVNode("path", {
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
var _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$f = createVNode("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
var _hoisted_3$5 = createVNode("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1);
var _hoisted_4$3 = createVNode("path", {
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
var _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$e = createVNode("path", {
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
var _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$d = createVNode("path", {
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
var _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$c = createVNode("path", {
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
var _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$b = createVNode("path", {
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
var _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$a = createVNode("path", {
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
var _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$9 = createVNode("path", {
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
var _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$8 = createVNode("path", {
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
var _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$7 = createVNode("path", {
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
var _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$6 = createVNode("path", {
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
var _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _hoisted_2$5 = createVNode("path", {
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
var Icons = Object.freeze(Object.defineProperty({
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
var toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
var $ELEMENT = {};
var getConfig = (key) => {
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
var isObject = (val) => val !== null && typeof val === "object";
var trimArr = function(s) {
  return (s || "").split(" ").filter((item) => !!item.trim());
};
var on = function(element, event, handler, useCapture = false) {
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
var EVENT_CODE = {
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
var onTouchMove = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
var onModalClick = () => {
  PopupManager === null || PopupManager === void 0 ? void 0 : PopupManager.doOnModalClick();
};
var hasModal = false;
var zIndex;
var getModal = function() {
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
var instances$1 = {};
var PopupManager = {
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
var getTopPopup = function() {
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
var wrapperKey = Symbol();
var propKey = Symbol();
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
var buildProps = (props) => fromPairs_1(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
var definePropType = (val) => ({ [wrapperKey]: val });
var withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
var isClient = typeof window !== "undefined";
var isString = (val) => typeof val === "string";
var noop = () => {
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
var defaultWindow = isClient ? window : void 0;
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
var messageTypes = ["success", "info", "warning", "error"];
var messageProps = buildProps({
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
var messageEmits = {
  destroy: () => true
};
var typeMap = {
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
var _hoisted_1$4 = ["id"];
var _hoisted_2$4 = {
  key: 0,
  class: "el-message__content"
};
var _hoisted_3$4 = ["innerHTML"];
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "el-message-fade",
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", {
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
            createBaseVNode("p", {
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
script.render = render2;
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
var instances = [];
var seed = 1;
var message = function(options = {}) {
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
    render(null, container);
  };
  render(vm, container);
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
var ElMessage = withInstallFunction(message, "$message");
var useCopy = (text) => {
  let input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
  ElMessage.success("复制成功");
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _hoisted_1$3 = { class: "n-choose-icon-dialog-body-height" };
var _hoisted_2$3 = { class: "container" };
var _hoisted_3$3 = ["onClick"];
var _hoisted_4$2 = { class: "text" };
var _hoisted_5$2 = { class: "icon" };
var _sfc_main$7 = defineComponent({
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
        createBaseVNode("div", _hoisted_1$3, [
          createVNode(_component_el_dialog, {
            title: __props.title,
            modelValue: unref(dialogVisible),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(dialogVisible) ? dialogVisible.value = $event : dialogVisible = $event)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(Icons)), (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    class: "item",
                    key: index2,
                    onClick: ($event) => unref(clickItem)(item)
                  }, [
                    createBaseVNode("div", _hoisted_4$2, [
                      (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(item)}`)))
                    ]),
                    createBaseVNode("div", _hoisted_5$2, toDisplayString(item), 1)
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
var chooseIcon$1 = _export_sfc(_sfc_main$7, [["__scopeId", "data-v-95e17112"]]);
var chooseIcon = {
  install(app) {
    app.component("n-choose-icon", chooseIcon$1);
  }
};
var _hoisted_1$2 = { class: "trend" };
var _hoisted_2$2 = { key: 1 };
var _hoisted_3$2 = { class: "icon" };
var _sfc_main$6 = defineComponent({
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
      default: "文字"
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
        createBaseVNode("div", {
          class: "text",
          style: normalizeStyle({ color: unref(textColor) })
        }, [
          unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_2$2, toDisplayString(__props.text), 1))
        ], 4),
        createBaseVNode("div", _hoisted_3$2, [
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
var trend$1 = _export_sfc(_sfc_main$6, [["__scopeId", "data-v-93606bfe"]]);
var trend = {
  install(app) {
    app.component("n-trend", trend$1);
  }
};
var _sfc_main$5 = defineComponent({
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
var notification$1 = _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3441528b"]]);
var notification = {
  install(app) {
    app.component("n-notification", notification$1);
  }
};
var _hoisted_1$1 = { class: "list-tabs__item" };
var _hoisted_2$1 = ["onClick"];
var _hoisted_3$1 = {
  key: 0,
  class: "avatar"
};
var _hoisted_4$1 = { class: "content" };
var _hoisted_5$1 = {
  key: 0,
  class: "title"
};
var _hoisted_6$1 = {
  key: 1,
  class: "time"
};
var _hoisted_7$1 = {
  key: 2,
  class: "time"
};
var _hoisted_8$1 = { class: "actions" };
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  key: 0,
  class: "a-icon"
};
var _hoisted_11 = { class: "a-text" };
var _sfc_main$4 = defineComponent({
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
                          createBaseVNode("div", _hoisted_4$1, [
                            item1.title ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                              createBaseVNode("div", null, toDisplayString(item1.title), 1),
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
                      createBaseVNode("div", _hoisted_8$1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action, i) => {
                          return openBlock(), createElementBlock("div", {
                            class: normalizeClass(["a-item", { "border": i !== __props.actions.length }]),
                            key: i,
                            onClick: ($event) => unref(clickAction)(action, i)
                          }, [
                            action.icon ? (openBlock(), createElementBlock("div", _hoisted_10, [
                              (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(action.icon)}`)))
                            ])) : createCommentVNode("v-if", true),
                            createBaseVNode("div", _hoisted_11, toDisplayString(action.text), 1)
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
var list$1 = _export_sfc(_sfc_main$4, [["__scopeId", "data-v-62996acf"]]);
var list = {
  install(app) {
    app.component("n-list", list$1);
  }
};
var _sfc_main$3 = defineComponent({
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
                  createBaseVNode("span", null, toDisplayString(item[__props.name]), 1)
                ]),
                _: 2
              }, 1032, ["index"])) : createCommentVNode("v-if", true),
              item[__props.children] && item[__props.children].length ? (openBlock(), createBlock(_component_el_sub_menu, {
                key: 1,
                index: item[__props.index]
              }, {
                title: withCtx(() => [
                  item[__props.icon] ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(item[__props.icon])}`), { key: 0 })) : createCommentVNode("v-if", true),
                  createBaseVNode("span", null, toDisplayString(item[__props.name]), 1)
                ]),
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item[__props.children], (item1, index1) => {
                    return openBlock(), createBlock(_component_el_menu_item, {
                      key: index1,
                      index: item1.index
                    }, {
                      default: withCtx(() => [
                        item1[__props.icon] ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(item1[__props.icon])}`), { key: 0 })) : createCommentVNode("v-if", true),
                        createBaseVNode("span", null, toDisplayString(item1[__props.name]), 1)
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
var menu$1 = _export_sfc(_sfc_main$3, [["__scopeId", "data-v-61bf4712"]]);
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
var _sfc_main$2 = defineComponent({
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
    onMounted(() => {
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
      "name": "阿坝"
    }, {
      "id": 57,
      "spell": "akesu",
      "name": "阿克苏"
    }, {
      "id": 58,
      "spell": "alashanmeng",
      "name": "阿拉善盟"
    }, {
      "id": 59,
      "spell": "aletai",
      "name": "阿勒泰"
    }, {
      "id": 60,
      "spell": "ali",
      "name": "阿里"
    }, {
      "id": 61,
      "spell": "ankang",
      "name": "安康"
    }, {
      "id": 62,
      "spell": "anqing",
      "name": "安庆"
    }, {
      "id": 63,
      "spell": "anshan",
      "name": "鞍山"
    }, {
      "id": 64,
      "spell": "anshun",
      "name": "安顺"
    }, {
      "id": 65,
      "spell": "anyang",
      "name": "安阳"
    }, {
      "id": 338,
      "spell": "acheng",
      "name": "阿城"
    }, {
      "id": 339,
      "spell": "anfu",
      "name": "安福"
    }, {
      "id": 340,
      "spell": "anji",
      "name": "安吉"
    }, {
      "id": 341,
      "spell": "anning",
      "name": "安宁"
    }, {
      "id": 342,
      "spell": "anqiu",
      "name": "安丘"
    }, {
      "id": 343,
      "spell": "anxi",
      "name": "安溪"
    }, {
      "id": 344,
      "spell": "anyi",
      "name": "安义"
    }, {
      "id": 345,
      "spell": "anyuan",
      "name": "安远"
    }],
    "B": [{
      "id": 1,
      "spell": "beijing",
      "name": "北京"
    }, {
      "id": 66,
      "spell": "baicheng",
      "name": "白城"
    }, {
      "id": 67,
      "spell": "baise",
      "name": "百色"
    }, {
      "id": 68,
      "spell": "baishan",
      "name": "白山"
    }, {
      "id": 69,
      "spell": "baiyin",
      "name": "白银"
    }, {
      "id": 70,
      "spell": "bangbu",
      "name": "蚌埠"
    }, {
      "id": 71,
      "spell": "baoding",
      "name": "保定"
    }, {
      "id": 72,
      "spell": "baoji",
      "name": "宝鸡"
    }, {
      "id": 73,
      "spell": "baoshan",
      "name": "保山"
    }, {
      "id": 74,
      "spell": "baotou",
      "name": "包头"
    }, {
      "id": 75,
      "spell": "bayannaoer",
      "name": "巴彦淖尔"
    }, {
      "id": 76,
      "spell": "bayinguoleng",
      "name": "巴音郭楞"
    }, {
      "id": 77,
      "spell": "bazhong",
      "name": "巴中"
    }, {
      "id": 78,
      "spell": "beihai",
      "name": "北海"
    }, {
      "id": 79,
      "spell": "benxi",
      "name": "本溪"
    }, {
      "id": 80,
      "spell": "bijie",
      "name": "毕节"
    }, {
      "id": 81,
      "spell": "binzhou",
      "name": "滨州"
    }, {
      "id": 82,
      "spell": "boertala",
      "name": "博尔塔拉"
    }, {
      "id": 83,
      "spell": "bozhou",
      "name": "亳州"
    }, {
      "id": 346,
      "spell": "baoying",
      "name": "宝应"
    }, {
      "id": 347,
      "spell": "bayan",
      "name": "巴彦"
    }, {
      "id": 348,
      "spell": "binhai",
      "name": "滨海"
    }, {
      "id": 349,
      "spell": "binxian",
      "name": "宾县"
    }, {
      "id": 350,
      "spell": "binyang",
      "name": "宾阳"
    }, {
      "id": 351,
      "spell": "bishan",
      "name": "璧山"
    }, {
      "id": 352,
      "spell": "boai",
      "name": "博爱"
    }, {
      "id": 353,
      "spell": "boluo",
      "name": "博罗"
    }, {
      "id": 354,
      "spell": "boxing",
      "name": "博兴"
    }],
    "C": [{
      "id": 2,
      "spell": "chongqing",
      "name": "重庆"
    }, {
      "id": 5,
      "spell": "changchun",
      "name": "长春"
    }, {
      "id": 6,
      "spell": "changsha",
      "name": "长沙"
    }, {
      "id": 7,
      "spell": "changzhou",
      "name": "常州"
    }, {
      "id": 8,
      "spell": "chengdu",
      "name": "成都"
    }, {
      "id": 84,
      "spell": "cangzhou",
      "name": "沧州"
    }, {
      "id": 85,
      "spell": "changde",
      "name": "常德"
    }, {
      "id": 86,
      "spell": "changdu",
      "name": "昌都"
    }, {
      "id": 87,
      "spell": "changji",
      "name": "昌吉"
    }, {
      "id": 88,
      "spell": "changzhi",
      "name": "长治"
    }, {
      "id": 89,
      "spell": "chaohu",
      "name": "巢湖"
    }, {
      "id": 90,
      "spell": "chaoyang",
      "name": "朝阳"
    }, {
      "id": 91,
      "spell": "chaozhou",
      "name": "潮州"
    }, {
      "id": 92,
      "spell": "chengde",
      "name": "承德"
    }, {
      "id": 93,
      "spell": "chenzhou",
      "name": "郴州"
    }, {
      "id": 94,
      "spell": "chifeng",
      "name": "赤峰"
    }, {
      "id": 95,
      "spell": "chizhou",
      "name": "池州"
    }, {
      "id": 96,
      "spell": "chongzuo",
      "name": "崇左"
    }, {
      "id": 97,
      "spell": "chuxiong",
      "name": "楚雄"
    }, {
      "id": 98,
      "spell": "chuzhou",
      "name": "滁州"
    }, {
      "id": 355,
      "spell": "cangnan",
      "name": "苍南"
    }, {
      "id": 356,
      "spell": "cangshan",
      "name": "苍山"
    }, {
      "id": 357,
      "spell": "caoxian",
      "name": "曹县"
    }, {
      "id": 358,
      "spell": "changdao",
      "name": "长岛"
    }, {
      "id": 359,
      "spell": "changfeng",
      "name": "长丰"
    }, {
      "id": 360,
      "spell": "changhai",
      "name": "长海"
    }, {
      "id": 361,
      "spell": "changle",
      "name": "长乐"
    }, {
      "id": 362,
      "spell": "changle",
      "name": "昌乐"
    }, {
      "id": 363,
      "spell": "changshan",
      "name": "常山"
    }, {
      "id": 364,
      "spell": "changshu",
      "name": "常熟"
    }, {
      "id": 365,
      "spell": "changtai",
      "name": "长泰"
    }, {
      "id": 366,
      "spell": "changting",
      "name": "长汀"
    }, {
      "id": 367,
      "spell": "changxing",
      "name": "长兴"
    }, {
      "id": 368,
      "spell": "changyi",
      "name": "昌邑"
    }, {
      "id": 369,
      "spell": "chaoan",
      "name": "潮安"
    }, {
      "id": 370,
      "spell": "chenggong",
      "name": "呈贡"
    }, {
      "id": 371,
      "spell": "chengkou",
      "name": "城口"
    }, {
      "id": 372,
      "spell": "chengwu",
      "name": "成武"
    }, {
      "id": 373,
      "spell": "chiping",
      "name": "茌平"
    }, {
      "id": 374,
      "spell": "chongren",
      "name": "崇仁"
    }, {
      "id": 375,
      "spell": "chongyi",
      "name": "崇义"
    }, {
      "id": 376,
      "spell": "chongzhou",
      "name": "崇州"
    }, {
      "id": 377,
      "spell": "chunan",
      "name": "淳安"
    }, {
      "id": 378,
      "spell": "cixi",
      "name": "慈溪"
    }, {
      "id": 379,
      "spell": "conghua",
      "name": "从化"
    }, {
      "id": 380,
      "spell": "congyang",
      "name": "枞阳"
    }],
    "D": [{
      "id": 9,
      "spell": "dalian",
      "name": "大连"
    }, {
      "id": 10,
      "spell": "dongguan",
      "name": "东莞"
    }, {
      "id": 99,
      "spell": "dali",
      "name": "大理"
    }, {
      "id": 100,
      "spell": "dandong",
      "name": "丹东"
    }, {
      "id": 101,
      "spell": "daqing",
      "name": "大庆"
    }, {
      "id": 102,
      "spell": "datong",
      "name": "大同"
    }, {
      "id": 103,
      "spell": "daxinganling",
      "name": "大兴安岭"
    }, {
      "id": 104,
      "spell": "dazhou",
      "name": "达州"
    }, {
      "id": 105,
      "spell": "dehong",
      "name": "德宏"
    }, {
      "id": 106,
      "spell": "deyang",
      "name": "德阳"
    }, {
      "id": 107,
      "spell": "dezhou",
      "name": "德州"
    }, {
      "id": 108,
      "spell": "dingxi",
      "name": "定西"
    }, {
      "id": 109,
      "spell": "diqing",
      "name": "迪庆"
    }, {
      "id": 110,
      "spell": "dongying",
      "name": "东营"
    }, {
      "id": 381,
      "spell": "dafeng",
      "name": "大丰"
    }, {
      "id": 382,
      "spell": "daishan",
      "name": "岱山"
    }, {
      "id": 383,
      "spell": "dangshan",
      "name": "砀山"
    }, {
      "id": 384,
      "spell": "dangtu",
      "name": "当涂"
    }, {
      "id": 385,
      "spell": "danxian",
      "name": "单县"
    }, {
      "id": 386,
      "spell": "danyang",
      "name": "丹阳"
    }, {
      "id": 387,
      "spell": "dapu",
      "name": "大埔"
    }, {
      "id": 388,
      "spell": "datian",
      "name": "大田"
    }, {
      "id": 389,
      "spell": "dayi",
      "name": "大邑"
    }, {
      "id": 390,
      "spell": "dayu",
      "name": "大余"
    }, {
      "id": 391,
      "spell": "dazu",
      "name": "大足"
    }, {
      "id": 392,
      "spell": "dean",
      "name": "德安"
    }, {
      "id": 393,
      "spell": "dehua",
      "name": "德化"
    }, {
      "id": 394,
      "spell": "dehui",
      "name": "德惠"
    }, {
      "id": 395,
      "spell": "dengfeng",
      "name": "登封"
    }, {
      "id": 396,
      "spell": "deqing",
      "name": "德清"
    }, {
      "id": 397,
      "spell": "deqing",
      "name": "德庆"
    }, {
      "id": 398,
      "spell": "dexing",
      "name": "德兴"
    }, {
      "id": 399,
      "spell": "dianbai",
      "name": "电白"
    }, {
      "id": 400,
      "spell": "dianjiang",
      "name": "垫江"
    }, {
      "id": 401,
      "spell": "dingnan",
      "name": "定南"
    }, {
      "id": 402,
      "spell": "dingtao",
      "name": "定陶"
    }, {
      "id": 403,
      "spell": "dingyuan",
      "name": "定远"
    }, {
      "id": 404,
      "spell": "donga",
      "name": "东阿"
    }, {
      "id": 405,
      "spell": "donghai",
      "name": "东海"
    }, {
      "id": 406,
      "spell": "dongming",
      "name": "东明"
    }, {
      "id": 407,
      "spell": "dongping",
      "name": "东平"
    }, {
      "id": 408,
      "spell": "dongshan",
      "name": "东山"
    }, {
      "id": 409,
      "spell": "dongtai",
      "name": "东台"
    }, {
      "id": 410,
      "spell": "dongtou",
      "name": "洞头"
    }, {
      "id": 411,
      "spell": "dongxiang",
      "name": "东乡"
    }, {
      "id": 412,
      "spell": "dongyang",
      "name": "东阳"
    }, {
      "id": 413,
      "spell": "dongyuan",
      "name": "东源"
    }, {
      "id": 414,
      "spell": "dongzhi",
      "name": "东至"
    }, {
      "id": 415,
      "spell": "duchang",
      "name": "都昌"
    }, {
      "id": 416,
      "spell": "dujiangyan",
      "name": "都江堰"
    }],
    "E": [{
      "id": 111,
      "spell": "eerduosi",
      "name": "鄂尔多斯"
    }, {
      "id": 112,
      "spell": "enshi",
      "name": "恩施"
    }, {
      "id": 113,
      "spell": "ezhou",
      "name": "鄂州"
    }, {
      "id": 417,
      "spell": "enping",
      "name": "恩平"
    }],
    "F": [{
      "id": 11,
      "spell": "foshan",
      "name": "佛山"
    }, {
      "id": 12,
      "spell": "fuzhou",
      "name": "福州"
    }, {
      "id": 114,
      "spell": "fangchenggang",
      "name": "防城港"
    }, {
      "id": 115,
      "spell": "fushun",
      "name": "抚顺"
    }, {
      "id": 116,
      "spell": "fuxin",
      "name": "阜新"
    }, {
      "id": 117,
      "spell": "fuyang",
      "name": "阜阳"
    }, {
      "id": 118,
      "spell": "fuzhou",
      "name": "抚州"
    }, {
      "id": 418,
      "spell": "faku",
      "name": "法库"
    }, {
      "id": 419,
      "spell": "fanchang",
      "name": "繁昌"
    }, {
      "id": 420,
      "spell": "fangzheng",
      "name": "方正"
    }, {
      "id": 421,
      "spell": "feicheng",
      "name": "肥城"
    }, {
      "id": 422,
      "spell": "feidong",
      "name": "肥东"
    }, {
      "id": 423,
      "spell": "feixi",
      "name": "肥西"
    }, {
      "id": 424,
      "spell": "feixian",
      "name": "费县"
    }, {
      "id": 425,
      "spell": "fengcheng",
      "name": "丰城"
    }, {
      "id": 426,
      "spell": "fengdu",
      "name": "丰都"
    }, {
      "id": 427,
      "spell": "fenghua",
      "name": "奉化"
    }, {
      "id": 428,
      "spell": "fengjie",
      "name": "奉节"
    }, {
      "id": 429,
      "spell": "fengkai",
      "name": "封开"
    }, {
      "id": 430,
      "spell": "fengshun",
      "name": "丰顺"
    }, {
      "id": 431,
      "spell": "fengtai",
      "name": "凤台"
    }, {
      "id": 432,
      "spell": "fengxian",
      "name": "丰县"
    }, {
      "id": 433,
      "spell": "fengxin",
      "name": "奉新"
    }, {
      "id": 434,
      "spell": "fengyang",
      "name": "凤阳"
    }, {
      "id": 435,
      "spell": "fenyi",
      "name": "分宜"
    }, {
      "id": 436,
      "spell": "fogang",
      "name": "佛冈"
    }, {
      "id": 437,
      "spell": "fuan",
      "name": "福安"
    }, {
      "id": 438,
      "spell": "fuding",
      "name": "福鼎"
    }, {
      "id": 439,
      "spell": "fuliang",
      "name": "浮梁"
    }, {
      "id": 440,
      "spell": "fumin",
      "name": "富民"
    }, {
      "id": 441,
      "spell": "funan",
      "name": "阜南"
    }, {
      "id": 442,
      "spell": "funing",
      "name": "阜宁"
    }, {
      "id": 443,
      "spell": "fuqing",
      "name": "福清"
    }, {
      "id": 444,
      "spell": "fuyang",
      "name": "富阳"
    }],
    "G": [{
      "id": 13,
      "spell": "guangzhou",
      "name": "广州"
    }, {
      "id": 14,
      "spell": "guiyang",
      "name": "贵阳"
    }, {
      "id": 119,
      "spell": "gannan",
      "name": "甘南"
    }, {
      "id": 120,
      "spell": "ganzhou",
      "name": "赣州"
    }, {
      "id": 121,
      "spell": "ganzi",
      "name": "甘孜"
    }, {
      "id": 122,
      "spell": "guangan",
      "name": "广安"
    }, {
      "id": 123,
      "spell": "guangyuan",
      "name": "广元"
    }, {
      "id": 124,
      "spell": "guigang",
      "name": "贵港"
    }, {
      "id": 125,
      "spell": "guilin",
      "name": "桂林"
    }, {
      "id": 126,
      "spell": "guoluo",
      "name": "果洛"
    }, {
      "id": 127,
      "spell": "guyuan",
      "name": "固原"
    }, {
      "id": 445,
      "spell": "ganxian",
      "name": "赣县"
    }, {
      "id": 446,
      "spell": "ganyu",
      "name": "赣榆"
    }, {
      "id": 447,
      "spell": "gaoan",
      "name": "高安"
    }, {
      "id": 448,
      "spell": "gaocheng",
      "name": "藁城"
    }, {
      "id": 449,
      "spell": "gaochun",
      "name": "高淳"
    }, {
      "id": 450,
      "spell": "gaolan",
      "name": "皋兰"
    }, {
      "id": 451,
      "spell": "gaoling",
      "name": "高陵"
    }, {
      "id": 452,
      "spell": "gaomi",
      "name": "高密"
    }, {
      "id": 453,
      "spell": "gaoqing",
      "name": "高青"
    }, {
      "id": 454,
      "spell": "gaotang",
      "name": "高唐"
    }, {
      "id": 455,
      "spell": "gaoyao",
      "name": "高要"
    }, {
      "id": 456,
      "spell": "gaoyi",
      "name": "高邑"
    }, {
      "id": 457,
      "spell": "gaoyou",
      "name": "高邮"
    }, {
      "id": 458,
      "spell": "gaozhou",
      "name": "高州"
    }, {
      "id": 459,
      "spell": "gongyi",
      "name": "巩义"
    }, {
      "id": 460,
      "spell": "guangchang",
      "name": "广昌"
    }, {
      "id": 461,
      "spell": "guangde",
      "name": "广德"
    }, {
      "id": 462,
      "spell": "guangfeng",
      "name": "广丰"
    }, {
      "id": 463,
      "spell": "guangning",
      "name": "广宁"
    }, {
      "id": 464,
      "spell": "guangrao",
      "name": "广饶"
    }, {
      "id": 465,
      "spell": "guangze",
      "name": "光泽"
    }, {
      "id": 466,
      "spell": "guannan",
      "name": "灌南"
    }, {
      "id": 467,
      "spell": "guanxian",
      "name": "冠县"
    }, {
      "id": 468,
      "spell": "guanyun",
      "name": "灌云"
    }, {
      "id": 469,
      "spell": "guixi",
      "name": "贵溪"
    }, {
      "id": 470,
      "spell": "gutian",
      "name": "古田"
    }, {
      "id": 471,
      "spell": "guzhen",
      "name": "固镇"
    }],
    "H": [{
      "id": 15,
      "spell": "haerbin",
      "name": "哈尔滨"
    }, {
      "id": 16,
      "spell": "haikou",
      "name": "海口"
    }, {
      "id": 17,
      "spell": "handan",
      "name": "邯郸"
    }, {
      "id": 18,
      "spell": "hangzhou",
      "name": "杭州"
    }, {
      "id": 19,
      "spell": "hefei",
      "name": "合肥"
    }, {
      "id": 20,
      "spell": "huizhou",
      "name": "惠州"
    }, {
      "id": 128,
      "spell": "haibei",
      "name": "海北"
    }, {
      "id": 129,
      "spell": "haidong",
      "name": "海东"
    }, {
      "id": 130,
      "spell": "hainan",
      "name": "海南"
    }, {
      "id": 131,
      "spell": "haixi",
      "name": "海西"
    }, {
      "id": 132,
      "spell": "hami",
      "name": "哈密"
    }, {
      "id": 133,
      "spell": "hanzhong",
      "name": "汉中"
    }, {
      "id": 134,
      "spell": "hebi",
      "name": "鹤壁"
    }, {
      "id": 135,
      "spell": "hechi",
      "name": "河池"
    }, {
      "id": 136,
      "spell": "hegang",
      "name": "鹤岗"
    }, {
      "id": 137,
      "spell": "heihe",
      "name": "黑河"
    }, {
      "id": 138,
      "spell": "hengshui",
      "name": "衡水"
    }, {
      "id": 139,
      "spell": "hengyang",
      "name": "衡阳"
    }, {
      "id": 140,
      "spell": "hetiandi",
      "name": "和田地"
    }, {
      "id": 141,
      "spell": "heyuan",
      "name": "河源"
    }, {
      "id": 142,
      "spell": "heze",
      "name": "菏泽"
    }, {
      "id": 143,
      "spell": "hezhou",
      "name": "贺州"
    }, {
      "id": 144,
      "spell": "honghe",
      "name": "红河"
    }, {
      "id": 145,
      "spell": "huaian",
      "name": "淮安"
    }, {
      "id": 146,
      "spell": "huaibei",
      "name": "淮北"
    }, {
      "id": 147,
      "spell": "huaihua",
      "name": "怀化"
    }, {
      "id": 148,
      "spell": "huainan",
      "name": "淮南"
    }, {
      "id": 149,
      "spell": "huanggang",
      "name": "黄冈"
    }, {
      "id": 150,
      "spell": "huangnan",
      "name": "黄南"
    }, {
      "id": 151,
      "spell": "huangshan",
      "name": "黄山"
    }, {
      "id": 152,
      "spell": "huangshi",
      "name": "黄石"
    }, {
      "id": 153,
      "spell": "huhehaote",
      "name": "呼和浩特"
    }, {
      "id": 154,
      "spell": "huludao",
      "name": "葫芦岛"
    }, {
      "id": 155,
      "spell": "hulunbeier",
      "name": "呼伦贝尔"
    }, {
      "id": 156,
      "spell": "huzhou",
      "name": "湖州"
    }, {
      "id": 472,
      "spell": "haian",
      "name": "海安"
    }, {
      "id": 473,
      "spell": "haifeng",
      "name": "海丰"
    }, {
      "id": 474,
      "spell": "haimen",
      "name": "海门"
    }, {
      "id": 475,
      "spell": "haining",
      "name": "海宁"
    }, {
      "id": 476,
      "spell": "haiyan",
      "name": "海盐"
    }, {
      "id": 477,
      "spell": "haiyang",
      "name": "海阳"
    }, {
      "id": 478,
      "spell": "hanshan",
      "name": "含山"
    }, {
      "id": 479,
      "spell": "hechuan",
      "name": "合川"
    }, {
      "id": 480,
      "spell": "hengfeng",
      "name": "横峰"
    }, {
      "id": 481,
      "spell": "hengxian",
      "name": "横县"
    }, {
      "id": 482,
      "spell": "heping",
      "name": "和平"
    }, {
      "id": 483,
      "spell": "heshan",
      "name": "鹤山"
    }, {
      "id": 484,
      "spell": "hexian",
      "name": "和县"
    }, {
      "id": 485,
      "spell": "hongze",
      "name": "洪泽"
    }, {
      "id": 486,
      "spell": "huaan",
      "name": "华安"
    }, {
      "id": 487,
      "spell": "huadian",
      "name": "桦甸"
    }, {
      "id": 488,
      "spell": "huaiji",
      "name": "怀集"
    }, {
      "id": 489,
      "spell": "huaining",
      "name": "怀宁"
    }, {
      "id": 490,
      "spell": "huaiyuan",
      "name": "怀远"
    }, {
      "id": 491,
      "spell": "huantai",
      "name": "桓台"
    }, {
      "id": 492,
      "spell": "huazhou",
      "name": "化州"
    }, {
      "id": 493,
      "spell": "huian",
      "name": "惠安"
    }, {
      "id": 494,
      "spell": "huichang",
      "name": "会昌"
    }, {
      "id": 495,
      "spell": "huidong",
      "name": "惠东"
    }, {
      "id": 496,
      "spell": "huilai",
      "name": "惠来"
    }, {
      "id": 497,
      "spell": "huimin",
      "name": "惠民"
    }, {
      "id": 498,
      "spell": "hukou",
      "name": "湖口"
    }, {
      "id": 499,
      "spell": "hulan",
      "name": "呼兰"
    }, {
      "id": 500,
      "spell": "huoqiu",
      "name": "霍邱"
    }, {
      "id": 501,
      "spell": "huoshan",
      "name": "霍山"
    }, {
      "id": 502,
      "spell": "huxian",
      "name": "户县"
    }],
    "J": [{
      "id": 21,
      "spell": "jiaozuo",
      "name": "焦作"
    }, {
      "id": 22,
      "spell": "jiaxing",
      "name": "嘉兴"
    }, {
      "id": 23,
      "spell": "jilin",
      "name": "吉林"
    }, {
      "id": 24,
      "spell": "jinan",
      "name": "济南"
    }, {
      "id": 157,
      "spell": "jiamusi",
      "name": "佳木斯"
    }, {
      "id": 158,
      "spell": "jiangmen",
      "name": "江门"
    }, {
      "id": 159,
      "spell": "jian",
      "name": "吉安"
    }, {
      "id": 160,
      "spell": "jiayuguan",
      "name": "嘉峪关"
    }, {
      "id": 161,
      "spell": "jieyang",
      "name": "揭阳"
    }, {
      "id": 162,
      "spell": "jinchang",
      "name": "金昌"
    }, {
      "id": 163,
      "spell": "jincheng",
      "name": "晋城"
    }, {
      "id": 164,
      "spell": "jingdezhen",
      "name": "景德镇"
    }, {
      "id": 165,
      "spell": "jingmen",
      "name": "荆门"
    }, {
      "id": 166,
      "spell": "jingzhou",
      "name": "荆州"
    }, {
      "id": 167,
      "spell": "jinhua",
      "name": "金华"
    }, {
      "id": 168,
      "spell": "jining",
      "name": "济宁"
    }, {
      "id": 169,
      "spell": "jinzhong",
      "name": "晋中"
    }, {
      "id": 170,
      "spell": "jinzhou",
      "name": "锦州"
    }, {
      "id": 171,
      "spell": "jiujiang",
      "name": "九江"
    }, {
      "id": 172,
      "spell": "jiuquan",
      "name": "酒泉"
    }, {
      "id": 173,
      "spell": "jixi",
      "name": "鸡西"
    }, {
      "id": 503,
      "spell": "jiande",
      "name": "建德"
    }, {
      "id": 504,
      "spell": "jiangdu",
      "name": "江都"
    }, {
      "id": 505,
      "spell": "jiangjin",
      "name": "江津"
    }, {
      "id": 506,
      "spell": "jiangle",
      "name": "将乐"
    }, {
      "id": 507,
      "spell": "jiangshan",
      "name": "江山"
    }, {
      "id": 508,
      "spell": "jiangyan",
      "name": "姜堰"
    }, {
      "id": 509,
      "spell": "jiangyin",
      "name": "江阴"
    }, {
      "id": 510,
      "spell": "jianhu",
      "name": "建湖"
    }, {
      "id": 511,
      "spell": "jianning",
      "name": "建宁"
    }, {
      "id": 512,
      "spell": "jianou",
      "name": "建瓯"
    }, {
      "id": 513,
      "spell": "jianyang",
      "name": "建阳"
    }, {
      "id": 514,
      "spell": "jian",
      "name": "吉安"
    }, {
      "id": 515,
      "spell": "jiaohe",
      "name": "蛟河"
    }, {
      "id": 516,
      "spell": "jiaoling",
      "name": "蕉岭"
    }, {
      "id": 517,
      "spell": "jiaonan",
      "name": "胶南"
    }, {
      "id": 518,
      "spell": "jiaozhou",
      "name": "胶州"
    }, {
      "id": 519,
      "spell": "jiashan",
      "name": "嘉善"
    }, {
      "id": 520,
      "spell": "jiaxiang",
      "name": "嘉祥"
    }, {
      "id": 521,
      "spell": "jiedong",
      "name": "揭东"
    }, {
      "id": 522,
      "spell": "jieshou",
      "name": "界首"
    }, {
      "id": 523,
      "spell": "jiexi",
      "name": "揭西"
    }, {
      "id": 524,
      "spell": "jimo",
      "name": "即墨"
    }, {
      "id": 525,
      "spell": "jingan",
      "name": "靖安"
    }, {
      "id": 526,
      "spell": "jingde",
      "name": "旌德"
    }, {
      "id": 527,
      "spell": "jinggangshan",
      "name": "井冈山"
    }, {
      "id": 528,
      "spell": "jingjiang",
      "name": "靖江"
    }, {
      "id": 529,
      "spell": "jingning",
      "name": "景宁"
    }, {
      "id": 530,
      "spell": "jingxian",
      "name": "泾县"
    }, {
      "id": 531,
      "spell": "jingxing",
      "name": "井陉"
    }, {
      "id": 532,
      "spell": "jinhu",
      "name": "金湖"
    }, {
      "id": 533,
      "spell": "jinjiang",
      "name": "晋江"
    }, {
      "id": 534,
      "spell": "jinmen",
      "name": "金门"
    }, {
      "id": 535,
      "spell": "jinning",
      "name": "晋宁"
    }, {
      "id": 536,
      "spell": "jintan",
      "name": "金坛"
    }, {
      "id": 537,
      "spell": "jintang",
      "name": "金堂"
    }, {
      "id": 538,
      "spell": "jinxian",
      "name": "进贤"
    }, {
      "id": 539,
      "spell": "jinxi",
      "name": "金溪"
    }, {
      "id": 540,
      "spell": "jinxiang",
      "name": "金乡"
    }, {
      "id": 541,
      "spell": "jinyun",
      "name": "缙云"
    }, {
      "id": 542,
      "spell": "jinzhai",
      "name": "金寨"
    }, {
      "id": 543,
      "spell": "jinzhou",
      "name": "晋州"
    }, {
      "id": 544,
      "spell": "jishui",
      "name": "吉水"
    }, {
      "id": 545,
      "spell": "jiujiang",
      "name": "九江"
    }, {
      "id": 546,
      "spell": "jiutai",
      "name": "九台"
    }, {
      "id": 547,
      "spell": "jixi",
      "name": "绩溪"
    }, {
      "id": 548,
      "spell": "jiyang",
      "name": "济阳"
    }, {
      "id": 549,
      "spell": "jiyuan",
      "name": "济源"
    }, {
      "id": 550,
      "spell": "juancheng",
      "name": "鄄城"
    }, {
      "id": 551,
      "spell": "junan",
      "name": "莒南"
    }, {
      "id": 552,
      "spell": "jurong",
      "name": "句容"
    }, {
      "id": 553,
      "spell": "juxian",
      "name": "莒县"
    }, {
      "id": 554,
      "spell": "juye",
      "name": "巨野"
    }],
    "K": [{
      "id": 25,
      "spell": "kunming",
      "name": "昆明"
    }, {
      "id": 174,
      "spell": "kaifeng",
      "name": "开封"
    }, {
      "id": 175,
      "spell": "kashidi",
      "name": "喀什地"
    }, {
      "id": 176,
      "spell": "kelamayi",
      "name": "克拉玛依"
    }, {
      "id": 177,
      "spell": "kezile",
      "name": "克孜勒"
    }, {
      "id": 555,
      "spell": "kaihua",
      "name": "开化"
    }, {
      "id": 556,
      "spell": "kaiping",
      "name": "开平"
    }, {
      "id": 557,
      "spell": "kaixian",
      "name": "开县"
    }, {
      "id": 558,
      "spell": "kaiyang",
      "name": "开阳"
    }, {
      "id": 559,
      "spell": "kangping",
      "name": "康平"
    }, {
      "id": 560,
      "spell": "kenli",
      "name": "垦利"
    }, {
      "id": 561,
      "spell": "kunshan",
      "name": "昆山"
    }],
    "L": [{
      "id": 26,
      "spell": "lanzhou",
      "name": "兰州"
    }, {
      "id": 27,
      "spell": "liuzhou",
      "name": "柳州"
    }, {
      "id": 28,
      "spell": "luoyang",
      "name": "洛阳"
    }, {
      "id": 178,
      "spell": "laibin",
      "name": "来宾"
    }, {
      "id": 179,
      "spell": "laiwu",
      "name": "莱芜"
    }, {
      "id": 180,
      "spell": "langfang",
      "name": "廊坊"
    }, {
      "id": 181,
      "spell": "lasa",
      "name": "拉萨"
    }, {
      "id": 182,
      "spell": "leshan",
      "name": "乐山"
    }, {
      "id": 183,
      "spell": "liangshan",
      "name": "凉山"
    }, {
      "id": 184,
      "spell": "lianyungang",
      "name": "连云港"
    }, {
      "id": 185,
      "spell": "liaocheng",
      "name": "聊城"
    }, {
      "id": 186,
      "spell": "liaoyang",
      "name": "辽阳"
    }, {
      "id": 187,
      "spell": "liaoyuan",
      "name": "辽源"
    }, {
      "id": 188,
      "spell": "lijiang",
      "name": "丽江"
    }, {
      "id": 189,
      "spell": "lincang",
      "name": "临沧"
    }, {
      "id": 190,
      "spell": "linfen",
      "name": "临汾"
    }, {
      "id": 191,
      "spell": "linxia",
      "name": "临夏"
    }, {
      "id": 192,
      "spell": "linyi",
      "name": "临沂"
    }, {
      "id": 193,
      "spell": "linzhi",
      "name": "林芝"
    }, {
      "id": 194,
      "spell": "lishui",
      "name": "丽水"
    }, {
      "id": 195,
      "spell": "liuan",
      "name": "六安"
    }, {
      "id": 196,
      "spell": "liupanshui",
      "name": "六盘水"
    }, {
      "id": 197,
      "spell": "longnan",
      "name": "陇南"
    }, {
      "id": 198,
      "spell": "longyan",
      "name": "龙岩"
    }, {
      "id": 199,
      "spell": "loudi",
      "name": "娄底"
    }, {
      "id": 200,
      "spell": "luohe",
      "name": "漯河"
    }, {
      "id": 201,
      "spell": "luzhou",
      "name": "泸州"
    }, {
      "id": 202,
      "spell": "lvliang",
      "name": "吕梁"
    }, {
      "id": 562,
      "spell": "laian",
      "name": "来安"
    }, {
      "id": 563,
      "spell": "laixi",
      "name": "莱西"
    }, {
      "id": 564,
      "spell": "laiyang",
      "name": "莱阳"
    }, {
      "id": 565,
      "spell": "laizhou",
      "name": "莱州"
    }, {
      "id": 566,
      "spell": "langxi",
      "name": "郎溪"
    }, {
      "id": 567,
      "spell": "lantian",
      "name": "蓝田"
    }, {
      "id": 568,
      "spell": "lanxi",
      "name": "兰溪"
    }, {
      "id": 569,
      "spell": "lean",
      "name": "乐安"
    }, {
      "id": 570,
      "spell": "lechang",
      "name": "乐昌"
    }, {
      "id": 571,
      "spell": "leizhou",
      "name": "雷州"
    }, {
      "id": 572,
      "spell": "leling",
      "name": "乐陵"
    }, {
      "id": 573,
      "spell": "leping",
      "name": "乐平"
    }, {
      "id": 574,
      "spell": "leqing",
      "name": "乐清"
    }, {
      "id": 575,
      "spell": "leting",
      "name": "乐亭"
    }, {
      "id": 576,
      "spell": "liancheng",
      "name": "连城"
    }, {
      "id": 577,
      "spell": "liangping",
      "name": "梁平"
    }, {
      "id": 578,
      "spell": "liangshan",
      "name": "梁山"
    }, {
      "id": 579,
      "spell": "lianhua",
      "name": "莲花"
    }, {
      "id": 580,
      "spell": "lianjiang",
      "name": "连江"
    }, {
      "id": 581,
      "spell": "lianjiang",
      "name": "廉江"
    }, {
      "id": 582,
      "spell": "liannan",
      "name": "连南"
    }, {
      "id": 583,
      "spell": "lianping",
      "name": "连平"
    }, {
      "id": 584,
      "spell": "lianshan",
      "name": "连山"
    }, {
      "id": 585,
      "spell": "lianshui",
      "name": "涟水"
    }, {
      "id": 586,
      "spell": "lianzhou",
      "name": "连州"
    }, {
      "id": 587,
      "spell": "liaozhong",
      "name": "辽中"
    }, {
      "id": 588,
      "spell": "lichuan",
      "name": "黎川"
    }, {
      "id": 589,
      "spell": "lijin",
      "name": "利津"
    }, {
      "id": 590,
      "spell": "linan",
      "name": "临安"
    }, {
      "id": 591,
      "spell": "lingbi",
      "name": "灵璧"
    }, {
      "id": 592,
      "spell": "lingshou",
      "name": "灵寿"
    }, {
      "id": 593,
      "spell": "lingxian",
      "name": "陵县"
    }, {
      "id": 594,
      "spell": "linhai",
      "name": "临海"
    }, {
      "id": 595,
      "spell": "linqing",
      "name": "临清"
    }, {
      "id": 596,
      "spell": "linquan",
      "name": "临泉"
    }, {
      "id": 597,
      "spell": "linqu",
      "name": "临朐"
    }, {
      "id": 598,
      "spell": "linshu",
      "name": "临沭"
    }, {
      "id": 599,
      "spell": "linyi",
      "name": "临邑"
    }, {
      "id": 600,
      "spell": "lishui",
      "name": "溧水"
    }, {
      "id": 601,
      "spell": "liucheng",
      "name": "柳城"
    }, {
      "id": 602,
      "spell": "liujiang",
      "name": "柳江"
    }, {
      "id": 603,
      "spell": "liuyang",
      "name": "浏阳"
    }, {
      "id": 604,
      "spell": "lixin",
      "name": "利辛"
    }, {
      "id": 605,
      "spell": "liyang",
      "name": "溧阳"
    }, {
      "id": 606,
      "spell": "longan",
      "name": "隆安"
    }, {
      "id": 607,
      "spell": "longchuan",
      "name": "龙川"
    }, {
      "id": 608,
      "spell": "longhai",
      "name": "龙海"
    }, {
      "id": 609,
      "spell": "longkou",
      "name": "龙口"
    }, {
      "id": 610,
      "spell": "longmen",
      "name": "龙门"
    }, {
      "id": 611,
      "spell": "longnan",
      "name": "龙南"
    }, {
      "id": 612,
      "spell": "longquan",
      "name": "龙泉"
    }, {
      "id": 613,
      "spell": "longyou",
      "name": "龙游"
    }, {
      "id": 614,
      "spell": "luancheng",
      "name": "栾城"
    }, {
      "id": 615,
      "spell": "luanchuan",
      "name": "栾川"
    }, {
      "id": 616,
      "spell": "luannan",
      "name": "滦南"
    }, {
      "id": 617,
      "spell": "luanxian",
      "name": "滦县"
    }, {
      "id": 618,
      "spell": "lufeng",
      "name": "陆丰"
    }, {
      "id": 619,
      "spell": "luhe",
      "name": "陆河"
    }, {
      "id": 620,
      "spell": "lujiang",
      "name": "庐江"
    }, {
      "id": 621,
      "spell": "luoding",
      "name": "罗定"
    }, {
      "id": 622,
      "spell": "luoning",
      "name": "洛宁"
    }, {
      "id": 623,
      "spell": "luoyuan",
      "name": "罗源"
    }, {
      "id": 624,
      "spell": "luquan",
      "name": "鹿泉"
    }, {
      "id": 625,
      "spell": "luquan",
      "name": "禄劝"
    }, {
      "id": 626,
      "spell": "luxi",
      "name": "芦溪"
    }, {
      "id": 627,
      "spell": "luzhai",
      "name": "鹿寨"
    }],
    "M": [{
      "id": 203,
      "spell": "maanshan",
      "name": "马鞍山"
    }, {
      "id": 204,
      "spell": "maoming",
      "name": "茂名"
    }, {
      "id": 205,
      "spell": "meishan",
      "name": "眉山"
    }, {
      "id": 206,
      "spell": "meizhou",
      "name": "梅州"
    }, {
      "id": 207,
      "spell": "mianyang",
      "name": "绵阳"
    }, {
      "id": 208,
      "spell": "mudanjiang",
      "name": "牡丹江"
    }, {
      "id": 628,
      "spell": "mashan",
      "name": "马山"
    }, {
      "id": 629,
      "spell": "meixian",
      "name": "梅县"
    }, {
      "id": 630,
      "spell": "mengcheng",
      "name": "蒙城"
    }, {
      "id": 631,
      "spell": "mengjin",
      "name": "孟津"
    }, {
      "id": 632,
      "spell": "mengyin",
      "name": "蒙阴"
    }, {
      "id": 633,
      "spell": "mengzhou",
      "name": "孟州"
    }, {
      "id": 634,
      "spell": "mingguang",
      "name": "明光"
    }, {
      "id": 635,
      "spell": "mingxi",
      "name": "明溪"
    }, {
      "id": 636,
      "spell": "minhou",
      "name": "闽侯"
    }, {
      "id": 637,
      "spell": "minqing",
      "name": "闽清"
    }, {
      "id": 638,
      "spell": "mulan",
      "name": "木兰"
    }],
    "N": [{
      "id": 29,
      "spell": "nanchang",
      "name": "南昌"
    }, {
      "id": 30,
      "spell": "nanjing",
      "name": "南京"
    }, {
      "id": 31,
      "spell": "nanning",
      "name": "南宁"
    }, {
      "id": 32,
      "spell": "nantong",
      "name": "南通"
    }, {
      "id": 33,
      "spell": "ningbo",
      "name": "宁波"
    }, {
      "id": 209,
      "spell": "nanchong",
      "name": "南充"
    }, {
      "id": 210,
      "spell": "nanping",
      "name": "南平"
    }, {
      "id": 211,
      "spell": "nanyang",
      "name": "南阳"
    }, {
      "id": 212,
      "spell": "naqu",
      "name": "那曲"
    }, {
      "id": 213,
      "spell": "neijiang",
      "name": "内江"
    }, {
      "id": 214,
      "spell": "ningde",
      "name": "宁德"
    }, {
      "id": 215,
      "spell": "nujiang",
      "name": "怒江"
    }, {
      "id": 639,
      "spell": "nanan",
      "name": "南安"
    }, {
      "id": 640,
      "spell": "nanao",
      "name": "南澳"
    }, {
      "id": 641,
      "spell": "nancheng",
      "name": "南城"
    }, {
      "id": 642,
      "spell": "nanchuan",
      "name": "南川"
    }, {
      "id": 643,
      "spell": "nanfeng",
      "name": "南丰"
    }, {
      "id": 644,
      "spell": "nanjing",
      "name": "南靖"
    }, {
      "id": 645,
      "spell": "nankang",
      "name": "南康"
    }, {
      "id": 646,
      "spell": "nanling",
      "name": "南陵"
    }, {
      "id": 647,
      "spell": "nanxiong",
      "name": "南雄"
    }, {
      "id": 648,
      "spell": "ningdu",
      "name": "宁都"
    }, {
      "id": 649,
      "spell": "ningguo",
      "name": "宁国"
    }, {
      "id": 650,
      "spell": "ninghai",
      "name": "宁海"
    }, {
      "id": 651,
      "spell": "ninghua",
      "name": "宁化"
    }, {
      "id": 652,
      "spell": "ningjin",
      "name": "宁津"
    }, {
      "id": 653,
      "spell": "ningxiang",
      "name": "宁乡"
    }, {
      "id": 654,
      "spell": "ningyang",
      "name": "宁阳"
    }, {
      "id": 655,
      "spell": "nongan",
      "name": "农安"
    }],
    "P": [{
      "id": 216,
      "spell": "panjin",
      "name": "盘锦"
    }, {
      "id": 217,
      "spell": "panzhihua",
      "name": "攀枝花"
    }, {
      "id": 218,
      "spell": "pingdingshan",
      "name": "平顶山"
    }, {
      "id": 219,
      "spell": "pingliang",
      "name": "平凉"
    }, {
      "id": 220,
      "spell": "pingxiang",
      "name": "萍乡"
    }, {
      "id": 221,
      "spell": "puer",
      "name": "普洱"
    }, {
      "id": 222,
      "spell": "putian",
      "name": "莆田"
    }, {
      "id": 223,
      "spell": "puyang",
      "name": "濮阳"
    }, {
      "id": 656,
      "spell": "panan",
      "name": "磐安"
    }, {
      "id": 657,
      "spell": "panshi",
      "name": "磐石"
    }, {
      "id": 658,
      "spell": "peixian",
      "name": "沛县"
    }, {
      "id": 659,
      "spell": "penglai",
      "name": "蓬莱"
    }, {
      "id": 660,
      "spell": "pengshui",
      "name": "彭水"
    }, {
      "id": 661,
      "spell": "pengze",
      "name": "彭泽"
    }, {
      "id": 662,
      "spell": "pengzhou",
      "name": "彭州"
    }, {
      "id": 663,
      "spell": "pingdu",
      "name": "平度"
    }, {
      "id": 664,
      "spell": "pinghe",
      "name": "平和"
    }, {
      "id": 665,
      "spell": "pinghu",
      "name": "平湖"
    }, {
      "id": 666,
      "spell": "pingnan",
      "name": "屏南"
    }, {
      "id": 667,
      "spell": "pingshan",
      "name": "平山"
    }, {
      "id": 668,
      "spell": "pingtan",
      "name": "平潭"
    }, {
      "id": 669,
      "spell": "pingyang",
      "name": "平阳"
    }, {
      "id": 670,
      "spell": "pingyin",
      "name": "平阴"
    }, {
      "id": 671,
      "spell": "pingyi",
      "name": "平邑"
    }, {
      "id": 672,
      "spell": "pingyuan",
      "name": "平原"
    }, {
      "id": 673,
      "spell": "pingyuan",
      "name": "平远"
    }, {
      "id": 674,
      "spell": "pixian",
      "name": "郫县"
    }, {
      "id": 675,
      "spell": "pizhou",
      "name": "邳州"
    }, {
      "id": 676,
      "spell": "poyang",
      "name": "鄱阳"
    }, {
      "id": 677,
      "spell": "pucheng",
      "name": "浦城"
    }, {
      "id": 678,
      "spell": "pujiang",
      "name": "浦江"
    }, {
      "id": 679,
      "spell": "pujiang",
      "name": "蒲江"
    }, {
      "id": 680,
      "spell": "pulandian",
      "name": "普兰店"
    }, {
      "id": 681,
      "spell": "puning",
      "name": "普宁"
    }],
    "Q": [{
      "id": 34,
      "spell": "qingdao",
      "name": "青岛"
    }, {
      "id": 35,
      "spell": "quanzhou",
      "name": "泉州"
    }, {
      "id": 224,
      "spell": "qiandong",
      "name": "黔东"
    }, {
      "id": 225,
      "spell": "qiannan",
      "name": "黔南"
    }, {
      "id": 226,
      "spell": "qianxinan",
      "name": "黔西南"
    }, {
      "id": 227,
      "spell": "qingyang",
      "name": "庆阳"
    }, {
      "id": 228,
      "spell": "qingyuan",
      "name": "清远"
    }, {
      "id": 229,
      "spell": "qinhuangdao",
      "name": "秦皇岛"
    }, {
      "id": 230,
      "spell": "qinzhou",
      "name": "钦州"
    }, {
      "id": 231,
      "spell": "qiqihaer",
      "name": "齐齐哈尔"
    }, {
      "id": 232,
      "spell": "qitaihe",
      "name": "七台河"
    }, {
      "id": 233,
      "spell": "qujing",
      "name": "曲靖"
    }, {
      "id": 234,
      "spell": "quzhou",
      "name": "衢州"
    }, {
      "id": 682,
      "spell": "qianan",
      "name": "迁安"
    }, {
      "id": 683,
      "spell": "qianshan",
      "name": "潜山"
    }, {
      "id": 684,
      "spell": "qianshan",
      "name": "铅山"
    }, {
      "id": 685,
      "spell": "qianxi",
      "name": "迁西"
    }, {
      "id": 686,
      "spell": "qidong",
      "name": "启东"
    }, {
      "id": 687,
      "spell": "qihe",
      "name": "齐河"
    }, {
      "id": 688,
      "spell": "qijiang",
      "name": "綦江"
    }, {
      "id": 689,
      "spell": "qimen",
      "name": "祁门"
    }, {
      "id": 690,
      "spell": "qingliu",
      "name": "清流"
    }, {
      "id": 691,
      "spell": "qingtian",
      "name": "青田"
    }, {
      "id": 692,
      "spell": "qingxin",
      "name": "清新"
    }, {
      "id": 693,
      "spell": "qingyang",
      "name": "青阳"
    }, {
      "id": 694,
      "spell": "qingyuan",
      "name": "庆元"
    }, {
      "id": 695,
      "spell": "qingyun",
      "name": "庆云"
    }, {
      "id": 696,
      "spell": "qingzhen",
      "name": "清镇"
    }, {
      "id": 697,
      "spell": "qingzhou",
      "name": "青州"
    }, {
      "id": 698,
      "spell": "qinyang",
      "name": "沁阳"
    }, {
      "id": 699,
      "spell": "qionglai",
      "name": "邛崃"
    }, {
      "id": 700,
      "spell": "qixia",
      "name": "栖霞"
    }, {
      "id": 701,
      "spell": "quanjiao",
      "name": "全椒"
    }, {
      "id": 702,
      "spell": "quannan",
      "name": "全南"
    }, {
      "id": 703,
      "spell": "qufu",
      "name": "曲阜"
    }, {
      "id": 704,
      "spell": "qujiang",
      "name": "曲江"
    }],
    "R": [{
      "id": 235,
      "spell": "rikaze",
      "name": "日喀则"
    }, {
      "id": 236,
      "spell": "rizhao",
      "name": "日照"
    }, {
      "id": 705,
      "spell": "raoping",
      "name": "饶平"
    }, {
      "id": 706,
      "spell": "renhua",
      "name": "仁化"
    }, {
      "id": 707,
      "spell": "rongan",
      "name": "融安"
    }, {
      "id": 708,
      "spell": "rongchang",
      "name": "荣昌"
    }, {
      "id": 709,
      "spell": "rongcheng",
      "name": "荣成"
    }, {
      "id": 710,
      "spell": "rongshui",
      "name": "融水"
    }, {
      "id": 711,
      "spell": "rudong",
      "name": "如东"
    }, {
      "id": 712,
      "spell": "rugao",
      "name": "如皋"
    }, {
      "id": 713,
      "spell": "ruian",
      "name": "瑞安"
    }, {
      "id": 714,
      "spell": "ruichang",
      "name": "瑞昌"
    }, {
      "id": 715,
      "spell": "ruijin",
      "name": "瑞金"
    }, {
      "id": 716,
      "spell": "rushan",
      "name": "乳山"
    }, {
      "id": 717,
      "spell": "ruyang",
      "name": "汝阳"
    }, {
      "id": 718,
      "spell": "ruyuan",
      "name": "乳源"
    }],
    "S": [{
      "id": 3,
      "spell": "shanghai",
      "name": "上海"
    }, {
      "id": 36,
      "spell": "shenyang",
      "name": "沈阳"
    }, {
      "id": 37,
      "spell": "shenzhen",
      "name": "深圳"
    }, {
      "id": 38,
      "spell": "shijiazhuang",
      "name": "石家庄"
    }, {
      "id": 39,
      "spell": "suzhou",
      "name": "苏州"
    }, {
      "id": 237,
      "spell": "sanmenxia",
      "name": "三门峡"
    }, {
      "id": 238,
      "spell": "sanming",
      "name": "三明"
    }, {
      "id": 239,
      "spell": "sanya",
      "name": "三亚"
    }, {
      "id": 240,
      "spell": "shangluo",
      "name": "商洛"
    }, {
      "id": 241,
      "spell": "shangqiu",
      "name": "商丘"
    }, {
      "id": 242,
      "spell": "shangrao",
      "name": "上饶"
    }, {
      "id": 243,
      "spell": "shannan",
      "name": "山南"
    }, {
      "id": 244,
      "spell": "shantou",
      "name": "汕头"
    }, {
      "id": 245,
      "spell": "shanwei",
      "name": "汕尾"
    }, {
      "id": 246,
      "spell": "shaoguan",
      "name": "韶关"
    }, {
      "id": 247,
      "spell": "shaoxing",
      "name": "绍兴"
    }, {
      "id": 248,
      "spell": "shaoyang",
      "name": "邵阳"
    }, {
      "id": 249,
      "spell": "shiyan",
      "name": "十堰"
    }, {
      "id": 250,
      "spell": "shizuishan",
      "name": "石嘴山"
    }, {
      "id": 251,
      "spell": "shuangyashan",
      "name": "双鸭山"
    }, {
      "id": 252,
      "spell": "shuozhou",
      "name": "朔州"
    }, {
      "id": 253,
      "spell": "siping",
      "name": "四平"
    }, {
      "id": 254,
      "spell": "songyuan",
      "name": "松原"
    }, {
      "id": 255,
      "spell": "suihua",
      "name": "绥化"
    }, {
      "id": 256,
      "spell": "suining",
      "name": "遂宁"
    }, {
      "id": 257,
      "spell": "suizhou",
      "name": "随州"
    }, {
      "id": 258,
      "spell": "suqian",
      "name": "宿迁"
    }, {
      "id": 259,
      "spell": "suzhou",
      "name": "宿州"
    }, {
      "id": 719,
      "spell": "sanjiang",
      "name": "三江"
    }, {
      "id": 720,
      "spell": "sanmen",
      "name": "三门"
    }, {
      "id": 721,
      "spell": "saoan",
      "name": "诏安"
    }, {
      "id": 722,
      "spell": "shanggao",
      "name": "上高"
    }, {
      "id": 723,
      "spell": "shanghang",
      "name": "上杭"
    }, {
      "id": 724,
      "spell": "shanghe",
      "name": "商河"
    }, {
      "id": 725,
      "spell": "shangli",
      "name": "上栗"
    }, {
      "id": 726,
      "spell": "shanglin",
      "name": "上林"
    }, {
      "id": 727,
      "spell": "shangrao",
      "name": "上饶"
    }, {
      "id": 728,
      "spell": "shangyou",
      "name": "上犹"
    }, {
      "id": 729,
      "spell": "shangyu",
      "name": "上虞"
    }, {
      "id": 730,
      "spell": "shangzhi",
      "name": "尚志"
    }, {
      "id": 731,
      "spell": "shaowu",
      "name": "邵武"
    }, {
      "id": 732,
      "spell": "shaoxing",
      "name": "绍兴"
    }, {
      "id": 733,
      "spell": "shaxian",
      "name": "沙县"
    }, {
      "id": 734,
      "spell": "shengsi",
      "name": "嵊泗"
    }, {
      "id": 735,
      "spell": "shengzhou",
      "name": "嵊州"
    }, {
      "id": 736,
      "spell": "shenxian",
      "name": "莘县"
    }, {
      "id": 737,
      "spell": "shenze",
      "name": "深泽"
    }, {
      "id": 738,
      "spell": "shexian",
      "name": "歙县"
    }, {
      "id": 739,
      "spell": "sheyang",
      "name": "射阳"
    }, {
      "id": 740,
      "spell": "shicheng",
      "name": "石城"
    }, {
      "id": 741,
      "spell": "shilin",
      "name": "石林"
    }, {
      "id": 742,
      "spell": "shishi",
      "name": "石狮"
    }, {
      "id": 743,
      "spell": "shitai",
      "name": "石台"
    }, {
      "id": 744,
      "spell": "shixing",
      "name": "始兴"
    }, {
      "id": 745,
      "spell": "shizhu",
      "name": "石柱"
    }, {
      "id": 746,
      "spell": "shouguang",
      "name": "寿光"
    }, {
      "id": 747,
      "spell": "shouning",
      "name": "寿宁"
    }, {
      "id": 748,
      "spell": "shouxian",
      "name": "寿县"
    }, {
      "id": 749,
      "spell": "shuangcheng",
      "name": "双城"
    }, {
      "id": 750,
      "spell": "shuangliu",
      "name": "双流"
    }, {
      "id": 751,
      "spell": "shucheng",
      "name": "舒城"
    }, {
      "id": 752,
      "spell": "shulan",
      "name": "舒兰"
    }, {
      "id": 753,
      "spell": "shunchang",
      "name": "顺昌"
    }, {
      "id": 754,
      "spell": "shuyang",
      "name": "沭阳"
    }, {
      "id": 755,
      "spell": "sihong",
      "name": "泗洪"
    }, {
      "id": 756,
      "spell": "sihui",
      "name": "四会"
    }, {
      "id": 757,
      "spell": "sishui",
      "name": "泗水"
    }, {
      "id": 758,
      "spell": "sixian",
      "name": "泗县"
    }, {
      "id": 759,
      "spell": "siyang",
      "name": "泗阳"
    }, {
      "id": 760,
      "spell": "songming",
      "name": "嵩明"
    }, {
      "id": 761,
      "spell": "songxi",
      "name": "松溪"
    }, {
      "id": 762,
      "spell": "songxian",
      "name": "嵩县"
    }, {
      "id": 763,
      "spell": "songyang",
      "name": "松阳"
    }, {
      "id": 764,
      "spell": "suichang",
      "name": "遂昌"
    }, {
      "id": 765,
      "spell": "suichuan",
      "name": "遂川"
    }, {
      "id": 766,
      "spell": "suining",
      "name": "睢宁"
    }, {
      "id": 767,
      "spell": "suixi",
      "name": "濉溪"
    }, {
      "id": 768,
      "spell": "suixi",
      "name": "遂溪"
    }, {
      "id": 769,
      "spell": "susong",
      "name": "宿松"
    }, {
      "id": 770,
      "spell": "suyu",
      "name": "宿豫"
    }],
    "T": [{
      "id": 4,
      "spell": "tianjin",
      "name": "天津"
    }, {
      "id": 40,
      "spell": "taizhou",
      "name": "台州"
    }, {
      "id": 41,
      "spell": "tangshan",
      "name": "唐山"
    }, {
      "id": 260,
      "spell": "tachengdi",
      "name": "塔城地"
    }, {
      "id": 261,
      "spell": "taian",
      "name": "泰安"
    }, {
      "id": 262,
      "spell": "taiyuan",
      "name": "太原"
    }, {
      "id": 263,
      "spell": "taizhou",
      "name": "泰州"
    }, {
      "id": 264,
      "spell": "tianshui",
      "name": "天水"
    }, {
      "id": 265,
      "spell": "tieling",
      "name": "铁岭"
    }, {
      "id": 266,
      "spell": "tongchuan",
      "name": "铜川"
    }, {
      "id": 267,
      "spell": "tonghua",
      "name": "通化"
    }, {
      "id": 268,
      "spell": "tongliao",
      "name": "通辽"
    }, {
      "id": 269,
      "spell": "tongling",
      "name": "铜陵"
    }, {
      "id": 270,
      "spell": "tongren",
      "name": "铜仁"
    }, {
      "id": 271,
      "spell": "tulufan",
      "name": "吐鲁番"
    }, {
      "id": 771,
      "spell": "taicang",
      "name": "太仓"
    }, {
      "id": 772,
      "spell": "taihe",
      "name": "太和"
    }, {
      "id": 773,
      "spell": "taihe",
      "name": "泰和"
    }, {
      "id": 774,
      "spell": "taihu",
      "name": "太湖"
    }, {
      "id": 775,
      "spell": "taining",
      "name": "泰宁"
    }, {
      "id": 776,
      "spell": "taishan",
      "name": "台山"
    }, {
      "id": 777,
      "spell": "taishun",
      "name": "泰顺"
    }, {
      "id": 778,
      "spell": "taixing",
      "name": "泰兴"
    }, {
      "id": 779,
      "spell": "tancheng",
      "name": "郯城"
    }, {
      "id": 780,
      "spell": "tanghai",
      "name": "唐海"
    }, {
      "id": 781,
      "spell": "tengzhou",
      "name": "滕州"
    }, {
      "id": 782,
      "spell": "tianchang",
      "name": "天长"
    }, {
      "id": 783,
      "spell": "tiantai",
      "name": "天台"
    }, {
      "id": 784,
      "spell": "tongcheng",
      "name": "桐城"
    }, {
      "id": 785,
      "spell": "tonggu",
      "name": "铜鼓"
    }, {
      "id": 786,
      "spell": "tonghe",
      "name": "通河"
    }, {
      "id": 787,
      "spell": "tongliang",
      "name": "铜梁"
    }, {
      "id": 788,
      "spell": "tongling",
      "name": "铜陵"
    }, {
      "id": 789,
      "spell": "tonglu",
      "name": "桐庐"
    }, {
      "id": 790,
      "spell": "tongnan",
      "name": "潼南"
    }, {
      "id": 791,
      "spell": "tongshan",
      "name": "铜山"
    }, {
      "id": 792,
      "spell": "tongxiang",
      "name": "桐乡"
    }, {
      "id": 793,
      "spell": "tongzhou",
      "name": "通州"
    }],
    "W": [{
      "id": 42,
      "spell": "weifang",
      "name": "潍坊"
    }, {
      "id": 43,
      "spell": "weihai",
      "name": "威海"
    }, {
      "id": 44,
      "spell": "wuhan",
      "name": "武汉"
    }, {
      "id": 45,
      "spell": "wuxi",
      "name": "无锡"
    }, {
      "id": 272,
      "spell": "weinan",
      "name": "渭南"
    }, {
      "id": 273,
      "spell": "wenshan",
      "name": "文山"
    }, {
      "id": 274,
      "spell": "wenzhou",
      "name": "温州"
    }, {
      "id": 275,
      "spell": "wuhai",
      "name": "乌海"
    }, {
      "id": 276,
      "spell": "wuhu",
      "name": "芜湖"
    }, {
      "id": 277,
      "spell": "wulanchabu",
      "name": "乌兰察布"
    }, {
      "id": 278,
      "spell": "wulumuqi",
      "name": "乌鲁木齐"
    }, {
      "id": 279,
      "spell": "wuwei",
      "name": "武威"
    }, {
      "id": 280,
      "spell": "wuzhong",
      "name": "吴忠"
    }, {
      "id": 281,
      "spell": "wuzhou",
      "name": "梧州"
    }, {
      "id": 794,
      "spell": "wafangdian",
      "name": "瓦房店"
    }, {
      "id": 795,
      "spell": "wanan",
      "name": "万安"
    }, {
      "id": 796,
      "spell": "wangcheng",
      "name": "望城"
    }, {
      "id": 797,
      "spell": "wangjiang",
      "name": "望江"
    }, {
      "id": 798,
      "spell": "wannian",
      "name": "万年"
    }, {
      "id": 799,
      "spell": "wanzai",
      "name": "万载"
    }, {
      "id": 800,
      "spell": "weishan",
      "name": "微山"
    }, {
      "id": 801,
      "spell": "wencheng",
      "name": "文成"
    }, {
      "id": 802,
      "spell": "wendeng",
      "name": "文登"
    }, {
      "id": 803,
      "spell": "wengyuan",
      "name": "翁源"
    }, {
      "id": 804,
      "spell": "wenling",
      "name": "温岭"
    }, {
      "id": 805,
      "spell": "wenshang",
      "name": "汶上"
    }, {
      "id": 806,
      "spell": "wenxian",
      "name": "温县"
    }, {
      "id": 807,
      "spell": "woyang",
      "name": "涡阳"
    }, {
      "id": 808,
      "spell": "wuchang",
      "name": "五常"
    }, {
      "id": 809,
      "spell": "wucheng",
      "name": "武城"
    }, {
      "id": 810,
      "spell": "wuchuan",
      "name": "吴川"
    }, {
      "id": 811,
      "spell": "wudi",
      "name": "无棣"
    }, {
      "id": 812,
      "spell": "wuhe",
      "name": "五河"
    }, {
      "id": 813,
      "spell": "wuhu",
      "name": "芜湖"
    }, {
      "id": 814,
      "spell": "wuhua",
      "name": "五华"
    }, {
      "id": 815,
      "spell": "wuji",
      "name": "无极"
    }, {
      "id": 816,
      "spell": "wujiang",
      "name": "吴江"
    }, {
      "id": 817,
      "spell": "wulian",
      "name": "五莲"
    }, {
      "id": 818,
      "spell": "wulong",
      "name": "武隆"
    }, {
      "id": 819,
      "spell": "wuming",
      "name": "武鸣"
    }, {
      "id": 820,
      "spell": "wuning",
      "name": "武宁"
    }, {
      "id": 821,
      "spell": "wuping",
      "name": "武平"
    }, {
      "id": 822,
      "spell": "wushan",
      "name": "巫山"
    }, {
      "id": 823,
      "spell": "wuwei",
      "name": "无为"
    }, {
      "id": 824,
      "spell": "wuxi",
      "name": "巫溪"
    }, {
      "id": 825,
      "spell": "wuyi",
      "name": "武义"
    }, {
      "id": 826,
      "spell": "wuyishan",
      "name": "武夷山"
    }, {
      "id": 827,
      "spell": "wuyuan",
      "name": "婺源"
    }, {
      "id": 828,
      "spell": "wuzhi",
      "name": "武陟"
    }],
    "X": [{
      "id": 46,
      "spell": "xiamen",
      "name": "厦门"
    }, {
      "id": 47,
      "spell": "xian",
      "name": "西安"
    }, {
      "id": 48,
      "spell": "xuchang",
      "name": "许昌"
    }, {
      "id": 49,
      "spell": "xuzhou",
      "name": "徐州"
    }, {
      "id": 282,
      "spell": "xiangfan",
      "name": "襄樊"
    }, {
      "id": 283,
      "spell": "xiangtan",
      "name": "湘潭"
    }, {
      "id": 284,
      "spell": "xiangxi",
      "name": "湘西"
    }, {
      "id": 285,
      "spell": "xianning",
      "name": "咸宁"
    }, {
      "id": 286,
      "spell": "xianyang",
      "name": "咸阳"
    }, {
      "id": 287,
      "spell": "xiaogan",
      "name": "孝感"
    }, {
      "id": 288,
      "spell": "xilinguolemeng",
      "name": "锡林郭勒盟"
    }, {
      "id": 289,
      "spell": "xinganmeng",
      "name": "兴安盟"
    }, {
      "id": 290,
      "spell": "xingtai",
      "name": "邢台"
    }, {
      "id": 291,
      "spell": "xining",
      "name": "西宁"
    }, {
      "id": 292,
      "spell": "xinxiang",
      "name": "新乡"
    }, {
      "id": 293,
      "spell": "xinyang",
      "name": "信阳"
    }, {
      "id": 294,
      "spell": "xinyu",
      "name": "新余"
    }, {
      "id": 295,
      "spell": "xinzhou",
      "name": "忻州"
    }, {
      "id": 296,
      "spell": "xishuangbanna",
      "name": "西双版纳"
    }, {
      "id": 297,
      "spell": "xuancheng",
      "name": "宣城"
    }, {
      "id": 829,
      "spell": "xiajiang",
      "name": "峡江"
    }, {
      "id": 830,
      "spell": "xiajin",
      "name": "夏津"
    }, {
      "id": 831,
      "spell": "xiangshan",
      "name": "象山"
    }, {
      "id": 832,
      "spell": "xiangshui",
      "name": "响水"
    }, {
      "id": 833,
      "spell": "xianju",
      "name": "仙居"
    }, {
      "id": 834,
      "spell": "xianyou",
      "name": "仙游"
    }, {
      "id": 835,
      "spell": "xiaoxian",
      "name": "萧县"
    }, {
      "id": 836,
      "spell": "xiapu",
      "name": "霞浦"
    }, {
      "id": 837,
      "spell": "xifeng",
      "name": "息烽"
    }, {
      "id": 838,
      "spell": "xinan",
      "name": "新安"
    }, {
      "id": 839,
      "spell": "xinchang",
      "name": "新昌"
    }, {
      "id": 840,
      "spell": "xinfeng",
      "name": "信丰"
    }, {
      "id": 841,
      "spell": "xinfeng",
      "name": "新丰"
    }, {
      "id": 842,
      "spell": "xingan",
      "name": "新干"
    }, {
      "id": 843,
      "spell": "xingguo",
      "name": "兴国"
    }, {
      "id": 844,
      "spell": "xinghua",
      "name": "兴化"
    }, {
      "id": 845,
      "spell": "xingning",
      "name": "兴宁"
    }, {
      "id": 846,
      "spell": "xingtang",
      "name": "行唐"
    }, {
      "id": 847,
      "spell": "xingyang",
      "name": "荥阳"
    }, {
      "id": 848,
      "spell": "xingzi",
      "name": "星子"
    }, {
      "id": 849,
      "spell": "xinji",
      "name": "辛集"
    }, {
      "id": 850,
      "spell": "xinjian",
      "name": "新建"
    }, {
      "id": 851,
      "spell": "xinjin",
      "name": "新津"
    }, {
      "id": 852,
      "spell": "xinle",
      "name": "新乐"
    }, {
      "id": 853,
      "spell": "xinmin",
      "name": "新民"
    }, {
      "id": 854,
      "spell": "xinmi",
      "name": "新密"
    }, {
      "id": 855,
      "spell": "xintai",
      "name": "新泰"
    }, {
      "id": 856,
      "spell": "xinxing",
      "name": "新兴"
    }, {
      "id": 857,
      "spell": "xinyi",
      "name": "新沂"
    }, {
      "id": 858,
      "spell": "xinyi",
      "name": "信宜"
    }, {
      "id": 859,
      "spell": "xinzheng",
      "name": "新郑"
    }, {
      "id": 860,
      "spell": "xiuning",
      "name": "休宁"
    }, {
      "id": 861,
      "spell": "xiushan",
      "name": "秀山"
    }, {
      "id": 862,
      "spell": "xiushui",
      "name": "修水"
    }, {
      "id": 863,
      "spell": "xiuwen",
      "name": "修文"
    }, {
      "id": 864,
      "spell": "xiuwu",
      "name": "修武"
    }, {
      "id": 865,
      "spell": "xundian",
      "name": "寻甸"
    }, {
      "id": 866,
      "spell": "xunwu",
      "name": "寻乌"
    }, {
      "id": 867,
      "spell": "xuwen",
      "name": "徐闻"
    }, {
      "id": 868,
      "spell": "xuyi",
      "name": "盱眙"
    }],
    "Y": [{
      "id": 50,
      "spell": "yangzhou",
      "name": "扬州"
    }, {
      "id": 51,
      "spell": "yantai",
      "name": "烟台"
    }, {
      "id": 298,
      "spell": "yaan",
      "name": "雅安"
    }, {
      "id": 299,
      "spell": "yanan",
      "name": "延安"
    }, {
      "id": 300,
      "spell": "yanbian",
      "name": "延边"
    }, {
      "id": 301,
      "spell": "yancheng",
      "name": "盐城"
    }, {
      "id": 302,
      "spell": "yangjiang",
      "name": "阳江"
    }, {
      "id": 303,
      "spell": "yangquan",
      "name": "阳泉"
    }, {
      "id": 304,
      "spell": "yibin",
      "name": "宜宾"
    }, {
      "id": 305,
      "spell": "yichang",
      "name": "宜昌"
    }, {
      "id": 306,
      "spell": "yichun",
      "name": "伊春"
    }, {
      "id": 307,
      "spell": "yichun",
      "name": "宜春"
    }, {
      "id": 308,
      "spell": "yilihasake",
      "name": "伊犁哈萨克"
    }, {
      "id": 309,
      "spell": "yinchuan",
      "name": "银川"
    }, {
      "id": 310,
      "spell": "yingkou",
      "name": "营口"
    }, {
      "id": 311,
      "spell": "yingtan",
      "name": "鹰潭"
    }, {
      "id": 312,
      "spell": "yiyang",
      "name": "益阳"
    }, {
      "id": 313,
      "spell": "yongzhou",
      "name": "永州"
    }, {
      "id": 314,
      "spell": "yueyang",
      "name": "岳阳"
    }, {
      "id": 315,
      "spell": "yulin",
      "name": "玉林"
    }, {
      "id": 316,
      "spell": "yulin",
      "name": "榆林"
    }, {
      "id": 317,
      "spell": "yuncheng",
      "name": "运城"
    }, {
      "id": 318,
      "spell": "yunfu",
      "name": "云浮"
    }, {
      "id": 319,
      "spell": "yushu",
      "name": "玉树"
    }, {
      "id": 320,
      "spell": "yuxi",
      "name": "玉溪"
    }, {
      "id": 869,
      "spell": "yangchun",
      "name": "阳春"
    }, {
      "id": 870,
      "spell": "yangdong",
      "name": "阳东"
    }, {
      "id": 871,
      "spell": "yanggu",
      "name": "阳谷"
    }, {
      "id": 872,
      "spell": "yangshan",
      "name": "阳山"
    }, {
      "id": 873,
      "spell": "yangxin",
      "name": "阳信"
    }, {
      "id": 874,
      "spell": "yangxi",
      "name": "阳西"
    }, {
      "id": 875,
      "spell": "yangzhong",
      "name": "扬中"
    }, {
      "id": 876,
      "spell": "yanshi",
      "name": "偃师"
    }, {
      "id": 877,
      "spell": "yanshou",
      "name": "延寿"
    }, {
      "id": 878,
      "spell": "yanzhou",
      "name": "兖州"
    }, {
      "id": 879,
      "spell": "yichuan",
      "name": "伊川"
    }, {
      "id": 880,
      "spell": "yifeng",
      "name": "宜丰"
    }, {
      "id": 881,
      "spell": "yihuang",
      "name": "宜黄"
    }, {
      "id": 882,
      "spell": "yilan",
      "name": "依兰"
    }, {
      "id": 883,
      "spell": "yiliang",
      "name": "宜良"
    }, {
      "id": 884,
      "spell": "yinan",
      "name": "沂南"
    }, {
      "id": 885,
      "spell": "yingde",
      "name": "英德"
    }, {
      "id": 886,
      "spell": "yingshang",
      "name": "颍上"
    }, {
      "id": 887,
      "spell": "yishui",
      "name": "沂水"
    }, {
      "id": 888,
      "spell": "yiwu",
      "name": "义乌"
    }, {
      "id": 889,
      "spell": "yixian",
      "name": "黟县"
    }, {
      "id": 890,
      "spell": "yixing",
      "name": "宜兴"
    }, {
      "id": 891,
      "spell": "yiyang",
      "name": "弋阳"
    }, {
      "id": 892,
      "spell": "yiyang",
      "name": "宜阳"
    }, {
      "id": 893,
      "spell": "yiyuan",
      "name": "沂源"
    }, {
      "id": 894,
      "spell": "yizheng",
      "name": "仪征"
    }, {
      "id": 895,
      "spell": "yongan",
      "name": "永安"
    }, {
      "id": 896,
      "spell": "yongchuan",
      "name": "永川"
    }, {
      "id": 897,
      "spell": "yongchun",
      "name": "永春"
    }, {
      "id": 898,
      "spell": "yongdeng",
      "name": "永登"
    }, {
      "id": 899,
      "spell": "yongding",
      "name": "永定"
    }, {
      "id": 900,
      "spell": "yongfeng",
      "name": "永丰"
    }, {
      "id": 901,
      "spell": "yongji",
      "name": "永吉"
    }, {
      "id": 902,
      "spell": "yongjia",
      "name": "永嘉"
    }, {
      "id": 903,
      "spell": "yongkang",
      "name": "永康"
    }, {
      "id": 904,
      "spell": "yongning",
      "name": "邕宁"
    }, {
      "id": 905,
      "spell": "yongtai",
      "name": "永泰"
    }, {
      "id": 906,
      "spell": "yongxin",
      "name": "永新"
    }, {
      "id": 907,
      "spell": "yongxiu",
      "name": "永修"
    }, {
      "id": 908,
      "spell": "youxi",
      "name": "尤溪"
    }, {
      "id": 909,
      "spell": "youyang",
      "name": "酉阳"
    }, {
      "id": 910,
      "spell": "yuanshi",
      "name": "元氏"
    }, {
      "id": 911,
      "spell": "yucheng",
      "name": "禹城"
    }, {
      "id": 912,
      "spell": "yudu",
      "name": "于都"
    }, {
      "id": 913,
      "spell": "yuexi",
      "name": "岳西"
    }, {
      "id": 914,
      "spell": "yugan",
      "name": "余干"
    }, {
      "id": 915,
      "spell": "yuhuan",
      "name": "玉环"
    }, {
      "id": 916,
      "spell": "yujiang",
      "name": "余江"
    }, {
      "id": 917,
      "spell": "yunan",
      "name": "郁南"
    }, {
      "id": 918,
      "spell": "yunan",
      "name": "云安"
    }, {
      "id": 919,
      "spell": "yuncheng",
      "name": "郓城"
    }, {
      "id": 920,
      "spell": "yunhe",
      "name": "云和"
    }, {
      "id": 921,
      "spell": "yunxiao",
      "name": "云霄"
    }, {
      "id": 922,
      "spell": "yunyang",
      "name": "云阳"
    }, {
      "id": 923,
      "spell": "yushan",
      "name": "玉山"
    }, {
      "id": 924,
      "spell": "yushu",
      "name": "榆树"
    }, {
      "id": 925,
      "spell": "yutai",
      "name": "鱼台"
    }, {
      "id": 926,
      "spell": "yutian",
      "name": "玉田"
    }, {
      "id": 927,
      "spell": "yuyao",
      "name": "余姚"
    }, {
      "id": 928,
      "spell": "yuzhong",
      "name": "榆中"
    }],
    "Z": [{
      "id": 52,
      "spell": "zhangzhou",
      "name": "漳州"
    }, {
      "id": 53,
      "spell": "zhengzhou",
      "name": "郑州"
    }, {
      "id": 54,
      "spell": "zhongshan",
      "name": "中山"
    }, {
      "id": 55,
      "spell": "zhuhai",
      "name": "珠海"
    }, {
      "id": 321,
      "spell": "zaozhuang",
      "name": "枣庄"
    }, {
      "id": 322,
      "spell": "zhangjiajie",
      "name": "张家界"
    }, {
      "id": 323,
      "spell": "zhangjiakou",
      "name": "张家口"
    }, {
      "id": 324,
      "spell": "zhangye",
      "name": "张掖"
    }, {
      "id": 325,
      "spell": "zhanjiang",
      "name": "湛江"
    }, {
      "id": 326,
      "spell": "zhaoqing",
      "name": "肇庆"
    }, {
      "id": 327,
      "spell": "zhaotong",
      "name": "昭通"
    }, {
      "id": 328,
      "spell": "zhenjiang",
      "name": "镇江"
    }, {
      "id": 329,
      "spell": "zhongwei",
      "name": "中卫"
    }, {
      "id": 330,
      "spell": "zhoukou",
      "name": "周口"
    }, {
      "id": 331,
      "spell": "zhoushan",
      "name": "舟山"
    }, {
      "id": 332,
      "spell": "zhumadian",
      "name": "驻马店"
    }, {
      "id": 333,
      "spell": "zhuzhou",
      "name": "株洲"
    }, {
      "id": 334,
      "spell": "zibo",
      "name": "淄博"
    }, {
      "id": 335,
      "spell": "zigong",
      "name": "自贡"
    }, {
      "id": 336,
      "spell": "ziyang",
      "name": "资阳"
    }, {
      "id": 337,
      "spell": "zunyi",
      "name": "遵义"
    }, {
      "id": 929,
      "spell": "zanhuang",
      "name": "赞皇"
    }, {
      "id": 930,
      "spell": "zengcheng",
      "name": "增城"
    }, {
      "id": 931,
      "spell": "zhangjiagang",
      "name": "张家港"
    }, {
      "id": 932,
      "spell": "zhangping",
      "name": "漳平"
    }, {
      "id": 933,
      "spell": "zhangpu",
      "name": "漳浦"
    }, {
      "id": 934,
      "spell": "zhangqiu",
      "name": "章丘"
    }, {
      "id": 935,
      "spell": "zhangshu",
      "name": "樟树"
    }, {
      "id": 936,
      "spell": "zhanhua",
      "name": "沾化"
    }, {
      "id": 937,
      "spell": "zhaoxian",
      "name": "赵县"
    }, {
      "id": 938,
      "spell": "zhaoyuan",
      "name": "招远"
    }, {
      "id": 939,
      "spell": "zhengding",
      "name": "正定"
    }, {
      "id": 940,
      "spell": "zhenghe",
      "name": "政和"
    }, {
      "id": 941,
      "spell": "zherong",
      "name": "柘荣"
    }, {
      "id": 942,
      "spell": "zhongmou",
      "name": "中牟"
    }, {
      "id": 943,
      "spell": "zhongxian",
      "name": "忠县"
    }, {
      "id": 944,
      "spell": "zhouning",
      "name": "周宁"
    }, {
      "id": 945,
      "spell": "zhouzhi",
      "name": "周至"
    }, {
      "id": 946,
      "spell": "zhuanghe",
      "name": "庄河"
    }, {
      "id": 947,
      "spell": "zhucheng",
      "name": "诸城"
    }, {
      "id": 948,
      "spell": "zhuji",
      "name": "诸暨"
    }, {
      "id": 949,
      "spell": "zijin",
      "name": "紫金"
    }, {
      "id": 950,
      "spell": "zixi",
      "name": "资溪"
    }, {
      "id": 951,
      "spell": "zoucheng",
      "name": "邹城"
    }, {
      "id": 952,
      "spell": "zouping",
      "name": "邹平"
    }, {
      "id": 953,
      "spell": "zunhua",
      "name": "遵化"
    }]
  }
};
var A = [
  {
    name: "安徽",
    id: "A",
    data: [
      "合肥",
      "芜湖",
      "蚌埠",
      "淮南",
      "马鞍山",
      "淮北",
      "铜陵",
      "安庆",
      "黄山",
      "滁州",
      "阜阳",
      "宿州",
      "六安",
      "亳州",
      "池州",
      "宣城"
    ]
  }
];
var C = [
  {
    name: "重庆",
    id: "C",
    data: [
      "万州",
      "涪陵",
      "渝中",
      "大渡口",
      "江北",
      "沙坪坝",
      "九龙坡",
      "南岸",
      "北碚",
      "綦江",
      "大足",
      "渝北",
      "巴南",
      "黔江",
      "长寿",
      "江津",
      "合川",
      "永川",
      "南川",
      "璧山",
      "铜梁",
      "潼南",
      "荣昌",
      "开州",
      "梁平",
      "武隆",
      "城口县",
      "丰都县",
      "垫江县",
      "忠县",
      "云阳县",
      "奉节县",
      "巫山县",
      "巫溪县",
      "石柱土家族自治县",
      "秀山土家族苗族自治县",
      "酉阳土家族苗族自治县",
      "彭水苗族土家族自治县"
    ]
  }
];
var F = [
  {
    name: "福建",
    id: "F",
    data: [
      "福州",
      "厦门",
      "莆田",
      "三明",
      "泉州",
      "漳州",
      "南平",
      "龙岩",
      "宁德"
    ]
  }
];
var G = [
  {
    name: "广东",
    id: "G",
    data: [
      "广州",
      "韶关",
      "深圳",
      "珠海",
      "汕头",
      "佛山",
      "江门",
      "湛江",
      "茂名",
      "肇庆",
      "惠州",
      "梅州",
      "汕尾",
      "河源",
      "阳江",
      "清远",
      "东莞",
      "中山",
      "潮州",
      "揭阳",
      "云浮"
    ]
  },
  {
    name: "广西",
    data: [
      "南宁",
      "柳州",
      "桂林",
      "梧州",
      "北海",
      "防城港",
      "钦州",
      "贵港",
      "玉林",
      "百色",
      "贺州",
      "河池",
      "来宾",
      "崇左"
    ]
  },
  {
    name: "贵州",
    data: [
      "贵阳",
      "六盘水",
      "遵义",
      "安顺",
      "毕节",
      "铜仁",
      "黔西南布依族苗族自治州",
      "黔东南苗族侗族自治州",
      "黔南布依族苗族自治州"
    ]
  },
  {
    name: "甘肃",
    data: [
      "兰州",
      "嘉峪关",
      "金昌",
      "白银",
      "天水",
      "武威",
      "张掖",
      "平凉",
      "酒泉",
      "庆阳",
      "定西",
      "陇南",
      "临夏回族自治州",
      "甘南藏族自治州"
    ]
  }
];
var H = [
  {
    name: "河北",
    id: "H",
    data: [
      "石家庄",
      "唐山",
      "秦皇岛",
      "邯郸",
      "邢台",
      "保定",
      "张家口",
      "承德",
      "沧州",
      "廊坊",
      "衡水"
    ]
  },
  {
    name: "黑龙江",
    data: [
      "哈尔滨",
      "齐齐哈尔",
      "鸡西",
      "鹤岗",
      "双鸭山",
      "大庆",
      "伊春",
      "佳木斯",
      "七台河",
      "牡丹江",
      "黑河",
      "绥化",
      "大兴安岭地"
    ]
  },
  {
    name: "河南",
    data: [
      "郑州",
      "开封",
      "洛阳",
      "平顶山",
      "安阳",
      "鹤壁",
      "新乡",
      "焦作",
      "濮阳",
      "许昌",
      "漯河",
      "三门峡",
      "南阳",
      "商丘",
      "信阳",
      "周口",
      "驻马店",
      "济源"
    ]
  },
  {
    name: "湖北",
    data: [
      "武汉",
      "黄石",
      "十堰",
      "宜昌",
      "襄阳",
      "鄂州",
      "荆门",
      "孝感",
      "荆州",
      "黄冈",
      "咸宁",
      "随州",
      "恩施土家族苗族自治州",
      "仙桃",
      "潜江",
      "天门",
      "神农架林"
    ]
  },
  {
    name: "湖南",
    data: [
      "长沙",
      "株洲",
      "湘潭",
      "衡阳",
      "邵阳",
      "岳阳",
      "常德",
      "张家界",
      "益阳",
      "郴州",
      "永州",
      "怀化",
      "娄底",
      "湘西土家族苗族自治州"
    ]
  },
  {
    name: "海南",
    data: [
      "海口",
      "三亚",
      "三沙",
      "儋州",
      "五指山",
      "琼海",
      "文昌",
      "万宁",
      "东方",
      "定安县",
      "屯昌县",
      "澄迈县",
      "临高县",
      "白沙黎族自治县",
      "昌江黎族自治县",
      "乐东黎族自治县",
      "陵水黎族自治县",
      "保亭黎族苗族自治县",
      "琼中黎族苗族自治县"
    ]
  }
];
var J = [
  {
    name: "吉林",
    id: "J",
    data: [
      "长春",
      "吉林",
      "四平",
      "辽源",
      "通化",
      "白山",
      "松原",
      "白城",
      "延边朝鲜族自治州"
    ]
  },
  {
    name: "江苏",
    data: [
      "南京",
      "无锡",
      "徐州",
      "常州",
      "苏州",
      "南通",
      "连云港",
      "淮安",
      "盐城",
      "扬州",
      "镇江",
      "泰州",
      "宿迁"
    ]
  },
  {
    name: "江西",
    data: [
      "南昌",
      "景德镇",
      "萍乡",
      "九江",
      "新余",
      "鹰潭",
      "赣州",
      "吉安",
      "宜春",
      "抚州",
      "上饶"
    ]
  }
];
var L = [
  {
    name: "辽宁",
    id: "L",
    data: [
      "沈阳",
      "大连",
      "鞍山",
      "抚顺",
      "本溪",
      "丹东",
      "锦州",
      "营口",
      "阜新",
      "辽阳",
      "盘锦",
      "铁岭",
      "朝阳",
      "葫芦岛"
    ]
  }
];
var N = [
  {
    name: "内蒙古",
    id: "N",
    data: [
      "呼和浩特",
      "包头",
      "乌海",
      "赤峰",
      "通辽",
      "鄂尔多斯",
      "呼伦贝尔",
      "巴彦淖尔",
      "乌兰察布",
      "兴安盟",
      "锡林郭勒盟",
      "阿拉善盟"
    ]
  },
  {
    name: "宁夏",
    data: [
      "银川",
      "石嘴山",
      "吴忠",
      "固原",
      "中卫"
    ]
  }
];
var Q = [
  {
    name: "青海",
    id: "Q",
    data: [
      "西宁",
      "海东",
      "海北藏族自治州",
      "黄南藏族自治州",
      "海南藏族自治州",
      "果洛藏族自治州",
      "玉树藏族自治州",
      "海西蒙古族藏族自治州"
    ]
  }
];
var S = [
  {
    name: "山西",
    id: "S",
    data: [
      "太原",
      "大同",
      "阳泉",
      "长治",
      "晋城",
      "朔州",
      "晋中",
      "运城",
      "忻州",
      "临汾",
      "吕梁"
    ]
  },
  {
    name: "上海",
    data: [
      "黄浦",
      "徐汇",
      "长宁",
      "静安",
      "普陀",
      "虹口",
      "杨浦",
      "闵行",
      "宝山",
      "嘉定",
      "浦东新",
      "金山",
      "松江",
      "青浦",
      "奉贤",
      "崇明"
    ]
  },
  {
    name: "山东",
    data: [
      "济南",
      "青岛",
      "淄博",
      "枣庄",
      "东营",
      "烟台",
      "潍坊",
      "济宁",
      "泰安",
      "威海",
      "日照",
      "临沂",
      "德州",
      "聊城",
      "滨州",
      "菏泽"
    ]
  },
  {
    name: "四川",
    data: [
      "成都",
      "自贡",
      "攀枝花",
      "泸州",
      "德阳",
      "绵阳",
      "广元",
      "遂宁",
      "内江",
      "乐山",
      "南充",
      "眉山",
      "宜宾",
      "广安",
      "达州",
      "雅安",
      "巴中",
      "资阳",
      "阿坝藏族羌族自治州",
      "甘孜藏族自治州",
      "凉山彝族自治州"
    ]
  },
  {
    name: "陕西",
    data: [
      "西安",
      "铜川",
      "宝鸡",
      "咸阳",
      "渭南",
      "延安",
      "汉中",
      "榆林",
      "安康",
      "商洛"
    ]
  }
];
var T = [
  {
    name: "天津",
    id: "T",
    data: [
      "和平",
      "河东",
      "河西",
      "南开",
      "河北",
      "红桥",
      "东丽",
      "西青",
      "津南",
      "北辰",
      "武清",
      "宝坻",
      "滨海新",
      "宁河",
      "静海",
      "蓟州"
    ]
  }
];
var X = [
  {
    name: "西藏",
    id: "X",
    data: [
      "拉萨",
      "日喀则",
      "昌都",
      "林芝",
      "山南",
      "那曲",
      "阿里地"
    ]
  },
  {
    name: "新疆",
    data: [
      "乌鲁木齐",
      "克拉玛依",
      "吐鲁番",
      "哈密",
      "昌吉回族自治州",
      "博尔塔拉蒙古自治州",
      "巴音郭楞蒙古自治州",
      "阿克苏地",
      "克孜勒苏柯尔克孜自治州",
      "喀什地",
      "和田地",
      "伊犁哈萨克自治州",
      "塔城地",
      "阿勒泰地",
      "石河子",
      "阿拉尔",
      "图木舒克",
      "五家渠",
      "北屯",
      "铁门关",
      "双河",
      "可克达拉",
      "昆玉",
      "胡杨河"
    ]
  }
];
var Y = [
  {
    name: "云南",
    id: "Y",
    data: [
      "昆明",
      "曲靖",
      "玉溪",
      "保山",
      "昭通",
      "丽江",
      "普洱",
      "临沧",
      "楚雄彝族自治州",
      "红河哈尼族彝族自治州",
      "文山壮族苗族自治州",
      "西双版纳傣族自治州",
      "大理白族自治州",
      "德宏傣族景颇族自治州",
      "怒江傈僳族自治州",
      "迪庆藏族自治州"
    ]
  }
];
var Z = [
  {
    name: "浙江",
    id: "Z",
    data: [
      "杭州",
      "宁波",
      "温州",
      "嘉兴",
      "湖州",
      "绍兴",
      "金华",
      "衢州",
      "舟山",
      "台州",
      "丽水"
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
  "直辖市": [
    {
      name: "直辖市",
      id: "直辖市",
      data: [
        "北京",
        "天津",
        "上海",
        "重庆"
      ]
    }
  ],
  "港澳": [
    {
      name: "港澳",
      id: "港澳",
      data: [
        "香港",
        "澳门"
      ]
    }
  ]
};
var _hoisted_1 = { class: "result" };
var _hoisted_2 = { class: "container" };
var _hoisted_3 = { class: "city" };
var _hoisted_4 = ["onClick"];
var _hoisted_5 = ["onClick"];
var _hoisted_6 = { class: "province" };
var _hoisted_7 = ["onClick"];
var _hoisted_8 = ["onClick"];
var _sfc_main$1 = defineComponent({
  emits: ["changeCity", "changeProvince"],
  setup(__props, { emit: emits }) {
    let result = ref("请选择");
    let visible = ref(false);
    let radioValue = ref("按城市");
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
        if (radioValue.value === "按城市") {
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
      if (radioValue.value === "按城市") {
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
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", null, toDisplayString(unref(result)), 1),
            createBaseVNode("div", null, [
              createVNode(_component_el_icon_arrowdown, {
                class: normalizeClass({ "rotate": unref(visible) })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
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
                        createVNode(_component_el_radio_button, { label: "按城市" }),
                        createVNode(_component_el_radio_button, { label: "按省份" })
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
                      placeholder: "请搜索城市",
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
            unref(radioValue) === "按城市" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_3, [
                createCommentVNode('  <div v-for="(value, key) in cities">{{key}}</div> '),
                createCommentVNode(" 字母区域 "),
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
                                createBaseVNode("div", null, toDisplayString(item.name), 1)
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
              createBaseVNode("div", _hoisted_6, [
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
                                    createBaseVNode("div", {
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
var chooseCity$1 = _export_sfc(_sfc_main$1, [["__scopeId", "data-v-29441af1"]]);
var chooseCity = {
  install(app) {
    app.component("n-choose-city", chooseCity$1);
  }
};
var _sfc_main = defineComponent({
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
var registerIcons = (app) => {
  for (let i in Icons) {
    app.component(`el-icon-${toLine(i)}`, Icons[i]);
  }
};
var components = [
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
var install = (app) => {
  app.use(registerIcons);
  components.map((item) => {
    app.use(item);
  });
};
var index = {
  install
};
export {
  chooseArea,
  chooseCity,
  chooseIcon,
  index as default,
  install,
  list,
  menu,
  modalForm,
  notification,
  progress,
  trend
};
//# sourceMappingURL=n-element-components.js.map
