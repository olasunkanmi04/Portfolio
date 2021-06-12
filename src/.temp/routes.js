const c1 = () => import(/* webpackChunkName: "page--src--pages--project-detail-vue" */ "/Users/mac/OneDrive/New Resume/portfolio/src/pages/project-detail.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mac/OneDrive/New Resume/portfolio/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mac/OneDrive/New Resume/portfolio/src/pages/Index.vue")

export default [
  {
    path: "/project-detail/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
