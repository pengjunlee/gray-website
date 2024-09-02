<template>
  <div class="virtual-waterfall-container">
    <fs-virtual-water-fall :request="req" :gap="20" :column="5" :request-size="30">
      <template #item="{ item }">
        <img class="test-item" :src="item.src" @click="openPreview(item)"/>
      </template>
    </fs-virtual-water-fall>
  </div>
  <GWImagePreview
      v-if="isPreviewVisible"
      :image="currentImage.src"
      :name="'1.png'"
      :on-close="closePreview"></GWImagePreview>
</template>

<script setup lang="ts">
import FsVirtualWaterFall from "@/components/GWVirtualWaterFall.vue";
import type { FsVirtualWaterfallReuqest } from "@/components/types/type";
import { ref } from "vue";


const req: FsVirtualWaterfallReuqest = async (page, pageSize) => {
  // 请求，并传入分页参数
  const rep = await fetch(
    `https://www.vilipix.com/api/v1/picture/public?limit=${pageSize}&sort=hot&offset=${--page * pageSize}`
  );
  // 数据处理
  let {
    data: { rows, count },
  } = await rep.json();
  rows = rows.map((item: any) => ({
    id: item.picture_id, 
    width: item.width, 
    height: item.height, 
    src: item.regular_url + "?x-oss-process=image/resize,w_240/format,jpg",
  }));

  return {
    total: count,
    list: rows,
  };
};

// 预览状态和当前图片
const isPreviewVisible = ref(false);

// 计算当前预览的图片
const currentImage = ref<any>({});

// 打开预览
const openPreview = (image: any) => {
  currentImage.value = image;
  isPreviewVisible.value = true;
};

// 关闭预览
const closePreview = () => {
  isPreviewVisible.value = false;
};
</script>

<style scoped lang="scss">
.virtual-waterfall-container {
  width: calc(100%);
  height: calc(100% - 60px);
  padding: 20px;
}
.test-item {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  animation: identifier 0.25s; // 添加动画，使其出现时更加丝滑
  &:hover {
    cursor: pointer;
  }
}
@keyframes identifier {
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
