<template>
  <div class="home">
    <navbar />
    <!-- <warning-bar
      msg="Due to an ongoing DDOS attack, loading speeds may be slow. We apologize for
    any inconvienience."
    ></warning-bar> -->
    <h1 id="find-anime">Find Manga</h1>
    <top-manga />
    <top-light />
  </div>
</template>

<script>
import TopLight from "../components/Manga/TopLight.vue";
// @ is an alias to /src
import TopManga from "../components/Manga/TopManga.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Manga",
  components: {
    TopManga,
    TopLight,
    Navbar,
  },
  /*   created: function () {
    document.title = "Find Manga";
  }, */
};
</script>

<style lang="scss">
.home {
  min-height: 101vh;
  padding-top: 8rem;
}
</style>
