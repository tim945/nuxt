<!--
 * @Author: tim
 * @Date: 2020-06-10 16:43:19
 * @LastEditors: tim
 * @LastEditTime: 2020-06-10 17:15:54
 * @Description: 
--> 

<template>
  <div class="container">
    <ul>
      <li><nuxt-link to="/">首页</nuxt-link></li>
      <li><nuxt-link to="/about">关于我们</nuxt-link></li>
      <li><nuxt-link to="/about/hello">Hello</nuxt-link></li>
    </ul>
  </div>
</template>

<style scoped>
/** 该样式在引入的页面也会被影响？？？  */
.container {
  min-height: auto !important;
}
</style>