<!-- src/components/SvgIcon.vue -->
<template>
  <svg class="svg-icon" :width="size" :height="size" aria-hidden="true">
    <use :xlink:href="`#icon-${iconClass}`"></use>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.svg-icon {
  vertical-align: sub;
}
</style>
