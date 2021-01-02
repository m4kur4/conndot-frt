<template>
  <div :id="`gridrow-${x}`" class="gridrow">
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