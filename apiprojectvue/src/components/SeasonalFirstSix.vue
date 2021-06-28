<template>
  <div class="top-seasonals display-section">
    <div
      v-for="seasonal in seasonalsFirstSix"
      :key="seasonal.title"
      class="card"
    >
      <p class="card-rating">{{ seasonal.score }}/10</p>
      <img class="card-img" v-bind:src="seasonal.image_url" alt="" />

      <p class="card-title">{{ seasonal.title }}</p>
      <p class="card-episodes">{{ seasonal.episodes }} episodes</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeasonalFirstSix",
  props: ["seasonalsFirstSix"],
  data() {
    return {};
  },
  created: function () {},
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
