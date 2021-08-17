<template>
  <div class="character-staff-panel">
    <div
      class="character-staff-div"
      v-for="character in characterStaff"
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
  name: "CharacterCard",
  props: { characterStaff: Object /* characterStaffRest: Object */ },
};
</script>

<style lang="scss">
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
</style>
