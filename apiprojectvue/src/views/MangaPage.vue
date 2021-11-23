<template>
  <div class="anime-page-overall">
    <!-- <warning-bar
      msg="Due to an ongoing DDOS attack, loading speeds may be slow. We apologize for
    any inconvienience."
    ></warning-bar> -->
    <navbar />
    <div class="anime-page-container-desktop">
      <!--     <router-link :to="home">
      <p class="back-to-home">Back to Main Page</p>
      </router-link> -->

      <section class="top-panel">
        <div class="top-panel-left">
          <img :src="singleMangaData.image_url" alt="" class="anime-img" />

          <section class="broadcast-panel panel">
            <ul class="broadcast-list">
                <li class="broadcast-item" v-if="singleMangaData.status = 'Publishing'">
                   Ongoing releases
                </li>
                <li class="broadcast-item" v-else>Status: {{singleMangaData.status}}</li>
              <!-- <li v-if="singleMangaData.publishing = true" class="broadcast-item">
                Status: Ongoing
              </li>
              <li
                v-else-if="singleMangaData.airing == 'Not available'"
                class="broadcast-item"
              >
                Air date: Unknown
              </li> -->
              <!-- <li
                v-else-if="!singleMangaData.airing && singleMangaData.premiered"
                class="broadcast-item"
              >
                Air date: {{ singleMangaData.premiered }}
              </li>
              <li
                v-else-if="singleMangaData.aired.string"
                class="broadcast-item"
              >
                Air Date: {{ singleMangaData.aired.string }}
              </li>

              <li v-if="singleMangaData.duration" class="broadcast-item">
                Episode duration: {{ singleMangaData.duration }}
              </li> -->

<li class="broadcast-item" v-if="singleMangaData.volumes">
                {{ singleMangaData.volumes }} volumes
              </li>

              <li class="broadcast-item" v-if="singleMangaData.chapters">
                {{ singleMangaData.chapters }} chapters
              </li>
                        </ul>
          </section>
        </div>
        <div class="top-panel-right">
          <span class="top-panel-right-filler flex-grow-1"></span>
          <div class="top-panel-text">
            <h2 class="anime-title">{{ singleMangaData.title }}</h2>
            <h2
              v-show="singleMangaData.title_english"
              class="anime-title"
              id="anime-title-english"
            >
              ({{ singleMangaData.title_english }})
            </h2>
            <p class="anime-synopsis">{{ singleMangaData.synopsis }}</p>

            <!-- <div class="top-panel-background"></div> -->
          </div>
        </div>
      </section>

      <section class="main-panel">
        <div class="left-section">
          <section class="score-panel panel">
            <ul class="score-list">
              <li v-if="singleMangaData.score" class="score-item">
                Rating: {{ singleMangaData.score }}/10
              </li>
              <li v-if="singleMangaData.rank" class="score-item">
                Rank: #{{ singleMangaData.rank }}
              </li>
              <li v-if="singleMangaData.status = 'Publishing'" class="score-item">
                Popularity: {{ singleMangaData.members }} readers (#{{
                  singleMangaData.popularity
                }})
              </li>
              <!-- <li
                v-else
                class="score-item"
              >
                Popularity: {{ singleMangaData.members }} planning to read (#{{
                  singleMangaData.popularity
                }})
              </li> -->
              <!-- <li
                v-if="singleMangaData.status == 'Not yet aired'"
                class="score-item"
              >
                Popularity: {{ singleMangaData.members }} planning to watch (#{{
                  singleMangaData.popularity
                }})
              </li> -->
            </ul>
          </section>

          <section class="anime-desc-panel panel">
            <ul class="anime-desc-list">
              <li class="anime-desc-item">
                Genres:
                <span
                  v-for="(genre, index) in singleMangaData.genres"
                  :key="index"
                >
                  {{ genre.name
                  }}<span v-if="index != singleMangaData.genres.length - 1"
                    >,</span
                  >
                </span>
              </li>
              
              <!-- <li
                v-if="singleMangaData.rating != 'None'"
                class="anime-desc-item"
              >
                {{ singleMangaData.rating }}
              </li> -->
            </ul>
          </section>

          <section class="studios-panel panel">
            <ul class="studios-list">
              <li
                v-if="singleMangaData.authors.length == 1"
                class="studios-item"
              >
                Author:
                <span
                  v-for="(author, index) in singleMangaData.authors"
                  :key="index"
                >
                  {{ author.name
                  }}<span v-if="index != singleMangaData.authors.length - 1"
                    >,</span
                  >
                </span>
              </li>
              <li
                v-if="singleMangaData.authors.length > 1"
                class="studios-item"
              >
                Authors:
                <span
                  v-for="(author, index) in singleMangaData.authors"
                  :key="index"
                >
                  {{ author.name
                  }}<span v-if="index != singleMangaData.authors.length - 1"
                    >,</span
                  >
                </span>
              </li>
            </ul>
          </section>

          

          <section class="links-section">
            <a
              class="link-to-mal"
              :href="singleMangaData.url"
              target="_blank"
              rel="noopener noreferrer"
              >Link to MAL</a
            >
          </section>
        </div>

        <div class="right-section">
                    <section class="related-panel panel"  v-if="singleMangaData.related.Adaptation">
           
              <ul class='related-list adaptation-list'  v-if="singleMangaData.related.Adaptation.length >= 1">
                <h5>Adaptations:</h5>
                <li class="adaptation-list-item" v-for="(adaptation, index) in singleMangaData.related.Adaptation" :key="index"><a  :href="adaptation.url">{{ adaptation.name }} ({{adaptation.type}})</a>
                  <!-- ({{
                    singleMangaData.related.Adaptation[0].type
                  }}) -->
              </li></ul>
              <!-- <li class='related-item'  v-if="singleMangaData.related.['Side story'].length >= 1">
                Adaptations: 
                <a v-for="(adaptation, index) in singleMangaData.related.Adaptation" :key="index" :href="adaptation.url">{{ adaptation.name }} ({{adaptation.type}})</a> 
              </li> --> <!-- SIDE STORY HAS SPACE!!!!!!!!!!!!!!!!! -->
              <!-- <li class='related-item'  v-if="singleMangaData.related.Spin-off.length >= 1">
                Spin-offs: 
                <a v-for="(spinoff, index) in singleMangaData.related.Spin-off" :key="index" :href="spinoff.url">{{ spinoff.name }} ({{spinoff.type}})</a>
              </li> --> <!-- SPIN-OFF HAS DASH!!!!!!!!!!!!!!!!!!!!!!!!!! -->
              <!-- <li class='related-item' v-if="singleMangaData.related.Prequel">
                Prequel:
                <a
                  class="related-link"
                  :href="singleMangaData.related.Prequel[0].url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ singleMangaData.related.Prequel[0].name }}
                </a>
              </li> -->
              <!-- <li class='related-item' v-if="singleMangaData.related.Sequel">
                Sequel:
                <a
                  class="related-link"
                  :href="singleMangaData.related.Sequel[0].url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ singleMangaData.related.Sequel[0].name }}
                </a>
              </li> -->
            
            <!-- ADD ADAPTATION, SIDE STORY, SPIN-OFF, ALTERNATIVE VERSION (maybe combine these?) OTHER -->
          </section>
          
          <section class="background-panel panel">
            <p class="data-background">{{singleMangaData.background}}</p>
          </section>
          <ul class="related-list">
           
            
          </ul>
        

          <!-- <character-staff-section
            :characterStaff="characterStaff"
            :characterStaffRest="characterStaffRest"
          /> -->

         <!--  <section class="recommendations-panel">
            <section class="character-staff-header-desktop">
              <p
                v-if="showRecSeeMore == true"
                v-on:click="
                  showRecRest = true;
                  showRecSeeMore = false;
                "
                class="see-more-btn visibility-hidden"
                id="character-staff-see-more"
              >
                See More
              </p>
              <p
                v-if="showRecSeeMore == false"
                v-on:click="
                  showRecRest = false;
                  showRecSeeMore = true;
                "
                class="see-more-btn visibility-hidden"
                id="character-staff-see-less"
              >
                See Less
              </p>
              <h3 id="character-staff-header">Recommendations</h3>
              <p
                v-if="showRecSeeMore == true"
                v-on:click="
                  showRecRest = true;
                  showRecSeeMore = false;
                "
                class="see-more-btn"
                id="character-staff-see-more"
              >
                See More
              </p>
              <p
                v-if="showRecSeeMore == false"
                v-on:click="
                  showRecRest = false;
                  showRecSeeMore = true;
                "
                class="see-more-btn"
                id="character-staff-see-less"
              >
                See Less
              </p>
            </section>

            <recommendation-cards
              :recommendations="recommendations"
              :recommendationsRest="recommendationsRest"
              :showRecRest="showRecRest"
            ></recommendation-cards>
          </section> -->
        </div>
      </section>
    </div>

    <!-- --------------------------------------------------------------------- -->
    <!-- --------------------------------------------------------------------- -->
    <!-- --------------------------------------------------------------------- -->
    <!-- --------------------------------------------------------------------- -->

    
  </div>
</template>

<script>
//import WarningBar from "@/components/WarningBar.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    //WarningBar,
    Navbar,
  },
  data() {
    return {
      singleMangaData: {},
    };
  },
  computed: {
    home: function () {
      return "/";
    },
  },
  created: function () {
    this.fetchData();
    //this.updateTitle();
  },
  watch: {
    $route() {
      /* this.fetchData(); */
      location.reload();
      //this.updateTitle();
    },
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v3/manga/${this.$route.params.id}`
        );
        //console.log(`https://api.jikan.moe/v3/anime/${this.$route.params.id}`);
        const data = await response.json();
        document.title = data.title + " - Find Manga";
        this.singleMangaData = data;
        console.log(data);
        //document.title = this.singleMangaData.title + " - Find Anime";

       
      /*   const responseThree = await fetch(
          `https://api.jikan.moe/v3/anime/${this.$route.params.id}/recommendations`
        );
        //console.log(`https://api.jikan.moe/v3/anime/${this.$route.params.id}`);
        const dataThree = await responseThree.json();
        this.recommendations = dataThree.recommendations.slice(0, 10);
        this.recommendationsRest = dataThree.recommendations.slice(10, 15);
        //console.log(dataThree); */

        } catch (error) {
        console.log(error);
        alert("Error");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("../assets/main.scss");

:root {
  --img-width: 26rem;
  --container-width: 75vw;
  --top-panel-right-width: calc(var(--container-width) - var(--img-width));

  --left-section-width: 35rem;
  --right-section-padding-left: 3rem;
}

.anime-page-container-desktop {
  width: var(--container-width);
  min-height: 100vh;
  margin: auto;
  padding: 8rem 0 4rem 0;

  /* background-color: black; */
  /*   display: flex;
    flex-direction: column;
    justify-content: center; */
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  background-color: var(--surface-color);
  padding: 2rem;
  padding-bottom: calc(2rem - var(--li-padding-bottom));
  border-radius: 1rem;
  margin: 3rem 0;
}
.main-panel {
  display: flex;
  width: var(--container-width);
}
.left-section {
  width: var(--left-section-width);
}
.right-section {
  width: calc(
    var(--container-width) - var(--left-section-width) -
      var(--right-section-padding-left)
  );
  flex-grow: 1;
  padding-left: var(--right-section-padding-left);
}

.top-panel {
  display: flex;
  width: var(--container-width);

  border-radius: 3rem;
}
.anime-img {
  width: var(--img-width);
  height: auto;
  //object-fit: cover;
  align-self: center;
}
.flex-grow-1 {
  flex-grow: 1;
}
.top-panel-left {
  display: flex;
  flex-direction: column;
}
.top-panel-right {
  width: var(--top-panel-right-width);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.top-panel-text {
  padding: 2rem 3rem;
  background-color: var(--surface-color);
  border-radius: 0 3rem 3rem 0;
  width: 100%;
  max-height: 44rem;
  overflow-y: auto;
}

.anime-title {
  font-size: 3rem;
  margin: 0;
}
#anime-title-english {
  font-size: 2.5rem;
}
.anime-synopsis {
  margin-top: 2rem;
  display: block;
  //overflow-y: auto;
  //max-height: 30.5rem;
  //white-space: nowrap;
  //text-overflow: ellipsis;

  /* display: -webkit-box;
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical; */
}

.broadcast-panel {
  align-items: center;
  text-align: center;
  margin: 0;
  border-radius: 0 0 0 3rem;
  width: var(--img-width);
}

.link-to-mal {
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  display: inline-block;

  font-family: var(--font);
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--off-white);

  text-decoration: none;
}

.character-staff-header-desktop {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  position: relative;
  padding: 0 3rem;
}
.character-staff-panel {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.recommendations-panel {
  /* width: calc(
    var(--container-width) - var(--left-section-width) -
      var(--right-section-padding-left)
  ); */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  //background-color: var(--surface-color);

  margin-top: 4rem;
  border-radius: 1rem;
}
.recommendations-header {
  text-align: center;
  margin: 0 0 2rem 0;
  line-height: 1;
}

.anime-page-container-mobile {
  display: none;
}
.visibility-hidden {
  visibility: hidden;
}

.songs-list {
  padding-left: 2rem;
}

.related-link {
  color: var(--primary-color);
}
.related-link:hover {
  text-decoration: underline;
}

/* ///////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////// */
.anime-page-container-mobile {
  width: 100%;
  min-height: 100vh;
  margin: auto;
  padding-bottom: 4rem;
}

.mobile-panel {
  /*   display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left; */

  //background-color: var(--surface-color);
  padding: 2rem;
  padding-bottom: calc(2rem - var(--li-padding-bottom));
}

.top-panel-main-title-mobile {
  padding: 2rem;
  //background-color: var(--surface-color);
}
.anime-title-mobile {
  font-size: 2.5rem;
}
#anime-title-english-mobile {
  font-size: 2rem;
}
.top-panel-main-mobile {
  display: flex;
  //background-color: var(--surface-color);
}
.anime-img-mobile {
  width: 42%;
}
.top-panel-info-mobile {
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.top-panel-list-mobile > li,
.top-panel-list-mobile > li > span {
  font-size: calc(var(--mobile-small-font-size) + 0.05rem);
}
/* .score-list-mobile {
  margin-bottom: 2.5rem;
} */
.link-to-mal-mobile {
  color: var(--primary-color);
  font-size: calc(var(--mobile-small-font-size) + 0.05rem);
}
.top-panel-info-more-mobile {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  font-size: calc(var(--mobile-small-font-size) + 0.1rem);
}

.broadcast-section-mobile {
  background-color: var(--surface-color);
}
.broadcast-list-mobile > li {
  font-size: var(--mobile-small-font-size);
}

.anime-navbar-list {
  display: flex;
  justify-content: space-around;
  padding: 1.4rem 1rem;
  overflow-x: scroll;
  position: relative;
  //scrollbar-color: var(--primary-color) var(--surface-color);
  background-color: var(--surface-color-2);
}
.anime-navbar-list > li > a {
  color: var(--primary-color);
  font-size: var(--mobile-small-font-size);
  padding: 0 1rem;
}
/* .anime-nav-fade {
  background-image: linear-gradient(to right, var(--black), #ffffff00);
  position: absolute;
  height: 100%;
  width: 5rem;
  top: 0;
  right: 0;
} */

.synopsis-section-mobile {
  padding: 2.5rem 3rem 3rem 3rem;
}
.section-header-mobile {
  font-size: 2.4rem;
}
.anime-synopsis-mobile {
  text-align: left;
  max-height: 30rem;
  overflow-y: scroll;
}

.songs-list-mobile {
  text-align: left;
  padding-left: 2rem;
}
.songs-list-header {
  margin-left: -2rem;
}

.related-section-mobile {
  background-color: var(--surface-color);
}

.character-staff-section-mobile {
  padding: 2rem;
}

.adaptation-list {
  list-style-type: circle;
  list-style-position: inside;
}

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

@media screen and (max-width: 1344px) {
  :root {
    --left-section-width: var(--img-width);
  }
}

@media screen and (max-width: 1191px) {
  .visibility-hidden {
    display: none;
  }
  .character-staff-header-desktop {
    padding-right: 0;
  }
  :root {
    --container-width: 90vw;
  }
}

@media screen and (max-width: 767px) {
  .anime-page-container-desktop {
    display: none;
  }
  .character-staff-header-desktop {
    display: none;
  }
  .anime-page-container-mobile {
    display: block;
  }
  p,
  li,
  span {
    font-size: var(--mobile-small-font-size);
  }
  .character-staff-div-main {
    margin-top: 1rem;
  }
}

//USE DIFFERENT ANIME.VUE FILE FOR MOBILE
</style>


<!-- authors: Array of objects containing name
background: string
chapters: null
demographics: Array of objects containing name, type, url
favorites: numeric
genres: Array of objects containing name, type
image_url: string
mal_id: numeric
members: numeric
popularity: numeric
published.string: string
publishing: boolean
rank: numeric
related.adaptation: Array of objects containing name, type
related.side story: Array of objects comtaining name, type
related.spin-off: Array of objects containing name, type
score: numeric
serializations: Array of objects containng name, type, url
status: string ("Publishing")
synopsis: string
themes: Array of objects containing name
title: string
title_english: string
title_synonyms: Array of strings
type: string
url: string
volumes: null -->