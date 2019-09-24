import Vue from 'vue'
import VueRouter from 'vue-router'
import Ratings from './components/ratings/ratings.vue'
import Goods from './components/goods/goods.vue'
import Seller from './components/seller/seller'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/goods' },
    { path: '/goods', component: Goods },
    { path: '/ratings', component: Ratings },
    { path: '/seller', component: Seller }
];

let router = new VueRouter({
    linkActiveClass: 'active',
    routes // (缩写) 相当于 routes: routes
});
export default router;