<template>
  <div class="virtual-waterfall-container">
    <GWResourceSearch :data="searchCondition" @change="pageSearch"></GWResourceSearch>
    <fs-virtual-water-fall ref="waterFallRef" :request="req" :gap="20" :column="5" :request-size="10">
      <template #item="{ item }">
        <img v-if="item.resourceType === '图片'" class="img-item" :src="item.thumbnailUrl" @click="previewImage(item)"/>
        <GWAudioPlayer  v-else-if="item.resourceType === '音频' || item.resourceType === '歌曲'" :name="item.name" :duration="item.duration" :url="item.previewUrl" class="img-item"></GWAudioPlayer>
        <div class="video-container" v-else-if="item.resourceType === '视频'"> 
          <img  class="video-item" :src="item.thumbnailUrl" />
          <!-- 视频logo（播放按钮） -->
          <div class="play-button" @click="previewVideo(item)">
            ▶️
          </div>
        </div>
        <div class="video-container" v-else-if="item.resourceType === 'PDF' || item.resourceType === 'PPT' || item.resourceType === 'WORD' || item.resourceType === 'EXCEL'"> 
          <img  class="video-item" :src="item.thumbnailUrl" @click="previewPdf(item)"/>
        </div>
        <GWLogoCard  v-else-if="item.resourceType === 'DMG' || item.resourceType === '压缩包'  " :name="item.name" :url="item.previewUrl" :ext="item.ext" class="img-item"></GWLogoCard>
      </template>
    </fs-virtual-water-fall>
  </div>
  <GWPreviewImage
      v-if="previewShow == 0 "
      :image="currentResource.previewUrl"
      :name="currentResource.name"
      :on-close="closePreview"></GWPreviewImage>
    <GWPreviewVideo
    v-if="previewShow == 1"
    :url="currentResource.previewUrl"
    :name="currentResource.name"
    :on-close="closePreview"></GWPreviewVideo>

    <GWPdfViewer v-if="previewShow == 4" :title="currentResource.name" :pages="currentResource.pageCount" :url="currentResource.previewUrl"  :doc="currentResource.fileUrl" :on-close="closePreview" />
</template>

<script setup lang="ts">
import FsVirtualWaterFall from "@/components/GWVirtualWaterFall.vue";
import type { FsVirtualWaterfallReuqest } from "@/components/types/type";
import { ref, toRaw } from "vue";
import { pageResourceApi } from "@/api/resources"
import { getWebsiteApiBaseUrl, getDocPreviewBaseUrl } from '@/utils/website'
import type { ResourceSearch } from "@/types/gw.resources";
import GWResourceSearch from "./ResourceSearch.vue";

let totalPage = 1;
let searchCondition:ResourceSearch = {};
// 使用 ref 引用子组件实例
const waterFallRef = ref<InstanceType<typeof FsVirtualWaterFall> | null>(null);

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
      ...searchCondition,pageNo:page,pageSize:pageSize
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
    height: item.thumbnailHeight?item.thumbnailHeight:250, 
    thumbnailUrl: getWebsiteApiBaseUrl() + item.thumbnailUrl,
    previewUrl: item.pdfUrl ? getWebsiteApiBaseUrl() + item.pdfUrl: getWebsiteApiBaseUrl() + item.previewUrl,
    fileUrl: getWebsiteApiBaseUrl() + item.previewUrl,
    name:item.name,
    ext:item.ext,
    pageCount: item.pageCount?item.pageCount:0
  }));
  return {
    total: total,
    list: rows,
  };
};

// 预览状态和当前图片
const previewShow = ref<number>(-1);
// 计算当前预览的图片
const currentResource = ref<any>({});

// 打开预览
const previewImage = (image: any) => {
  currentResource.value = image;
  previewShow.value = 0;
};

// 打开预览
const previewPdf = (doc: any) => {
  previewShow.value = 4;
  currentResource.value = doc;
};

// 打开预览
const previewVideo = (video: any) => {
  previewShow.value = 1;
  currentResource.value = video;
};

// 关闭预览
const closePreview = () => {
  previewShow.value = -1;
};

const pageSearch = async (params:any) =>{
  searchCondition = { ...params};
  totalPage = 1;
  if(waterFallRef.value){
   await waterFallRef.value.reset();
  }
}
</script>

<style scoped lang="scss">
.virtual-waterfall-container {
  width: calc(100%);
  height: calc(100% - 50px);
  padding: 0 20px 20px 20px;
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
