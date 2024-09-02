<template>
  <!-- 模态框 用来预览-->
  <div class="modal-overlay">
    <div class="preview-btns">
      <span
        style="font-size: 24px"
        @click="close"
        class="iconbl bl-a-closeline-line"
      ></span>
      <span
        style="font-size: 24px"
        @click="download"
        class="iconbl bl-download--line"
      ></span>
      <span
        style="font-size: 24px"
        @click="enterFullscreen"
        class="iconbl bl-expansion-line"
      ></span>
    </div>

    <div class="modal-content" @click="close">
      <img
        :src="image"
        :alt="name"
        class="preview-image"
        ref="previewImageRef"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

interface CardProps {
  image: string;
  name: string;
  cardData?: Record<string, any>; // 组件对应的数据
  onClose?: () => void | Promise<void>;
  onDownload?: (data: any) => void | Promise<void>;
}

const props = defineProps<CardProps>();

const { image, name } = toRefs(props);

// 点击图片时调用父组件的回调函数
function close() {
  if (props.onClose) {
    props.onClose();
  }
}

function download() {
  if (props.onDownload) {
    props.onDownload(props.cardData ? props.cardData : {});
  }
}

const previewImageRef = ref();

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
</script>

<style scoped lang="scss">

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
