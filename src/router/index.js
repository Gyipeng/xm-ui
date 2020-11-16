import Vue from 'vue'
import Router from 'vue-router'
import {routerConfig} from './router-config'

Vue.use(Router)

let routes = []

Object.keys(routerConfig).forEach((header) => {
  routes = routes.concat(routerConfig[header])
})

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {

        route.component = r => require.ensure([], () =>
          r(require(`../pages/${route.name}.vue`)))
        return
      }
      route.component = r => require.ensure([], () =>
        r(require(`../docs/${route.name}.md`)))
    }
  })
}
addComponent(routes)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    // return 期望滚动到哪个的位置
  },
  routes
})
