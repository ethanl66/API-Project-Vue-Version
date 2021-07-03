<template>
  <div id="app">
    <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap");
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #191919;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 2rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  * {
    box-sizing: border-box;
  }
}
</style>
