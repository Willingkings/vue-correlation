## vue-router

### 核⼼步骤：
 - 步骤⼀：使⽤vue-router插件，router.js
    ```
    import Router from 'vue-router'
    Vue.use(Router)
    ```
 - 步骤⼆：创建Router实例，router.js
    ```
    export default new Router({...})
    ```
 - 步骤三：在根组件上添加该实例，main.js
    ```
    import router from './router'
    new Vue({
        router,
    }).$mount("#app");
    ```
 - 步骤四：添加路由视图，App.vue
    ```
    <router-view></router-view>
    ```
 - 导航
    ```
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    ```
    ```
    this.$router.push('/')
    this.$router.push('/about')
    ```
### 使用
 - 路由带参
   ```
   { path: '/users/:id', component: User },
   ```
   ```
   const User = {
      template: '<div>User {{ $route.params.id }}</div>',
   }
   ```