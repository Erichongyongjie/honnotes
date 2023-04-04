import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "",
      text: "📑仪式",
      prefix: "yishi/",
      link: "yishi/",
      children: "structure",
    },
	{
      icon: "",
      text: "📄说说",
      prefix: "shuoshuo/",
      link: "shuoshuo/",
      children: "structure",
    },
	{
      icon: "discover",
      text: "分享",
      prefix: "demo/",
	  collapsible: true,
      link: "demo/",
      children: "structure",
    },
    {
      text: "读书笔记",
      icon: "note",
      prefix: "guide/",
	  collapsible: true,
      children: "structure",
    },
	{
      icon: "",
	  text: "🌗生活记录",
      prefix: "shenghuo/",
      collapsible: true,
      children: "structure",
    },

    "slides",
  ],
});