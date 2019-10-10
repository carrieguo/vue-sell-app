import Vue from 'vue'
import App from './App.vue'
import router from './router'

//使用vue-resource或axios发送http请求
import VueResource from 'vue-resource'
Vue.use(VueResource)
//使用axios在vue实例的方法中发送http请求
import Axios from 'axios'
Vue.prototype.axios = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
