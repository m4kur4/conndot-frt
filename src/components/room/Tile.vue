<template>
  <div>
    <p>{{ point.x }}</p>
    <p>{{ point.y }}</p>
    <p>{{ color_hex }}</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      point: {
        x: 1,
        y: 2,
      },
      color_hex: 'aa',
      // ---
    };
  },
}
</script>