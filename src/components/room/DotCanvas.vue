<template>
  <div
    class="dot-canvas"
    :style="
      `grid-template-rows: repeat(${canvasProp.pixelRows}, ${canvasProp.pixelPerGrid})px;
        grid-gap: 0 0;`
    "
  >
    <GridRow
      v-for="(grids, x) in canvasData"
      :key="x"
      :grids="grids"
      :x="x"
      :canvasProp="canvasProp"
    />
  </div>
</template>
<script>
import GridRow from "./GridRow";

export default {
  data() {
    return {};
  },
  props: {},
  components: {
    GridRow
  },
  computed: {
    canvas() {
      return this.$store.state.pages.room.canvas;
    },
    canvasData() {
      return this.canvas.data;
    },
    canvasProp() {
      return this.canvas.prop;
    },
    width() {
      return this.canvasProp.pixelColumns * this.canvasProp.pixelPerGrid;
    },
    height() {
      return this.canvasProp.pixelRows * this.canvasProp.pixelPerGrid;
    }
  },
  methods: {
    /**
     * Canvasを初期化する
     */
    initCanvas() {},
    getPositon() {}
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style>
.dot-canvas {
  display: grid;
}
</style>
