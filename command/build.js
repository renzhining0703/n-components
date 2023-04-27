const path = require("path");
const fsExtra = require("fs-extra");
const fs = require("fs");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");

/** 配置 打包入口文件 */
const entryDir = path.resolve(__dirname, "../libs");
/** 配置 出口文件夹 */
const outputDir = path.resolve(__dirname, "../n-ui");
/** 打包完成需要删除的文件夹 */
// const removeDir = path.join(__dirname, "../n-ui/utils");

/** vite基础配置 */
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

/**
 * rollup 配置
 * viet 是基于 rollup 打包的
 * 所以这里也需要配置 rollup
 */
const rollupOptions = {
  // 打包时排除 "vue", "vue-router"
  external: ["vue", "vue-router"],
  // 应用到全局的vue
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

/** 全量打包构建 */
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, "index.ts"),
          name: "n-element-components",
          fileName: "index",
          formats: ["es", "umd"],
        },
        outDir: outputDir,
      },
    })
  );
};

/** 构建单组件 */
const buildSingle = async (name) => {
  if (name === "utils") return;
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"],
        },
        outDir: path.resolve(outputDir, name),
      },
    })
  );
};

// 生成 n-ui下 每一个组件的 package.json 文件
const createItemPackageJson = (name) => {
  if (name === "utils") return;
  const fileStr = `{
  "name": "${name}",
  "version": "0.0.0",
  "main": "index.umd.js",
  "module": "index.es.js",
  "style": "style.css"
}`;
  fsExtra.outputFile(
    path.resolve(outputDir, `${name}/package.json`),
    fileStr,
    "utf-8"
  );
};

/** 生成n-ui文件夹内的 package.json 文件 */
const createPackageJson = () => {
  const fileStr = `{
    "name": "n-element-components",
    "version": "1.0.7",
    "main": "index.umd.js",
    "module": "index.es.js",
    "types": "index.d.ts",
    "author": {
      "name": "Rzn"
    },
    "keywords": [
      "element-puls",
      "Rzn",
      "封装组件",
      "vue-components"
    ]
  }`;
  fsExtra.outputFile(path.resolve(outputDir, `package.json`), fileStr, "utf-8");
};

/** 生成n-ui文件夹内的 index.d.ts 文件 */
const createIndexdts = () => {
  const fileStr = `
  import { App } from "vue";

  declare const _default: {
    install(app: App): void;
  };
  
  export default _default;`;
  fsExtra.outputFile(path.resolve(outputDir, `index.d.ts`), fileStr, "utf-8");
};

/** 生成n-ui文件夹内 所有文件的 index.d.ts 文件 */
const createItemIndexdts = (name) => {
  if (name === "utils") return;
  const fileStr = `
  import { App } from "vue";

  declare const _default: {
    install(app: App): void;
  };
  
  export default _default;`;
  fsExtra.outputFile(
    path.resolve(outputDir, `${name}/index.d.ts`),
    fileStr,
    "utf-8"
  );
};

/** 打包出每一个单组件 */
const buildSingleItem = async () => {
  // 获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });
  // 循环构建每一个组件
  for (const name of components) {
    // 构建单组件
    await buildSingle(name);
    // 生成组件的 package.json 文件
    createItemPackageJson(name);
    // 生成组件的 index.d.ts 文件
    createItemIndexdts(name);
  }
};

/** 打包 */
const buildLib = async () => {
  await buildAll();
  createPackageJson();
  createIndexdts();
  buildSingleItem();
};

/** 执行buildLib */
buildLib();
