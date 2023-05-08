import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { wrapperEnv } from "./build/getEnv";
import { createProxy } from "./build/proxy";
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
    base: viteEnv.VITE_PUBLIC_PATH,
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
      cors: true,
      // proxy: {
      //   '/api': {
      //     target: 'https://mock.mengxuegu.com/mock/6458e9d67ba95d67784d5fc3', //目标url
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""), 
      //   }
      // }
      proxy: createProxy(viteEnv.VITE_PROXY)
    },
  }
})
