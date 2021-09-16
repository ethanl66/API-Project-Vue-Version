<template>
  <div class="home">
    <navbar />
    <!-- <warning-bar
      msg="Due to an ongoing DDOS attack, loading speeds may be slow. We apologize for
    any inconvienience."
    ></warning-bar> -->
    <h1 id="find-anime">Find Manga</h1>
    <top-manga />
    <manga-search />
    <top-light />
  </div>
</template>

<script>
import TopLight from "../components/Manga/TopLight.vue";
// @ is an alias to /src
import TopManga from "../components/Manga/TopManga.vue";
import Navbar from "@/components/Navbar.vue";
import MangaSearch from "../components/Manga/MangaSearch.vue";

export default {
  name: "Manga",
  components: {
    TopManga,
    TopLight,
    Navbar,
    MangaSearch,
  },
  /*   created: function () {
    document.title = "Find Manga";
  }, */
};
</script>

<style lang="scss">
.home {
  min-height: 101vh;
  padding: 8rem 0 4rem 0;
}
</style>
