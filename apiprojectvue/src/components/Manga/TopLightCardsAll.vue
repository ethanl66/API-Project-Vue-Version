<template>
  <section class="card-holder">
    <router-link :to="mangaPath" class="router-link">
      <div
        v-for="manga in topMangaAll"
        :key="manga"
        class="card"
        v-on:click="clickedId = manga.mal_id"
      >
        <p class="card-data" id="card-rating">{{ manga.score }}/10</p>
        <img class="card-img" :src="manga.image_url" alt="" />
        <ul class="card-textarea">
          <li id="card-title">{{ manga.title }}</li>
          <li class="card-data" v-if="manga.volumes != null">
            {{ manga.volumes }} volumes
          </li>
          <li class="card-data">{{ manga.members }} readers</li>
        </ul>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "TopLightCardsAll",
  props: { topMangaAll: Array },
  data() {
    return {
      //seasonalsData: [],
      clickedId: "",
    };
  },
  computed: {
    mangaPath: function () {
      return `/manga/${this.clickedId}`;
    },
  },
  created: function () {
    //this.fetchSeasonalsData();
  },
  methods: {
    /*  fetchSeasonalsData: async function () {
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
    }, */
    /*  onClickTemp: function () {
      this.clickedId = target.dataset.malid;
      console.log(this.clickedId);
    }, */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
