<template>
  <van-sticky>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>广告位出租</van-swipe-item>
      <van-swipe-item>广告位出租</van-swipe-item>
      <van-swipe-item>广告位出租</van-swipe-item>
      <van-swipe-item>广告位出租</van-swipe-item>
    </van-swipe>
  </van-sticky>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swipe .van-swipe-item {
  margin-top: 1vh;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: gray;
}
</style>
