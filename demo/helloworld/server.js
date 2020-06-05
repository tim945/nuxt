/*
 * @Author: tim
 * @Date: 2020-06-03 14:09:57
 * @LastEditors: tim
 * @LastEditTime: 2020-06-03 14:09:58
 * @Description: 
 */ 
const createApp = require('/path/to/built-server-bundle.js')

server.get('*', (req, res) => {
  const context = { url: req.url }

  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
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
})