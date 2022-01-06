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

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
