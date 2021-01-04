## やりたいこと
- v-modelディレクティブとset/getを使ったstateとの双方向バインディング
- PETATAではうまくいっていた実装が動かない
- DevTool上、想定通りのpayloadが送られているしmutationも動いている
```
    color: {
      get() {
        return this.$store.state.pages.room.pallet.color;
      },
      set(val) {
        this.$store.commit('pages/room/updatePallet', val);
      }
    }
```
```
const mutations = {
  updatePallet(state, payload) {
    // Vue.set(state, 'pallet.color', payload)
    state.pallet.color = payload;
  },
}
```
## 結論
- 更新されていた
- ChromeのDevTool上でstateの更新が反映されていないだけ