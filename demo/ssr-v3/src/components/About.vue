<template>
  <div>
    <h1>About</h1>
    <div><span v-show="isShow">{{ msg }}</span> <buttton @click="change">CHANGE</buttton>  </div>  
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'My Example App', // set a title
      meta: [{                 // set meta
        name: 'keyWords',
        content: 'My Example App'
      }]
    },
    data() {
      return {
        isShow: false,
        msg: '预渲染页面'
      }
    },
    methods: {
      change() {
        this.isShow = ! this.isShow
      }
    }
  }
</script>

<style>

</style>