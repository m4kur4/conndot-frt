<template>
  <div
    class="grid"
    :id="`grid-${x}-${y}`"
    :style="`background-color:${color};`"
    @click="setColor"
  >
    <p>{{ x }}</p>
    <p>{{ y }}</p>
    <p>{{ color }}</p>
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
      this.color = this.$store.state.pages.room.pallet.color;
    },
    setTempColor() {
      // マウスオーバー時の仮色を設定する
    
    }
  }
};
</script>
