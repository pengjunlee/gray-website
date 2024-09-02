<template>
  <div class="image-gallery">
    <div
      class="image-card"
      v-for="(image, index) in images"
      :key="index"
      @mouseleave="showOptionsIndex = -1"
    >
      <!-- 图片展示 -->
      <img
        :src="
          `http://localhost:8081/website-api/thumbnail/` +
          image.folderId +
          `/` +
          image.md5 +
          '.png'
        "
        :alt="image.name"
        class="image"
        @click="openPreview(index)"
      />

      <!-- @click="enterFullscreen(index)"
        :ref="el => imageRefs[index] = el" -->
      <!-- 更多操作按钮 -->
      <div class="more-options">
        <button @click="toggleOptions(index)" class="more-btn">⋮</button>
        <div v-if="showOptionsIndex === index" class="options-div">
          <div id="triangle_bottom"></div>
          <!-- 操作选项下拉菜单 -->
          <div class="options-menu">
            <ul>
              <li>
                <span @click="downloadImage(`http://localhost:8081/website-api/thumbnail/` +
          image.folderId +
          `/` +
          image.md5 +
          '.png')" class="iconbl bl-download--line"></span>
                
              </li>
              <li><span @click="openPreview(index)" class="iconbl bl-eye-line"></span></li>
              <!-- 可以在这里添加更多选项 -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 模态框 -->
    <div v-if="isPreviewVisible" class="modal-overlay">
      <div class="preview-btns">
        <span style="font-size: 24px;" @click="closePreview" class="iconbl bl-a-closeline-line"></span>
        <span style="font-size: 24px;" @click="downloadImage('')" class="iconbl bl-download--line"></span>
        <span style="font-size: 24px;" @click="enterFullscreen" class="iconbl bl-expansion-line"></span>
      </div>

      <div class="modal-content" @click="closePreview">
        <img
          :src="
            `http://localhost:8081/website-api/thumbnail/` +
            currentImage.folderId +
            `/` +
            currentImage.md5 +
            '.png'
          "
          :alt="currentImage.name"
          class="preview-image"
          ref="previewImageRef"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { listResourceApi } from "@/api/resources";
import type { Resource } from "@/types/gw.resources";
import FileSaver from 'file-saver';

// 模拟图片数据
const images = ref<Resource[]>();

// 控制显示操作选项的图片索引
const showOptionsIndex = ref<number | null>(null);

const previewImageRef = ref();
const downloadLinkRef = ref();

// 切换操作选项菜单的显示
const toggleOptions = (index: number) => {
  if (showOptionsIndex.value === index) {
    showOptionsIndex.value = null; // 关闭菜单
  } else {
    showOptionsIndex.value = index; // 显示对应图片的菜单
  }
};

// 下载图片的方法
const downloadImage = (url: string) => {
  if( !url){
    url=`http://localhost:8081/website-api/thumbnail/` +
            currentImage.value.folderId +
            `/` +
            currentImage.value.md5 +
            '.png'
  }
  debugger;
  console.log(url);
  fetch(url)
        .then(response => response.blob())
        .then(blob => {
          FileSaver.saveAs(blob, 'image.png'); // 下载后的文件名
        })
        .catch(error => console.error('Error fetching image:', error));
};

// 预览状态和当前图片
const isPreviewVisible = ref(false);
const currentIndex = ref<number | null>(null);

// 计算当前预览的图片
const currentImage = computed(() => {
  if (currentIndex.value !== null) {
    return images.value[currentIndex.value];
  }
  return { url: "", alt: "" };
});

// 打开预览
const openPreview = (index: number) => {
  currentIndex.value = index;
  isPreviewVisible.value = true;
};

// 关闭预览
const closePreview = () => {
  isPreviewVisible.value = false;
  currentIndex.value = null;
};


// 进入全屏模式的函数
const enterFullscreen = () => {
  const imageElement = previewImageRef.value;
  if (imageElement) {
    if (imageElement.requestFullscreen) {
      imageElement.requestFullscreen();
    } else if ((imageElement as any).webkitRequestFullscreen) {
      (imageElement as any).webkitRequestFullscreen();
    } else if ((imageElement as any).mozRequestFullScreen) {
      (imageElement as any).mozRequestFullScreen();
    } else if ((imageElement as any).msRequestFullscreen) {
      (imageElement as any).msRequestFullscreen();
    }
  }
};

onMounted(async () => {
  await listResourceApi().then((rsp) => {
    images.value = rsp.data;
  });
});
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

.image-card {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--gw-bg-color);
  transition: transform 0.3s, box-shadow 0.3s;
}

.image-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  .more-options {
    display: block;
  }
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保证图片按比例填充容器 */
  transition: transform 0.3s;
}

.image-card:hover .image {
  transform: scale(1.1); /* 鼠标悬停时放大图片 */
}

.more-options {
  position: absolute;
  top: 8px;
  right: 8px;
  display: none;
}

.more-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: var(--gw-font-color);
  &:hover {
    background: var(--gw-bg-active-color);
    border-radius: 50%;
    .more-options {
      display: inline;
    }
  }
}

.options-menu {
  position: absolute;
  top: 35px;
  right: 0;
  background-color: var(--gw-bg-color);
  color: var(--gw-font-color);
  border: 1px solid var(--gw-bg-active-color);
  box-shadow: 0 2px 8px var(--gw-font-color-1);
  border-radius: 5px;
  z-index: 100;
}

.options-menu ul {
  list-style: none;
  padding: 8px 0;
  margin: 0;
}

.options-menu li {
  padding: 3px 8px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 12px;
}

.options-menu li:hover {
  background-color: var(--gw-bg-active-color);
}

#triangle_bottom {
  height: 0px;
  width: 0px;
  margin-left: 9px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid var(--gw-bg-color);
}

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--gw-bg-active-color-5);
  z-index: 3000;
}

.modal-content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}

.preview-btns {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 3999;
  display: flex;
  flex-direction: column;
  .iconbl {
    &:hover {
      background-color: var(--gw-bg-color);
    }
    background-color: var(--gw-bg-color-5);
    border-radius: 50%;
    padding: 5px;
  }
}
</style>
