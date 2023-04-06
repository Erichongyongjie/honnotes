import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "仪式", icon: "date", link: "/yishi/" },
  { text: "说说", icon: "page", link: "/shuoshuo/" },
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
  { text: "关于", icon: "discover", link: "/about/" },
  {
    text: "工具",
    icon: "note",
    link: "http://dh.hon.ink",
  },
]);