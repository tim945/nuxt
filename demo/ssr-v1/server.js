/*
 * @Author: tim
 * @Date: 2020-06-04 09:53:01
 * @LastEditors: tim
 * @LastEditTime: 2020-06-04 11:00:20
 * @Description: 
 */ 
const express = require('express')
const app = express()
const path = require("path")
const vueApp = require('./src/entry-server.js');
const vueServerRender = require("vue-server-renderer").createRenderer({
  template:require("fs").readFileSync(path.join(__dirname,"./index.html"),"utf-8")
})

app.get('*', async (req, res) =>   {
  let { url } = req;
  let vm = await vueApp({url})

  res.status(200);
  res.setHeader("Content-type", "text/html;charset-utf-8");
  // vueServerRender.renderToString(vm).then((html) => {
  //     res.end(html);
  // }).catch(err => console.log(err))
  vueServerRender.renderToString(vm, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

app.listen(3001, () => {
  console.log('服务已开启')
})