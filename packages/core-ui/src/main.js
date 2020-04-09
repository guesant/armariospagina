import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
