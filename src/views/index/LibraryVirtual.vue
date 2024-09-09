<template>
  <div class="virtual-waterfall-container">
    <fs-virtual-water-fall :request="req" :gap="20" :column="5" :request-size="5">
      <template #item="{ item }">
        <img v-if="item.resourceType === '图片'" class="img-item" :src="item.src" @click="openPreview(item)"/>
        <AudioPlayer  v-else-if="item.resourceType === '音频'" :name="item.name" :duration="item.duration" :url="item.previewUrl" class="img-item"></AudioPlayer>
        <div class="video-container" v-if="item.resourceType === '视频'"> 
          <img  class="video-item" :src="item.src" />
          <!-- 视频logo（播放按钮） -->
          <div class="play-button" @click="openVideo(item)">
            ▶️
          </div>
        </div>
        
      </template>
    </fs-virtual-water-fall>
  </div>
  <GWImagePreview
      v-if="isPreviewImageVisible"
      :image="currentImage.previewUrl"
      :name="currentImage.name"
      :on-close="closePreview"></GWImagePreview>
    <GWVideoPreview
    v-if="isPreviewVideoVisible"
    :url="currentImage.previewUrl"
    :name="currentImage.name"
    :on-close="closePreview"></GWVideoPreview>
</template>

<script setup lang="ts">
import FsVirtualWaterFall from "@/components/GWVirtualWaterFall.vue";
import type { FsVirtualWaterfallReuqest } from "@/components/types/type";
import { ref } from "vue";
import { pageResourceApi } from "@/api/resources"
import { getApiBaseUrl } from '@/utils/env'
import AudioPlayer from '@/components/AudioPlayer.vue';

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
    resourceType: item.resourceType,
    duration: item.duration,
    width: item.thumbnailWidth?item.thumbnailWidth:400, 
    height: item.thumbnailHeight?item.thumbnailHeight:200, 
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
const isPreviewImageVisible = ref(false);
const isPreviewVideoVisible = ref(false);



// 计算当前预览的图片
const currentImage = ref<any>({});

// 打开预览
const openPreview = (image: any) => {
  currentImage.value = image;
  isPreviewImageVisible.value = true;
};

// 打开预览
const openVideo = (video: any) => {
  isPreviewVideoVisible.value = true;
  currentImage.value = video;
};

// 关闭预览
const closePreview = () => {
  isPreviewImageVisible.value = false;
  isPreviewVideoVisible.value = false;
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

.video-item {
  // border:1px solid var(--gw-font-color);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.7);
  animation: identifier 0.25s; // 添加动画，使其出现时更加丝滑
  border-radius: 3px;
  opacity: 0.7; /* 设置透明度，值在 0（完全透明）到 1（不透明）之间 */
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
.video-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

/* 视频logo(播放按钮) */
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 将按钮移动到图片正中央 */
  font-size: 40px; /* 调整按钮大小 */
  color: var(--gw-font-color); /* 按钮颜色 */
  padding: 10px 20px; /* 增加一些内边距 */
  border-radius: 50%; /* 圆形按钮 */
  cursor: pointer;
  text-align: center;
  opacity: 0.7; /* 设置透明度，值在 0（完全透明）到 1（不透明）之间 */
  &:hover {
    background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
    opacity: 1; /* 设置透明度，值在 0（完全透明）到 1（不透明）之间 */
  }
}
</style>
