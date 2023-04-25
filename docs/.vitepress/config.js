// 配置
module.exports = {
  // 网站标题
  title: "enlighten-ui",
  // 部署的基础路径
  base: "/",
  // 配置网站的html的head标签
  head: [["link", { rel: "icon", href: "/default.png" }]],
  // 主题配置
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "github站点",
        link: "https://github.com/renzhining0703/n-components",
      },
      {
        text: "gitee站点",
        link: "https://github.com/renzhining0703/n-components",
      },
    ],
    sidebar: [
      {
        text: "介绍",
        link: "/intro/",
      },
      {
        text: "快速上手",
        link: "/quickStart/",
      },
      {
        text: "图标选择器",
        link: "/chooseIcon/",
      },
      {
        text: "进度条",
        link: "/progress/",
      },
      {
        text: "省市区选择器",
        link: "/chooseArea/",
      },
      {
        text: "城市选择",
        link: "/chooseCity/",
      },
      {
        text: "趋势标记",
        link: "/trend/",
      },
      {
        text: "通知",
        link: "/notification/",
      },
    ],
  },
};
