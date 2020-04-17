<template>
  <van-tabbar v-model="active">
    <van-tabbar-item replace to="/" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/map" icon="search">标签</van-tabbar-item>
    <van-tabbar-item replace to="/" icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/" icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
          active: 0,
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
