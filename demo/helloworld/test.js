/*
 * @Author: tim
 * @Date: 2020-05-29 18:14:54
 * @LastEditors: tim
 * @LastEditTime: 2020-06-03 11:34:32
 * @Description: 
 */ 

const Vue = require('vue')
const server = require('express')()
// const renderer = require('vue-server-renderer').createRenderer()
const { createRenderer } = require('vue-server-renderer')
const createApp = require('./src/app')

server.get('*', (req, res) => {
  // const app = new Vue({
  //   data: {
  //     url: req.url
  //   },
  //   template: `<div>访问的 URL 是： {{ url }}</div>`
  // })

  // renderer.renderToString(app, (err, html) => {
  //   if (err) {
  //     res.status(500).end('Internal Server Error')
  //     return
  //   }
  //   res.end(`
  //     <!DOCTYPE html>
  //     <html lang="en">
  //       <meta charset="utf-8">
  //       <head><title>Hello</title></head>
  //       <body>${html}</body>
  //     </html>
  //   `)
  // })
  
  const context = { url: req.url }
  const app = createApp(context)

  const renderer = createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
  })

  // renderer.renderToString(app, (err, html) => {
  //   // console.log(html) // html 将是注入应用程序内容的完整页面
  //   res.end(html)
  // })

  const context2 = {
    title: 'hello-999',
    meta: `
      <meta name='test'>
    `
  }
  
  renderer.renderToString(app, context2, (err, html) => {
    // 页面 title 将会是 "Hello"
    // meta 标签也会注入
    res.end(html)
  })
  
})

server.listen(8090)
