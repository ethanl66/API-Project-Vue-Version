<template>
  <!-- FOR 2.0: SEARCH BY GENRE FUNCTION!!! -->
  <div>
    <section class="search-section display-section">
      <form
        id="search-form"
        class="search-form"
        v-on:submit.prevent="
          formSubmit();
          goSearch();
        "
      >
        <input
          name="search-area"
          class="search-area"
          id="search-area"
          placeholder="Search"
        />
        <button type="submit" class="submit-button">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </section>

    <section class="search-results display-section" id="search-results">
      <component
        :is="searchResultsShownComponent"
        :searchedData="searchedData"
      ></component>
      <!-- <search-cards :searchedData="searchedData"></search-cards> -->
      <!-- Add v-if searchedData = undefined, then show error message -->
    </section>
  </div>
</template>

<script>
import searchCards from "./SearchCards.vue";
import Loading from "./Loading.vue";

export default {
  name: "Search",
  props: [],
  components: { searchCards, Loading },
  data() {
    return {
      searchedData: [],
      white: "white",
      searchResultsShownComponent: "Loading",
    };
  },
  computed: {},
  created: function () {},
  methods: {
    formSubmit: function () {
      document.getElementById("search-results").style.display = "flex";
      this.searchResultsShownComponent = "Loading";
    },
    goSearch: async function () {
      const searchParams = document.getElementById("search-area").value;
      console.log(searchParams);
      try {
        const response = await fetch(
          `https://api.jikan.moe/v3/search/anime?q=${searchParams}&limit=25`
        );
        const data = await response.json();
        //console.log(data.results);
        this.searchedData = data.results;
        //console.log(this.searchedData);

        this.searchResultsShownComponent = "searchCards";
      } catch (error) {
        console.log(error);
        alert("Fail fetch call");
      }
    },
  },
};
</script>

<style>
.search-section {
  background-color: #313e49;
  margin-bottom: 2rem;
}
.search-form {
  margin: 1rem 0;
}
.search-area {
  height: 4rem;
  width: 40rem;
  max-width: 40rem;
  display: inline;
  font-size: 1.8rem;
  color: #edf1f5;
  background-color: #202020;
  border: 2px solid rgba(255, 255, 255, 0.11);
  border-radius: 5px;
  text-transform: capitalize;

  padding: 0.6rem 1.2rem;
}
.search-results {
  display: none;
  flex-wrap: wrap;
  justify-content: center;
}
/* .loading {
  font-size: 1.8rem;
} */
.loading-symbol {
  font-size: 5rem;
  color: #edf1f5;
  margin: auto;
}
#loading-span {
  margin: 2rem 0;
}
.submit-button {
  font-size: 2.25rem;
  background-color: transparent;

  color: #8a8a8acf;

  margin-left: -4rem;
  text-align: center;

  border: none;

  outline: none;
}
.submit-button:hover {
  cursor: pointer;
}

#search-cards-destroy {
  display: none;
}
</style>
