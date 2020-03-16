<template>
  <div class="cartcontrol">
    <transition>
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decCart"></div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{this.food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    food: {
      type: Object
    }
  },
  created() {},
  methods: {
    addCart() {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    },
    decCart() {
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="stylus">
.cartcontrol {
  font-size: 0;

  .cart-decrease, .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .v-enter-active, .v-leave-active {
    transition: all 0.4s linear;
  }

  .v-enter-to, .v-leave {
    opacity: 1;
    transform: translateX(0px) rotate(-180deg);
  }

  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translateX(24px) rotate(180deg);
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .cart-add {
    display: inline-block;
    line-height: 24px;
    font-size: 24px;
  }
}
</style>