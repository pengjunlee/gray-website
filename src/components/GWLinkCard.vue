<template>
  <div class="link-card-root">
    <div class="link-card" style="width:100%;">
      <div class="name" :style="`fontSize: ${tsize}px`">
        {{ title }}
      </div>
      <div class="link-items">
        <a :href="linkItem.url" target="_blank" class="el-card is-hover-shadow link-item" v-for="linkItem in items" :key="linkItem.url">
          <img :src="linkItem.logo" alt="Logo" class="img" />
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
import { ref, shallowRef, watch, onMounted, onActivated, provide, inject, nextTick } from "vue";
import type { CardLinkItem } from '@/types/gw.props';
import { toRefs } from "vue";

interface ItemProps {
  title?: String;
  tsize?: Number;
  items?: CardLinkItem[];
  isize?: Number;
}

const props = defineProps<ItemProps>();

const {title, tsize, items, isize } = toRefs(props);

</script>

<style scoped lang="scss">
.link-card-root {
  @include box(100%, 100%);
}
.link-items {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    @include box(100%, 100%);
    .link-item {
      height: 100px;
      padding: 10px;
      border: 1px solid var(--gw-border-color);
      border-radius: 5px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color:var(--gw-font-color);
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