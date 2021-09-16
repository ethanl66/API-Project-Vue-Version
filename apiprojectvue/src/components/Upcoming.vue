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

    <component
      v-bind:is="showComponent"
      :upcomingData="upcomingDataAll"
      :upcomingDataSliced="upcomingDataSliced"
    ></component>

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
      upcomingData: [],
      upcomingDataSliced: [],
      upcomingDataAll: [],
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
    this.fetchupcomingData();
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
    fetchupcomingData: async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/top/anime/1/upcoming"
        );
        const data = await response.json();
        this.upcomingData = data.top;
        //console.log(data.top);
        if (window.innerWidth > 1300) {
          this.upcomingDataSliced = data.top.slice(0, 6);
        } else if (window.innerWidth <= 1300 && window.innerWidth > 1000) {
          this.upcomingDataSliced = data.top.slice(0, 5);
        } else if (window.innerWidth <= 1000 && window.innerWidth > 750) {
          this.upcomingDataSliced = data.top.slice(0, 4);
        } else if (window.innerWidth <= 750 && window.innerWidth > 500) {
          this.upcomingDataSliced = data.top.slice(0, 6);
        } else if (window.innerWidth <= 525) {
          this.upcomingDataSliced = data.top.slice(0, 6);
        } else {
          this.upcomingDataSliced = data.top.slice(0, 1);
        }

        this.upcomingDataAll = data.top.slice(0, 48);
        //Ternary operator for null episodes
      } catch (error) {
        console.log(error);
        alert("Fetch failed for top upcoming.");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("../assets/main.scss");

@media screen and (max-width: 767px) {
  #upcoming-header {
    font-size: 3rem;
  }
}
</style>
