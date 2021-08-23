<template>
  <div class="character-staff-div-main">
    <section class="character-staff-header-desktop">
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
      <h3 id="character-staff-header">Characters and Staff</h3>
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

    <section class="character-staff-header-mobile">
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
      <character-card :characterStaff="characterStaff" />
      <div v-if="showCharacterStaffRest" class="character-staff-panel">
        <character-card-rest :characterStaffRest="characterStaffRest" />
      </div>
    </section>
  </div>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";
import CharacterCardRest from "./CharacterCardRest.vue";

export default {
  name: "CharacterStaffSection",
  components: { CharacterCard, CharacterCardRest },
  props: { characterStaff: Object, characterStaffRest: Object },
  data() {
    return {
      showCharacterStaffSeeMore: true,
      showCharacterStaffRest: false,
    };
  },
};
</script>

<style lang="scss">
.character-staff-div-main {
  margin-top: 4rem;
}

.character-staff-header-mobile {
  display: none;
}

@media screen and (max-width: 767px) {
  .character-staff-header-desktop {
    display: none;
  }
  .character-staff-header-mobile {
    display: block;
  }
  #character-staff-header {
    font-size: 2.4rem;
  }
}
</style>
