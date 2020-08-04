<template>
  <div class="home">
    <h1>Home</h1>
    <my-component :message="msg" />
    <input v-model="msg" />
    <button v-if="!!msg" @click="msg = ''">X</button>
  </div>
</template>

<script>
import { ref } from "vue";

import myComponent from "../components/myComponent.vue";

export default {
  name: "Home",
  components: { myComponent },

  setup() {
    const msg = ref("");

    return { msg };
  }
};
</script>
