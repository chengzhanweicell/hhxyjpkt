import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(Viewer);
Vue.config.productionTip = false

new Vue({
  Viewer,
  router,
  render: h => h(App)
}).$mount('#app')
