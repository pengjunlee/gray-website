<template>
  <div class="virtual-waterfall-container">
    <fs-virtual-water-fall :request="req" :gap="20" :column="5" :request-size="5">
      <template #item="{ item }">
        <img class="img-item" :src="item.src" @click="openPreview(item)"/>
      </template>
    </fs-virtual-water-fall>
  </div>
  <GWImagePreview
      v-if="isPreviewVisible"
      :image="currentImage.previewUrl"
      :name="currentImage.name"
      :on-close="closePreview"></GWImagePreview>
</template>

<script setup lang="ts">
import FsVirtualWaterFall from "@/components/GWVirtualWaterFall.vue";
import type { FsVirtualWaterfallReuqest } from "@/components/types/type";
import { ref } from "vue";
import { pageResourceApi } from "@/api/resources"
import { getApiBaseUrl } from '@/utils/env'

let totalPage = 1;

const req: FsVirtualWaterfallReuqest = async (page, pageSize) => {
  if( totalPage < page ){
    return {
      total: 0,
      list: [],
    }
  }
  // 请求，并传入分页参数
  const rsp = await pageResourceApi(
    {
      pageNo:page,pageSize:pageSize
    }
  );
  
  // 数据处理
  let { result, total } = rsp.data;
  totalPage = Math.ceil(total/pageSize);
  const rows = result.map((item: any) => ({
    id:item.id, 
    width: item.thumbnailWidth, 
    height: item.thumbnailHeight, 
    src:getApiBaseUrl()+item.thumbnailUrl,
    previewUrl: getApiBaseUrl()+item.previewUrl,
    name:item.name
  }));

  return {
    total: total,
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
  height: calc(100% - 50px);
  padding: 20px;
}
.img-item {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  animation: identifier 0.25s; // 添加动画，使其出现时更加丝滑
  border-radius: 3px;
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
