<template>
  <div class="home">
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

export default {
  name: "Home",
  components: {
    Seasonals,
    Upcoming,
    Search,
  },
};
</script>

<style lang="scss">
.home {
  min-height: 101vh;
  padding-top: 4rem;
}
</style>
