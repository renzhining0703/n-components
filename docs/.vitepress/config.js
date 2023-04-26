import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";
// 配置
module.exports = {
  // 部署的基础路径
  base: "/n-elements-components-web/",
  // 网站标题
  title: "enlighten-ui",
  // 配置网站的html的head标签
  head: [["link", { rel: "icon", href: "/default.png" }]],
  // 主题配置
  themeConfig: {
    darkMode: true,
    nav,
    sidebar,
  },
};
