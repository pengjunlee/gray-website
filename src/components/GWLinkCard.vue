<template>
  <div class="link-card-root">
    <div class="link-card" style="width: 100%">
      <div class="name" :style="{ fontSize: tsize + 'px' }">
        {{ title }}
      </div>
      <div class="link-items">
        <a
          :href="linkItem.url"
          target="_blank"
          class="el-card is-hover-shadow link-item"
          v-for="linkItem in items"
          :key="linkItem.url"
        >
          <img
            v-if="linkItem.logo.startsWith('http')"
            :src="linkItem.logo"
            alt="Logo"
            class="img"
          />
          <img v-else :src="`/icons/${linkItem.logo}`" alt="Logo" class="img" />
          <div class="link-text">
            <div class="nowrap link-title">{{ linkItem.title }}</div>
            <div class="nowrap" style="font-size: 14px">
              {{ linkItem.desc }}
            </div>
            <span class="tooltip-text">{{ linkItem.desc }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardLinkItem } from "@/types/gw.props";
import { toRefs } from "vue";

interface ItemProps {
  title?: String;
  tsize?: number;
  items?: CardLinkItem[];
  isize?: Number;
}

const props = defineProps<ItemProps>();

const { title, tsize, items } = toRefs(props);
</script>

<style scoped lang="scss">
.link-card-root {
  width: 100%;
  margin-bottom: 20px;
}
.link-items {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @include box(100%, 100%);
  .link-item {
    height: 100px;
    padding: 10px;
    border: 1px solid var(--gw-font-color-1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--gw-font-color);
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
      font-size: 14px;
      max-width: 150px;
    }
  }
  .link-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    scale: 1.05;
  }
}
.nowrap {
  width: 150px;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  white-space-collapse: collapse;
  overflow: hidden;
}

.name {
  margin: 15px 0;
  font-family: BaoTuXiaoBai;
}
.link-title {
  font-family: ChillDuanSans_Black;
  font-weight: 400;
}

.tooltip-text {
  visibility: hidden; /* 初始隐藏 */
  background-color: var(--gw-bg-active-color);
  color: var(--gw-font-color);
  text-align: center;
  border-radius: 5px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  bottom: 0; /* 位于目标元素的上方 */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0; /* 设置为透明 */
  transition: opacity 0.3s; /* 添加动画过渡效果 */
}

.link-text:hover .tooltip-text {
  visibility: visible; /* 当悬停时显示 */
  opacity: 1; /* 设置为不透明 */
}

</style>
