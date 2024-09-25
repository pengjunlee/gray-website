<template>
  <div class="image-upload" @click="selectFile" >
    <!-- 图片选择器 -->
    <input ref="fileselectRef" style="display: none;" type="file" accept="image/*" @change="onFileChange" />
    
    <!-- 图片预览 -->
    <div  class="image-preview " :style="{ border: imagePreview ? 'none': '1px solid var(--gw-bg-active-color)'}">
      <img style="height:200px;width: auto;border-radius: 10px;object-fit: contain; /* 保证图片按比例填充容器 */" v-if="imagePreview" :src="imagePreview" alt="预览图片" />
      <SvgIcon v-else :size="50" icon-class="add" />
    </div>
   
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue';
import { getWebsiteApiBaseUrl } from '@/utils/website'

interface ImageProps {
  imageUrl?: string; 
}

const props = defineProps<ImageProps>();

// 定义用于存储文件和预览图片的响应式变量
const selectedFile = ref<File | null>(null);
const imagePreview = ref<string | null>(null);

const fileselectRef = ref();

const emit = defineEmits<{
  (event: "selectFile", value: File): void;
}>();

// 处理文件选择，转换为Base64格式进行预览
const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    selectedFile.value = input.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      imagePreview.value = e.target?.result as string;
    };
    reader.readAsDataURL(selectedFile.value);
    emit("selectFile",selectedFile.value);
  }
};

const selectFile = () => {
  fileselectRef.value.click();
}

onUnmounted(() =>{
  selectedFile.value = null;  
});

onMounted(()=>{
  if(props.imageUrl){
    imagePreview.value =getWebsiteApiBaseUrl() + props.imageUrl;
  }
});

</script>

<style scoped>
.image-upload {
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
}

.image-preview {
  width: 200px;
  align-items: center;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  border-radius: 10px;
}

.image-preview img {
  max-width: 100%;
  max-height: 300px;
}

button {
  margin-top: 10px;
}

.upload-status {
  margin-top: 10px;
  color: green;
}
</style>
