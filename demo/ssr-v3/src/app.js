import Vue from "vue";
import MetaInfo from 'vue-meta-info';
import createRouter from "./router";
import App from "./App.vue";

Vue.use(MetaInfo)

export default (context) => {
  const router = createRouter();
  const app = new Vue({
    router,
    // components: { App },
    // template: '<App/>'
    render: h => h(App)
  });
  return {
    app,
    router
  }
}