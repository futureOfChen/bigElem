// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../src/common/style/reset.css'
import router from './router'
import store from './store'
import './common/js/rem'
import FastClick from 'fastclick'

//  使用 Fastclick 解决移动端的点击延迟问题 
if( 'addEventListener' in document) {
  document.addEventListener('DOMContentLoaded',function() {
    FastClick.attach(document.body);
  },false);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
