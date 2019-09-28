<template>
  <div id="app">
    <div id="nav">
      <a href="http://mihainuica.com">Home</a> | 
      <router-link to="/">Blog</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background: linear-gradient(180deg, #DD04E1 0%, #4D024E 100%);
  // height: 100%;
  // display: grid;
}
#nav {
  padding: 30px;
  // position: fixed;
  // background-color: aqua;
  // top: 0;
  // width: 100%;
  // justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
