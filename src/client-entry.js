import { createApp } from './app.js';
const { app, store, router } = createApp();
//客户端激活时替换state状态
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
};

// onReady 保证异步组件加载完成后, 再 mount
router.onReady(() => {
  app.$mount('#app')
})