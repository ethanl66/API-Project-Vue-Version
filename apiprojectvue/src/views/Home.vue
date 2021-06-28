<template>
  <div class="home">
    <h2>HOME</h2>
    <seasonals> </seasonals>
  </div>
</template>

<script>
// @ is an alias to /src
import Seasonals from "../components/Seasonals.vue";

export default {
  name: "Home",
  components: {
    Seasonals,
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
}
</style>
