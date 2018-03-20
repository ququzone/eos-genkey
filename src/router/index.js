import Vue from 'vue'
import Router from 'vue-router'
import Generate from '@/components/Generate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Generate',
      component: Generate
    }
  ]
})
