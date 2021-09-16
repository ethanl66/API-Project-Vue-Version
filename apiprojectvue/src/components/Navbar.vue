<template>
  <nav class="navbar">
    <a href="" class="navlink">Home</a>
    <a href="" class="navlink">Anime</a>
    <a href="" class="navlink">Manga</a>
    <a href="" class="navlink">Light Novels</a>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.navbar {
  background-color: var(--background-color);
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  padding: 2rem;
}
.navbar > a {
  color: var(--off-white);
  padding: 2rem;
}
.navbar > a:hover {
  color: white;
  background-color: var(--surface-color);
}
</style>
