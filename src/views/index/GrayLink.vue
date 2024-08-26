<template>
  <div class="gray-link-root">
    
  <GWLinkCard v-for="(group, index) in linkGroups" :key="index" :title="group.name" :items="group.links"></GWLinkCard>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref, onMounted } from 'vue'
import type { CardLinkItem } from '@/types/gw.props';
import GWLinkCard from '@/components/GWLinkCard.vue'

const linkGroups = [
  {
    name:"工具",
    links: [
      {
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个一个搜索网站一个搜索网站搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个一个搜索网站搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个搜一个搜索网站一个搜索网站索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
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
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个一个搜索网站一个搜索网站搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个一个搜索网站搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },
      {
        title:"百度",
        desc:"一个搜一个搜索网站一个搜索网站索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
        url:"http://www.baidu.com"
      },{
        title:"百度",
        desc:"一个搜索网站",
        logo:"https://www.baidu.com/favicon.ico",
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
  background-color: var(--gw-bg-color);
  @include box(100%, 100%);
  @include flex(row, flex-start, flex-start);
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: scroll;
  padding: 10px 100px;
}

</style>
