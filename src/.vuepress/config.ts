import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Docs Hon",
      description: "A docs demo for vuepress-theme-hope",
    },
  },

  mdEnhancePlugin: {
      // 启用自定义容器
      container: true,
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
