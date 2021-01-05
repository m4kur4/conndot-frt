<template>
  <v-app id="app">
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
<style>
#app .v-application--wrap {
  display: grid;
  grid-template-columns: 600px 1fr;
}
</style>