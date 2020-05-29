import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import moment from 'vue-moment';
import VueSlider from "vue-slider-component";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(moment);

Vue.component('vue-slider', VueSlider)
Vue.prototype.$eventBus = new Vue();
new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
  }
}).$mount('#app')
