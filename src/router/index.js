/**
 * 路由对象模块
 * **/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
	//所有路由
	routes:[
		{
			path:'/msite',
			component:Msite,
			meta:{
				shopFooter:true
			}
		},
		{
			path:'/order',
			component:Order,
			meta:{
				shopFooter:true
			}
		},
		{
			path:'/profile',
			component:Profile,
			meta:{
				shopFooter:true
			}
		},
		{
			path:'/search',
			component:Search,
			meta:{
				shopFooter:true
			}
		},
		{
			path:'/login',
			component:Login
		},
		//默认显示的
		{
			path:'/',
			redirect:'/msite'
		}
	]
})











