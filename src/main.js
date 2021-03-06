import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
