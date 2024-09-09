import router from '@/router'

// import Index from '@/views/Index.vue'
// import Home from '@/views/index/Home.vue'

// components
const NotFound = () => import('@/components/NotFound.vue')

// 前端页面
const Index = () => import('../views/Index.vue')
const Home = () => import('../views/index/Home.vue')
const Library2 = () => import('../views/index/Library2.vue')
const Resource = () => import('../views/index/Resource.vue')
const GrayLink = () => import('../views/index/GrayLink.vue')
const Login = () => import('@/views/index/Login.vue')
const Articles = () => import('@/views/article/Articles.vue')
const TodoIndex = () => import('@/views/todo/TodoIndex.vue')
const PlanIndex = () => import('@/views/plan/PlanIndex.vue')
const NoteIndex = () => import('@/views/note/NoteIndex.vue')

// 管理后台
const Admin = () => import('../views/Admin.vue')

router.addRoute({ path: '/404', component: NotFound })
router.addRoute({ path: '/:pathMatch(.*)', redirect: '/404' })
router.addRoute({ path: '/', redirect: '/home' })
router.addRoute({
  path: '/',
  name: 'Index',
  component: Index,
  meta: { keepAlive: true },
  children: [
    { path: '/home', name: 'Home', component: Home, meta: { keepAlive: true } },
    { path: '/links', name: 'Links', component: GrayLink, meta: { keepAlive: true } },
    { path: '/login', name: 'Login', component: Login, meta: { keepAlive: true } },
    { path: '/articles', name: 'Articles', component: Articles, meta: { keepAlive: true } },
    { path: '/resource', name: 'Resource', component: Resource, meta: { keepAlive: true } },
    { path: '/todo', name: 'TodoIndex', component: TodoIndex, meta: { keepAlive: true } },
    { path: '/plan', name: 'PlanIndex', component: PlanIndex, meta: { keepAlive: false } },
    { path: '/note', name: 'NoteIndex', component: NoteIndex, meta: { keepAlive: false } }
  ]
})
router.addRoute({
  path: '/admin',
  redirect: '/library2',
  name: 'Admin',
  component: Admin,
  meta: { keepAlive: true },
  children: [
    { path: '/library2', name: 'Library2', component: Library2, meta: { keepAlive: true } },
  ]
})