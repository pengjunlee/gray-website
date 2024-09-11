<template>
  <div
    class="image-card"
    @mouseover="isHovered = true"
    @mouseleave="mouseLeave"
  >
    <!-- 图片展示 -->
    <img
      :src="getApiBaseUrl() + cardData.thumbnailUrl"
      :alt="cardData.name"
      class="image"
      @click="click"
    />

    <!-- @click="enterFullscreen(index)"
        :ref="el => imageRefs[index] = el" -->
    <!-- 更多操作按钮 -->
    <div class="more-options">
      <button @click="toggleOptions" class="more-btn">⋮</button>
      <div v-if="isOptions" class="options-div">
        <div id="triangle_bottom"></div>
        <!-- 操作选项下拉菜单 -->
        <div class="options-menu">
          <ul>
            <li>
              <el-tooltip
                class="box-item"
                effect="dark"
                content="设为库封面"
                placement="right"
              >
                <span @click="cover" class="iconbl bl-star-fill"></span>
              </el-tooltip>
            </li>
            <!-- 可以在这里添加更多选项 -->
            <li>
              <el-tooltip
                class="box-item"
                effect="dark"
                content="删除文件"
                placement="right"
              >
                <span @click="deleteThis" class="iconbl bl-delete-line"></span>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted } from "vue";
import { getApiBaseUrl } from "@/utils/env";
import { ElMessage } from "element-plus";
import { deleteResourceApi } from "@/api/resources"
interface CardProps {
  cardData?: any; // 组件对应的数据
  onClick?: (data: any) => void | Promise<void>;
  onCover?: (data: any) => void | Promise<void>;
}

const isHovered = ref(false);

const isOptions = ref(false);

const props = defineProps<CardProps>();

const { cardData } = toRefs(props);
onMounted(() => {
});

// 点击卡片时调用父组件的回调函数
function click() {
  if (props.onClick) {
    props.onClick(props.cardData ? props.cardData : {});
  }
}
// 点击卡片时调用父组件的回调函数
function cover() {
  if (props.onCover) {
    props.onCover(props.cardData ? props.cardData : {});
  }
}
function mouseLeave() {
  isHovered.value = false;
  isOptions.value = false;
}

// 切换操作选项菜单的显示
const toggleOptions = () => {
  isOptions.value = !isOptions.value;
};

const deleteThis = async () => {
  if(props.cardData.id){
    await deleteResourceApi(props.cardData.id).then((rsp)=>{
      if(rsp.data > 0 ){
        ElMessage({
          type: "info",
          message: "删除成功",
        });
      }else {
        ElMessage({
          type: "info",
          message: "删除失败",
        });
      }

    });
  }
};
</script>

<style scoped lang="scss">
.image-card {
  width: 150px;
  height: 150px;
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
  cursor: pointer;
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
</style>
