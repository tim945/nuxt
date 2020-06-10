<!--
 * @Author: tim
 * @Date: 2020-06-10 17:37:07
 * @LastEditors: tim
 * @LastEditTime: 2020-06-10 17:41:08
 * @Description: 
--> 
<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // 你可以为错误页面指定自定义的布局
}
</script>