<style scoped>
.amap-wrapper {
  margin-top: 5vh;
  width: 100vw;
  height: 40vh;
}
#top {
  float: left;
  text-align: left;
}
#title {
  float: left;
  margin-left: 30vw;
  margin-top: 3vh;
}
.van-icon {
  margin-top: 3vh;
  margin-bottom: 3vh;
  margin-left: 3.5vh;
}
.van-popup {
  width: 70vw;
  height: 100vh;
}
.clear {
  clear: both;
}

.my-swipe .van-swipe-item {
  margin-top: 1vh;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: gray;
}
</style>

<template>
  <div>
    <div id="top">
      <van-icon name="manager" size="1.3rem" @click="showPopup" />
    </div>
    <div id="title">平头速运</div>
    <div class="clear"></div>
    <van-popup v-model="show" position="left">今日</van-popup>

    <van-notice-bar text="概雷博彩,超多电子首存返水1.8起公司入款2%笔笔送" left-icon="volume-o" mode="closeable" />

    <van-tabs v-model="activeName" animated duration="0.8" type="line" swipeable>
      <van-tab title="实时订单" name="a">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>广告位出租</van-swipe-item>
          <van-swipe-item>广告位出租</van-swipe-item>
          <van-swipe-item>广告位出租</van-swipe-item>
          <van-swipe-item>广告位出租</van-swipe-item>
        </van-swipe>

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
          <van-list v-model="loading" :finished="finished" @load="onLoad">
            <van-cell v-for="item in content" :key="item.objectId">
              <div style="height:5vh" @click="checkInfo(item.objectId)">{{item.name}}</div>
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="标签 1" name="a">
        <van-empty description="描述文字" />
      </van-tab>

      <van-tab title="标签 1" name="a">
        <van-empty description="描述文字" />
      </van-tab>
      <van-tab title="标签 1" name="a">
        <van-empty description="描述文字" />
      </van-tab>
      <van-tab title="标签 1" name="a">
        <van-empty description="描述文字" />
      </van-tab>
      <van-tab title="标签 1" name="a">
        <van-empty description="描述文字" />
      </van-tab>
    </van-tabs>
    <MyBottom></MyBottom>
  </div>
</template>

<script>
import MyBottom from "../components/bottom";
import util from "../libs/util";
export default {
  components: {
    MyBottom
  },
  data() {
    return {
      activeName: "a",
      show: false,
      content: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    showPopup() {
      console.log("click");
      this.show = true;
    },
    onLoad() {
      util.get("/getCarInfo").then(res => {
        this.content = res.data.content;
        setTimeout(() => {
          this.finished = true;
          this.refreshing = false;
        }, 1000);
      });
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    checkInfo(key) {
      this.$router.push({
        name: "second", //跳转的页面
        params: {
          objectId: key //我们要传递的参数
        }
      });
    }
  },
  created() {
    util.get("/getCarInfo").then(res => {
      this.content = res.data.content;
    });
  },
  mounted() {}
};
</script>