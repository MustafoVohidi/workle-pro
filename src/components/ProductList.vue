<template>
  <div class="product-list">
    <div class="row-item">
      <div v-for="product in productList" :key="product.id" class="col-6-item">
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  components: {
    ProductItem,
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
  },
  computed: {
    ...mapState({
      productList: (state) => state.productList,
      page: (state) => state.page,
      limit: (state) => state.limit,
    }),
    ...mapGetters({}),
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss">
.row-item {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
