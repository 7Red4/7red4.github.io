<template>
  <h2>{{ msg }}</h2>
  <p>prop: {{ message }}</p>
  <h2>watch me reverse!! :</h2>
  <h2>&nbsp;{{ reverseMsg }}</h2>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    message: String
  },

  setup(props) {
    const msg = "Hello it,s me Vue 3!!";

    const reverseMsg = computed(() => [...props.message].reverse().join(""));

    return {
      msg,
      reverseMsg
    };
  }
};
</script>

<style lang="scss" scoped>
</style>