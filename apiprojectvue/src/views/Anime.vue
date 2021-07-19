<template>
  <div class="container">
    <!--     <router-link :to="home">
      <p class="back-to-home">Back to Main Page</p>
    </router-link> -->

    <section class="top-panel">
      <img :src="singleAnimeData.image_url" alt="" class="anime-img" />
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
        </div>
      </div>
    </section>
    <br />
    <section class="broadcast-panel">
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
    <br />
    <section class="score-panel">
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
          v-if="singleAnimeData.status == 'Finished iring'"
          class="score-item"
        >
          Popularity: {{ singleAnimeData.members }} people watched (#{{
            singleAnimeData.popularity
          }})
        </li>
        <li v-if="singleAnimeData.status == 'Not yet aired'" class="score-item">
          Popularity: {{ singleAnimeData.members }} planning to watch (#{{
            singleAnimeData.popularity
          }})
        </li>
      </ul>
    </section>
    <br />
    <section class="anime-desc-panel">
      <ul class="anime-desc-list">
        <li class="anime-desc-item">
          Genres:
          <span v-for="(genre, index) in singleAnimeData.genres" :key="index">
            {{ genre.name
            }}<span v-if="index != singleAnimeData.genres.length - 1">,</span>
          </span>
        </li>
        <li class="anime-desc-item">Source: {{ singleAnimeData.source }}</li>
        <li v-if="singleAnimeData.rating != 'None'" class="anime-desc-item">
          {{ singleAnimeData.rating }}
        </li>
      </ul>
    </section>
    <br />
    <section class="studios-panel">
      <ul class="studios-list">
        <li v-if="singleAnimeData.studios.length == 1" class="studios-item">
          Studio:
          <span v-for="(studio, index) in singleAnimeData.studios" :key="index">
            {{ studio.name
            }}<span v-if="index != singleAnimeData.studios.length - 1">,</span>
          </span>
        </li>
        <li v-if="singleAnimeData.studios.length > 1" class="studios-item">
          Studios:
          <span v-for="(studio, index) in singleAnimeData.studios" :key="index">
            {{ studio.name
            }}<span v-if="index != singleAnimeData.studios.length - 1">,</span>
          </span>
        </li>
      </ul>
    </section>
    <br />
    <section class="music-panel">
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
    <!-- LINK TO MAL -->
  </div>
  <!-- <div class="whole-page">
      <router-link :to="home">
      <p class="back-to-home">Back to Main Page</p>
    </router-link> 
    <div class="anime-info-page">
      <div class="info-left-panel">
        <img :src="singleAnimeData.image_url" alt="" />
        <ul class="left-panel-info">
          <li>Score: {{ singleAnimeData.score }}/10</li>
          <li>Rank: #{{ singleAnimeData.rank }}</li>
          <li>
            Popularity: {{ singleAnimeData.members }} (#{{
              singleAnimeData.popularity
            }})
          </li>

          <li>Episodes: {{ singleAnimeData.episodes }}</li>
          <li>Status: {{ singleAnimeData.status }}</li>
          <li>Aired: {{ singleAnimeData.aired.string }}</li>
          <li>
            Length: {{ singleAnimeData.duration }} ({{ singleAnimeData.type }})
          </li>
          <li>Rating {{ singleAnimeData.rating }}</li>

          <li>Genres:</li>
          <ul v-for="genre in singleAnimeData.genres" :key="genre">
            <li>{{ genre.name }}</li>
          </ul>
          INSTEAD OF SEPARATE LI TAGS, MAKE INTO 1 SENTENCE 

          <li>Source: {{ singleAnimeData.source }}</li>

          <li>Studios:</li>
          <ul v-for="studio in singleAnimeData.studios" :key="studio">
            <li>{{ studio.name }}</li>
          </ul>
          INSTEAD OF SEPARATE LI TAGS, MAKE INTO 1 SENTENCE 

          <a
            :href="singleAnimeData.url"
            target="_blank"
            rel="noopener noreferrer"
            id="link-to-mal"
            >Link to MAL</a
          >
        </ul>
      </div>
      <div class="info-right-panel">
        <h2 class="anime-title">{{ singleAnimeData.title }}</h2>
        <p>{{ singleAnimeData.synopsis }}</p>
        <span class="flex-grow-1" id="flex-grow-1"></span>
        <ul class="info-songs" id="info-songs">
          <li>Opening Themes:</li>
          <li v-for="opening in singleAnimeData.opening_themes" :key="opening">
            {{ opening }}
          </li>
          <br />
          <li>Ending Themes:</li>
          <li v-for="ending in singleAnimeData.ending_themes" :key="ending">
            {{ ending }}
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      singleAnimeData: {},
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
        console.log(`https://api.jikan.moe/v3/anime/${this.$route.params.id}`);
        const data = await response.json();
        this.singleAnimeData = data;
        //console.log(data);

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
        alert("Fail");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("../assets/main.scss");
:root {
  --img-width: 22.5rem;
  --container-width: 75vw;
  --top-panel-right-width: calc(var(--container-width) - var(--img-width));
}

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

.top-panel {
  display: flex;
  width: var(--container-width);

  border-radius: 3rem;
}
.anime-img {
  width: var(--img-width);
  height: auto;
  object-fit: cover;
}
.flex-grow-1 {
  flex-grow: 1;
}
.top-panel-right {
  width: var(--top-panel-right-width);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.top-panel-text {
  padding: 3rem;
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
</style>
