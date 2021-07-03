<template>
  <div>
    <section class="card-holder">
      <h1>{{ searchedData }}</h1>
      <router-link :to="animePath" class="router-link">
        <div
          v-for="searched in searchedData"
          :key="searched"
          class="card"
          v-on:click="clickedId = searched.mal_id"
        >
          <p class="card-data" id="card-rating">{{ searched.score }}/10</p>
          <img class="card-img" :src="searched.image_url" alt="" />
          <ul class="card-textarea">
            <li id="card-title">{{ searched.title }}</li>
            <li class="card-data">Episodes: {{ searched.episodes }}</li>
            <li class="card-data">{{ searched.members }} people watching</li>
          </ul>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "searchCards",
  props: ["searchedData"],
  data() {
    return {
      clickedId: "",
    };
  },
  computed: {
    animePath: function () {
      return `/anime/${this.clickedId}`;
    },
  },
  created: function () {},
  methods: {},
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

.searched-section {
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
#card-title {
  color: #7fc3ff;
}
.card-data {
  color: #839da6;
}
.card-textarea > li {
  margin: 0;
}

.router-link {
  text-decoration: none;
  color: black;
}
</style>
