<template>
  <nav class="navbar">
    <a href="/" class="navlink" id="home-navlink">Home</a>
    <a href="/" class="navlink">Anime</a>
    <a href="/manga" class="navlink">Manga</a>
    <a href="/manga#top-light-section" class="navlink">Light Novels</a>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.navbar {
  background-color: var(--nav-color);
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

@media screen and (max-width: 390px) {
  .navbar > a {
    padding: 4.6vw;
  }
  .navbar {
    /* display: flex;
    justify-content: space-around; */
    padding-left: 0;
    padding-right: 0;
  }
}

@media screen and (max-width: 320px) {
  #home-navlink {
    display: none;
  }
}
</style>
