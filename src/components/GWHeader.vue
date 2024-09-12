<template>
  <div class="gw-header-root">
    <bl-row class="head-row" width="auto" height="100%">
      <div class="gw-logo" @click="toRoute('Home')">
        <img :src="logo()" :style="getThemeLogoStyle()" />
      </div>
      <div class="project-name" @click="toRoute('Home')">{{ sysName() }}</div>
    </bl-row>
    <bl-row class="head-row tabs" width="100%" height="100%">
      <div v-for="(tab, index) in tabs" :key="index" :class="['tab', selectedTab === tab.name ? 'active':'']"  @click="selectTab(index,tab.name)">
        <SvgIcon :size="18" :icon-class="tab.icon" />
        <span class="tab-text">{{ tab.title }}</span>
      </div>
    </bl-row>
    <bl-row class="head-row" width="auto" height="100%">
      <day-night-switch :size="60" v-model="isDark"></day-night-switch>
      <el-popover
        popper-class="popper-dark"
        placement="bottom-start"
        trigger="click"
        :show-arrow="false"
        :hide-after="0"
        :offset="-5"
        transition="el-zoom-in-top">
        <template #reference>
          <div v-show="userStore.auth && userStore.auth.status === '已登录'" class="popper-target icon-circle">
            <span class="iconbl bl-apps-line"></span>
          </div>
        </template>
        <div class="popper-content">
          <div class="item" @click="toRoute('/todo')"><span class="iconbl bl-a-labellist-line"></span>待办事项</div>
          <div class="item" @click="toRoute('/plan')"><span class="iconbl bl-calendar-line"></span>日历计划</div>
          <div class="item" @click="toRoute('/note')"><span class="iconbl bl-note-line"></span>便签</div>
          <div class="item-divider"></div>
          <div class="item" @click="toRoute('/collection')"><span class="iconbl bl-user-line"></span>管理后台</div>
        </div>
      </el-popover>
      <div class="iconbl-circle">
          <span  @click="handlLogout" v-if="userStore.auth && userStore.auth.status === '已登录'" class="iconbl bl-logout-circle-line popper-target"></span>
          <span v-else @click="toRoute('Login')" class="iconbl bl-login-circle-line popper-target"></span>
      </div>
    </bl-row>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { toRoute } from '@/router'
import { useUserStore } from '@/stores/user'
import { logout } from '@/utils/auth'
import { getSysName, getThemeLogoStyle } from '@/utils/env'
import { isNotBlank } from '@/utils/obj'
import DayNightSwitch from "@/components/DayNight.vue";
import {useDark} from "@vueuse/core";
import type { Tab } from '@/types/gw.props'

let isDark = useDark();

interface TabProps {
  tabs: Tab[];
  selectedTab: string;
}

const props = defineProps<TabProps>();

const {tabs , selectedTab} = toRefs(props);

const emit = defineEmits<{
  (event: 'update:selectedTab', value: string): void;
}>();

function selectTab(index: number, tab: string) {
  emit('update:selectedTab', tab);
}

const userStore = useUserStore()

const sysName = () => {
  if (userStore.userParams.WEB_LOGO_NAME) {
    return userStore.userParams.WEB_LOGO_NAME
  }
  return getSysName()
}

const logo = () => {
  if (userStore.userParams.WEB_LOGO_URL && isNotBlank(userStore.userParams.WEB_LOGO_URL)) {
    return userStore.userParams.WEB_LOGO_URL
  }
  return 'favicon.png'
}

const handlLogout = () => {
  logout();
  toRoute('Home')
}

</script>

<style lang="scss">
.gw-header-root {
  background-color: var(--gw-bg-color);
  border-bottom: var(--el-border);
  @include box(100%, 60px);
  @include flex(row, space-between, center);
  padding: 10px 10px;
  z-index: 2000;

  .head-row {
    line-height: 40px;
  }

  .gw-logo {
    @include box(40px, 40px);
    cursor: pointer;
    img {
      @include box(40px, 40px);
    }
  }

  .project-name {
    @include box(auto, 100%);
    margin-left: 10px;
    text-shadow: 3px 3px 5px var(--gw-bg-color);
    cursor: pointer;
    color: transparent;
    font-family: current, sans-serif;
    letter-spacing: 1px;
    background: linear-gradient(90deg, var(--gw-header-color), var(--gw-font-color), var(--gw-header-color));
    background-clip: text;
    animation: glow 10s linear infinite;
    transition: 1.5s;
    background-size: 300%;
    @keyframes glow {
      to {
        background-position: -300%;
      }
    }
  }
}

.tab-target {
  height: 100%;
  font-size: 20px;
  color: var(--gw-font-color);
  text-shadow: 3px 3px 5px var(--gw-bg-color);
  user-select: none;
  transition: color 0.3s;
  vertical-align: sub;
  &:hover {
    color: var(--gw-font-color);
  }
}

.popper-target {
  height: 100%;
  font-size: 15px;
  color: #909090;
  padding: 0 10px;
  text-shadow: 1px 1px 2px var(--gw-bg-color);
  user-select: none;
  transition: color 0.3s;

  &:hover {
    color: var(--gw-font-color);
  }

  .iconbl {
    font-size: 18px;
  }
}

.icon-circle:hover {
  border-radius: 50%;
  background-color: var(--gw-bg-active-color);
}

.item {
  @include flex(row, flex-start, center);
  padding: 0 10px;
  color: var(--bl-font-active-color);
  border-radius: 5px;
  transition: 0.3s;
  white-space: pre-line;
  cursor: pointer;

  .iconbl {
    font-size: 20px;
    margin-right: 10px;
  }

  &:hover {
    color: var(--gw-font-color);
    text-shadow: 3px 3px 5px var(--gw-font-color);
  }
}

.item-divider {
  border-top: 1px solid #5c5c5c;
  margin: 5px;
  width: calc(100% - 10px);
}

.gw-header-bg {
  box-shadow: 0 1px 8px 1px var(--gw-bg-color);
}

.head-row.tabs {
  margin: 0 80px;
}

.tab {
  font-family: QianTuXiaoTu;
  font-weight: 400;
  border-radius: 5px;
  padding: 3px 20px;
  margin: 0 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: var(--gw-bg-active-color);
  }
}

.tab.active {
  background: var(--gw-bg-active-color);
  color: var(--gw-font-color);
  font-weight: bold;
}
/* 在屏幕宽度小于 400px 时隐藏文字，只显示图标 */
@media (max-width: 900px) {
  .tab-text {
    display: none;
  }
}
</style>
