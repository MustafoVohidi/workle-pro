<template>
  <div class="home">
    <Home />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "@/componnents/Home";
@Options({
  components: {
    Home,
  },
})
export default class Home extends Vue {}
</script>
