// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Util from './libs/util'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import VueAMap from 'vue-amap';

Vue.use(Vant);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '14b417b5387b51f415f98494c7d8c740',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.15',
});
Vue.prototype.$axios = axios

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();
  
  Util.title(to.meta.title);
  next();
});

router.afterEach(() => {
  // iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
