const Vue = require('vue');
const server = require('express')();
// 读取模板
// 注意 <!--vue-ssr-outlet--> 注释 -- 这里将是应用程序 HTML 标记注入的地方

const template = require('fs').readFileSync(__dirname + '/base_index.template.html', 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
  template,
});

const context = {
    title: 'vue ssr',
    metas: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `,
};

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`,
  });

  // 通过传入一个"渲染上下文对象"，作为 renderToString 函数的第二个参数，来提供插值数据：
  renderer
  .renderToString(app, context, (err, html) => {
    console.log(html);
    if (err) {
      res.status(500).end(`Internal Server Error ${err.message}`)
      return;
    }
    res.end(html);
  });
})

server.listen(8082);
