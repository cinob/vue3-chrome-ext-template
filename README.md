# vue3-chrome-ext-template
Vue3 Chrome Extension Template
Vue3 谷歌插件开发模板

## 参考文章链接

- [ 谷歌插件开发文档 ](https://developer.chrome.com/docs/extensions/mv3/ "谷歌插件开发文档")
- [【干货】Chrome插件(扩展)开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html "【干货】Chrome插件(扩展)开发全攻略")

## Let's go
  ### 下载[vue3-chrome-ext-template](https://github.com/cinob/vue3-chrome-ext-template "vue3-chrome-ext-template")模板
  ```bash
  // 纯净模板
  npx degit cinob/vue3-chrome-ext-template your-program
  // or 克隆代码
  git clone https://github.com/cinob/vue3-chrome-ext-template.git
  ```
  
  ### 进入项目目录，安装依赖包
  
  ```bash
  pnpm install
  ```
  
  ### 启动项目
  
  ```bash
  pnpm dev
  ```
  
  ### 目录结构

  ```bash
  ├─pages
    ├─background  // 常驻后台的插件脚本
    ├─content     // 注入页面的脚本 (可以获取页面dom...)
    ├─options     // 插件的配置页
    └─popup       // 点击右上角插件图标展示的页面
  ├─manifest.json // 谷歌插件配置文件
  ```

  ### 运行到谷歌浏览器
  
 - 点击谷歌浏览器右上角三个点 -> 更多工具 -> 扩展程序 -> 打开右上角开发者模式 -> 加载已解压的扩展程序 -> 选择我们项目目录下dist文件夹 -> 启用插件并更新插件列表
  
 - 此时浏览器右上角插件列表已经成功加载出我们名为`vue3-chrome-ext`的插件

