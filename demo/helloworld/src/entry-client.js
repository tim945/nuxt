/*
 * @Author: tim
 * @Date: 2020-06-03 11:22:38
 * @LastEditors: tim
 * @LastEditTime: 2020-06-03 16:47:40
 * @Description: 客户端 entry 只需创建应用程序，并且将其挂载到 DOM 中
 */ 
import { createApp } from './app'

// 客户端特定引导逻辑……

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// 要在挂载 app 之前调用 router.onReady，
// 因为路由器必须要提前解析路由配置中的异步组件，才能正确地调用组件中可能存在的路由钩子
router.onReady(() => {
  // 1.在路由导航之前解析数据
  // 添加路由钩子函数，用于处理 asyncData.
  // 在初始路由 resolve 后执行，
  // 以便我们不会二次预取(double-fetch)已有的数据。
  // 使用 `router.beforeResolve()`，以便确保所有异步组件都 resolve。
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    // 我们只关心非预渲染的组件
    // 所以我们对比它们，找出两个匹配列表的差异组件
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })

    if (!activated.length) {
      return next()
    }

    // 这里如果有加载指示器 (loading indicator)，就触发
    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to })
      }
    })).then(() => {
      // 停止加载指示器(loading indicator)
      next()
    }).catch(next)
  }) // end router.beforeResolve

  app.$mount('#app')
})