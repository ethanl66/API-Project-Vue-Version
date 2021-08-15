<template>
  <!-- VOICE ACTOR[0] FILTER FOR JAPANESE -->
  <div class="container">
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
            <li v-else-if="singleAnimeData.aired.string" class="broadcast-item">
              Air Date: {{ singleAnimeData.aired.string }}
            </li>

            <li v-if="singleAnimeData.duration" class="broadcast-item">
              Episode duration: {{ singleAnimeData.duration }}
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

          <div class="top-panel-background"></div>
        </div>
      </div>
    </section>

    <section class="main-panel">
      <div class="left-section">
        <section class="score-panel panel">
          <ul class="score-list">
            <li v-if="singleAnimeData.rank" class="score-item">
              Rank: #{{ singleAnimeData.rank }}
            </li>
            <li v-if="singleAnimeData.score" class="score-item">
              Rating: {{ singleAnimeData.score }}/10
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
            <li v-if="singleAnimeData.rating != 'None'" class="anime-desc-item">
              {{ singleAnimeData.rating }}
            </li>
          </ul>
        </section>

        <section class="studios-panel panel">
          <ul class="studios-list">
            <li v-if="singleAnimeData.studios.length == 1" class="studios-item">
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
            <li v-if="singleAnimeData.studios.length > 1" class="studios-item">
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

        <section class="character-staff-header">
          <p
            v-if="showCharacterStaffSeeMore == true"
            v-on:click="
              showCharacterStaffRest = true;
              showCharacterStaffSeeMore = false;
            "
            class="see-more-btn visibility-hidden"
            id="character-staff-see-more"
          >
            See More
          </p>
          <p
            v-if="showCharacterStaffSeeMore == false"
            v-on:click="
              showCharacterStaffRest = false;
              showCharacterStaffSeeMore = true;
            "
            class="see-more-btn visibility-hidden"
            id="character-staff-see-less"
          >
            See Less
          </p>
          <h3>Characters and Staff:</h3>
          <p
            v-if="showCharacterStaffSeeMore == true"
            v-on:click="
              showCharacterStaffRest = true;
              showCharacterStaffSeeMore = false;
            "
            class="see-more-btn"
            id="character-staff-see-more"
          >
            See More
          </p>
          <p
            v-if="showCharacterStaffSeeMore == false"
            v-on:click="
              showCharacterStaffRest = false;
              showCharacterStaffSeeMore = true;
            "
            class="see-more-btn"
            id="character-staff-see-less"
          >
            See Less
          </p>
        </section>
        <section class="character-staff-panel">
          <div
            v-for="character in characterStaff"
            :key="character"
            class="character-staff-div"
          >
            <div class="chara-img-div">
              <img :src="character.image_url" alt="" class="chara-img" />
            </div>
            <div class="chara-text">
              <p class="character-staff-item" id="chara-name">
                {{ character.name }}
              </p>
              <p class="character-staff-item" id="chara-role">
                {{ character.role }}
              </p>
              <p
                v-if="character.voice_actors[0]"
                class="character-staff-item"
                id="seiyuu-name"
              >
                {{ character.voice_actors[0].name }}
              </p>
            </div>
            <div class="chara-img-div">
              <img
                v-if="character.voice_actors[0]"
                :src="character.voice_actors[0].image_url"
                alt=""
                class="seiyuu-img"
              />
              <div
                class="seiyuu-img-blank"
                v-if="!character.voice_actors[0]"
                style="width: 5rem"
              ></div>
            </div>
          </div>

          <div class="character-staff-panel" v-if="showCharacterStaffRest">
            <div
              v-for="character in characterStaffRest"
              :key="character"
              class="character-staff-div"
            >
              <div class="chara-img-div">
                <img :src="character.image_url" alt="" class="chara-img" />
              </div>
              <div class="chara-text">
                <p class="character-staff-item" id="chara-name">
                  {{ character.name }}
                </p>
                <p class="character-staff-item" id="chara-role">
                  {{ character.role }}
                </p>
                <p
                  v-if="character.voice_actors[0]"
                  class="character-staff-item"
                  id="seiyuu-name"
                >
                  {{ character.voice_actors[0].name }}
                </p>
              </div>
              <div class="chara-img-div">
                <img
                  v-if="character.voice_actors[0]"
                  :src="character.voice_actors[0].image_url"
                  alt=""
                  class="seiyuu-img"
                />
                <div
                  class="seiyuu-img-blank"
                  v-if="!character.voice_actors[0]"
                  style="width: 5rem"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singleAnimeData: {},
      characterStaff: {},
      showCharacterStaffRest: false,
      showCharacterStaffSeeMore: true,
      characterStaffRest: {},
      recommendations: [],
    };
  },
  computed: {
    home: function () {
      return "/";
    },
  },
  created: function () {
    this.fetchData();
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
        this.recommendations = dataThree.recommendations.slice(0, 30);
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

  --left-section-width: 38rem;
  --right-section-padding-left: 3rem;
}

.container {
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

.character-staff-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  position: relative;
  padding: 0 2rem;
}
.character-staff-panel {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.character-staff-div {
  display: flex;
  margin: 0.5rem;
  background-color: var(--surface-color);
  border-radius: 0.5rem;
  padding: 2rem;

  box-sizing: content-box;
}
.chara-img-div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.chara-img,
.seiyuu-img {
  width: 5rem;
  height: auto;
}
.chara-text {
  width: 17rem;
  padding: 0 1.2rem;

  display: flex;
  flex-direction: column;
}

.chara-text > p {
  text-align: left;
}
#chara-role {
  font-size: 1.25rem;
}
#seiyuu-name {
  text-align: right;
  margin-top: auto;
}

.recommendations-panel {
  width: calc(
    var(--container-width) - var(--left-section-width) -
      var(--right-section-padding-left)
  );
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  background-color: var(--surface-color);
  padding: 3rem;
  border-radius: 1rem;
}
.recommendations-header {
  text-align: left;
  margin: 0 0 2rem 0;
  line-height: 1;
}
.visibility-hidden {
  visibility: hidden;
}

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

@media screen and (max-width: 1344px) {
  :root {
    --left-section-width: var(--img-width);
  }
}

@media screen and (max-width: 770px) {
  .container {
    width: var(--container-width);
    min-height: 100vh;
    margin: auto;
    padding-top: 4rem;

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

  .character-staff-panel {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .character-staff-div {
    display: flex;
    margin: 0.5rem;
    background-color: var(--surface-color);
    border-radius: 0.5rem;
    padding: 2rem;

    box-sizing: content-box;
  }
  .chara-img-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chara-img,
  .seiyuu-img {
    width: 5rem;
    height: auto;
  }
  /*   .seiyuu-img-blank {
    width: 5rem;
    border: 1px solid var(--off-white);
  } */
  .chara-text {
    width: 17rem;
    padding: 0 1.2rem;

    display: flex;
    flex-direction: column;
  }

  .chara-text > p {
    text-align: left;
  }
  #chara-role {
    font-size: 1.25rem;
  }
  #seiyuu-name {
    text-align: right;
    margin-top: auto;
  }

  .recommendations-panel {
    width: calc(
      var(--container-width) - var(--left-section-width) -
        var(--right-section-padding-left)
    );
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    background-color: var(--surface-color);
    padding: 3rem;
    border-radius: 1rem;
  }
  .recommendations-header {
    text-align: left;
    margin: 0 0 2rem 0;
    line-height: 1;
  }
}

//USE DIFFERENT ANIME.VUE FILE FOR MOBILE
</style>
