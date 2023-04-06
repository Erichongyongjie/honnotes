import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "",
      text: "📑 仪式",
      prefix: "yishi/",
      link: "yishi/",
      children: "structure",
    },
	{
      icon: "",
      text: "📄 说说",
      prefix: "shuoshuo/",
      link: "shuoshuo/",
      children: "structure",
    },
	{
    text: "📔 个人笔记",
    icon: "",
    prefix: "note/",
    link: "note/README.md",
    collapsible: true,
    children: [
       {
        text: "公共基础",
        icon: "load",
        prefix: "gongji/",
        link: "",
        collapsible: true,
        children: "structure",
       },
      ],
    },
	{
      icon: "",
      text: "🔘 好物分享",
      prefix: "demo/",
	  collapsible: true,
      link: "demo/",
      children: "structure",
    },
    {
      text: "📰 读书心得",
      icon: "",
      prefix: "guide/",
	  collapsible: true,
	  link: "guide/",
      children: "structure",
    },
	
	{
      icon: "",
	  text: "🌗 生活记录",
      prefix: "shenghuo/",
      collapsible: true,
      children: "structure",
    },

    "slides",
  ],
});
