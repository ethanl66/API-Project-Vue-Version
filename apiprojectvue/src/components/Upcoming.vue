<template>
  <div class="upcoming-section display-section">
    <div class="section-text">
      <h2 id="upcoming-header" class="section-header">Upcoming</h2>
      <p
        v-on:click="changeShowComponent"
        class="see-more-btn"
        id="upcoming-see-more"
      >
        See All
      </p>
    </div>

    <component v-bind:is="showComponent"></component>

    <!-- <component v-bind:is="showComponent"></component> -->
    <!--  -->
  </div>
</template>

<script>
import UpcomingCardsSix from "./UpcomingCardsSix.vue";
import UpcomingCardsAll from "./UpcomingCardsAll.vue";

export default {
  name: "Upcoming",
  props: {},
  components: { UpcomingCardsSix, UpcomingCardsAll },
  data() {
    return {
      /*      seasonalsData: [], */
      showComponent: UpcomingCardsSix,
    };
  },
  computed: {
    /*     seasonalPosterImg: function () {
      //return this.singlePokemon.sprites.front_default;
      return `https://pokeres.bastionbot.org/images/pokemon/${this.singlePokemon.id}.png`;
    },
    pkmnPath: function () {
      return `/pkmn/${this.singlePokemon.id}`;
    }, */
  },
  created: function () {
    /* this.fetchSeasonalsData(); */
  },
  methods: {
    changeShowComponent: function () {
      if (this.showComponent === UpcomingCardsSix) {
        this.showComponent = UpcomingCardsAll;
        document.getElementById("upcoming-see-more").innerHTML = "See Less";
      } else {
        this.showComponent = UpcomingCardsSix;
        document.getElementById("upcoming-see-more").innerHTML = "See More";
      }
    },
    /*     fetchSeasonalsData: async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/search/anime?status=airing&type=tv&start_date=2021-02-01&sort=desc&order_by=members"
        );
        const data = await response.json();
        this.seasonalsData = data.results;
        console.log(data.results);

        //Ternary operator for null episodes
      } catch (error) {
        console.log(error);
        alert("Fetch failed for top seasonals.");
      }
    }, */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("../assets/main.scss");
</style>
