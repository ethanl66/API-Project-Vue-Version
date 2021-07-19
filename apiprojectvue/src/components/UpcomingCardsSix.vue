<template>
  <section class="card-holder">
    <router-link :to="animePath" class="router-link">
      <div
        v-for="upcoming in upcomingDataSliced"
        :key="upcoming"
        class="card"
        v-on:click="clickedId = upcoming.mal_id"
      >
        <!-- <p class="card-data" id="card-rating">{{ upcoming.score }}/10</p> -->
        <img class="card-img" :src="upcoming.image_url" alt="" />
        <ul class="card-textarea">
          <li id="card-title">{{ upcoming.title }}</li>
          <li v-if="upcoming.episodes" class="card-data">
            Episodes: {{ upcoming.episodes }}
          </li>
          <!-- <li v-if="!upcoming.episodes" class="card-data">Episodes: ?</li> -->
          <li class="card-data">{{ upcoming.members }} planning to watch</li>
        </ul>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "UpcomingCardsSix",
  props: {},
  data() {
    return {
      upcomingData: [],
      upcomingDataSliced: [],
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
