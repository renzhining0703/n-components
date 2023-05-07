import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { globalRegister } from './global'

import I18n from "/@/languages/index";

import "/@/styles/reset.scss";
import "/@/styles/common.scss";
import "/@/assets/iconfont/iconfont.scss";
import "/@/assets/fonts/font.scss";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "/@/styles/theme/element-dark.scss";
import "/@/styles/element.scss";
// svg icons
// import "virtual:svg-icons-register";

import * as Icons from "@element-plus/icons-vue";

// import nUI from '../libs'
import nUI from '../src/components'


/** 引入全量打包的文件 使用测试 */
// import nUI from '../n-ui/index.es.js'
// import '../n-ui/style.css'

/** 单独引入组件 使用测试 */
// import chooseIcon from '../n-ui/chooseIcon/index.es.js'
// import '../n-ui/chooseIcon/style.css'gGA4D#

const app = createApp(App)

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
  });

app.use(globalRegister)
app.use(router)
app.use(I18n)
// app.use(chooseIcon)
app.use(nUI)


app.mount('#app', true)
