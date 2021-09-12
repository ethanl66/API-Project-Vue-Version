<template>
  <div class="seasonals-section display-section">
    <div class="section-text">
      <h2 id="seasonals-header" class="section-header">Top Light Novels</h2>

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
      :topLightAll="topLightAll"
      :topLightSliced="topLightSliced"
    ></component>
  </div>
</template>

<script>
import TopLightCardsAll from "./TopLightCardsAll.vue";
import TopLightCardsSix from "./TopLightCardsSix.vue";

export default {
  name: "topLight",
  props: {},
  components: {
    TopLightCardsAll,
    TopLightCardsSix,
  },
  data() {
    return {
      topLight: [],
      topLightSliced: [],
      topLightAll: [],
      showComponent: TopLightCardsSix,
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
    this.fetchtopLight();
  },
  methods: {
    changeShowComponent: function () {
      if (this.showComponent === TopLightCardsSix) {
        this.showComponent = TopLightCardsAll;
        document.getElementById("seasonals-see-more").innerHTML = "See Less";
      } else {
        this.showComponent = TopLightCardsSix;
        document.getElementById("seasonals-see-more").innerHTML = "See More";
      }
    },
    fetchtopLight: async function () {
      try {
        const response1 = await fetch("https://api.jikan.moe/v3/top/manga/1");
        const rawData1 = await response1.json();
        //console.log(rawData.top);
        const data1 = rawData1.top.filter(function (obj) {
          return obj.type == "Light" || obj.type == "Novel";
        });
        console.log(data1);

        const response2 = await fetch("https://api.jikan.moe/v3/top/manga/2");
        const rawData2 = await response2.json();
        //console.log(rawData.top);
        const data2 = rawData2.top.filter(function (obj) {
          return obj.type == "Light" || obj.type == "Novel";
        });
        console.log(data2);

        const response3 = await fetch("https://api.jikan.moe/v3/top/manga/3");
        const rawData3 = await response3.json();
        //console.log(rawData.top);
        const data3 = rawData3.top.filter(function (obj) {
          return obj.type == "Light" || obj.type == "Novel";
        });
        console.log(data3);

        const response4 = await fetch("https://api.jikan.moe/v3/top/manga/4");
        const rawData4 = await response4.json();
        //console.log(rawData.top);
        const data4 = rawData4.top.filter(function (obj) {
          return obj.type == "Light" || obj.type == "Novel";
        });
        console.log(data4);

        const response5 = await fetch("https://api.jikan.moe/v3/top/manga/5");
        const rawData5 = await response5.json();
        //console.log(rawData.top);
        const data5 = rawData5.top.filter(function (obj) {
          return obj.type == "Light" || obj.type == "Novel";
        });
        console.log(data5);

        const response6 = await fetch("https://api.jikan.moe/v3/top/manga/6");
        const rawData6 = await response6.json();
        //console.log(rawData.top);
        const data6 = rawData6.top.filter(function (obj) {
          return obj.type == "Light" || obj.type == "Novel";
        });
        console.log(data6);

        const response7 = await fetch("https://api.jikan.moe/v3/top/manga/7");
        const rawData7 = await response7.json();
        //console.log(rawData.top);
        const data7 = rawData7.top.filter(function (obj) {
          return obj.type == "Light" || obj.type == "Novel";
        });
        console.log(data7);

        const data = data1.concat(data2, data3, data4, data5, data6, data7);
        console.log(data);

        this.topLight = data;
        //console.log(data);

        if (window.innerWidth > 1300) {
          this.topLightSliced = data.slice(0, 6);
        } else if (window.innerWidth <= 1300 && window.innerWidth > 1000) {
          this.topLightSliced = data.slice(0, 5);
        } else if (window.innerWidth <= 1000 && window.innerWidth > 750) {
          this.topLightSliced = data.slice(0, 4);
        } else if (window.innerWidth <= 750 && window.innerWidth > 500) {
          this.topLightSliced = data.slice(0, 6);
        } else if (window.innerWidth <= 525) {
          this.topLightSliced = data.slice(0, 6);
        } else {
          this.topLightSliced = data.slice(0, 1);
        }

        this.topLightAll = data.slice(0, 48);

        //console.log(this.topLightAll);

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
