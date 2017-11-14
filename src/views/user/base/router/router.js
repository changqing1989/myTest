// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Register = resolve => {
    require.ensure(['../login/login.vue'], () => {
          console.log("dddddd");
          alert("ddddddd");
        resolve(require('../login/login.vue'));
    });
};
const My = resolve => {
  require.ensure(['../my/login.vue'], () => {
    console.log("my");
    alert("每月");
    resolve(require('../my/login.vue'));
  });
};

const routers = [{
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresAuth: true}
},{
  path: '/login',
  name: 'my',
  component: My,
  meta: { requiresAuth: true}
},
 {
    path: '*',
    component: Register
}];

export default routers;
