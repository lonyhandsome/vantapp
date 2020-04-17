<style>
.info {
  margin-top: 10vh;
}
.img {
  margin-top: 2vh;
}
.backTo {
  text-align: left;
  margin-top: 2vh;
}
.van-icon {
  float: left;
  margin-top: 0.5vh;
}
</style>
<template>
  <div>
    <div class="backTo" v-on:click="back">
      <van-icon name="arrow-left" />
      <span>返回</span>
    </div>
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587034921252&di=2d936bac128170becd4add57811d4f5b&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fys_bnew_img%2F00%2F32%2F68%2FxOz4WR9vaU.jpg"
      width="100%"
      style=" marginTop: 2vh"
    />
    <div class="info">{{this.objectId}}</div>
   
  </div>
</template>
  <script>
export default {
  data() {
    return {
      isShow: true,
      objectId: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    this.objectId = this.$route.params.objectId;
    console.log("我们接收的参数为:" + this.$route.params.objectId);
  }
};
</script>