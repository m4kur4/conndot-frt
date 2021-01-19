<template>
  <div
    class="dot-canvas"
    :style="
      `display: grid;
      grid-template-rows: repeat(${canvasProp.pixelRows}, ${canvasProp.pixelPerGrid}px);
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
     * キャンバスを指定したサイズで初期化する
     * 
     * @param {int} cntX キャンバスのX軸方向ドット数
     * @param {int} cntY キャンバスのY軸方向ドット数
     */
    initCanvas(x, y) {
      const payload = {
        x: x,
        y: y
      };
      this.$store.dispatch("pages/room/initCanvas", payload);
    },
    getPositon() {}
  },
  mounted() {
    this.initCanvas(12, 12);
  }
};
</script>
<style>

</style>
