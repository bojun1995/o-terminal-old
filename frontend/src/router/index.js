import Vue from 'vue'
import Router from 'vue-router'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch((err) => err)
}

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
    {
      path: '*',
      redirect: '/TestPage/index'
    },
    {
      path: '/TestPage/index',
      name: 'TestPage',
      component: () => import('@/views/base/TestPage/index.vue')
    },                               
],
})
