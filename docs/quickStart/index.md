## 快速开始

因为组件库是基于`element-plus`二次封装的, 所以在项目中必须确保已经安装和正确使用了`element-plus`, 如需了解`element-plus`请点击 [element-plus 使用指南](https://element-plus.gitee.io/zh-CN/guide/design.html)

## pnpm

使用快速的，节省磁盘空间的包管理工具 [pnpm](https://pnpm.io/zh/) 进行安装

```shell
pnpm add n-element-components
```

## npm

使用 `npm` 进行安装

```shell
npm install n-element-components
```

全局安装

```shell
npm install n-element-components --save
```

## yarn

或者使用 `yarn` 进行安装

```shell
yarn add n-element-components
```

## 全局引入

```js
// main.ts

import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import nUI from "n-element-components";
import "n-element-components/style.css";

import App from "./App.vue";

createApp(App).use(ElementPlus).use(nUI).mount("#app");
```

## 按需引入

```js
// main.ts

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
