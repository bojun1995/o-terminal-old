import Vue from 'vue'
import App from './App'
import router from './router'

import { VueAxios } from './utils/request'
Vue.use(VueAxios)

// 全局注入IPC
import IpcRenderer from '@/utils/ipcRenderer'
Vue.use(IpcRenderer)

// style
import '@/styles/index.scss'

// vuex
import store from './store'
Vue.prototype.$store = store

// tool
import tool from './tool'
Vue.prototype.$tool = tool


Vue.config.productionTip = false

new Vue({
	router,
  store,
	render: (h) => h(App),
}).$mount('#app')
