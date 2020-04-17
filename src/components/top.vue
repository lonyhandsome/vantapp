<style scoped>
.van-popup {
  width: 70vw;
  height: 110vh;
}
.van-icon {
  font: left;
  margin-top: 2.5vh;
  margin-left: 3.5vw;
}
.title {
  height: 10vh;
  line-height: 8vh;
  background-color: white;
  margin-bottom: 5vh;
}
</style>
<template>
  <div>
    <van-sticky>
      <div class="title">
        <van-row>
          <van-col span="2">
            <van-icon name="manager" size="1.3rem" @click="showPopup" />
          </van-col>
          <van-col span="20">平头速运</van-col>
        </van-row>
        <van-notice-bar text="超多电子首存返水1.8起公司入款2%笔笔送" left-icon="volume-o" mode="closeable" />
      </div>
    </van-sticky>
    <van-popup v-model="show" position="left">今日</van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      show: false
    };
  },
  methods: {
    showPopup() {
      console.log("click");
      this.show = true;
    }
  }
};
</script>

<style scoped>
</style>
