<template>
  <div class="gw-search-root">
    <!-- 类型选择框 -->
    <div class="search-item">
      <el-select
        v-model="resourceTypes"
        multiple
        collapse-tags
        placeholder="资源类型"
        style="width: 150px"
      >
        <el-option
          v-for="item in types"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        />
      </el-select>
    </div>

    <!-- 库选择下拉框 -->
    <div class="search-item">
      <el-select
        v-model="libraryId"
        clearable
        placeholder="库"
        style="width: 120px"
      >
        <el-option
          v-for="item in libraries"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref, onMounted, watch, toRaw } from 'vue';
import type { ResourceSearch,Library, IntEnumOption } from '@/types/gw.resources'
import { listLibraryApi ,resourcesTypesApi } from '@/api/resources'

const types = ref<IntEnumOption[]>()
const libraries = ref<Library[]>();

const resourceTypes= ref<number[]>();
const libraryId = ref();

const emit = defineEmits<{
  (event: 'change:search', value: ResourceSearch): void;
}>();

// const { resourceTypes, collection, library } = toRefs(props.search);
const fetchTypes = () =>{

}
onMounted(async() => {
  await listLibraryApi().then((rsp) => {
    libraries.value = rsp.data
  })

  await resourcesTypesApi().then((rsp)=>{
    types.value = rsp.data;
  });
}
);

watch(
  () => [resourceTypes.value,libraryId.value],
  ([newTypes,newLibrary]) => {
    // 在这里可以执行一些逻辑，例如检查新值是否满足某些条件
    emit('change:search', { resourceTypes:toRaw(newTypes),libraryId:newLibrary });
  },
  { deep: true, immediate: true }
);

</script>

<style type="scss" scoped>
/* 样式可以根据需要进行调整 */
.gw-search-root {
  margin: 10px 0;
  display: flex;
  width: 100%;
  height: 40px;
  flex-direction: row;
  z-index: 2000;
}

.search-item {
  display: inline-flex;
  margin-right: 5px;
}
</style>
