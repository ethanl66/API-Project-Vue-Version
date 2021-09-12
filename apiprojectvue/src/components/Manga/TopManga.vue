<template>
  <div class="seasonals-section display-section">
    <div class="section-text">
      <h2 id="seasonals-header" class="section-header">Top Manga</h2>
      <p
        v-on:click="changeShowComponent"
        class="see-more-btn"
        id="seasonals-see-more"
      >
        See All
      </p>
    </div>

    <component
      v-bind:is="showComponent"
      :topMangaAll="topMangaAll"
      :topMangaSliced="topMangaSliced"
    ></component>

    <top-manga-cards-all :topMangaAll="topMangaAll" />
  </div>
</template>

<script>
import TopMangaCardsAll from "./TopMangaCardsAll.vue";

export default {
  name: "TopManga",
  props: {},
  components: {
    TopMangaCardsAll,
  },
  data() {
    return {
      topManga: [],
      topMangaSliced: [],
      topMangaAll: [],
      showComponent: TopMangaCardsAll,
    };
  },
  computed: {
    /*     seasonalPosterImg: function () {
      //return this.singlePokemon.sprites.front_default;
      return `https://pokeres.bastionbot.org/images/pokemon/${this.singlePokemon.id}.png`;
    },
    pkmnPath: function () {
      return `/pkmn/${this.singlePokemon.id}`;
    }, */
  },
  created: function () {
    this.fetchTopManga();
  },
  methods: {
    /* changeShowComponent: function () {
      if (this.showComponent === SeasonalsCardsSix) {
        this.showComponent = SeasonalsCardsAll;
        document.getElementById("seasonals-see-more").innerHTML = "See Less";
      } else {
        this.showComponent = SeasonalsCardsSix;
        document.getElementById("seasonals-see-more").innerHTML = "See More";
      }
    }, */
    fetchTopManga: async function () {
      try {
        const response = await fetch("https://api.jikan.moe/v3/top/manga/1");
        const data = await response.json();
        this.topManga = data.top;
        //console.log(data.top);

        if (window.innerWidth > 1300) {
          this.topMangaSliced = data.top.slice(0, 6);
        } else if (window.innerWidth <= 1300 && window.innerWidth > 1000) {
          this.topMangaSliced = data.top.slice(0, 5);
        } else if (window.innerWidth <= 1000 && window.innerWidth > 750) {
          this.topMangaSliced = data.top.slice(0, 4);
        } else if (window.innerWidth <= 750 && window.innerWidth > 500) {
          this.topMangaSliced = data.top.slice(0, 6);
        } else if (window.innerWidth <= 525) {
          this.topMangaSliced = data.top.slice(0, 6);
        } else {
          this.topMangaSliced = data.top.slice(0, 1);
        }

        this.topMangaAll = data.top.slice(0, 48);

        //console.log(this.topMangaAll);

        //Ternary operator for null episodes
      } catch (error) {
        console.log(error);
        alert("Fetch failed for top manga.");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.display-section {
  width: var(--section-width);
  margin: 4rem auto 0 auto;
  background-color: var(--surface-color);
  padding: var(--section-padding);
  //display: inline-block;
}

.section-text {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 2rem 0.5rem;
}
.see-more-btn {
  font-size: 1.8rem;
  margin: 0 3rem 0 3rem;
  color: var(--primary-color);
}
.see-more-btn:hover {
  cursor: pointer;
}
</style>
