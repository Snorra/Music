// main.js

// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

// 导入 vue-router，并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(iView)

// 导入 pages 下的 Home.vue
import Login from './pages/Login'
//import courseDetail from './pages/courseDetail'
import courseDetail1 from './pages/courseDetail1'
//import courseList from './pages/courseList'
import homePage from './pages/homePage'
import myCourseDetail from './pages/myCourseDetail'
import myCourseList from './pages/myCourseList'
import myCourseList1 from './pages/myCourseList1'
import buyCourse from './pages/buyCourse'
import successPayment from './pages/successPayment'
import My from './pages/my'
import newsPage from './pages/newsPage.vue'
import subjectClassification from './pages/subjectClassification.vue'
import courseIntroductionPiano from './pages/courseIntroductionPiano.vue'
import activityPage from './pages/activityPage.vue'
import academicPage from './pages/academicPage.vue'
// 定义路由配置
const routes = [
  {
    path: '/',
    component: Login
  },
  /*{
    path: '/courseDetail',
    component: courseDetail
  },*/
  {
    path: '/courseDetail1',
    component: courseDetail1
  },
  /*{
    path: '/courseList',
    component: courseList
  },*/
  {
    path: '/homePage',
    component: homePage
  },
  {
    path: '/myCourseDetail',
    component: myCourseDetail
  },
  {
    path: '/myCourseList',
    component: myCourseList
  },
  {
    path: '/myCourseList1',
    component: myCourseList1
  },
  {
    path: '/buyCourse',
    component: buyCourse
  },
  {
    path: '/successPayment',
    component: successPayment
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/newsPage',
    component: newsPage
  },
  {
    path: '/subjectClassification',
    component: subjectClassification
  },
  {
    path: '/courseIntroductionPiano',
    component: courseIntroductionPiano
  },
  {
    path:'/activityPage',
    component:activityPage
  },
  {
    path:'/academicPage',
    component:academicPage
  }

]

// 创建路由实例
const router = new VueRouter({
  routes
})

// 创建 Vue 实例
new Vue({
  el: '#app',
  data(){
  return {
    transitionName: 'slide'
  }
},
router, // 在vue实例配置中，用router
  watch: {
  // 监视路由，参数为要目标路由和当前页面的路由
  '$route' (to, from){
    const toDepth = to.path.substring(0, to.path.length-9).split('/').length
    // 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'
    // 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥
    // 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教
    const fromDepth = from.path.substring(0, from.path.length-9).split('/').length

    this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
    // 根据路由深度，来判断是该从右侧进入还是该从左侧进入
  }
}
})
