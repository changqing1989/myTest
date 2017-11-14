// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './router/router.js';

// import router from './router'
Vue.use(VueRouter);
Vue.config.productionTip = true

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})*/
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  // mode: 'history',
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  methods:{

  },
  created:function(){
  },
  mounted(){
    console.log("ddd");
  }
}).$mount('#app')
