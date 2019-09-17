<template>
  <div id="app">
    <Top />
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
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
</style>
