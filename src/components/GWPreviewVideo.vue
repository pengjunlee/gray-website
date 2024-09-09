<template>
  <!-- 模态框 用来预览-->
  <div class="preview-container">
    <div class="preview-btns">
      <span
        style="font-size: 24px"
        @click="close"
        class="iconbl bl-a-closeline-line"
      ></span>
    </div>

    <!-- 通过 v-if 判断是否有视频资源 -->
    <div class="preview-content" v-if="url">
      <video
        controls
        :src="url"
        width="800px"
        @pause="handleVideoPause"
        @ended="handleVideoEnd"
        @abort="handleVideoAbort"
      >
        你的浏览器不支持视频播放。
      </video>
    </div>
    <p v-else>没有视频可预览</p>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface CardProps {
  url: string;
  name: string;
  onClose?: () => void | Promise<void>;
}

const props = defineProps<CardProps>();

const { url, name } = toRefs(props);

// 点击图片时调用父组件的回调函数
function close() {
  if (props.onClose) {
    props.onClose();
  }
}

// 处理视频暂停事件
const handleVideoPause = () => {
  console.log("视频暂停");
};
// 处理视频播放结束事件
const handleVideoEnd = () => {
  console.log("视频播放结束");
};
// 处理视频加载中止事件
const handleVideoAbort = () => {
  console.log("视频加载被中止");
};
</script>

<style scoped lang="scss">
/* 模态框样式 */
.preview-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--gw-bg-active-color-5);
  z-index: 3000;
}

.preview-content {
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
