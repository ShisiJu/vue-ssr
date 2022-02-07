# vue-ssr

代码fork自: [https://github.com/zenghao1998/vue-ssr/tree/main](https://github.com/zenghao1998/vue-ssr/tree/main)

## 什么是服务器端渲染 (SSR)？

服务端拼装好 HTML字符串, 返回给浏览器.

传统的模板渲染的方式是: java的JSP, Ruby的ERB等.

```html
<!-- ruby的ERB 模板渲染 -->
<ul>
  <% for  @item in @items -%>
    <li> <%= @item %> </li>
  <% end  -%>
</ul>
```

但是, 传统的方式需要学习新的后端语言, 而且集成前端框架并不方便.

因此, Vue也提供了解决方案.
我们可以使用nodejs来实现服务端渲染. 将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器.

服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。

## 为什么使用服务器端渲染 (SSR)？

与传统 SPA (单页应用程序 (Single-Page Application)) 相比，服务器端渲染 (SSR) 的优势主要在于：

- 更好的 SEO
- 更快的内容到达时间 (time-to-content)

使用服务器端渲染 (SSR) 时还需要有一些权衡之处：

- 开发条件所限。浏览器特定的代码，只能在某些生命周期钩子函数 (lifecycle hook) 中使用；一些外部扩展库 (external library) 可能需要特殊处理，才能在服务器渲染应用程序中运行。
- 涉及构建设置和部署的更多要求。与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。
- 更多的服务器端负载。

在对你的应用程序使用服务器端渲染 (SSR) 之前，你应该问的第一个问题是，**是否真的需要它**。

这主要取决于内容到达时间 (time-to-content) 对应用程序的重要程度。
例如，如果你正在构建一个内部仪表盘，初始加载时的额外几百毫秒并不重要，这种情况下去使用服务器端渲染 (SSR) 将是一个小题大作之举。

然而，内容到达时间 (time-to-content) 要求是绝对关键的指标，在这种情况下，服务器端渲染 (SSR) 可以帮助你实现最佳的初始加载性能。

## 简易版Vue SSR

从 hello world 开始

```sh
yarn base:dev
```

代码: base_src\base_index.js

<http://127.0.0.1:8082/hello_world>

查看网页源码, 可以看到直接返回的html内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!-- 使用双花括号(double-mustache)进行 HTML 转义插值(HTML-escaped interpolation) -->
    <title>vue ssr</title>
    <!-- 使用三花括号(triple-mustache)进行 HTML 不转义插值(non-HTML-escaped interpolation) -->
    
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    
  </head>
  <body>
    <div data-server-rendered="true">访问的 URL 是： /hello_world</div>
  </body>
</html>
```

## 项目版Vue SSR

[源码结构](https://ssr.vuejs.org/zh/guide/structure.html#%E6%BA%90%E7%A0%81%E7%BB%93%E6%9E%84)

因为: 给浏览器的代码与后端SSR代码会有重复的逻辑

例如

- 同样的router (vue-router)
- 同样的store (Vuex)

因此, 打包和组合代码时, 往往分为3个部分

- [编写通用代码](https://ssr.vuejs.org/zh/guide/universal.html#%E7%BC%96%E5%86%99%E9%80%9A%E7%94%A8%E4%BB%A3%E7%A0%81) (代码: src\app.js)
- 前端 client部分 (代码: src\client-entry.js)
  - 适配不同的浏览器
  - 分割文件, 减少文件大小
- 后端 server部分 (代码: src\server-entry.js)
  - 前端每次路由跳转, 后端都是重新生成一份HTML
  - asyncData 获取数据, 客户端激活

```sh
yarn build:serve
```

<http://127.0.0.1:8011/>

## Nuxt

通过[NuxtJS](https://nuxtjs.org/docs/get-started/installation)构建服务端端渲染, 会方便很多.

Nuxt.js 提供了开箱即用的全面支持，并帮你规避常见的陷阱。

## 参考

- [Vue.js 服务器端渲染指南](https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)
