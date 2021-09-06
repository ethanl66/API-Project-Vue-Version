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
        class="rec-card"
        v-on:click="clickedId = recommendation.mal_id"
      >
        <img class="card-img" :src="recommendation.image_url" alt="" />
        <ul class="card-textarea">
          <li id="card-title">{{ recommendation.title }}</li>
          <li
            class="card-data"
            v-if="recommendation.recommendation_count > '1'"
          >
            {{ recommendation.recommendation_count }} people recommend
          </li>
          <li
            class="card-data"
            v-if="recommendation.recommendation_count == '1'"
          >
            {{ recommendation.recommendation_count }} person recommends
          </li>
        </ul>
      </div>

      <div v-if="showRecRest">
        <div
          v-for="recommendation in recommendationsRest"
          :key="recommendation"
          class="rec-card"
          v-on:click="clickedId = recommendation.mal_id"
        >
          <img class="card-img" :src="recommendation.image_url" alt="" />
          <ul class="card-textarea">
            <li id="card-title">{{ recommendation.title }}</li>
            <li
              class="card-data"
              v-if="recommendation.recommendation_count > '1'"
            >
              {{ recommendation.recommendation_count }} people recommend
            </li>
            <li
              class="card-data"
              v-if="recommendation.recommendation_count == '1'"
            >
              {{ recommendation.recommendation_count }} person recommends
            </li>
          </ul>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "recommendationCards",
  props: {
    recommendations: Array,
    recommendationsRest: Array,
    showRecRest: Boolean,
  },
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
  background-color: var(--surface-color);
  padding: 2rem;
  position: relative;
}

.rec-card {
  display: inline-block;
  width: 20%;
  border: 4px solid var(--surface-color);
  padding: 4px;
  position: relative;
  border-radius: 1rem;
}
.rec-card:hover {
  background-color: var(--card-hover);
  border: 4px solid var(--card-hover-border);
}

@media screen and (max-width: 1650px) {
  .rec-card {
    width: 25%;
  }
}
@media screen and (max-width: 940px) {
  .rec-card {
    width: 33.33%;
  }
}
@media screen and (max-width: 767px) {
  .rec-card {
    border: none;
  }
  #recommendations-card-holder {
    padding: 1rem;
  }
  .router-link {
    width: 100%;
  }
}
</style>
