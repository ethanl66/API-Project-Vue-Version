<template>
  <div class="seasonals-section">
    <div class="section-text">
      <h2 id="seasonals-header" class="section-header">Seasonals</h2>
      <p
        v-on:click="changeShowComponent"
        class="see-more-btn"
        id="seasonals-see-more"
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
import SeasonalsCardsSix from "./SeasonalsCardsSix.vue";
import SeasonalsCardsAll from "./SeasonalsCardsAll.vue";

export default {
  name: "Seasonals",
  props: {},
  components: { SeasonalsCardsSix, SeasonalsCardsAll },
  data() {
    return {
      /*      seasonalsData: [], */
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
    /* this.fetchSeasonalsData(); */
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
html,
body,
* {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  //color: white;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
li,
p {
  font-size: 1.6rem;
}
h1 {
  font-size: 6rem;
  color: #7fc3ff;
}
h2 {
  font-size: 5rem;
  color: #7fc3ff;
}

.seasonals-section {
  width: 76vw;
  margin: auto;
  margin-top: 4rem;
  background-color: #202020;
  //display: inline-block;
  padding: 2rem;
}

.section-text {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 2rem;
}
.see-more-btn {
  font-size: 1.8rem;
  margin: 0 3rem 0 3rem;
  color: #7fc3ff;
}
.see-more-btn:hover {
  cursor: pointer;
}

.card-holder {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  //display: inline-block;
  width: 12vw;
  border: 4px solid #202020;
  padding: 4px;
  position: relative;
}
.card:hover {
  background-color: #383838;
  border: 4px solid #555555;
}
#card-rating {
  position: absolute;
  top: 4px;
  margin: 0;
  padding: 0.5rem;
  background-color: hsla(0, 0%, 9%, 0.7);
  color: #edf1f5;
  border-radius: 0 0 5px 0;
  text-align: left;
}
.card-img {
  width: 100%;
}
.card-textarea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0.5rem;
  margin-bottom: 2rem;
}
.card-textarea > li {
  margin: 0;
}
</style>
