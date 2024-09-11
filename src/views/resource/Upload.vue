<template>
  <div class="root-container">
    <el-container class="layout-container-demo">
      <el-aside width="200px">
        <el-menu :default-active="activeIndex" @select="handleSelect">
          <el-menu-item index="1" :class="activeIndex==='1' ? 'selectTab' : ''">
            <template #title>
              <el-icon><List /></el-icon>全部
            </template></el-menu-item
          >
          <el-menu-item index="2" :class="activeIndex==='2' ? 'selectTab' : ''"
            ><template #title>
              <el-icon><Collection /></el-icon>待分类图片
            </template></el-menu-item
          >
        </el-menu>
      </el-aside>

      <el-container class="right-container">
        <div v-if="activeIndex === '1'" class="image-gallery">
          <GWImageCard
            v-for="(image, index) in images"
            :key="index"
            :card-data="image"
            :on-click="openPreview"
            :on-cover="setCover"
          ></GWImageCard>

          <div style="width: 100%">
            <el-pagination
              style="flex-direction: row-reverse"
              background
              layout="prev, pager, next"
              :total="1000"
            />
          </div>
          <GWPreviewImage
            v-if="isPreviewImageVisible"
            :image="currentImage.previewUrl"
            :name="currentImage.name"
            :on-close="closePreview"
          ></GWPreviewImage>
        </div>
        <GWClassifyImage v-else></GWClassifyImage>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { pageResourceApi, setLibraryCoverApi } from "@/api/resources";
import {
  Menu as IconMenu,
  List,
  Collection,
  Setting,
} from "@element-plus/icons-vue";
import type { Resource } from "@/types/gw.resources";
import FileSaver from "file-saver";
import GWImageCard from "@/components/GWImageCard.vue";

const activeIndex = ref("1");

const handleSelect = function (key: any, keyPath: any) {
  console.log(key, keyPath);
  activeIndex.value = key;
};

// 模拟图片数据
const images = ref<Resource[]>();
// 预览状态和当前图片
const isPreviewImageVisible = ref(false);

// 下载图片的方法
const downloadImage = (image: Resource) => {
  fetch(image.previewUrl)
    .then((response) => response.blob())
    .then((blob) => {
      FileSaver.saveAs(blob, "image.png"); // 下载后的文件名
    })
    .catch((error) => console.error("Error fetching image:", error));
};

// 预览状态和当前图片
const isPreviewVisible = ref(false);

// 计算当前预览的图片
const currentImage = ref<Resource>({
  thumbnailUrl: "",
  name: "",
  id: 0,
  previewUrl: "",
});

// 打开预览
const openPreview = (image: Resource) => {
  currentImage.value = image;
  isPreviewImageVisible.value = true;
};

// 关闭预览
const closePreview = () => {
  isPreviewImageVisible.value = false;
};
// 设置库封面
const setCover = async (image: Resource) => {
  let params = { id: 3, cover: image.id };
  await setLibraryCoverApi(params).then((rsp: any) => {
    console.log(rsp);
  });
};

// 挂载处理
onMounted(async () => {
  await pageResourceApi({ pageNo: 1, pageSize: 20, LibraryId: 3 }).then(
    (rsp) => {
      images.value = rsp.data.result;
    }
  );
});
</script>

<style scoped lang="scss">
.root-container {
  background-color: var(--gw-bg-color);
  @include box(100%, 100%);
  position: relative;
  overflow: scroll;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
}

.selectTab {
  background-color: var(--gw-bg-active-color);
}

.layout-container-demo .el-aside {
  color: var(--gw-font-color);
  background: var(--gw-bg-color);
  border-right: 1px solid var(--gw-bg-active-color);
  width: 200px;
  height: calc(100vh - 65px);
}
.layout-container-demo {
  height: 100%;
  .el-menu {
    border-right: none;
  }
}
.right-container {
  position: relative;
  color: var(--gw-font-color);
  background: var(--gw-bg-color);
  border-right: 1px solid var(--gw-bg-active-color);
  height: 100%;
}

.image-gallery {
  background-color: var(--gw-bg-color);
  @include box(100%, 100%);
  position: relative;
  overflow: scroll;
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
