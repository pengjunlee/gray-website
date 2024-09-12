<template>
  <div class="image-gallery">
    
    <GWImageCard 
      v-for="(image, index) in images"
      :key="index"
      :resource="image"
      :on-click="openPreview"
    ></GWImageCard>
    
    <GWImagePreview
      v-if="isPreviewVisible"
      :image="currentImage.thumbnailUrl"
      :name="currentImage.name"
      :resource="currentImage"
      :on-close="closePreview" :on-download="downloadImage"></GWImagePreview>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Resource } from "@/types/gw.resources";
import FileSaver from 'file-saver';
import GWImageCard from "@/components/GWResourceCard.vue";
import GWImagePreview from "@/components/GWPreviewImage.vue"

// 模拟图片数据
// const images = ref<Resource[]>();

// 模拟图片数据
const images = ref<Resource[]>(Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Item ${index + 1}`,
  thumbnailUrl: "https://www.baidu.com/favicon.ico",
  previewUrl: "https://www.baidu.com/favicon.ico",
})));

// 控制显示操作选项的图片索引
const showOptionsIndex = ref<number | null>(null);


const downloadLinkRef = ref();



// 下载图片的方法
const downloadImage = (image: Resource) => {
  fetch(image.previewUrl)
        .then(response => response.blob())
        .then(blob => {
          FileSaver.saveAs(blob, 'image.png'); // 下载后的文件名
        })
        .catch(error => console.error('Error fetching image:', error));
};

// 预览状态和当前图片
const isPreviewVisible = ref(false);

// 计算当前预览的图片
const currentImage = ref<Resource>({
  thumbnailUrl:"",
  name: "",
  id: 0,
  previewUrl:""
});

// 打开预览
const openPreview = (image: Resource) => {
  currentImage.value = image;
  isPreviewVisible.value = true;
};

// 关闭预览
const closePreview = () => {
  isPreviewVisible.value = false;
};




// onMounted(async () => {
//   await listResourceApi().then((rsp) => {
//     images.value = rsp.data;
//   });
// });
</script>

<style scoped lang="scss">
.image-gallery {
  background-color: var(--gw-bg-color);
  @include box(100%, 100%);
  position: relative;
  overflow: scroll;
  display: flex;
  gap: 20px;
  padding: 20px 100px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
