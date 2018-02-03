import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 异步加载组件
const Home  = r => require.ensure([],() => r(require('../page/home/home')),'home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },{
      path:'/',
      redirect:'/home'
    },{
      path:'/home',
      name:'home',
      component:Home
    }
  ]
})
