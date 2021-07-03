<template>
  <div>
    <section class="card-holder">
      <router-link :to="animePath" class="router-link">
        <div
          v-for="seasonal in seasonalsData"
          :key="seasonal"
          class="card"
          v-on:click="clickedId = seasonal.mal_id"
          :data-malid="seasonal.mal_id"
        >
          <p>Rating: {{ seasonal.score }}</p>
          <img :src="seasonal.image_url" alt="" />
          <ul class="card-textarea">
            <li>{{ seasonal.title }}</li>
            <li>Episodes: {{ seasonal.episodes }}</li>
            <li>{{ seasonal.members }} people watching</li>
          </ul>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "SeasonalsCardsSix",
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
          "https://api.jikan.moe/v3/search/anime?status=airing&type=tv&start_date=2021-02-01&sort=desc&order_by=members&limit=6"
        );
        const data = await response.json();
        this.seasonalsData = data.results;
        console.log(data.results);

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
}
h2 {
  font-size: 5rem;
}

.seasonals-section {
  width: 73vw;
  margin: auto;
}

.section-text {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 4rem 0 2rem;
}
.see-more-btn {
  font-size: 1.8rem;
  margin: 0 3rem 0 3rem;
}

.card-holder {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.card {
  display: inline-block;
  width: 12vw;
  border: 1px solid white;
}
.card:hover {
  border: 1px solid black;
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
.card-textarea > li {
  margin: 0;
}

.router-link {
  text-decoration: none;
  color: black;
}
</style>
