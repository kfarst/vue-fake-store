import Vue from 'vue'
import App from '@/App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import ProductsList from '@/components/ProductsList/ProductsList.vue'
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart.vue'
import CheckoutForm from '@/components/CheckoutForm/CheckoutForm.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(PiniaVuePlugin)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { name: 'home', path: '/', component: ProductsList },
    { name: 'cart', path: '/cart', component: ShoppingCart },
    { name: 'checkout', path: '/checkout', component: CheckoutForm }
  ]
})

const pinia = createPinia()

new Vue({
  router,
  pinia,
  render: h => h(App),
}).$mount('#app')
