<template>
  <div class="home">
    <h1 id="find-anime">Find Anime</h1>
    <seasonals></seasonals>
  </div>
</template>

<script>
// @ is an alias to /src
import Seasonals from "@/components/Seasonals.vue";

export default {
  name: "Home",
  components: {
    Seasonals,
  },
};
</script>

<style lang="scss">
.home {
  min-height: 101vh;
  padding-top: 4rem;
}
</style>
