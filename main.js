import App from './App'
import myTab from 'components/myTab.vue'
import uView from 'uview-ui'
// 注册全局组件
Vue.component('myTab', myTab)
// 引入全局uView
Vue.use(uView)

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif