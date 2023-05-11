import { App } from "vue";
import button from "./button";
import timeButton from "./time-button";
import chooseIcon from "./chooseIcon";
import menu from "./menu";
import progress from "./progress";
import SearchForm from "./SearchForm";
import ProTable from "./ProTable";
import NDateTimePicker from './DateTimePicker'

const components = [
  button,
  timeButton,
  chooseIcon,
  menu,
  progress,
  ProTable,
  SearchForm,
  NDateTimePicker
];

const install = (app: App) => {
  components.map((item) => {
    app.use(item);
  });
};

export {
  install,
  button,
  timeButton,
  chooseIcon,
  menu,
  progress,
  ProTable,
  SearchForm,
  NDateTimePicker
};

export default {
  install,
};

// import { defineAsyncComponent, App } from 'vue'
// import { camelCaseToHyphen } from '@/utils/index'

// export default {
//   install(app: App): void {
//     // 获取当前路径任意文件夹下的 index.vue 文件
//     let components = import.meta.glob('./*/src/index.vue')
//     const tsx = import.meta.glob('./*/src/index.tsx')
//     components = { ...components, ...tsx }
//     // 遍历获取到的组件模块
//     for (const [key, value] of Object.entries(components)) {
//       // 拼接组件注册的 name
//       const componentName = 'n-' + camelCaseToHyphen(key.replace('./', '').split('/')[0])
//       // 通过 defineAsyncComponent 异步导入指定路径下的组件
//       app.component(componentName, defineAsyncComponent(value))
//     }
//   }
// }
