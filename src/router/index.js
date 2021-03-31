import Vue from 'vue'
//通过vue-router管理路由
import VueRouter from 'vue-router'
import Index from "../views/Index.vue"
// import CIndex from "../components/Index.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect:"/index"
  },
  {
    path:'/',
    name:'Index',
    component:Index,
    redirect:"/index",
    children:[
      {
        path:'index',
        name:'Index',
        component:()=>import ('../components/Index.vue')
      },
      {
        path:'jxsp',
        name:'Jxsp',
        component:()=>import ('../components/Jxsp.vue')
      },
      {
        path:'jsjj',
        name:'Jsjj',
        component:()=>import ('../components/Jsjj.vue')
      },
      {
        path:'cgzs',
        name:'Cgzs',
        component:()=>import ('../components/Cgzs.vue')
      },
      {
        path:'jqrgs',
        name:'Jqrgs',
        component:()=>import ('../components/Jqrgs.vue')
      },
      {
        path:'kjxz',
        name:'Kjxz',
        component:()=>import ('../components/Kjxz.vue')
      },
      {
        path:'jpkcsbb',
        name:'Jpkcsbb',
        component:()=>import ('../components/Jpkcsbb.vue')
      },
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
