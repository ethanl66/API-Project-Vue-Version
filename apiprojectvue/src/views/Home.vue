<template>
  <div class="home">
    <navbar />
    <!-- <warning-bar
      msg="Due to an ongoing DDOS attack, loading speeds may be slow. We apologize for
    any inconvienience."
    ></warning-bar> -->

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
/* import WarningBar from "@/components/WarningBar.vue"; */
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Seasonals,
    Upcoming,
    Search,
    //WarningBar,
    Navbar,
  },
  /*  created: function () {
    document.title = "Find Anime";
  }, */
};
</script>

<style lang="scss">
#find-anime {
  margin: 0;
  padding: 2rem;
}
.home {
  min-height: 101vh;
  padding: 8rem 0 4rem 0;
}

@media screen and (max-width: 767px) {
  #find-anime {
    font-size: 4.5rem;
  }
  .home {
    padding-bottom: 0;
  }
}
</style>
