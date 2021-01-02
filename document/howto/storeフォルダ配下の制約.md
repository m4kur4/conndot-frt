- ステートのモジュールを集約する`index.js`をstoreフォルダ配下に置いたところエラー
  - [【メモ】Nuxt.js で「Uncaught Error: [nuxt] store/index.js should export a method that returns a Vuex instance.」](https://hsuzuki.hatenablog.com/entry/2019/05/21/152520)
```
storeの中に new Vuex.Store を返す index.js を作成したらエラー
ファイル名を store/index.js から store/store.js に変えたら直った。
store/index.js はNuxtの中では特別な意味があるファイルなのか。
```