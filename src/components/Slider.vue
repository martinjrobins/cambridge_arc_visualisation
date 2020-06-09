<template>
  <div class="slider">
    <input type="range" min="1" max="100" value="50" v-model="num" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State2Way } from "vuex-class-state2way";

@Component
export default class Number extends Vue {
  @State2Way("setNum") num!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
