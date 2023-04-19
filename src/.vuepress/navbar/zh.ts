import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "配置", icon: "date", link: "/peizhi.md" },
  { text: "分享", icon: "discover", link: "/demo/" },
  {
    text: "笔记",
    icon: "note",
    prefix: "/note/",
    children: [
      {
        text: "公共基础",
        icon: "config",
        prefix: "gongji/",
        children: ["history", "falv", { text: "更新中", icon: "more", link: "guanli.md" }],
      },
    ],
   },
  {
    text: "读书",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "自我提升",
        icon: "creative",
        prefix: "self/",
        children: ["baz", "商业传记", "社会经济", "市场营销", "提升思维", "写作"],
      },
      {
        text: "社会人文",
        icon: "config",
        prefix: "shehui/",
        children: ["社会认知", "影响力", "自我认知", "大秦帝国", "zgdls", { text: "GPT-4论文", icon: "more", link: "https://ask.qcloudimg.com/draft/8642415/na64oeidz2.pdf" }],
      },
    ],
   },
  {
    text: "藏阁",
    icon: "list",
    link: "",
	children: [{ text: "藏词阁", icon: "article", link: "/cang/cangci.md" }, { text: "藏句阁", icon: "article", link: "/cang/cangju.md" }, { text: "藏诗阁", icon: "article", link: "/cang/cangshi.md" }],
  },
  { text: "关于", icon: "info", link: "/about/" },
  {
    text: "工具",
    icon: "config",
    link: "",
	children: [{ text: "导航", icon: "more", link: "http://dh.hon.ink" }, { text: "早报", icon: "more", link: "http://news.icodeq.com" }, { text: "一文", icon: "more", link: "https://meiriyiwen.com/" }],
  },
]);
