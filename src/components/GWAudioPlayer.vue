<template>
  <div
    class="audio-player"
    @mouseover="showOverlay = true"
    @mouseleave="showOverlay = false"
  >
    <div class="audio-name">{{ name }}</div>
    <div v-if="isPlaying" class="audio-visualizer">
      <div
        v-for="(bar, index) in bars"
        :key="index"
        class="audio-bar"
        :style="{ animationPlayState: isPlaying ? 'running' : 'paused' }"
      ></div>
    </div>
    <audioIcon v-else></audioIcon>
    <!-- 控制条 -->
    <div class="controls">
      <div class="time-info">
        <span>{{ formatTime(currentTime) }}</span>
        <input
          type="range"
          min="0"
          :max="actualDuration"
          step="0.1"
          v-model="currentTime"
        />
        <span>{{ formatTime(actualDuration) }}</span>
      </div>
    </div>

    <!-- 遮罩层 -->
    <div v-if="showOverlay" class="overlay">
      <div class="play-button" style="margin-right: 20px;" @click="download"> ⬇️ </div>
      <div class="play-button" @click="togglePlay">{{ isPlaying ? "⏸️" : "▶️" }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import audioIcon from "@/assets/icons/audio.svg";
import FileSaver from 'file-saver';

interface AudioProps {
  url: string;
  name: string;
  duration: number;
}

const props = defineProps<AudioProps>();
const { url, name, duration } = toRefs(props);

const actualDuration = ref(duration.value);

// 是否第一次点击播放
const isFirstPlay = ref(true);

// 音频控制状态
const isPlaying = ref(false);
const currentTime = ref(0);
const showOverlay = ref(false); // 是否显示遮罩

// 格式化时间
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

import { onBeforeUnmount } from "vue";

// 模拟音频频谱的条数
const bars = Array.from({ length: 10 });

let audioContext: AudioContext | null ; // Moved to be initialized after user interaction
const audioBuffer = ref<AudioBuffer | null>(null);
const audioSource = ref<AudioBufferSourceNode | null>(null);

let updateInterval: any | undefined;

// Initialize AudioContext on user gesture
const initializeAudioContext = async () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext)();
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  if (audioBuffer.value) {
    playAudio();
  } else {
    await loadAudio(url.value); // 替换为你的远程音频文件地址
    playAudio();
  }
};

// 切换播放和暂停
const togglePlay = () => {
  if (isFirstPlay.value) {
    initializeAudioContext();
    isFirstPlay.value = false;
  } else {
    if (isPlaying.value) {
      pauseAudio();
    } else {
      playAudio();
    }
  }
};

const playAudio = async () => {
  if (audioBuffer.value) {
    if (audioContext!.state === "suspended") {
      audioContext!.resume();
      console.log("播放中");
      isPlaying.value = true;
      // 继续更新播放进度
      updateInterval = setInterval(() => {
        if (audioContext!.state === "running") {
          currentTime.value = audioContext!.currentTime;
        }
      }, 100);
    } else {
      audioSource.value = audioContext!.createBufferSource();
      audioSource.value.buffer = audioBuffer.value;
      audioSource.value.connect(audioContext!.destination);
      audioSource.value.start();
      console.log("播放中...");
      isPlaying.value = true;
      // 继续更新播放进度
      updateInterval = setInterval(() => {
        if (audioContext!.state === "running") {
          currentTime.value = audioContext!.currentTime;
        }
      }, 100);
      audioSource.value.onended = () => {
        console.log("播放结束");
        isPlaying.value = false;
        clearInterval(updateInterval);
        currentTime.value = 0;
        audioContext = null;
        if (audioSource.value) {
          audioSource.value.stop(); // 停止当前音频
          audioSource.value = null; // 重置 sourceNode
        }
        isFirstPlay.value = true;
      };
    }
  }
};

const pauseAudio = () => {
  if (audioContext!.state === "running") {
    audioContext!.suspend().then(() => {
      console.log("已暂停");
      isPlaying.value = false;
      clearInterval(updateInterval);
    });
  }
};

// 加载远程音频文件
const loadAudio = async (url: string) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  audioBuffer.value = await new Promise<AudioBuffer>((resolve, reject) => {
    audioContext!.decodeAudioData(arrayBuffer, (buffer) => {
      if (buffer) {
        actualDuration.value = buffer.duration;
        resolve(buffer); // 解析成功，返回buffer
        console.log("音频已加载，准备播放");
      } else {
        reject(new Error("音频解码失败"));
      }
    });
  });
};

onBeforeUnmount(() => {
  if (audioSource.value) {
    audioSource.value.stop();
  }
  if (updateInterval) {
    clearInterval(updateInterval);
  }
});

function download() {
  fetch(url.value)
        .then(response => response.blob())
        .then(blob => {
          FileSaver.saveAs(blob, name.value); // 下载后的文件名
        })
        .catch(error => console.error('下载音频异常:', error));
}
</script>

<style scoped>
.audio-player {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gw-bg-active-color);
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--gw-bg-color);
}

.audio-name {
  width: 100%;
  font-size: 18px;
  padding: 6px;
  text-align: center;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  white-space-collapse: collapse;
  overflow: hidden;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.controls .time-info {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.controls .time-info span {
  flex-grow: 1;
  font-size: small;
  text-align: center;
}

.controls .time-info input[type="range"] {
  flex-grow: 1;
  margin: 0 10px;
}

/* 遮罩层 */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 在屏幕宽度小于 400px 时隐藏文字，只显示图标 */
@media (max-width: 1200px) {
  .controls .time-info span {
    display: none;
  }
}

.audio-visualizer {
  display: flex;
  align-items: flex-end;
  height: 25%;
}

.audio-bar {
  width: 3px;
  height: 100%;
  margin: 0 5px;
  background-color: #4caf50;
  animation: jump 0.5s infinite;
}

@keyframes jump {
  0%,
  100% {
    transform: scaleY(0.5);
  }
  50% {
    transform: scaleY(1);
  }
}

/* 视频logo(播放按钮) */
.play-button {
  font-size: 30px; /* 调整按钮大小 */
  color: var(--gw-font-color); /* 按钮颜色 */
  cursor: pointer;
  text-align: center;
  background-color: transparent;
}
</style>
