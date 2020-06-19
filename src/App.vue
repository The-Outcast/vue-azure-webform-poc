<template>
  <div id="app">
    <Index msg="Railpass Aanvraag" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Index from "./components/Index.vue";

@Component({
  components: {
    Index
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

@import "~bootstrap/scss/bootstrap.scss";
</style>
