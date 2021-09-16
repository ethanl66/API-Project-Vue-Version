<template>
  <p class="warning" v-if="!closeWarning">
    {{ msg }}
    <span class="x-out" @click="closeWarning = 'true'">×</span>
  </p>
</template>

<script>
export default {
  name: "WarningBar",
  props: { msg: String },
  created() {
    setTimeout(() => {
      this.closeWarning = "true";
    }, 10000);
  },
  data() {
    return {
      closeWarning: false,
    };
  },
};
</script>

<style lang="scss">
.warning {
  background-color: red;
  width: 100%;
  padding: 0.5rem 0;
  position: absolute;
  top: 0;
  z-index: 999;
}

.x-out {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(0%, -50%);
  padding: 0 1.5rem;
  font-size: 3rem;
  line-height: 1;
}
</style>
