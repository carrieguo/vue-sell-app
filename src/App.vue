<template>
  <div id="app">
    <Top />
    <div class="tab">
      <div class="tab-item"><router-link active-class="active" to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link active-class="active" to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link active-class="active" to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/header/top.vue'

export default {
  name: 'app',
  components: {
    Top
  },
  mounted: function(){
    this.axios.get('/data/test.json').then(res => {
      console.log(res);
    });
  }
}
</script>

<style lang="stylus">
  #app
    .tab
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      .tab-item
        flex: 1;
        text-align: center;
        & > a
          display:block;
          font-size : 14px;
          color : rgb(77, 85, 93);
          &.active
            color : #f01414;
</style>
