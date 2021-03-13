import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path:"childone",
        name:"Childone",
        component:()=> import('../views/Child1.vue')
      },
      {
        path:"childtwo",
        name:"ChildTwo",
        component:()=> import('../views/Child2.vue')
      }
    ]
  },
  {
    path:'/page',
    name:'Page',
    component:() => import('../views/Page.vue'),/* 路由守卫 to 到哪去 from 从哪来 next（） 允许进 */
    beforeEnter: (to, from, next) =>{
      console.log(to,from,next);
      next();
    }
  },
  {
    path:'/pagetwo',
    name:'PageTwo',
    alias:"/detail",
    component:() =>import('../views/Page2.vue')
  },
  {
    path:'/pagethird/:username',
    name:'PageThird',
    component:() =>import('../views/Page3.vue')
  },
  {
    path:'/redirect/:username',
    redirect:'/pagethird/:username'
  },
  {
    path:"/pagefour",
    name:"Pagefour",
    component:() =>import("../views/Page4.vue")
  },
  {
    path:"/pagefive",
    name:"Pagefive",
    component:() =>import("../views/Page5.vue")
  },
  {
    path:'*',
    component:() =>import('../views/Error.vue')
  },
  {
    path:'/pagesix',
    name:'Pagesix',
    component:() =>import('../views/Page6.vue')
  },
  {
    path:'/tvdetail/:id',
    name:'TVDetail',
    component:() =>import('../views/Detail.vue')
  },
  {
    path:'/echarts',
    name:'Echarts',
    component:() =>import('../views/Echarts.vue')
  },
  {
    path:'/baidu',
    name:'Baidu',
    component:() =>import('../views/Baidu.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
