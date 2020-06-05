import Vue from "vue";
import vueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import About from "@/components/About";

Vue.use(vueRouter);
export default () => {
  return new vueRouter({
    mode:"history", // 预渲染须为 history 模式
    routes:[
      {
        path:"/",
        // component:HelloWorld,
        component:() => import("@/components/HelloWorld"),
        name:"HelloWorld"
      },
      {
        path:"/about",
        // component:About,
        component:() => import("@/components/About"),
        name:"About"
      }
    ]
  })
}