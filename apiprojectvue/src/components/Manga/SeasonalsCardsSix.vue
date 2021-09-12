<template>
  <section class="card-holder">
    <router-link :to="animePath" class="router-link">
      <div
        v-for="seasonal in seasonalsDataSliced"
        :key="seasonal"
        v-on:click="clickedId = seasonal.mal_id"
        class="card"
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
  name: "SeasonalsCardsSix",
  props: { seasonalsDataSliced: Array },
  data() {
    return {
      //seasonalsData: [],
      //seasonalsDataSliced: [],
      clickedId: "",
    };
  },
  computed: {
    animePath: function () {
      return `/anime/${this.clickedId}`;
    },
  },
  created: function () {
    //this.fetchSeasonalsData();
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
.card-holder {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: var(--card-holder-width);
  align-items: stretch;
  justify-content: center;
}
.router-link {
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
