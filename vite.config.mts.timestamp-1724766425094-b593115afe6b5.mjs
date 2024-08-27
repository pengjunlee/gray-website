// vite.config.mts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/pengjunlee/workspace/gray-website/node_modules/vite/dist/node/index.js";
import { visualizer } from "file:///Users/pengjunlee/workspace/gray-website/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import vue from "file:///Users/pengjunlee/workspace/gray-website/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/pengjunlee/workspace/gray-website/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import svgLoader from "file:///Users/pengjunlee/workspace/gray-website/node_modules/vite-svg-loader/index.js";
import ElementPlus from "file:///Users/pengjunlee/workspace/gray-website/node_modules/unplugin-element-plus/dist/vite.mjs";
import AutoImport from "file:///Users/pengjunlee/workspace/gray-website/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/pengjunlee/workspace/gray-website/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///Users/pengjunlee/workspace/gray-website/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///Users/pengjunlee/workspace/gray-website/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
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
        // target: "http://192.168.192.66:890",
        changeOrigin: true,
        rewrite: (path2) => path2
      }
    }
  },
  plugins: [
    vue(),
    svgLoader(),
    createSvgIconsPlugin({
      // 指定图标存放的文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定 symbolId 格式
      symbolId: "icon-[name]"
    }),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3BlbmdqdW5sZWUvd29ya3NwYWNlL2dyYXktd2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3BlbmdqdW5sZWUvd29ya3NwYWNlL2dyYXktd2Vic2l0ZS92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3BlbmdqdW5sZWUvd29ya3NwYWNlL2dyYXktd2Vic2l0ZS92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJ1xuXG4vLyBcdTRFM0EgRWxlbWVudCBQbHVzIFx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NVx1NjgzN1x1NUYwRlx1MzAwMlxuaW1wb3J0IEVsZW1lbnRQbHVzIGZyb20gJ3VucGx1Z2luLWVsZW1lbnQtcGx1cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5cbmNvbnN0IG5wbV9saWZlY3ljbGVfZXZlbnQgPSBwcm9jZXNzLmVudi5ucG1fbGlmZWN5Y2xlX2V2ZW50XG5cbmNvbnN0IGlzU3ByaW5nID0gKCkgPT4ge1xuICByZXR1cm4gbnBtX2xpZmVjeWNsZV9ldmVudCAmJiBucG1fbGlmZWN5Y2xlX2V2ZW50ID09PSAnYnVpbGQ6c3ByaW5nJ1xufVxuXG5jb25zb2xlLmxvZygnXHU1RjUzXHU1MjREXHU4RkQwXHU4ODRDXHU4MTFBXHU2NzJDOiAnLCBucG1fbGlmZWN5Y2xlX2V2ZW50KVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy4vJyxcbiAgZW52RGlyOiByZXNvbHZlKCdlbnYnKSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIHBvcnQ6IDUxNzQsXG4gICAgaG1yOiB0cnVlLFxuICAgIHByb3h5OiB7XG4gICAgICAvLyBcdTdCMkNcdTRFMDBcdTRFMkFcdTRFRTNcdTc0MDZcdTU0MEVcdTdBRUZcdTU3MzBcdTU3NDBcbiAgICAgIFwiKlwiOiB7XG4gICAgICAgIC8vIHRhcmdldDogXCJodHRwOi8vMTkyLjE2OC4xOTIuNjY6ODkwXCIsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBzdmdMb2FkZXIoKSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAvLyBcdTYzMDdcdTVCOUFcdTU2RkVcdTY4MDdcdTVCNThcdTY1M0VcdTc2ODRcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgLy8gXHU2MzA3XHU1QjlBIHN5bWJvbElkIFx1NjgzQ1x1NUYwRlxuICAgICAgc3ltYm9sSWQ6ICdpY29uLVtuYW1lXScsXG4gICAgfSksXG4gICAgdnVlSnN4KCksXG4gICAgdmlzdWFsaXplcih7XG4gICAgICBlbWl0RmlsZTogZmFsc2UsXG4gICAgICBmaWxlbmFtZTogJ3N0YXRzLmh0bWwnLCAvLyBcdTUyMDZcdTY3OTBcdTU2RkVcdTc1MUZcdTYyMTBcdTc2ODRcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgIG9wZW46IHRydWUgLy9cdTU5ODJcdTY3OUNcdTVCNThcdTU3MjhcdTY3MkNcdTU3MzBcdTY3MERcdTUyQTFcdTdBRUZcdTUzRTNcdUZGMENcdTVDMDZcdTU3MjhcdTYyNTNcdTUzMDVcdTU0MEVcdTgxRUFcdTUyQThcdTVDNTVcdTc5M0FcbiAgICB9KSxcbiAgICAvLyBFbGVtZW50UGx1cyBcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjVcdTc2ODRcdTYzRDJcdTRFRjZcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cbiAgICB9KSxcbiAgICBFbGVtZW50UGx1cyh7XG4gICAgICAvLyBvcHRpb25zXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogXHU1OTgyXHU2NzlDXHU1RjE1XHU1MTY1XHU1OTFBXHU0RTJBXHU2NTg3XHU0RUY2XHVGRjBDXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4XG4gICAgICAgICAqICdAaW1wb3J0IFwiQC9hc3NldHMvc2Nzcy9nbG9iYWxWYXJpYWJsZTEuc2Nzc1wiO1xuICAgICAgICAgKiBAaW1wb3J0XCJAL2Fzc2V0cy9zY3NzL2dsb2JhbFZhcmlhYmxlMi5zY3NzXCI7J1xuICAgICAgICAgKi9cbiAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiQC9hc3NldHMvc3R5bGVzL2NvbmZpZy5zY3NzXCI7J1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IGlzU3ByaW5nKCkgPyAnLi4vYmxvc3NvbS1iYWNrZW5kL2JhY2tlbmQvc3JjL21haW4vcmVzb3VyY2VzL3N0YXRpYy9ibG9nJyA6ICdkaXN0JyxcbiAgICAvLyBcdThCNjZcdTU0NEFcdTU5MjdcdTVDMEYsIFx1NTM1NVx1NEY0RGtiXG4gICAgLy8gY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQudG9TdHJpbmcoKS5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFMsU0FBUyxlQUFlLFdBQVc7QUFFL1UsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFHdEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsZUFBZTtBQWZpSyxJQUFNLDJDQUEyQztBQWlCMU8sSUFBTSxzQkFBc0IsUUFBUSxJQUFJO0FBRXhDLElBQU0sV0FBVyxNQUFNO0FBQ3JCLFNBQU8sdUJBQXVCLHdCQUF3QjtBQUN4RDtBQUVBLFFBQVEsSUFBSSwwQ0FBWSxtQkFBbUI7QUFHM0MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sUUFBUSxRQUFRLEtBQUs7QUFBQSxFQUNyQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUs7QUFBQTtBQUFBLFFBRUgsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDQSxVQUFTQTtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLHFCQUFxQjtBQUFBO0FBQUEsTUFFbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBO0FBQUEsTUFFMUQsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBO0FBQUEsTUFDVixNQUFNO0FBQUE7QUFBQSxJQUNSLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBO0FBQUEsSUFFWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRLFNBQVMsSUFBSSw4REFBOEQ7QUFBQTtBQUFBO0FBQUEsSUFHbkYsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPLEdBQUcsU0FBUyxFQUFFLE1BQU0sZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUFBLFVBQ3hFO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
