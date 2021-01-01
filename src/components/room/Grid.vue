<template>
  <div :id="`grid-${x}-${y}`" class="grid">
    <p>{{ x }}</p>
    <p>{{ y }}</p>
    <p>{{ color }}</p>
  </div>
</template>
<script>
export default {
  props: {
    x: { // x座標
      type: String,
      required: true
    },
    y: { // y座標
      type: String,
      required: true
    },
    color: { // 色(16進数)
      type: String,
      required: true
    },
  },
}
</script>