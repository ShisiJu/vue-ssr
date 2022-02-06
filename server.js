const fs = require('fs');
const path = require('path');
const express = require('express');
const server = express();
server.use(express.static('dist'));
//获取到服务端vue代码
const template = fs.readFileSync(path.resolve(__dirname, './src/index.template.html'), 'utf-8');
// const clientManifest = path.resolve(__dirname, './dist/vue-ssr-client-manifest.json');
const serverBundle = path.resolve(__dirname, './dist/vue-ssr-server-bundle.json');
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
  // 服务端渲染数据
  template,
  runInNewContext: false // 推荐
});
server.get('*', (req, res) => {
  const context = { url: req.url };
  if (req.url !== '/favicon.ico') {
    renderer
      .renderToString(context)
      .then((html) => {
        res.end(html);
      })
      .catch((error) => {
        if (error.code == 404) {
          res.writeHead(404, {
            'content-type': 'text/html;charset=utf8'
          });
          res.end('找不到页面');
        }
      });
  }
});
server.listen(8011, () => {
  console.log('http://127.0.0.1:8011');
});
