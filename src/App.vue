<template>
  <div id="app">
    <Top :seller="seller" />
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from "./components/header/top.vue";
const ERR_OK = 0;

export default {
  name: "app",
  components: {
    Top
  },
  data: function() {
    return {
      seller: {}
    };
  },
  created() {
    //使用vue-resource在vue实例的方法中发送http请求
    this.$http.get("/seller").then(res => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.seller = res.data;
      }
    });
  },
  mounted: function() {
    //使用axios在vue实例的方法中发送http请求
    this.axios.get("/data/test.json").then(res => {
      console.log("test" + res);
    });
  }
};
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl';

#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    // border-border-bottom 1px solid rgba(7, 17, 27, 0.1)
    // 解决移动端一像素的问题,借助media query
    border-1px(rgba(7, 17, 27, 0.1));

    .tab-item {
      flex: 1;
      text-align: center;

      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);

        &.active {
          color: #f01414;
        }
      }
    }
  }
}
</style>
