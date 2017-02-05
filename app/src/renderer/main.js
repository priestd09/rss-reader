require('dotenv').config();
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Electron from 'vue-electron';
import Router from 'vue-router';
import axios from 'axios';

import App from './App';
import routes from './routes';

Vue.use(Electron);
Vue.use(ElementUI);
Vue.use(Router);
Vue.config.debug = true;
Vue.prototype.$http = axios;

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  ...App,
}).$mount('#app');
