import { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import notification from "./notification";
import list from "./list";
import menu from "./menu";
import progress from "./progress";
import chooseCity from "./chooseCity";
import modalForm from "./modalForm";

import * as Icons from "@element-plus/icons";
import { toLine } from "./utils";

/** 注册全部Icon组件 el-icon-xxx */
const registerIcons = (app) => {
  for (let i in Icons) {
    app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
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
  modalForm,
];

const install = (app: App) => {
  app.use(registerIcons);
  components.map((item) => {
    app.use(item);
  });
};

export {
  install,
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  chooseCity,
  progress,
  modalForm,
};

export default {
  install,
};
