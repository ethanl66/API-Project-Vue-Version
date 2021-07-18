<template>
  <section class="card-holder">
    <router-link :to="animePath" class="router-link">
      <div
        v-for="seasonal in seasonalsData"
        :key="seasonal"
        class="card"
        v-on:click="clickedId = seasonal.mal_id"
      >
        <p class="card-data" id="card-rating">{{ seasonal.score }}/10</p>
        <img class="card-img" :src="seasonal.image_url" alt="" />
        <ul class="card-textarea">
          <li id="card-title">{{ seasonal.title }}</li>
          <li class="card-data">Episodes: {{ seasonal.episodes }}</li>
          <li class="card-data">{{ seasonal.members }} people watching</li>
        </ul>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "SeasonalsCardsAll",
  props: {},
  data() {
    return {
      seasonalsData: [],
      clickedId: "",
    };
  },
  computed: {
    animePath: function () {
      return `/anime/${this.clickedId}`;
    },
  },
  created: function () {
    this.fetchSeasonalsData();
  },
  methods: {
    fetchSeasonalsData: async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/search/anime?status=airing&type=tv&start_date=2021-02-01&sort=desc&order_by=members&limit=50"
        );
        const data = await response.json();
        this.seasonalsData = data.results;
        //console.log(data.results);

        //Ternary operator for null episodes
      } catch (error) {
        console.log(error);
        alert("Fetch failed for top seasonals.");
      }
    },
    /*  onClickTemp: function () {
      this.clickedId = target.dataset.malid;
      console.log(this.clickedId);
    }, */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
