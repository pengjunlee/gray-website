<template>
  <div class="flex-container">
    <Header />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/GWResourceHeader.vue";
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
