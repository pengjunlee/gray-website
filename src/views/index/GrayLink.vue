<template>
  <div class="gray-link-root">
    <div class="link-group" style="width:100%;" v-for="linkGroup in linkGroups" :key="linkGroup.name">
      <div class="name" :style="{ fontSize: getFontSize(linkGroup.name) }">
        {{ linkGroup.name }}
      </div>
      <div class="link-items">
        <a :href="linkItem.url" target="_blank" class="el-card is-hover-shadow link-item" v-for="linkItem in linkGroup.links" :key="linkItem.url">
          <img :src="linkItem.img" alt="Logo" class="img" />
          <div class="link-text">
            <div class="nowrap link-title">{{ linkItem.title }}</div>
            <div class="nowrap" style="font-size: 12px;">{{ linkItem.desc }}</div>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref, onMounted } from 'vue'

const linkGroups = [
  {
    name:"工具",
    links:[
      {
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个一个搜索网站一个搜索网站搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个一个搜索网站搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个搜一个搜索网站一个搜索网站索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      }
    ]
  },
  {
    name:"AI",
    links:[
      {
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个一个搜索网站一个搜索网站搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个一个搜索网站搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个搜一个搜索网站一个搜索网站索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        img:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      }
    ]
  }
];

onMounted(() => {
  
})

const links = ref<any>([])

const getFontSize = (name: string) => {
  if (name.length >= 18) {
    return '18px'
  }
  return '20px'
}

const toToc = (articleId: number) => {
  router.push({ path: '/articles', query: { articleId: articleId } })
}
</script>

<style scoped lang="scss">
.gray-link-root {
  background-color: var(--bl-bg-color);
  @include box(100%, 100%);
  @include flex(row, flex-start, flex-start);
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: scroll;
  padding: 10px 100px;

  .link-items {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    @include box(100%, 100%);
    .link-item {
      height: 100px;
      padding: 10px;
      border: 1px solid var(--bl-border-color);
      border-radius: 5px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color:var(--bl-font-color);
      .img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      display: inline-block;
     }
     .link-text {
      font-family: ChillDuanSans_Light;
      display: flex;
      padding-left: 10px;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
      max-width: 60px;
     }
    }
    .link-item:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      scale: 1.05;
    }
  }
}
.nowrap {
  width: 80px;
  text-overflow:ellipsis;
  text-wrap:nowrap;
  white-space-collapse:collapse;
  overflow: hidden;
}

.name {
  margin:15px 0;
  font-family: BaoTuXiaoBai;
  font-weight:400;
  ::after {
    content: "";
    background-color: aqua;
    height: 30px;
    width: 40px;
  }
}
.link-title {
  font-family: ChillDuanSans_Black;
  font-weight:400;
}
</style>
