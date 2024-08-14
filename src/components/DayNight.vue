<script setup>
import {computed} from "vue";

let props = defineProps({
  // 按钮大小 单位px
  size: {
    type: Number,
    default: 180
  },
  modelValue: {
    type: Boolean,
    default: false
  }
});

let emits = defineEmits(['update:modelValue']);

let width = computed(() => props.size);
let height = computed(() => props.size * 70 / 180);

function click() {
  emits('update:modelValue', !props.modelValue);
}
</script>

<template>
  <div
      :class="{ 'components': true, 'night': modelValue }"
      :style='{ "--width": `${width}px`, "--height": `${height}px` }'
  >
    <!-- 太阳or月亮 -->
    <div class="main-button" @click="click">
      <!-- 月亮上的陨石坑 -->
      <div class="moon"></div>
      <div class="moon"></div>
      <div class="moon"></div>
    </div>
    <!-- 按钮底层的三个虚影 -->
    <div class="daytime-background"></div>
    <div class="daytime-background"></div>
    <div class="daytime-background"></div>
    <!-- 实体云 -->
    <div class="cloud">
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
    </div>
    <!-- 阴影云 -->
    <div class="cloud-light">
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
      <div class="cloud-son"></div>
    </div>
    <!-- 星星 -->
    <div class="stars">
      <div class="star big"></div>
      <div class="star big"></div>
      <div class="star medium"></div>
      <div class="star medium"></div>
      <div class="star medium"></div>
      <div class="star small"></div>
      <div class="star small"></div>
      <div class="star small"></div>
      <div class="star small"></div>
      <div class="star small"></div>
      <div class="star small"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.components {
  --width: 180px;
  --height: 70px;
}

// 黑夜模式的样式
.components.night {
  background-color: rgba(25,30,50,1);
  .main-button {
    left: calc(var(--width) * 110 / 180);
    background-color: rgb(195, 200, 210, 1);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 255, 210,1);
  }
  // 阴影
  .daytime-background {
    &:nth-child(2) {
      left: calc(var(--width) * 90 / 180);
    }
    &:nth-child(3) {
      left: calc(var(--width) * 60 / 180);
    }
    &:nth-child(4) {
      left: calc(var(--width) * 30 / 180);
    }
  }
  // 云层和阴影
  .cloud, .cloud-light {
    bottom: calc(var(--height) * -65 / 70);
  }
  // 陨石坑
  .moon {
    opacity: 1;
  }
  // 星星
  .stars {
    top: 0;
    opacity: 1;
  }
}

// 白昼模式
.components {
  position: sticky;
  width: var(--width);
  height: var(--height);
  border-radius: var(--height);
  overflow: hidden;
  transition: 0.7s;
  background-color: rgba(70, 133, 192, 1);
  box-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.5);

  &>* {
    transition: 0.7s;
  }

  // 主要按钮样式
  .main-button {
    position: absolute;
    left: 0;
    margin: calc(var(--width) * 7.5 / 180) 0 0 calc(var(--width) * 7.5 / 180);
    width: calc(var(--width) * 55 / 180);
    height: calc(var(--width) * 55 / 180);
    border-radius: 50%;
    cursor: pointer;
    transition: 0.7s;
    transition-timing-function: cubic-bezier(0, 0.5, 1.3, 1);
    background-color: rgba(255, 195, 35, 1);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5), inset -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset 4px 5px 2px -2px rgba(255, 230, 80, 1);
  }

  // 陨石坑
  .moon {
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: 0.5s;
    opacity: 0;
    transition-timing-function: cubic-bezier(0, 0.5, 1.3, 1);
    position: absolute;
    background-color: rgba(150, 160, 180, 1);
    &:nth-child(1) {
      top: calc(var(--height) * 7.5 / 70);
      left: calc(var(--width) * 25 / 180);
      width: calc(var(--width) * 12.5 / 180);
      height: calc(var(--width) * 12.5 / 180);
    }
    &:nth-child(2) {
      top: calc(var(--height) * 20 / 70);
      left: calc(var(--width) * 7.5 / 180);
      width: calc(var(--width) * 20 / 180);
      height: calc(var(--width) * 20 / 180);
    }
    &:nth-child(3) {
      top: calc(var(--height) * 32.5 / 70);
      left: calc(var(--width) * 32.5 / 180);
      width: calc(var(--width) * 12.5 / 180);
      height: calc(var(--width) * 12.5 / 180);
    }
  }

  // 按钮背后的虚影
  .daytime-background {
    position: absolute;
    transition: 0.7s;
    border-radius: 50%;
    transition-timing-function: cubic-bezier(0, 0.5, 1.3, 1);
    &:nth-child(2) {
      top: calc(var(--height) * -20 / 70);
      left: calc(var(--width) * -20 / 180);
      width: calc(var(--width) * 110 / 180);
      height: calc(var(--width) * 110 / 180);
      background-color: rgba(255, 255, 255, 0.2);
      z-index: -2;
    }
    &:nth-child(3) {
      top: calc(var(--height) * -35 / 70);
      left: calc(var(--width) * -15 / 180);
      width: calc(var(--width) * 135 / 180);
      height: calc(var(--width) * 135 / 180);
      background-color: rgba(255, 255, 255, 0.1);
      z-index: -3;
    }
    &:nth-child(4) {
      top: calc(var(--height) * -45 / 70);
      left: calc(var(--width) * -15 / 180);
      width: calc(var(--width) * 160 / 180);
      height: calc(var(--width) * 160 / 180);
      background-color: rgba(255, 255, 255, 0.05);
      z-index: -4;
    }
  }

  // 云和云层虚影的动画过渡时间和非线性动画
  .cloud, .cloud-light {
    transition: 0.7s;
  }

  // 设置实体云层级
  .cloud {
    z-index: -2;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  // 云层虚影在云层下方,并且整体上移,逆时针旋转5度
  .cloud-light {
    position: absolute;
    z-index: -3;
    right: 0;
    bottom: calc(var(--height) * 25 / 70);
    opacity: 0.5;
    transform: rotate(-5deg);
  }

  // 绘制云的形状
  .cloud-son {
    z-index: -1;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    &:nth-child(1), &:nth-child(7) {
      right: calc(var(--height) * -20 / 70);
      bottom: calc(var(--width) * 10 / 180);
      width: calc(var(--width) * 50 / 180);
      height: calc(var(--width) * 50 / 180);
    }
    &:nth-child(2), &:nth-child(8) {
      right: calc(var(--height) * -10 / 70);
      bottom: calc(var(--width) * -25 / 180);
      width: calc(var(--width) * 60 / 180);
      height: calc(var(--width) * 60 / 180);
    }
    &:nth-child(3), &:nth-child(9) {
      right: calc(var(--height) * 20 / 70);
      bottom: calc(var(--width) * -40 / 180);
      width: calc(var(--width) * 60 / 180);
      height: calc(var(--width) * 60 / 180);
    }
    &:nth-child(4), &:nth-child(10) {
      right: calc(var(--height) * 50 / 70);
      bottom: calc(var(--width) * -35 / 180);
      width: calc(var(--width) * 60 / 180);
      height: calc(var(--width) * 60 / 180);
    }
    &:nth-child(5), &:nth-child(11) {
      right: calc(var(--height) * 75 / 70);
      bottom: calc(var(--width) * -60 / 180);
      width: calc(var(--width) * 75 / 180);
      height: calc(var(--width) * 75 / 180);
    }
    &:nth-child(6), &:nth-child(12) {
      right: calc(var(--height) * 110 / 70);
      bottom: calc(var(--width) * -50 / 180);
      width: calc(var(--width) * 60 / 180);
      height: calc(var(--width) * 60 / 180);
    }
  }

  // 所有星星样式
  .stars {
    top: calc(var(--height) * -65 / 70);
    z-index: -2;
    transition: 0.7s;
    transition-timing-function: cubic-bezier(0, 0.5, 1.3, 1);
    position: absolute;
    // 大星星
    .big {
      width: calc(var(--width) * 15 / 180);
      height: calc(var(--width) * 15 / 180);
    }
    // 中星星
    .medium {
      width: calc(var(--width) * 10 / 180);
      height: calc(var(--width) * 10 / 180);
    }
    // 小星星
    .small {
      width: calc(var(--width) * 6 / 180);
      height: calc(var(--width) * 6 / 180);
    }

    .star {
      background-color: #ffffff;
      clip-path: polygon(30% 0%, 54% 32%, 100% 30%, 65% 56%, 70% 100%, 42% 61%, 0% 70%, 34% 44%);
      position: absolute;

      // 设置星星位置
      &:nth-child(1) {
        top: calc(var(--height) * 10 / 70);
        left: calc(var(--width) * 40 / 180);
      }
      &:nth-child(2) {
        top: calc(var(--height) * 20 / 70);
        left: calc(var(--width) * 95 / 180);
      }
      &:nth-child(3) {
        top: calc(var(--height) * 20 / 70);
        left: calc(var(--width) * 20 / 180);
      }
      &:nth-child(4) {
        top: calc(var(--height) * 35 / 70);
        left: calc(var(--width) * 50 / 180);
      }
      &:nth-child(5) {
        top: calc(var(--height) * 50 / 70);
        left: calc(var(--width) * 80 / 180);
      }
      &:nth-child(6) {
        top: calc(var(--height) * 50 / 70);
        left: calc(var(--width) * 20 / 180);
      }
      &:nth-child(7) {
        top: calc(var(--height) * 40 / 70);
        left: calc(var(--width) * 27.5 / 180);
      }
      &:nth-child(8) {
        top: calc(var(--height) * 55 / 70);
        left: calc(var(--width) * 45 / 180);
      }
      &:nth-child(9) {
        top: calc(var(--height) * 20 / 70);
        left: calc(var(--width) * 75 / 180);
      }
      &:nth-child(10) {
        top: calc(var(--height) * 32.5 / 70);
        left: calc(var(--width) * 67.5 / 180);
      }
      &:nth-child(11) {
        top: calc(var(--height) * 40 / 70);
        left: calc(var(--width) * 95 / 180);
      }
    }
  }
}
</style>