# vue-ssr

代码fork自: [https://github.com/zenghao1998/vue-ssr/tree/main](https://github.com/zenghao1998/vue-ssr/tree/main)

```sh
yarn
# 启动
yarn build:serve
```

访问: <http://localhost:8081/hello_world>

注意 `<!--vue-ssr-outlet-->` 注释 -- 这里将是应用程序 HTML 标记注入的地方。

## 什么是SSR

## 为什么要有SSR

## 简易版Vue SSR

从 hello world 开始

```sh
yarn base:dev
```

<http://127.0.0.1:8082/hello_world>

## 项目版Vue SSR

<http://127.0.0.1:8011/>

## Nuxt

## 编写通用代码

[编写通用代码](https://ssr.vuejs.org/zh/guide/universal.html#%E7%BC%96%E5%86%99%E9%80%9A%E7%94%A8%E4%BB%A3%E7%A0%81)

- 将数据进行响应式的过程在服务器上是多余的，所以默认情况下禁用。
- beforeCreate 和 created 会在服务器端渲染 (SSR) 过程中被调用。
- 通用代码不可接受特定平台的 API，因此如果你的代码中，直接使用了像 window 或 document，这种仅浏览器可用的全局变量，则会在 Node.js 中执行时抛出错误，反之也是如此。
