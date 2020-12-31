<template>
  <div>
    <p>DotCanvas</p>
    <canvas
      id="dotCanvas"
      ref="dotCanvas"
      :width="height"
      :height="width"
      style="background-color:silver;"
    ></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvas: null,
      context: null,
      imageData: null
    };
  },
  props: {},
  components: {},
  computed: {
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
      this.canvas = this.$refs.dotCanvas;
      this.context = this.canvas.getContext("2d");
      this.imageData = this.context.createImageData(this.width, this.height);
    }
  },
  mounted() {
    this.initCanvas();

    // ============================================
    // DEBUG:
    console.log(this.canvas);
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // ============================================
  }
};
</script>
