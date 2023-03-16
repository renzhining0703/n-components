import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import vuejsx from "@vitejs/plugin-vue-jsx";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  // vite插件都是函数形式
  plugins: [vue(), vuejsx()],

  // 软链接
  resolve: {
    alias: [
      {
        // /@/xxxx  =>  src/xxx
        find: /^\/@\//,
        replacement: pathResolve("src") + "/",
      },
    ],
  },
  server: {
    port: 8888,
  },
});
