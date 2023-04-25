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
