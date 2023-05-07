import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import vuejsx from "@vitejs/plugin-vue-jsx";
// import { createProxy } from "./build/proxy.ts";

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
    proxy: {
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/', //目标url
        changeOrigin: true, //支持跨域
        // rewrite: (path) => path.replace(/^\/api/, ""), 
          //重写路径,替换/api
      }
    }
  },
});
