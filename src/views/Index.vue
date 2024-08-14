<template>
  <div class="flex-container">
    <IndexHeader v-if="!isLogin" :bg="!isHome"></IndexHeader>
    <router-view v-slot="{ Component }">
    <keep-alive :include="[includeRouter]">
      <component :is="Component" />
    </keep-alive>
    </router-view>
    <IndexFooter v-if="isHome"></IndexFooter>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import router from '@/router'
import IndexHeader from './index/IndexHeader.vue'
import IndexFooter from './index/IndexFooter.vue'
import type { RouteRecordName } from 'vue-router'

const includeRouter = ref<any>(['Home'])
const curRoute = ref<RouteRecordName>('Home')
const isHome = computed(() => {
  return curRoute.value === 'Home'
})

const isLogin = computed(() => {
  return curRoute.value === 'Login'
})

watch(
  () => router.currentRoute.value,
  (newRoute) => {
    if (newRoute.name) {
      curRoute.value = newRoute.name
    }
    if (newRoute.meta.keepAlive && includeRouter.value.indexOf(newRoute.name) === -1) {
      includeRouter.value.push(newRoute.name)
    }
  },
  { immediate: true }
)
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
