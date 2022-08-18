<template>
  <div class="home">
    <main>
      <div class="container">
        <ProductList />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductList from "@/components/ProductList.vue";
import Footer from "@/components/Footer.vue";
@Options({
  components: {
    ProductList,
    Footer,
  },
})
export default class Home extends Vue {
  msg!: string;
  data() {
    return {
      page: 1,
      limit: 2,
    };
  }
}
</script>
<style lang="scss">
.container {
  max-width: 90%;
  width: 660px;
  box-sizing: border-box;
  margin: auto;
}
.col-3-item {
  width: 25%;
  padding: 0 0.75rem;
  box-sizing: border-box;
}
@media (max-width: 767px) {
  .container {
    max-width:calc(100% - 40px)
  }
}
@media (max-width: 479px) {
  .container {
    max-width:100%
  }
}
</style>
