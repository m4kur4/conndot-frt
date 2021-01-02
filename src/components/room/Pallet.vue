<template>
  <div>
    <v-color-picker dot-size="25" swatches-max-height="200"></v-color-picker>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      // mainColor: '',
      // subColor: ''
      user_id: null,
      brands: {},
      colors: {
        hex: "#194d33",
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.3,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      }
    };
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
