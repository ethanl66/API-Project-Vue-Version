<template>
  <div>
    <section class="card-holder">
      <h3 v-show="!searchedData" class="no-results">No results</h3>
      <!--       <ul v-for="result in searchedData" :key="result">
        <p>{{ result.title }}</p>
      </ul> -->
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
            <li class="card-data">{{ searched.type }}</li>
            <li v-if="searched.publishing" class="card-data">
              {{ searched.members }} people reading
            </li>
            <li v-if="!searched.publishing" class="card-data">
              {{ searched.members }} readers
            </li>
          </ul>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "MangaSearchCards",
  props: ["searchedData"],
  data() {
    return {
      clickedId: "",
    };
  },
  computed: {
    animePath: function () {
      return `/manga/${this.clickedId}`;
    },
  },
  created: function () {},
  updated: function () {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.no-results {
  font-size: 2.6rem;
  color: var(--primary-color);
}
</style>
