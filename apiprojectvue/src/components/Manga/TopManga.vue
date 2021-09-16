<template>
  <div class="seasonals-section display-section">
    <div class="section-text">
      <h2 id="manga-header" class="section-header">Top Manga</h2>

      <p
        v-on:click="changeShowComponent"
        class="see-more-btn"
        id="manga-see-more"
      >
        See All
      </p>
    </div>

    <component
      v-bind:is="showComponent"
      :topMangaAll="topMangaAll"
      :topMangaSliced="topMangaSliced"
    ></component>
    <!-- 
    <top-manga-cards-six :topMangaSliced="topMangaSliced"></top-manga-cards-six>
    <top-manga-cards-all></top-manga-cards-all> -->
  </div>
</template>

<script>
import TopMangaCardsAll from "./TopMangaCardsAll.vue";
import TopMangaCardsSix from "./TopMangaCardsSix.vue";

export default {
  name: "TopManga",
  props: {},
  components: {
    TopMangaCardsAll,
    TopMangaCardsSix,
  },
  data() {
    return {
      topManga: [],
      topMangaSliced: [],
      topMangaAll: [],
      showComponent: TopMangaCardsSix,
    };
  },
  computed: {
    /* seasonalPosterImg: function () {
      //return this.singlePokemon.sprites.front_default;
      return `https://pokeres.bastionbot.org/images/pokemon/${this.singlePokemon.id}.png`;
    }, */
    /*  pkmnPath: function () {
      return `/pkmn/${this.singlePokemon.id}`;
    }, */
  },
  created: function () {
    this.fetchTopManga();
  },
  methods: {
    changeShowComponent: function () {
      if (this.showComponent === TopMangaCardsSix) {
        this.showComponent = TopMangaCardsAll;
        document.getElementById("manga-see-more").innerHTML = "See Less";
      } else {
        this.showComponent = TopMangaCardsSix;
        document.getElementById("manga-see-more").innerHTML = "See More";
      }
    },
    fetchTopManga: async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/top/manga/1/manga"
        );
        const rawData = await response.json();
        //console.log(rawData.top);
        const data = rawData.top.filter(function (obj) {
          return obj.type == "Manga";
        });
        //console.log(data);

        this.topManga = data;
        //console.log(data);

        if (window.innerWidth > 1300) {
          this.topMangaSliced = data.slice(0, 6);
        } else if (window.innerWidth <= 1300 && window.innerWidth > 1000) {
          this.topMangaSliced = data.slice(0, 5);
        } else if (window.innerWidth <= 1000 && window.innerWidth > 750) {
          this.topMangaSliced = data.slice(0, 4);
        } else if (window.innerWidth <= 750 && window.innerWidth > 500) {
          this.topMangaSliced = data.slice(0, 6);
        } else if (window.innerWidth <= 525) {
          this.topMangaSliced = data.slice(0, 6);
        } else {
          this.topMangaSliced = data.slice(0, 1);
        }

        this.topMangaAll = data.slice(0, 48);

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

@media screen and (max-width: 767px) {
  #manga-header {
    font-size: 3rem;
  }
}
</style>
