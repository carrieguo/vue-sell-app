<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price">aa</div>
        <div class="desc">bb</div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;

  .content {
    display: flex;
    background: #141d27;
    font-size: 0;

    .content-left {
      flex: 1;

      .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: #141d27;

        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #2b343c;
          text-align: center;

          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;
          }
        }
      }

      .price {
        display: inline-block;
        vertical-align: top;
        // 使用margin-top和line-height,而不是单纯设置line-height,使price垂直居中，避免border-right撑起整个高度
        margin-top: 12px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.4);
      }

      .desc {
        display: inline-block;
        vertical-align: top;
        margin: 12px 0 0 12px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.4);
        font-size: 10px;
      }
    }

    .content-right {
      flex: 0 0 105px;
      width: 105px;
    }
  }
}
</style>