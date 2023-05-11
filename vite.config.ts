import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { wrapperEnv } from "./build/getEnv";
import { createProxy } from "./build/proxy";
import vuejsx from "@vitejs/plugin-vue-jsx";

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
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      proxy: createProxy(viteEnv.VITE_PROXY)
    },
  }
})
