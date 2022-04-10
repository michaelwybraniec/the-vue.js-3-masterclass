
import HomePage from '@/pages/HomePage'
import CategoryPage from '@/pages/CategoryPage'
import ForumShow from '@/pages/ForumShow'
import ThreadShow from '@/pages/ThreadShow'
import ThreadCreate from '@/pages/ThreadCreate'
import ThreadEdit from '@/pages/ThreadEdit'
import NotFound from '@/pages/NotFound'
import { createRouter, createWebHistory } from 'vue-router'
// import { findById } from '@/helpers'
// import sourceData from '@/data.json'
import ProfilePage from '@/pages/ProfilePage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/me',
    name: 'Profile',
    component: ProfilePage,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/me/edit',
    name: 'ProfileEdit',
    component: ProfilePage,
    props: { edit: true }
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: CategoryPage,
    props: true // set component parameters as a component prop
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: ForumShow,
    props: true // set component parameters as a component prop
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true
    // beforeEnter(to, from, next) {
    //   const threadExists = findById(sourceData.threads, to.params.id)
    //   if (threadExists) {
    //     next()
    //   } else {
    //     next({
    //       name: 'NotFound',
    //       params: { pathMatch: to.path.substring(1).split('/') },
    //       // preserve existing query and hash
    //       query: to.query,
    //       hash: to.hash
    //     })
    //   }
    // }
  },
  {
    path: '/forum/:forumId/thread/create',
    name: 'ThreadCreate',
    component: ThreadCreate,
    props: true
  },
  {
    path: '/thread/:id/edit',
    name: 'ThreadEdit',
    component: ThreadEdit,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  }
})
