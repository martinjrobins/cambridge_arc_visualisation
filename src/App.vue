<template>
  <div id="app">
    <Slider />
    <Number />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slider from "./components/Slider.vue";
import Number from "./components/Number.vue";

@Component({
  components: {
    Slider,
    Number,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
