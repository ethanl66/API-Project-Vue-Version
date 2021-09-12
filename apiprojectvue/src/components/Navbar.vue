<template>
  <div class="nav-container">
    <div class="navbar">
      <a href="/" class="navlink">Home</a>
      <a href="/" class="navlink">Anime</a>
      <a href="/manga" class="navlink">Manga</a>
      <a href="/manga#top-light-section" class="navlink">Light Novels</a>
      <span class="flex-grow-1"></span>
      <search />
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";

export default {
  name: "Navbar",
  components: { Search },
};
</script>

<style lang="scss">
.nav-container {
  //background-color: var(--background-color);
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  //padding: 2rem;
}
.navbar {
  width: var(--section-width);
  display: flex;
  margin: auto;
  align-items: center;
}
.navbar > a {
  font-size: 1.8rem;
  color: var(--off-white);
  padding: 2rem;
}
.navbar > a:hover {
  color: rgb(19, 17, 17);
  background-color: var(--surface-color);
}

.flex-grow-1 {
  flex-grow: 1;
}
</style>
