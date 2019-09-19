import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'

Vue.config.productionTip = false;
Vue.prototype.axios = Axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
