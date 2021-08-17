<template>
  <div class="character-staff-panel">
    <div
      class="character-staff-div"
      v-for="character in characterStaffRest"
      :key="character"
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
</template>

<script>
export default {
  name: "CharacterCardRest",
  props: { characterStaffRest: Object },
};
</script>

<style></style>
