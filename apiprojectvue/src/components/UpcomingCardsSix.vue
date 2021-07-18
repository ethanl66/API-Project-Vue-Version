<template>
  <section class="card-holder">
    <div
      v-for="upcoming in upcomingData.slice(0, 6)"
      :key="upcoming"
      class="card"
      v-on:click="clickedId = upcoming.mal_id"
    >
      <router-link :to="animePath" class="router-link">
        <!-- <p class="card-data" id="card-rating">{{ upcoming.score }}/10</p> -->
        <img class="card-img" :src="upcoming.image_url" alt="" />
        <ul class="card-textarea">
          <li id="card-title">{{ upcoming.title }}</li>
          <li class="card-data">Episodes: {{ upcoming.episodes }}</li>
          <li class="card-data">{{ upcoming.members }} people watching</li>
        </ul>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "UpcomingCardsSix",
  props: {},
  data() {
    return {
      upcomingData: [],
      clickedId: "",
    };
  },
  computed: {
    animePath: function () {
      return `/anime/${this.clickedId}`;
    },
  },
  created: function () {
    this.fetchupcomingData();
  },
  methods: {
    fetchupcomingData: async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/top/anime/1/upcoming"
        );
        const data = await response.json();
        this.upcomingData = data.top;
        //console.log(data.top);

        //Ternary operator for null episodes
      } catch (error) {
        console.log(error);
        alert("Fetch failed for top upcoming.");
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
<style lang="scss">
@import url("../assets/main.scss");
</style>
