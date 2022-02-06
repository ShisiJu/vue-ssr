import { createApp } from './app.js';
export default function (context) {
    //这个方法服务端渲染会调用
    return new Promise((resolve, reject) => {
        // 为每一个请求, 创建单例的Vue对象
        const { app, store, router } = createApp();
        //服务端跳转页面
        router.push(context.url);
        //服务端跳转页面完成
        router.onReady(() => {
            //获取页面级组件
            const matchedComponents = router.getMatchedComponents();
            console.log(matchedComponents)
            console.log(context.url)
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            //对所有匹配的路由组件调用 `asyncData()`
            //拿到页面组件上的asyncData调用
            Promise.all(matchedComponents.map(Component => {
                if (Component.asyncData) {
                    return Component.asyncData({
                        store,
                    })
                }
            })).then(() => {
                // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
                context.state = store.state
                resolve(app)
            })
        })
    })
};