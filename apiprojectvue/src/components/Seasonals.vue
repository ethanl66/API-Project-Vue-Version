<template>
  <div class="seasonals-section display-section">
    <div class="section-text">
      <h2 id="seasonals-header" class="section-header">Airing Now</h2>
      <p
        v-on:click="changeShowComponent"
        class="see-more-btn"
        id="seasonals-see-more"
      >
        See All
      </p>
    </div>

    <component
      v-bind:is="showComponent"
      :seasonalsData="seasonalsDataAll"
      :seasonalsDataSliced="seasonalsDataSliced"
    ></component>

    <!-- <component v-bind:is="showComponent"></component> -->
    <!--  -->
  </div>
</template>

<script>
import SeasonalsCardsSix from "./SeasonalsCardsSix.vue";
import SeasonalsCardsAll from "./SeasonalsCardsAll.vue";

export default {
  name: "Seasonals",
  props: {},
  components: { SeasonalsCardsSix, SeasonalsCardsAll },
  data() {
    return {
      seasonalsData: [],
      seasonalsDataSliced: [],
      seasonalsDataAll: [],
      showComponent: SeasonalsCardsSix,
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
    this.fetchSeasonalsData();
  },
  methods: {
    changeShowComponent: function () {
      if (this.showComponent === SeasonalsCardsSix) {
        this.showComponent = SeasonalsCardsAll;
        document.getElementById("seasonals-see-more").innerHTML = "See Less";
      } else {
        this.showComponent = SeasonalsCardsSix;
        document.getElementById("seasonals-see-more").innerHTML = "See More";
      }
    },
    fetchSeasonalsData: async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/search/anime?status=airing&type=tv&start_date=2021-02-01&sort=desc&order_by=members"
        );
        const data = await response.json();
        this.seasonalsData = data.results;
        //console.log(data.results);

        if (window.innerWidth > 1300) {
          this.seasonalsDataSliced = data.results.slice(0, 6);
        } else if (window.innerWidth <= 1300 && window.innerWidth > 1000) {
          this.seasonalsDataSliced = data.results.slice(0, 5);
        } else if (window.innerWidth <= 1000 && window.innerWidth > 750) {
          this.seasonalsDataSliced = data.results.slice(0, 4);
        } else if (window.innerWidth <= 750 && window.innerWidth > 500) {
          this.seasonalsDataSliced = data.results.slice(0, 6);
        } else if (window.innerWidth <= 525) {
          this.seasonalsDataSliced = data.results.slice(0, 6);
        } else {
          this.seasonalsDataSliced = data.results.slice(0, 1);
        }

        this.seasonalsDataAll = data.results.slice(0, 48);

        //Ternary operator for null episodes
      } catch (error) {
        console.log(error);
        alert("Fetch failed for top seasonals.");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("../assets/main.scss");

.display-section {
  width: var(--section-width);
  margin: 4rem auto 0 auto;
  background-color: var(--surface-color);
  padding: var(--section-padding);
  //display: inline-block;
}

.section-text {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 2rem 0.5rem;
}
.see-more-btn {
  font-size: 1.8rem;
  margin: 0 3rem 0 3rem;
  color: var(--primary-color);
}
.see-more-btn:hover {
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  #seasonals-header {
    font-size: 3rem;
  }
}
</style>
