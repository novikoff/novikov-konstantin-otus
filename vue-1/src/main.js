import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSlider from "vue-slider-component";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('vue-slider', VueSlider)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
