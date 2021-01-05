<template>
  <div
    class="grid"
    :id="`grid-${x}-${y}`"
    :style="`background-color:${color};`"
    @click="setColor"
  >
  </div>
</template>
<script>
export default {
  props: {
    x: {
      // x座標
      type: String,
      required: true
    },
    y: {
      // y座標
      type: String,
      required: true
    },
    color: {
      // 色(16進数)
      type: String,
      required: true
    }
  },
  methods: {
    setColor() {
      // 描画ツールに設定されている色を自身に設定する
      // TODO: propではなくstateを変更する
      const payload = {
        x: this.x,
        y: this.y,
        color: this.$store.state.pages.room.pallet.color
      };
      this.$store.commit("pages/room/updateColor", payload);
    },
    setTempColor() {
      // マウスオーバー時の仮色を設定する
    }
  }
};
</script>
<style>
.grid {
  display: grid;
}
</style>
