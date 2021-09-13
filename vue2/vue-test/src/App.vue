<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <p @click="$store.commit('add')">{{$store.state.counter}}</p>
    <p @click="$store.dispatch('add')">async: {{$store.state.counter}}</p>
    <p @click="$store.dispatch('add')">double: {{$store.getters.doubleCounter}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
/* #app {
  height: 100vh;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
p{
  font-size: 18px;
  line-height: 30px;
}
</style>
