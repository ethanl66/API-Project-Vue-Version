<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- <div class="artificial-padding-top"></div> -->
          <h3 class="anime-modal-header">{{ singleAnimeData.title }}</h3>

          <ul class="score-list-modal modal-ul">
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

          <ul class="anime-desc-list-modal modal-ul">
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

          <ul class="studios-list-modal modal-ul">
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

          <ul class="broadcast-list-modal modal-ul">
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

          <!-- <a
            class="link-to-mal"
            :href="singleAnimeData.url"
            target="_blank"
            rel="noopener noreferrer"
            >Link to MAL</a
          > -->

          <button class="close-modal-button" @click="$emit('closeModal')">
            Close
          </button>
          <!-- <div class="artificial-padding-bottom"></div> -->
        </div>

        <!--  -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AnimeStatsModal",
  props: { singleAnimeData: Object },
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //padding: 4rem 0;
}

.modal-container {
  background-color: var(--background-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 1rem;

  padding: 3rem 4rem;
  margin: auto 2rem;

  max-height: 80vh;
  overflow-y: auto;
}
/* .artificial-padding-top {
  width: 100%;
  height: 3rem;
  position: absolute;
  background-color: var(--background-color);
  top: 0;
  left: 0;

  border: 1px solid white;
}
.artificial-padding-bottom {
  width: 100%;
  height: 3rem;
  position: absolute;
  background-color: var(--background-color);
  bottom: 0;
  left: 0;

  border: 1px solid white;
} */

.anime-modal-header {
  margin-bottom: 2.5rem;
}
.modal-ul {
  text-align: left;
  margin-bottom: 2rem;
}
.broadcast-list-modal {
  text-align: center;
  margin: 2rem auto;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  font-size: var(--mobile-small-font-size);
  color: var(--primary-color);
}
.close-modal-button {
  //padding: 0.85em 2rem 0.7em 2rem;

  //background-color: var(--primary-color);
  color: var(--primary-color);
  font-size: var(--mobile-small-font-size);
  //line-height: 1;
  //text-align: center;

  float: right;

  //border: 1px solid white;
}
</style>
