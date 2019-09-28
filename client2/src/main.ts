import Vue from 'vue';
import './plugins/axios'
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:20002/api/crudrtne/';

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
