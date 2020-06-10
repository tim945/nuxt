<!--
 * @Author: tim
 * @Date: 2020-06-10 16:40:27
 * @LastEditors: tim
 * @LastEditTime: 2020-06-10 16:48:42
 * @Description: 
--> 
<template>
  <div class="container">
    <!-- <Menu /> -->
    {{ content }}
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
      content: 'about us'
    }
  }
}
</script>

<style>

</style>