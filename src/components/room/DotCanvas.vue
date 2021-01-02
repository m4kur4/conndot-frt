<template>
  <div>
    <p>DotCanvas</p>
    <GridRow 
      v-for="(grids, x) in canvasData"
      :key="x"
      :grids="grids"
      :x="x"
    />
  </div>
</template>
<script>
import GridRow from './GridRow';

export default {
  data() {
    return {

    };
  },
  props: {},
  components: {
    GridRow
  },
  computed: {
    canvasData() {
      return this.$store.state.pages.room.canvasData;
    },
    canvasProp() {
      return this.$store.state.pages.room.canvasProp;
    },
    width() {
      return this.canvasProp.width;
    },
    height() {
      return this.canvasProp.height;
    }
  },
  methods: {
    /**
     * Canvasを初期化する
     */
    initCanvas() {

    },
    getPositon() {}
  },
  mounted() {
    this.initCanvas();

  }
};
</script>
