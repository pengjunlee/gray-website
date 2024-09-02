<template>
  <div class="list-item">{{ `item - ${source.id}` }}</div>
</template>
<script setup>
defineOptions({ name: 'ListItem' })
const props = defineProps({  // source为每一条数据  
  source: {    type: Object,    default: () => ({})  }})
</script>
<style lang="scss" scoped>
.list-item {
  border-bottom: 1px solid rgb(223, 223, 223);
}
</style>
