<template>
  <div class="flex-container">
    <Header
      v-if="showHeader()"
      :tabs="tabs"
      :selectedTab.sync="selectedTab"
      @update:selectedTab="selectTab"
    />
    <router-view v-slot="{ Component }">
      <keep-alive :include="[includeRouter]">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <IndexFooter v-if="showFooter()"></IndexFooter>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import router from "@/router";
import { toRoute } from "@/router";
import IndexFooter from "./index/IndexFooter.vue";
import type { RouteRecordName } from "vue-router";
import Header from "../components/GWHeader.vue";
import type { Tab } from "@/types/gw.props";

const tabs = ref<Tab[]>([
  { icon: "home", name: "Home", title: "首页" },
  { icon: "blog", name: "Articles", title: "博文" },
  { icon: "location", name: "Links", title: "导航" },
  { icon: "location", name: "Library", title: "图库" },
]);
const selectedTab = ref("Home");

const includeRouter = ref<any>(["Home"]);
const curRoute = ref<RouteRecordName>("Home");

watch(
  () => router.currentRoute.value,
  (newRoute) => {
    if (newRoute.name) {
      curRoute.value = newRoute.name;
      selectedTab.value = newRoute.name.toString();
    }
    if (
      newRoute.meta.keepAlive &&
      includeRouter.value.indexOf(newRoute.name) === -1
    ) {
      includeRouter.value.push(newRoute.name);
    }
  },
  { immediate: true }
);
const hideHeaderArray = ["Login"];
const showHeader = () => {
  const currentRoute = router.currentRoute.value;
  if (
    currentRoute?.name &&
    hideHeaderArray.find((ele) => ele === currentRoute.name)
  ) {
    return false;
  }
  return true;
};

const hideFooterArray = ["Login", "Aticles", "Library"];
const showFooter = () => {
  const currentRoute = router.currentRoute.value;
  if (
    currentRoute?.name &&
    hideFooterArray.find((ele) => ele === currentRoute.name)
  ) {
    return false;
  }
  return true;
};

const selectTab = (name: string) => {
  selectedTab.value = name;
  toRoute(name);
};
</script>
<style scoped lang="scss">
.flex-container {
  @include box(100%, 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
</style>
