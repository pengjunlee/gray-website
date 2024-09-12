<template>
  <div class="gw-header-root">
    <bl-row class="head-row" width="auto" height="100%">
      <div class="gw-logo" @click="toRoute('/home')">
        <img :src="logo()" :style="getThemeLogoStyle()" />
      </div>
      <div class="project-name" @click="toRoute('/home')">{{ sysName() }}</div>
    </bl-row>

    <bl-row class="head-row" width="auto" height="100%">
      <day-night-switch :size="60" v-model="isDark"></day-night-switch>
      <div class="iconbl-circle">
        <span
          @click="handlLogout"
          v-if="userStore.auth && userStore.auth.status === '已登录'"
          class="iconbl bl-logout-circle-line popper-target"
        ></span>
        <span
          v-else
          @click="toRoute('/login')"
          class="iconbl bl-login-circle-line popper-target"
        ></span>
      </div>
    </bl-row>
  </div>
</template>

<script setup lang="ts">
import { toRoute } from "@/router";
import { useUserStore } from "@/stores/user";
import { logout } from "@/utils/auth";
import { getSysName, getThemeLogoStyle } from "@/utils/env";
import { isNotBlank } from "@/utils/obj";
import DayNightSwitch from "@/components/DayNight.vue";
import { useDark } from "@vueuse/core";

let isDark = useDark();

const userStore = useUserStore();

const sysName = () => {
  if (userStore.userParams.WEB_LOGO_NAME) {
    return userStore.userParams.WEB_LOGO_NAME;
  }
  return getSysName();
};

const logo = () => {
  if (
    userStore.userParams.WEB_LOGO_URL &&
    isNotBlank(userStore.userParams.WEB_LOGO_URL)
  ) {
    return userStore.userParams.WEB_LOGO_URL;
  }
  return "favicon.png";
};

const handlLogout = () => {
  logout();
  toRoute("/home");
};
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
    background: linear-gradient(
      90deg,
      var(--gw-header-color),
      var(--gw-font-color),
      var(--gw-header-color)
    );
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
  margin-top: 5px;
  padding-bottom: 5px;
}

.gw-header-bg {
  box-shadow: 0 1px 8px 1px var(--gw-bg-color);
}
</style>
