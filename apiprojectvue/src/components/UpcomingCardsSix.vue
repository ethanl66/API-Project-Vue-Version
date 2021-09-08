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
  props: { upcomingDataSliced: Array },
  data() {
    return {
      //upcomingData: [],
      //upcomingDataSliced: [],
      clickedId: "",
    };
  },
  computed: {
    animePath: function () {
      return `/anime/${this.clickedId}`;
    },
  },
  created: function () {
    //this.fetchupcomingData();
  },
  methods: {
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
