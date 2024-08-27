<template>
  <div class="graython-library-root">
    <!-- 新建相册的卡片 -->
    <el-card class="library-card add-library" @click="createlibrary">
      <div class="library-name"><SvgIcon :size="50" icon-class="add" /></div>
      <div>新建</div>
    </el-card>

    <!-- 已创建相册的卡片 -->
    <el-card
      v-for="library in librarys"
      :key="library.id"
        class="library-card"
      @click="openlibrary(library)"
    >
      <img :src="library.cover ? library.cover:`https://via.placeholder.com/150`" alt="库封面" class="library-cover" />
      <div class="library-name">{{ library.name }}</div>
    </el-card>
    
  </div>
  <!-- 模态框 -->
  <el-dialog
      style="padding: 30px;max-height: 500px;overflow: scroll;"
      title="新建库"
      v-model="dialogVisible"
      width="500px"
      @close="handleClose"
    >
    <el-form ref="libraryFormRef" :model="form" label-width="auto" :rules="rules" style="max-width: 500px">
      <el-form-item label="库名称：" prop ="name">
        <!-- 输入框 -->
        <el-input v-model="form.name" placeholder="请输入库名称"></el-input>
    </el-form-item>

    <el-form-item label="库路径：" prop="folderName">
        <!-- 输入框 -->
        <el-input readonly v-model="form.folderName" placeholder="请选择库路径"></el-input>
    </el-form-item>
    <el-form-item>
      <!-- 树形图 -->
        <div style="display: inline-block;margin-left: 79px;">
          <el-input
          v-model="filterText"
          style="width: 200px"
          placeholder="查找路径"
        />
        <el-tree
          ref="treeRef"
          style="max-width: 500px;margin: 10px 0 ;"
          class="filter-tree"
          :data="treeData"
          :props="defaultProps"
          accordion
          :filter-node-method="filterNode"
          @node-click="handleNodeChange"
        />
      </div>
    </el-form-item>

    <!-- 操作按钮 -->
    <el-form-item style="flex-direction: column;">
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="handleConfirm(libraryFormRef)">确定</el-button>
    </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue';
import { ElMessage, ElTree } from 'element-plus';
import type {FormRules, FormInstance} from 'element-plus';
import { resourcesDirectoriesApi, addLibraryApi, listLibraryApi } from '@/api/resources';
import type { Library } from '@/types/gw.resources';


interface Tree {
  [key: string]: any
}
const libraryFormRef = ref<FormInstance>();
// 模拟相册数据
const librarys = ref<Library[]>([]);

onMounted( async ()=>{
  await listLibraryApi().then((rsp) => {
    librarys.value = rsp.data;
  });
});

// 打开相册函数
const openlibrary = (library: Library): void => {
  ElMessage.info(`打开相册: ${library.name}`);
};

// 对话框是否可见
const dialogVisible = ref(false);

// 输入框的值
const inputValue = ref('');

const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data.label.includes(value)
}

// 树形图数据
const treeData = ref([]);


const form = reactive<Library>({
  name: ''
})

const rules = reactive<FormRules<Library>>({
  name: [
    {
      required: true,
      message: '请输入库名称',
      trigger: 'blur',
    },
  ],
  folderName: [
    { required: true, message: '请指定库所在的文件夹', trigger: 'blur' },
  ],
})
// 树形图属性配置
const defaultProps = {
  children: 'children',
  label: 'name',
};

// 选择的节点
const checkedNodes = ref<any[]>([]);

// 打开对话框
const createlibrary = async () => {
  
  await resourcesDirectoriesApi().then((rsp) =>{
    treeData.value = rsp.data;
    dialogVisible.value = true;
  });
};

// 关闭对话框
const handleClose = () => {
  dialogVisible.value = false;
  inputValue.value = ''; // 重置输入框
  checkedNodes.value = []; // 重置选择
};

const handleConfirm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate( async (valid, fields) => {
    if (valid) {
      await addLibraryApi(form).then((rsp )=>{
        handleClose();
        librarys.value.push(rsp.data);
        form.name = '';
        form.folderName = '';
        form.folderPath = '';
      });

    } else {
      console.log('error submit!', fields)
    }
  })
}

// 处理树节点选择变更
const handleNodeChange = (data: any) => {
  form.folderPath = data.path;
  form.folderName = data.name
};
</script>

<style scoped lang="scss">
.graython-library-root {
  background-color: var(--gw-bg-color);
  @include box(100%, 100%);
  padding: 10px 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  gap:20px;
  padding: 20px 100px;
  flex-direction: row;
  flex-wrap: wrap;
}

.library-card {
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease;
  text-align: center;
}

.library-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px calc(--gw-border-color);
}

.add-library {
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-icon {
  font-size: 36px;
  margin-bottom: 10px;
}

.library-cover {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}

.library-name {
  font-size: 14px;
  font-weight: bold;
}
</style>
