<template>
  <div class="gray-link-root">
    <GWLinkCard
      v-for="(group, index) in filteredLinks"
      :tsize="getFontSize(group.name)"
      :key="index"
      :title="group.name"
      :items="group.links"
    ></GWLinkCard>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import GWLinkCard from "@/components/GWLinkCard.vue";

const linkGroups = [
  {
    name: "个人项目",
    links: [
      {
        title: "个人工作站",
        desc: "类终端风格的工作站",
        logo: "favicon.png",
        url: "https:/graython.us.kg",
      },
      {
        title: "",
        desc: "",
        logo: "",
        url: "",
      },
    ],
  },
  {
    name: "工具",
    links: [
      {
        title: "Photopea",
        desc: "在线PS",
        logo: "https://www.photopea.com/promo/icon512.png",
        url: "https://www.photopea.com/",
      },
      {
        title: "waifu2x",
        desc: "图像放大",
        logo: "https://unlimited.waifu2x.net/favicon.ico",
        url: "https://unlimited.waifu2x.net/",
      },
      {
        title: "Image Upscaler",
        desc: "圖像重塑放大器",
        logo: "https://imgupscaler.com/favicon.ico",
        url: "https://imgupscaler.com/zh-tw",
      },
      {
        title: "Rcraft",
        desc: "生成图标",
        logo: "https://app.recraft.ai/favicons/favicon.ico",
        url: "https://app.recraft.ai/",
      },
      {
        title: "Dzine",
        desc: "图片处理",
        logo: "https://static.dzine.ai/dark-favicon-d.ico",
        url: "https://www.dzine.ai",
      },
      {
        title: "Greasyfork",
        desc: "篡改猴脚本下载",
        logo: "https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png",
        url: "https://greasyfork.org/zh-TW",
      },
      {
        title: "SaveTube",
        desc: "YouTube资源下载",
        logo: "https://ytshorts.savetube.me/favicon.ico",
        url: "https://ytshorts.savetube.me/2hsgth",
      },
      {
        title: "JiJiDown",
        desc: "哔哩哔哩视频下载",
        logo: "https://www.jijidown.com/static/favicon.ico",
        url: "https://www.jijidown.com/",
      },
      {
        title: "贝贝工具站",
        desc: "视频下载",
        logo: "https://xbeibeix.com/favicon.ico",
        url: "https://xbeibeix.com/",
      },
      {
        title: "Snapany",
        desc: "图片视频解析下载",
        logo: "https://snapany.com/favicon.ico",
        url: "https://snapany.com/zh",
      },{
        title: "ILoveImg",
        desc: "图片工具箱",
        logo: "https://www.iloveimg.com/img/favicons-img/favicon-16x16.png",
        url: "https://www.iloveimg.com/",
      },{
        title: "ILovePdf",
        desc: "PDF工具箱",
        logo: "https://www.ilovepdf.com/img/favicons-pdf/favicon-32x32.png",
        url: "https://www.ilovepdf.com/",
      },{
        title: "网易见外工作台",
        desc: "网易见外工作台",
        logo: "https://jianwai.youdao.com/favicon.ico",
        url: "https://jianwai.youdao.com/",
      },{
        title: "AllToAll",
        desc: "PDF转Word",
        logo: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
        url: "https://www.alltoall.net/",
      },{
        title: "Aconvert",
        desc: "格式转换",
        logo: "https://www.aconvert.com/favicon.ico",
        url: "https://www.aconvert.com/cn/",
      },{
        title: "MP3Cut",
        desc: "音频工具箱",
        logo: "https://mp3cut.net/static/i/v3/favicon.svg",
        url: "https://mp3cut.net/cn/",
      },{
        title: "CodeEase",
        desc: "编码工具箱",
        logo: "https://codeease.top/tools/favicon-32x32.png",
        url: "https://codeease.top/tools/",
      },{
        title: "Femoon",
        desc: "文本转语音",
        logo: "https://tts.femoon.top/favicon-32x32.png",
        url: "https://tts.femoon.top/cn",
      },{
        title: "",
        desc: "",
        logo: "",
        url: "",
      },{
        title: "",
        desc: "",
        logo: "",
        url: "",
      },{
        title: "",
        desc: "",
        logo: "",
        url: "",
      },{
        title: "",
        desc: "",
        logo: "",
        url: "",
      },
    ],
  },
  {
    name: "AI",
    links: [
      {
        title: "Discord",
        desc: "群聊",
        logo: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/62fddf0fde45a8baedcc7ee5_847541504914fd33810e70a0ea73177e%20(2)-1.png",
        url: "https://discord.com/",
      },
      {
        title: "ChatGPT",
        desc: "问答",
        logo: "chatgpt.svg",
        url: "https://chatgpt.com/",
      },
      {
        title: "Ideogram",
        desc: "AI绘图",
        logo: "ideogram.svg",
        url: "https://ideogram.ai",
      },
      {
        title: "Flux",
        desc: "AI绘图+工具箱",
        logo: "https://flux-ai.io/images/logo.png",
        url: "https://flux-ai.io",
      },
      {
        title: "Luma",
        desc: "AI绘图",
        logo: "https://cdn-luma.com/public/captures.lumalabs.ai/images/logo.svg",
        url: "https://lumalabs.ai/",
      },
      {
        title: "Morph Studio",
        desc: "AI绘图+工具箱",
        logo: "https://app.morphstudio.com/icon.svg",
        url: "https://app.morphstudio.com/library",
      },
      {
        title: "ToonCrafter",
        desc: "图生动画",
        logo: "tooncrafter.svg",
        url: "https://replicate.com/fofr/tooncrafter",
      },
      {
        title: "Playground",
        desc: "生图",
        logo: "https://cdn.playground.com/logo/logo-icon-v1.png",
        url: "https://playground.com/",
      },
      {
        title: "PromeAI",
        desc: "AI绘图+工具箱",
        logo: "https://www.promeai.pro/favicon.ico",
        url: "https://www.promeai.pro/zh-CN",
      },
      {
        title: "HaiperAI",
        desc: "生图+生视频",
        logo: "https://haiper.ai/favicon.png",
        url: "https://haiper.ai/",
      },
      {
        title: "SUNO",
        desc: "生成音频",
        logo: "https://suno.com/favicon.ico",
        url: "https://suno.com/",
      },
      {
        title: "LibLibAI",
        desc: "生图",
        logo: "https://liblibai-web-static.liblib.cloud/favicon_v2.png",
        url: "https://www.liblib.art/",
      },
      {
        title: "VivagoAI",
        desc: "生图",
        logo: "https://vivago.ai/favicon.png",
        url: "https://vivago.ai/explore",
      },
      {
        title: "艺映",
        desc: "生图+生视频",
        logo: "https://cdn.mewx.art/images/static/logo/artink-ai-logo-400.png",
        url: "https://app.artink.art/mx-video",
      },
    ],
  },
  {
    name: "资源",
    links: [
      {
        title: "爱给网",
        desc: "音频+视频+免抠",
        logo: "https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico",
        url: "https://www.aigei.com/",
      },
      {
        title: "Instagram",
        desc: "图片+视频",
        logo: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico",
        url: "https://www.instagram.com/explore/",
      },
      {
        title: "Pexels",
        desc: "图片+视频",
        logo: "https://www.pexels.com/assets/static/images/meta/favicon.ico",
        url: "https://www.pexels.com/videos/",
      },
      {
        title: "Mixkit",
        desc: "音效+视频",
        logo: "https://assets.mixkit.co/build/favicons/favicon-96x96-b47a57aea9303a5f92e644e78aa343575b21f12b38d469be00fdc5acd983684d.png",
        url: "https://mixkit.co/",
      },
      {
        title: "Freesound",
        desc: "无版权音乐库",
        logo: "https://www.freesound.cn/favicon.ico",
        url: "https://www.freesound.cn/",
      },
      {
        title: "Musopen",
        desc: "无版权音乐",
        logo: "https://s.musopen.org/static/icons/icon192.5b0c6cf166c7.png",
        url: "https://musopen.org/",
      },
      {
        title: "Soundgator",
        desc: "音效",
        logo: "https://www.soundgator.com/assets/favicon.ico",
        url: "https://www.soundgator.com/",
      },
      {
        title: "Pixabay",
        desc: "图片+视频+音乐",
        logo: "https://pixabay.com/android-chrome-192x192.png",
        url: "https://pixabay.com/",
      },
      {
        title: "Stickpng",
        desc: "图片",
        logo: "https://www.stickpng.com/favicon.ico",
        url: "https://www.stickpng.com/",
      },
      {
        title: "免抠素材网",
        desc: "免抠素材",
        logo: "https://www.miankousucai.com/view/img/favicon.ico",
        url: "https://www.miankousucai.com/",
      },
      {
        title: "CleanPNG",
        desc: "免抠素材",
        logo: "https://www.cleanpng.com/favicon.ico",
        url: "https://www.cleanpng.com/",
      },
      {
        title: "PNGdirs",
        desc: "免抠素材",
        logo: "https://www.pngdirs.com/favicon.ico",
        url: "https://www.pngdirs.com/",
      },
      {
        title: "PNGhero",
        desc: "免抠素材",
        logo: "https://pnghero.com/img/pnghero/icons/favicon-96x96.png",
        url: "https://pnghero.com/",
      },
      {
        title: "PngImg",
        desc: "免抠素材",
        logo: "https://pngimg.com/favicon.ico",
        url: "https://pngimg.com/",
      },
      {
        title: "PNG派",
        desc: "免抠素材",
        logo: "https://pngpai.com/static/img/favicon.ico",
        url: "https://pngpai.com/",
      },
      {
        title: "Pure PNG",
        desc: "免抠素材",
        logo: "https://purepng.com/public/img/favicon.png",
        url: "https://purepng.com/",
      },
      {
        title: "Reshot",
        desc: "图标+插图",
        logo: "https://www.reshot.com/build/favicons/favicon-eacea34ccb8df4229e741aab6a417f80c44e9c904a6885b746f602af7cd3d0ac.png",
        url: "https://www.reshot.com/",
      },
      {
        title: "免抠图片网",
        desc: "免抠素材",
        logo: "https://assets.soutushenqi.com/common/mktp_logo.ico",
        url: "https://miankoutupian.com/",
      },
      {
        title: "Mazwai",
        desc: "视频",
        logo: "https://mazwai.com/assets/images/favicon-32x32.png",
        url: "https://mazwai.com/",
      },
      {
        title: "Videezy",
        desc: "视频",
        logo: "https://www.videezy.com/favicon.ico",
        url: "https://www.videezy.com/",
      },
      {
        title: "Videvo",
        desc: "视频",
        logo: "https://www.videvo.net/favicon.ico",
        url: "https://www.videvo.net/",
      },
      {
        title: "Bensound",
        desc: "音频",
        logo: "https://www.bensound.com/favicon.png",
        url: "https://www.bensound.com/",
      },
      {
        title: "字体天下",
        desc: "字体",
        logo: "https://www.fonts.net.cn/favicon.ico",
        url: "https://www.fonts.net.cn/",
      },
      {
        title: "Wallhaven",
        desc: "壁纸",
        logo: "https://wallhaven.cc/favicon.ico",
        url: "https://wallhaven.cc/",
      },
      {
        title: "Logosc",
        desc: "无版权图片搜索",
        logo: "https://www.logosc.cn/img/so/search_logo.png",
        url: "https://www.logosc.cn/so/",
      },
      {
        title: "觅元素",
        desc: "免抠素材",
        logo: "https://www.51yuansu.com/favicon.ico",
        url: "https://www.51yuansu.com/",
      },
      {
        title: "彼岸图网",
        desc: "4K图片",
        logo: "https://pic.netbian.com/favicon.ico",
        url: "https://pic.netbian.com/",
      },
      {
        title: "极简壁纸",
        desc: "壁纸",
        logo: "https://bz.zzzmh.cn/img/icons/favicon-192x192.png",
        url: "https://bz.zzzmh.cn/index",
      },
      {
        title: "猫啃网",
        desc: "字体",
        logo: "maoken.ico",
        url: "https://www.maoken.com/",
      },
      {
        title: "淘声网",
        desc: "音频",
        logo: "https://www.tosound.com/favicon.ico",
        url: "https://www.tosound.com/",
      },
      {
        title: "耳聆网",
        desc: "音频",
        logo: "https://www.ear0.com/public/images/favicon.ico",
        url: "https://www.ear0.com/",
      },
      {
        title: "Ignitemotion",
        desc: "视频背景",
        logo: "https://www.ignitemotion.com/wp-includes/images/w-logo-blue-white-bg.png",
        url: "https://www.ignitemotion.com/",
      },
      {
        title: "找字体",
        desc: "字体",
        logo: "https://zfont.cn/favicon.ico",
        url: "https://zfont.cn/s/",
      },
      {
        title: "100font",
        desc: "字体",
        logo: "https://www.100font.com/view/img/favicon.ico",
        url: "https://www.100font.com/",
      },
      {
        title: "站长字体",
        desc: "字体",
        logo: "https://font.chinaz.com/favicon.ico",
        url: "https://font.chinaz.com/",
      },
      {
        title: "盘多多",
        desc: "网盘资源搜索",
        logo: "https://www.pan131.com/favicon.ico",
        url: "http://www.panduoduo.top/",
      },{
        title: "0daydown",
        desc: "软件下载",
        logo: "https://www.0daydown.com/wp-content/themes/m4a1/img/logo.png",
        url: "https://www.0daydown.com/",
      },{
        title: "",
        desc: "",
        logo: "",
        url: "",
      },{
        title: "",
        desc: "",
        logo: "",
        url: "",
      },{
        title: "",
        desc: "",
        logo: "",
        url: "",
      },{
        title: "",
        desc: "",
        logo: "",
        url: "",
      },
    ],
  },
  {
    name: "娱乐",
    links: [
      {
        title: "谷歌地图",
        desc: "Google Earth Studio",
        logo: "https://www.gstatic.com/earth/00-favicon.ico",
        url: "https://www.google.com/earth/studio/",
      },
      {
        title: "Yikm",
        desc: "童年小游戏",
        logo: "https://www.yikm.net/f.png",
        url: "https://www.yikm.net/",
      },      {
        title: "QQ音速网",
        desc: "免费听歌",
        logo: "https://www.qqyin.com/favicon.ico",
        url: "https://www.qqyin.com/index.php?player-index",
      },      {
        title: "LiuMingYe",
        desc: "免费听歌",
        logo: "https://tools.liumingye.cn/music/img/pwa-192x192.png",
        url: "https://tools.liumingye.cn/music/#/",
      },      {
        title: "百乐米",
        desc: "免费听歌",
        logo: "https://bailemi.com/favicon.ico",
        url: "https://bailemi.com/",
      },      {
        title: "",
        desc: "",
        logo: "",
        url: "",
      },      {
        title: "",
        desc: "",
        logo: "",
        url: "",
      },
    ],
  },{
    name: "MacBook",
    links: [
      {
        title: "Mac软件之家",
        desc: "Mac软件之家",
        logo: "https://macapp.so/img/mac.png",
        url: "https://macapp.so/",
      },      {
        title: "MacBL",
        desc: "马可波罗",
        logo: "https://static.skyandroid.cn/images/favicon.ico",
        url: "https://www.macbl.com/",
      }, {
        title: "Xclient",
        desc: "Mac精品应用",
        logo: "https://img.xclient.info/icon/favicon.ico",
        url: "https://xclient.info/",
      }, {
        title: "",
        desc: "",
        logo: "",
        url: "",
      },
    ],
  },
];

// 使用 computed 属性来计算过滤后的列表
const filteredLinks = linkGroups.map(group => {
  return {
    ...group,
    links: group.links.filter(link => link.title.trim() !== ""),
  };
});

const getFontSize = (name: string) => {
  if (name.length >= 10) {
    return 18;
  }
  return 24;
};
</script>

<style scoped lang="scss">
.gray-link-root {
  background-color: var(--gw-bg-color);
  @include box(100%, 100%);
  @include flex(row, flex-start, flex-start);
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: scroll;
  padding: 20px;
}
</style>
