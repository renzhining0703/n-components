import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { wrapperEnv } from "./build/getEnv";
import vuejsx from "@vitejs/plugin-vue-jsx";
// import { createProxy } from "./build/proxy.ts";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  return {
    plugins: [vue(), vuejsx()],
    root,
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
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      proxy: {
        '/api': {
          target: viteEnv.VITE_PROXY, //目标url
          changeOrigin: true, //支持跨域
          // rewrite: (path) => path.replace(/^\/api/, ""), 
            //重写路径,替换/api
        }
      }
    },
  }
})
