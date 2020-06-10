<!--
 * @Author: tim
 * @Date: 2020-06-10 16:37:28
 * @LastEditors: tim
 * @LastEditTime: 2020-06-10 18:01:25
 * @Description: 
--> 
<template>
  <div class="container">
    <!-- <Menu /> -->
    {{ content }}
    <input type="text" value="11111" />
    <el-input v-model="content"  />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu
  },
  data() {
    return {
      content: 'hello world!'
    }
  }
}
</script>

<style>

</style>