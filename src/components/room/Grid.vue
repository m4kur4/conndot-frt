<template>
  <div
    :id="`grid-${x}-${y}`"
    class="grid"
    :style="`background-color:${color};`"
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
    },
    setTempColor() {
      // マウスオーバー時の仮色を設定する
    }
  }
};
</script>
