<template>
  <section class="card-holder">
    <div
      v-for="seasonal in seasonalsDataSliced"
      :key="seasonal"
      class="card"
      v-on:click="clickedId = seasonal.mal_id"
    >
      <router-link :to="animePath" class="router-link">
        <p class="card-data" id="card-rating">{{ seasonal.score }}/10</p>
        <img class="card-img" :src="seasonal.image_url" alt="" />
        <ul class="card-textarea">
          <li id="card-title">{{ seasonal.title }}</li>
          <li class="card-data">Episodes: {{ seasonal.episodes }}</li>
          <li class="card-data">{{ seasonal.members }} people watching</li>
        </ul>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "SeasonalsCardsSix",
  props: {},
  data() {
    return {
      seasonalsData: [],
      seasonalsDataSliced: [],
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
<style lang="scss">
.card-holder {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: var(--card-holder-width);
  align-items: stretch;
  justify-content: center;
}
.card {
  display: inline-block;
  width: var(--card-width);
  border: 4px solid var(--surface-color);
  padding: 4px;
  position: relative;
  border-radius: 1rem;
}
.card:hover {
  background-color: var(--card-hover);
  border: 4px solid var(--card-hover-border);
}
.card-textarea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0.5rem;
  margin-bottom: 1rem;
}
#card-title {
  color: var(--primary-color);
}
.card-data {
  color: var(--card-p-text);
}
.card-textarea > li {
  margin: 0;
}
#card-rating {
  position: absolute;
  top: 4px;
  margin: 0;
  padding: 0.5rem;
  background-color: var(--transparent-black);
  color: var(--card-score-text);
  border-radius: 0 0 5px 0;
  text-align: left;
}
.card-img {
  width: 100%;
}
</style>
