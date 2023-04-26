import DefaultTheme from "vitepress/theme";

import "./style/md.scss";
import "./style/vitepress.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import nUI from "n-element-components";
import "n-element-components/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(nUI);
  },
};
