- v-color-picker
- v-appでラップしていないとエラーになるので注意
  - [[Vuetify] Unable to locate target [data-app]](https://qiita.com/kawakami-kazuyoshi/items/5fde4884715a6197c23a)

```vue
<template>
  <v-app id="app">
    <div class="wrapper">
      <MyHeader></MyHeader>
      <MyAside></MyAside>
      <div class="content-wrapper">
        <router-view/>
      </div>
    </div>
  </v-app>
</template>
```
