<template>
  <div>
    <warning-bar
      msg="Due to an ongoing DDOS attack, loading speeds may be slow. We apologize for
    any inconvienience."
    ></warning-bar>
    <div class="anime-page-container-desktop">
      <!--     <router-link :to="home">
      <p class="back-to-home">Back to Main Page</p>
      </router-link> -->

      <section class="top-panel">
        <div class="top-panel-left">
          <img :src="singleAnimeData.image_url" alt="" class="anime-img" />

          <section class="broadcast-panel panel">
            <ul class="broadcast-list">
              <li v-if="singleAnimeData.airing" class="broadcast-item">
                Currently airing on {{ singleAnimeData.broadcast }}
              </li>
              <li
                v-else-if="singleAnimeData.aired.string == 'Not available'"
                class="broadcast-item"
              >
                Air date: Unknown
              </li>
              <li
                v-else-if="!singleAnimeData.airing && singleAnimeData.premiered"
                class="broadcast-item"
              >
                Air date: {{ singleAnimeData.premiered }}
              </li>
              <li
                v-else-if="singleAnimeData.aired.string"
                class="broadcast-item"
              >
                Air Date: {{ singleAnimeData.aired.string }}
              </li>

              <li v-if="singleAnimeData.duration" class="broadcast-item">
                Episode duration: {{ singleAnimeData.duration }}
              </li>

              <li class="broadcast-item">
                {{ singleAnimeData.episodes }} episodes
              </li>
            </ul>
          </section>
        </div>
        <div class="top-panel-right">
          <span class="top-panel-right-filler flex-grow-1"></span>
          <div class="top-panel-text">
            <h2 class="anime-title">{{ singleAnimeData.title }}</h2>
            <h2
              v-show="singleAnimeData.title_english"
              class="anime-title"
              id="anime-title-english"
            >
              ({{ singleAnimeData.title_english }})
            </h2>
            <p class="anime-synopsis">{{ singleAnimeData.synopsis }}</p>

            <!-- <div class="top-panel-background"></div> -->
          </div>
        </div>
      </section>

      <section class="main-panel">
        <div class="left-section">
          <section class="score-panel panel">
            <ul class="score-list">
              <li v-if="singleAnimeData.score" class="score-item">
                Rating: {{ singleAnimeData.score }}/10
              </li>
              <li v-if="singleAnimeData.rank" class="score-item">
                Rank: #{{ singleAnimeData.rank }}
              </li>
              <li v-if="singleAnimeData.airing" class="score-item">
                Popularity: {{ singleAnimeData.members }} people watching (#{{
                  singleAnimeData.popularity
                }})
              </li>
              <li
                v-if="singleAnimeData.status == 'Finished Airing'"
                class="score-item"
              >
                Popularity: {{ singleAnimeData.members }} people watched (#{{
                  singleAnimeData.popularity
                }})
              </li>
              <li
                v-if="singleAnimeData.status == 'Not yet aired'"
                class="score-item"
              >
                Popularity: {{ singleAnimeData.members }} planning to watch (#{{
                  singleAnimeData.popularity
                }})
              </li>
            </ul>
          </section>

          <section class="anime-desc-panel panel">
            <ul class="anime-desc-list">
              <li class="anime-desc-item">
                Genres:
                <span
                  v-for="(genre, index) in singleAnimeData.genres"
                  :key="index"
                >
                  {{ genre.name
                  }}<span v-if="index != singleAnimeData.genres.length - 1"
                    >,</span
                  >
                </span>
              </li>
              <li class="anime-desc-item">
                Source: {{ singleAnimeData.source }}
              </li>
              <li
                v-if="singleAnimeData.rating != 'None'"
                class="anime-desc-item"
              >
                {{ singleAnimeData.rating }}
              </li>
            </ul>
          </section>

          <section class="studios-panel panel">
            <ul class="studios-list">
              <li
                v-if="singleAnimeData.studios.length == 1"
                class="studios-item"
              >
                Studio:
                <span
                  v-for="(studio, index) in singleAnimeData.studios"
                  :key="index"
                >
                  {{ studio.name
                  }}<span v-if="index != singleAnimeData.studios.length - 1"
                    >,</span
                  >
                </span>
              </li>
              <li
                v-if="singleAnimeData.studios.length > 1"
                class="studios-item"
              >
                Studios:
                <span
                  v-for="(studio, index) in singleAnimeData.studios"
                  :key="index"
                >
                  {{ studio.name
                  }}<span v-if="index != singleAnimeData.studios.length - 1"
                    >,</span
                  >
                </span>
              </li>
            </ul>
          </section>

          <section class="related-panel panel">
            <ul class="related-list">
              <li related-item v-if="singleAnimeData.related.Adaptation[0]">
                Adaptation of
                <a
                  class="related-link"
                  :href="singleAnimeData.related.Adaptation[0].url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ singleAnimeData.related.Adaptation[0].name }}
                  <!-- ({{
                    singleAnimeData.related.Adaptation[0].type
                  }}) --></a
                >
              </li>
              <li related-item v-if="singleAnimeData.related.Prequel">
                Prequel:
                <a
                  class="related-link"
                  :href="singleAnimeData.related.Prequel[0].url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ singleAnimeData.related.Prequel[0].name }}
                </a>
              </li>
              <li related-item v-if="singleAnimeData.related.Sequel">
                Sequel:
                <a
                  class="related-link"
                  :href="singleAnimeData.related.Sequel[0].url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ singleAnimeData.related.Sequel[0].name }}
                </a>
              </li>
            </ul>
          </section>

          <section class="links-section">
            <a
              class="link-to-mal"
              :href="singleAnimeData.url"
              target="_blank"
              rel="noopener noreferrer"
              >Link to MAL</a
            >
          </section>
        </div>

        <div class="right-section">
          <section class="music-panel panel">
            <ul class="songs-list">
              <li
                v-if="singleAnimeData.opening_themes.length == 1"
                class="songs-list-item songs-list-header"
              >
                Opening Theme:
              </li>
              <li
                v-if="singleAnimeData.opening_themes.length > 1"
                class="songs-list-item songs-list-header"
              >
                Opening Themes:
              </li>
              <li
                class="songs-list-item"
                v-for="opening in singleAnimeData.opening_themes"
                :key="opening"
              >
                {{ opening }}
              </li>
              <br />
              <br />
              <li
                v-if="singleAnimeData.ending_themes.length == 1"
                class="songs-list-item songs-list-header"
              >
                Ending Theme:
              </li>
              <li
                v-if="singleAnimeData.ending_themes.length > 1"
                class="songs-list-item songs-list-header"
              >
                Ending Themes:
              </li>
              <li
                class="songs-list-item"
                v-for="ending in singleAnimeData.ending_themes"
                :key="ending"
              >
                {{ ending }}
              </li>
            </ul>
          </section>

          <!--         <section class="related-panel">
          <ul class="related-list">
            <li class="related-item">Adaptation</li>
            <li class="related-item">Prequel</li>
            <li class="related-item">Sequel</li>
            <li class="related-item">Side Story</li>
          </ul>
        </section> -->

          <character-staff-section
            :characterStaff="characterStaff"
            :characterStaffRest="characterStaffRest"
          />

          <section class="recommendations-panel">
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
          </section>
        </div>
      </section>
    </div>

    <!-- --------------------------------------------------------------------- -->
    <!-- --------------------------------------------------------------------- -->
    <!-- --------------------------------------------------------------------- -->
    <!-- --------------------------------------------------------------------- -->

    <div class="anime-page-container-mobile">
      <section class="top-panel-mobile">
        <div class="top-panel-main-title-mobile">
          <h2 class="anime-title-mobile">{{ singleAnimeData.title }}</h2>
          <h2
            v-show="singleAnimeData.title_english"
            class="anime-title-mobile"
            id="anime-title-english-mobile"
          >
            ({{ singleAnimeData.title_english }})
          </h2>
        </div>

        <div class="top-panel-main-mobile">
          <img
            :src="singleAnimeData.image_url"
            alt=""
            class="anime-img-mobile"
          />
          <div class="top-panel-info-mobile">
            <ul class="score-list-mobile top-panel-list-mobile">
              <li v-if="singleAnimeData.score" class="score-item">
                Rating: {{ singleAnimeData.score }}/10
              </li>
              <li v-if="singleAnimeData.rank" class="score-item">
                Rank: #{{ singleAnimeData.rank }}
              </li>
              <li v-if="singleAnimeData.airing" class="score-item">
                {{ singleAnimeData.members }} people watching (#{{
                  singleAnimeData.popularity
                }})
              </li>
              <li
                v-if="singleAnimeData.status == 'Finished Airing'"
                class="score-item"
              >
                {{ singleAnimeData.members }} people watched (#{{
                  singleAnimeData.popularity
                }})
              </li>
              <li
                v-if="singleAnimeData.status == 'Not yet aired'"
                class="score-item"
              >
                {{ singleAnimeData.members }} planning to watch (#{{
                  singleAnimeData.popularity
                }})
              </li>
            </ul>

            <ul class="top-panel-info-misc-list-mobile top-panel-list-mobile">
              <li
                v-if="singleAnimeData.studios.length == 1"
                class="studios-item"
              >
                Studio:
                <span
                  v-for="(studio, index) in singleAnimeData.studios"
                  :key="index"
                >
                  {{ studio.name
                  }}<span v-if="index != singleAnimeData.studios.length - 1"
                    >,</span
                  >
                </span>
              </li>
              <li
                v-if="singleAnimeData.studios.length > 1"
                class="studios-item"
              >
                Studios:
                <span
                  v-for="(studio, index) in singleAnimeData.studios"
                  :key="index"
                >
                  {{ studio.name
                  }}<span v-if="index != singleAnimeData.studios.length - 1"
                    >,</span
                  >
                </span>
              </li>
              <li class="broadcast-item">
                {{ singleAnimeData.episodes }} episodes
              </li>
            </ul>

            <ul class="link-to-mal-mobile top-panel-list-mobile">
              <a
                class="link-to-mal-mobile"
                :href="singleAnimeData.url"
                target="_blank"
                rel="noopener noreferrer"
                >Link to MAL</a
              >
            </ul>
            <button
              @click="showAnimeStatsModal = true"
              class="top-panel-info-more-mobile"
            >
              See More
            </button>
          </div>
        </div>
      </section>

      <anime-stats-modal
        v-if="showAnimeStatsModal"
        @closeModal="showAnimeStatsModal = false"
        :singleAnimeData="singleAnimeData"
      >
        <!-- you can use custom content here to overwrite default content 
        <h3 slot="header">custom header</h3> -->
      </anime-stats-modal>

      <section class="broadcast-section-mobile mobile-panel">
        <ul class="broadcast-list-mobile">
          <li v-if="singleAnimeData.airing" class="broadcast-item">
            Currently airing on {{ singleAnimeData.broadcast }}
          </li>
          <li
            v-else-if="singleAnimeData.aired.string == 'Not available'"
            class="broadcast-item"
          >
            Air date: Unknown
          </li>
          <li
            v-else-if="!singleAnimeData.airing && singleAnimeData.premiered"
            class="broadcast-item"
          >
            Air date: {{ singleAnimeData.premiered }}
          </li>
          <li v-else-if="singleAnimeData.aired.string" class="broadcast-item">
            Air Date: {{ singleAnimeData.aired.string }}
          </li>

          <li v-if="singleAnimeData.duration" class="broadcast-item">
            Episode duration: {{ singleAnimeData.duration }}
          </li>

          <li class="broadcast-item">
            {{ singleAnimeData.episodes }} episodes
          </li>
        </ul>
      </section>

      <!-- <section class="anime-nav">
        <ul class="anime-navbar-list">
          <li class="anime-navbar-list-item"><a href="#">Overview</a></li>
          <li class="anime-navbar-list-item"><a href="#">Music</a></li>
          <li class="anime-navbar-list-item"><a href="#">Characters</a></li> -->
      <!-- <div class="anime-nav-fade"></div> -->
      <!-- </ul>
      </section> -->

      <section class="synopsis-section-mobile">
        <h3 class="synopsis-header-mobile section-header-mobile">Synopsis</h3>
        <p class="anime-synopsis-mobile">
          {{ singleAnimeData.synopsis }}
        </p>
      </section>

      <section class="music-section-mobile mobile-panel">
        <h3 class="music-header-mobile section-header-mobile">
          Opening and Ending Songs
        </h3>
        <ul class="songs-list-mobile">
          <li
            v-if="singleAnimeData.opening_themes.length == 1"
            class="songs-list-item songs-list-header"
          >
            Opening Theme:
          </li>
          <li
            v-if="singleAnimeData.opening_themes.length > 1"
            class="songs-list-item songs-list-header"
          >
            Opening Themes:
          </li>
          <li
            class="songs-list-item"
            v-for="opening in singleAnimeData.opening_themes"
            :key="opening"
          >
            {{ opening }}
          </li>
          <br />

          <li
            v-if="singleAnimeData.ending_themes.length == 1"
            class="songs-list-item songs-list-header"
          >
            Ending Theme:
          </li>
          <li
            v-if="singleAnimeData.ending_themes.length > 1"
            class="songs-list-item songs-list-header"
          >
            Ending Themes:
          </li>
          <li
            class="songs-list-item"
            v-for="ending in singleAnimeData.ending_themes"
            :key="ending"
          >
            {{ ending }}
          </li>
        </ul>
      </section>

      <section class="related-section-mobile mobile-panel">
        <ul class="related-list">
          <li related-item v-if="singleAnimeData.related.Adaptation[0]">
            Adaptation of
            <a
              class="related-link"
              :href="singleAnimeData.related.Adaptation[0].url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ singleAnimeData.related.Adaptation[0].name }}
              <!-- ({{
                    singleAnimeData.related.Adaptation[0].type
                  }}) --></a
            >
          </li>
          <li related-item v-if="singleAnimeData.related.Prequel">
            Prequel:
            <a
              class="related-link"
              :href="singleAnimeData.related.Prequel[0].url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ singleAnimeData.related.Prequel[0].name }}
            </a>
          </li>
          <li related-item v-if="singleAnimeData.related.Sequel">
            Sequel:
            <a
              class="related-link"
              :href="singleAnimeData.related.Sequel[0].url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ singleAnimeData.related.Sequel[0].name }}
            </a>
          </li>
        </ul>
      </section>

      <section class="character-staff-section-mobile">
        <character-staff-section
          :characterStaff="characterStaff"
          :characterStaffRest="characterStaffRest"
        />
      </section>

      <section class="recommendations-panel">
        <section class="character-staff-header-mobile">
          <h3>Recommendations</h3>
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
      </section>

      <!-- 101010101010101010101010101010101010101010101010101010101010101010101010 -->
      <!-- 101010101010101010101010101010101010101010101010101010101010101010101010 -->
    </div>
  </div>
</template>

<script>
import CharacterStaffSection from "../components/AnimePage/CharacterStaffSection.vue";
import AnimeStatsModal from "../components/AnimePage/AnimeStatsModal.vue";
import recommendationCards from "../components/RecommendationCards.vue";
import WarningBar from "@/components/WarningBar.vue";

export default {
  components: {
    CharacterStaffSection,
    AnimeStatsModal,
    recommendationCards,
    WarningBar,
  },
  data() {
    return {
      singleAnimeData: {},
      characterStaff: {},
      characterStaffRest: {},
      recommendations: [],
      recommendationsRest: [],
      showAnimeStatsModal: false,
      showRecSeeMore: true,
      showRecRest: false,
    };
  },
  computed: {
    home: function () {
      return "/";
    },
  },
  created: function () {
    this.fetchData();
    this.updateTitle();
  },
  watch: {
    $route() {
      /* this.fetchData(); */
      location.reload();
      this.updateTitle();
    },
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v3/anime/${this.$route.params.id}`
        );
        //console.log(`https://api.jikan.moe/v3/anime/${this.$route.params.id}`);
        const data = await response.json();
        this.singleAnimeData = data;
        //console.log(data);

        const responseTwo = await fetch(
          `https://api.jikan.moe/v3/anime/${this.$route.params.id}/characters_staff`
        );
        //console.log(`https://api.jikan.moe/v3/anime/${this.$route.params.id}`);
        const dataTwo = await responseTwo.json();
        //console.log(dataTwo);

        /*         const dataTwoJapaneseTest = dataTwo.characters.foreach((character) => {
          character.voice_actors.filter(function (voiceActor) {
            return voiceActor.language == "Japanese";
          });
          console.log(character);
        });
        //console.log(dataTwoJapaneseTest); */

        /*     dataTwo.characters.foreach((character) => {
          console.log(character.name);
        }); */

        /*        for (let character of dataTwo.characters) {
          const japaneseVA = function () {
            const characterArray = Array.from(character);
            if (characterArray[i].language !== "Japanese") {
              myArray.splice(i, 1);
            }
            console.log(japaneseVA);
          }; */

        /* const japaneseVA = character.voice_actors.filter(function (
            voiceActor
          ) {
            return voiceActor.language == "Japanese";
          }); */
        const dataTwoSliced = dataTwo.characters.slice(0, 9);
        const dataTwoSlicedRest = dataTwo.characters.slice(9, 360);
        console.log(dataTwoSlicedRest);

        Array.from(dataTwoSliced).forEach((character) => {
          const characterVAs = character.voice_actors;
          for (var i = characterVAs.length - 1; i >= 0; --i) {
            if (characterVAs[i].language !== "Japanese") {
              characterVAs.splice(i, 1);
            }
          }
          //console.log(characterVAs);
        });
        Array.from(dataTwoSlicedRest).forEach((character) => {
          const characterVAs = character.voice_actors;
          for (var i = characterVAs.length - 1; i >= 0; --i) {
            if (characterVAs[i].language !== "Japanese") {
              characterVAs.splice(i, 1);
            }
          }
          //console.log(characterVAs);
        });

        /* THIS WORKS
         const rakuVAs = dataTwo.characters[0].voice_actors;
        for (var i = rakuVAs.length - 1; i >= 0; --i) {
          if (rakuVAs[i].language !== "Japanese") {
            rakuVAs.splice(i, 1);
          }
        }
        console.log(rakuVAs); */

        this.characterStaff = dataTwoSliced;
        this.characterStaffRest = dataTwoSlicedRest;

        const responseThree = await fetch(
          `https://api.jikan.moe/v3/anime/${this.$route.params.id}/recommendations`
        );
        //console.log(`https://api.jikan.moe/v3/anime/${this.$route.params.id}`);
        const dataThree = await responseThree.json();
        this.recommendations = dataThree.recommendations.slice(0, 10);
        this.recommendationsRest = dataThree.recommendations.slice(10, 15);
        //console.log(dataThree);

        /* let studios = "";
        if (data.studios.length === 0) {
          studios = "Not yet known";
        } else {
          studios = data.studios[0].name;
        }

        let rank = "";
        if (data.rank === null) {
          rank = "?";
        } else {
          rank = data.rank;
        }

        let score = "";
        if (data.score === null) {
          score = "?";
        } else {
          score = data.score;
        }

        let episodes = "";
        if (data.episodes === null) {
          episodes = "?";
        } else {
          episodes = data.episodes;
        } */

        document.title = this.singleAnimeData.title + " - Find Anime";
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
  padding: 4rem 0;

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
