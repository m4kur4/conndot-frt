<template>
    <div id="app">
        <h1 class="title">
            top
        </h1>
        <input type="text">
        <form>
          <button v-on:click="addItem">add</button>
        </form>
        <h2 class="subtitle">
            アプリ名
        </h2>
    </div>
</template>

<script>
export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
