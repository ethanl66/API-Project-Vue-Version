<template>
  <div class="home">
    <warning-bar
      msg="Due to an ongoing DDOS attack, loading speeds may be slow. We apologize for
    any inconvienience."
    ></warning-bar>
    <h1 id="find-anime">Find Anime</h1>
    <seasonals></seasonals>
    <search></search>
    <upcoming></upcoming>
  </div>
</template>

<script>
// @ is an alias to /src
import Seasonals from "@/components/Seasonals.vue";
import Upcoming from "@/components/Upcoming.vue";
import Search from "@/components/Search.vue";
import WarningBar from "@/components/WarningBar.vue";

export default {
  name: "Home",
  components: {
    Seasonals,
    Upcoming,
    Search,
    WarningBar,
  },
  created: function () {
    document.title = "Find Anime";
  },
};
</script>

<style lang="scss">
.home {
  min-height: 101vh;
  padding-top: 4rem;
}
</style>
