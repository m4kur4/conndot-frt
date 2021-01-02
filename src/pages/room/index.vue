<template>
  <v-app id="app">
    <h1 class="title">
      room
    </h1>
    <DotCanvas />
    <Pallet />
  </v-app>
</template>

<script>
import DotCanvas from "../../components/room/DotCanvas";
import Pallet from "../../components/room/Pallet"
export default {
  components: {
    DotCanvas,
    Pallet
  },
  data() {
    return {};
  },
  computed: {

  }
};
</script>
