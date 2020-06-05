/*
 * @Author: tim
 * @Date: 2020-06-04 10:07:48
 * @LastEditors: tim
 * @LastEditTime: 2020-06-04 10:16:11
 * @Description:
 */

const Vue = require("vue");
const vueRouter = require("vue-router");

Vue.use(vueRouter);

module.exports = () => {
  return new vueRouter({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: {
          template: `<h1>this is home page</h1>`,
        },
      },
      {
        path: "/about",
        name: "about",
        component: {
          template: `<h1>this is about page</h1>`,
        },
      },
    ],
  });
};
