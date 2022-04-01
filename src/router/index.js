
import HomePage from '@/pages/HomePage'
import CategoryPage from '@/pages/CategoryPage'
import ForumShow from '@/pages/ForumShow'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'
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
    props: true // set component parameters as a component prop
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
    props: true,
    beforeEnter(to, from, next) {
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      if (threadExists) {
        next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
