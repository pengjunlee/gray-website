<template>
  <div class="graython-home-root">
    <bl-row class="head-row" width="auto" height="auto">
      <h3>作图</h3>
    </bl-row>
    <bl-row class="head-row link-card" width="auto" height="auto">
      <div style="display: inline-block;overflow: hidden;">BBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbb</div>
      <div style="display: inline-block;overflow: hidden;">BBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbb</div>
      <div style="display: inline-block;overflow: hidden;">BBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbb</div>
      <div style="display: inline-block;overflow: hidden;">BBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbb</div>
      <div style="display: inline-block;overflow: hidden;">BBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbb</div>
      <div style="display: inline-block;overflow: hidden;">BBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbbBBbbbbb</div>
    </bl-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
onMounted(() => {
})

</script>

<style scoped lang="scss">
.graython-home-root {
  background-color: var(--bl-bg-color);
  @include box(100%, 100%);
  padding: 10px 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .head-row {
    line-height: 40px;
  }

  .head-row.link-card {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  }
}
</style>
