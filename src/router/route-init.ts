import router from '@/router'

// import Index from '@/views/Index.vue'
// import Home from '@/views/index/Home.vue'

// components
const NotFound = () => import('@/components/NotFound.vue')

// 前端页面
const Index = () => import('../views/Index.vue')
const Home = () => import('../views/index/Home.vue')
const Library = () => import('../views/resource/Library.vue')
const Collection = () => import('../views/resource/Collection.vue')
const MgtLibrary = () => import('../views/resource/MgtLibrary.vue')
const Resource = () => import('../views/resource/Resource.vue')
const Links = () => import('../views/link/Links.vue')
const Login = () => import('@/views/index/Login.vue')
const Articles = () => import('@/views/article/Articles.vue')
const TodoIndex = () => import('@/views/todo/TodoIndex.vue')
const PlanIndex = () => import('@/views/plan/PlanIndex.vue')
const NoteIndex = () => import('@/views/note/NoteIndex.vue')

// 管理后台
const Admin = () => import('../views/Admin.vue')

// 编辑页面
const Manage = () => import('../views/Manage.vue')

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
    { path: '/links', name: 'Links', component: Links, meta: { keepAlive: true } },
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
  redirect: '/collection',
  name: 'Admin',
  component: Admin,
  meta: { keepAlive: true },
  children: [
    { path: '/collection', name: 'Collection', component: Collection, meta: { keepAlive: true } },
    { path: '/library', name: 'Library', component: Library, meta: { keepAlive: true } },
  ]
})

router.addRoute({
  path: '/manage',
  redirect: '/mgtLibrary',
  name: 'Manage',
  component: Manage,
  meta: { keepAlive: true },
  children: [
    { path: '/mgtLibrary/:id', name: 'MgtLibrary', component: MgtLibrary, meta: { keepAlive: true } },
  ]
})