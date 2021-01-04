<template>
  <div :id="`gridrow-${x}`" class="grid-row">
    <Grid 
      v-for="(color, y) in grids"
      :key="`${x}-${y}`"
      :x="x"
      :y="y"
      :color="color"
    />
  </div>
</template>
<script>
import Grid from './Grid';
export default {
  components: {
    Grid
  },
  props: {
    grids: {
      type: Object,
      required: true
    },
    x: {
      type: String,
      required: true
    }
  },
}
</script>
<style>
.grid-row {
  display: grid;
}
</style>