// vite.config.mts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/pengjunlee/workspace/gray-website/node_modules/vite/dist/node/index.js";
import { visualizer } from "file:///Users/pengjunlee/workspace/gray-website/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import vue from "file:///Users/pengjunlee/workspace/gray-website/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/pengjunlee/workspace/gray-website/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import ElementPlus from "file:///Users/pengjunlee/workspace/gray-website/node_modules/unplugin-element-plus/dist/vite.mjs";
import AutoImport from "file:///Users/pengjunlee/workspace/gray-website/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/pengjunlee/workspace/gray-website/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///Users/pengjunlee/workspace/gray-website/node_modules/unplugin-vue-components/dist/resolvers.js";
import { resolve } from "path";
var __vite_injected_original_import_meta_url = "file:///Users/pengjunlee/workspace/gray-website/vite.config.mts";
var npm_lifecycle_event = process.env.npm_lifecycle_event;
var isSpring = () => {
  return npm_lifecycle_event && npm_lifecycle_event === "build:spring";
};
console.log("\u5F53\u524D\u8FD0\u884C\u811A\u672C: ", npm_lifecycle_event);
var vite_config_default = defineConfig({
  base: "./",
  envDir: resolve("env"),
  server: {
    host: "0.0.0.0",
    port: 5174,
    hmr: true,
    proxy: {
      // 第一个代理后端地址
      "*": {
        target: "http://192.168.192.66:890",
        // target: "http://192.168.2.2:8091",
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    visualizer({
      emitFile: false,
      filename: "stats.html",
      // 分析图生成的文件名
      open: true
      //如果存在本地服务端口，将在打包后自动展示
    }),
    // ElementPlus 按需引入的插件
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ElementPlus({
      // options
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**
         * 如果引入多个文件，可以使用
         * '@import "@/assets/scss/globalVariable1.scss";
         * @import"@/assets/scss/globalVariable2.scss";'
         */
        additionalData: '@import "@/assets/styles/config.scss";'
      }
    }
  },
  build: {
    outDir: isSpring() ? "../blossom-backend/backend/src/main/resources/static/blog" : "dist",
    // 警告大小, 单位kb
    // chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3BlbmdqdW5sZWUvd29ya3NwYWNlL2dyYXktd2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3BlbmdqdW5sZWUvd29ya3NwYWNlL2dyYXktd2Vic2l0ZS92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3BlbmdqdW5sZWUvd29ya3NwYWNlL2dyYXktd2Vic2l0ZS92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcblxuLy8gXHU0RTNBIEVsZW1lbnQgUGx1cyBcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjVcdTY4MzdcdTVGMEZcdTMwMDJcbmltcG9ydCBFbGVtZW50UGx1cyBmcm9tICd1bnBsdWdpbi1lbGVtZW50LXBsdXMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuXG5jb25zdCBucG1fbGlmZWN5Y2xlX2V2ZW50ID0gcHJvY2Vzcy5lbnYubnBtX2xpZmVjeWNsZV9ldmVudFxuXG5jb25zdCBpc1NwcmluZyA9ICgpID0+IHtcbiAgcmV0dXJuIG5wbV9saWZlY3ljbGVfZXZlbnQgJiYgbnBtX2xpZmVjeWNsZV9ldmVudCA9PT0gJ2J1aWxkOnNwcmluZydcbn1cblxuY29uc29sZS5sb2coJ1x1NUY1M1x1NTI0RFx1OEZEMFx1ODg0Q1x1ODExQVx1NjcyQzogJywgbnBtX2xpZmVjeWNsZV9ldmVudClcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcuLycsXG4gIGVudkRpcjogcmVzb2x2ZSgnZW52JyksXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICBwb3J0OiA1MTc0LFxuICAgIGhtcjogdHJ1ZSxcbiAgICBwcm94eToge1xuICAgICAgLy8gXHU3QjJDXHU0RTAwXHU0RTJBXHU0RUUzXHU3NDA2XHU1NDBFXHU3QUVGXHU1NzMwXHU1NzQwXG4gICAgICBcIipcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzE5Mi4xNjguMTkyLjY2Ojg5MFwiLFxuICAgICAgICAvLyB0YXJnZXQ6IFwiaHR0cDovLzE5Mi4xNjguMi4yOjgwOTFcIixcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgZW1pdEZpbGU6IGZhbHNlLFxuICAgICAgZmlsZW5hbWU6ICdzdGF0cy5odG1sJywgLy8gXHU1MjA2XHU2NzkwXHU1NkZFXHU3NTFGXHU2MjEwXHU3Njg0XHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICBvcGVuOiB0cnVlIC8vXHU1OTgyXHU2NzlDXHU1QjU4XHU1NzI4XHU2NzJDXHU1NzMwXHU2NzBEXHU1MkExXHU3QUVGXHU1M0UzXHVGRjBDXHU1QzA2XHU1NzI4XHU2MjUzXHU1MzA1XHU1NDBFXHU4MUVBXHU1MkE4XHU1QzU1XHU3OTNBXG4gICAgfSksXG4gICAgLy8gRWxlbWVudFBsdXMgXHU2MzA5XHU5NzAwXHU1RjE1XHU1MTY1XHU3Njg0XHU2M0QyXHU0RUY2XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgRWxlbWVudFBsdXMoe1xuICAgICAgLy8gb3B0aW9uc1xuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFx1NTk4Mlx1Njc5Q1x1NUYxNVx1NTE2NVx1NTkxQVx1NEUyQVx1NjU4N1x1NEVGNlx1RkYwQ1x1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOFxuICAgICAgICAgKiAnQGltcG9ydCBcIkAvYXNzZXRzL3Njc3MvZ2xvYmFsVmFyaWFibGUxLnNjc3NcIjtcbiAgICAgICAgICogQGltcG9ydFwiQC9hc3NldHMvc2Nzcy9nbG9iYWxWYXJpYWJsZTIuc2Nzc1wiOydcbiAgICAgICAgICovXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIkAvYXNzZXRzL3N0eWxlcy9jb25maWcuc2Nzc1wiOydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBpc1NwcmluZygpID8gJy4uL2Jsb3Nzb20tYmFja2VuZC9iYWNrZW5kL3NyYy9tYWluL3Jlc291cmNlcy9zdGF0aWMvYmxvZycgOiAnZGlzdCcsXG4gICAgLy8gXHU4QjY2XHU1NDRBXHU1OTI3XHU1QzBGLCBcdTUzNTVcdTRGNERrYlxuICAgIC8vIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkLnRvU3RyaW5nKCkuc3BsaXQoJ25vZGVfbW9kdWxlcy8nKVsxXS5zcGxpdCgnLycpWzBdLnRvU3RyaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRTLFNBQVMsZUFBZSxXQUFXO0FBRS9VLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFHbkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUyxlQUFlO0FBWmlLLElBQU0sMkNBQTJDO0FBYzFPLElBQU0sc0JBQXNCLFFBQVEsSUFBSTtBQUV4QyxJQUFNLFdBQVcsTUFBTTtBQUNyQixTQUFPLHVCQUF1Qix3QkFBd0I7QUFDeEQ7QUFFQSxRQUFRLElBQUksMENBQVksbUJBQW1CO0FBRzNDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFFBQVEsUUFBUSxLQUFLO0FBQUEsRUFDckIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBO0FBQUEsTUFFTCxLQUFLO0FBQUEsUUFDSCxRQUFRO0FBQUE7QUFBQSxRQUVSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBO0FBQUEsTUFDVixNQUFNO0FBQUE7QUFBQSxJQUNSLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBO0FBQUEsSUFFWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRLFNBQVMsSUFBSSw4REFBOEQ7QUFBQTtBQUFBO0FBQUEsSUFHbkYsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPLEdBQUcsU0FBUyxFQUFFLE1BQU0sZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUFBLFVBQ3hFO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
