<template>
  <div class="home">
    <!-- <warning-bar
      msg="Due to an ongoing DDOS attack, loading speeds may be slow. We apologize for
    any inconvienience."
    ></warning-bar> -->
    <h1 id="find-anime">Find Manga</h1>
    <top-manga />
  </div>
</template>

<script>
// @ is an alias to /src
import TopManga from "../components/Manga/TopManga.vue";

export default {
  name: "Manga",
  components: {
    TopManga,
  },
  created: function () {
    document.title = "Find Manga";
  },
};
</script>

<style lang="scss">
.home {
  min-height: 101vh;
  padding-top: 4rem;
}
</style>
