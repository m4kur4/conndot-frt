<template>
  <div
    :id="`gridrow-${x}`"
    class="grid-row"
    :style="
      `grid-template-columns: repeat(${canvasProp.pixelColumns}, ${canvasProp.pixelPerGrid}px);`
    "
  >
    <Grid
      v-for="(color, y) in grids"
      :key="`${x}-${y}`"
      :x="x"
      :y="y"
      :color="color"
      :style="
        `grid-gap: 0 0;
        width: ${canvasProp.pixelPerGrid}px;
        height: ${canvasProp.pixelPerGrid}px;`
      "
    />
  </div>
</template>
<script>
import Grid from "./Grid";
export default {
  components: {
    Grid
  },
  props: {
    canvasProp: {
      type: Object,
      required: true
    },
    grids: {
      type: Object,
      required: true
    },
    x: {
      type: String,
      required: true
    }
  }
};
</script>
<style>
.grid-row {
  display: grid;
}
</style>
