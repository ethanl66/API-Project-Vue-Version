<template>
  <div class="whole-page">
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
          <!-- INSTEAD OF SEPARATE LI TAGS, MAKE INTO 1 SENTENCE -->

          <li>Source: {{ singleAnimeData.source }}</li>

          <li>Studios:</li>
          <ul v-for="studio in singleAnimeData.studios" :key="studio">
            <li>{{ studio.name }}</li>
          </ul>
          <!-- INSTEAD OF SEPARATE LI TAGS, MAKE INTO 1 SENTENCE -->

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

      <!--       <p>Rating: {{ singleAnimeData.score }}</p>
      <img :src="singleAnimeData.image_url" alt="" />
      <ul class="card-textarea">
        <li>{{ singleAnimeData.title }}</li>
        <li>Episodes: {{ singleAnimeData.episodes }}</li>
        <li>{{ singleAnimeData.members }} people watching</li>
      </ul> -->
    </div>
  </div>
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

<style scoped>
body,
* {
  text-align: left;
}
a,
li,
p {
  font-size: 1.6rem;
  color: #edf1f5;
}

.whole-page {
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  min-height: 100vh;
}
.back-to-home {
  text-decoration: none;
  font-size: 2rem;
  background-color: red;
  width: 20rem;
  padding: 1rem;
  text-align: center;

  color: white;
}

.anime-info-page {
  display: flex;
  background-color: #191919;
}

.info-right-panel {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.anime-title {
  margin-bottom: 2rem;
}
.left-panel-info {
  padding: 1rem;
}
#link-to-mal {
  color: #7fc3ff;
  text-decoration: none;
}

.flex-grow-1 {
  flex-grow: 1;
}
</style>
