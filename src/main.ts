import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from '@/router';
import 'tailwindcss/tailwind.css';
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css';
import i18n from './ i18n';

import 'github-markdown-css/github-markdown.css';
import hljs from 'highlight.js';
// 如果开启了typescript 需要额外安装 npm install @types/highlight.js

// 创建vue实例
const app = createApp(App);
// 挂载pinia
app.use(store);
// 使用i18n
app.use(i18n);
// 使用router
app.use(router);

// 封装指令
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block);
    });
});
// 挂载实例
app.mount('#app');
