<template>
  <div class="section-text">
    <h2 class="top-seasonals-h2 display-section-h2">Seasonals</h2>
    <!-- <card v-bind:seasonalsList="seasonalsList"></card> -->
    <div class="top-seasonals display-section">
      <div v-for="seasonal in seasonalsList" :key="seasonal.title" class="card">
        <p class="card-rating">{{ seasonal.score }}/10</p>
        <img class="card-img" v-bind:src="seasonal.image_url" alt="" />
        <p class="card-title">{{ seasonal.title }}</p>
        <p class="card-episodes">{{ seasonal.episodes }} episodes</p>
      </div>
    </div>
  </div>
</template>

<script>
//import Card from "./Card.vue";

export default {
  //components: { Card },
  name: "Seasonals",

  data() {
    return {
      seasonalsList: [],
      seasonalsFirstSix: [],
    };
  },
  created: function () {
    this.fetchSeasonals();
  },
  methods: {
    fetchSeasonals: async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/search/anime?status=airing&type=tv&start_date=2021-02-01&sort=desc&order_by=score"
        );
        const data = await response.json();
        console.log(data.results);
        this.seasonalsList = data.results;

        const dataFirstSix = data.results.splice(0, 6);
        console.log(dataFirstSix);
        this.seasonalsFirstSix = dataFirstSix;
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 10.97vw;
  /* height: 45rem; */
  font-size: 1.6rem;
  position: relative;
  border-radius: 1rem;
  border: 4px solid #202020;
}
.card:hover {
  background-color: #383838;
  border: 4px solid #555555;
}
.card-rating {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0.5rem;
  background-color: #171717b3;
  border-radius: 0 0 5px 0;
}
.card-img {
  width: 100%;
}
.card-text {
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-title {
  width: 100%;
  /*  height: 5rem; */

  text-overflow: ellipsis;
  overflow: hidden;

  text-align: center;
  margin: 1rem;
  color: #7fc3ff;
}
.card-episodes {
  text-align: center;
  margin: 0 auto 1rem auto;
  color: #839da6;
}
</style>
