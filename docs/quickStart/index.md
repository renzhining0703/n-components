## 快速开始

因为组件库是基于`element-plus`二次封装的, 所以在项目中必须确保已经安装和正确使用了`element-plus`, 如需了解`element-plus`请点击 [element-plus 使用指南](https://element-plus.gitee.io/zh-CN/guide/design.html)

## 使用指南

1. 在项目目录里安装`n-element-components`  
   npm 安装: `npm install -S n-element-components`  
   cnpm 安装: `cnpm install -S n-element-components`  
   yarn 安装: `yarn add -S n-element-components`
2. 全局引入  
   在`main.ts`当中写入以下代码:

```js
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import nUI from "n-element-components";
import "n-element-components/style.css";

import App from "./App.vue";

createApp(App).use(ElementPlus).use(nUI).mount("#app");
```

3. 按需引入

```js
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import chooseIcon from "n-element-components/chooseIcon";
import progress from "n-element-components/progress";
// ...
import "n-element-components/style.css";

import App from "./App.vue";

createApp(App).use(ElementPlus).use(chooseIcon).use(progress).mount("#app");
```

4. 使用  
   在需要的组件内参考具体的使用方式
