<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}</span>
        <i class="icon icon-arrow_lift"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  props: {
    seller: Object,
  },
  created(){
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
}
</script>

<style lang="stylus">
  @import "../../common/stylus/mixin";
  @import "../../common/stylus/font.styl"

  .header
    color: #fff;
    background: #000;
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar
        display: inline-block;
        vertical-align: top;
        img
          border-radius: 2px;
      .content
        display: inline-block;
        margin-left: 16px;
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            bg-image('brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          .name
            padding-left: 10px;
            font-size: 14px;
        .description
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        .support
          .icon
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease
              bg-image('decrease_1');
            &.discount
              bg-image('discount_1');
            &.guarantee
              bg-image('guarantee_1');
            &.invoice
              bg-image('invoice_1');
            &.special
              bg-image('special_1');
          .text
              line-height: 12px;
              font-size: 10px;

      .support-count
        position: absolute
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        //border-radis: 14px;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
        .count 
          font-size: 10px;
        .icon 
          font-size: 10px;
        .icon:before
          content: "\e909"
</style>