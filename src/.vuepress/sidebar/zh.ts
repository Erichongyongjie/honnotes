import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
	{
      icon: "page",
      text: "配置",
      prefix: "peizhi.md",
      link: "peizhi.md",
      children: "structure",
    },
	{
      icon: "",
	  text: "📑 站长日常",
      prefix: "richang/",
      collapsible: true,
      children: "structure",
    },
    
	{
      icon: "",
      text: "📄 站友吐槽",
      prefix: "tucao/",
      link: "tucao/",
      children: "structure",
    },
	{
    text: "📔 考试笔记",
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
	{
      icon: "",
	  text: "🏡 关于站点",
      prefix: "about/",
      collapsible: true,
      children: "structure",
    },

    "slides",
  ],
});
