/*
 * @Author: tim
 * @Date: 2020-06-04 10:08:43
 * @LastEditors: tim
 * @LastEditTime: 2020-06-04 13:53:08
 * @Description:
 */

const createApp = require("./app.js");

const getData = function(){
  return new Promise((reslove, reject) => {
    let str = 'this is a async data!';
    reslove(str);
  })
}

module.exports = (context) => {
  return new Promise(async (reslove, reject) => {
    let { url } = context;

    // 数据传递
    context.propsData = 'this is a data from props!'

    context.asyncData = await getData();

    let { app, router } = createApp(context); // 初始化vue
    router.push(url);
    //  router回调函数
    //  当所有异步请求完成之后就会触发
    router.onReady(() => {
      let matchedComponents = router.getMatchedComponents();
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        // return reject({ code: 404 });
        return;
      }

      // 对所有匹配的路由组件调用 `asyncData()`
      /* Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        // 在所有预取钩子(preFetch hook) resolve 后，
        // 我们的 store 现在已经填充入渲染应用程序所需的状态。
        // 当我们将状态附加到上下文，
        // 并且 `template` 选项用于 renderer 时，
        // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
        context.state = store.state

        resolve(app)
      }).catch(reject) */

      reslove(app);
    }, reject);
  })
};
