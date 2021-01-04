<template>
  <div>
    <v-color-picker
      :show-swatches="true"
      v-model="color"
      dot-size="25"
      swatches-max-height="200"
    ></v-color-picker>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      // mainColor: '',
      // subColor: ''
    };
  },
  methods: {
    setColor() {
      // 描画ツールに設定されている色を自身に設定する
    },
    setTempColor() {
      // マウスオーバー時の仮色を設定する
    }
  },
  computed: {
    color: {
      get() {
        return this.$store.state.pages.room.pallet.color;
      },
      set(val) {
        // NOTE: Object型のstateで特定の値だけ更新ができない + vuexはペイロードにObject型を推奨
        const payload = {color: val};
        this.$store.commit('pages/room/updatePallet', val);
      }
    }
  }
};
</script>
