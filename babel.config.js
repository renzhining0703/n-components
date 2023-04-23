module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "imooc-element-conponents",
        style: (name) => {
          return `${name}/style.css`;
        },
        camel2DashComponentName: false,
        camel2UnderlineComponentName: false,
      },
    ],
  ],
};
