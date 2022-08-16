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
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      productList: [{ id: 1 }, { id: 2 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }],
    };
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
