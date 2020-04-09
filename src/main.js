import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false;

import './assets/css/reset.css';

import 'swiper/dist/css/swiper.css';

Vue.use(vueSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
