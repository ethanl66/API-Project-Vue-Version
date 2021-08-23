<template>
  <!-- RECOMMENDATIONS PASS IN EMPTY ARRAY FOR SOME -->
  <!-- ROUTER LINK REQUIRES REFRESH -->
  <section class="card-holder" id="recommendations-card-holder">
    <!--       <ul v-for="result in recommendations" :key="result">
        <p>{{ result.title }}</p>
      </ul> -->
    <router-link :to="animePath" class="router-link">
      <div
        v-for="recommendation in recommendations"
        :key="recommendation"
        class="card"
        v-on:click="clickedId = recommendation.mal_id"
      >
        <img class="card-img" :src="recommendation.image_url" alt="" />
        <ul class="card-textarea">
          <li id="card-title">{{ recommendation.title }}</li>
          <li>{{ recommendation.recommendation_count }} people recommend</li>
        </ul>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "recommendationCards",
  props: ["recommendations"],
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
  updated: function () {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("../assets/main.scss");

#recommendations-card-holder {
  width: 100%;
}
</style>
