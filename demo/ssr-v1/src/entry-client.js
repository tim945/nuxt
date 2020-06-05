/*
 * @Author: tim
 * @Date: 2020-06-04 10:08:33
 * @LastEditors: tim
 * @LastEditTime: 2020-06-04 10:21:16
 * @Description:
 */

const createApp = require("./app.js");
let { app, router } = createApp({});

router.onReady(() => {
  app.$mount("#app");
});
