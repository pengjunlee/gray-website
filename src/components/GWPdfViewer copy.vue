<template>
  <div>
    <div class="pdf-header">
    <p class="title">{{ title }}</p>
    <div class="page-tool">
      <div class="page-tool-item" @click="lastPage">上一页</div>
      <div class="page-tool-item" @click="nextPage">下一页</div>
      <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
      <div class="page-tool-item" @click="pageZoomOut">放大</div>
      <div class="page-tool-item" @click="pageZoomIn">缩小</div>
    </div>
  </div>
  <div class="pdf-container">
    <div class="container-left">
      <div class="catalogue-item" v-for="i in state.numPages">
        <div :class="i === state.pageNum ? 'active' : ''">
          <vue-pdf-embed class="item-pdf" :source="state.source" :page="i" @click="state.pageNum = i"></vue-pdf-embed>
        </div>
        <p> {{ i }}</p>
      </div>
    </div>
    <div class="container-right">
      <div class="paper-pdf-container">
        <vue-pdf-embed class="paper-pdf" :source="state.source" :sytle="scale" :page="state.pageNum"></vue-pdf-embed>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";
import VuePdfEmbed from "vue-pdf-embed";

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true
  }
})


const title="标题"
const source="http://192.168.192.127:8081/website-api/preview/sample.pdf"

const state = reactive({
  source: props.pdfUrl, //预览pdf文件地址
  pageNum: 1, //当前页面
  scale: 1, // 缩放比例
  numPages: 6, // 总页数
});
const scale = computed(() => `transform:scale(${state.scale})`)



onMounted(() => {

});



function lastPage() {
  if (state.pageNum > 1) {
    state.pageNum -= 1;
  }
}
function nextPage() {
  if (state.pageNum < state.numPages) {
    state.pageNum += 1;
  }
}
function pageZoomOut() {
  if (state.scale < 2) {
    state.scale += 0.1;
  }
}
function pageZoomIn() {
  if (state.scale > 1) {
    state.scale -= 0.1;
  }
}


</script>
<style lang="css" scoped>
.pdf-preview {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: e9e9e9;
  z-index: 3000;
}

.pdf-header {
  position: fixed;
    top: 0;
    left: 0;
  width: 100%;
  height: 60px;
  position: fixed;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  z-index: 3000;
  padding: 0 20px;
  min-width: 1200px;
  background-color: #323639;
  box-shadow: 0px 0px 0px #c8c8c8;

  .title {
    font-size: 18px;
    color: #fff;
    display: inline-block;
  }

  .page-tool {
    display:     inline-flex;
    align-items: center;
    cursor: pointer;
    color: #fff;
    user-select: none;

    .page-tool-item {
      padding: 8px 15px;
      padding-left: 10px;
      cursor: pointer;
    }
  }
}

.pdf-container {
  position: fixed;
    display: flex;
    margin: 0 auto;
    top: 60px;
    left: 0;
    min-height: calc(100vh - 60px);

  .container-left {
    width: 300px;
    box-sizing: border-box;
    height: calc(100vh - 60px);
    overflow-y: auto;
    background-color: #323639;

    .catalogue-item {
      width: 200px;
      margin: 10px auto;
      text-align: center;
      cursor: pointer;

      p {
        margin: 0;
        padding: 10px 0;
        color: #fff;
      }

      .item-pdf {
        box-sizing: border-box;
      }

      .active {
        border: 5px solid #7d9dfe;
      }
    }

  }
  .container-right {
    flex : 1;
    height: calc(100vh - 60px);
    background-color: #505050;
    overflow: hidden;

    .pager-pdf-container {
      width: 100%;
      height: 100%;
      overflow: auto;

      .paper-pdf {
        padding: 50px 0;
        width: 800px;
        margin: 0 auto;
      }
    }
  }
}
</style>
